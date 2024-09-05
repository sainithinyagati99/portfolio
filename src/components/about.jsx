import React from 'react'
import Skills from './skills'
import homeimg01 from '../assets/homeimg01.jpg'
import homeimg02 from '../assets/homeimg02.jpg'

function about() {
  return (
    <>
    <section>
    <div class="gap-16 items-center mt-20 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-white sm:text-lg">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Hello, my name is <code>Sai Nithin, Yagati.</code></h2>
            <p class="mb-4">I'm an experienced software developer with <i>.NET</i> and <i>MERN</i> stack technologies in my bucket. I work on solutions that makes things lot more easier that it already is.</p>
            <p>Apart from working on software industry, I'm much curious about crypto, investing strategies and space related stuff. </p>
            <p className='mb-2'>Need to know more about my background?</p>
            <span className='p-1 bg-gradient-to-r from-gray-600 to-slate-400 rounded-full text-white font-semibold'><a href="https://drive.google.com/file/d/1PM8-cNVki4otuGoTJBH2aB05qFaWeTi7/view?usp=drive_link">Download my Resume</a></span>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-2xl" src={homeimg01} alt="office content 1"></img>
          <img class="mt-4 lg:mt-10 w-full rounded-2xl" src={homeimg02} alt="office content 1"></img>
        </div>
    </div>
    </section>
    <Skills/>
    </>
  )
}

export default about