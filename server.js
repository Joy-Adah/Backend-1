const express = require('express');

const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  // Get parameters from the request
  const slackName = req.query.slack_name;

  const track = req.query.track;

  // Get current day of the week
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const currentDay = new Date().toLocaleString('en-GB', { weekday: 'long' });

  const now = new Date();

  // Get current UTC time
  const currentDate = now.toISOString().slice(0, 19) + 'Z';

  // Get URL of the file being run
  const githubFileUrl =
    'https://github.com/Joy-Adah/Backend-1/blob/main/server.js';

  // Get GitHub repository URL
  const githubRepoUrl = 'https://github.com/Joy-Adah/Backend-1';

  // Prepare JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentDate,
    track: track,
    github_repo_url: githubRepoUrl,
    github_file_url: githubFileUrl,
    status_code: 200,
  };

  // Send the JSON response
  res.json(jsonResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
