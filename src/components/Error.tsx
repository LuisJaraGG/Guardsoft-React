
const Error = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex justify-center items-center text-center px-10">
      <h1 className="text-4xl font-black txt-default">
        {" "}
        OOPS!!..
        <br />
        <br />
        <span className="text-3xl text-black">
          No se pudo encontrar la pagina a la que trataste de acceder :(
        </span>
      </h1>
    </div>
  );
}

export default Error