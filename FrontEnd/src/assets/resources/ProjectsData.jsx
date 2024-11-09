import thaw from '../images/thaw.png';
import jimneys from '../images/jimneys.png';
import equity from "../images/equityoffers.png"

const ProjectsIn = [

{
  "name": "Jimney's Fish & Chips",
  "description": "A responsive and visually appealing website for Jimney's Fish & Chips. The website allows users to browse the menu, place orders, and view real-time updates. Built using ReactJS and Tailwind CSS, with Firebase for data storage and real-time updates.",
  "sourceCode": "https://jimneys-resturant.vercel.app",
  "demoLink": "https://jimneys-resturant/.vercel.app",
  "technologies": ["React", "Tailwind CSS", "Firebase", "JavaScript"],
  "image": jimneys
},

{
  "name": "Thaw Construction",
  "description": "A simple website built for a construction company to showcase their services, projects, and contact information.",
  "sourceCode": "https://github.com/yourusername/thaw-construction",
  "demoLink": "https://thaw-construction.vercel.app",
  "technologies": ["HTML", "CSS", "JavaScript"],
  "image": thaw
}
,
  // {
  //   "name": "All4Queens",
  //   "description": "A website built for a beauty salon to manage client bookings, services, and employee schedules. Integrated Firebase for real-time updates and data management.",
  //   "sourceCode": "https://github.com/jaydeexsf/All4Queens",
  //   "demoLink": "https://jaydeexsf.github.io/All4Queens/",
  //   "technologies": ["React", "Tailwind CSS",],
  //   "image": all4queens
  // },
  {
    "name": "EquityOffers",
    "description": "EquityOffers is an application designed to help sellers list items such as courses and various products online at discounted prices based on the buyer's location, whether by country or state.",
    "sourceCode": "https://github.com/jaydeexsf/EquityOffers",
    "demoLink": "https://equityOffers.vercel.app",
    "technologies": ["Next.js", "TypeScript", "Drizzle", "React", "Tailwind CSS", "Neon"],
    "image": equity,
    "status": "Under Construction"
  }
];

export default ProjectsIn;
