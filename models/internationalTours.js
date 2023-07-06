  import db from "../util/database.js"

// get all InternationalTours
export const getInternationalTours = (result) => {
  db.query("select * from internationalTour", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getInternationalTourCount = (result) => {
  db.query("select count(*) as count from internationalTour", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single InternationalTour
export const getInternationalTourById = (id, result) => {
  db.query("SELECT * FROM internationalTour WHERE international_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};



  
 //add InternationalTour
export const addInternationalTour = (data, result) => {
    db.query("INSERT INTO internationalTour SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
   
