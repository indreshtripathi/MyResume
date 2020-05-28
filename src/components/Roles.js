import React from "react";

const Roles = (props) => {
    return (
        <div>
            <div>
                <label for="">Company: </label>
                <span>
                    {props.role.company}
                </span>
            </div>
            <div>
                <label for="">Title: </label>
                <span>
                    {props.role.title}
                </span>
            </div>
            <div>
                <label for="">Tenure: </label>
                <span>
                    {props.role.tenure}
                </span>
            </div>
            <div>
                <label for="">Responsibility: </label>
                <span>
                    {props.role.responsibility}
                </span>
            </div> 
        </div>
    );
}

export default Roles;