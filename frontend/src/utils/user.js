export function getUserId() {
  let id = localStorage.getItem("incident_user_id");

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("incident_user_id", id);
  }

  return id;
}
