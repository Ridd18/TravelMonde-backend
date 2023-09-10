import {
  getInternationalFileByFileName,
  getInternationalFileById,
  getInternationalFileCount,
  getInternationalIdByFileName,
} from "../fileUploads/internationalFiles.js";
import {
  addInternationalRating,
  addInternationalTour,
  getInternationalAverageRating,
  getInternationalRatings,
  getInternationalTourById,
  getInternationalTourCount,
  getInternationalTours,
  getInternationalAverageRatings,
  getSumOfInternationalPayments,
  getInternationalPayments
} from "../models/internationalTours.js";

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

//get International id by International name
export const showInternationalTourIdByFilename = (req, res) => {
  const name = req.params.name;
  getInternationalIdByFileName(name, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get International by International name
export const showInternationalTourByInternationalName = (req, res) => {
  const name = req.params.name;
  getInternationalFileByFileName(name, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get International files count
export const InternationalFileCount = (req, res) => {
  getInternationalFileCount((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get International by International name
export const showInternationalTourFileById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  getInternationalFileById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//add rating to tour
export const createInternationalRating = (req, res) => {
  const { rating, id } = req.body;
  const data = req.body;
  console.log(data);
  console.log(rating);

  console.log(id);
  addInternationalRating(rating, id, (err, results) => {
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
export const showInternationalRatings = (req, res) => {
  getInternationalRatings((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get InternationalTour by id
export const showAVGInternationalTourById = (req, res) => {
  const id = req.params.id;
  getInternationalAverageRating(id, (err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};

//get all trek avg
export const showAllAVGInternational = (req, res) => {
  getInternationalAverageRatings((err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};


//get sum of international payments
export const showInternationalPayments = (req, res) => {
  getSumOfInternationalPayments((err, results) => {
    if (err) {
      res.send(err);
    } else res.json(results);
  });
};


//get all payments
export const showAllInternationalPayments = (req, res) => {
  getInternationalPayments((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
