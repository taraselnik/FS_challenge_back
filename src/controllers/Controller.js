import MedianModel from "../models/MedianModel.js";
import { getMedianf } from "../utils/getMedian.js";

export const getValues = async (req, res) => {
    try {
        const users = await MedianModel.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const createValue = async (req, res) => {
  const recordsDb = await MedianModel.find({});
  console.log(recordsDb.length)

  if (recordsDb.length >= 10) {
    await MedianModel.deleteOne({ _id: recordsDb[0]._id });
  }

  try {
    const insertedData = await MedianModel.create(getMedianf(req.body.num));
    res.status(201).json(insertedData);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const deleteValues = async (req, res) => {
    try {
        const deleteduser = await MedianModel.deleteMany({});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}