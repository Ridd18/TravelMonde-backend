import { deletFeedbackById, getFeedbackById, getFeedbackCount, getFeedbacks, insertFeedback } from "../models/feedback.js";


  //get all Feedback
  export const showFeedbacks = (req, res) => {
    getFeedbacks((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

    //get Feedback count
    export const FeedbackCount = (req, res) => {
      getFeedbackCount((err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    };
  
  //get Feedback by id
  export const showFeedbackById = (req, res) => {
    const id = req.params.id;
    getFeedbackById(id, (err, results) => {
      if (err) {
        res.send(err);
      } else res.json(results);
    });
  };



//add Feedback
export const createFeedback = (req, res) => {
  const data = req.body;
  insertFeedback(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//delete Feedback
export const deleteFeedback = (req, res) => {
  const id = req.params.id;
  deletFeedbackById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

