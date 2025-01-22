'use client'

import { BridgeForm } from "@/components/BridgeForm";
 
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
 



export default function Page() {
    const router = useRouter()
  return (
    <div className="bgImg">
      <Header />
      <div className="container   mx-auto px-[15px]">

        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-5">
          <div className="max-w-[583px] w-full mx-auto  ">
            <BridgeForm />
            <div className="flex justify-center mt-5">
              <button 
              onClick={()=>{
                router.push('/')
              }}
               className='bg-custom  gap-1 w-[226px] h-[31px] flex justify-center items-center rounded-xl text-white font-bold'>
                Go To Xswapp
                <img src="/assets/arrow.svg" alt="" />
              </button>
            </div>
          </div>
          <div>
            <img src="/assets/Gradient Fill 2.svg" className="max-w-full h-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
