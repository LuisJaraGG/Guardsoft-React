import { proyectos } from "@/data/DataCards";
import Spiner from "./spiner";
import { useState } from "react";


export const AllProyects=() => {
  const [Loading, setLoading] = useState(true)

    return (
        <>
        {/* {Loading&& <Spiner inset="inset-0"/>} */}

        <section className=" overflow-hidden  max-w-[980px] mx-auto py-16 flex flex-col gap-y-24 px-5">
            <h1 className="text-xl md:text-3xl text-blue-600 font-bold text-center ">Nuestos proyectos</h1>
        </section>
        </>
    )
}
