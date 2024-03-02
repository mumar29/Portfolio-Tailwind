import React from 'react'
import ecommerce from '../Imgs/ecommerce-store.avif'
import easybank from '../Imgs/easybank.jpg'
import ipharmacy from '../Imgs/ipharmacy.png'
export default function Projects() {
  return (
    <section
      id="section-4"
      class="text-white flex flex-col items-center justify-center h-screen"
    >
      {/* <!-- Content for Section 4 --> */}
      <div
        id="projects"
        class="flex flex-col items-center justify-center h-screen"
      >
        <div id="projects-head" class="text-sm mt-3 mb-5">
          <h1 class="text-2xl md:text-2xl lg:text-3xl font-bold mt-16 p-5">
            Projects I've Worked On
          </h1>
        </div>

        <div class="flex justify-between items-center p-4 mb-6 h-screen">
          <div
            id="section-1"
            class=" glow-left border-l-4 border-red-500 box w-2/8 text-white text-center p-10 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <img
            src={easybank}
              alt="Image 1"
              class="w-80 mb-5 rounded"
            />
            <h2 class="text-white">Easy Bank App</h2>
            <a href="https://mrnust.github.io/ecommerceStore/"><button class="modern-button">Live Demo</button></a>
          </div>

          <div
            id="section-1"
            class="glow-left border-l-4 border-red-500 box w-2/8 text-white text-center p-10 rounded-md transition-transform transform hover:scale-105"
          >
            <img
              src={ecommerce}
              alt="Image 2"
              class="w-80 mb-5 rounded"
            />
            <h2 class="text-white">Ecommerce Store</h2>
           <a href="https://mrnust.github.io/ecommerceStore/"><button class="modern-button">Live Demo</button></a> 
          </div>

          <div
            id="section-1"
            class=" glow-left border-l-4 border-red-500 box w-2/8 text-white text-center p-10 rounded-md transition-transform transform hover:scale-105"
          >
            <img
              src={ipharmacy}
              alt="Image 3"
              class="w-80 mb-5 rounded"
            />
            <h2 class="text-white">iPharmacy App</h2>
            <a href="https://mrnust.github.io/ecommerceStore/"><button class="modern-button">Live Demo</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}
