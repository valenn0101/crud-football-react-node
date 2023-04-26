const express = require('express');
const v1CrudRouter = require('./v1/routes/crudRoutes');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3030;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app
  .use(methodOverride('_method'))
  .use(express.json())
  .use(cors())
  .use('/api/v1/crud/', v1CrudRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}🚀🚀`);
});
