import React from "react";

import { mamber } from "./Datas";

export default function JoinMem() {
  return (
    <div className="">
      <div className="">
        <p className="font-medium text-3xl">new join member</p>
        <div className="flex flex-col mt-[50px] shadow-2xl p-[20px] rounded-xl">
          <div className="grid grid-cols-3">
          {mamber.map(data => (
            <>
                 <div className="">
            <img
              src={data.img}
              className="w-[80px] rounded-full"
              alt=""
            />
          </div>
          <div className="p-[25px]">
            <p className="text-xl">{data.userName}</p>
          </div>
          <div className="p-[25px]">
            <p className="text-xl">{data.title}</p>
          </div>
            </>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
