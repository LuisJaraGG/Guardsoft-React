import { Toaster } from "react-hot-toast";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import { Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <NavDesktop />
      <NavMobile />
      <main >
        <Toaster/>
        <ScrollRestoration />
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootLayout;

