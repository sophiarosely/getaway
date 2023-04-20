import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext, UserContextType } from '../App';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const AffirmationEntries = () => {

const [retrievedAffirmations, setRetrievedAffirmations] = useState<string[]>([]);
const { userName, userId }: UserContextType = useContext(UserContext) ?? { userName: null, userId: null };

  const viewAffirmations = () => {
    axios
      .get(`/affirmations/retrieve/${userId}`)
      .then(({ data }) => {
       setRetrievedAffirmations(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
        viewAffirmations()
  }, [])

    return (
     <div id='parent'>
          {retrievedAffirmations.map((entry: any) => {
              return (
              <div id='affirmations'>
              <div>{entry.title}{<DeleteOutlineOutlinedIcon />}</div>
              <div>{entry.affirmationList.split('/n').map((affirmation: string) => <div>{affirmation}</div>)}</div>
              </div>
              )
          }

          )}
            </div>
    )
};

export default AffirmationEntries;
