import { Dashboard } from "../components/dashboard/Dashboard";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kanri" },
    { name: "description", content: "Kanri - dashboard" },
  ];
}

export default function Home() {
  return <Dashboard />;
}
