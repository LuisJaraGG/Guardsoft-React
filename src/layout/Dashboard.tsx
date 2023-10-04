import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Hero from "../components/Hero";
import About from "../components/About";
import Purpose from "../components/Purpose";
import Sevice from "../components/Sevice";
import Proyeccts from "../components/Proyeccts";
import LocateUs from "../components/LocateUs"; "../components/LocateUs";



const Dashboard = () => {
  return (
    <main>
      <NavDesktop />
      <NavMobile />
      <Hero />
      <About />
      <Purpose />
      <Sevice />
      <Proyeccts />
      <LocateUs/>
    </main>
  );
}

export default Dashboard
