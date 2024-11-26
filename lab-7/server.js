const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

server.post('/ITC505/lab-7', (req, res) => {
  const { 
    adjectiveOne, 
    nounOne, 
    verbOne, 
    adjectiveTwo, 
    placeOne 
  } = req.body;

  if (!adjectiveOne || !nounOne || !verbOne || !adjectiveTwo || !placeOne) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out ALL fields</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `);
    return;
  }
  const madLib = `In the heart of a ${adjectiveOne} forest, a brave ${nounOne} embarked 
  on a quest to ${verbOne} the legendary treasure. Armed with only their wits and a 
  ${adjectiveTwo} map, they ventured to the ancient ruins of ${placeOne}. As they 
  entered the crumbling gates, they faced challenges that would test their courage, 
  but the promise of glory kept them moving forward!`;

  res.send(`
    <h1>Submission Successful</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
  `);
});

let port = 80;
if (process.argv[2] === 'local') {
  port = 8080;
}

server.listen(port, () => console.log('Ready on localhost!'));
