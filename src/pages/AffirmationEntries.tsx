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
       console.log(data)
      })
      .catch((err) => console.log(err));
  };

  const deleteAffirmations = (entryId: number) => {

    const titleDiv = document.getElementById(`title-${entryId}`);
    if (titleDiv) {
      titleDiv.style.display = 'none';
    }

    const affirmationListDiv = document.getElementById(`affirmationList-${entryId}`);
    if (affirmationListDiv) {
      affirmationListDiv.style.display = 'none';
    }

    axios
        .delete(`/affirmations/remove/${entryId}`)
        .then(() => console.log('Successfully deleted'))
        .catch((err) => console.log(err));
  }

  useEffect(() => {
        viewAffirmations()
  }, [])

    return (
     <div id='parent'>
          {retrievedAffirmations.map((entry: any) => {
              return (
              <div id='affirmations'>
              <div id={`title-${entry.id}`}>{entry.title}{<DeleteOutlineOutlinedIcon onClick={() => {deleteAffirmations(entry.id)}} />}</div>
              <div id={`affirmationList-${entry.id}`}>{entry.affirmationList.split('/n').map((affirmation: string) => <div>{affirmation}</div>)}</div>
              </div>
              )
          }

          )}
            </div>
    )
};

export default AffirmationEntries;
