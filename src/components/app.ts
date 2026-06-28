import { phases } from '../data/phases';
import { renderProgramme } from './programme';
import { renderModal } from './modal';
import { renderConseils } from './conseils';
import { getAppState, saveAppState } from '../storage/index';
import type { Exercise } from '../types';

type Tab = 'programme' | 'conseils';

interface State {
  phaseIdx: number;
  jourIdx: number;
  tab: Tab;
  modalExIdx: number | null;
  warmupExpanded: boolean;
}

let state: State = {
  phaseIdx: 0,
  jourIdx: 0,
  tab: 'programme',
  modalExIdx: null,
  warmupExpanded: false,
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
  const phaseColor = phases[state.phaseIdx]?.couleur ?? '#4ade80';

  document.getElementById('app')!.innerHTML = `
    ${modalEx ? renderModal(modalEx, phaseColor) : ''}
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

function handleClick(e: Event): void {
  const target = e.target as HTMLElement;
  const el = target.closest<HTMLElement>('[data-action]');
  if (!el) return;

  const action = el.dataset['action'];

  if (action === 'set-tab') {
    const tab = el.dataset['tab'] as Tab;
    if (tab) setState({ tab, modalExIdx: null });
  } else if (action === 'set-phase') {
    const phase = el.dataset['phase'];
    if (phase !== undefined) setState({ phaseIdx: +phase, jourIdx: 0, modalExIdx: null, warmupExpanded: false });
  } else if (action === 'set-jour') {
    const jour = el.dataset['jour'];
    if (jour !== undefined) setState({ jourIdx: +jour, modalExIdx: null, warmupExpanded: false });
  } else if (action === 'toggle-warmup') {
    setState({ warmupExpanded: !state.warmupExpanded });
  } else if (action === 'open-modal') {
    const exIdx = el.dataset['exIdx'];
    if (exIdx !== undefined) setState({ modalExIdx: +exIdx });
  } else if (action === 'modal-close') {
    if (el.classList.contains('modal-overlay') && e.target !== el) return;
    setState({ modalExIdx: null });
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
  };

  document.getElementById('app')!.addEventListener('click', handleClick);
  render();
}
