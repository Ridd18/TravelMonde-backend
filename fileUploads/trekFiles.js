import multer from "multer";

import db from "../util/database.js";
import fs from "fs";
import mime from "mime";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/treks/");
  },
  filename: function (req, file, cb) {
    const name = file.originalname;
    console.log("filename in multer line 15", name);
    cb(null, `${name}`);
    const newName = name.slice(0, name.length - 4);
    console.log("filename in multer line 20", newName);

    db.query(
      "select trek_id from treks where name = ?",
      [newName],
      (err, res) => {
        if (err) {
          console.log("Error selecting from USERS: ", err);
          // return result(err, null);
        }
        //res should have the value for the familyId of the given user so in next line pass res not result
        db.query(
          "INSERT INTO trekfiles (file_name,trek_id) VALUES (?,?)",
          [name, res[0].trek_id],
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

  },
});

export const upload = multer({ storage: storage });

const baseUrl = "http://localhost:3000/";

const baseDir = "C:/riddhesh/FinalYearProject/final/backend";

//get tour id by filename
export const getTrekIdByFileName = (file_name, result) => {
  db.query(
    "select trek_id as id from treks WHERE name = ?",
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

export const getListFiles = (req, res) => {
  const directoryPath = baseDir + "/uploads/treks/";

  fs.readdir(directoryPath, function (err, trekFiles) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    trekFiles.forEach((file) => {
      fileInfos.push({
        name: file,
        // url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

//download

export const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = baseDir + "/uploads/treks/";

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

export const getTrekFileCount = (result) => {
  db.query(
    "select count(*) as trekFilesCount from trekfiles",
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

export const getFileByFileName = (file_name, result) => {
  db.query(
    "select * from trekfiles WHERE file_name = ?",
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

//get trek files by trek id
export const getTrekFileById = (id, result) => {
  db.query(
    "select * from trekfiles WHERE trek_id = ?",
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
