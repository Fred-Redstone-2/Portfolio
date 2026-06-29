import { ContactInfo, ContactKeys } from './contact';
import { ResumeData } from './resume';
import { TechSkillCategories, TechSkills } from './tech-skills';

export const CONTACTS: Record<ContactKeys, ContactInfo> = {
  [ContactKeys.Email]: {
    name: 'Courriel',
    display: 'frederic.mac-conaill@polymtl.ca',
    url: 'mailto:frederic.mac-conaill@polymtl.ca',
  },
  [ContactKeys.GitHub]: {
    name: 'GitHub',
    display: 'github.com/Fred-Redstone-2',
    url: 'https://github.com/Fred-Redstone-2',
  },
  [ContactKeys.LinkedIn]: {
    name: 'LinkedIn',
    display: 'linkedin.com/in/frédéric-mac-conaill',
    url: 'https://www.linkedin.com/in/frédéric-mac-conaill-771182374/',
  },
};

const TECH_SKILLS: Record<TechSkillCategories, TechSkills[][]> = {
  [TechSkillCategories.ProgLanguages]: [
    [TechSkills.Java, TechSkills.Python, TechSkills.C, TechSkills.Cpp],
    [TechSkills.Html, TechSkills.Css, TechSkills.Js, TechSkills.Ts, TechSkills.Mongo],
  ],
  [TechSkillCategories.Frameworks]: [
    [TechSkills.Angular, TechSkills.React],
    [TechSkills.NodeJs, TechSkills.NestJs, TechSkills.Karma, TechSkills.Jasmine, TechSkills.Express, TechSkills.NestJs],
    [TechSkills.Qt, TechSkills.JavaFx],
  ],
  [TechSkillCategories.Tools]: [
    [TechSkills.Git, TechSkills.CiCd, TechSkills.M365],
  ],
  [TechSkillCategories.Ide]: [
    [TechSkills.VsCode, TechSkills.Vs, TechSkills.PyCharm, TechSkills.IntelliJ, TechSkills.Eclipse],
  ],
};

export const RESUME: ResumeData = {
  profile: 'Étudiant motivé en **génie logiciel** à Polytechnique Montréal, curieux, autodidacte et créatif.\n' +
    'Passionné par la **programmation**, la **conception de logiciels** et la résolution de problèmes.',
  techSkills: TECH_SKILLS,
  education: [
    {
      school: 'Polytechnique Montréal',
      degree: 'Baccalauréat en génie logiciel',
      date: '2024-présent',
    },
    {
      school: 'Collège de Bois-de-Boulogne',
      degree: 'DEC en Sciences informatiques et mathématiques',
      date: '2022-2024',
    },
  ],
  experience: [
    {
      role: 'Stagiaire en TI',
      company: 'École de technologie supérieure (ÉTS)',
      date: 'Été 2025',
      tasks: [
        "Programmer en Python ma partie du système en suivant les normes de codage de l'ÉTS",
        "Travailler en collaboration avec deux collègues pour bien se coordonner dans l'implémentation du projet",
        "Rédiger avec précision et minutie un rapport sur l'avancement du projet et de ma contribution dans celui-ci",
        "Construire un diagramme de séquence de l'utilisation du produit selon les normes",
      ],
    },
    {
      role: 'Technicien en réparation de téléphones et tablettes',
      company: 'MK3 Mobile Mascouche',
      date: 'Été 2022',
      tasks: [
        "Faire preuve de délicatesse, d'attention et de rigueur dans la méthode et démontage des appareils",
        'Analyser les problèmes des appareils des clients pour adopter la meilleure approche de réparation',
        'Maintenance des appareils en les décontaminant ou en changeant les pièces défectueuses',
      ],
    },
  ],
  projects: [
    {
      title: 'Syndicat du Sprite à la ferme',
      description: 'Application Web de RPG tactique tour par tour avec mouvement, sanctuaires, combat et statistiques',
      date: '2026',
      techs: [
        TechSkills.Html, TechSkills.Css, TechSkills.Ts,
        TechSkills.Angular, TechSkills.Karma, TechSkills.Jasmine,
        TechSkills.NestJs, TechSkills.Jest, TechSkills.Git, TechSkills.CiCd,
      ],
      highlights: [
        'Être le gestionnaire de projet de mon équipe et assurer la répartition des tâches',
        'Structurer le code selon des composants et services réutilisables',
        "Collaborer avec d'autres étudiants en équipe de 6 pour accomplir toutes les tâches du projet",
        'Comprendre, modifier et utiliser des pipelines de vérification (CI/CD)',
      ],
      preview: './assets/SyndSpriteFerme.png',
      url: '',
    },
    {
      title: 'AvionWars',
      description: 'Mod Minecraft 1.12.2 implémentant le mode de jeu de capture du drapeau (Capture the Flag, CTF)',
      date: '2025',
      techs: [TechSkills.Java, TechSkills.Git],
      highlights: [
        'Apprendre de manière autodidacte le développement de mod Minecraft',
        "Reproduire les fonctionnalités selon le gameplay d'une vidéo YouTube",
        "Utiliser l'API de modding de Minecraft Forge",
        'Concevoir et implémenter des nouveaux blocs et commandes avec leur logique de jeu',
      ],
      preview: './assets/AvionWars.jpg',
      url: 'https://github.com/Fred-Redstone-2/AvionWars',
    },
    {
      title: 'SmartSounds (Séquences sonores)',
      description: 'Application permettant de générer des partitions de musique selon des paramètres prédéfinis',
      date: '2024',
      techs: [TechSkills.Python, TechSkills.Git],
      highlights: [
        'Utiliser une librairie intégrant des concepts musicaux en Python',
        'Utiliser mes connaissances en musique pour créer des partitions valides',
        "Peaufiner l'interface utilisateur pour qu'elle soit attrayante",
        'Travailler en équipe pour bien se séparer les tâches et interagir entre équipiers pour garder une bonne ambiance de travail',
      ],
      preview: './assets/SmartSounds.png',
      url: 'https://github.com/Fred-Redstone-2/SmartSounds',
    },
  ],
  languages: [
    {
      name: 'Français',
      level: 'Langue maternelle',
    },
    {
      name: 'Anglais',
      level: 'Avancé (parlé et écrit)',
    },
  ],
};

export const RESUME_END_MESSAGE: string =
  'Vous recherchez un **stagiaire** ou un **développeur junior** motivé, ' +
  'passionné par le **développement logiciel** ou le **web interactif** ?\n\n' +
  'Je suis ouvert aux **stages**, **postes juniors** et projets collaboratifs. ' +
  "N'hésitez pas à me contacter ou à consulter mes projets et mon GitHub.";
