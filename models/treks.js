import db from "../util/database.js";

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
  db.query("select count(*) as TrekCount from treks", (err, results) => {
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



export const addTrekRating = (rating, id, result) => {
  const sql = "INSERT INTO trekrating (rating, trek_id) VALUES (?, ?)";
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
export const getTrekRatings = (result) => {
  db.query("select * from trekrating", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get avg rating
export const getTrekAverageRating = (id, result) => {
  db.query(
    "select AVG(rating) as trek_avg from trekrating WHERE trek_id = ?",
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
export const getTrekAverageRatings = (result) => {
  db.query(
    "SELECT trek_id, avg(rating) as avg FROM trekrating GROUP BY trek_id order by trek_id",
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


export const getSumOfTrekPayments= (result)=> {
  db.query(
    "select SUM(amount) as TrekSum from trekpayment",

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