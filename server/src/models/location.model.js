// models/locationModel.js
import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
}, {
  versionKey: false,
});

const Location = mongoose.model("Location", locationSchema);
export default Location;
