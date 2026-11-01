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
    about: string;
    languages: string;
    email: string;
    badges: string[];
    info: InfoEntry[];
}

// Igual que SkillEntry: `logo` (imagen) o `icon` (Font Awesome 4.7) cuando no hay logo.
export type TimelineEntry = {
    role: string;
    place: string;
    period: string;
    bullets: string[];
} & ({ logo: string; icon?: never } | { icon: string; logo?: never });

export interface Stat {
    value: string;
    label: string;
}

export interface Certificate {
    title: string;
    year?: string;
    image?: string;
}

export interface CertificateGroup {
    title: string;
    icon: string;
    certificates: Certificate[];
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

export type ProjectKind = 'web' | 'api' | 'mobile' | 'ui';

export interface Project {
    name: string;
    kind: ProjectKind;
    // Los proyectos destacados muestran año, highlights y credenciales de demo.
    featured?: boolean;
    year?: string;
    description: string;
    highlights?: string[];
    github: string | null;
    deploy: string | null;
    demoCredentials?: { user: string; password: string };
    // null cuando no hay captura (p. ej. una API); se muestra un bloque alternativo.
    picture: string | null;
    tecnologies: Technology[];
}

export interface PortfolioData {
    name: string;
    surname: string;
    cvUrl: string;
    profile: Profile;
    stats: Stat[];
    experience: TimelineEntry[];
    education: TimelineEntry[];
    contact: Contact[];
    certificateGroups: CertificateGroup[];
    globalSkill: GlobalSkill[];
    skillGroups: SkillGroup[];
    projects: Project[];
}
