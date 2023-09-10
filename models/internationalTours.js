import db from "../util/database.js";

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
  db.query(
    "select count(*) as InternationalTourCount from internationalTour",
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

// get single InternationalTour
export const getInternationalTourById = (id, result) => {
  db.query(
    "SELECT * FROM internationalTour WHERE international_id = ?",
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

//add rating
export const addInternationalRating = (rating, id, result) => {
  const sql = "INSERT INTO internationalrating (rating, international_id) VALUES (?, ?)";
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
export const getInternationalRatings = (result) => {
  db.query("select * from rating", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get avg rating
export const getInternationalAverageRating = (id, result) => {
  db.query(
    "select AVG(rating) as avg_rating from rating WHERE international_id = ?",
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
export const getInternationalAverageRatings = (result) => {
  db.query(
    "SELECT international_name, avg(rating) as avg FROM internationalrating GROUP BY international_name order by international_name",
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

export const getSumOfInternationalPayments= (result)=> {
  db.query(
    "select SUM(amount) as InternationalSum from internationalpayment",

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

// get all pamyents
export const getInternationalPayments = (result) => {
  db.query("select * from internationalpayment", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
