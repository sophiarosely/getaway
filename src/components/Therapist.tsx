import axios from "axios";
import { useEffect, useState} from 'react'

const Therapist = (props:any) =>{
const { therapist, details } = props;


console.log(details)





  return(
    <li>
{therapist.name}
    </li>
  )
}


export default Therapist;