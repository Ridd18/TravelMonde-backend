// import express
import express from "express";

// const User = require("../models/user.js")
import { createUser, loginUser , showUserById,showUsers,userCount} from "../controllers/userController.js"
import { addTrek } from "../models/treks.js";
import { showTrekById, showTreks, trekCount,createTrek } from "../controllers/trekController.js";
import { CampingCount, createCamping, showCampingById, showCampings } from "../controllers/campingController.js";

const router = express.Router()

//USERS

router.post('/user/login',loginUser )

router.post('/user/register',createUser )

//get all users
router.get("/user", showUsers);

//get user count
router.get("/user/count", userCount);

// get single user
router.get("/user/:id",showUserById);


//TREKS

router.post('/trek/add',createTrek )

//get all treks
router.get("/trek", showTreks);

//get trek count
router.get("/trek/count", trekCount);

// get single trek
router.get("/trek/:id",showTrekById);


//CAMPINGS


router.post('/camping/add',createCamping )

//get all campings
router.get("/camping", showCampings);

//get camping count
router.get("/camping/count", CampingCount);

// get single camping
router.get("/camping/:id",showCampingById);



export default router;
