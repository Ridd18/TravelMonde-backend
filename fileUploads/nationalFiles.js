import multer from "multer";

import db from "../util/database.js";
import fs from "fs";
import mime from "mime";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/nationals/");
  },
  filename: function (req, file, cb) {
    const name = file.originalname;
    console.log("filename in multer line 15", name);
    cb(null, `${name}`);
    // const result = db.query("select * from treks where name = ?", [name])
    // console.log(result)
    db.query(
      "INSERT INTO nationalfiles SET file_name = ?",
      [name],

      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
      }
    );
  },
});

export const uploadNationals = multer({ storage: storage });

const baseUrl = "http://localhost:3000/";

const baseDir = "C:/riddhesh/FinalYearProject/final/backend";

//get all files

export const getListOFNationalFiles = (req, res) => {
  const directoryPath = baseDir + "/uploads/nationals/";

  fs.readdir(directoryPath, function (err, nationalFiles) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    nationalFiles.forEach((file) => {
      fileInfos.push({
        name: file,
        // url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

//download

export const downloadNational = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = baseDir + "/uploads/nationals/";

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

export const getNationalFileCount = (result) => {
  db.query("select count(*) as nationalFilesCount from nationalFiles", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getNationalFileByFileName = (file_name, result) => {
  db.query(
    "select * from nationalFiles WHERE file_name = ?",
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

