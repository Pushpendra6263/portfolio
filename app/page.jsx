'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Home = () => {
  return (
    <motion.div
      className='h-full w-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full lg:flex-row flex flex-col px-4 sm:px-8 md:px-12 lg:px20 xl:px-48' >

        {/* img */}
        <div className=' h-1/2 flex lg:h-full lg:w-1/2 relative'>
          <Image src="/profile1.webp" alt="" fill className='object-contain lg:py-6' />
        </div>

        {/* text */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-5 sm:gap-8 items-center justify-center'>

          <h1 className='text-3xl md:text-5xl font-bold text-center lg:text-left'>Crafting Digital Experiences, Designing Tomorrow. </h1>

          <p className='md:text-l'>Hey There! I'm Pushpendra Kumar Dubey , Welcome to my Portfolio.I am a passionate Web-developer with a keen eye for detail and a drive for excellence.</p>

          <div className=' w-full flex gap-4'>
            <Link href='/portfolio'> <button className='px-4 py-3 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</button> </Link>
            <Link href='/contact'> <button className='px-4 py-3 rounded-lg ring-1 ring-black'>Contact Me</button> </Link>
          </div>

        </div>

      </div>
    </motion.div>
  )
}

export default Home