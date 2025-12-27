const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const Incident = require("../models/Incident");
const {
  createIncident,
  getAllIncidents,
  updateIncidentStatus,
} = require("../controllers/incidentController");

/* =========================
   ABSOLUTE UPLOADS PATH
========================= */
const UPLOADS_DIR = path.resolve(__dirname, "..", "uploads");

/* =========================
   MULTER CONFIG
========================= */
const storage = multer.diskStorage({
  destination: UPLOADS_DIR,
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* =========================
   ROUTES
========================= */

// CREATE INCIDENT
router.post("/", upload.array("evidence"), createIncident);

// GET USER INCIDENTS
router.get("/", getAllIncidents);

// UPDATE STATUS
router.patch("/:id/status", updateIncidentStatus);

// DELETE EVIDENCE BY INDEX (FIXED)
router.delete("/:id/evidence/:index", async (req, res) => {
  try {
    const { id, index } = req.params;

    const incident = await Incident.findById(id);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    const fileName = incident.evidenceFiles[index];
    if (!fileName) {
      return res.status(404).json({ message: "Evidence not found" });
    }

    const filePath = path.join(UPLOADS_DIR, fileName);

    // 🔍 LOG FOR DEBUG (IMPORTANT)
    console.log("Deleting file:", filePath);

    // DELETE FILE
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    } else {
      console.warn("File not found on disk:", filePath);
    }

    // REMOVE FROM DB
    incident.evidenceFiles.splice(index, 1);
    await incident.save();

    res.json({ message: "Evidence deleted successfully" });
  } catch (err) {
    console.error("Delete evidence error:", err);
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;







