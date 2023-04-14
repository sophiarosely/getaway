const express = require('express');
const path = require('path');
const app = express();
const port = 8080;




const clientPath = path.resolve(__dirname, '..', 'dist')



app.use(express.static(clientPath));






//bottom
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});



