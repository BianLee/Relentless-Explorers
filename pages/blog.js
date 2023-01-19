import { useState } from "react";
import Navbar from '../components/Navbar'
import React from "react"
import Link from "next/link";



export default class Blog extends React.Component {
    render() {
        return (
            <>
               <div><Navbar />
               <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">

               <div class="grid grid-cols-2 gap-4 h-15 md:grid-cols-3">
                <Link href="/blog/auburn"><div class="bg-gradient-to-r from-indigo-900 to-indigo-600 text-white py-5 px-5 hover:bg-indigo-600 text-center">Auburn, CA</div></Link>
                <Link href="/blog/sacramento"><div class="bg-gradient-to-r from-emerald-900 to-emerald-600 text-white py-5 px-5 hover:bg-indigo-600 text-center">Sacramento, CA</div></Link>
                </div>

               </div>
            </div>
            </>
        )
    }
}

