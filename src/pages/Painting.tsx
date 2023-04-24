import React, {useRef, useEffect, useState} from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import '@tensorflow/tfjs-backend-webgl';

const Painting = () =>{

  const webcamRef = useRef(
    {
      video:
    {
      readyState:0,
      videoWidth:0,
      videoHeight:0,
      width:0,
      height:0,
    },

  }
  );
  const canvasRef = useRef(
    {
      width:0,
      height:0,
    }
  );


  const runHandPose = async () =>{

    const net = await handpose.load()
    console.log("hand pose loaded")
    //loop to constantly search for a hand in frame
    setInterval(()=>{
      detect(net)
    }, 100)
  }

  const detect = async (net:any)=>{
    //check data is available
    if(
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ){
        //get video properties
        const video:any = webcamRef.current.video;
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
    //draw mesh


    }

  }


runHandPose();

return(
  <div>
  <h1>Painting Page</h1>
<Webcam ref={ webcamRef }
style={{
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
style={{
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
  </div>
)

};

export default Painting;