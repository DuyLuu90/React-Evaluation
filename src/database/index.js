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
  const names=[]
  const data=[];
  const dataAccessMethod1 = () => _.forEach(db.hobbiesOfUserByUsername, (array,key) => {
    if (array.includes(hobby)){
      names.push(key)
    }  
  })
  dataAccessMethod1()

  const dataAccessMethod2= ()=> _.forEach(db.usersById, (obj) => {
    if (names.includes(obj.username)){
      if (data.find(i=>i.age===obj.age)){
        let element= data.find(i=>i.age===obj.age)
        element.count = element.count+1; 
      }
      else {
        data.push({
          age: obj.age,
          count: 1
        })
      }
    }  
  })

  dataAccessMethod2()

  return data;
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies,
};
