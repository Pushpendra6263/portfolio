'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll } from 'framer-motion'
import Brain from '@/components/Brain'

const skill = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Python",
  "Node.js",
  "Express.js",
  "HTML",
  "CSS",
  "Tialwind CSS",
  "Bootstrap",
  "Redux",
  "Framer Motion",
  "MongoDB"
]

const about = () => {

  const containerref = useRef();
  const { scrollYProgress } = useScroll({ container: containerref })

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-50px" });

  const expRef = useRef();
  const isExperienceRefInView = useInView(expRef, { margin: "-100px" });

  const achRef = useRef();
  const isAchievementRefInView = useInView(achRef, { margin: "-100px" });

  return (

    <motion.div
      className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >

      {/* container */}
      <div className='h-full overflow-y-scroll lg:flex ' ref={containerref}>

        {/* text */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-32 flex flex-col gap-16 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-48 lg:w-2/3 lg:pr-0 xl:w-[55vw]' >

          {/* bio */}
          <div className=' flex flex-col gap-8 justify-center'>

            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>

            <p className='text-[15px] sm:text-lg' >
              I'm PUSHPENDRA DUBEY,
              I'm a Web-developer with proficiency in the MERN stack,
              I specialize in crafting captivating user interfaces and interactive web experiences.
              Leveraging my expertise in React.js and its ecosystem,
              I've collaborated on various projects that prioritize performance, accessibility, and user engagement.
              While my primary focus is on frontend development,
              I also have a quite good understanding of backend technologies such as Node.js and Express.js,
              allowing me to contribute across the full development stack.
            </p>

            <span className='italic'>Frontend Developer with MERN Stack Proficiency.</span>

            {/* sign */}
            <div className='self-end '>

              <svg
                width="70"
                height="70"
                viewBox="0 0 400 345"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M56.3043 174.783C74.0326 190.983 89.3418 209.537 106.261 226.565C122.543 242.952 134.415 253.758 151.391 269.478C164.634 281.741 182.123 294.511 193 309.326C198.878 317.332 172.96 307.641 163.652 304.174C131.37 292.15 100.309 276.808 75.087 252.913C53.3047 232.277 30.2883 207.684 13.913 182.348C2.002 163.919 -2.02114 136.583 6.47826 115.957C18.4622 86.8735 58.0215 68.9466 88 70.6957C129.967 73.1442 159.084 107.607 149.043 148.957C143.835 170.407 130.293 186.866 119.37 205.37C112.796 216.504 146.945 231.953 153.087 235.696C155.755 237.322 175.771 249.296 180.348 250.696C195.056 255.192 195.536 236.43 195.674 227.348C195.869 214.485 194.383 204.929 190.457 192.848C189.304 189.302 187.606 185.952 185.957 182.609C185.027 180.725 181.039 176.535 183.087 177C191.346 178.877 201.223 191.197 206.826 196.696C210.447 200.25 213.62 204.258 217.391 207.652C219.924 209.931 217.389 200.742 216.413 197.478C216.201 196.771 212.976 186.845 212.761 184.696C212.429 181.381 219.486 185.232 222.609 186.391C223.842 186.849 236.009 191.416 237.609 191.739C246.289 193.495 242.65 183.341 241.326 178.957C237.343 165.767 230.441 153.937 220.783 144.13C218.446 141.758 210.408 139.396 213.217 137.609C223.638 130.977 246.67 133.099 257.565 134.478C265.479 135.48 279.783 138.047 285.348 145.826C292.858 156.326 281.754 168.944 275.63 176.152C262.135 192.038 277.99 175.004 280.065 171.522C296.593 143.792 277.067 111.659 263.043 87.1304C258.508 79.1979 252.407 70.0203 246.739 62.6087C244.146 59.2177 236.376 53.1055 234.935 48.7826C234.219 46.6362 239.516 48.5216 241.717 49.0435C262.965 54.0799 283.18 63.8192 302.435 73.8261C321.811 83.896 346.157 98.0889 364.522 110.217C370.046 113.866 388.165 126.451 394.261 133.435C396.968 136.537 398.74 141.858 397.13 145.957C389.999 164.109 368.065 183.012 355.391 195.783C311.66 239.848 264.491 281.208 214.261 317.739C192.15 333.82 167.089 347.282 148.196 367.37C143.808 372.035 140.541 377.432 136.326 382.174C134.858 383.825 135.386 382.658 136.261 380.609C146.627 356.313 165.952 331.997 180.609 311.217C217.756 258.553 235.668 235.765 272.435 181.043C304.123 133.881 332.181 84.9508 361.848 36.587C368.867 25.1439 376.543 11.848 386.174 2.21741" stroke="black" stroke-width="3" stroke-linecap="round" />
              </svg>

            </div>

            {/* arrow */}
            <div className=''>

              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                width="40"
                height="40"
                viewBox="0 0 72 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">

                <path d="M71.5 42C71.5 64.9949 55.5366 83.5 36 83.5C16.4634 83.5 0.5 64.9949 0.5 42C0.5 19.0051 16.4634 0.5 36 0.5C55.5366 0.5 71.5 19.0051 71.5 42Z" stroke="black" />
                <path d="M35.2929 55.7071C35.6834 56.0976 36.3166 56.0976 36.7071 55.7071L43.0711 49.3431C43.4616 48.9526 43.4616 48.3195 43.0711 47.9289C42.6805 47.5384 42.0474 47.5384 41.6569 47.9289L36 53.5858L30.3431 47.9289C29.9526 47.5384 29.3195 47.5384 28.9289 47.9289C28.5384 48.3195 28.5384 48.9526 28.9289 49.3431L35.2929 55.7071ZM35 15V55H37V15H35Z" fill="black" />
              </motion.svg>

            </div>

          </div>

          {/* skill */}
          <div ref={skillRef} className='gap-6 flex flex-col sm:gap-8 justify-center'>

            <motion.h1
              initial={{ x: "-400px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'>
              SKILL
            </motion.h1>

            <motion.div
              initial={{ x: "-400px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className='flex flex-wrap'>
              {skill.map((i) => (
                <div className='p-3 sm:p-3 mx-4 my-2 text-[12px] sm:text-sm cursor-pointer rounded bg-black text-white hover:bg-white hover:text-black'>{i}</div>
              ))}

            </motion.div>

            <div className=''>

              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                width="40"
                height="40"
                viewBox="0 0 72 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">

                <path d="M71.5 42C71.5 64.9949 55.5366 83.5 36 83.5C16.4634 83.5 0.5 64.9949 0.5 42C0.5 19.0051 16.4634 0.5 36 0.5C55.5366 0.5 71.5 19.0051 71.5 42Z" stroke="black" />
                <path d="M35.2929 55.7071C35.6834 56.0976 36.3166 56.0976 36.7071 55.7071L43.0711 49.3431C43.4616 48.9526 43.4616 48.3195 43.0711 47.9289C42.6805 47.5384 42.0474 47.5384 41.6569 47.9289L36 53.5858L30.3431 47.9289C29.9526 47.5384 29.3195 47.5384 28.9289 47.9289C28.5384 48.3195 28.5384 48.9526 28.9289 49.3431L35.2929 55.7071ZM35 15V55H37V15H35Z" fill="black" />
              </motion.svg>

            </div>

          </div>

          {/* Experiences */}
          <div ref={expRef} className='gap-6 flex flex-col sm:gap-8 justify-center'>

            <motion.h1
              initial={{ x: "-400px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'>
              EXPERIENCE
            </motion.h1>

            {/* exp list */}
            <motion.div
              initial={{ x: "-400px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=''>

              {/* list item */}
              <div className=' h-64 flex justify-between'>

                {/* left */}
                <div className='w-1/2'>

                  <div className='text-[12px] w-2/3 px-2 py-1 sm:text-lg sm:w-fit bg-white sm:p-3 font-semibold rounded-b-lg rounded-s-lg'>Front-End Developer Intern</div>

                  <div className='text-[11px] p-3 sm:text-sm italic'>I've developed responsive and
                    user friendly web pages using HTML, CSS and JavaScript and also implement dynamic features and integrated
                    APIs.</div>

                  <div className='text-[12px] p-3 text-sm font-semibold text-red-400'>09/2022 - 11/2022</div>

                  <div className='text-[12px] w-fit p-1 bg-white text-sm rounded font-semibold'>Goeasy HSC Pvt. Ltd.</div>

                </div>

                {/* center */}
                <div className='w-1/6'>

                  {/* line */}
                  <div className=' w-1 h-full bg-gray-500 rounded relative'>

                    <div className='absolute h-5 w-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>

                  </div>
                </div>

                {/* right */}
                <div className='w-1/3'>

                </div>

              </div>

            </motion.div>

          </div>

          {/* achievement */}
          <div ref={achRef} className='gap-6 flex flex-col sm:gap-8 justify-center pb-48'>

            <motion.h1
              initial={{ x: "-400px" }}
              animate={isAchievementRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'>
              ACHIEVEMENT
            </motion.h1>

            <motion.div
              initial={{ x: "-400px" }}
              animate={isAchievementRefInView ? { x: "0" } : {}}
              className=''
            >

              {/* list item */}
              <div className='h-48 flex justify-between'>

                {/* left */}
                <div className='w-1/3'>

                  <div className=' p-3 text-lg font-semibold text-red-400'>Winner</div>

                  <div className=' text-[12px] p-2 sm:text-base w-fit bg-white sm:p-3 font-semibold rounded-b-lg rounded-s-lg'>Wesite Challenge</div>

                  <div className='text-[13px] sm:text-sm py-3'>Organized by Oriental College of Technology</div>


                </div>

                {/* center */}
                <div className='flex justify-center items-center w-1/6'>

                  {/* line */}
                  <div className=' w-1 h-full bg-gray-500 rounded relative'>

                    <div className='absolute h-5 w-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>

                  </div>
                </div>

                {/* right */}
                <div className='w-1/3 flex items-center justify-center relative'>
                  {/* <div className='h-[80%] w-2/3 relative rounded'>
                    <Image src='/ach1.jpg' className='rounded-md' fill alt='' />

                  </div> */}

                </div>

              </div>


              {/* list item */}
              <div className=' h-48 flex justify-between'>

                {/* left */}
                <div className='w-1/3 flex items-center justify-center'>
                  {/* <div className='h-2/3 w-full relative rounded'>
                    <Image src='/ach2.jpg' className='rounded-md' fill alt='' />

                  </div> */}
                </div>

                {/* center */}
                <div className='flex justify-center items-center w-1/6'>

                  {/* line */}
                  <div className=' w-1 h-full bg-gray-500 rounded relative'>

                    <div className='absolute h-5 w-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>

                  </div>
                </div>

                {/* right */}
                <div className='w-1/3'>

                  <div className=' p-3 text-lg font-semibold text-red-400'>Winner</div>

                  <div className='text-[12px] p-2 sm:text-base w-fit bg-white sm:p-3 font-semibold rounded-b-lg rounded-s-lg'>Junior vs Senior Hackathon</div>

                  <div className='py-3 text-[13px] sm:text-sm '>Organized by Sheryians Coding School</div>

                </div>

              </div>


              {/* list item */}
              <div className=' h-48 flex justify-between'>

                {/* left */}
                <div className='w-1/3'>

                  <div className=' p-3 text-lg font-semibold text-red-400'>Participant</div>

                  <div className='text-[12px] p-2 sm:text-base w-fit bg-white sm:p-3 font-semibold rounded-b-lg rounded-s-lg'>Web-Development Hackathon</div>

                  <div className='py-3 text-[13px] sm:text-sm '>Organized by Sheryians Coding School</div>

                </div>

                {/* center */}
                <div className='flex justify-center items-center w-1/6'>

                  {/* line */}
                  <div className=' w-1 h-full bg-gray-500 rounded relative'>

                    <div className='absolute h-5 w-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>

                  </div>
                </div>

                {/* right */}
                <div className='w-1/3 flex items-center justify-center'>
                  {/* <div className='h-[80%] w-2/3 relative '>
                    <Image src='/ach3.jpg' className='rounded-md' fill alt='' />

                  </div> */}
                </div>

              </div>

            </motion.div>

          </div>

        </div>

        {/* svg container */}
        <div className='h-full hidden lg:block w-1/3 top-0 sticky z-30 xl:w-[45vw]'>

          <Brain scrollYProgress={scrollYProgress} />

        </div>

      </div>

    </motion.div >

  )
}

export default about