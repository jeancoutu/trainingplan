import type { Phase } from '../types';

export const phases: Phase[] = [
  {
    id: 1, label: "Phase 1", duree: "Semaines 1–12", titre: "Fondations",
    couleur: "#4ade80",
    objectif: "Apprendre les mouvements de base, développer l'habitude d'entraînement, renforcer les articulations et les tendons. Pas encore de progression agressive — la priorité est la technique et la régularité.",
    jours: [
      { label: "Lundi", type: "Haut du corps A", emoji: "💪", exercices: [
        { nom: "Pompes (prise standard)", series: "3", reps: "8–12", note: "Aucun équipement. Corps droit comme une planche." },
        { nom: "Rowing avec altère (un bras)", series: "3", reps: "10–12 / bras", note: "Altères. Genou et main sur une chaise." },
        { nom: "Curl biceps", series: "3", reps: "10–12", note: "Altères. Coudes fixes contre le corps." },
        { nom: "Extension triceps debout", series: "3", reps: "10–12", note: "Altères. Un altère à deux mains derrière la tête." },
        { nom: "Élévations latérales", series: "3", reps: "12–15", note: "Altères légères. Jusqu'à hauteur des épaules seulement." },
      ]},
      { label: "Mercredi", type: "Bas du corps + Core", emoji: "🦵", exercices: [
        { nom: "Squat avec altères (goblet)", series: "3", reps: "12–15", note: "Altères. Un altère vertical contre la poitrine." },
        { nom: "Fentes marchées", series: "3", reps: "10 / jambe", note: "Poids du corps ou altères. Genou avant à 90°." },
        { nom: "Soulevé de terre roumain", series: "3", reps: "12", note: "Altères. Dos droit, poussez les hanches vers l'arrière." },
        { nom: "Gainage (planche)", series: "3", reps: "30 sec", note: "Aucun équipement. Progressez jusqu'à 60 sec." },
        { nom: "Crunchs abdominaux", series: "3", reps: "15–20", note: "Aucun équipement." },
      ]},
      { label: "Vendredi", type: "Haut du corps B", emoji: "🏋️", exercices: [
        { nom: "Traction à la barre (assistée si besoin)", series: "3", reps: "Max ou 5–8", note: "Barre de porte. Si difficile : descente lente (excentrique)." },
        { nom: "Développé épaule assis", series: "3", reps: "10–12", note: "Altères. Poussez vers le haut, pas vers l'avant." },
        { nom: "Pompes déclinées (pieds surélevés)", series: "3", reps: "8–10", note: "Pieds sur chaise ou canapé." },
        { nom: "Curl marteau", series: "3", reps: "10–12", note: "Altères. Pouces vers le haut." },
        { nom: "Gainage latéral", series: "2", reps: "20 sec / côté", note: "Aucun équipement. Progressez jusqu'à 40 sec." },
      ]},
      { label: "Samedi", type: "Cardio léger", emoji: "🏃", exercices: [
        { nom: "Marche rapide ou jogging léger", series: "1", reps: "20–30 min", note: "Tapis roulant. Vous devez pouvoir parler sans être essoufflé." },
      ]},
    ],
    repos: ["Mardi", "Jeudi", "Dimanche"],
    progression: "Augmentez le poids de 2–5 lb dès que vous réussissez le haut de la fourchette de reps lors de deux entraînements consécutifs.",
  },
  {
    id: 2, label: "Phase 2", duree: "Semaines 13–28", titre: "Construction",
    couleur: "#60a5fa",
    objectif: "Augmenter l'intensité et le volume. Introduction de mouvements plus complexes. C'est ici que la masse commence vraiment à se construire. Passer à 5 jours d'entraînement.",
    jours: [
      { label: "Lundi", type: "Poitrine + Triceps", emoji: "💪", exercices: [
        { nom: "Pompes (plusieurs variantes en circuit)", series: "4", reps: "10–15", note: "Standard → larges → serrées. 60 sec repos entre séries." },
        { nom: "Développé couché avec altères", series: "4", reps: "10–12", note: "Altères. Allongé sur le sol." },
        { nom: "Écartés avec altères", series: "3", reps: "12–15", note: "Altères légères. Léger arc dans les coudes." },
        { nom: "Dips sur chaise", series: "3", reps: "10–15", note: "Dos de chaise solide." },
        { nom: "Extension triceps allongé (skull crusher)", series: "3", reps: "12", note: "Altères. Allongé sur le sol." },
      ]},
      { label: "Mardi", type: "Dos + Biceps", emoji: "🏋️", exercices: [
        { nom: "Tractions (traction large)", series: "4", reps: "Max", note: "Barre de porte. Objectif : 8–10 reps propres." },
        { nom: "Rowing altère (deux bras simultanés)", series: "4", reps: "10–12", note: "Altères. Penché à 45°, tirez vers le nombril." },
        { nom: "Pull-over avec altère", series: "3", reps: "12", note: "Altères. Allongé sur le sol." },
        { nom: "Curl biceps alterné", series: "3", reps: "10 / bras", note: "Altères. Rotation du poignet en montant." },
        { nom: "Curl concentré", series: "3", reps: "12 / bras", note: "Altères. Coude appuyé sur la cuisse intérieure." },
      ]},
      { label: "Jeudi", type: "Jambes + Fessiers", emoji: "🦵", exercices: [
        { nom: "Squat bulgare (pied arrière surélevé)", series: "4", reps: "10 / jambe", note: "Altères ou poids du corps. Pied arrière sur chaise." },
        { nom: "Soulevé de terre avec altères", series: "4", reps: "10–12", note: "Altères. Dos plat, poussez le sol vers le bas." },
        { nom: "Hip thrust (pont fessier chargé)", series: "4", reps: "15", note: "Altères sur les hanches. Dos sur le canapé." },
        { nom: "Mollets debout avec altères", series: "3", reps: "20", note: "Altères dans les mains." },
        { nom: "Planche dynamique (mountain climbers)", series: "3", reps: "30 sec", note: "Aucun équipement." },
      ]},
      { label: "Vendredi", type: "Épaules + Core", emoji: "🎯", exercices: [
        { nom: "Développé militaire assis", series: "4", reps: "10–12", note: "Altères. Poussez vers le haut en ligne droite." },
        { nom: "Élévations latérales", series: "4", reps: "15", note: "Altères légères. Contrôle total, pas d'élan." },
        { nom: "Oiseau (élévation arrière penchée)", series: "3", reps: "15", note: "Altères légères. Deltoïdes postérieurs." },
        { nom: "Gainage avec rotation", series: "3", reps: "10 / côté", note: "Aucun équipement." },
        { nom: "Abs roue / crunch vélo", series: "3", reps: "20", note: "Aucun équipement." },
      ]},
      { label: "Samedi", type: "Cardio + Mobilité", emoji: "🏃", exercices: [
        { nom: "Jogging continu", series: "1", reps: "30–40 min", note: "Tapis roulant à 8–9 km/h." },
        { nom: "Étirements complets", series: "1", reps: "10 min", note: "Quadriceps, ischio-jambiers, épaules, pectoraux, mollets." },
      ]},
    ],
    repos: ["Mercredi", "Dimanche"],
    progression: "Augmentez le poids toutes les 1–2 semaines. +5 lb sur les gros mouvements, +2–3 lb sur l'isolation.",
  },
  {
    id: 3, label: "Phase 3", duree: "Semaines 29–44", titre: "Intensification",
    couleur: "#f97316",
    objectif: "Augmenter la charge progressivement. Introduction de techniques d'intensification (séries descendantes, temps sous tension). Maintien du cardio pour la santé cardiovasculaire.",
    jours: [
      { label: "Lundi", type: "Push (Poitrine + Épaules + Triceps)", emoji: "💪", exercices: [
        { nom: "Pompes lestées (sac à dos chargé)", series: "4", reps: "8–10", note: "Ajoutez du poids progressivement dans le sac." },
        { nom: "Développé incliné avec altères", series: "4", reps: "10", note: "Dos incliné à ~45° sur coussins empilés." },
        { nom: "Développé militaire debout", series: "4", reps: "10", note: "Altères. Technique stricte." },
        { nom: "Élévations latérales en série descendante", series: "3", reps: "12→10→8", note: "Diminuez le poids sans repos entre chaque palier." },
        { nom: "Dips lestés sur chaise", series: "3", reps: "10–12", note: "Sac à dos sur les épaules." },
      ]},
      { label: "Mardi", type: "Pull (Dos + Biceps)", emoji: "🏋️", exercices: [
        { nom: "Tractions (traction pronation)", series: "5", reps: "6–10", note: "Barre de porte. Série 5 : max de reps." },
        { nom: "Chin-ups (traction supination)", series: "3", reps: "Max", note: "Prise sous-main. Excellent pour le biceps." },
        { nom: "Rowing lourd avec altères", series: "4", reps: "8–10", note: "Temps sous tension : 2s monter, 2s descendre." },
        { nom: "Curl biceps (tempo lent)", series: "4", reps: "10", note: "2s monter, 3s descendre." },
        { nom: "Curl incliné (étirement maximal)", series: "3", reps: "12", note: "Bras pendus à 45° pour étirer le biceps." },
      ]},
      { label: "Jeudi", type: "Legs (Jambes)", emoji: "🦵", exercices: [
        { nom: "Squat bulgare chargé", series: "4", reps: "8–10 / jambe", note: "Altères lourdes. Contrôle total." },
        { nom: "Soulevé de terre roumain lourd", series: "4", reps: "8–10", note: "Altères lourdes. Étirement complet des ischio." },
        { nom: "Hip thrust chargé", series: "4", reps: "12–15", note: "Contraction maximale en haut." },
        { nom: "Squat sauté (Jump squat)", series: "3", reps: "10", note: "Poids du corps. Puissance explosive." },
        { nom: "Mollets sur une jambe", series: "4", reps: "15 / jambe", note: "Altères. Amplitude complète." },
      ]},
      { label: "Vendredi", type: "Full body + Core intense", emoji: "🎯", exercices: [
        { nom: "Circuit : Pompes → Traction → Squat altères", series: "4", reps: "10–10–15", note: "Sans repos entre les 3 exercices. 90s repos entre circuits." },
        { nom: "Gainage (planche 3D)", series: "3", reps: "45 sec", note: "Planche frontale → latérale gauche → latérale droite." },
        { nom: "Crunch inversé", series: "3", reps: "15–20", note: "Bas des abdominaux." },
        { nom: "Russian twist avec altère", series: "3", reps: "20 rotations", note: "Altères légères." },
      ]},
      { label: "Samedi", type: "Cardio HIIT", emoji: "🏃", exercices: [
        { nom: "Intervals tapis roulant", series: "1", reps: "25 min", note: "10× (45s sprint 11–13km/h / 90s marche). +échauffement et retour au calme." },
      ]},
    ],
    repos: ["Mercredi", "Dimanche"],
    progression: "À cette phase, jouez sur le tempo, les séries descendantes, et le rest-pause pour continuer à progresser.",
  },
  {
    id: 4, label: "Phase 4", duree: "Semaines 45–52", titre: "Consolidation",
    couleur: "#a78bfa",
    objectif: "Ancrer les gains, peaufiner les faiblesses, établir un programme maintenable à vie. Évaluer les progrès de l'année.",
    jours: [
      { label: "Lundi", type: "Haut du corps (Push)", emoji: "💪", exercices: [
        { nom: "Pompes lestées (sac à dos chargé)", series: "4", reps: "Max", note: "Test de force : combien en un an ?" },
        { nom: "Développé couché avec altères", series: "4", reps: "8–12", note: "Charges maximales de la Phase 3." },
        { nom: "Développé militaire assis", series: "3", reps: "10", note: "Altères lourdes." },
        { nom: "Élévations latérales en série descendante", series: "3", reps: "12→10→8", note: "Technique Phase 3." },
        { nom: "Dips lestés sur chaise", series: "3", reps: "Max", note: "Test de force." },
      ]},
      { label: "Mardi", type: "Haut du corps (Pull)", emoji: "🏋️", exercices: [
        { nom: "Tractions (traction pronation)", series: "5", reps: "Max", note: "Test annuel. Comparez avec semaine 1 !" },
        { nom: "Rowing lourd avec altères", series: "4", reps: "8–10", note: "Charges maximales maîtrisées." },
        { nom: "Curl biceps (tempo lent)", series: "4", reps: "8–10", note: "Charges maximales maîtrisées." },
        { nom: "Face pull avec altères (debout penché)", series: "3", reps: "15", note: "Santé des épaules. Tirez vers le visage, coudes hauts." },
      ]},
      { label: "Jeudi", type: "Jambes complètes", emoji: "🦵", exercices: [
        { nom: "Squat bulgare chargé", series: "4", reps: "8 / jambe", note: "Charges maximales de l'année." },
        { nom: "Soulevé de terre roumain lourd", series: "4", reps: "8–10", note: "Altères lourdes." },
        { nom: "Hip thrust chargé", series: "4", reps: "12", note: "Contraction maximale." },
        { nom: "Mollets sur une jambe", series: "4", reps: "15 / jambe", note: "Technique Phase 3." },
      ]},
      { label: "Samedi", type: "Cardio + Bilan", emoji: "🏃", exercices: [
        { nom: "Jogging continu", series: "1", reps: "30–40 min", note: "Rythme confortable. Réfléchissez à l'année écoulée." },
        { nom: "Étirements complets", series: "1", reps: "15 min", note: "Corps entier. Récompensez-vous pour votre régularité !" },
      ]},
    ],
    repos: ["Mercredi", "Vendredi", "Dimanche"],
    progression: "Bilan annuel : notez vos charges max, vos tractions max, et votre temps de course. Ce sont vos nouvelles bases pour l'année 2.",
  },
];
