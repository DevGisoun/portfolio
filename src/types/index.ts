export interface PortfolioItem {
    title: string;
    description: string;
    tags: string[];
    image: string;
    url?: string | null;
}

export interface Service {
    icon: string;
    title: string;
    description: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface NavItem {
    label: string;
    sectionId: string;
}
