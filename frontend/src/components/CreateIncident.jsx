import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { createIncident } from "../api/incidentApi";

export default function CreateIncident({ onCreated }) {
  const cardRef = useRef(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);

    for (let file of files) {
      formData.append("evidence", file);
    }

    await createIncident(formData);

    setTitle("");
    setDescription("");
    setLocation("");
    setFiles([]);

    onCreated();
  };

  return (
    <div className="card form-card" ref={cardRef}>
      <h2 className="section-title">Report Incident</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          placeholder="Short incident title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          placeholder="Describe what happened"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Location</label>
        <input
          placeholder="Incident location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Evidence</label>
        <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />

        <button type="submit">Submit Incident</button>
      </form>
    </div>
  );
}

