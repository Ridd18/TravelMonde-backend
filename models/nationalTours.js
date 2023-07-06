
import db from "../util/database.js"

// get all nationalTours
export const getNationalTours = (result) => {
  db.query("select * from nationalTour", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getNationalTourCount = (result) => {
  db.query("select count(*) as count from nationalTour", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single national Tour
export const getNationalTourById = (id, result) => {
  db.query("SELECT * FROM nationalTour WHERE national_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};


 //add national Tour
export const addNationalTour = (data, result) => {
    db.query("INSERT INTO nationalTour SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
   
