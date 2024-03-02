import React from 'react'
import Header from './Header'
import { useEffect } from 'react';
import black from '../Imgs/blackpfp.jpeg';
export default function Home({home}) {
  useEffect((home)=>{
  },[])
  return (
      <section
      id="section-1"
      class="relative bg-blue-900 text-white flex flex-col items-center justify-center h-screen overflow-hidden"
    >
    <Header/>
      <div
        class="w-40 h-40 rounded-full overflow-hidden pulse mt-3"
        style={{backgroundColor: '#ff4133'}}>
        <img
          src={black}
          alt="miraal"
          class="w-full h-full object-cover"
        />
      </div>
      <h1 id="name-h1" class="text-4xl md:text-4xl lg:text-5xl font-bold mt-9">
        {home.title}
      </h1>
      <p class="text-lg md:text-xl lg:text-xl mt-5">
        {home.description}
      </p>
    </section>
  )
}
