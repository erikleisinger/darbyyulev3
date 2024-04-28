export interface Video {
    preview: string;
    src: string;
}

export interface Link {
    text: string;
    href: string;
}

export interface CustomSectionContent {
    name?: string;
    description?: string;
    imgs?: string[];
    video?: Video;
    link?: Link
}