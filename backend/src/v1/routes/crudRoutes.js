const express = require('express');

const router = express.Router();
const crudController = require('../../controllers/crudControllers');
const { upload } = require('../../multer')

router
  .get('/', crudController.getAllClubs)

  .get('/show/:clubId', crudController.getOneClub)

  .post('/createClub', upload.single('crestLocal') , crudController.createNewClub)

  .post('/edit/:clubId', upload.single('crestLocal') , crudController.editOneClub)

  .delete('/delete/:clubId', crudController.deleteOneClub);

module.exports = router;
