export interface Contact {
    id: number;
    name: string;
    url: string;
    img: string;
}

export interface InfoEntry {
    id: number;
    icon: string;
    value: string;
}

export interface Profile {
    title: string;
    headline: string;
    summary: string;
    email: string;
    badges: string[];
    info: InfoEntry[];
}

export interface Stat {
    value: string;
    label: string;
}

export interface Certificate {
    title: string;
    image: string;
}

export interface GlobalSkill {
    title: string;
    tools: string[];
    icon: string;
}

// Cada habilidad usa `image` (logo) o `icon` (clase de Font Awesome 4.7) cuando no hay logo disponible.
export type SkillEntry =
    | { name: string; image: string; icon?: never }
    | { name: string; icon: string; image?: never };

export interface SkillGroup {
    title: string;
    icon: string;
    skills: SkillEntry[];
}

export interface Technology {
    name: string;
    picture: string;
}

export interface Project {
    name: string;
    description: string;
    github: string;
    deploy: string | null;
    picture: string;
    tecnologies: Technology[];
}

export interface PortfolioData {
    name: string;
    surname: string;
    cvUrl: string;
    profile: Profile;
    stats: Stat[];
    contact: Contact[];
    certificates: Certificate[];
    globalSkill: GlobalSkill[];
    skillGroups: SkillGroup[];
    projects: Project[];
}
