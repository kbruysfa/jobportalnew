const express=require( "express");
const cookieParser =require("cookie-parser");
const cors =require("cors");
const userRoute=require( "../routes/userroute.js");
const jobRoute =require("../routes/jobRoute.js");
const companyRoute=require ("../routes/companyRoute.js");
const applicationRoute=require ("../routes/applicationRoute.js");

const {dotenv}= require("dotenv");
dotenv.config();
const{cnnectDB}=require("../db/Connect.js");
connectDB();``

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173/",
    Credentials: true,
  })
);

const PORT = process.env.PORT || 3000;

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});