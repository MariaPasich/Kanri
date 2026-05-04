import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate()
  // protected route
  if (typeof window !== 'undefined') {
    if (localStorage.getItem("usr_tk") == null) {
      navigate("/login", { replace: true })
  }
  }

  return (
    <main>
      <h1>Kanri - Dashboard</h1>
    </main>
  );
}