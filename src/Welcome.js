import React from 'react';

function Welcome(props)
{
    return(
    <div>
        <h3>BootCamp 2020 - {props.assignmentInfo} </h3>
        <p>Topic: {props.topic}</p>
    </div>
    );
}

export default Welcome;