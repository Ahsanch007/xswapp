import React from 'react'

export const BridgeForm = () => {
    return (
        <div className='relative w-full bg-white bg-opacity-60  p-3 lg:p-8 shadow-2xl rounded-[30px]'>

            <div className="flex justify-between items-center">
                <h1 className='font-bold text-transparent bg-clip-text bg-custom text-[40px]'>
                    BRIDGE
                </h1>
                <img src="/assets/Color Fill 4.svg" className='object-cover' alt="" />

            </div>
            <div className="flex flex-col py-5 gap-2">
                <div className="flex flex-col gap-2">
                    <div className="flex items-end gap-1">
                        <img src="/assets/Color Fill 7 copy (1).svg" className='max-w-[48px] h-auto' alt="" />
                        <p className='text-[#414141] font-semibold'>
                            XRP$
                        </p>

                    </div>
                    <input type="number" className=' text-[#414141] placeholder:text-[#414141] font-medium outline-none text-[20px] px-3 py-2 items-center flex bg-[#a5a5a5] border-none rounded-[30px] w-full' placeholder='0' />
                    <div className="flex items-end gap-3">
                        <p className='text-[#414141] font-semibold'>
                            $0
                        </p>
                        <p className='text-[#414141] font-semibold'>
                            Max
                        </p>

                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="/assets/Vector Smart Object.svg" className='cursor-pointer max-w-full' alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-end gap-1">
                        <img src="/assets/Color Fill 7 copy (1).svg" className='max-w-[48px] h-auto' alt="" />
                        <p className='text-[#414141] font-semibold'>
                            Xcash
                        </p>

                    </div>
                    <input type="number" className=' text-[#414141] placeholder:text-[#414141] font-medium outline-none text-[20px] px-3 py-2 items-center flex bg-[#a5a5a5] border-none rounded-[30px] w-full' placeholder='0' />
                    <div className="flex items-end gap-3">
                        <p className='text-[#414141] font-semibold'>
                            $0
                        </p>
                        <p className='text-[#414141] font-semibold'>
                            Max
                        </p>

                    </div>
                </div>
            </div>
            <div className="flex justify-center">

                <button className='bg-custom w-[226px] h-[31px] flex justify-center items-center rounded-xl text-white font-bold'>
                    Connect Wallet
                </button>
            </div>
        </div>
    )
}
