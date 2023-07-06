
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
