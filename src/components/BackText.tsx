const BackText = () => {
  return (
    <div
      className=" overflow-hidden w-full h-72 relative"
      style={{
        backgroundImage: `url('/images/bg-3.webp')`,
        backgroundSize: "fill",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
      data-aos="fade-up"
      data-aos-once="true"
    >
      
      <div className="w-full h-full flex justify-center items-center bg-black absolute opacity-75 ">
        <p className="text-white font-bold text-2xl text-center px-10 md:text-4xl">
          Alta calidad en cada producto
        </p>
      </div>
    </div>
  );
}

export default BackText