import React from 'react'
import { ProjectBox } from './ProjectBox'
import { projectData } from '../Utils/ProjectData'

function Project() {
    return (
        <section
            id="projects"
            className="dark:bg-gray-900 dark:text-white dark:border-white h-full"
        >
            <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                <div className="mx-auto max-w-lg text-center lg:mt-20">
                    <h2 className="text-center text-3xl font-bold text-indigo-600 sm:text-3xl  lg:mt-18">
                        Projects
                    </h2>
                </div>

                <div className=" grid grid-cols-1 gap-2 lg:grid-cols-2 ">
                    {projectData.map((project, index) => (
                        <ProjectBox key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project