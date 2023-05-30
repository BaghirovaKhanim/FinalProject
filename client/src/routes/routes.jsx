import AddService from "../pages/AddService";
import DetailService from "../pages/DetailService";
import EditService from "../pages/EditService";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <AddService />,
      },
      {
        path: "detail/service/:id",
        element: <DetailService />,
      },
      {
        path: "edit/service/:id",
        element: <EditService />,
      },
    ],
  },
];
