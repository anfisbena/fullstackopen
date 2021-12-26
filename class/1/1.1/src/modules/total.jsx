import React from "react";

const Content=(props)=>{
let total=0
props.parts.parts.map(part=>total+=part.exercises)
  return(
    <>
    <p>
    {"Number of Exercises "+total}
    </p>
    </>
    )   
  }

export default Content;