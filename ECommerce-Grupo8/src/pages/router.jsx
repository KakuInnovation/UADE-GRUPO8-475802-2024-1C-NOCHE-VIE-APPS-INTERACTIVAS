import { createBrowserRouter } from "react-router-dom";
import Login from "./login.jsx";
import SignUp from "./signup.jsx";
import Home from "./home.jsx";
import Publicar from "./publicar.jsx";
import Editar from "./editar.jsx";
import Producto from "./producto.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/publicar",
    element: <Publicar />,
  },
  {
    path: "/editar/:id",
    element: <Editar />,
  },
  {
    path: "/producto/:id",
    element: <Producto />,
  },
]);

export default router;
