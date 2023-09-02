
import { getNationalFileByFileName, getNationalFileById, getNationalFileCount, getNationalIdByFileName } from "../fileUploads/nationalFiles.js";
import { getInternationalAverageRating } from "../models/internationalTours.js";
import { addNationalRating, addNationalTour, getNationalAverageRatings, getNationalRatings, getNationalTourById, getNationalTourCount, getNationalTours } from "../models/nationalTours.js";


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


//add rating to tour
export const createNationalRating = (req, res) => {
  const { rating, id } = req.body;
  const data = req.body;
  console.log(data);
  console.log(rating);

  console.log(id);
  addNationalRating(rating, id, (err, results) => {
    if (err) {
      res.send(err);
      res.status(500);
    } else {
      res.json(results);
      res.status(200);
    }
  });
};

//get all ratings
export const showNationalRatings = (req, res) => {
  getNationalRatings((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get InternationalTour by id
export const showAVGNationalTourById = (req, res) => {
  const id = req.params.id;
  getInternationalAverageRating(id, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get all trek avg
export const showAllAVGnational = (req, res) => {
  getNationalAverageRatings((err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};
