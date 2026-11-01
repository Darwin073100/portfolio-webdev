export interface Contact {
    id: number;
    name: string;
    url: string;
    img: string;
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

export interface SubSkill {
    skill: string;
    image: string;
    style?: React.CSSProperties;
}

export interface Skill extends SubSkill {
    tools: SubSkill[];
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
    contact: Contact[];
    certificates: Certificate[];
    globalSkill: GlobalSkill[];
    tools: Skill[];
    projects: Project[];
}
