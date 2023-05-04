import react,{useRef} from 'react'
import { styles } from '../style'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full rounded-[20px] green-pink-gradient p-[1px] shadow-card '>
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-primary rounded-[20px] py-5 px-12 xs:min-h-[280px] min-h-[150px] flex flex-col items-center justify-evenly '>
          <img src={icon} alt={title}  className='w-16 h-16 object-contain '/>
          <h3 className='text-center font-bold text-secondary'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  return (
    <>
      <motion.div 
      variants={textVariant()}
      >
        <p  className={styles.sectionSubText}>introduction</p>
        <h2  className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn("","", 0.1, 1)}
      className='max-w-3xl text-lg leading-[30px] '>
        I'm a person who always learning about art and all about masterpiece in progam and i'm absolutely interested something called 3d creation.
        I'm going to improve my skills now, may could say like software developer with experience in javascript, and expertise in frameworks like react, Node.js, and Three.js.
        Lets works together to bring ideas each other!
      </motion.p>
      <a className={styles.sectionSubText}>ongoing:</a>
      <div 
      className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index} {...service}
          />
        ))}
      </div>

    </>
  )
}


export default SectionWrapper (About, 'about')
