import React, { useState } from 'react';
import './menu.css';
import axios from 'axios'; 
import ResponseData from './testInfo'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
interface MenuProps {
  activities: string[];
  handleCreate: (namesObj: []) => void;
}

const Menu: React.FC<MenuProps> = ({ activities, handleCreate }) => {
  const [isOpen, setIsOpen] = useState(false);
const [showResponseData, setShowResponseData] = useState(false);
const [responseData, setResponseData] = useState<any[]>([]);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const onCreate = (activity: String): void => {
  
    axios
      .post('recommend/search', {
       data: {
        keyword: activity
       }
      })
      .then((response) => {
       const namesObj = response.data
    console.log(namesObj)
    handleCreate(namesObj)
    setShowResponseData(true); 
      setResponseData(namesObj);
       
    //   //   response.data.results.forEach((result: { name: any; }) => {
    //   // console.log(result.name);
    // });

      })
      .catch((error) => {
        console.log(error);
      });
  
  };

 return (
    <div className={`menu${isOpen ? ' open' : ''}`} onClick={handleMenuClick}>
      {isOpen ? (
        <Stack spacing={2}>
          <Button style={{ backgroundColor: '#117df2' }}  onClick={() => onCreate(activities[0])} variant="contained">Outside</Button>
          <Button style={{ backgroundColor: '#117df2' }} onClick={() => onCreate(activities[1])} variant="contained">Hobbies</Button>
          <Button style={{ backgroundColor: '#117df2' }} onClick={() => onCreate(activities[2])} variant="contained">Studying</Button>
          <Button style={{ backgroundColor: '#117df2' }} onClick={() => onCreate(activities[2])} variant="contained">Studying</Button>
        </Stack>
      ) : (
        '+'
      )}
      {/* {showResponseData && <ResponseData responseData={responseData} />} */}
    </div>
  );
};

export default Menu;
