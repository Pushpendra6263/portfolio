'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

const contact = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const text = "Say Hello"

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      }
      )
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true);
          console.log(error);
        },
      );
  };

  return (
    <motion.div
      className='h-full w-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-4'>

        <div className='h-[30vh] lg:h-full lg:w-1/2 flex items-center justify-center text-4xl '>

          <div >

            {text.split("").map((letter, idx) => (

              <motion.span
                key={idx}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
            😉
          </div>
        </div>

        <form onSubmit={sendEmail} ref={form} className='h-[75vh] flex flex-col justify-center p-10 lg:p-16 gap-5 lg:gap-6 lg:h-full lg:w-2/3 bg-red-50 rounded-xl text-xl'>

          <h3 className='text-lg'>Dear Pushpendra Dubey,</h3>

          <textarea name='user_message' rows={4} className='bg-transparent border-b-2 border-b-black outline-none resize-none'></textarea>

          <span className='text-lg'>
            My mail address is :
          </span>

          <input name='user_email' type="text" className='bg-transparent border-b-2 border-b-black outline-none ' />

          <span className='text-md'>
            Regards,
          </span>

          <button className='bg-purple-200 rounded font-semibold text-gray-600 px-4 py-3 text-base'>Send</button>

          {success && (
            <span className='text-green-500 font-semibold'>
              Your message has been sent successfully!
            </span>)}

          {error && (
            <span className='text-red-500 font-semibold'>
              Something went wrong!
            </span>)}

        </form>

      </div>

    </motion.div>
  )
}

export default contact