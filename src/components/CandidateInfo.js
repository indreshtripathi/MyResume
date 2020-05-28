import React from "react";

const CandidateInfo = (props) => {
    
    return (
        <section>
            <h1>{props.info.name}</h1>
            <h3>{props.info.currentRole}</h3>
            <div> <label for="">Mobile: </label>
                {props.info.Mobile.map((number) => <span>{number}  </span>)}
            </div>
            <div> <label for="">Email: </label>{props.info.email}</div>
            <div> <label for=""> Skype id: </label> {props.info.skypeId}</div>
            <div> <label for=""> LinkedIn: </label>{props.info.linkedInURI}</div>
        </section>
    );
}

export default CandidateInfo;