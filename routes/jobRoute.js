const express =require( "express");
const { isAuthenticated } =require( "../Middleware/isAuthenticated.js");
const {
  createJob,
  getAdminJobs,
  getAllJob,
  getSingleJobByID,
} =require("../controllers/job.controller.js");
const router = express.Router();

router.route("/post").post(isAuthenticated, createJob);
router.route("/get-admin-jobs").get(isAuthenticated, getAdminJobs);
router.route("/get").get(isAuthenticated, getAllJob);
router.route("/get/:id").get(isAuthenticated, getSingleJobByID);

export default router ;

// s
// http://localhost:8000/api/v1/company/get
// http://localhost:8000/api/v1/company/get/:id
// http://localhost:8000/api/v1/company/update/:id