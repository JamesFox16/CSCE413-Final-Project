const express = require('express');
const apiRouter = require('./routes');
const port = '3005';

const app = express();

app.use(express.json());
app.use('/api/data', apiRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${process.env.PORT || port}`);
});
