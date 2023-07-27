// import express
import express from "express";

// const User = require("../models/user.js")
import { createUser, loginAdmin, loginUser , showUserById,showUsers,userCount, deleteUser,updateUser} from "../controllers/userController.js";
import { showTrekById, showTreks, trekCount,createTrek, showTrekByTrekName, trekFileCount } from "../controllers/trekController.js";
import { CampingCount, createCamping, showCampingById, showCampings } from "../controllers/campingController.js";
import { NationalTourCount, createNationalTour, showNationalTourById, showNationalTours } from "../controllers/nationalTourController.js";
import { InternationalTourCount, showInternationalTours, showInternationalTourById, createInternationalTour } from "../controllers/internationalTourController.js";


import {upload,getListFiles,download,} from "../fileUploads/trekFiles.js"

const router = express.Router()

//ADMIN

router.post('/admin/login',loginAdmin )

//USERS

router.post('/user/login',loginUser )

router.post('/user/register',createUser )

//get all users
router.get("/user", showUsers);

//get user count
router.get("/user/count", userCount);

// get single user
router.get("/user/:id",showUserById);

//delete user
router.delete("/user/delete/:id", deleteUser);

//update
router.put("/user/edit/:id",updateUser);



//TREKS

//add trek
router.post('/trek/add',createTrek )

//get all treks
router.get("/trek", showTreks);

//get trek count
router.get("/trek/count", trekCount);

// get single trek
router.get("/trek/:id",showTrekById);


//trek file upload

//upload
router.post("/trek/upload", upload.single("file"), (req, res) => {
    res.json({ file: req.file });
  });
  

//get all files
router.get("/filesTrek",getListFiles);

//download
router.get("/trek/files/:name",download)

//get file by file name
router.get("/trek/file/:name",showTrekByTrekName)

//get file count
router.get("/trek/file/count",trekFileCount)


//CAMPINGS

//add camping
router.post('/camping/add',createCamping )

//get all campings
router.get("/camping", showCampings);

//get camping count
router.get("/camping/count", CampingCount);

// get single camping
router.get("/camping/:id",showCampingById);



//NATIONAL TOUR

//add nationalTour
router.post('/nationalTour/add',createNationalTour )

//get all nationalTours
router.get("/nationalTour", showNationalTours);

//get nationalTour count
router.get("/nationalTour/count", NationalTourCount);

// get single nationalTour
router.get("/nationalTour/:id",showNationalTourById);




//INTERNATIONAL TOURS

//add internationalTour
router.post('/internationalTour/add',createInternationalTour )

//get all internationalTours
router.get("/internationalTour", showInternationalTours);

//get internationalTour count
router.get("/internationalTour/count", InternationalTourCount);

// get single internationalTour
router.get("/internationalTour/:id",showInternationalTourById);




export default router;
