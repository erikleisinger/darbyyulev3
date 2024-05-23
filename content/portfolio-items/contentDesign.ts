import type { PortfolioItem } from "@/types/PortfolioItem";
export default {
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
        order: {
          desktop: 1,
          mobile: 0,
        },
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
        order: {
          desktop: 0,
          mobile: 1,
        },
        content: {
          name: "Video Design",
          video: {
            preview: "/images/content_video_preview.png",
            src: "https://www.youtube.com/embed/0osFtmN8NcQ?si=AXU-fG5zfkOuZ3dX&autoplay=1&controls=0",
          },
        },
      },

      {
        id: '5',
        componentName: 'Final',
   
        content: {
          title: 'Blog design',
          linkText: 'Read here',
          linkHref: '/blog',
          bg: '/images/content_final_bg.png',
          imgs: [
            {
              src: '/images/content_final_desktop.png',
              mobileSrc: '/images/content_final_mobile.png',
              fullWidth: true
            }
          ]
        }
      }
    ],
  } as PortfolioItem