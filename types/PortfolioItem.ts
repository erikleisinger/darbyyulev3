import type { DesignProcessContent } from "@/types/DesignProcess";
import type { ProblemOutcomeContent } from "@/types/ProblemOutcome";
import type { CustomSectionContent } from "@/types/CustomSection";

export type PortfolioItemComponentName = 'ProblemOutcome' | 'DesignProcess' | 'Custom'

export interface PortfolioItemSection {
    id: string;
    componentName: PortfolioItemComponentName;
    grid?: number;
    content?: CustomSectionContent | DesignProcessContent | ProblemOutcomeContent;
    sections?: PortfolioItemSection[]
}

export interface HeaderImage {
    src: string;
    x: number | string;
    y: number | string;
}

export interface HeaderImageInfo {
    bg: string;
    header_imgs: HeaderImage[]
}

export interface PortfolioItem {
    id: string;
    name: string;
    description: string;
    img_main: string;
    header_bg: string;
    header_img?: string;
    header_img_sm?: string;
    sections: PortfolioItemSection[];
}

export type PortfolioItems = PortfolioItem[];