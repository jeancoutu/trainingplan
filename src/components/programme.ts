import { phases } from '../data/phases';
import { instructions } from '../data/instructions';
import { renderWarmup } from './warmup';

export function renderProgramme(phaseIdx: number, jourIdx: number, warmupExpanded: boolean): string {
  const phase = phases[phaseIdx];
  if (!phase) return '';
  const jour = phase.jours[jourIdx];
  if (!jour) return '';
  const c = phase.couleur;

  return `
    <div class="phase-grid">
      ${phases.map((p, i) => `
        <button class="phase-btn" data-action="set-phase" data-phase="${i}"
          style="border-color:${phaseIdx === i ? p.couleur : '#2a2f3f'};background:${phaseIdx === i ? p.couleur + '18' : '#1a1f2e'}">
          <div class="phase-btn-label" style="color:${p.couleur}">${p.label}</div>
          <div class="phase-btn-titre" style="color:${phaseIdx === i ? p.couleur : '#c9d1e0'}">${p.titre}</div>
          <div class="phase-btn-duree">${p.duree}</div>
        </button>
      `).join('')}
    </div>

    <div class="objectif-box" style="border-left-color:${c}">
      <div class="objectif-label" style="color:${c}">Objectif</div>
      <div class="objectif-text">${phase.objectif}</div>
    </div>

    <div class="day-row">
      ${phase.jours.map((j, i) => `
        <button class="day-btn" data-action="set-jour" data-jour="${i}"
          style="border-color:${jourIdx === i ? c : '#2a2f3f'};background:${jourIdx === i ? c + '20' : '#1a1f2e'};color:${jourIdx === i ? c : '#9ca3af'}">
          ${j.emoji} ${j.label}
        </button>
      `).join('')}
    </div>

    <div class="hint">
      <span style="font-size:14px">👆</span>
      <span>Appuyez sur un exercice pour voir les instructions détaillées</span>
    </div>

    ${renderWarmup(jour.type, c, warmupExpanded)}

    <div class="ex-card" style="border-color:${c}30">
      <div class="ex-card-header" style="background:linear-gradient(135deg,${c}20,${c}08);border-bottom:1px solid ${c}25">
        <div class="ex-card-phase-label" style="color:${c}">${jour.label} · ${phase.titre}</div>
        <div class="ex-card-title">${jour.emoji} ${jour.type}</div>
      </div>
      <div class="ex-list">
        ${jour.exercices.map((ex, i) => {
          const hasInfo = ex.nom in instructions;
          return `
            <div class="ex-row${hasInfo ? ' ex-clickable' : ''}"
              ${hasInfo ? `data-action="open-modal" data-ex-idx="${i}"` : ''}
              style="border-bottom:${i < jour.exercices.length - 1 ? '1px solid #2a2f3f' : 'none'};cursor:${hasInfo ? 'pointer' : 'default'}">
              <div class="ex-row-inner">
                <div style="flex:1">
                  <div class="ex-name" style="color:${hasInfo ? '#f0f4ff' : '#c9d1e0'}">
                    ${ex.nom}
                    ${hasInfo ? `<span class="ex-badge" style="color:${c};border:1px solid ${c}50">DÉTAILS</span>` : ''}
                  </div>
                  <div class="ex-note">💬 ${ex.note}</div>
                </div>
                <div class="ex-tags">
                  <span class="tag-series" style="border:1px solid ${c}40;color:${c}">${ex.series}×</span>
                  <span class="tag-reps">${ex.reps}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="bottom-grid">
      <div class="repos-box">
        <span style="font-size:16px">🛌</span>
        <div>
          <div class="repos-label">Repos</div>
          <div class="repos-val">${phase.repos.join(', ')}</div>
        </div>
      </div>
      <div class="prog-box">
        <div class="prog-label">📈 Progression</div>
        <div class="prog-text">${phase.progression}</div>
      </div>
    </div>
  `;
}
