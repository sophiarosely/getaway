import axios from "axios"
import React, {useRef, useEffect, useState, useContext} from "react";
import { UserContext, UserContextType } from '../App';


const SavedPaintings = () =>{
  const { userName, userId }: UserContextType = useContext(UserContext) ?? { userName: null, userId: null };

const [paintings, setpaintings ]:any = useState(null);


  const getPaintings = ()=>{
     axios.get(`/paintings/all-paintings?googleId=${userId}`)
    .then((response)=>{
      console.log(response)
      setpaintings(response.data)
    })
  }

    useEffect(()=>{
      getPaintings()
    }, [])




  return (
    <div style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#788ACA',
      backgroundColor:'#CCD7FF',
      width: '70%',
      minHeight: '250px',
      textAlign:'center',
      marginBottom:'250px',
      padding:'30px'
    }}>
<p>Saved Paintings</p>
<img src={paintings?paintings[0].url:''} width="640" height="400"/>
    </div>
  )
}


export default SavedPaintings