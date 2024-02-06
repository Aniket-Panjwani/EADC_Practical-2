const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, this is a code by Aniket to test pipeline and this is the second version');
    res.send('Hello, this is the second version to test AWS codepipline i have made changes in vs code and pushed to github it will automaticaly publice the changes to the AWS Elasticbeansstalk using code pipline');
  });
  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});


//Aniket's Code for CI/CD Pipeline