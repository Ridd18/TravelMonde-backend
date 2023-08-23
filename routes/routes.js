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
import {
  FeedbackCount,
  createFeedback,
  deleteFeedback,
  showFeedbackById,
  showFeedbacks,
} from "../controllers/feedbackController.js";

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
router.get("/trek/ratings/:id", showAVGTrekById);

//add ratings
router.post("/trek/addrating", createTrekRating);

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
router.get("/camping/ratings/:id", showAVGCampById);

//add ratings
router.post("/camping/addrating", createCampRating);

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
router.get("/nationalTour/ratings/:id", showAVGNationalTourById);

//add ratings
router.post("/nationalTour/addrating", createNationalRating);

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

//avg rating
router.get("/internationalTour/ratings/:id", showAVGInternationalTourById);

//add ratings
router.post("/internationalTour/addrating", createInternationalRating);

//get all ratings
router.get("/internationalTourRatings", showInternationalRatings);

//FEEDBACK

//add feedback
router.post("/feedback/add", createFeedback);

//get all feedback
router.get("/feedback", showFeedbacks);

//get user feedback
router.get("/feedback/count", FeedbackCount);

// get single feedback
router.get("/feedback/:id", showFeedbackById);

//delete feedback
router.delete("/feedback/delete/:id", deleteFeedback);

//PAYMENTSS

import { stripeConfig } from "../payments/payment.js";

router.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  const paymentData = {
    user_id: 1, // Assuming you have a user ID
    amount: amount,
    payment_date: new Date(),
  };

  try {
    db.query("INSERT INTO payments SET ?", paymentData, (err, result) => {
      if (err) {
        console.error("Error creating payment:", err);
      } else {
        console.log("Payment created:", result);
      }
    });

    const paymentIntent = await stripeConfig.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: "usd",
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
    console.log(amount);
    // console.log(res)
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating payment intent." });
  }
});

export default router;
