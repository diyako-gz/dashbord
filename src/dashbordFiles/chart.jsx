import React from 'react'
import { ResponsiveContainer , LineChart , Line , XAxis , CartesianGrid , Tooltip } from 'recharts'



export default function Chart({title , data , dataKey , grid}) {
  return (
    <>
        <h3 className='font-bold text-2xl'>{title}</h3>
        <ResponsiveContainer className="w-[100%] shadow-xl" aspect={4}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd' />
                <Line dataKey={dataKey} stroke='#5550bd' />
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>}
            </LineChart>
        </ResponsiveContainer>
    </>
  )
}
