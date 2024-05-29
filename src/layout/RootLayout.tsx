import { Toaster } from "react-hot-toast";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <>
      <NavDesktop />
      <NavMobile />
      <main className="mt-20">
        <Toaster/>
        <ScrollRestoration />
        <Outlet></Outlet>
        <Footer/>
      </main>
    </>
  );
};

export default RootLayout;

