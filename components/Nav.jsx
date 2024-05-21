'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { motion, stagger } from 'framer-motion'

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" }
]

const nav = () => {

    const [open, setOpen] = useState(false)

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "white"
        }

    }

    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0,
        }

    }

    const lastVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: "white"
        }

    }

    const menuVariants = {
        closed: {
            x: "100vh",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }

    }

    const itemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }



    return (

        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-base'>

            {/* links */}
            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map(i => (
                    // <Link href={i.url} key={i.title}>{i.title}</Link>
                    <NavLink link={i} key={i.title} />

                ))}
            </div>

            {/* for logo */}
            <div className='md:hidden lg:flex xl:justify-center xl:w-1/3'>

                <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                    <span className='text-white mr-2'>Push</span>
                    <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>dub</span>
                </Link>

            </div>

            {/* icons */}
            <div className='hidden md:flex flex gap-4 justify-center  w-1/3'>

                <Link href='https://github.com/Pushpendra6263/'>
                    <img src="/github.webp" alt="" height={30} width={30} />
                </Link>

                <Link href='https://www.linkedin.com/in/pushpendra-dubey-b3b9551a1/'>
                    <img src="/linkedin.webp" alt="" height={30} width={30} />
                </Link>

                <Link href='https://www.instagram.com/pd_pushpendra_/'>
                    <img src="/instagram.webp" alt="" height={30} width={30} />
                </Link>

                <Link href='https://www.facebook.com/pushpendra.dubey.7547/'>
                    <img src="/facebook.webp" alt="" height={30} width={30} />
                </Link>

                <Link href='https://in.pinterest.com/gulludubey123/'>
                    <img src="/pinterest.webp" alt="" height={30} width={30} />
                </Link>
                
            </div>

            {/* for resp */}
            <div className='md:hidden'>

                {/* button */}
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={(() => setOpen(!open))}>

                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className='w-10 h-1 bg-black rounded origin-left'>

                    </motion.div>

                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className='w-10 h-1 bg-black rounded'>

                    </motion.div>

                    <motion.div
                        variants={lastVariants}
                        animate={open ? "opened" : "closed"}
                        className='w-10 h-1 bg-black rounded origin-left'>

                    </motion.div>

                </button>

                {/* menu item */}
                {open && (
                    <motion.div variants={menuVariants} initial="closed" animate="opened" className=' fixed overflow-hidden top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-10 text-3xl z-40'>
                        {links.map(i => (
                            <motion.div variants={itemVariants} className=''>
                                <Link href={i.url} key={i.title}>{i.title}</Link>
                            </motion.div>
                        ))}

                        <div className='flex items-center justify-center gap-4 w-full h-[20vh] '>
                            <Link href='#'>
                                <img src="/github.webp" className='filter invert' alt="" height={40} width={40} />
                            </Link>
                            <Link href='#'>
                                <img src="/linkedin.webp" alt="" height={40} width={40} />
                            </Link>
                            <Link href='#'>
                                <img src="/instagram.webp" alt="" height={40} width={40} />
                            </Link>
                            <Link href='#'>
                                <img src="/facebook.webp" alt="" height={40} width={40} />
                            </Link>
                            <Link href='#'>
                                <img src="/pinterest.webp" alt="" height={40} width={40} />
                            </Link>
                        </div>
                    </motion.div>
                )}

            </div>

        </div>

    )
}

export default nav