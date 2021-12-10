import React from "react";

const Content=(props)=>{
  return(
    <>
    <p>
      {props.subtitle} {props.value}
    </p>
    </>
  )
}

export default Content;