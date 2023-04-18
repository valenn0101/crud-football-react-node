const crudServices = require('../services/crudServices');

const getAllClubs = (req, res) => {
  console.log('All teams');
  const limit = req.query.limit ? parseInt(req.query.limit) : 20;
  const allClubs = crudServices.getAllClub().slice(0, limit);
  res.status(200).json({ status: 'OK', data: allClubs });
};

const getOneClub = (req, res) => {
  console.log('One team');
  const {
    params: { clubId },
  } = req;

  if (!clubId) {
    return res.status(400).json({ error: 'This clubId is not found' });
  }
  const club = crudServices.getOneClub(clubId);
  res.status(200).json({ status: 'OK', data: club });
};

const createNewClub = (req, res) => {
  console.log('Creating new club');

  const { body, file } = req;
  const requiredFields = ['name', 'tla', 'clubColors', 'venue', 'founded'];
  const missingFields = requiredFields.filter((field) => !body[field]);

  if (missingFields.length) {
    const errorMessage = `Missing required fields: ${missingFields.join(', ')}`;
    return res.status(400).json({ error: errorMessage });
  }

  const newClub = {
    name: body.name,
    shortName: body.shortName,
    tla: body.tla,
    email: body.email,
    phone: body.phone,
    website: body.website,
    founded: body.founded,
    clubColors: body.clubColors,
    venue: body.venue,
    address: body.address,
    crestUrl: body.crestUrl,
    crestLocal: file.filename,
  };

  const createdClub = crudServices.createNewClub(newClub);
  res.status(200).json({ status: 'OK', data: createdClub });
};

const editOneClub = (req, res) => {
  console.log('Editing one club');

  const {
    body,
    params: { clubId },
  } = req;

  if (!clubId) {
    return res.status(404).json({ error: 'Club not found' });
  }

  const updatedOneClub = crudServices.updateOneClub(clubId, body);
  res.status(200).json({ status: 'OK', data: updatedOneClub });
};

const deleteOneClub = (req, res) => {
  console.log('Deleting one club');

  const {
    params: { clubId },
  } = req;

  if (!clubId) {
    return res.status(404).json({ error: 'Club not deleted' });
  }

  const deletedClub = crudServices.deleteOneClub(clubId);
  res.status(200).send({ status: 'OK' });
};

module.exports = {
  getAllClubs,
  getOneClub,
  createNewClub,
  editOneClub,
  deleteOneClub,
};
