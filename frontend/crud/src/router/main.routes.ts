import { createBrowserRouter } from "react-router-dom";
import { loginRoutes } from "../components/Login/routes/index.routes";

const router = createBrowserRouter([
  ...loginRoutes,
]);

export { router };

