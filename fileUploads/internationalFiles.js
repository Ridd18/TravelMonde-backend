import multer from "multer";

import db from "../util/database.js";
import fs from "fs";
import mime from "mime";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/internationals/");
  },
  filename: function (req, file, cb) {
    const name = file.originalname;

    console.log("filename in multer line 15", name);
    cb(null, `${name}`);

    const newName = name.slice(0, name.length - 4);
    console.log("filename in multer line 20", newName);

    db.query(
      "select international_id from internationalTour where name = ?",
      [newName],
      (err, res) => {
        if (err) {
          console.log("Error selecting from USERS: ", err);
          // return result(err, null);
        }
        //res should have the value for the familyId of the given user so in next line pass res not result
        db.query(
          "INSERT INTO internationalfiles (file_name,international_id) VALUES (?,?)",
          [name, res[0].international_id],
          (err, res) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          }
        );
        console.log("created task: ");
        // return result(null, err);
      }
    );

    // db.query(
    //     "select international_id from internationalTour where name = ?",
    //     [newName],

    //     (err, results) => {
    //       if (err) {
    //         console.log(err);
    //       } else {
    //         console.log("line 53",results);
    //       }
    //     }
    //   );

    // db.query(
    //   "INSERT INTO internationalfiles SET file_name = ?",
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

export const uploadInternationals = multer({ storage: storage });

const baseUrl = "http://localhost:3000/";

const baseDir = "C:/riddhesh/FinalYearProject/final/backend";


//get tour id by filename
export const getInternationalIdByFileName = (file_name, result) => {
  db.query(
    "select international_id as id from internationalTour WHERE name = ?",
    [file_name],
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

//get all files

export const getListOFInternationalFiles = (req, res) => {
  const directoryPath = baseDir + "/uploads/internationals/";

  fs.readdir(directoryPath, function (err, internationalFiles) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    internationalFiles.forEach((file) => {
      fileInfos.push({
        name: file,
        // url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

//download

export const downloadInternational = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = baseDir + "/uploads/internationals/";

  const file = directoryPath + fileName;
  const mimetype = mime.getType(file);

  console.log(mimetype);

  res.setHeader("Content-Type", mimetype);
  res.setHeader("Content-disposition", `attachment; filename="${fileName}"`);

  res.download(file, fileName, (err) => {
    console.log(file);
    console.log(fileName);
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

export const getInternationalFileCount = (result) => {
  db.query(
    "select count(*) as internationalFilesCount from internationalFiles",
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

export const getInternationalFileByFileName = (file_name, result) => {
  db.query(
    "select * from internationalFiles WHERE file_name = ?",
    [file_name],
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


//get tour files by international id
export const getInternationalFileById = (id, result) => {
    db.query(
      "select * from internationalFiles WHERE international_id = ?",
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