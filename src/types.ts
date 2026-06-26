export interface Exercise {
  nom: string;
  series: string;
  reps: string;
  note: string;
}

export interface WorkoutDay {
  label: string;
  type: string;
  emoji: string;
  exercices: Exercise[];
}

export interface Phase {
  id: number;
  label: string;
  duree: string;
  titre: string;
  couleur: string;
  objectif: string;
  jours: WorkoutDay[];
  repos: string[];
  progression: string;
}

export interface ExerciseInstruction {
  muscles: string[];
  equipement: string;
  etapes: string[];
  erreurs: string[];
  tempo: string;
  repos: string;
  conseil: string;
}

export interface WarmupExercise {
  nom: string;
  duree: string;
  note?: string;
}

export interface WarmupRoutine {
  dayType: string;
  duree: string;
  exercices: WarmupExercise[];
}

// ── Logbook (user data) ──────────────────────────────────────────

export interface SetEntry {
  weight: number;
  reps: number;
}

export interface ExerciseLog {
  exerciseName: string;
  sets: SetEntry[];
  note?: string;
}

export interface SessionLog {
  id: string;
  phaseId: number;
  dayLabel: string;
  dayType: string;
  exercises: ExerciseLog[];
  completedAt: string;
}

export interface PersonalRecord {
  exerciseName: string;
  weight: number;
  reps: number;
  date: string;
}

export interface AppState {
  activePhaseIdx: number;
  activeJourIdx: number;
  activeTab: 'programme' | 'progression' | 'historique' | 'conseils';
}
