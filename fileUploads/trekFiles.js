import multipart from 'connect-multiparty';

import db from "../util/database.js";
import fs from "fs";
import mime from "mime";


export const multipartMiddleware = multipart({
    uploadDir: './uploads',
    
});




const baseUrl = "http://localhost:3000/";

const baseDir = "C:/riddhesh/FinalYearProject/final/backend"

//get all files

export const getListFiles = (req, res) => {
  const directoryPath =  baseDir + "/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
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
  const directoryPath = baseDir + "/uploads/";

  const file = directoryPath + fileName ;
  const mimetype = mime.getType(file);

  console.log(mimetype);

  res.setHeader('Content-Type', mimetype)
  res.setHeader('Content-disposition', `attachment; filename="${fileName}"`);

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

export const getFileCount = (result) => {
    db.query("select count(*) as count from file", (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
  

