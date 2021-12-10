const objeto={
array1:[1,2],
}

const Mapeo=objeto.array1.map(n=>{
  return(
    <p>{"The value for "+n+"*"+n+" is "+ n*n}</p>
    )
})

export default Mapeo;