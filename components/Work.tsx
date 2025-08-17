import { workDataWeb } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

interface WorkProps {
  isDarkMode: boolean;
}

const Work: React.FC<WorkProps> = ({isDarkMode}) => {
  // let [works, setWorks] =  useState(assets.works)

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
    transition={{ delay: 1, duration: 1 }}
    id='work' className='w-full px-[12%] py-12 scroll-mt-20'>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo mb-16'>
          My Works
      </motion.h2>

      {/* Web Projects */}
        {workDataWeb.map((data, index)=>(
          <div key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='grid grid-cols my-5  grid-cols-3 gap-4 dark:text-black'>
                { data.images.map((image, imgIndex) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className='flex item-center'
                    key={imgIndex}
                    > 
                    <div className='w-auto mx-auto '> 
                      <a target="_blank"  href={data.liveLink.length ? data.liveLink : data.githubLink} rel="noopener noreferrer">
                        <Image src={image} alt='send icon' className='object-cover rounded-xl shadow-lg' width={300} height={300}/>
                      </a>
                    </div>
                  </motion.div>
                  
                ) )}
            </motion.div>
            <div className='w-full flex flex-col items-center mb-24 dark:text-white' >
              <h2 className='font-semibold text-center'>{data.title}</h2>
              {/* <p className='text-gray-700 text-center dark:text-white/80'>{data.description}</p> */}
              <ul className='w-4/5 grid grid-cols-2 list-disc text-gray-700 dark:text-white/80 mt-4'>
                {data.features.map((feature, featureIndex) => (
                  <li className='w-96' key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-center  mt-4">
                { data.liveLink.length > 0 && (
                  <div className='group'><a href={data.liveLink} target="_blank" rel="noopener noreferrer" className='group-hover:scale-105 lg:flex items-center gap-1 px-5 py-1 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                  Live
                </a></div> )}

                <div className='group'><a href={data.githubLink} target="_blank" rel="noopener noreferrer" className='group-hover:scale-105 lg:flex items-center gap-1 px-5 py-1 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                  Github
                </a></div>

                {data?.githubLink2 && (
                  <div className='group'><a href={data.githubLink2} target="_blank" rel="noopener noreferrer" className='group-hover:scale-105 lg:flex items-center gap-1 px-5 py-1 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                  Github backend
                </a></div>)}
              </div>
            </div>  
          </div>
        ))}
    </motion.div>

    
  )
}

export default Work
