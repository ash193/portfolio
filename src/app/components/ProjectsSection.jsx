"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import TwitterImage from "../components/images/TwitterImage.png";
import TodoImage from "../components/images/TodoImage.jpg";
import FinanceImage from "../components/images/FinanceTrackerImage.png";
import GymAppImage from "../components/images/GymAppImage.png";
import StoreImage from "../components/images/StoreImage.png";
import LisbonImage from "../components/images/LisbonImage.png";

const projectsData = [
  {
    id: 1,
    title: "Travel Website",
    description: "",
    image: LisbonImage,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ash193/LisbonTravelPage",
    previewUrl: "https://lisbontravelpage.netlify.app/",
  },
  {
    id: 2,
    title: "Full Stack Store App",
    description: "",
    image: StoreImage,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vijhan/FullStackGirlies",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Gym App",
    description: "",
    image: GymAppImage,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ash193/GymApp",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Finance Tracker",
    description: "",
    image: FinanceImage,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ash193/PythonFinanceTracker",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Todo",
    description: "",
    image: TodoImage,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ash193/todolist",
    previewUrl: "https://my-newtodolist.netlify.app/",
  },
  {
    id: 6,
    title: "Twitter Clone",
    description: "",
    image: TwitterImage,
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ash193/TwitterClone",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
