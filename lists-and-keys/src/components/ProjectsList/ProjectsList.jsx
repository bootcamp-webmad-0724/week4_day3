import { useState } from 'react'
import projectsData from './../../data/projectsData.json'

const ProjectsList = () => {

    const [projects, setProjects] = useState(projectsData)

    return (
        <div className="ProjectsList">
            {
                projects.map(eachProject => {
                    return (
                        <article key={eachProject._id}>
                            <h1>{eachProject.name}</h1>
                            <p>Stack: {eachProject.techStack}</p>
                            <hr />
                        </article>
                    )
                })
            }
        </div>
    )
}

export default ProjectsList