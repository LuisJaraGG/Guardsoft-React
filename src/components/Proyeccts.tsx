import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { proyectos } from "../data/DataCards";
const Proyeccts = () => {

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: "50",
      };
  return (
    <section
      id="proyect"
      className="overflow-hidden min-h-[653px] flex flex-col justify-center items-center gap-y-10 bg py-20"
    >
      <div className="max-w-[900px] flex flex-col gap-y-10">
        <div className="text-center px-10">
          <p className="text-[32px] font-black text-blue-600">
            Nuestros Proyectos
          </p>
          <p className="text-[16px] font-normal text-slate-500">
            Nuestros proyectos se basan en la optimización de procesos y
            soluciones prácticas y rápidas según las necesidades de nuestros
            clientes
          </p>
        </div>
        <div className="w-full  md:h-80">
          <Slider
          {...settings}
            className="w-[210px] md:w-[300px] mx-auto text-center  md:h-80 bg-white  shadow-2xl  rounded-xl hover:shadow-violet-400 hover:shadow-2xl transition-all duration-300"

          >
            {proyectos.map((slide, index) => {
              return (
                <div key={index} className=" md:h-80    p-10 ">
                  <a
                    href={slide.link}
                    target="blank"
                    className="flex flex-col items-center"
                  >
                    <img
                      src={slide.url}
                      alt={`Guardsoft ${slide.tittle}`}
                      className="w-20 h-20"
                    />
                    <h1 className="text-blue-600 font-black">{slide.tittle}</h1>
                    <p className="">{slide.content}</p>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Proyeccts;
