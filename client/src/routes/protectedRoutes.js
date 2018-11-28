import Pages from "../layouts/Pages.jsx";
import Dashboard from "../layouts/Dashboard.jsx";

var protectedRoutes = [
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/dashboard", name: "Home", component: Dashboard },
  { path: "/", name: "Home", component: Dashboard }
];

export default protectedRoutes;
