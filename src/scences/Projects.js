import React from 'react'
import LineGradient from '../components/LineGradient'
import { motion } from "framer-motion"

import logo1 from "../assets/project-1.jpeg"
import logo2 from "../assets/project-2.jpeg"
import logo3 from "../assets/project-3.jpeg"
import logo4 from "../assets/project-4.jpeg"
import logo5 from "../assets/project-5.jpeg"
import logo6 from "../assets/project-6.jpeg"
import logo7 from "../assets/project-7.jpeg"

const container = {
    hidden: {

    },
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}


const projectVariant = {
    hidden: {
        opacity: 0, scale: 0.8,
    },
    visible: {
        opacity: 1, scale: 1
    }
}
const Project = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    console.log(title)
    //separed project title (Project 1 => project-1)
    const projectTitle = title.split(" ").join('-').toLowerCase();
    const logoNumber = logo1;
    return (<motion.div variants={projectVariant} className='relative'>
        <div className={overlayStyles}>
            <p className='text-2xl font-playfair'>{title}</p>
        </div>
        <p className='mt-7'>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
            porttitor accumsan tincidunt.
        </p>

        <img alt={`${projectTitle}`} src={window.location.origin + "./assets/project-1.jpeg"} />
    </motion.div>
    )
}
const Projects = () => {
    return (
        <section id='projects' className='pt-48 pb-48'>
            {/**/}
            <motion.div
                className='md:w-2/4 mx-auto text-center'
                initial='hidden'
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {
                        opacity: 0, y: -50,
                    },
                    visible: {
                        opacity: 1, y: 0
                    }
                }}
            >
                <div>
                    <p className='font-playfair font-semibold text-4xl mb-5'>
                        <span className='text-red'>PRO</span>JECTS
                    </p>
                    <div className='flex mx-auto justify-center'>
                        <LineGradient width='w-1/3' />
                    </div>
                </div>
                <p className='mt-10 mb-7'>
                    Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
                    viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
                </p>
            </motion.div>

            <div className='flex justify-center'>
                <motion.div
                    className='sm:grid sm:grid-cols-3'
                    initial='hidden'
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                        hidden: {
                            opacity: 0, y: -50,
                        },
                        visible: {
                            opacity: 1, y: 0
                        }
                    }}
                >
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Project 1" />
                    <Project title="Project 2" />

                    {/* ROW 2 */}
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />

                    {/* ROW 3 */}
                    <Project title="Project 6" />
                    <Project title="Project 7" />
                    <div className='flex justify-center text-center items-center p-10 bg-red 
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects