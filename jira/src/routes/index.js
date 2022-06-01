import { lazy } from "react";
import HomeTemplate from "containers/HomeTemplate/home";

const routes = [
  {
    exact: true,
    path: "/home",
    component: lazy(() => import("containers/HomeTemplate/Signin")),
  },
  {
    exact: false,
    path: "/signin",
    component: lazy(() => import("containers/HomeTemplate/Signin")),
  },
  {
    exact: false,
    path: "/signup",
    component: lazy(() => import("containers/HomeTemplate/Signup")),
  },
  {
    exact: false,
    path: "/create-project",
    component: lazy(() => import("containers/HomeTemplate/CreateProject")),
  },
  {
    exact: false,
    path: "/get-all-project-page",
    component: lazy(() => import("containers/HomeTemplate/GetAllProjectPage")),
  },
];
const renderRoutes = () => {
  return routes.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};
export {renderRoutes};