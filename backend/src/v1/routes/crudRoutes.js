const express = require('express');

const router = express.Router();
const crudController = require('../../controllers/crudControllers');

router
  .get('/', crudController.getAllClubs)

  .get('/show/:clubId', crudController.getOneClub)

  .post('/createClub', crudController.createNewClub)

  .patch('/edit/:clubId', crudController.editOneClub)

  .delete('/delete/:clubId', crudController.deleteOneClub);

module.exports = router;
