
import db from "../util/database.js"

// get all treks
export const getTreks = (result) => {
  db.query("select * from treks", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getTrekCount = (result) => {
  db.query("select count(*) as count from treks", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single trek
export const getTrekById = (id, result) => {
  db.query("SELECT * FROM treks WHERE trek_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};



  
 //add trek
export const addTrek = (data, result) => {
    db.query("INSERT INTO treks SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
   