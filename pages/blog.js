import { useState } from "react";
import Navbar from '../components/Navbar'
import React from "react"



export default class Blog extends React.Component {
    render() {
        return (
            <>
               <div><Navbar />
               <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
                   <span className="text-5xl">Auburn, California.</span>
                   <span className="text-lg"><br/><br/>
                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                   laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                   architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                   sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                   voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                   consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                   dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
                   ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                   <br/><br/>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                   ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                   aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                   sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                   anim id est laborum.
                   <br/><br/>
                   At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                   </span>
                   </div>
               </div>

            </>
        )
    }
}

