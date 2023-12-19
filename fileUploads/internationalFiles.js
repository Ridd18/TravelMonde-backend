import multer from "multer";

import db from "../util/database.js";
import fs from "fs";
import mime from "mime";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/internationals/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
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
