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
    const newName = name.slice(0, name.length - 4);
    console.log("filename in multer line 20", newName);
    
  db.query(
      "select national_id from nationaltour where name = ?",
      [newName],
      (err, res) => {
        if (err) {
          console.log("Error selecting from USERS: ", err);
          // return result(err, null);
        }
        //res should have the value for the familyId of the given user so in next line pass res not result
        db.query(
          "INSERT INTO nationalfiles (file_name,national_id) VALUES (?,?)",
          [name, res[0].national_id],
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



//get national files by national id
export const getNationalFileById = (id, result) => {
  db.query(
    "select * from nationalfiles WHERE national_id = ?",
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
export const getNationalIdByFileName = (file_name, result) => {
  db.query(
    "select national_id as id from nationaltour WHERE name = ?",
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
