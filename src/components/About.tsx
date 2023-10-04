const About = () => {
  return (
    <section
      id="about"
      className="min-h-[653px] overflow-hidden h-screen flex flex-col md:flex-row-reverse justify-end bg"
    >
      <div className=" my-auto min-w-[250px] max-w-[310px] mx-auto px-4 md:max-w-[600px] md:pl-10">
        <p className=" text-[20px] lg:text-[25px]  font-normal text-blue-600">
          Sobre nosotros
        </p>
        <p className=" text-[32px] tittle-change md:text-[45px]  lg:text-[50px]  font-black text-blue-600  leading-tight ">
          ¿Quienes Somos?
        </p>
        <p className=" text-[16px] text-change  md:text-[24px]  font-normal text-slate-500 leading-relaxed">
          Guardsoft es una empresa peruana dedica a proveer soluciones del tipo
          informático para aquellas empresas que deseen optimizar su gestión:
          SISTEMAS INFORMÁTICOS A MEDIDA.
        </p>
      </div>
      <img
        src="/images/about.webp"
        alt="Guardsoft Abut image"
        className="w-full object-cover min-h-[250px] pt-3 md:w-1/2"
      />
    </section>
  );
};

export default About;
