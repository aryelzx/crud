import { RouteObject } from "react-router-dom";
import { Crud } from '../pages';

const crudRoutes: RouteObject[] = [{ path: '/crud', element: <Crud /> }]

export { crudRoutes };
