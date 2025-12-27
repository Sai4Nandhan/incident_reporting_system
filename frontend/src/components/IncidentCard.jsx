import { updateIncidentStatus } from "../api/incidentApi";

export default function IncidentCard({ incident, onChange }) {
  const handleStatusChange = async (e) => {
    await updateIncidentStatus(incident._id, e.target.value);
    onChange();
  };

  return (
    <div className="card">
      <h3 className="incident-title">{incident.title}</h3>

      <p className="incident-meta">
        {incident.location || "Unknown location"} •{" "}
        {new Date(incident.createdAt).toLocaleDateString()}
      </p>

      <p>{incident.description}</p>

      <div className="status">
        <label>Status</label>
        <select value={incident.status} onChange={handleStatusChange}>
          <option>Reported</option>
          <option>Under Investigation</option>
          <option>Resolved</option>
        </select>
      </div>

      {incident.evidenceFiles.length > 0 && (
        <div className="evidence">
          {incident.evidenceFiles.map((file) => (
            <div key={file} className="evidence-row">
              <a
                href={`http://localhost:5000/uploads/${file}`}
                target="_blank"
                rel="noreferrer"
              >
                View Evidence
              </a>

              {/* Disabled on purpose – future enhancement */}
              <button
                className="delete-evidence disabled"
                disabled
                title="Evidence removal will be added in a future update"
              >
                Remove (planned)
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}







