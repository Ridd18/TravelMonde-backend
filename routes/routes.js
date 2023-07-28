// import express
import express from "express";

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
} from "../controllers/trekController.js";
import {
  CampingCount,
  campFileCount,
  createCamping,
  showCampByCampName,
  showCampingById,
  showCampings,
} from "../controllers/campingController.js";
import {
  NationalFileCount,
  NationalTourCount,
  createNationalTour,
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
import { downloadInternational, getListOFInternationalFiles, uploadInternationals } from "../fileUploads/internationalFiles.js";

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
router.get(
  "/internationalTour/fileById/:id",
  showInternationalTourFileById
);



export default router;
