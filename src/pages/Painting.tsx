import React, {useRef, useEffect, useState} from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import '@tensorflow/tfjs-backend-webgl';
import drawHand from "../../utilities"

const Painting = () =>{

  const webcamRef: React.RefObject<Webcam> = useRef<Webcam>(null);
  const canvasRef: any = useRef(null);
  const canvasTwoRef:any = useRef(null);

  const [ indexFing, setIndexFing ]:any = useState(null);


  const runHandPose = async () =>{

    const net = await handpose.load()
    console.log("hand pose loaded")
    //loop to constantly search for a hand in frame
    setInterval(()=>{
      detect(net)
    }, 50)
  }

  const detect = async (net:any)=>{
    //check data is available
    if(webcamRef.current && webcamRef.current.video){
    if(
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4

    ){
        //get video properties

        const video = webcamRef.current.video

        const videoWidth = webcamRef.current.video.videoWidth;

        const videoHeight = webcamRef.current.video.videoHeight;
    //Set height and width
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;
    //set Canvas height and width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;
    //Make detections
    const hand = await net.estimateHands(video);
    console.log(hand)
    if(hand[0].landmarks){
    setIndexFing(hand[0].landmarks[8])
    }
    //draw mesh
    const canvas:any = canvasRef.current
    const ctx = canvas.getContext("2d");

drawHand(hand, ctx)
    }
  }
  }

useEffect(()=>{
  runHandPose();
},[])


const newDraw = (hand:any, ctx:any)=>{

}

console.log('i',indexFing)
useEffect(() => {
  const canvasTwo = canvasTwoRef.current;
  const ctx = canvasTwo.getContext('2d');
  ctx.scale(-1, 1);
  ctx.translate(-canvasTwo.width, 0);
  ctx.fillStyle = 'red';
  ctx.beginPath();
  if(indexFing){
  ctx.arc(indexFing[0]/1.8, indexFing[1]/2, 5, 0, Math.PI * 2);
  ctx.fill();
  //delete this line to make it cool double mirrored
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}, [indexFing]);

return(
  <div>
  <div>
  <h1>Painting Page</h1>
<Webcam ref={ webcamRef }
style={{
  transform: "scaleX(-1)",
  position:"absolute",
  marginLeft:"auto",
  marginRight:"auto",
  left:0,
  right:0,
  textAlign:"center",
  zIndex:9,
  width:640,
  height:480
}} />


  <canvas
    ref={canvasRef}
    id={"canvas1"}
    style={{
      transform: "scaleX(-1)",
      position:"absolute",
      marginLeft:"auto",
      marginRight:"auto",
      left:0,
      right:0,
      textAlign:"center",
      zIndex:9,
      width:640,
      height:480
    }}
  />
    </div>
    <div>
    <canvas
  ref={canvasTwoRef}
  id={"canvas2"}
  style={{
    backgroundColor: "black",
    marginLeft:"auto",
    marginRight:"auto",
    width: 640,
    height: 480,
    left:0,
      right:0,
    marginTop: "20px", // adjust as needed
    position: "absolute",
    top: "600px", // adjust as needed
  }}
/>
</div>
</div>
)

};

export default Painting;