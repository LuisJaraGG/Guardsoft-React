import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import RootLayout from "./layout/RootLayout";
import Dashboard from "./layout/Dashboard";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <RootLayout />
      <Dashboard />
    </>
  );
}

export default App;
