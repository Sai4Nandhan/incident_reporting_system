const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: String,
    description: String,
    location: String,
    status: {
      type: String,
      default: "Reported",
    },
    evidenceFiles: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Incident", incidentSchema);


