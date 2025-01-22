'use client'

import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
      const router = useRouter()
  
  return (
    <div className="bgImg relative  ">
       
      <Header />
      <div className="container   mx-auto px-[15px]">

        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-5">
          <div className="max-w-[583px] w-full mx-auto  ">
            <Form />
            <div className="flex justify-center mt-5">
              <button  onClick={()=>{
                router.push('/bridge')
              }} className='bg-custom  gap-1 w-[226px] h-[31px] flex justify-center items-center rounded-xl text-white font-bold'>
                Go To Bridge
                <img src="/assets/arrow.svg" alt="" />
              </button>
            </div>
          </div>
          <div>
            <img src="/assets/world.svg" className="max-w-full h-auto" alt="" />
          </div>
        </div>
      </div>
      <img src="/assets/Vector Smart Object (2).svg" className="absolute right-5 bottom-5 cursor-pointer" alt="" />

    </div>
  );
}
