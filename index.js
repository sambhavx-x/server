import express from "express";
import mongoose from "mongoose";
import travelRoutes from "./routes/travel.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const MONGO_URL =
  "mongodb+srv://sambhav_08:PbOJTdFIrHeo7Hnl@cluster0.p7u128z.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to mmongodb database "))
  .catch((e) => console.log(e));
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started on  port ${PORT} succesfully`);
});
app.use("/travel", travelRoutes);
