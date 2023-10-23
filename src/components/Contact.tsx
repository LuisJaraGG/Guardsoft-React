import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import LottieW from "./LottiePlay";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import Spiner from "./spiner";

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

  const { toast } = useToast();
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (
      values.name.trim() === "" ||
      values.phone.trim() === "" ||
      values.email.trim() === "" ||
      values.message.trim() === ""
    ) {
      return toast({
        variant: "destructive",
        description: `Debe de llenar todos los campos`,
      });
    }
    setLoading(true);

    fetch("https://node-nodemailer-provider.vercel.app/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          toast({
            description: "Mensaje enviado",
            duration: 2000,
          });
          form.reset();
        } else {
          toast({
            variant: "destructive",
            description: `Ocurrió un error al enviar el mensaje!`,
          });
        }
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          description: `Ocurrió un error en: ${error}`,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const isLoading = form.formState.isSubmitting;

  return (
    <>
      {Loading && <Spiner />}
      <div
        id="contactanos"
        className=" flex  items-center  relative min-h-[805px]  overflow-hidden h-screen"
      >
        {/* hasta 1088 px es mono */}

        <div className="min-[1268px]:max-w-[900px] mx-auto md:flex md:items-center   ">
          <div className=" hidden min-[1268px]:flex min-[1268px]:w-1/2 min-[1268px]:justify-center min-[1268px]:items-center">
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <LottieW
                path={"plane"}
                id={"contactanos-fondo4"}
                styles={"w-full h-full"}
              ></LottieW>
            </div>
          </div>
          <div className=" flex flex-col gap-y-16 md:gap-y-8 justify-center max-w-[450px] md:max-w-[400px] mx-auto  md:px-10 min-[830px]:px-8  min-[1268px]:w-1/2 px-5 ">
            <div
              className="text-center "
              data-aos="flip-up"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <p className="text-[32px] font-black txt-default titulo">
                Contáctanos
              </p>
              <hr className="border-default border-1 w-52 mx-auto" />
              <p className="text-slate-600 font-normal text-sm texto">
                Contácta con nosotros para poder asesorarte
              </p>
            </div>

            <div
              data-aos="fade-in"
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                    disabled={isLoading}
                    type="submit"
                    className=" bg-default hover:from-blue-900 hover:to-blue-800 w-full rounded-none titulo"
                  >
                    Enviar
                  </Button>
                </form>
              </Form>
            </div>

            <div className="flex flex-row gap-x-10 justify-center">
              <a href="https://www.facebook.com/yenivilcatomaofic?locale=es_LA">
                <FaFacebook size={30} className="txt-default "></FaFacebook>
              </a>
              <a href="https://www.youtube.com/@vilcatomaabogados8490">
                <FaYoutube size={30} className="txt-default "></FaYoutube>
              </a>
              <a href="https://twitter.com/YeniVilcatoma2">
                <FaTwitter size={30} className="txt-default "></FaTwitter>
              </a>
              <a href="https://www.instagram.com/yeni_vilcatoma_2/">
                <FaInstagram size={30} className="txt-default "></FaInstagram>
              </a>
            </div>
          </div>
        </div>

        {/* fondo */}
        <div className="absolute top-0 -z-10 md:hidden ">
          <LottieW
            path={"top2"}
            id={"contactanos-fondo4"}
            styles={"h-full  "}
          ></LottieW>
        </div>
        <div className="absolute bottom-0  left-0 right-0 -z-10 ">
          <LottieW
            path={"fondo4"}
            id={"contactanos-fondo4"}
            styles={"w-full  "}
          ></LottieW>
        </div>
      </div>
    </>
  );
};

export default Contact;
