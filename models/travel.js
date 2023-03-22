import mongoose from "mongoose";

const travelSchema = new mongoose.Schema({
  userid: {
    type: String,
    // required:true,
  },
  date: {
    // required:true,
    type: Date,
  },
  time: {
    type: Number,
  },
  timeFrom: {
    // required:true,
    type: Number,
  },
  timeTo: {
    // required:true,
    type: Number,
  },
  timeFromDate: {
    // required:true,
    type: Number,
  },
  timeToDate: {
    // required:true,
    type: Number,
  },
  fromTime: {
    type: Number,
  },
  toTime: {
    type: Number,
  },
});
const travel = mongoose.model("travel", travelSchema);
export default travel;
