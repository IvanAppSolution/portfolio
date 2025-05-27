import { useState } from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  let [works, setWorks] =  useState(assets.works)

//   const showMoreWork = () => {
     
//     // console.log('workAdded: ', workAdded)
//     setWorks([...works, { icon: assets.sidebar_logo, title: 'Application design', description: 'Application design and scope making the plans and implementation of software applications, focusing on both functionality and the user experience...', link: '' },
//         { icon: assets.cube_logo, title: 'Database design', description: 'Organizing data within a database. Defining data and establishing relationships between data elements...', link: '' },
//         { icon: assets.web_icon, title: 'UI/UX design', description: 'UI/UX design and creating a seamless user experience...', link: '' },
//         { icon: assets.gear_logo, title: 'Troubleshoot/\nEnhancement', description: 'systematic process to identify and resolve issues. Add features and improve functionality or performance...', link: '' }])
//   }  

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
 

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo mb-24'>
          My portfolio
      </motion.h2>

     {workData.map((data, index)=>(
      <div  key={index} className='w-full mb-10 flex flex-col items-center gap-4'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className=' dark:text-black'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='flex item-center'
              > 
              <div className='w-auto mx-auto'> 
                <a target="_blank"  href={data.liveLink}>
                  <Image src={data.bgImage} alt='send icon' className='' width={700} height={1000}/>
                </a>
              </div>
            </motion.div>
        </motion.div>
        <div className='flex flex-col items-center mb-10' >
          <h2 className='font-semibold text-center'>{data.title}</h2>
          <p className='text-gray-700 text-center'>{data.description}</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <div className='group'><a href={data.liveLink} target="_blank" className='group-hover:scale-105 hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
              Check Live
            </a></div>
            <div className='group'><a href={data.githubLink} target="_blank" className='group-hover:scale-105 hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
              Github Repo
            </a></div>
          </div>
          
          
        </div>  
      </div>
     ))}



    </motion.div>
  )
}

export default Work
