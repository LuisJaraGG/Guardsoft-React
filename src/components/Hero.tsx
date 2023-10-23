import LottieW from "./LottiePlay";
import { FaAngleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="overflow-hidden min-h-[653px] h-screen bg flex flex-col md:flex-row justify-center items-center relative px-5 min-[400px]:px-10"
    >
      <div
        className=" w-full max-w-[400px] min-w-[200px] md:max-w-[500px]"
        data-aos="fade-right"
        data-aos-once="true"
      >
        <LottieW path="hero" styles=" h-[250px] md:md:h-[300px]" />
      </div>
      <div
        className="min-w-[200px] max-w-[350px]  "
        data-aos="fade-left"
        data-aos-once="true"
      >
        <p className="md:text-left text-[14px] md:text-[16px] text-blue-600 font-light">
          EMPIEZA TU NEGOCIO DIGITAL
        </p>
        <p className="text-[32px]  md:text-[48px] text-blue-600 font-extrabold leading-tight ">
          Estrategias digitales a medida orientadas a resultados
        </p>
        <p className="text-[14px]   md:text-lg text-slate-500 font-normal">
          Guardsoft es un partner digital listo para involucrarse y llevar a sus
          clientes al próximo nivel
        </p>
      </div>

      <div className="absolute bottom-4 left-0 right-0 animate-bounce duration-400 flex justify-center">
        <FaAngleDown className="text-blue-600 h-6" />
      </div>
    </section>
  );
};

export default Hero;
