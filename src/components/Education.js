import React from "react";

const Education = (props) => {
    
    return (
        <section>
            <h2>Education</h2>
            <ul> {
                props.courses.map((course) =>
                    <li>
                        <label for="">{course.courseName} : </label>
                        <span>
                            {course.result}
                        </span>
                    </li>
                )
            }
            </ul>
        </section>
    );
}

export default Education;