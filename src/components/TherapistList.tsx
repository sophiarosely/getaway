import Therapist from '../components/Therapist'
import axios from 'axios';
import { useEffect, useState } from 'react';

const TherapistList = (props: any) => {
  const { therapists } = props;
  const [details, setDetails] = useState<any[]>([]);

  const getDetails = async (place_id: string) => {
    try {
      const response = await axios.get('/therapist/details', {
        params: {
          place_id: place_id
        }
      });
      return response.data.result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Promise.all(therapists.map(t => getDetails(t.place_id)))
      .then(results => {
        setDetails(results);
      });
  }, [therapists]);

  return (
    <div>
      <ul>
        {therapists.map((therapist: any, index: number) => (
          <Therapist key={therapist.place_id} therapist={therapist} details={details[index]} />
        ))}
      </ul>
    </div>
  );
};

export default TherapistList;