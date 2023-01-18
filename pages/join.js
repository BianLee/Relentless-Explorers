import { useState } from "react";
import Navbar from '../components/Navbar'
import React from "react"



export default class Join extends React.Component {
    render() {
        return (
            <>
               <div><Navbar />
               <div className="py-8 px-4 mx-auto  max-w-screen-xl lg:py-16 lg:px-12">
                   <span className="text-5xl">Sacramento, CA → Oxford, MS</span>
                   <span className="text-lg"><br/><br/>Feb 17 - Feb 20, 2023. <br/>Fill out this form to join us on the trip.
                 
                   </span>
                   </div>
               </div>

            </>
        )
    }
}

