const Hello =({name,age})=>{
  const bornYear=()=>{
    const yearNow=new Date().getFullYear()
    return yearNow-age
  }
  return(
    <div>
      <p>
        Hello {name}, you born in {bornYear()}
      </p>
    </div>
  )
}

export default Hello;

