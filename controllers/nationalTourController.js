
import { getNationalFileByFileName, getNationalFileById, getNationalFileCount, getNationalIdByFileName } from "../fileUploads/nationalFiles.js";
import { addNationalTour, getNationalTourById, getNationalTourCount, getNationalTours } from "../models/nationalTours.js";


  //get all NationalTour
  export const showNationalTours = (req, res) => {
    getNationalTours((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

    //get NationalTour count
    export const NationalTourCount = (req, res) => {
      getNationalTourCount((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    };
  
  //get NationalTour by id
  export const showNationalTourById = (req, res) => {
    const id = req.params.id;
    getNationalTourById(id, (err, results) => {
      if (err) {
        res.send(err);
      } else res.json(results);
    });
  };


//add NationalTour
export const createNationalTour = (req, res) => {
  const data = req.body;
  addNationalTour(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


//get national by national name
export const showNationalTourByNationalName = (req, res) => {
  const name = req.params.name;
  getNationalFileByFileName(name, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get national files count
export const NationalFileCount = (req, res) => {
  getNationalFileCount((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get national id by national name
export const showNationalIdByFilename = (req, res) => {
  const name = req.params.name;
  getNationalIdByFileName(name, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get national files by national id
export const showNationalFileById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  getNationalFileById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};