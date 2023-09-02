
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
  db.query("select count(*) as NationalTourCount from nationalTour", (err, results) => {
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
   

//add rating
export const addNationalRating = (rating, id, result) => {
  const sql = "INSERT INTO nationalrating (rating, national_id) VALUES (?, ?)";
  db.query(sql, [rating, id], (err, results) => {
    if (err) {
      console.error("Error inserting rating:", err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get all rating
export const getNationalRatings = (result) => {
  db.query("select * from nationalrating", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get avg rating
export const getNationalAverageRating = (id, result) => {
  db.query(
    "select AVG(rating) as avg_rating from nationalrating WHERE national_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// get avg ratings
export const getNationalAverageRatings = (result) => {
  db.query(
    "SELECT national_id, avg(rating) as avg FROM nationalrating GROUP BY national_id order by national_id",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const getSumOfNationalPayments= (result)=> {
  db.query(
    "select SUM(amount) as NationalSum from nationalpayment",

    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
}