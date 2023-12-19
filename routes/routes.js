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
  showAllAVGTrek,
  showTrekPayments,
  showSuccessfulTrek,
  showAllTrekPayments,
} from "../controllers/trekController.js";
import {
  CampingCount,
  campFileCount,
  createCampRating,
  createCamping,
  showAVGCampById,
  showAllAVGCamping,
  showAllCampPayments,
  showCampByCampName,
  showCampFileById,
  showCampIdByFilename,
  showCampPayments,
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
  showAllAVGnational,
  showAllNationalPayments,
  showNationalFileById,
  showNationalIdByFilename,
  showNationalPayments,
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
  showAllAVGInternational,
  showInternationalPayments,
  showAllInternationalPayments,
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
// router.post("/trek/upload", upload.single("file"), (req, res) => {
//   res.json({ file: req.file });
// });

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

//all avg rating
router.get("/trekAVGratings", showAllAVGTrek);

//add ratings
// router.post("/trek/addrating", createTrekRating);

//get all ratings
router.get("/trekRatings", showTrekRatings);

//get successful trek
router.get("/successfulTrek", showSuccessfulTrek);

//PAYMENTS

//get sum of payments
router.get("/trekSumPayments", showTrekPayments);

//get all of payments
router.get("/trekPayments", showAllTrekPayments);

//CAMPINGS

//add camping
router.post("/camping/add", createCamping);

//get all campings
router.get("/camping", showCampings);

//get camping count
router.get("/camping/count", CampingCount);

// get single camping
router.get("/camping/:id", showCampingById);

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

//all avg rating
router.get("/campingAVGratings", showAllAVGCamping);

//add ratings
// router.post("/camping/addrating", createCampRating);

//get all ratings
router.get("/campingRatings", showCampRatings);

//PAYMENTS

//get sum of payments
router.get("/campingSumPayments", showCampPayments);

//get all of payments
router.get("/campingPayments", showAllCampPayments);

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
// router.post(
//   "/nationalTour/upload",
//   uploadNationals.single("file"),
//   (req, res) => {
//     res.json({ file: req.file });
//   }
// );

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

//all avg rating
router.get("/nationalTourAVGratings", showAllAVGnational);

//add ratings
// router.post("/nationalTour/addrating", createNationalRating);

//get all ratings
router.get("/nationalTourRatings", showNationalRatings);

//PAYMENTS

//get sum of payments
router.get("/nationalTourSumPayments", showNationalPayments);

//get all of payments
router.get("/nationalTourPayments", showAllNationalPayments);

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

//all avg rating
router.get("/internationalTourAVGratings", showAllAVGInternational);

//add ratings
// router.post("/internationalTour/addrating", createInternationalRating);

//get all ratings
router.get("/internationalTourRatings", showInternationalRatings);

//PAYMENTS

//get sum of payments
router.get("/internationalTourSumPayments", showInternationalPayments);

//get all of payments
router.get("/internationalTourPayments", showAllInternationalPayments);

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

import moment from "moment-timezone";

//Trek PAYMENTTT
router.post("/createTrekPayment", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { amount } = req.body;

  const amountInRupees = amount / 100;

  db.query(
    "select * from treks WHERE price = ?",
    [amountInRupees],
    (err, res) => {
      if (err) {
        console.log("Error selecting from USERS: ", err);
        // return result(err, null);
        console.log(res);
      }

      const ISTTimeZone = "Asia/Kolkata"; // IST time zone

      const paymentDateIST = moment().tz(ISTTimeZone);

      const paymentData = {
        // user_id: 1, // Assuming you have a user ID
        amount: amountInRupees,
        payment_date: paymentDateIST.format(),
        trek_id: res[0].trek_id,
        file_name: res[0].name,
      };

      db.query("INSERT INTO trekPayment Set ?", paymentData, (err, result) => {
        if (err) {
          console.error("Error creating payment:", err);
        } else {
          console.log("Payment created:", result);
        }
      });
      console.log("created task: ");
    }
  );

  try {
    const paymentIntent = await stripeConfig.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: "inr",
      payment_method_types: ["card"],
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

//Camping PAYMENTTT
router.post("/createCampPayment", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { amount } = req.body;

  const amountInRupees = amount / 100;

  db.query(
    "select * from camping WHERE price = ?",
    [amountInRupees],
    (err, res) => {
      if (err) {
        console.log("Error selecting from USERS: ", err);
        // return result(err, null);
        console.log(res);
      }

      const ISTTimeZone = "Asia/Kolkata"; // IST time zone

      const paymentDateIST = moment().tz(ISTTimeZone);

      const paymentData = {
        // user_id: 1, // Assuming you have a user ID
        amount: amountInRupees,
        payment_date: paymentDateIST.format(),
        camping_id: res[0].camping_id,
        file_name: res[0].name,
      };

      db.query(
        "INSERT INTO campingPayment Set ?",
        paymentData,
        (err, result) => {
          if (err) {
            console.error("Error creating payment:", err);
          } else {
            console.log("Payment created:", result);
          }
        }
      );
      console.log("created task: ");
    }
  );

  try {
    const paymentIntent = await stripeConfig.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: "inr",
      payment_method_types: ["card"],
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

//national payment
router.post("/createNationalPayment", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { amount } = req.body;

  const amountInRupees = amount / 100;

  db.query(
    "select * from nationalTour WHERE price = ?",
    [amountInRupees],
    (err, res) => {
      if (err) {
        console.log("Error selecting from USERS: ", err);
        // return result(err, null);
        console.log(res);
      }

      const ISTTimeZone = "Asia/Kolkata"; // IST time zone

      const paymentDateIST = moment().tz(ISTTimeZone);

      const paymentData = {
        // user_id: 1, // Assuming you have a user ID
        amount: amountInRupees,
        payment_date: paymentDateIST.format(),
        national_id: res[0].national_id,
        file_name: res[0].name,
      };

      db.query(
        "INSERT INTO nationalPayment Set ?",
        paymentData,
        (err, result) => {
          if (err) {
            console.error("Error creating payment:", err);
          } else {
            console.log("Payment created:", result);
          }
        }
      );
      console.log("created task: ");
    }
  );

  try {
    const paymentIntent = await stripeConfig.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: "inr",
      payment_method_types: ["card"],
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

//international payment
router.post("/createInternationalPayment", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { amount } = req.body;

  const amountInRupees = amount / 100;

  db.query(
    "select * from internationalTour WHERE price = ?",
    [amountInRupees],
    (err, res) => {
      if (err) {
        console.log("Error selecting from USERS: ", err);
        // return result(err, null);
        console.log(res);
      }

      const ISTTimeZone = "Asia/Kolkata"; // IST time zone

      const paymentDateIST = moment().tz(ISTTimeZone);

      const paymentData = {
        // user_id: 1, // Assuming you have a user ID
        amount: amountInRupees,
        payment_date: paymentDateIST.format(),
        international_id: res[0].international_id,
        file_name: res[0].name,
      };

      db.query(
        "INSERT INTO internationalPayment Set ?",
        paymentData,
        (err, result) => {
          if (err) {
            console.error("Error creating payment:", err);
          } else {
            console.log("Payment created:", result);
          }
        }
      );
      console.log("created task: ");
    }
  );

  try {
    const paymentIntent = await stripeConfig.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: "inr",
      payment_method_types: ["card"],
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

//add rating trekk
router.post("/addRatingTrek", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { id, rating } = req.body;

  db.query("select * from treks WHERE trek_id = ?", [id], (err, res) => {
    if (err) {
      console.log("Error : ", err);
      // return result(err, null);
      console.log(res);
    }
    const ratingData = {
      // user_id: 1, // Assuming you have a user ID

      trek_id: id,
      trek_name: res[0].name,
      rating: rating,
    };

    db.query("INSERT INTO trekrating Set ?", ratingData, (err, result) => {
      if (err) {
        console.error("Error creating rating:", err);
      } else {
        console.log("rating created:", result);
      }
    });
    console.log("created task: ");
  });

  try {
    res.status(200).json();

    // console.log(res)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while creating rating." });
  }
});

//add rating camping
router.post("/addRatingCamp", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { id, rating } = req.body;

  db.query("select * from camping WHERE camping_id = ?", [id], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      // return result(err, null);
      console.log(res);
    }
    const ratingData = {
      // user_id: 1, // Assuming you have a user ID

      camping_id: id,
      camping_name: res[0].name,
      rating: rating,
    };

    db.query("INSERT INTO camprating Set ?", ratingData, (err, result) => {
      if (err) {
        console.error("Error creating rating:", err);
      } else {
        console.log("rating created:", result);
      }
    });
    console.log("created task: ");
  });

  try {
    res.status(200).json();

    // console.log(res)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while creating rating." });
  }
});

//add rating national TOur
router.post("/addRatingNational", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { id, rating } = req.body;

  db.query(
    "select * from nationalTour WHERE national_id = ?",
    [id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        // return result(err, null);
        console.log(res);
      }
      const ratingData = {
        // user_id: 1, // Assuming you have a user ID

        national_id: id,
        national_name: res[0].name,
        rating: rating,
      };

      db.query(
        "INSERT INTO nationalrating Set ?",
        ratingData,
        (err, result) => {
          if (err) {
            console.error("Error creating rating:", err);
          } else {
            console.log("rating created:", result);
          }
        }
      );
      console.log("created task: ");
    }
  );

  try {
    res.status(200).json();

    // console.log(res)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while creating rating." });
  }
});

//add rating national TOur
router.post("/addRatingInternational", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { id, rating } = req.body;

  db.query(
    "select * from internationalTour WHERE international_id = ?",
    [id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        // return result(err, null);
        console.log(res);
      }
      const ratingData = {
        // user_id: 1, // Assuming you have a user ID

        international_id: id,
        international_name: res[0].name,
        rating: rating,
      };

      db.query(
        "INSERT INTO internationalrating Set ?",
        ratingData,
        (err, result) => {
          if (err) {
            console.error("Error creating rating:", err);
          } else {
            console.log("rating created:", result);
          }
        }
      );
      console.log("created task: ");
    }
  );

  try {
    res.status(200).json();

    // console.log(res)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while creating rating." });
  }
});

//camp multiple file upload
import mime from "mime";

//upload in camping
router.post("/camp/upload", uploadCamps.array("files"), (req, res) => {
  const files = req.files;

  files.forEach((file) => {
    const { filename, path } = file;

    console.log("filename is ", filename);

    const file_path = path;
    const mime_type = mime.getType(file_path);
    console.log(mime_type);

    if (
      mime_type ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const newName = filename.slice(0, filename.length - 5);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in docx is:", newName);

      db.query(
        "select camping_id from camping where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from campings: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("camp id  : ", camp_id);

          const sql =
            "INSERT INTO campfiles (image_name,file_name,camping_id) VALUES (?,?,?)";
          db.query(
            sql,
            [filename, filename, res[0].camping_id],
            (err, result) => {
              if (err) {
                console.log("Error inserting in TASKS: ", err);
                // return result(err, null);
              }
            }
          );

          console.log("created task: ");
          // return result(null, err);
        }
      );
    } else if (mime_type == "application/pdf") {
      const newName = filename.slice(0, filename.length - 4);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in pdf is:", newName);

      db.query(
        "select camping_id from camping where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from campings: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("camp id  : ", camp_id);

          const sql =
            "INSERT INTO campfiles (image_name,file_name,camping_id) VALUES (?,?,?)";
          db.query(
            sql,
            [filename, filename, res[0].camping_id],
            (err, result) => {
              if (err) {
                console.log("Error inserting in TASKS: ", err);
                // return result(err, null);
              }
            }
          );

          console.log("created task: ");
          // return result(null, err);
        }
      );
    } else if (
      mime_type == "image/jpeg" ||
      mime_type == "image/png" ||
      mime_type == "image/x-png" ||
      mime_type == "image/bmp" ||
      mime_type == "image/gif"
    ) {
      const newName = filename.slice(0, filename.length - 4);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in imgs is:", newName);

      db.query(
        "select camping_id from camping where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from campings: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("camp id  : ", camp_id);

          const sql =
            "INSERT INTO campfiles (image_name,file_name,camping_id) VALUES (?,?,?)";
          db.query(
            sql,
            [filename, filename, res[0].camping_id],
            (err, result) => {
              if (err) {
                console.log("Error inserting in TASKS: ", err);
                // return result(err, null);
              }
            }
          );

          console.log("created task: ");
          // return result(null, err);
        }
      );
    }
  });

  res.json({ message: "Files uploaded successfully" });
});

