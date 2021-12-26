import React from "react";

const Content=(props)=>{
  return(
    props.parts.parts.map(part=>
    <>
    <p>
    {part.name+" "+part.exercises}
    </p>
    </>
    )   
  )}

export default Content;