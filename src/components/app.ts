import { phases } from '../data/phases';
import { renderProgramme } from './programme';
import { renderModal } from './modal';
import { renderConseils } from './conseils';
import { getAppState, saveAppState, getTodaySession, upsertTodaySession, updatePRIfBeaten } from '../storage/index';
import { newSetRowHtml } from './logbook';
import { todayKey } from '../utils/date';
import type { Exercise, SessionLog, ExerciseLog, SetEntry } from '../types';

type Tab = 'programme' | 'conseils';

interface State {
  phaseIdx: number;
  jourIdx: number;
  tab: Tab;
  modalExIdx: number | null;
  warmupExpanded: boolean;
  showPR: boolean;
}

let state: State = {
  phaseIdx: 0,
  jourIdx: 0,
  tab: 'programme',
  modalExIdx: null,
  warmupExpanded: false,
  showPR: false,
};

function setState(patch: Partial<State>): void {
  Object.assign(state, patch);
  saveAppState({ activePhaseIdx: state.phaseIdx, activeJourIdx: state.jourIdx, activeTab: state.tab });
  render();
}

function getModalEx(): Exercise | null {
  if (state.modalExIdx === null) return null;
  const phase = phases[state.phaseIdx];
  if (!phase) return null;
  const jour = phase.jours[state.jourIdx];
  if (!jour) return null;
  return jour.exercices[state.modalExIdx] ?? null;
}

function renderHeader(): string {
  const tabs: { id: Tab; label: string }[] = [
    { id: 'programme', label: '📋 Programme' },
    { id: 'conseils', label: '💡 Conseils' },
  ];
  return `
    <div class="header">
      <div style="max-width:720px;margin:0 auto">
        <div class="header-sub">Plan annuel · 33 ans · 155 lb · Débutant</div>
        <h1>Entraînement maison</h1>
        <div class="tab-row">
          ${tabs.map(t => `
            <button class="tab-btn" data-action="set-tab" data-tab="${t.id}"
              style="background:${state.tab === t.id ? '#4ade80' : '#1e2330'};color:${state.tab === t.id ? '#0f1117' : '#9ca3af'};font-weight:${state.tab === t.id ? 700 : 400}">
              ${t.label}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderActiveTab(): string {
  if (state.tab === 'programme') {
    return `<div class="content">${renderProgramme(state.phaseIdx, state.jourIdx, state.warmupExpanded)}</div>`;
  }
  return `<div class="content">${renderConseils()}</div>`;
}

function render(): void {
  const modalEx = getModalEx();
  const phase = phases[state.phaseIdx];
  const phaseColor = phase?.couleur ?? '#4ade80';
  const jour = phase?.jours[state.jourIdx];

  document.getElementById('app')!.innerHTML = `
    ${modalEx && phase && jour ? renderModal(modalEx, phaseColor, phase.id, jour.label, state.showPR) : ''}
    ${renderHeader()}
    ${renderActiveTab()}
  `;

  attachHoverEvents();
}

function attachHoverEvents(): void {
  document.querySelectorAll<HTMLElement>('.ex-clickable').forEach(row => {
    const phaseColor = phases[state.phaseIdx]?.couleur ?? '#4ade80';
    row.addEventListener('mouseenter', () => { row.style.background = phaseColor + '10'; });
    row.addEventListener('mouseleave', () => { row.style.background = 'transparent'; });
  });
}

function handleLogbookSave(): void {
  const phase = phases[state.phaseIdx];
  const jour = phase?.jours[state.jourIdx];
  if (!phase || !jour || state.modalExIdx === null) return;

  const ex = jour.exercices[state.modalExIdx];
  if (!ex) return;

  const rows = document.querySelectorAll<HTMLElement>('.logbook-set-row');
  const sets: SetEntry[] = [];
  rows.forEach(row => {
    const w = parseFloat((row.querySelector('.logbook-weight') as HTMLInputElement | null)?.value ?? '');
    const r = parseInt((row.querySelector('.logbook-reps') as HTMLInputElement | null)?.value ?? '');
    if (!isNaN(w) && !isNaN(r) && (w > 0 || r > 0)) {
      sets.push({ weight: w, reps: r });
    }
  });

  if (sets.length === 0) return;

  const today = todayKey();
  const sessionId = `${today}_p${phase.id}_${jour.label}`;
  const existing = getTodaySession(phase.id, jour.label);

  const session: SessionLog = existing ?? {
    id: sessionId,
    phaseId: phase.id,
    dayLabel: jour.label,
    dayType: jour.type,
    exercises: [],
    completedAt: new Date().toISOString(),
  };

  const log: ExerciseLog = { exerciseName: ex.nom, sets };
  const exIdx = session.exercises.findIndex(e => e.exerciseName === ex.nom);
  if (exIdx >= 0) {
    session.exercises[exIdx] = log;
  } else {
    session.exercises.push(log);
  }
  session.completedAt = new Date().toISOString();

  upsertTodaySession(session);
  const isNewPR = updatePRIfBeaten(log, today);

  setState({ showPR: isNewPR });
}

function handleLogbookAddSet(): void {
  const container = document.getElementById('logbook-sets');
  if (!container) return;

  const rows = container.querySelectorAll('.logbook-set-row');
  const num = rows.length + 1;
  const phaseColor = phases[state.phaseIdx]?.couleur ?? '#4ade80';

  const div = document.createElement('div');
  div.innerHTML = newSetRowHtml(num, phaseColor).trim();
  const newRow = div.firstElementChild;
  if (newRow) container.appendChild(newRow);
}

function handleClick(e: Event): void {
  const target = e.target as HTMLElement;
  const el = target.closest<HTMLElement>('[data-action]');
  if (!el) return;

  const action = el.dataset['action'];

  if (action === 'set-tab') {
    const tab = el.dataset['tab'] as Tab;
    if (tab) setState({ tab, modalExIdx: null, showPR: false });
  } else if (action === 'set-phase') {
    const phase = el.dataset['phase'];
    if (phase !== undefined) setState({ phaseIdx: +phase, jourIdx: 0, modalExIdx: null, warmupExpanded: false, showPR: false });
  } else if (action === 'set-jour') {
    const jour = el.dataset['jour'];
    if (jour !== undefined) setState({ jourIdx: +jour, modalExIdx: null, warmupExpanded: false, showPR: false });
  } else if (action === 'toggle-warmup') {
    setState({ warmupExpanded: !state.warmupExpanded });
  } else if (action === 'open-modal') {
    const exIdx = el.dataset['exIdx'];
    if (exIdx !== undefined) setState({ modalExIdx: +exIdx, showPR: false });
  } else if (action === 'modal-close') {
    if (el.classList.contains('modal-overlay') && e.target !== el) return;
    setState({ modalExIdx: null, showPR: false });
  } else if (action === 'logbook-save') {
    handleLogbookSave();
  } else if (action === 'logbook-add-set') {
    handleLogbookAddSet();
  }
}

export function mount(): void {
  const saved = getAppState();
  state = {
    phaseIdx: saved.activePhaseIdx ?? 0,
    jourIdx: saved.activeJourIdx ?? 0,
    tab: (saved.activeTab === 'conseils' ? 'conseils' : 'programme') as Tab,
    modalExIdx: null,
    warmupExpanded: false,
    showPR: false,
  };

  document.getElementById('app')!.addEventListener('click', handleClick);
  render();
}
