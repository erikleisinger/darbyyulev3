import type { DesignProcessContent } from "@/types/DesignProcess";
import type { ProblemOutcomeContent } from "@/types/ProblemOutcome";
import type { CustomSectionContent } from "@/types/CustomSection";

export type PortfolioItemComponentName = 'ProblemOutcome' | 'DesignProcess' | 'Custom'

export interface PortfolioItemSection {
    id: string;
    componentName: PortfolioItemComponentName;
    content: CustomSectionContent | DesignProcessContent | ProblemOutcomeContent;
}

export interface PortfolioItem {
    id: string;
    name: string;
    description: string;
    img_main: string;
    sections: PortfolioItemSection[];
}

export type PortfolioItems = PortfolioItem[];