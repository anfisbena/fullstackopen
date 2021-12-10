import React from "react";

const Content=(props)=>{
  return(
    <>
      {props.subtitle.map(x=>{
        return(
          <p>{x.name}: {x.exercises}</p>
        )
      })}
    </>
  )
}

export default Content;