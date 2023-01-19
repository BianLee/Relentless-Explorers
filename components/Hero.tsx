import React from "react";
import Link from "next/link";

export default function Hero() {

    return(
        <div >
        <section className="bg-gradient-to-r from-slate-900 to-slate-700">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

    <h1 className="mb-4 mt-20 text-orange-400 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-5xl">
    Relentless <span className="text-white italic">Explorers</span> Ready To Rage On.</h1>
    <p className="mb-8 text-lg pb-5 font-normal text-white mt-10 lg:text-2xl sm:px-16 xl:px-48">
      Join us on our journey to visit every corner of the US ✈︎ 
    </p>
    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <div className="hover:opacity-75 inline-flex justify-center bg-cyan-800 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
>
<Link
        href="/gallery"
      >
        Subscribe to Newsletter
      </Link>
      </div>
<div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
<Link
        href="/join"
      >

        Join Us




      </Link>
      <svg
          className="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
</div>

    </div>

  </div>
</section>


</div>
    )
}