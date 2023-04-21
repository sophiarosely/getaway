import { useState, useContext, useEffect } from 'react';
import * as React from 'react';
import axios from 'axios';
import { UserContext, UserContextType } from '../App';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

const AffirmationEntries = () => {
  const [retrievedAffirmations, setRetrievedAffirmations] = useState<string[]>([]);
  const { userName, userId }: UserContextType = useContext(UserContext) ?? {userName: null, userId: null};
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState('')

  const viewAffirmations = () => {
    axios
      .get(`/affirmations/retrieve/${userId}`)
      .then(({ data }) => {
        setRetrievedAffirmations(data);
        setRetrievedAffirmations(data);
        localStorage.setItem('retrievedAffirmations', JSON.stringify(data));
      })
      .catch((err) => console.log(err));
  };

  const deleteAffirmations = (entryId: number) => {
    const titleDiv = document.getElementById(`title-${entryId}`);
    if (titleDiv) {
      titleDiv.style.display = 'none';
    }

    const affirmationListDiv = document.getElementById(
      `affirmationList-${entryId}`
    );
    if (affirmationListDiv) {
      affirmationListDiv.style.display = 'none';
    }

    const cardDiv = document.getElementById(`card-${entryId}`);
    if (cardDiv) {
      cardDiv.style.display = 'none';
    }

    axios
      .delete(`/affirmations/remove/${entryId}`)
      .then(() => console.log('Successfully deleted'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    viewAffirmations();
  }, []);

  const editAffirmationsTitle = () => {
    setIsEditing(true)
  };

  // when user finishes editing and presses enter, update the title
const handleTitleKeyDown = (e: any) => {
    if (e.key === "Enter") {
    //   updateTitle();
      setIsEditing(false);
    }
  };

  // when user clicks outside the input box, cancel editing
const handleTitleBlur = () => {
    setIsEditing(false);
  };

//   // send a PUT request to update the title
// const updateTitle = () => {
//     axios
//       .put(`/affirmations/${entry.id}`, { title: editedTitle })
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   };

  return (
    <div id='parent'>
      {retrievedAffirmations.map((entry: any) => {
        return (
            <div
            id='affirmations'
            style={{ display: 'flex', justifyContent: 'center' }}
            >
            <Card
              variant='outlined'
              id={`card-${entry.id}`}
              style={{
                width: '600px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {
                <React.Fragment>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color='text.secondary'
                    gutterBottom
                  >
                    {/* Word of the Day */}
                  </Typography>
                  <Typography variant='h5' component='div'>
                  <div id={`title-${entry.id}`} onClick={() => {editAffirmationsTitle()}}>
                  { isEditing ? ( <input
      type="text"
      defaultValue={entry.title}
      onChange={(e) => setEditedTitle(e.target.value)}
      onKeyDown={handleTitleKeyDown}
      onBlur={handleTitleBlur}
    />) : (<div><span style={{ marginRight: '10px' }}>
                        {entry.title}
                      </span>
                      <span>
                        <DeleteOutlineOutlinedIcon
                          style={{ marginTop: '15px', cursor: 'pointer' }}
                          onClick={() => {
                            deleteAffirmations(entry.id);
                          }}
                        />
                      </span></div>) }

                    </div>

                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {/* adjective */}
                  </Typography>
                  <Typography variant='body2'>
                    <div id={`affirmationList-${entry.id}`}>
                      {entry.affirmationList
                        .split('/n')
                        .map((affirmation: string) => (
                          <div>{affirmation}</div>
                        ))}
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </React.Fragment>
              }
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default AffirmationEntries;
