import React from 'react'
import { transaction } from './Datas'

export default function joinRight() {
  return (
    <div className=''>
        <div className="w-[830px]">
        <p className='font-medium text-5xl ml-[20px]'>web transition</p>
        <div className="flex flex-col mt-[40px] ml-[15px] p-[20px] shadow-2xl rounded-xl">
            <div className="grid grid-cols-4">
                <p className='font-semibold'>customer</p>
                <p className='font-semibold ml-[25px]'>date</p>
                <p className='font-semibold ml-[25px]'>amount</p>
                <p className='font-semibold ml-[25px]'>status</p>
            </div>
            <div className="grid grid-cols-4">
                {transaction.map(data => (
                    <>
                        <div className="flex mt-[20px]">
                    <img src={data.img} className='w-[70px] h-[60px] rounded-full' alt="" />
                    <p className='ml-[15px] mt-[15px]'>
                        {data.customer}
                    </p>
                </div>
                
                <div className="p-[25px]">
                  <p className='mt-[15px]'>{data.date}</p>
                </div>
                <div className="p-[25px]">
                  <p className='mt-[15px]'>${data.amount}</p>
                </div>
                <div className="p-[25px]">
                  <p className='mt-[15px] p-[5px] bg-green-200 rounded-xl'>{data.state}</p>
                </div>
                    </>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}
