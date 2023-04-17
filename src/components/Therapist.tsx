import axios from "axios";
import { useEffect, useState} from 'react'

const Therapist = (props:any) =>{
const { therapist } = props;

const [details, setDetails] = useState(null)


const getDetails = async () =>{
  try {
    const response = await axios.get('/therapist/details', {
      params:{
        place_id: therapist.place_id
      }
    })
    console.log(response.data.result)
    setDetails(response.data.result);
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
setTimeout(()=>{
  getDetails()
},2000)

},[])

console.log(therapist)

  return(
    <li>
{therapist.name}
    </li>
  )
}


export default Therapist;