//trek multiple files upload
router.post("/trek/upload", upload.array("files"), (req, res) => {
  const files = req.files;

  files.forEach((file) => {
    const { filename, path } = file;

    console.log("filename is ", filename);

    const file_path = path;
    const mime_type = mime.getType(file_path);
    console.log(mime_type);

    if (
      mime_type ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const newName = filename.slice(0, filename.length - 5);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in docx is:", newName);

      db.query(
        "select trek_id from treks where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from treks: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("trek id  : ", camp_id);

          const sql = "INSERT INTO trekfiles (file_name,trek_id) VALUES (?,?)";
          db.query(sql, [filename, res[0].trek_id], (err, result) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          });

          console.log("created task: ");
          // return result(null, err);
        }
      );
    } else if (mime_type == "application/pdf") {
      const newName = filename.slice(0, filename.length - 4);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in pdf is:", newName);

      db.query(
        "select trek_id from treks where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from treks: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("trek id  : ", camp_id);

          const sql = "INSERT INTO trekfiles (file_name,trek_id) VALUES (?,?)";
          db.query(sql, [filename, res[0].trek_id], (err, result) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          });

          console.log("created task: ");
          // return result(null, err);
        }
      );
    } else if (
      mime_type == "image/jpeg" ||
      mime_type == "image/png" ||
      mime_type == "image/x-png" ||
      mime_type == "image/bmp" ||
      mime_type == "image/gif"
    ) {
      const newName = filename.slice(0, filename.length - 4);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in imgs is:", newName);

      db.query(
        "select trek_id from treks where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from treks: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("trek id  : ", camp_id);

          const sql = "INSERT INTO trekfiles (file_name,trek_id) VALUES (?,?)";
          db.query(sql, [filename, res[0].trek_id], (err, result) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          });

          console.log("created task: ");
          // return result(null, err);
        }
      );
    }
  });
  res.json({ message: "Files uploaded successfully" });
});

