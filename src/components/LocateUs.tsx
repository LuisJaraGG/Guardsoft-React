import { FaMap, FaAddressCard, FaPhone } from "react-icons/fa";
import { locacion } from "../data/DataCards";
const LocateUs = () => {

      
    return (
      <section
        id="locate"
        className="overflow-hidden min-h-[653px] flex flex-col relative py-20 gap-y-10 justify-center"
      >
        <div
          className="text-center px-5"
          data-aos="fade-up"
          data-aos-once="true"
        >
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
                className=" bg-white rounded-lg p-8 shadow-lg  w-64  flex flex-col justify-center items-center "
                data-aos={locate.animation}
                data-aos-once="true"
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
        <div className="absolute top-0 left-0 right-0 -z-20 w-full h-full">
          <div
            className="relative w-[100%] h-full"
            style={{
              backgroundImage: `url('/images/bg-2.webp')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-black absolute opacity-50"></div>
          </div>
        </div>
      </section>
    );
};

export default LocateUs;
