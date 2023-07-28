import mysql from "mysql2";

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ridd18',
    database:'travelmonde',
    multipleStatements: true
});

// db.connect((err,result)=> {
//     if(err) {
//         console.log(err)

//     }
//     else {
//         console.log(result)
//     }
// })

export default db;


