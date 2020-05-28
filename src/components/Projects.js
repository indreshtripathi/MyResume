import React from "react";
import Project from './Project';

const Projects = (props) => {

    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {props.projects.map((project) =>
                    <li>
                        <Project project={project} />
                    </li>
                )}
            </ul>
        </section>
    );
}

export default Projects;