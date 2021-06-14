'use strict';
const express= require('express')
const mockDBCalls = require('../database/index.js');
const HobbiesRouter= express.Router()

// const getHobbiesHandler = async (request, response) => {
//   const data = await mockDBCalls.getHobbies();
//   //return response.status(200).send(JSON.stringify(data));

// };

HobbiesRouter.route('/')
  .get(async (req, res) =>{
    const data = await mockDBCalls.getHobbies();
    //return res.status(200).send(JSON.stringify(data));
    return res.status(200).json(data);
  })

module.exports= HobbiesRouter

/*
module.exports = (app) => {
  app.get('/hobbies', getHobbiesHandler);
};
*/
