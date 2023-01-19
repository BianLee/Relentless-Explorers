import { useState } from "react";
import Navbar from '../components/Navbar'
import React from "react"
import Image from "next/image";


export default class Gallery extends React.Component {
    render() {
        return (
            <>
               <div> <Navbar />
               <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" layout="fill" className="block object-cover object-center w-full h-full rounded-lg" src="/Auburn/auburn2.JPG" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="../Sacramento/sacramento1.JPG" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="../Auburn/auburn3.JPG" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="../Sacramento/sacramento2.JPG" />
              </div>
            </div>
          </div>
        </div>
      </section>
               
               </div>
            </>
        )
    }
}

