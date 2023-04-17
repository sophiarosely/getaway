const Guidance = () =>{

//this function gives me the users location details
navigator.geolocation.getCurrentPosition(position =>{
  const { latitude, longitude } = position.coords
  console.log(latitude, longitude)
})



  return (
    <h1>Guidance</h1>
  )
  }

  export default Guidance;