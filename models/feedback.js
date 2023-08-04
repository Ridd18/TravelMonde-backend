import db from "../util/database.js";

// get all users
export const getFeedbacks = (result) => {
  db.query("select * from feedback", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getFeedbackCount = (result) => {
  db.query("select count(*) as feedbackCount from feedback", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single user
export const getFeedbackById = (id, result) => {
  db.query(
    "SELECT * FROM feedback WHERE feedback_id = ?",
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

//register
export const insertFeedback = (data, result) => {
  db.query("INSERT INTO feedback SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Delete user
export const deletFeedbackById = (id, result) => {
  db.query(
    "DELETE FROM feedback WHERE feedback_id = ?",
    [id],
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