//national tours multiple file upload
router.post("/nationalTour/upload", uploadNationals.array("files"), (req, res) => {
  const files = req.files;

  files.forEach((file) => {
    const { filename, path } = file;

    console.log("filename is ", filename);

    const file_path = path;
    const mime_type = mime.getType(file_path);
    console.log(mime_type);

    if (
      mime_type ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const newName = filename.slice(0, filename.length - 5);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in docx is:", newName);

      db.query(
        "select national_id from nationalTour where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from national tours: ", err);
            //
            return result(err, null);
          }

          const sql =
            "INSERT INTO nationalfiles (file_name,national_id) VALUES (?,?)";
          db.query(sql, [filename, res[0].national_id], (err, result) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          });

          console.log("created task: ");
          // return result(null, err);
        }
      );
    } else if (mime_type == "application/pdf") {
      const newName = filename.slice(0, filename.length - 4);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in pdf is:", newName);

      db.query(
        "select national_id from nationalTour where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from national Tours: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("trek id  : ", camp_id);

          const sql =
            "INSERT INTO nationalfiles (file_name,national_id) VALUES (?,?)";
          db.query(sql, [filename, res[0].national_id], (err, result) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          });

          console.log("created task: ");
          // return result(null, err);
        }
      );
    } else if (
      mime_type == "image/jpeg" ||
      mime_type == "image/png" ||
      mime_type == "image/x-png" ||
      mime_type == "image/bmp" ||
      mime_type == "image/gif"
    ) {
      const newName = filename.slice(0, filename.length - 4);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in imgs is:", newName);

      db.query(
        "select national_id from nationalTour where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from national Tours: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("trek id  : ", camp_id);

          const sql =
            "INSERT INTO nationalfiles (file_name,national_id) VALUES (?,?)";
          db.query(sql, [filename, res[0].national_id], (err, result) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          });

          console.log("created task: ");
          // return result(null, err);
        }
      );
    }
  });
  res.json({ message: "Files uploaded successfully" });
});

