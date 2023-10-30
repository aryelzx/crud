import { createBrowserRouter } from "react-router-dom";
import { loginRoutes } from "../components/Login/routes/index.routes";
import { crudRoutes } from "../components/crud/routes/index.routes";

const router = createBrowserRouter([
  ...loginRoutes,
  ...crudRoutes,
]);

export { router };

