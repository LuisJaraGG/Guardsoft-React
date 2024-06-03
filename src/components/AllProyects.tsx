import { proyectos } from "@/data/DataCards";
import Spiner from "./spiner";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon } from "lucide-react";


export const AllProyects=() => {
  const [Loading, setLoading] = useState(true)

    return (
        <>
        {Loading&& <Spiner inset="inset-0"/>}

        <section  className=" overflow-hidden  max-w-[980px] mx-auto py-16 ">
            <h1 className="text-2xl md:text-3xl text-blue-600 font-bold text-center mb-10"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-once="true"
            >Nuestos proyectos</h1>
            <div className="flex flex-col gap-y-20 px-5 mb-10">
            {proyectos.map((p, index) => {
                if ((index+1)%2!=0) {
                    return(
                    <div key={index} className="w-full grid md:grid-cols-2 gap-5 md:gap-0"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-once="true"
                    >
                        <a href={p.link} target="_blank" className="px-8">
                            <img src={p.image} alt={p.tittle} 
                            className="object-contain h-full"
                            onLoad={()=>setLoading(false)} >

                            </img>
                        </a>

                        <div className="px-8 text-justify">
                            <h1 className="text-xl md:text-3xl text-blue-600 font-bold text-justify">{p.tittle}</h1>
                            <p className="text-justify text-sm text-blue-600">{p.shotDescription}</p>
                            <p>{p.description}</p>
                            <div className="flex gap-2 mt-3">
                                {p.images.map((i) => {
                                    return(
                                        <img key={crypto.randomUUID()} src={i} alt={p.tittle} 
                                        className="object-contain  w-8 h-8"/>
                                    )
                                })}

                            </div>
                            <Link to={p.link} target="_blank">
                                <div className="mt-5">
                                <button className=" text-black hover:font-semibold py-2 px-4 rounded-3xl  border-2  transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex gap-2">Ver Proyecto <EyeIcon size={18} className="my-auto"/></button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    )
                }else{
                    return(
                    <div key={index} className="w-full grid md:grid-cols-2 gap-5 md:gap-0"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-once="true"
                    >
                        <div className="px-8 text-justify">
                        <h1 className="text-xl text-right md:text-3xl text-blue-600 font-bold">{p.tittle}</h1>
                        <p className="text-right text-sm text-blue-600">{p.shotDescription}</p>
                        <p>{p.description}</p>
                        
                        <div className="flex gap-2 mt-3 justify-end">
                                {p.images.map((i) => {
                                    return(
                                        <img key={crypto.randomUUID()} src={i} alt={p.tittle} 
                                        className="object-contain  w-8 h-8"/>
                                    )
                                })}

                            </div>
                        <Link to={p.link} target="_blank">
                                <div className="mt-5">
                                <button className=" text-black hover:font-semibold py-2 px-4 rounded-3xl  border-2  transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex gap-2">Ver Proyecto <EyeIcon size={18} className="my-auto"/></button>
                                </div>
                        </Link>
                        </div>
                        <a href={p.link} target="_blank" className="px-8">
                            <img src={p.image} alt={p.tittle} 
                            className="object-contain h-full"
                            onLoad={()=>setLoading(false)}/>
                        </a>
                    </div>
                    )
                }
            })}
            </div>

        </section>
        </>
    )
}
