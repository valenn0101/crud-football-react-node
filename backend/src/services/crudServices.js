const { v4, uuid } = require('uuid');
const clubsInfo = require('../database/clubsInfo');

const getAllClub = () => {
  const allClubs = clubsInfo.getAllClubs();
  return allClubs;
};

const getOneClub = (clubId) => {
  const club = clubsInfo.getOneClub(clubId);
  return club;
};

const createNewClub = (newClub) => {
  const clubToInsert = {
    ...newClub,
    id: uuid(),
    createdAt: new Date().toISOString('es-ARG', { timeZone: 'GMT-3' }),
    updatedAt: new Date().toISOString('es-ARG', { timeZone: 'GMT-3' }),
  };

  const createdClub = clubsInfo.createNewClub(clubToInsert);
  return createdClub;
};

const updateOneClub = (clubId, changes) => {
  const updatedClub = clubsInfo.updateOneClub(clubId, changes);
  return updatedClub;
};

const deleteOneClub = (clubId) => {
  clubsInfo.deleteOneClub(clubId);
};

module.exports = {
  getAllClub,
  getOneClub,
  createNewClub,
  updateOneClub,
  deleteOneClub,
};
