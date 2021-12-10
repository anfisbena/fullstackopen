import React from "react";

const Total=(props)=>{
  let totVal=0;
  props.Total.map(x=>x.exercises).forEach(element => {
    totVal+=element;
  });
  return(
    <>
      <p>Total number of exercises: {totVal}</p>
    </>
  )
};

export default Total;