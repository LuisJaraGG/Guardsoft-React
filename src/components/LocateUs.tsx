import { FaMap, FaAddressCard, FaPhone } from "react-icons/fa";
import { locacion } from "../data/DataCards";
import LottieW from "./LottiePlay";
const LocateUs = () => {

      
    return (
      <section
        id="locate"
        className="overflow-hidden min-h-[653px] flex flex-col relative py-20 gap-y-10 justify-center"
      >
        <div className="text-center px-5">
          <p className="text-white font-bold text-2xl md:text-4xl">
            ¿Preparado para un nuevo Proyecto?
          </p>
          <p className="text-white font-light md:text-xl">
            Háblanos de tu proyecto
          </p>
        </div>
        <div className=" flex flex-wrap justify-center gap-x-5 gap-y-12 px-1">
          {locacion.map((locate, index) => {
            const getIconComponent = (iconName: string) => {
              switch (iconName) {
                case "FaMap":
                  return <FaMap size={32} className="text-blue-600" />;
                case "FaAddressCard":
                  return <FaAddressCard size={32} className="text-blue-600" />;
                case "FaPhone":
                  return <FaPhone size={32} className="text-blue-600" />;
                // Agrega más casos según los nombres de iconos que uses en tu JSON
                default:
                  return null;
              }
            };
            return (
              <div
                key={index}
                className=" bg-white rounded-lg p-8 shadow-lg  w-64  flex flex-col justify-center items-center hover:shadow-blue-400 hover:shadow-2xl transition-all duration-300"
              >
                {getIconComponent(locate.icono)}
                <h1 className="text-blue-600 font-black text-xl">
                  {locate.tittle}
                </h1>
                <p>{locate.content}</p>
              </div>
            );
          })}
        </div>

        {/* Fondo */}
        <div className=" absolute top-0 left-0 right-0 -z-20">
          <LottieW path="espacio" styles="w-[125%] md:w-[100%]  md:w-[150%]" />
        </div>
      </section>
    );
};

export default LocateUs;
