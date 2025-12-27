const Incident = require("../models/Incident");

exports.createIncident = async (req, res) => {
  try {
    const { title, description, location, userId } = req.body;

    if (!title || !description || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const files = req.files ? req.files.map((f) => f.filename) : [];

    const incident = new Incident({
      userId,
      title,
      description,
      location,
      evidenceFiles: files,
    });

    await incident.save();
    res.status(201).json(incident);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllIncidents = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "userId required" });
    }

    const incidents = await Incident.find({ userId }).sort({
      createdAt: -1,
    });

    res.json(incidents);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateIncidentStatus = async (req, res) => {
  const { status } = req.body;

  const incident = await Incident.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(incident);
};





