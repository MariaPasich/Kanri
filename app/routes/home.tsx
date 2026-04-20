import type { Route } from "./+types/home";
import { Home } from "../components/home/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Kanri" }, { name: "description", content: "Kanri - home" }];
}

export default function Main() {
  return <Home />;
}
