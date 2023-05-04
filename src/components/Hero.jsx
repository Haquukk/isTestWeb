import react, { useState } from 'react'
import { styles } from '../style'
import { CharactersCanvas, } from './canvas'


const Hero = () => {


  return (
    <section className='relative w-full mx-auto h-screen '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText}`}> the door always open <span className='text-[#314362]' > dd!.</span></h1>
          <p className={`${styles.heroSubText} text-white`}> Lorem ipsum telor, <br className='hidden sm:block' /> Latest website created by! </p>
          <div className='flex  items-center mt-5'>
            <div className='w-2 h-5 rounded-r-full bg-[#314362]' />
            <div className='w-[300px] sm:w-[400px] h-1 bg-gradient-to-r from-[#314362]' />
          </div>
        </div>
      </div >
      <CharactersCanvas />
      
    </section>
  )
}

export default Hero
