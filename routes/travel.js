import express from "express";
import travel from "../models/travel.js";

const router = express();

router.post("/post", async (req, res) => {
  const newPost = new travel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200);
    res.send("information saved in the database");
  } catch (error) {
    console.log(error);
  }
});
router.post("/check", async (req, res) => {
  const matchedPost = await travel.findOne({ date: req.body.date });

  try {
    if (
      (req.body.timeFrom >= matchedPost.timeFrom &&
        req.body.timeFrom <= matchedPost.timeTo) ||
      (req.body.timeTo >= matchedPost.timeFrom &&
        req.body.timeTo <= matchedPost.time)
    ) {
      res.send(`travel partner found  ${matchedPost.userid}`);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/post", (req, res) => {
  res.send("working");
});
export default router;
