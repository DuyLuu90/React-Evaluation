'use strict';
/*
const express= require('express')
const app = express();
*/

const app= require('./app');
const {port} = require('./config')
//const registerRoutes = require('./routes');

// server config
//const port = process.env.PORT || 8000;

// register routes
//registerRoutes(app);

//CORS:


// create server start method
// const start = () => {
//     console.log(port)
//     return new Promise((resolve, reject) => {
//         // start the server
//         app.listen(port, () => {
//             console.log(`Connected to Port ${port}`);
//             resolve()
//         });
//     }).catch((error) => {
//         console.log(`failed to start server => ${error.message}`)
//     });
// }

// module.exports = start;

app.listen(port, ()=> {
    console.log(`Server listening at https://localhost:${port}`)
})


