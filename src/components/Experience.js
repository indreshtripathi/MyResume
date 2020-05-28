import React from "react";
import Roles from './Roles';

const Experience = (props) => {
    
    return (
        <section>
            <h2>Experience</h2>
            <ul>
                { props.roles.map((role) => <li> <Roles role={role} /> </li>) }
            </ul>
        </section>
    );
}

export default Experience;