"use client"
import { AnimatePresence } from 'framer-motion'
import Nav from '@/components/Nav'
import React from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const Transition = ({ children }) => {

    const pathname = usePathname();

    return (

        <AnimatePresence mode='wait'>

            <div key={pathname} className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'>

                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl cursor-default w-fit h-fit z-50"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {pathname.substring(1)}
                </motion.div>

                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                />

                <div className='h-24'>
                    <Nav />
                </div>

                <div className='h-[calc(100vh-6rem)]'>
                    {children}
                </div>

            </div>

        </AnimatePresence>
        
    )
}

export default Transition