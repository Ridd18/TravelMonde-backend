
import { addCamping, getCampingById, getCampingCount, getCampings } from "../models/campings.js";

import { getCampFileByFileName, getCampFileById, getCampFileCount, getCampIdByFileName } from "../fileUploads/campFiles.js"

  //get all campings
  export const showCampings = (req, res) => {
    getCampings((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

    //get campings count
    export const CampingCount = (req, res) => {
      getCampingCount((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    };
  
  //get campings by id
  export const showCampingById = (req, res) => {
    const id = req.params.id;
    getCampingById(id, (err, results) => {
      if (err) {
        res.send(err);
      } else res.json(results);
    });
  };



// add campings
export const createCamping = (req, res) => {
  const data = req.body;
  addCamping(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get camp by trek name
export const showCampByCampName = (req, res) => {
  const name = req.params.name;
  getCampFileByFileName(name, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get treks files count
export const campFileCount = (req, res) => {
  getCampFileCount((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get camp id by camp name
export const showCampIdByFilename = (req, res) => {
  const name = req.params.name;
  getCampIdByFileName(name, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get camp files by camp id
export const showCampFileById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  getCampFileById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};
