
import { addTrek, getTrekById, getTrekCount, getTreks } from "../models/treks.js";


  //get all treks
  export const showTreks = (req, res) => {
    getTreks((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

    //get treks count
    export const trekCount = (req, res) => {
      getTrekCount((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    };
  
  //get trek by id
  export const showTrekById = (req, res) => {
    const id = req.params.id;
    getTrekById(id, (err, results) => {
      if (err) {
        res.send(err);
      } else res.json(results);
    });
  };


//add trek
export const createTrek = (req, res) => {
  const data = req.body;
  addTrek(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
