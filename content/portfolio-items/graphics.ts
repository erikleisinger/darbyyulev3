import type { PortfolioItem } from "@/types/PortfolioItem";
export default {
    id: "graphics",
    name: "Graphic Design Examples",
    description: `This is a collection of recent graphics and logos that I have created for various projects. In an effort to expand my skillset, I offer graphic design services to companies and individual entrepreneurs.`,
    img_main: "/images/item_main_graphics.png",
    header_bg: '/images/graphics_bg.png',
    header_img: '/images/graphics_header.png',
    header_img_sm: '/images/graphics_header_mobile.png',
    sections: [
      {
        id: "1",
        componentName: "ProblemOutcome",
        content: {
          problem: `How do I represent the business I am branding in a way that is both pleasing and informative?`,
          outcome: `Logos, Brand Patterns, Social Media Templates, Colour Schemes`,
        },
      },
      {
        id: "2",
        componentName: "DesignProcess",
        grid: 2,
        content: [
          {
            name: "Customer Input",
            content: `Looking for customer input is paramount when it comes to graphic design. No one knows their business like entrepreneurs and it is important to hear their input when it comes to telling their brand story. `,
          },
          {
            name: "Research",
            content: `I research a mix of competitors, analytics and customer interviews. After that, I create a user persona to base my brand strategy off of. This gives me a clear idea of who I am designing for moving forward.`,
          },
          {
            name: "Ideation",
            content: `In the ideation phase, I come up with multiple ideas and narrow it down to the best ones before sketching out a rough draft.`,
          },
          {
            name: "Graphic Design",
            content: `Lastly, I create the graphic and branding system based on my evidence and customer input. I let my research guide what we make and how it looks before the creative process.`,
          },
        ],
      },
      {
        id: "3",
        componentName: "Custom",
        grid: 1,
        content: {
          name: "Pebble",
          description: `Pebble has its own section of my portfolio but I felt it was important to highlight the logo.`,
          imgs: ["/images/graphic_pebble.png"],
        },
      },
      {
        id: "4",
        componentName: "Custom",
        grid: 1,
        content: {
          name: `Mundo's New Leaf`,
          description: `Mundo’s New Leaf Yard and Grounds Services is a new landscaping company in Courtenay, BC.`,
          imgs: ["/images/graphic_mundo.png"],
        },
      },
      {
        id: "5",
        componentName: "Custom",
        grid: 1,
        content: {
          name: `The Statistics Cover`,
          description: `The Statistics are a professionally touring band that approached me about making a cover for their new single. `,
          imgs: ["/images/graphic_stats.png"],
        },
      },
      {
        id: "6",
        componentName: "Custom",
        grid: 1,
        content: {
          name: `Beachcombers  Coffee`,
          description: `Beachcombers Coffee is a coffee roasters and cafe in Gibsons, BC.`,
          imgs: ["/images/graphic_beach.png"],
        },
      },
    ],
  } as PortfolioItem