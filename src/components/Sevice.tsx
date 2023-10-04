import { servicios } from "../data/DataCards";
import LottieW from "./LottiePlay";

const Sevice = () => {
  return (
    <section
      id="service"
      className=" bg overflow-hidden min-h-[653px] flex flex-col justify-start md:justify-center  py-20 gap-y-10"
    >
      <div className="text-center ">
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
              className=" bg-white rounded-lg p-8 shadow-lg  w-64 hover:shadow-blue-400 hover:shadow-2xl transition-all duration-300 "
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
    </section>
  );
};

export default Sevice;
