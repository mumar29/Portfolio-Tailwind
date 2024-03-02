import React from 'react'
import white from '../Imgs/whitepfp.jpeg'
export default function Resume({resume}) {
  return (
    <section
      id="section-2"
      class="text-white flex flex-col items-center justify-center h-screen py-16"
    >
      <div class="container mx-auto flex flex-wrap justify-center">
        <div
          class="w-80 md:w-1/2 px-4 mb-8 md:mb-0 flex justify-center items-center"
        >
          <div class="w-80 h-full img-container">
            <img
              id="about-img"
              src={white}
              alt="Profile Image"
              class="object-cover"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 px-4 text-center md:text-left">
          <div class="info">
            <div class="intro mb-8">
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                About Me
              </h1>
              <p class="text-sm md:text-base lg:text-sm">
                {resume.aboutMe.description}
              </p>
            </div>
            <div
              class="resume flex flex-wrap border-l-4 border-red-500 pl-4 hover:glow hover:shadow-lg"
            >
              <div class="w-full md:w-1/2">
                <h2 class="red text-base md:text-lg lg:text-xl font-bold mb-2">
                  Education
                </h2>
                <h3 class="mb-2 font-bold text-sm md:text-base lg:text-sm">
                  {resume.education[0].degree} ({resume.education[0].year})
                </h3>
                <p class="text-sm md:text-base lg:text-sm mb-2">
                  Secured {resume.education[0].marks}
                </p>
                <h3 class="mb-2 font-bold text-sm md:text-base lg:text-sm">
                {resume.education[1].degree} ({resume.education[1].year})
                </h3>
                <p class="text-sm md:text-base lg:text-sm mb-2">
                Secured {resume.education[1].marks}
                </p>
                <h3
                  class="mb-2 font-bold text-sm md:text-base lg:text-sm"
                  style={{textAlign: 'left'}}
                >
                {resume.education[2].degree}, {resume.education[2].institution} ({resume.education[2].year})
                </h3>
                <p class="text-sm md:text-base lg:text-sm mb-2">
                  Current CGPA: {resume.education[2].currentCGPA}
                </p>
              </div>
              <div class="w-full md:w-1/2">
                <h2 class="red text-base md:text-lg lg:text-xl font-bold mb-2">
                  Experience
                </h2>
                {/* <!-- Experience content here --> */}
                <h3 class="mb-2 font-bold text-sm md:text-base lg:text-sm">
                {resume.experience[0].company} ({resume.experience[0].year})
                </h3>
                <p class="text-sm md:text-base lg:text-sm mb-2">
                {resume.experience[0].description}
                </p>
                <h3 class="mb-2 font-bold text-sm md:text-base lg:text-sm">
                {resume.experience[1].company} ({resume.experience[1].year})
                </h3>
                <p class="text-sm md:text-base lg:text-sm mb-2">
                {resume.experience[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
