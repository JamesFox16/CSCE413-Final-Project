const express = require('express');
const apiRouter = require('./routes');
const cors = require('cors');
const port = '3001';

const app = express();

app.use(express.json());
app.use(cors);
app.use('/api/data', apiRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${process.env.PORT || port}`);
});
