import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div className='py-5'>
        <div className="container mx-auto px-[15px]">
            <div className="flex justify-between items-center">
                <a href="#">
                    <Image width={94} height={93} alt='logo' src={'/assets/lgog.svg'} />
                </a>
                <button className='bg-custom w-[85px] h-[31px] flex justify-center items-center rounded-xl text-white font-bold'>
                    Sign in
                </button>
            </div>
        </div>
    </div>
  )
}
