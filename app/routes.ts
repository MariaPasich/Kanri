import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/login", "./components/login/Login.tsx"),
    route("/dashboard", "./components/dashboard/Dashboard.tsx")

] satisfies RouteConfig;