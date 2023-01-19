import { useState } from "react";
import Navbar from '../components/Navbar'
import React from "react"



export default class Join extends React.Component {
    render() {
        return (
            <>
               <div><Navbar />
               <div className="py-8 px-4 mx-auto  max-w-screen-xl lg:py-16 lg:px-12">
                   <span className="text-5xl">Davis, CA → Fresno, CA</span>
                   <span className="text-lg"><br/><br/>When: January 21 (Sat). 
                    <br/>Cost: $39 per person (meals are paid by each person separately).

                 
                   </span>
                   </div>
               </div>

            </>
        )
    }
}

