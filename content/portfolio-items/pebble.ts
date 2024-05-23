import type { PortfolioItem } from "@/types/PortfolioItem";
export default {
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
        id: "5",
        componentName: "Final",
        grid: 2,
        content: {
          bg: '/images/pebble_final_bg.png',
          imgs: [{
            src: '/images/pebble_final_1.png',
            text: 'Overview'
          },
          {
            src: '/images/pebble_final_2.png',
            text: 'Club page',

          },
          {
            src: '/images/pebble_final_3.png',
            text: 'Stats page'
          },
          {
            src: '/images/pebble_final_4.png',
            text: 'Game page'
          },
          {
            src: '/images/pebble_final_5.png',
            text: 'Summary'
          }
        ],
        },
      },
    ],
  } as PortfolioItem