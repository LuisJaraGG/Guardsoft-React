import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import { Outlet,ScrollRestoration } from "react-router-dom";


const RootLayout = () => {
  return (
    <>
      <NavDesktop />
      <NavMobile />
      <main className="mt-20">
        <ScrollRestoration />
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayout