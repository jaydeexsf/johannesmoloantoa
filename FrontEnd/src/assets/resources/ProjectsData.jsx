import thaw from '../images/thaw.png';
import jimneys from '../images/jimneys.png';
import equity from "../images/equityoffers.png"

const ProjectsIn = [

{
  "name": "Jimney's Fish & Chips",
  "description": "A Website for a local resturant. The website allows admin to login and add, edit and delete menu products, place orders. It allows data storage and real-time updates.",
  "sourceCode": "https://jimneys-resturant.vercel.app",
  "demoLink": "https://jimneys-resturant.vercel.app",
  "technologies": ["React", "Tailwind CSS", "Firebase", "JavaScript"],
  "image": jimneys
},

{
  "name": "Thaw Construction",
  "description": "A simple website built for a construction company to showcase their services, projects, and contact information.",
  "sourceCode": "https://github.com/yourusername/thaw-construction",
  "demoLink": "https://thaw-theta.vercel.app",
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
