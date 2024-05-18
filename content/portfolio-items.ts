import type { PortfolioItems } from "@/types/PortfolioItem";
export const PORTFOLIO_ITEMS: PortfolioItems = [
  {
    id: "pebble",
    name: "Design System & Branding for Sports Web App",
    description: `Pebble is a curling app made for tracking stats and games.`,
    img_main: "/images/item_main_pebble.png",
    header_bg: '/images/pebble_header_bg.png',
    header_img: '/images/pebble_header.png',
    header_img_sm: '/images/pebble_header_mobile.png',

    sections: [
      {
        id: "1",
        componentName: "ProblemOutcome",
      
        content: {
          problem: `How might we make it easy for a user to navigate, understand, and interact with the app in a meaningful way?`,
          outcome: `Research, LoFi Wireframes, Design System, HiFi Wireframes, Branding`,
        },
      },
      {
        id: "2",
        componentName: "Custom",
        grid: 1,
        content: {
          name: "Styles",
          imgs: ["/images/pebble_styles_1.png", "/images/pebble_styles_2.png"],
        },
      },
      {
        id: "3",
        componentName: "DesignProcess",
        grid: 1,
        content: [
          {
            name: "Research",
            content: `After running User Journey Testing and User Interviews, we found that Pebbles’ initial IA was confusing and lacked heuristic cohesiveness. It was difficult for users to do simple tasks such as to create teams or add themselves to rinks`,
          },
          {
            name: "Ideation",
            content: `Scope creep was a real issue in the beginning since this idea has such potential. We decided to stick to four (4) main screens for the first iteration: a game page, a team page, a personal page, and a rink page. These pages fit cohesively together so users can look up their rink, join a team, and play a game.`,
          },
          {
            name: "Design System",
            content: `Because this was a short term contract, Pebble needed a way that they can keep on moving forward without a full-time designer. My solution was to create a permanent design system and branding that they could use. This included colouring, variants, consistent spacing, and style choices.`,
          },
          {
            name: "Branding",
            content: `A colourful but minimalist design would make it friendly and useable. There is a large population of curlers that are older so makinga strong focus on accessibility was paramount in this project. I also went for slightly muted colours to give it a ‘beer-league’ effect, making it friendly and different.`,
          },
        ],
      },
    
      {
        id: "4",
        componentName: "Custom",
        grid: 2,
        content: {
          name: "Final",
          imgs: ["/images/pebble_final.png"],
        },
      },
    ],
  },
  {
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
  },
  {
    id: "content",
    name: "Blog & Video Design",
    description: `Although I am trained in Content Design through the University of Alberta, I have been creating content for mot of my creative career. I have done everything from songwriting to social media strategy to producing television programming. Below is a look into my training at the U of A.`,
    img_main: "/images/item_main_content.png",
    header_bg: '/images/content_bg.png',
    header_img: '/images/content_header.png',
    header_img_sm: '/images/content_header_mobile.png',
    sections: [
      {
        id: "1",
        componentName: "ProblemOutcome",
        content: {
          problem: `How do I find my personal niche and cater content towards it?`,
          outcome: `UX Research, Content, Strategy, Video Design, Blog Design`,
        },
      },
      {
        id: "2",
        componentName: "DesignProcess",
        grid: 1,
        content: [
          {
            name: "Research",
            content: `In my research, I ran testing on users that already followed myself and my band. I did simple user interviews with 5 participants. `,
          },
          {
            name: "Ideation",
            content: `I created a Venn Diagram of user needs, what I wanted to do, and what I was good at. I landed on my expertise in Alternative music and growing up while still being an alt-kid/punk rocker.`,
          },
          {
            name: "Content Strategy",
            content: `I created user personas to help with visualizing who my main customers are. I created a large list of content using a ‘25 Ideas in 15 Minutes’ strategy. I listed user needs and found solutions that I could create content for. `,
          },
          {
            name: "Content Design",
            content: `Most of the users that are interested in my niche are people who would go out to live music and show regularly when they were younger. I made a design scheme around going to local shows and creating alternative music.`,
          },
        ],
      },
      {
        id: "3",
        componentName: "Custom",
        grid: 1,
        content: {
          name: "Video Design",
          video: {
            preview: "/images/content_video_preview.png",
            src: "https://www.youtube.com/embed/0osFtmN8NcQ?si=AXU-fG5zfkOuZ3dX&autoplay=1&controls=0",
          },
        },
      },
      {
        id: "4",
        componentName: "Custom",
        grid: 2,
        content: {
          name: "Blog Design",
          link: {
            text: 'READ HERE',
            href: '/blog'
          },
        },
      },
    ],
  },
  {
    id: "ccc",
    name: "UI & UX Redesign of NGO-Website",
    description: `The Community Counselling Centre is a Non-Profit Organization that offers ‘low-barrier’ counselling services to anyone who needs it.`,
    header_bg: '/images/ccc_bg.png',
    header_img: '/images/ccc_header.png',
    header_img_sm: '/images/ccc_header_mobile.png',
    img_main: "/images/item_main_ccc.png",
    sections: [
      {
        id: "1",
        componentName: "ProblemOutcome",
        content: {
          problem: `How might we adjust the CCC’s online presence to make first point of contact simple for clients?`,
          outcome: `UX Research, LoFi Wireframes, HiFi Wireframes, UX Writing`,
        },
      },
      {
        id: "2",
        componentName: "DesignProcess",
        grid: 1,
        content: [
          {
            name: "Research",
            content: `I approached this project by interviewing staff and clients about the website. I cross referenced my findings with the analytics the CCC already had. Their bounce rate was a staggering 90%. When interviewing users, I found that they got frustrated with the shear amount of information on the site.`,
          },
          {
            name: "Ideation",
            content: `We needed to adjust the Information Architecture of the site. I performed card sorting workshops with staff and volunteers. The homepage has very easy to follow paths depending on the type of user visiting the site (client, onboarding client, or professional.) `,
          },
          {
            name: "UX Writing",
            content: `It was very important that users understand the processes of the CCC. There are also many people in crisis visiting the website. UX Writing and pop ups were important in making the site ‘low barrier’.`,
          },
          {
            name: "HiFi Wireframe",
            content: `In the final iteration of the Website, it has been designed mobile first and with accessibility in mind. I created custom icons to highlight important information on the page. It follows their branding of a lotus flower. It is professional and calming. `,
          },
        ],
      },
      {
        id: "3",
        componentName: "Custom",
        grid: 1,
        content: {
          name: "UX Writing Example",
          imgs: ["/images/ccc_ux.png"],
        },
      },
      {
        id: "4",
        componentName: "Custom",
        grid: 2,
        content: {
          name: "Final",
          imgs: ["/images/ccc_final.png"],
        },
      },
    ],
  },
  {
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
        grid: 1,
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
  },
];
