import React from "react";

const Project = (props) => {
    return (
        <section>
            <div>
                <label for="">Name: </label>
                <span>
                    {props.project.name}
                </span>
            </div>
            <div>
                <label for="">Technology: </label>
                <span>
                    {props.project.technology}
                </span>
            </div>
            <div>
                <label for="">Description: </label>
                <span>
                    {props.project.description}
                </span>
            </div>
        </section>
    );
}

export default Project;