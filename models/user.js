import db from "../util/database.js";

// get all users
export const getUsers = (result) => {
  db.query("select * from users", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getUserCount = (result) => {
  db.query("select count(*) as count from users", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single user
export const getUserById = (id, result) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//login
export const login = (email, password, result) => {
  if(email && password) {
  db.query(
    "select * from users where email = ? and password = ?",
    [email, password],
    (results, err) => {
      if (results) {
        console.log(results);
        result(null,results);
      } else {
        result(err,null);
      }
    }
  );
  }
};


// //login
// export const login = async (email, password, result) => {
//   db.query(
//     "select * from users where email = ? and password = ?",
//     [email, password],
//     (results, err) => {
//       if (results) {
//         console.log(results);
//         result(null, results);
//       } else {
//         result(results, err);
//       }
//     }
//   );
// };

//login try 
export const getUserByEmailAndPassword = async(email, password, result) => {
  db.query(
    "select * from users where email = ? and password = ?",
    [email, password],
    (results, err) => {
      if (results) {
        console.log(results);
        result(null, results);
      } else {
        result(results, err);
      }
    }
  );
}

export const login2 = (result) => {
  if(getUserByEmailAndPassword() ===true)
  {
    console.log("hiee")
  }
}

//login admin
export const loginOFAdmin = async (email, password, result) => {
  db.query(
    "select * from admin where email = ? and password = ?",
    [email, password],
    (results, err) => {
      if (results) {
        console.log(results);
        result(null, results);
      } else {
        result(results, err);
      }
    }
  );
};

//register
export const insertUser = (data, result) => {
  db.query("INSERT INTO users SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
