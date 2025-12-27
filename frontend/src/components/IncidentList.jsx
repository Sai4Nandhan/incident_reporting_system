import { useEffect, useState } from "react";
import { fetchIncidents } from "../api/incidentApi";
import IncidentCard from "./IncidentCard";

export default function IncidentList({ reload }) {
  const [incidents, setIncidents] = useState([]);

  const loadIncidents = async () => {
    const data = await fetchIncidents();
    setIncidents(data);
  };

  useEffect(() => {
    loadIncidents();
  }, [reload]);

  return (
    <div>
      <h2 className="section-title">Reported Incidents</h2>

      {incidents.map((incident) => (
        <IncidentCard
          key={incident._id}
          incident={incident}
          refresh={loadIncidents}
        />
      ))}
    </div>
  );
}



