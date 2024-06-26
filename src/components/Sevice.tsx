import { servicios } from "../data/DataCards";
import LottieW from "./LottiePlay";
import { Link } from "react-router-dom";


const Sevice = () => {
  return (
    <section
      id="service"
      className=" bg overflow-hidden min-h-[653px] flex flex-col justify-start md:justify-center  py-20 gap-y-10"
    >
      <div className="text-center " data-aos="fade-up" data-aos-once="true">
        <p className="text-blue-600 font-black text-3xl leading-tight">
          Servicios
        </p>
        <p className="text-slate-500 font-normal ">
          Servicios de la mejor calidad con la mejor tecnología
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-y-10 gap-5 px-1 ">
        {servicios.map((s, index) => {
          return (
            <div
              key={index}
              className=" bg-white rounded-lg p-8 shadow-lg  w-64 "
              data-aos={s.animation}
              data-aos-once="true"
            >
              <LottieW path={s.lottie} styles=" w-[150px] h-[140px]" />
              <h1 className="text-center text-blue-600 font-black text-xl">
                {s.tittle}
              </h1>
              <p className="text-center">{s.content}</p>
            </div>
          );
        })}
      </div>
      <div className=" w-full h-[40px] flex justify-center   ">
        <Link to={'/todos-servicios'}>
        <button className=" text-black hover:font-semibold py-2 px-4 rounded-3xl  border-2  transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600">
          <p>Ver mas servicios</p></button>
        </Link>
      </div>
    </section>
  );
};

export default Sevice;
