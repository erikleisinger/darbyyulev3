export type DesignProcessContentItemName = 
'Branding' | 
'Content Design' |
'Content Strategy' | 
'Customer Input' |
'Design System' | 
'Graphic Design' |
'HiFi Wireframe' | 
'Ideation' | 
'Research' |
'UX Writing';


export interface DesignProcessContentItem  {
    name: DesignProcessContentItemName;
    content: String;
    isHtml?: Boolean
}

export type DesignProcessContent = DesignProcessContentItem[]