//international tours multiple file upload
router.post("/internationalTour/upload", uploadInternationals.array("files"), (req, res) => {
  const files = req.files;

  files.forEach((file) => {
    const { filename, path } = file;

    console.log("filename is ", filename);

    const file_path = path;
    const mime_type = mime.getType(file_path);
    console.log(mime_type);

    if (
      mime_type ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const newName = filename.slice(0, filename.length - 5);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in docx is:", newName);

      db.query(
        "select international_id from internationalTour where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from international tours: ", err);
            //
            return result(err, null);
          }

  
          const sql =
            "INSERT INTO internationalfiles (file_name,international_id) VALUES (?,?)";
          db.query(sql, [filename, res[0].international_id], (err, result) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          });

          console.log("created task: ");
          // return result(null, err);
        }
      );
    } else if (mime_type == "application/pdf") {
      const newName = filename.slice(0, filename.length - 4);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in pdf is:", newName);

      db.query(
        "select international_id from internationalTour where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from international Tours: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("trek id  : ", camp_id);

          const sql =
            "INSERT INTO internationalfiles (file_name,international_id) VALUES (?,?)";
          db.query(sql, [filename, res[0].international_id], (err, result) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          });

          console.log("created task: ");
          // return result(null, err);
        }
      );
    } else if (
      mime_type == "image/jpeg" ||
      mime_type == "image/png" ||
      mime_type == "image/x-png" ||
      mime_type == "image/bmp" ||
      mime_type == "image/gif"
    ) {
      const newName = filename.slice(0, filename.length - 4);
      console.log("filename in routes line 231", newName);
      console.log("file contains of  ", file);

      console.log("new name in imgs is:", newName);

      db.query(
        "select international_id from internationalTour where name = ?",
        [newName],
        (err, res) => {
          if (err) {
            console.log("Error selecting from international Tours: ", err);
            //
            return result(err, null);
          }

          const camp_id = res;
          console.log("trek id  : ", camp_id);

          const sql =
            "INSERT INTO internationalfiles (file_name,international_id) VALUES (?,?)";
          db.query(sql, [filename, res[0].international_id], (err, result) => {
            if (err) {
              console.log("Error inserting in TASKS: ", err);
              // return result(err, null);
            }
          });

          console.log("created task: ");
          // return result(null, err);
        }
      );
    }
  });
  res.json({ message: "Files uploaded successfully" });
});

export default router;
