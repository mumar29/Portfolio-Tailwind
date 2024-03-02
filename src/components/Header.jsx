import React from 'react'

export default function Header() {
  return (
      <header id="header" class="p-4 fixed top-0 w-80 flex justify-center items-center">
        <nav class="flex space-x-4">
          <a
            href="#section-1"
            class="glow transition duration-300 hover:bg-red-700 px-3 py-2 rounded"
            >Home</a
          >
          <a
            href="#section-2"
            class="glow transition duration-300 hover:bg-red-700 px-3 py-2 rounded"
            >Resume</a
          >
          <a
            href="#section-3"
            class="glow transition duration-300 hover:bg-red-700 px-3 py-2 rounded"
            >Skills</a
          >
          <a
            href="#section-4"
            class="glow transition duration-300 hover:bg-red-700 px-3 py-2 rounded"
            >Projects</a
          >
          <a
            href="#section-5"
            class="glow transition duration-300 hover:bg-red-700 px-3 py-2 rounded"
            >Contact</a
          >
        </nav>
      </header>
  )
}
