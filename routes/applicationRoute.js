const express =require( "express");
const { isAuthenticated } =require( "../Middleware/isAuthenticated.js");
const {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
}= require( "../controllers/application.controller.js");
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/get").get(isAuthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated, getApplicants);
router.route("/status/:id").post(isAuthenticated, updateStatus);

export default router;

// http://localhost:8000/api/v1/application/status/6776b533f6154762afd20314