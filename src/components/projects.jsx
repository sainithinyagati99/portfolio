import React from 'react'

function about() {
  return (
    <>
    <h1 className='m-12 text-center font-bold text-white text-2xl'><code>/* My^Projects */</code></h1>
    <div class="flex flex-wrap justify-center mt-10">
    {/* Portfolio */}
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-black p-8 border-white border-4 flex-col hover:scale-105 transition-all">
            <div class="flex items-center mb-3">
                <h2 class="text-white dark:text-white text-lg font-medium">Portfolio Site</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                A showcase of my front-end development skills, featuring projects built with modern frameworks and technologies.
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-gray-600 inline-flex items-center">Go there.
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    {/* Chatbot */}
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-black border-white border-4 p-8 flex-col hover:scale-105 transition-all">
            <div class="flex items-center mb-3">
                <h2 class="text-white dark:text-white text-lg font-medium">Chatbot</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                  An open-source project with aim to deliver an framwework for applications to automate the task of help and support process.
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-gray-600 inline-flex items-center">Go there.
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    {/* ToDo */}
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-black border-white border-4 p-8 flex-col hover:scale-105 transition-all">
            <div class="flex items-center mb-3">
                <h2 class="text-white dark:text-white text-lg font-medium">ToDo App</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                  List out your daily activities and never forget a thing that's important to you, just add things to the list and get going.
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-gray-600 inline-flex items-center">Go there.
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    {/* Decentralized Storage Network */}
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-black border-white border-4 p-8 flex-col hover:scale-105 transition-all">
            <div class="flex items-center mb-3">
                <h2 class="text-white dark:text-white text-lg font-medium">Decentralized Storage Network</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                  A large scale open source project, a protocol for accessing the information and distributing the data using Peer-to-Peer technologies, eliminaiting centralized platform.
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-gray-600 inline-flex items-center">Go there.
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    {/* Personal Blog */}
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-black border-white border-4 bg-teal-400 p-8 flex-col hover:scale-105 transition-all">
            <div class="flex items-center mb-3">
                <h2 class="text-white dark:text-white text-lg font-medium">Personal Blog</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                  My personal blog site to manage all the postings and updates on latest technologies. I don't just stick with IT and software, I also talk about Space, Crypto, Financical upscaling...
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-gray-600 inline-flex items-center">Go there.
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    {/* Expenses Manager */}
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-black border-white border-4 bg-teal-400 p-8 flex-col hover:scale-105 transition-all">
            <div class="flex items-center mb-3">
                <h2 class="text-white dark:text-white text-lg font-medium">Expenses Manager</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                  Manage your everyday expenses in this simple Web App portal, categorize your expenses and see where you're spending money the most.
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-gray-600 inline-flex items-center">Go there.
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default about