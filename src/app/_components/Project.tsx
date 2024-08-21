"use client";
import React, { useState } from "react";
import { ProjectBox } from "./ProjectBox";
import { projectData } from "../Utils/ProjectData";

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="dark:bg-gray-900 dark:text-white dark:border-white h-full"
    >
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center lg:mt-20">
          <h2 className="text-center text-3xl font-bold text-indigo-600 sm:text-3xl  lg:mt-18">
            Projects
          </h2>
        </div>
        <div className="flex w-full justify-center gap-x-4 items-center py-4">
          {["All", "Frontend", "Full Stack"].map((category) => (
            <button
              key={category}
              className={`${
                selectedCategory === category ? "bg-indigo-600" : ""
              } w-40 h-10 rounded-lg border-2`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className=" grid grid-cols-1 gap-2 lg:grid-cols-2 ">
          {filterProducts.map((project, index) => (
            <ProjectBox key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
