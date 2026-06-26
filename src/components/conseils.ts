interface Conseil {
  emoji: string;
  titre: string;
  texte: string;
}

const conseilsGeneraux: Conseil[] = [
  { emoji: "🍗", titre: "Protéines", texte: "Visez 1,6–2 g de protéines par kg de poids corporel (130–140 g/jour pour 155 lb). Sources : poulet, oeufs, thon, yogourt grec, légumineuses." },
  { emoji: "😴", titre: "Sommeil", texte: "7–9 heures par nuit. C'est pendant le sommeil que les muscles se reconstruisent. Aucun supplément ne compense un mauvais sommeil." },
  { emoji: "💧", titre: "Hydratation", texte: "2–3 litres d'eau par jour. Augmentez les jours d'entraînement. La déshydratation réduit la performance jusqu'à 15 %." },
  { emoji: "📈", titre: "Journal d'entraînement", texte: "Notez vos charges et reps à chaque séance. Sans mesure, pas de progression consciente." },
  { emoji: "🛑", titre: "Douleur vs Courbatures", texte: "Les courbatures (48–72h après) sont normales. Une douleur aiguë dans une articulation = arrêt immédiat et consultation si persistante." },
  { emoji: "🔄", titre: "Déload", texte: "Toutes les 8–10 semaines, prenez une semaine à 50–60 % du volume habituel. Le corps en a besoin pour se supercompenser." },
];

const objectifsAnnuels: [string, string][] = [
  ["Tractions", "0–1 rep → 8–12 reps"],
  ["Pompes", "5–10 reps → 30+ reps"],
  ["Poids altères (rowing)", "15–20 lb → 40–50 lb"],
  ["Poids altères (curl)", "10–15 lb → 30–35 lb"],
  ["Prise de masse", "+3 à +6 lb de muscle"],
  ["Course continue", "5 min → 35–40 min"],
];

export function renderConseils(): string {
  return `
    <div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.15em;font-family:monospace;margin-bottom:20px">Clés du succès</div>
    ${conseilsGeneraux.map(c => `
      <div class="conseil-card">
        <span class="conseil-emoji">${c.emoji}</span>
        <div>
          <div class="conseil-titre">${c.titre}</div>
          <div class="conseil-text">${c.texte}</div>
        </div>
      </div>
    `).join('')}
    <div class="objectifs-box">
      <div class="objectifs-title">🏆 Objectifs réalistes sur 1 an</div>
      ${objectifsAnnuels.map(([label, valeur]) => `
        <div class="objectif-row">
          <span style="color:#9ca3af">${label}</span>
          <span style="color:#4ade80;font-family:monospace;font-size:13px">${valeur}</span>
        </div>
      `).join('')}
    </div>
  `;
}
