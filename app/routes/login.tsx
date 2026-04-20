import type { Route } from "./+types/home";
import { Login } from "../components/login/Login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kanri" },
    { name: "description", content: "Kanri - login" },
  ];
}

export default function Home() {
  return <Login />;
}
