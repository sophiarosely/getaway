import { useState, useEffect} from "react"
import axios from "axios";

const Guidance = () =>{

  const [userLat, setLat] = useState(0);
  const [userLong, setLong] = useState(0);
  const [geolocationLoaded, setGeolocationLoaded] = useState(false);

  useEffect(() => {
    //function get the user lat and long
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setLat(latitude);
      setLong(longitude);
      setGeolocationLoaded(true);
    });
  }, [])

  useEffect(() => {
    //if lat and long has been loaded run get request
    if (geolocationLoaded) {
      axios.get('/therapist/search', {
        params:{
          lat: userLat,
          long: userLong
        }
      })
      .then((response)=>{
        console.log("clientside",response.data)
      });
    }
  }, [geolocationLoaded, userLat, userLong])


console.log(userLat, userLong)

  return (
    <h1>Guidance</h1>
  )
  }

  export default Guidance;