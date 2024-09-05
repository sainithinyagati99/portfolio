import React, { useState } from 'react'

function navbar() {
    const [isMenuOpen,setisMenuOpen]=useState(false)
  return (
    <div>
        <header className='fixed w-screen flex justify-between text-center text-white py-6 px-8 md:px-32 bg-black'>
            <a href="/"><h1 className='p-2 font-extrabold'>SNY.</h1></a>
            <ul className='hidden xl:flex items-center gap-10 font-semibold text-base'>
                <li className='p-2 hover:bg-gray-400 hover:text-white rounded-full transition-all cursor-pointer'><a href="#projects">Projects</a></li>
                <li className='p-2 hover:bg-gray-400 hover:text-white rounded-full transition-all cursor-pointer'><a href="#experience">Experience</a></li>
                <li className='p-2 bg-white text-black rounded-full cursor-pointer'><a href="#contact">Contact</a></li>
            </ul>
            <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer' onClick={()=>{setisMenuOpen(!isMenuOpen)}}></i>
            <div className={`absolute xl:hidden top-24 left-0 w-full bg-black flex flex-col items-center gap-3 font-semibold text-lg transform transition-transform ${isMenuOpen? "opacity-100":"opacity-0"}`} style={{transition:"transform 0.3s ease opacity 0.3s ease"}}>
                <li className='list-none w-full text-center p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer'><a href="#projects">Projects</a></li>
                <li className='list-none w-full text-center p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer'><a href="#experience">Experience</a></li>
                <li className='list-none w-full text-center p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer'><a href="#contact">Contacts</a></li>
            </div>
        </header>
    </div>
  )
}

export default navbar