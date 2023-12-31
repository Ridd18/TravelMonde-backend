
import {login, insertUser,getUserById, getUserCount, getUsers, loginOFAdmin,deleteUserById,updateUserById} from "../models/user.js";


  //get all users
  export const showUsers = (req, res) => {
    getUsers((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

    //get user count
    export const userCount = (req, res) => {
      getUserCount((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    };
  
  //get user by id
  export const showUserById = (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
      if (err) {
        res.send(err);
      } else res.json(results);
    });
  };

  export const loginUser = (req, res) => {
    const data = req.body;
    const email = data.email;
    const pass = data.password;
    console.log(email);
    console.log(pass);
    console.log(data);
   
      login(
        email,
        pass,
        (err, results) => {
          if (err) {
            res.send(err);
          } else {
            res.json(results);
          }
        });
    

  };



// export const loginUser = (req, res) => {
//     const data = req.body;
//     const email = data.email;
//     const pass = data.password;
//     console.log(email);
//     console.log(pass);
//     console.log(data);
//     login(
//       email,
//       pass,
//       (err, results) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.json(results);
//         }
//       });
//   };

  export const loginAdmin = (req, res) => {
    const data = req.body;
    const email = data.email;
    const pass = data.password;
    console.log(email);
    console.log(pass);
    console.log(data);
    loginOFAdmin(
      email,
      pass,
      (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
  };


export const createUser = (req, res) => {
  const data = req.body;
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


export const deleteUser = (req, res) => {
  const id = req.params.id;
  deleteUserById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update User
export const updateUser = (req, res) => {
const data = req.body;
const id = req.params.id;
updateUserById(data, id, (err, results) => {
  if (err) {
    res.send(err);
  } else {
    res.json(results);
  }
});
};