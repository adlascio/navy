const settings = require("./settings"); // settings.json


var knex = require('knex')({
    client: 'pg',
    connection: {
        user     : settings.user,
        password : settings.password,
        database : settings.database,
        host     : settings.hostname,
        port     : settings.port,
        ssl      : settings.ssl}
  });

knex.select('*').from('famous_people').asCallback((error, results) => {
    console.log(results);
});

// const insert = process.argv.slice(2); 

// knex('famous_people').insert({
//     first_name: insert[0],
//     last_name: insert[1],
//     birthdate: insert[2]
// }).asCallback((error, results) => {
//         console.log(results);
//     });