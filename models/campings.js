
import db from "../util/database.js"

// get all campings
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
  db.query("select count(*) as CampingCount from camping", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single camping
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



  
 //add campings
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
   

  
//add rating
export const addCampRating = (rating, id, result) => {
  const sql = "INSERT INTO camprating (rating, camping_id) VALUES (?, ?)";
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
export const getCampRatings = (result) => {
  db.query("select * from camprating", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get avg rating
export const getCampAverageRating = (id, result) => {
  db.query(
    "select AVG(rating) as avg_rating from camprating WHERE camping_id = ?",
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
export const getCampAverageRatings = (result) => {
  db.query(
    "SELECT camping_name, avg(rating) as avg FROM camprating GROUP BY camping_name order by camping_name",
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

export const getSumOfCampPayments= (result)=> {
  db.query(
    "select SUM(amount) as CampingSum from campingpayment",

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
export const getCampPayments = (result) => {
  db.query("select * from campingpayment", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
