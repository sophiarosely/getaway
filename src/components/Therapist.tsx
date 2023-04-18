import axios from "axios";
import { useEffect, useState} from 'react'

const Therapist = (props:any) =>{
const { therapist } = props;








  return(
    <li>
{therapist.name}
    </li>
  )
}


export default Therapist;