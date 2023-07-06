
import db from "../util/database.js"

// get all users
export const getCampings = (result) => {
  db.query("select * from camping", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getCampingCount = (result) => {
  db.query("select count(*) as count from camping", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single user
export const getCampingById = (id, result) => {
  db.query("SELECT * FROM camping WHERE camping_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};



  
 //register
export const addCamping = (data, result) => {
    db.query("INSERT INTO camping SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
   
