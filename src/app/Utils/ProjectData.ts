interface ProjectsData {
  title: string;
  description: string;
  category: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

const projectData: ProjectsData[] = [
  {
    title: "Full Stack Grocery Store",
    image: "/project03.png",
    category: "Full Stack",
    description:
      "This project is an online grocery store application built with Next.js, Tailwind CSS, and Shadcn UI. It utilizes Razorpay Payment Gateway for processing online payments and Axios for making HTTP requests. Check it out!",
    githubLink: "https://github.com/Aditya-Deshmukh9/MERN-Grocery-Store",
    liveLink: "https://full-stack-grocery-store-aditya.vercel.app/",
  },
  {
    title: "Live Forecast Weather",
    image: "/Live-Foecast-weather.png",
    category: "Frontend",
    description:
      "Live Forecast Weather app built with MERN stack, integrating OpenweatherApi for real-time updates, with 100+ regular users",
    githubLink: "https://github.com/Aditya-Deshmukh9/Live-weather-frontend",
    liveLink: "https://live-weather-frontend.vercel.app/",
  },
  {
    title: "E-Cart",
    image: "/Ecart Image (1).png",
    category: "Frontend",
    description:
      "Using React Js, Tailwind css and Context Api for State management. Here I create Full Cart functionality, product add in Search the products etc",
    githubLink: "https://github.com/Aditya-Deshmukh9/E-cart",
    liveLink: "https://ecart-react.netlify.app/",
  },
  {
    title: "ContentGenie",
    image: "/ContentGenie.png",
    category: "Full Stack",
    description:
      "Using React Js, Typescript, Tailwind css and Redux Toolkit for State management. Here I create Full Ai Content Genrator Dashboard with response edit functionality",
    githubLink: "https://github.com/Aditya-Deshmukh9/ai-content-generator",
    liveLink: "https://ai-content-generator-tau.vercel.app/",
  },
];

export type { ProjectsData };
export { projectData };
