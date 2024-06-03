import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import * as z from "zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import LottieW from "./LottiePlay";
import { FaFacebook, FaInstagram,FaTwitter } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useState } from "react";

const Contact = () => {
  const [Loading, setLoading] = useState(false);
  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Debe tener un minimo de 3 caracteres" })
      .max(50)
      .trim(),
    phone: z.string().length(9, { message: "Debe ingresar 9 dígitos" }).trim(),
    email: z.string().email({ message: "El correo no es valido" }).trim(),
    message: z
      .string()
      .min(10, { message: "Debe tener un minimo de 10 caracteres" })
      .max(500)
      .trim(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    fetch("https://nodemailer-guardsoft.vercel.app/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Mensaje enviado");
          form.reset();
        } else {
          toast.error("Ocurrió un error al enviar el mensaje");
        }
      })
      .catch((error) => {
        toast.error(`Ocurrió un error en: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });

    return;
  }

  const { isSubmitting } = form.formState;

  return (
    <>
      <div
        id="contact"
        className=" flex  items-center  relative min-h-[805px]  overflow-hidden h-screen "
      >
        {/* hasta 1088 px es mono */}

        <div className="min-[1268px]:max-w-[900px] mx-auto md:flex md:items-center   ">
          <div className=" hidden min-[1268px]:flex min-[1268px]:w-1/2 min-[1268px]:justify-center min-[1268px]:items-center">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <LottieW path={"plane"} styles={"w-full h-full"}></LottieW>
            </div>
          </div>
          <div className=" flex flex-col gap-y-16 md:gap-y-8 justify-center max-w-[450px] md:max-w-[400px] mx-auto  md:px-10 min-[830px]:px-8  min-[1268px]:w-1/2 px-5 ">
            <div
              className="text-center "
              data-aos="flip-up"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <p className="text-[32px] font-black text-blue-600 titulo">
                Contáctanos
              </p>
              <hr className="border-default border-1 w-52 mx-auto" />
              <p className="text-slate-600 font-normal text-sm texto">
                Contácta con nosotros para poder asesorarte
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-offset="0"
              className=""
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-1 texto"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="w/full"
                            disabled={isSubmitting}
                            placeholder="Ingrese nombre"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="w/full"
                            disabled={isSubmitting}
                            placeholder="Ingrese número de celular"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="w/full"
                            disabled={isSubmitting}
                            placeholder="Ingrese email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            className="w/full mb-5"
                            disabled={isSubmitting}
                            rows={5}
                            placeholder="Descripción de su consulta"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    disabled={Loading}
                    type="submit"
                    className=" bg-blue-700 hover:bg-blue-500 w-full rounded-none titulo flex gap-x-2"
                  >
                    {Loading && <Loader2 className="animate-spin" />}
                    Enviar
                  </Button>
                </form>
              </Form>
            </div>

            <div
              className="flex flex-row gap-x-10 justify-center"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61554667806183"
              >
                <FaFacebook
                  size={30}
                  className="text-blue-700 hover:text-blue-500 transition-all duration-300 "
                ></FaFacebook>
              </a>
              <a target="_blank" href="https://www.instagram.com/guardsoft.pe/">
                <FaInstagram
                  size={30}
                  className="text-blue-700 hover:text-blue-500 transition-all duration-300 "
                ></FaInstagram>
              </a>
              <a target="_blank" href="https://twitter.com/guardsoft_pe">
                <FaTwitter
                  size={30}
                  className="text-blue-700 hover:text-blue-500 transition-all duration-300 "
                ></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
