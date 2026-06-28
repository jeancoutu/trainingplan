import { warmups } from '../data/warmups';

export function renderWarmup(dayType: string, phaseColor: string, expanded: boolean): string {
  const routine = warmups.find(w => w.dayType === dayType);
  if (!routine) return '';

  return `
    <div class="warmup-card" style="border-color:${phaseColor}30">
      <button class="warmup-header" data-action="toggle-warmup" aria-expanded="${expanded}">
        <div class="warmup-header-left">
          <span class="warmup-icon">🔥</span>
          <span class="warmup-title">Échauffement</span>
          <span class="warmup-duration" style="color:${phaseColor}">${routine.duree}</span>
        </div>
        <span class="warmup-chevron" style="color:${phaseColor}">${expanded ? '▲' : '▼'}</span>
      </button>
      ${expanded ? `
        <div class="warmup-body">
          ${routine.exercices.map(ex => `
            <div class="warmup-ex-row">
              <span class="warmup-ex-name">${ex.nom}</span>
              <span class="warmup-ex-dur" style="color:${phaseColor}">${ex.duree}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}
