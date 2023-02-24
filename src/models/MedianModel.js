import mongoose from "mongoose";

const Median = mongoose.Schema({
  currId: Number,
  num: Number,
  medianFirst: Number,
  medianSecond: Number
}, { collection: 'userinfo' });

export default mongoose.model("Median", Median);