import React from "react";

const Total=(props)=>{
  let totVal=0;
  props.Total.forEach(x=>totVal+=x.exercises);
  return(
    <>
      <p>Total number of exercises: {totVal}</p>
    </>
  )
};

export default Total;