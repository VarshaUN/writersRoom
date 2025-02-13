const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello folks!,Today we are going to learn about deploying a Node.js web application with Docker ,Kubernetes and CI/CD using Github Actions");
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
