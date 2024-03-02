import React from 'react'
import linkedIn from '../Imgs/LinkedIn_.png'
import gmail from '../Imgs/gmail.jpg'
import fb from '../Imgs/fb.png'
import github from '../Imgs/github.png'
import phone from '../Imgs/phone.png'
export default function Contact() {
  return (
    <section
    id="section-5"
    class="text-white flex flex-col items-center justify-center h-full"
  >
    {/* <!-- Content for Section 5 --> */}
    <h2 class="text-3xl font-bold mt-16">Get in Touch</h2>

    <div
      class="container mb-5 flex flex-col md:flex-row justify-center items-center h-full space-y-10 md:space-y-0 md:space-x-10"
    >
      {/* <!-- Left Div: Social Media Links --> */}
      <div id="section-1"
        class="text-white p-8 rounded-md shadow-md md:mb-0 mb-8"
      >
        <div class="glow-left border-l-4 border-red-500 p-2">
          <a class="flex-row" href="https://www.linkedin.com/" target="_blank" title="LinkedIn"
            ><img class="w-10 h-10" src={linkedIn} alt="LinkedIn"
          /><p>LinkedIn</p></a> 
          <a href="https://www.facebook.com/" target="_blank" title="Facebook"
            ><img class="w-10 h-10" src={fb} alt="Facebook"
          /> Facebook</a>
          <a href="https://github.com/" target="_blank" title="GitHub"
            ><img class="w-10 h-10" src={github} alt="GitHub"
          />GitHub</a>
          <a href="mailto:your.email@example.com" title="Email"
            ><img class="w-10 h-10" src={gmail} alt="Email"
          />miraalcci@gmail.com</a>
        </div>
      </div>

      {/* <!-- Right Div: Contact Form --> */}
      <div id="section-2" class="text-white p-8 rounded-md shadow-md">
        <form action="#" method="post">
          {/* <!-- Form fields go here --> */}
          <div class="mb-4">
            <label for="name" class="block text-sm font-semibold"
              >Your Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white text-pink-900 rounded-md p-2"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold"
              >Your Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white text-pink-900 rounded-md p-2"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-semibold"
              >Your Message</label
            >
            <textarea
              id="message"
              name="message"
              rows="4"
              class="w-full bg-white text-pink-900 rounded-md p-2"
            ></textarea>
          </div>
          <button type="submit" class="modern-button bg-green-800 text-white px-4 py-2 text-base rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-600">Send Message</button>
        </form>
      </div>
    </div>
  </section>
  )
}
