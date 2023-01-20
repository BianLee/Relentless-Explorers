import React from "react";
import Link from 'next/link';
import { render } from "react-dom";

export default class Navbar extends React.Component <any, any>{

  constructor(props) {
    super(props);
    this.state = {
      dropDownClicked: false 
    }

    this.dropDown = this.dropDown.bind(this);
  }

  dropDown() {
    if (this.state.dropDownClicked) {  
      this.setState({
        dropDownClicked: false
      })
    }
    else {
      this.setState({
        dropDownClicked: true 
      })
    }
  }
  render() {
    return (
      <nav className="top-0 z-50 bg-black border-gray-200 px-2 sm:px-4 py-6 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
  
            <span className="flex items-center self-center text-2xl font-semibold whitespace-nowrap text-white">
            <Link
                  href="/"
                aria-current="page"
                >
                  737 Champions
                </Link>
            </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={this.dropDown}
          >    
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg" 
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
     
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li                 className="block py-2 pr-4 pl-4 text-xl text-white hover:text-white md:hover:bg-transparent hover:text-white"
  >
                <Link
                  href="/blog"
                aria-current="page"
                >
                  Blog
                </Link>
              </li> 
              <li                 className="block py-2 pr-4 pl-4 text-xl text-white hover:text-white md:hover:bg-transparent hover:text-white"
  >
                <Link
                  href="/gallery"
                >
                  Gallery 
                </Link>
  
              </li>
              <li                 className="block py-2 pr-4 pl-4 text-xl text-white hover:text-white md:hover:bg-transparent hover:text-white"
  >
                <Link
                  href="/join"
                >
                  Join 
                </Link>
  
              </li>
            </ul>
          </div>
        </div>
        {this.state.dropDownClicked ? <>
          <div className="container">
        <br/>
        <Link href="/blog"><div className="text-white">Blog</div></Link>
        <Link href="/gallery"><div className="text-white mt-2.5">Gallery</div></Link>
        <Link href="/join"><div className="text-white mt-2.5">Join</div></Link>

        
        </div>
        </> : <></>}
      </nav>
      
    );
  }
  
}
