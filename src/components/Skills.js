import React from "react";

const Skills = (props) => {
    let skills = props.skills;
    return (
        <section>
            <h2>Skills/Languages</h2>
            <ul class="skills"> {
                skills.map((skill) => <li>{skill}</li>)
            }
            </ul>
        </section>
    );
}

export default Skills;