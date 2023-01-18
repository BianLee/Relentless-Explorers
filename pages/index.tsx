import React from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Terminology from '../components/Terminology'
import Footer from '../components/Footer'
export default function NextPage() {
  return (
    <div>
      <Head>
        <title>BostonLobster</title> 
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}

// export default Home
