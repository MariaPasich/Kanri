import type { Route } from "./+types/home";
import { Register } from "../components/register/Register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kanri" },
    { name: "description", content: "Kanri - register" },
  ];
}

export default function Home() {
  return <Register />;
}
