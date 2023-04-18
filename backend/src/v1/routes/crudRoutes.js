const express = require('express');

const router = express.Router();

router
  .get('/', (req, res) => {
    res.send('Hello world');
  })

  .get('/show/:clubId')

  .get('/createClub')

  .post('/createClub')

  .get('/edit/:clubId')

  .patch('/edit/:clubId')

  .delete('/delete/:clubId');

module.exports = router;
