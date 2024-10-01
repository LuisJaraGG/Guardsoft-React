import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { proyectos } from "../data/DataCards";
import Slider from "react-slick";
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";


const Proyeccts = () => {

  const CustomNextArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
      <ArrowRight
        id="proyectBefore"
        color="white"
        size={18}
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  
  const CustomPrevArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
      <ArrowLeft
        id="proyectNext"
        color="white"
        size={18}
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };


  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,

        }
      },
    ]
  };

  return (
    <section
      id="proyect"
      className=" min-h-[653px] max-w-[900px] mx-auto w-full gap-y-10 py-20 overflow-hidden bg"
    >
      <div className="flex flex-col gap-y-10">
        <div className="text-center px-10" data-aos="fade-up">
          <p className="text-[32px] font-black text-blue-600">
            Nuestros Proyectos
          </p>
          <p className="text-[16px] font-normal text-slate-500">
            Nuestros proyectos se basan en la optimización de procesos y
            soluciones prácticas y rápidas según las necesidades de nuestros
            clientes
          </p>
        </div>

        <div
          className="w-full mx-auto px-8 "
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Slider {...settings}>
            {proyectos.map((slide, index) => (
                <a  key={index}                     href={slide.link}
                target="_blank" className=" bg-white rounded-lg p-10 md:max-w-[300px] shadow-md my-3 min-h-[288px] hover:scale-105  transition-all duration-200">
                  <div
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <img
                      src={slide.url}
                      alt={`Guardsoft ${slide.tittle}`}
                      className="w-20 h-20"
                      width={512}
                      height={512}
                    />
                  </div>
                  <div className="text-center">
                    <h1 className={`${slide.tittle === 'Ecar-Autosales' ? 'text-blue-500' : 'text-blue-600'} font-black`}>{slide.tittle}</h1>
                    <p>{slide.content}</p>
                  </div>
                </a>
            ))}
          </Slider>
        </div>


        <Link to="/todos-proyectos">
          <div className="text-center">
          <button className=" text-black hover:font-semibold py-2 px-4 rounded-3xl  border-2  transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600">Ver todos los proyectos</button>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default Proyeccts;
