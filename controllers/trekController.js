import {
  getFileByFileName,
  getTrekFileById,
  getTrekFileCount,
  getTrekIdByFileName,
} from "../fileUploads/trekFiles.js";

import {
  addTrek,
  addTrekRating,
  getTrekAverageRating,
  getTrekById,
  getTrekCount,
  getTrekRatings,
  getTreks,
} from "../models/treks.js";

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

//get trek by trek name
export const showTrekByTrekName = (req, res) => {
  const name = req.params.name;
  getFileByFileName(name, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get treks files count
export const trekFileCount = (req, res) => {
  getTrekFileCount((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get trek id by trek name
export const showTrekIdByFilename = (req, res) => {
  const name = req.params.name;
  getTrekIdByFileName(name, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get trek files by trek id
export const showTrekFileById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  getTrekFileById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};



//add rating to tour
export const createTrekRating = (req, res) => {
  const { rating, id } = req.body;
  const data = req.body;
  console.log(data);
  console.log(rating);

  console.log(id);
  addTrekRating(rating, id, (err, results) => {
    if (err) {
      res.send(err);
      res.status(500)
    } else {
      res.json(results);
      res.status(200)
    }
  });
};


//get all ratings
export const showTrekRatings = (req, res) => {
  getTrekRatings((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


//get InternationalTour by id
export const showAVGTrekById = (req, res) => {
  const id = req.params.id;
  getTrekAverageRating(id, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};
