import { getTodaySession, getSessions, getPR } from '../storage/index';
import { todayKey } from '../utils/date';
import type { Exercise, ExerciseLog } from '../types';

function getLastLog(exerciseName: string, phaseId: number, dayLabel: string): ExerciseLog | null {
  const todayId = `${todayKey()}_p${phaseId}_${dayLabel}`;
  const sessions = getSessions()
    .filter(s => s.id !== todayId)
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt));
  for (const session of sessions) {
    const log = session.exercises.find(e => e.exerciseName === exerciseName);
    if (log) return log;
  }
  return null;
}

export function newSetRowHtml(num: number, phaseColor: string): string {
  return `
    <div class="logbook-set-row" style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <span class="logbook-set-num" style="color:#6b7280;font-size:12px;font-family:monospace;min-width:20px">${num}</span>
      <input class="logbook-weight" type="number" min="0" step="2.5" placeholder="lbs" value=""
        style="background:#13161f;border:1px solid ${phaseColor}40;color:#f0f4ff;padding:7px 10px;border-radius:7px;width:80px;font-size:14px;font-family:monospace;outline:none" />
      <span style="color:#6b7280;font-size:12px">×</span>
      <input class="logbook-reps" type="number" min="0" step="1" placeholder="reps" value=""
        style="background:#13161f;border:1px solid ${phaseColor}40;color:#f0f4ff;padding:7px 10px;border-radius:7px;width:70px;font-size:14px;font-family:monospace;outline:none" />
      <span style="color:#9ca3af;font-size:12px">reps</span>
    </div>
  `;
}

function setRowHtml(num: number, weight: string, reps: string, phaseColor: string): string {
  return `
    <div class="logbook-set-row" style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <span class="logbook-set-num" style="color:#6b7280;font-size:12px;font-family:monospace;min-width:20px">${num}</span>
      <input class="logbook-weight" type="number" min="0" step="2.5" placeholder="lbs" value="${weight}"
        style="background:#13161f;border:1px solid ${phaseColor}40;color:#f0f4ff;padding:7px 10px;border-radius:7px;width:80px;font-size:14px;font-family:monospace;outline:none" />
      <span style="color:#6b7280;font-size:12px">×</span>
      <input class="logbook-reps" type="number" min="0" step="1" placeholder="reps" value="${reps}"
        style="background:#13161f;border:1px solid ${phaseColor}40;color:#f0f4ff;padding:7px 10px;border-radius:7px;width:70px;font-size:14px;font-family:monospace;outline:none" />
      <span style="color:#9ca3af;font-size:12px">reps</span>
    </div>
  `;
}

export function renderLogbook(
  ex: Exercise,
  phaseId: number,
  dayLabel: string,
  phaseColor: string,
  showPR: boolean,
): string {
  const today = todayKey();
  const todaySession = getTodaySession(phaseId, dayLabel);
  const todayLog = todaySession?.exercises.find(e => e.exerciseName === ex.nom) ?? null;
  const lastLog = getLastLog(ex.nom, phaseId, dayLabel);
  const pr = getPR(ex.nom);

  const seriesCount = parseInt(ex.series) || 3;

  // Use today's logged sets if already saved, else pre-fill from last session
  const setsToRender = todayLog
    ? todayLog.sets.map((s, i) => setRowHtml(i + 1, String(s.weight), String(s.reps), phaseColor))
    : Array.from({ length: seriesCount }, (_, i) => {
        const last = lastLog?.sets[i] ?? lastLog?.sets[0];
        return setRowHtml(
          i + 1,
          last ? String(last.weight) : '',
          last ? String(last.reps) : '',
          phaseColor,
        );
      });

  const lastRef = lastLog
    ? `<div style="color:#6b7280;font-size:12px;margin-bottom:12px;font-family:monospace">
        Dernière séance : <span style="color:#9ca3af">${lastLog.sets.map(s => `${s.weight}lbs×${s.reps}`).join(' / ')}</span>
       </div>`
    : '';

  const prRef = pr
    ? `<div style="color:#6b7280;font-size:12px;margin-bottom:12px;font-family:monospace">
        Record : <span style="color:${phaseColor};font-weight:600">${pr.weight} lbs × ${pr.reps} reps</span>
        <span style="color:#6b7280"> (${pr.date})</span>
       </div>`
    : '';

  const prBadge = showPR
    ? `<div style="background:${phaseColor}20;border:1px solid ${phaseColor}60;color:${phaseColor};padding:9px 14px;border-radius:8px;font-size:13px;font-weight:700;margin-top:10px;text-align:center">
        🏆 Nouveau record personnel !
       </div>`
    : '';

  const savedBadge = todayLog && !showPR
    ? `<div style="color:#4ade8090;font-size:12px;text-align:center;margin-top:8px;font-family:monospace">✓ Séance sauvegardée</div>`
    : '';

  return `
    <div class="logbook-section" style="border-top:1px solid #2a2f3f;margin-top:20px;padding-top:20px">
      <div class="section-label">Logger cette séance</div>
      <div style="color:#6b7280;font-size:12px;font-family:monospace;margin-bottom:10px">${today}</div>
      ${prRef}${lastRef}
      <div id="logbook-sets">
        ${setsToRender.join('')}
      </div>
      <button class="logbook-add-btn" data-action="logbook-add-set"
        style="background:transparent;border:1px dashed #3a4060;color:#6b7280;padding:7px 0;border-radius:7px;cursor:pointer;font-size:13px;margin-top:4px;width:100%;font-family:inherit">
        + Ajouter une série
      </button>
      ${prBadge}${savedBadge}
      <button class="logbook-save-btn" data-action="logbook-save"
        style="background:${phaseColor};color:#0f1117;border:none;padding:12px 0;border-radius:9px;font-size:15px;font-weight:700;cursor:pointer;width:100%;margin-top:12px;font-family:inherit">
        Sauvegarder
      </button>
    </div>
  `;
}
