import type { WarmupRoutine } from '../types';

export const warmups: WarmupRoutine[] = [
  {
    dayType: "Haut du corps A",
    duree: "6–8 min",
    exercices: [
      { nom: "Rotations de bras (avant/arrière)", duree: "5 × chaque sens" },
      { nom: "Cercles d'épaules", duree: "10 ×" },
      { nom: "Rotations de cou lentes", duree: "10 ×" },
      { nom: "Pompes sur les genoux", duree: "20 ×" },
      { nom: "Rotations de poignets", duree: "10 ×" },
    ],
  },
  {
    dayType: "Haut du corps B",
    duree: "6–8 min",
    exercices: [
      { nom: "Rotations d'épaules", duree: "10 ×" },
      { nom: "Cercles de coudes", duree: "10 ×" },
      { nom: "Suspension à la barre", duree: "20–30 sec" },
      { nom: "5 tractions partielles lentes", duree: "5 ×" },
      { nom: "Rotations de torse", duree: "10 ×" },
    ],
  },
  {
    dayType: "Bas du corps + Core",
    duree: "6–8 min",
    exercices: [
      { nom: "Sauts sur place", duree: "30 sec" },
      { nom: "Rotations de hanches", duree: "10 × chaque sens" },
      { nom: "Squats sans poids", duree: "10 ×" },
      { nom: "Fentes statiques", duree: "10 × / jambe" },
      { nom: "Rotations de chevilles", duree: "10 × / jambe" },
    ],
  },
  {
    dayType: "Poitrine + Triceps",
    duree: "6–8 min",
    exercices: [
      { nom: "Rotations de bras (avant/arrière)", duree: "5 × chaque sens" },
      { nom: "Cercles d'épaules", duree: "10 ×" },
      { nom: "Pompes sur les genoux (lentes)", duree: "15 ×" },
      { nom: "Rotations de poignets", duree: "10 ×" },
    ],
  },
  {
    dayType: "Dos + Biceps",
    duree: "6–8 min",
    exercices: [
      { nom: "Rotations d'épaules", duree: "10 ×" },
      { nom: "Cercles de coudes", duree: "10 ×" },
      { nom: "Suspension à la barre", duree: "20–30 sec" },
      { nom: "5 tractions partielles lentes", duree: "5 ×" },
      { nom: "Rotations de torse", duree: "10 ×" },
    ],
  },
  {
    dayType: "Jambes + Fessiers",
    duree: "6–8 min",
    exercices: [
      { nom: "Sauts sur place", duree: "30 sec" },
      { nom: "Rotations de hanches", duree: "10 × chaque sens" },
      { nom: "Squats sans poids", duree: "10 ×" },
      { nom: "Fentes statiques", duree: "10 × / jambe" },
      { nom: "Rotations de chevilles", duree: "10 × / jambe" },
    ],
  },
  {
    dayType: "Épaules + Core",
    duree: "6–8 min",
    exercices: [
      { nom: "Grands cercles de bras", duree: "10 ×" },
      { nom: "Rotations d'épaules (arrière)", duree: "10 ×" },
      { nom: "Rotations de torse", duree: "10 ×" },
      { nom: "Élévations latérales sans poids", duree: "10 ×" },
      { nom: "Planche", duree: "20 sec" },
    ],
  },
  {
    dayType: "Full body + Core intense",
    duree: "6–8 min",
    exercices: [
      { nom: "Jumping jacks", duree: "30 sec" },
      { nom: "Squats sans poids", duree: "10 ×" },
      { nom: "Pompes lentes", duree: "5 ×" },
      { nom: "Suspension à la barre", duree: "20 sec" },
      { nom: "Rotations de hanches", duree: "10 ×" },
    ],
  },
  {
    dayType: "Push (Poitrine + Épaules + Triceps)",
    duree: "6–8 min",
    exercices: [
      { nom: "Rotations de bras (avant/arrière)", duree: "5 × chaque sens" },
      { nom: "Cercles d'épaules", duree: "10 ×" },
      { nom: "Pompes sur les genoux (lentes)", duree: "15 ×" },
      { nom: "Rotations de poignets", duree: "10 ×" },
    ],
  },
  {
    dayType: "Pull (Dos + Biceps)",
    duree: "6–8 min",
    exercices: [
      { nom: "Rotations d'épaules", duree: "10 ×" },
      { nom: "Cercles de coudes", duree: "10 ×" },
      { nom: "Suspension à la barre", duree: "20–30 sec" },
      { nom: "5 tractions partielles lentes", duree: "5 ×" },
      { nom: "Rotations de torse", duree: "10 ×" },
    ],
  },
  {
    dayType: "Legs (Jambes)",
    duree: "6–8 min",
    exercices: [
      { nom: "Sauts sur place", duree: "30 sec" },
      { nom: "Rotations de hanches", duree: "10 × chaque sens" },
      { nom: "Squats sans poids", duree: "10 ×" },
      { nom: "Fentes statiques", duree: "10 × / jambe" },
      { nom: "Rotations de chevilles", duree: "10 × / jambe" },
    ],
  },
  {
    dayType: "Haut du corps (Push)",
    duree: "6–8 min",
    exercices: [
      { nom: "Rotations de bras (avant/arrière)", duree: "5 × chaque sens" },
      { nom: "Cercles d'épaules", duree: "10 ×" },
      { nom: "Pompes sur les genoux (lentes)", duree: "15 ×" },
      { nom: "Rotations de poignets", duree: "10 ×" },
    ],
  },
  {
    dayType: "Haut du corps (Pull)",
    duree: "6–8 min",
    exercices: [
      { nom: "Rotations d'épaules", duree: "10 ×" },
      { nom: "Cercles de coudes", duree: "10 ×" },
      { nom: "Suspension à la barre", duree: "20–30 sec" },
      { nom: "5 tractions partielles lentes", duree: "5 ×" },
      { nom: "Rotations de torse", duree: "10 ×" },
    ],
  },
  {
    dayType: "Jambes complètes",
    duree: "6–8 min",
    exercices: [
      { nom: "Sauts sur place", duree: "30 sec" },
      { nom: "Rotations de hanches", duree: "10 × chaque sens" },
      { nom: "Squats sans poids", duree: "10 ×" },
      { nom: "Fentes statiques", duree: "10 × / jambe" },
      { nom: "Rotations de chevilles", duree: "10 × / jambe" },
    ],
  },
];
