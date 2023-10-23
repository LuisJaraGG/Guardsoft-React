
import { proposito } from "../data/DataCards";
import { UserCheck, Building2, Speech } from "lucide-react";

import LottieW from "./LottiePlay";
const Purpose = () => {
  return (
    <section
      id="proposito"
      className="min-h-[653px] overflow-hidden flex flex-col justify-start md:justify-center items-center relative py-20 gap-y-5 "
    >
      <div className="text-center px-3">
        <p className="text-white font-bold text-3xl md:text-4xl">Propósito</p>
        <p className="text-white font-light md:text-xl">
          Unidos por nuestros valores compartidos
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-y-10 gap-5 px-1 ">
        {proposito.map((p, index) => {

          const getIcon = (icon:string)=>{
            const style = "w-[150px] h-[60px] mb-2 text-blue-600";
                       switch (icon) {
                          case "1":
                            return  <UserCheck className={style}/>
                          case "2":
                            return <Building2 className={style} />;
                          case "3":
                            return <Speech className={style} />;
                          default:
                             return null;
                        };
          }
          return (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg p-8 shadow-lg  w-64 hover:shadow-violet-400 hover:shadow-2xl transition-all duration-300 "
            >
              {getIcon(p.lottie)}
              <h1 className="text-center text-blue-600 font-black leading-tight text-xl">
                {p.tittle}
              </h1>
              <p className="text-center">{p.content}</p>
            </div>
          );
        })}
      </div>

      <div className=" absolute top-0 left-0 right-0 -z-20">
        <LottieW path="espacio" styles="w-[125%] md:w-[100%]  md:w-[150%]" />
      </div>
    </section>
  );
}

export default Purpose