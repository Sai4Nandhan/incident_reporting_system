import axios from "axios";
import { getUserId } from "../utils/user";

const API = "http://localhost:5000/api/incidents";

export const createIncident = async (formData) => {
  formData.append("userId", getUserId());
  const res = await axios.post(API, formData);
  return res.data;
};

export const fetchIncidents = async () => {
  const userId = getUserId();
  const res = await axios.get(`${API}?userId=${userId}`);
  return res.data;
};

export const updateIncidentStatus = async (id, status) => {
  const res = await axios.patch(`${API}/${id}/status`, { status });
  return res.data;
};

export const deleteEvidence = async (incidentId, index) => {
  const res = await axios.delete(
    `${API}/${incidentId}/evidence/${index}`
  );
  return res.data;
};



