
import { addInternationalTour, getInternationalTourById, getInternationalTourCount, getInternationalTours } from "../models/internationalTours.js";


  //get all InternationalTour
  export const showInternationalTours = (req, res) => {
    getInternationalTours((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

    //get InternationalTour count
    export const InternationalTourCount = (req, res) => {
      getInternationalTourCount((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    };
  
  //get InternationalTour by id
  export const showInternationalTourById = (req, res) => {
    const id = req.params.id;
    getInternationalTourById(id, (err, results) => {
      if (err) {
        res.send(err);
      } else res.json(results);
    });
  };


//add InternationalTour
export const createInternationalTour = (req, res) => {
  const data = req.body;
  addInternationalTour(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
