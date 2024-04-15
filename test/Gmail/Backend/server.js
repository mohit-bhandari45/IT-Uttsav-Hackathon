const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.raw({ type: '*/*' }));

app.post('/', (req, res) => {
  if (req.url === '/') {
    const body = req.body;
    const boundary = req.headers['content-type'].split('; ')[1].split('=')[1];
    const parts = body.toString().split(`--${boundary}`);

    // Iterate through each part, excluding the first and last
    for (let i = 1; i < parts.length - 1; i++) {
      const part = parts[i];
      const [, filename, fileData] = part.match(/filename="(.*)"\s+([\s\S]*)/);
      const filePath = path.join(__dirname, 'uploads', filename.trim());

      // Write the file data to disk
      fs.writeFile(filePath, fileData.trim(), (err) => {
        if (err) {
          console.error('Error saving file:', err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('File saved successfully:', filename);
          res.status(200).send('File uploaded successfully');
        }
      });
    }
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
