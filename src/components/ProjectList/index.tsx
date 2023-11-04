import {projects} from "@/data/projects"
import { ProjectCard } from "../ProjectCard"

export const ProjectList = () => {
    return (
        <section>
            <h1>ProjectList</h1>
            <ul>{
                projects.map((project) => {
                    return <ProjectCard project={project} key={project.id}/>
                })
                }
            </ul>
        </section>
    )
}