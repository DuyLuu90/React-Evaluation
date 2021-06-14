'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};
const getHobbies = () => {
  
  const dataAccessMethod = () => _.map(db.hobbiesOfUserByUsername, (obj) => Object.values(obj)).reduce((a,b)=>a.concat(b))

  const array= dataAccessMethod()
  const data= array.filter((i,pos)=>array.indexOf(i)==pos)
  
  return data;
};

const getListOfAgesOfUsersWith = (hobby) => {
  const dataAccessMethod = () => {
    // fill me in :) should return an arry of age count based on hobby.
    return [
      { age: 18, count: 2 },
      { age: 12, count: 1 },
    ];
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies,
};
