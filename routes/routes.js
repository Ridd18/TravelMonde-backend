// import express
import express from "express";

//db
import db from "../util/database.js";

// const User = require("../models/user.js")
import {
  createUser,
  loginAdmin,
  loginUser,
  showUserById,
  showUsers,
  userCount,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import {
  showTrekById,
  showTreks,
  trekCount,
  createTrek,
  showTrekByTrekName,
  trekFileCount,
  showTrekIdByFilename,
  showTrekFileById,
  showAVGTrekById,
  showTrekRatings,
  createTrekRating,
} from "../controllers/trekController.js";
import {
  CampingCount,
  campFileCount,
  createCampRating,
  createCamping,
  showAVGCampById,
  showCampByCampName,
  showCampFileById,
  showCampIdByFilename,
  showCampRatings,
  showCampingById,
  showCampings,
} from "../controllers/campingController.js";
import {
  NationalFileCount,
  NationalTourCount,
  createNationalRating,
  createNationalTour,
  showAVGNationalTourById,
  showNationalFileById,
  showNationalIdByFilename,
  showNationalRatings,
  showNationalTourById,
  showNationalTourByNationalName,
  showNationalTours,
} from "../controllers/nationalTourController.js";
import {
  InternationalTourCount,
  showInternationalTours,
  showInternationalTourById,
  createInternationalTour,
  showInternationalTourIdByFilename,
  InternationalFileCount,
  showInternationalTourFileById,
  createInternationalRating,
  showInternationalRatings,
  showAVGInternationalTourById,
} from "../controllers/internationalTourController.js";

import { upload, getListFiles, download } from "../fileUploads/trekFiles.js";

import {
  downloadCamp,
  getListOFCampFiles,
  uploadCamps,
} from "../fileUploads/campFiles.js";

import {
  downloadNational,
  getListOFNationalFiles,
  uploadNationals,
} from "../fileUploads/nationalFiles.js";
import {
  downloadInternational,
  getListOFInternationalFiles,
  uploadInternationals,
} from "../fileUploads/internationalFiles.js";

const router = express.Router();

//ADMIN

router.post("/admin/login", loginAdmin);

//USERS

router.post("/user/login", loginUser);

router.post("/user/register", createUser);

//get all users
router.get("/user", showUsers);

//get user count
router.get("/user/count", userCount);

// get single user
router.get("/user/:id", showUserById);

//delete user
router.delete("/user/delete/:id", deleteUser);

//update
router.put("/user/edit/:id", updateUser);

//TREKS

//add trek
router.post("/trek/add", createTrek);

//get all treks
router.get("/trek", showTreks);

//get trek count
router.get("/trek/count", trekCount);

// get single trek
router.get("/trek/:id", showTrekById);

//trek file upload

//upload
router.post("/trek/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

//get all files
router.get("/filesTrek", getListFiles);

//download
router.get("/trek/files/:name", download);

//get file by file name
router.get("/trek/file/:name", showTrekByTrekName);

//get file count
router.get("/trek/file/count", trekFileCount);

//get tour id by file name
router.get("/trek/fileByName/:name", showTrekIdByFilename);

//get tour file by id
router.get("/trek/fileById/:id", showTrekFileById);


//ratingss

//avg rating
router.get('/trek/ratings/:id',showAVGTrekById)


//add ratings
router.post('/trek/addrating',createTrekRating)

//get all ratings
router.get("/trekRatings", showTrekRatings);


//CAMPINGS

//add camping
router.post("/camping/add", createCamping);

//get all campings
router.get("/camping", showCampings);

//get camping count
router.get("/camping/count", CampingCount);

// get single camping
router.get("/camping/:id", showCampingById);

//camp file upload

//upload
router.post("/camping/upload", uploadCamps.single("file"), (req, res) => {
  res.json({ file: req.file });
});

//get all files
router.get("/filesCamping", getListOFCampFiles);

//download
router.get("/camping/files/:name", downloadCamp);

//get file by file name
router.get("/camping/file/:name", showCampByCampName);

//get file count
router.get("/camping/file/count", campFileCount);

//get tour id by file name
router.get("/camping/fileByName/:name", showCampIdByFilename);

//get tour file by id
router.get("/camping/fileById/:id", showCampFileById);

//ratingss

//avg rating
router.get('/camping/ratings/:id',showAVGCampById)


//add ratings
router.post('/camping/addrating',createCampRating)

//get all ratings
router.get("/campingRatings", showCampRatings);



//NATIONAL TOUR

//add nationalTour
router.post("/nationalTour/add", createNationalTour);

//get all nationalTours
router.get("/nationalTour", showNationalTours);

//get nationalTour count
router.get("/nationalTour/count", NationalTourCount);

// get single nationalTour
router.get("/nationalTour/:id", showNationalTourById);

//national file upload

//upload
router.post(
  "/nationalTour/upload",
  uploadNationals.single("file"),
  (req, res) => {
    res.json({ file: req.file });
  }
);

//get all files
router.get("/filesnationalTour", getListOFNationalFiles);

//download
router.get("/nationalTour/files/:name", downloadNational);

//get file by file name
router.get("/nationalTour/file/:name", showNationalTourByNationalName);

//get file count
router.get("/nationalTour/file/count", NationalFileCount);

//get tour id by file name
router.get("/nationalTour/fileByName/:name", showNationalIdByFilename);

//get tour file by id
router.get("/nationalTour/fileById/:id", showNationalFileById);


//ratingss

//avg rating
router.get('/nationalTour/ratings/:id',showAVGNationalTourById)


//add ratings
router.post('/nationalTour/addrating',createNationalRating)

//get all ratings
router.get("/nationalTourRatings", showNationalRatings);


//INTERNATIONAL TOURS

//add internationalTour
router.post("/internationalTour/add", createInternationalTour);

//get all internationalTours
router.get("/internationalTour", showInternationalTours);

//get internationalTour count
router.get("/internationalTour/count", InternationalTourCount);

// get single internationalTour
router.get("/internationalTour/:id", showInternationalTourById);

//national file upload

//upload
router.post(
  "/internationalTour/upload",
  uploadInternationals.single("file"),
  (req, res) => {
    res.json({ file: req.file });
  }
);

//get all files
router.get("/filesinternationalTour", getListOFInternationalFiles);

//download
router.get("/internationalTour/files/:name", downloadInternational);

//get file by file name
router.get("/internationalTour/file/:name", showNationalTourByNationalName);

//get file count
router.get("/internationalTour/file/count", InternationalFileCount);

//get tour id by file name
router.get(
  "/internationalTour/fileByName/:name",
  showInternationalTourIdByFilename
);

//get tour file by id
router.get("/internationalTour/fileById/:id", showInternationalTourFileById);


//ratinggg

// router.get('/internationalTour/ratings/:itemID', (req, res) => {
//   const itemID = req.params.itemID;
//   const sql = 'SELECT AVG(rating) as avg_rating FROM rating WHERE international_id = ?';
//   db.query(sql, [itemID], (err, result) => {
//     if (err) {
//       console.error('Error fetching average rating:', err);
//       res.status(500).json({ error: 'Error fetching average rating' });
//     } else {
//       res.status(200).json({ averageRating: result[0].avg_rating });
//     }
//   });
// });

//avg rating
router.get('/internationalTour/ratings/:id',showAVGInternationalTourById)


//add ratings
router.post('/internationalTour/addrating',createInternationalRating)

//get all ratings
router.get("/internationalTourRatings", showInternationalRatings);

// router.post('/internationalTour/addratings', (req, res) => {
//   const { rating, id } = req.body;
//   const data = req.body
//   console.log(data)
//   console.log(rating)

//   console.log(id)
//   const sql = 'INSERT INTO rating (rating, international_id) VALUES (?, ?)';
//   db.query(sql, [rating, id], (err, result) => {
//     if (err) {
//       console.error('Error inserting rating:', err);
//       res.status(500).json({ error: 'Error inserting rating' });
//     } else {
//       res.status(200).json({ success: true });
//     }
//   });
// });

export default router;
