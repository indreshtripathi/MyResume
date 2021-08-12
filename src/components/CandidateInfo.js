import React from "react";

const CandidateInfo = (props) => {
    
    return (
        <section>
            <div> <label for="">Mobile: </label>
                {props.info.Mobile.map((number) => <span>{number}  </span>)}
            </div>
            <div> <label for="">Email: </label>{props.info.email}</div>
            <div> <label for=""> LinkedIn: </label>{props.info.linkedInURI}</div>
        </section>
    );
}

export default CandidateInfo;