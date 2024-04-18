interface ProjectsData {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

const projectData: ProjectsData[] = [
  {
    title: "Full Stack Grocery Store",
    image: "/project03.png",
    description:
      "This project is an online grocery store application built with Next.js, Tailwind CSS, and Shadcn UI. It utilizes Razorpay Payment Gateway for processing online payments and Axios for making HTTP requests. Check it out!",
    githubLink: "https://github.com/Aditya-Deshmukh9/MERN-Grocery-Store",
    liveLink: "https://full-stack-grocery-store-aditya.vercel.app/",
  },
  {
    title: "Live Forecast Weather",
    image: "/Live-Foecast-weather.png",
    description:
      "Live Forecast Weather app built with MERN stack, integrating OpenweatherApi for real-time updates, with 100+ regular users",
    githubLink: "https://github.com/Aditya-Deshmukh9/Live-weather-frontend",
    liveLink: "https://live-weather-frontend.vercel.app/",
  },
  {
    title: "E-Cart",
    image: "/Ecart Image (1).png",
    description:
      "Using React Js, Tailwind css and Context Api for State management. Here I crate Full Cart functionality, product add in Search the products etc",
    githubLink: "https://github.com/Aditya-Deshmukh9/E-cart",
    liveLink: "https://ecart-react.netlify.app/",
  },
];

export type { ProjectsData };
export { projectData };
