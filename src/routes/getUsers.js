'use strict';
const mockDBCalls = require('../database/index.js');
const express= require('express')
const UsersRouter= express.Router()

// const getUsersHandler = async (request, response) => {
//     const data = await mockDBCalls.getUsers();
//     return response.status(200).send(JSON.stringify(data));
// };

// module.exports = (app) => {
//     app.get('/users', getUsersHandler);
// };


UsersRouter.route('/')
  .get(async (req, res) =>{
    const data = await mockDBCalls.getUsers();
    return res.status(200).json(data);
  })

UsersRouter.route('/age')
  .get(async (req, res) =>{
    //const hobbyToLookup = 'pc gaming';
    const {hobbyToLookup}= req.query
    const data = await mockDBCalls.getListOfAgesOfUsersWith(hobbyToLookup);
    return res.status(200).json(data)
  })

module.exports= UsersRouter