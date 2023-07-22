
// import db from "../config/database.js";

import multer from "multer";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const name = file.originalname;
    console.log("filename in multer line 15", name);
    cb(null, `${name}`);
    // db.query(
    //   "INSERT INTO file SET file_name = ?",
    //   [name],

    //   (err, results) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log(results);
    //     }
    //   }
    // );
  },
});

export const upload = multer({ storage: storage });
