import { useState } from "react";
import Navbar from '../components/Navbar'
import React from "react"



export default class Join extends React.Component {
    render() {
        return (
            <>
               <div><Navbar />
               <div className="py-8 px-4 mx-auto  max-w-screen-xl lg:py-16 lg:px-12">
                   <span className="text-5xl">Davis, CA → Chico, CA</span>
                   <span className="text-lg"><br/><br/>When: This weekend, January 20 (Fri) - January 21 (Sat). 
                    <br/>Cost: $42 per person (meals are paid by each person separately).
                    <br/>Destinations: 
                    California State University Chico, Bidwell Mansion, Downtown Chico, Upper Bidwell Park, Chico Air Museum, and more...
                    <br/>What to bring: Warm clothes, neck pillow, 
                    <br/><br/>Fill out this form to join us on the trip.

                 
                   </span>
                   </div>
               </div>

            </>
        )
    }
}

