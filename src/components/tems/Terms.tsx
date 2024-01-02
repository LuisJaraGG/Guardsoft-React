
import { Image } from '@nextui-org/react'
import {PaperclipIcon} from 'lucide-react'
const Terms = () => {
  return (
    <section className=" mx-auto  px-8 md:px-20  mb-16 max-w-5xl bg">

    <div id="header"></div>
    <div id="body">

      <div className='flex justify-center mb-5'>
      <Image width={100} height={100} src='/images/guardsoft-logo-solo.jpg' className=' rounded-lg'></Image>
      </div>
      <div className='text-center bg-blue-600 py-5  flex flex-col justify-center items-center px-5 mb-10'>
      <h1 className="text-3xl font-black text-center text-white flex flex-row items-center gap-x-5 "> <PaperclipIcon size={30} className='hidden md:flex'></PaperclipIcon>Términos y condiciones de uso</h1>
      </div>
      <h2 className="text-blue-700 text-xl font-bold">Aceptación de los términos de uso</h2>
      <p className="text-justify text-lg">
      Estos Términos y Condiciones regulan la descarga, acceso y utilización de la aplicación móvil (en adelante, la ECAR), que GUARDSOFT EIRL, ponen a disposición de los usuarios.
      ECAR esta disponible de forma gratuita, y cuenta con servicios FREEMIUM mediente suscripcion.
      Todas las compras y transacciones que se lleven a cabo por medio de esta app, estan sujetas a un proceso de confirmacion y verificacion, el cual podria incluir la validacion de la forma de pago, validacion de la boleta (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificacion por medio de correo electronico.
      Los precios de los servicios ofrecidos en esta app son validos solamente en las compras realizadas en esta app.
      Licencia
      GUARDSOFT EIRL, a traves de su app concede una licencia para que los usuarios utilien los servicios que son vendidos en esta app de acuardo a los Terminos y Condiciones que se describen en este documento.</p>
      </div>
      <h2 className="text-blue-700 text-xl font-bold pt-10">Uso no autorizado</h2>
      <p className="text-justify text-lg">Ecar es un producto de GUARDSOFT EIRL, usted no puede colocar uno de nuestros productos, modificado o sin modificar y ofrecerlos para la redistribucion o la reventa de ningun tipo.
      Politicas de reembolso y garantia
      No se realiza reembolsos despues de que se consuma el servicio, ustedes tiene la responsabilidad de entender antes de comprar unos de nuestros servicios. Hay algunos servicios que pudieran tener garantia y posibilidad de reembolso, pero este sera especificado al comprar el servicio.
      Comprobación antifraude
      La compra del cliente puede ser aplazada para la comprobacion antifraude. Tambien puede ser suspendida por más tiempo para una investigacionmás rigurosa, para evitar transacciones fraudulentas.
      Privacidad
      Esta app garantiza que la informacion personal que usted envia cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validacion de los pedidos no seran entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden juducial o requeriminetos legales.
      GUARDSOFT EIRL se reserva los derechos de cambiar o de modificar estos terminos sin previo aviso. </p>
    </section>
  )
}

export default Terms