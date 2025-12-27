import { useState } from "react";
import Landing from "./pages/Landing";
import CreateIncident from "./components/CreateIncident";
import IncidentList from "./components/IncidentList";
import "./dashboard.css"; // 👈 dashboard-only styles

export default function App() {
  const [entered, setEntered] = useState(false);
  const [reload, setReload] = useState(false);

  if (!entered) {
    return <Landing onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Incident Dashboard</h1>

      <CreateIncident onCreated={() => setReload(!reload)} />
      <IncidentList reload={reload} />
    </div>
  );
}


