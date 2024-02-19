import { lazy, Suspense } from "react";
import Spinner from "../components/spiner";
const NavDesktop = lazy(() => import("../components/NavDesktop"));
const NavMobile = lazy(() => import("../components/NavMobile"));
const Hero = lazy(() => import("../components/Hero"));
const About = lazy(() => import("../components/About"));
const Purpose = lazy(() => import("../components/Purpose"));
const Service = lazy(() => import("../components/Sevice")); // Corregí el nombre del componente 'Service'.
const Projects = lazy(() => import("../components/Proyeccts")); // Corregí el nombre del componente 'Projects'.
const LocateUs = lazy(() => import("../components/LocateUs"));
const Contact = lazy(() => import("../components/Contact"));
const BackText = lazy(() => import("../components/BackText"));

const Dashboard = () => {
  return (
    <main >
      <Suspense fallback={<Spinner />}>
        <NavDesktop />
        <NavMobile />
        <Hero />
        <About />
        <Purpose />
        <Service />
        <BackText />
        <Projects />
        <LocateUs />
        <Contact />
      </Suspense>
    </main>
  );
};

export default Dashboard;
