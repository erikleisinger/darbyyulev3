import type { PortfolioItem } from "@/types/PortfolioItem";
export default {
    id: "arc",
    name: "UI & Content Re-design of commerce App",
    description: `Re-design of Arc’Teryx’s Explore section on their mobile app. Includes a new feed, favourites, and message system.`,
    img_main: "/images/item_main_arc.png",
    header_img: '/images/arc_header.png',
    header_img_sm: '/images/arc_header_mobile.png',
    header_bg: '/images/arc_bg.png',
    sections: [
      {
        id: "1",
        componentName: "ProblemOutcome",
        content: {
          problem: `How might we utilize the Explore Section on Arc’teryx’s app more effectively?`,
          outcome: `Research, LoFi Wireframes, HiFi Wireframes, Content Strategy`,
        },
      },
      {
        id: '2',
        grid: 1,
        componentName: 'Custom',
        sections: [
          {
            id: "designprocess",
            componentName: "DesignProcess",
            grid: 1,
            content: [
              {
                name: "Research",
                content: `I created a user journey on FigJam and came out with three major findings.
                            <ul>
                        
                            <li>
                           • It is unclear what kinds of content are available on the ‘My Feed Section’. 
                           </li>
                       
                           <li>
                           • Users are being redirected to the shop instead of being encouraged to engage with the products and lifestyle that Arc’teryx is selling.
                           </li>
                           </ul>
                           `,
                isHtml: true,
              },
              {
                name: "Ideation",
                content: `I kept with the ‘Gallery’ theme but added titles and icons to every button. I also included avatars listing all of the gear used in the piece of contentThis allows more targeted marketing for specific gear, announcements, and features.`,
              },
              {
                name: "Content Strategy",
                content: `I took a page from Red Bull’s strategy and redesigned the content pages to be able to sell the Arc’Teryx lifestyle. It gently guides the user on a journey that starts with the Arc’teryx brand and ends with them acquiring their product.`,
              },
              {
                name: "HiFi Wireframe",
                content: `A full redesign of the ‘Explore’ Tab on the Arc’teryx mobile app that not only showcases Arc’teryx’s amazing products, but sells the Arc’teryx way of life. It has been stylized and rescaled to fit heuristic and accessibility standards.`,
              },
            ],
          },
          {
            id: "beforeafter",
            componentName: "Custom",
            grid: 1,  
            content: {
              name: "Before & After",
              imgs: ["/images/arc_beforeafter.png"],
            },
          },
        ]
      },
      
      {
        id: "3",
        componentName: "Custom",
        grid: 1,
        content: {
          name: "Site Map & Strategy",
          imgs: ["/images/arc_sitemap.png"],
        },
      },
     
      {
        id: "3",
        componentName: "Custom",
        content: {
          name: "Final",
          imgs: ["/images/arc_final.png"],
        },
      },
    ],
  } as PortfolioItem