import type { PortfolioItem } from "@/types/PortfolioItem";
export default
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
        order: {
            mobile: 0,
            desktop: 1,
        },
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
        order: {
            mobile: 1,
            desktop: 0,
        },
        content: {
          name: "UX Writing Example",
          imgs: ["/images/ccc_ux.png"],
        },
      },
      {
        id: "5",
        componentName: "Final",
        grid: 2,
        content: {
          bg: '/images/ccc_final_bg.png',
          imgs: [{
            src: '/images/ccc_final_1.png',
            text: 'Home'
          },
          {
            src: '/images/ccc_final_2.png',
            text: 'About',

          },
          {
            src: '/images/ccc_final_3.png',
            text: 'Professional Development'
          },
          {
            src: '/images/ccc_final_4.png',
            text: 'Help & Resources'
          },
   
        ],
        },
      },
    ],
  } as PortfolioItem