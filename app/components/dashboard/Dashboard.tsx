import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate()

  // protected route
  useEffect(() => {
    if (localStorage.getItem("usr_tk") === null) {
      navigate("/login", { replace: true })
    }
  }, [navigate])

  return (
    <main>
      <h1>Kanri - Dashboard</h1>
      <h1>Usr tk: {localStorage.getItem("usr_tk")}</h1>
    </main>
  );
}