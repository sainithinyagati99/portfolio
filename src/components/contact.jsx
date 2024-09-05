import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

function contact() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_xo4jac8', 'template_6k2n1vt', form.current, {
          publicKey: 'lSrQWRR1XLxPhnwf2',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset()
    };
  return (
<>
<h1 className='mt-10 text-center font-bold text-white text-2xl'><code>Reach me</code></h1>
<div class="m-10">
    <div class="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                <div>
                    <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                    <p class="text-sm text-gray-500 mt-4">
                      Have something in mind, let's connect to explore more. <i>"Greatest things start with smallest ideas."  ~ wiseman</i>
                    </p>
                    <div class="mt-12">
                        <h2 class="text-gray-800 text-base font-bold">Email</h2>
                        <ul class="mt-4">
                            <li class="flex items-center">
                                <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <IoMail />
                                </div>
                                <a href="mailto:sainithin.yagati99@hotmail.com" class="text-black text-sm ml-4 w-3/4">
                                    <small class="block">Mail</small>
                                    <strong>sainithin.yagati99@hotmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-12">
                        <h2 class="text-gray-800 text-base font-bold">Also Connect @</h2>

                        <ul class="flex mt-4 space-x-4">
                            <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.linkedin.com/in/sainithin-yagati/">
                                <BsLinkedin />
                                </a>
                            </li>
                            <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://github.com/sainithinyagati99">
                                <FaGithub />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form class="ml-auo space-y-4" ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Name' name='user_name'
                        class="w-11/12 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-gray-500" />
                    <input type='email' placeholder='Email' name='user_email'
                        class="w-11/12 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-gray-500" />
                    <input type='text' placeholder='Subject' name='subject'
                        class="w-11/12 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-gray-500" />
                    <textarea placeholder='Message' rows="6" name='message'
                        class="w-11/12 text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-gray-500"></textarea>
                    <button type='submit'
                        class="text-white bg-black hover:bg-gray-600 rounded-md text-sm px-4 py-3 w-11/12 !mt-6">Send</button>
                </form>
    </div>
  </div>
</>
  )
}

export default contact