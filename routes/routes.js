// import express
import express from "express";

// const User = require("../models/user.js")
import { createUser, loginUser , showUserById,showUsers,userCount} from "../controllers/userController.js"

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

export default router;
