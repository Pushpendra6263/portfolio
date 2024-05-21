'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link';

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "CareerCraft",
    desc: "Developed a job and internship portal using node.js, Redux, and Next.js, with user authentication, real-time updates, and RESTful APIs. User authentication and authorization for secure access. Ability for users to save job listings for future reference or apply directly through the platform.",
    img: "/careercraft.webp",
    link: "",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "TMDB Clone",
    desc: "The TMDB Movie Clone App aims to provide users with a comprehensive platform for discovering, exploring, and enjoying movies, leveraging the power of React, Next.js, and external APIs to deliver a seamless and immersive entertainment experience.",
    img: "/tmdb.webp",
    link: "",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Lightfactory Clone",
    desc: "Developed using HTML, CSS, and JavaScript, with advanced animations powered by GSAP and Locomotive Scroll Trigger. Achieved seamless scrolling effects and captivating user interactions to enhance the user experience.",
    img: "/lightfactory.webp",
    link: "https://lightfactoryclone.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-blue-300",
    title: "Neverland Clone",
    desc: "Developed using HTML, CSS, and JavaScript, with advanced animations powered by GSAP and Locomotive Scroll Trigger. Achieved seamless scrolling effects and captivating user interactions to enhance the user experience.",
    img: "/neverland.webp",
    link: "https://neverlandclone.netlify.app/",
  },
  {
    id: 5,
    color: "from-blue-300 to-red-300",
    title: "Portfolio",
    desc: "Welcome to my interactive resume portfolio, where I've combined the power of React, Next.js, GSAP, and Framer Motion to bring my resume to life. As a frontend developer passionate about creating immersive web experiences, I've leveraged cutting-edge technologies to showcase my skills and expertise in a dynamic and engaging way.",
    img: "/portfolio.webp",
    link: "https://github.com/Pushpendra6263/Project3",
  },
];

const portfolio = () => {

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"])



  return (

    <motion.div
      className='h-full relative  '
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >

      <div className='h-[600vh] relative' ref={ref}>

        <div className='h-[calc(100vh-6rem)] w-screen flex flex-col gap-6 items-center justify-center  text-center'>
          <h1 className='text-6xl'>My Works</h1>
          <p className='w-1/2'>Here, you'll find a showcase of my most significant projects, highlighting the unique approaches and methodologies I employ to achieve impactful results.</p>
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden ">

          <motion.div style={{ x }} className='flex'>

            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"></div>

            {items.map((item) => (

              <div className={`h-screen w-screen flex flex-shrink-0 items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>

                <div className=' h-full flex flex-col justify-center gap-5 text-white'>

                  <h1 className='text-xl font-bold md:text-4xl lg:text-5xl xl:text-5xl'>{item.title}</h1>

                  <div className='bg-red-400 relative w-80  h-48 md:w-96 md:h-48 lg:w-[470px] lg:h-[250px] xl:w-[550px] xl:h-[320px]'>
                    <Image src={item.img} alt="" fill />
                  </div>

                  <p className="w-80 md:w-96 text-[15px] sm:text-sm md:text-sm lg:text-lg lg:w-[500px]  xl:w-[600px]">{item.desc}</p>

                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">View Project</button>
                  </Link>

                </div>


              </div>

            ))}

          </motion.div>

        </div>

      </div>

      <div className='h-screen w-screen flex flex-col items-center justify-center text-center gap-16'>

        <h1 className='text-6xl'>Do you have a Project</h1>

        <div className='relative'>

          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            className='w-56 h-56 md:w-[400px] md:h-[400px] '
            viewBox="0 0 300 300"
          >

            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text>
              <textPath xlinkHref="#circlePath" className='text-lg'>
                Front-end and MERN Stack Developer
              </textPath>
            </text>
          </motion.svg>
          <Link href='/contact' className='w-20 h-20 md:w-20 md:h-20 absolute top-0 left-0 right-0 rounded-full bottom-0 m-auto bg-black text-white flex items-center justify-center'>Hire me</Link>
        </div>

      </div>

    </motion.div>

  )
}

export default portfolio