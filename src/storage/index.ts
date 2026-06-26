import type { SessionLog, PersonalRecord, ExerciseLog, AppState } from '../types';

const KEYS = {
  sessions: 'workout_sessions',
  records:  'workout_prs',
  appState: 'workout_ui_state',
} as const;

function load<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function save(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}

// ── Sessions ──────────────────────────────────────────────────────

export function getSessions(): SessionLog[] {
  return load<SessionLog[]>(KEYS.sessions) ?? [];
}

export function getSession(id: string): SessionLog | null {
  return getSessions().find(s => s.id === id) ?? null;
}

export function saveSession(session: SessionLog): void {
  const sessions = getSessions().filter(s => s.id !== session.id);
  sessions.push(session);
  save(KEYS.sessions, sessions);
}

export function deleteSession(id: string): void {
  save(KEYS.sessions, getSessions().filter(s => s.id !== id));
}

export function getTodaySession(phaseId: number, dayLabel: string): SessionLog | null {
  const today = new Date().toISOString().slice(0, 10);
  const id = `${today}_p${phaseId}_${dayLabel}`;
  return getSession(id);
}

export function upsertTodaySession(session: SessionLog): void {
  saveSession(session);
}

// ── Personal Records ─────────────────────────────────────────────

export function getPRs(): PersonalRecord[] {
  return load<PersonalRecord[]>(KEYS.records) ?? [];
}

export function getPR(exerciseName: string): PersonalRecord | null {
  return getPRs().find(p => p.exerciseName === exerciseName) ?? null;
}

export function updatePRIfBeaten(log: ExerciseLog, date: string): boolean {
  const maxWeight = Math.max(...log.sets.map(s => s.weight));
  const existing = getPR(log.exerciseName);
  if (existing && existing.weight >= maxWeight) return false;

  const bestSet = log.sets.find(s => s.weight === maxWeight);
  if (!bestSet) return false;

  const prs = getPRs().filter(p => p.exerciseName !== log.exerciseName);
  prs.push({ exerciseName: log.exerciseName, weight: maxWeight, reps: bestSet.reps, date });
  save(KEYS.records, prs);
  return true;
}

// ── UI State ──────────────────────────────────────────────────────

export function getAppState(): Partial<AppState> {
  return load<Partial<AppState>>(KEYS.appState) ?? {};
}

export function saveAppState(state: Partial<AppState>): void {
  save(KEYS.appState, state);
}
