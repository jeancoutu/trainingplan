import { instructions } from '../data/instructions';
import type { Exercise } from '../types';

export function renderModal(ex: Exercise, phaseColor: string): string {
  const info = instructions[ex.nom];
  if (!info) return '';

  const c = phaseColor;

  return `
    <div class="modal-overlay" data-action="modal-close">
      <div class="modal-sheet">
        <div class="modal-handle-row"><div class="modal-handle"></div></div>
        <div class="modal-header">
          <div class="modal-header-inner">
            <div style="flex:1">
              <div class="modal-sub" style="color:${c}">Instructions détaillées</div>
              <div class="modal-title">${ex.nom}</div>
              <div class="modal-tags">
                <span style="background:#252b3b;border:1px solid ${c}40;color:${c};padding:2px 9px;border-radius:5px;font-size:11px;font-family:monospace">${ex.series} séries · ${ex.reps}</span>
                <span style="background:#252b3b;border:1px solid #3a4060;color:#9ca3af;padding:2px 9px;border-radius:5px;font-size:11px">${info.equipement}</span>
              </div>
            </div>
            <button class="modal-close" data-action="modal-close">✕</button>
          </div>
        </div>
        <div class="modal-body">
          <div style="margin-bottom:17px">
            <div class="section-label">Muscles ciblés</div>
            <div class="muscles-row">
              ${info.muscles.map(m => `<span class="muscle-tag" style="background:${c}15;border:1px solid ${c}35;color:${c}">${m}</span>`).join('')}
            </div>
          </div>
          <div class="etapes-list">
            <div class="section-label">Comment faire</div>
            ${info.etapes.map((e, i) => `
              <div class="etape-row">
                <div class="etape-num" style="background:${c}20;border:1px solid ${c}50;color:${c}">${i + 1}</div>
                <div class="etape-text">${e}</div>
              </div>
            `).join('')}
          </div>
          <div class="tempo-grid">
            <div class="tempo-box">
              <div class="tempo-label">Tempo</div>
              <div class="tempo-val">${info.tempo}</div>
            </div>
            <div class="tempo-box">
              <div class="tempo-label">Repos</div>
              <div class="tempo-val">${info.repos}</div>
            </div>
          </div>
          <div class="erreurs-list">
            <div class="section-label">⚠️ Erreurs à éviter</div>
            ${info.erreurs.map(e => `
              <div class="erreur-row">
                <span class="erreur-x">✕</span>
                <span class="erreur-text">${e}</span>
              </div>
            `).join('')}
          </div>
          <div class="conseil-box" style="background:${c}10;border:1px solid ${c}30">
            <div class="conseil-box-label" style="color:${c}">💡 Conseil</div>
            <div class="conseil-box-text">${info.conseil}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
