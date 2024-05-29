import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Dashboard from "./layout/Dashboard";
import Error from "./components/Error";
import Developing from "./components/Developing";
import Terms from "./components/tems/Terms";
import { AllProyects } from "./components/AllProyects";

function App() {
    useEffect(() => {
      AOS.init();
    }, []);
  const router = createBrowserRouter([
    {
      element: <RootLayout/>,
      errorElement: <Error></Error>,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/todos-servicios", element: <Developing></Developing> },
        { path: "/todos-proyectos", element: <AllProyects></AllProyects> },
        { path: "*", element: <Error></Error> },
      ],
    },
    {
      path:"/ecar/terms",
      element: <Terms/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
  
}

export default App;
