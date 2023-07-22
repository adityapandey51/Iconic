import {
    mobile,
    backend,
    creator,
    web,
    project,
    javascript,
    html,
    css,
    canva,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
  } from "../assets";
  
 const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Graphic Design",
      icon: mobile,
    },
    {
      title: "Motion Graphics",
      icon: backend,
    },
    {
      title: "Logo Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name:"Canva",
      icon:canva,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Iconic proved me wrong.",
      name: "Sowmya Jose",
      designation: "Owner",
      company: "Diamond Beauty",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    }
    
  ];
  
  const projects = [
    {
      name: "Iconic Web",
      description:
        "Web-based platform that allows users to reach to us, consult, and make their business grow online",
        tags:[
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: project,
      source_code_link: "https://github.com/",
    },
    
   
  ];
  
  export { navLinks,services, technologies, testimonials, projects };