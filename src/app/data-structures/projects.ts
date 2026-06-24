// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NonEmptyString = `${any}${string}`

export interface ProjectDetails {
  name: string;
  description: string;
  preview: string; // TODO : Lors de l'ajout des images, remplacer par NonEmptyString
  url: NonEmptyString;
  techs: NonEmptyString[]
}

export const PROJECT_LIST: ProjectDetails[] = [
  {
    name: 'AvionWars',
    description: 'Un mod Minecraft 1.12.2 implémentant le jeu de capture du drapeau (Capture The Flag, CTF) dans Minecraft.',
    preview: '',
    url: 'https://github.com/Fred-Redstone-2/AvionWars',
    techs: [
      'Java',
    ],
  },
  {
    name: 'SmartSounds (Séquences sonores)',
    description: 'Une application Python permettant de générer des partitions de musique selon des paramètres prédéfinis.',
    preview: './assets/SmartSounds.png',
    url: 'https://github.com/Fred-Redstone-2/SmartSounds',
    techs: [
      'Python',
    ],
  },
];
