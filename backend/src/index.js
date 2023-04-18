const express = require('express');
const path = require('path');
const v1CrudRouter = require('./v1/routes/crudRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app
  .use(express.json())
  .use('/api/v1/crud/', v1CrudRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}🚀🚀`);
});
