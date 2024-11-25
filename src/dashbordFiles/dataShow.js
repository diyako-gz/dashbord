import React from "react";
import Chart from "./chart";
import { xAxisData } from "./Datas";
import JoinMem from "./joinMem"
import JoinRight from "./joinRight";


export default function DataShow() {
  return (
    <div className="flex-1 m-[20px]">
      <div className="grid grid-cols-3">
        <div className="flex justify-center">
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Revanue
            </h5>
            <p class="font-semibold text-gray-700 dark:text-gray-400">
              $2,415 Here are the biggest enterprise technology acquisitions of
              2021 so far, in reverse chronological order.
            </p>
            <p class="mt-[5px] font-normal text-gray-400 dark:text-gray-200">
              compared to last mounth
            </p>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Revanue
            </h5>
            <p class="font-semibold text-gray-700 dark:text-gray-400">
              $2,415 Here are the biggest enterprise technology acquisitions of
              2021 so far, in reverse chronological order.
            </p>
            <p class="mt-[5px] font-normal text-gray-400 dark:text-gray-200">
              compared to last mounth
            </p>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Revanue
            </h5>
            <p class="font-semibold text-gray-700 dark:text-gray-400">
              $2,415 Here are the biggest enterprise technology acquisitions of
              2021 so far, in reverse chronological order.
            </p>
            <p class="mt-[5px] font-normal text-gray-400 dark:text-gray-200">
              compared to last mounth
            </p>
          </a>
        </div>
      </div>
      <div className="mt-[100px]">
        <Chart grid title="mounth sale" data={xAxisData} dataKey="sale" />
      </div>
      <div className="mt-[100px] flex">
        <JoinMem />
        <JoinRight />
      </div>
    </div>
  );
}
