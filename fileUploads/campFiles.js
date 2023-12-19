import multer from "multer";

import db from "../util/database.js";
import fs from "fs";
import mime from "mime";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/camps/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const uploadCamps = multer({ storage: storage });

const baseUrl = "http://localhost:3000/";

const baseDir = "C:/riddhesh/FinalYearProject/final/backend";

//get all files

export const getListOFCampFiles = (req, res) => {
  const directoryPath = baseDir + "/uploads/camps/";

  fs.readdir(directoryPath, function (err, campFiles) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    campFiles.forEach((file) => {
      fileInfos.push({
        name: file,
        // url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

//download

export const downloadCamp = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = baseDir + "/uploads/camps/";

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

export const getCampFileCount = (result) => {
  db.query(
    "select count(*) as campFilesCount from campfiles",
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

export const getCampFileByFileName = (file_name, result) => {
  db.query(
    "select * from campfiles WHERE file_name = ?",
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

//get camp files by camp id
export const getCampFileById = (id, result) => {
  db.query(
    "select * from campfiles WHERE camping_id = ?",
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

//get tour id by filename
export const getCampIdByFileName = (file_name, result) => {
  db.query(
    "select camping_id as id from camping WHERE name = ?",
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
