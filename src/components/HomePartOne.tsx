import React from "react";

const HomePartOne = () =>{

  return(
    <div style={{
      background: "linear-gradient(180deg, #fad0c4 0%, #fad0c4 1%, #ff9a9e 100%)",
      padding: "50px",
      minHeight: "100vh",
    }}>
      <div style={{fontSize:"60px", color:"white", padding:"20px", textShadow: "2px 2px 4px #000000", letterSpacing:"10px", marginTop:"200px"}}>
        <h1 style={{lineHeight: "0.3em"}}>Your</h1>
        <h1 style={{lineHeight: "0.3em"}}>GetAway</h1>
        <h1 style={{lineHeight: "0.3em"}}>Starts</h1>
        <h1 style={{lineHeight: "0.3em"}}>Now</h1>
      </div>
      <img src="https://i.imgur.com/XzjLIda.png" style={{position: "absolute", top: "40%", right: "10%", transform: "translateY(50%)"}}/>



    </div>
  )
}

export default HomePartOne;