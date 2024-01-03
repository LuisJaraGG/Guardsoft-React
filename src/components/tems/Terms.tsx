import { Image } from "@nextui-org/react";
const Terms = () => {
  return (
    <>
      <section className=" mx-auto  px-8 md:px-20  mb-16 max-w-5xl bg">
        <div id="header"></div>
        <div>
          <div className="flex justify-center mb-5">
            <Image
              width={100}
              height={100}
              src="/images/guardsoft-logo-solo.jpg"
              className=" rounded-lg"
            ></Image>
          </div>
          <div className="text-center bg-blue-600 py-5  flex flex-col justify-center items-center px-5 mb-10">
            <h1 className="text-3xl font-black text-center text-white flex flex-row items-center gap-x-5 ">
              Políticas de Protección de Datos
            </h1>
          </div>
          <p className="text-justify text-lg">
            Honestamente, pensamos que nadie entraría a leernos. ¿Sabes por qué?
            Nos han acostumbrado tanto a que estas cosas sean tan largas y
            complicadas, que te apuesto que ni esperabas que comencemos con
            saludarte.  <br /> Creemos que es importante que entiendas de una manera
            sencilla cómo trataremos tu información personal que nos brindas en
            tu proceso de registro en Guardsoft. Por ese motivo, hemos trabajado
            con el Departamento Legal para darte algo directo y transparente. <br />  <br /> 
          </p>
          <h2 className="text-blue-700 text-xl font-bold">
            Aceptación de los términos de uso
          </h2>
          <p className="text-justify text-lg">
            Es toda información que te identifica o te hace identificable (Ley
            29733): Nombre, documento de identidad, nacionalidad, estado civil,
            dirección, ocupación, correo electrónico, teléfono, certificado
            electrónico, firma manuscrita o digital, imagen, voz, huella
            dactilar, rostro, iris u otros datos biométricos, entre otros. <br />  <br /> 
          </p>
          <h2 className="text-blue-700 text-xl font-bold">
            En Guardsoft, estos Datos nos ayudan a:
          </h2>
          <p className="text-justify text-lg">
            Registrar información para análisis estadísticos, históricos o
            científicos. Mantener contacto con nuestros clientes a través de
            nuestros canales autorizados (*). <br /> 
            Realizar reportes de mercadeo. <br /> 
            Habilitar los distintos programas de beneficios que Guardsoft tiene
            para sus clientes y sus potenciales clientes. <br />  Cualquier otra
            actividad parecida a las ya mencionadas y en favor de seguir
            desarrollando la relación con nuestros clientes. <br /> LLamadas o
            mensajes mediantes el siguiente numero registrado en Guardsoft +51
            982189495  <br /> Sí, podemos transferir tus Datos Personales a terceros con
            los que Guardsoft desarrolle actividades para el cumplimiento de su
            operación. Algunos de ellos pueden encontrarse fuera de Perú. Es por
            ello que ponemos en conocimiento que con la aceptación de la
            presente política nos brindas la autorización para transmitir tus
            datos a los proveedores antes mencionados. <br />  Descuida. No
            transferiremos tus Datos Personales si los requieren para otras
            finalidades distintas a las antes mencionadas. De todas maneras,
            agradecemos la confianza que has puesto en nosotros y te
            garantizamos que estos posibles destinatarios tratarán tus Datos
            Personales con el grado de protección adecuado. <br />  Estos se colocarán
            en un Banco de Datos Personales llamado “Usuarios”, donde podrán ser
            conservados por un periodo máximo de (10) años.
          </p>
        </div>
        <div>
          <h2 className="text-blue-700 text-xl font-bold pt-10">
            ¿Qué derechos tienes como Titular de los Datos Personales?
          </h2>
          <p className="text-justify text-lg">
            Todo a lo legal <br /> Nos regimos por la Constitución Política del Perú y
            la Ley, especialmente los derechos de acceso, rectificación,
            cancelación y oposición (Derechos ARCO). Esto quiere decir que, como
            Titular de los Datos Personales, puedes no aceptar nuestras
            políticas; sin embargo, esto podría afectar el cumplimiento de
            nuestros servicios.
          </p>
        </div>
        <div>
          <h2 className="text-blue-700 text-xl font-bold pt-10">
            ¿Qué puedes hacer en caso tengas una solicitud?
          </h2>
          <p className="text-justify text-lg">
            Queremos que te sientas en total confianza de poder ejercer tus
            Derechos ARCO. <br /> Si se trata de derechos de rectificación, cancelación
            y oposición, tenemos diez (10) días hábiles para poder responderte.
            En caso sea una solicitud de acceso, este plazo será de veinte (20)
            días hábiles. <br />  No te vamos a mentir, puede que necesitemos ampliar
            estos plazos algunas veces para poder procesar tu solicitud. Sin
            embargo, te avisaremos antes y solo si las circunstancias lo
            justifican, por una sola vez y como máximo por un periodo igual al
            previamente mencionado. <br />  Asimismo, en Guardsoft estamos obligados a
            comunicar estas decisiones al domicilio o correo electrónico
            indicado. Así que no te preocupes, si tenemos que ampliar el plazo,
            recibirás la notificación correspondiente. <br /> Con respecto a la
            Cancelación de los Datos Personales, esta no procederá si en
            Guardsoft los necesitamos por razones históricas, estadísticas o
            científicas; y, por lo tanto, justifican su tratamiento. <br /> Si no
            atendemos tus Derechos ARCO dentro del plazo establecido, o los
            denegamos, puedes acudir a la Autoridad Nacional de Protección de
            Datos Personales y presentar tu reclamo. Si lo crees necesario,
            también podrías acercarte al Poder Judicial para las medidas
            correspondientes a la acción de hábeas data. <br /> <br />  Te queremos consciente
            y despierto, <br /> <br />  El Departamento Legal de Guardsoft
          </p>
        </div>
      </section>
      <section className=" border-t-2 py-2 gap-x-2 items-center text-center">
        ©2024 GUARSOFT ALL RIGHTS RESERVED <span className="text-xs text-blue-600">1.0.2</span> 
    </section>
    </>
  );
};

export default Terms;
