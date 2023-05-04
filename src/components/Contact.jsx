import react, { useState } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { CharactersEndCanvas } from './canvas'


const Contact = () => {

  const [load, setLoad] = useState(false)

  return (
    <div className=' relative w-full h-auto mt-[-100px] xl:mt-[0] flex xl:flex-row flex-col-reverse gap-10 '>
      <motion.div
        variants={slideIn('left', 'tween', 0.1, 1)}
        className='bg-[#7db1da] p-5 rounded-2xl w-full'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h1 className={`${styles.sectionHeadText}`}>Contact.</h1>

        <from className=''>
          <label className='flex flex-col mt-5'>
            <span className='font-medium mb-2'>Your Name.</span>
            <input
              type='text'
              name='name'
              // value={form.name}
              placeholder="what's your name?"
              className='py-2 px-4 text-sm rounded bg-secondary placeholder:text-primary'
            />
          </label>
          <label className='flex flex-col mt-5'>
            <span className='font-medium mb-2'>Your Email.</span>
            <input
              type='text'
              name='email'
              // value={form.name}
              placeholder="put your Email"
              className='py-2 px-4 text-sm rounded bg-secondary placeholder:text-primary'
            />
          </label>
          <label className='flex flex-col mt-5'>
            <span className='font-medium mb-2'>Your Massage.</span>
            <textarea
              type='text'
              rows={7}
              // value={form.name}
              placeholder="type here!"
              className='py-2 px-4 text-sm rounded bg-secondary placeholder:text-primary'
            />
          </label>
          <button
            type='submit'
            className='border-2 rounded border-primary text-primary font-medium px-4 mt-8 hover:blur-[1px] hover:bg-secondary '
          >
            {load ? 'Sending...' : 'Send'}
          </button>
        </from>
      </motion.div>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className=' xl:w-[550px] lg:h-[80vh] h-[60vh]'
      >
        <span className='absolute top-20 text-center text-xl'>Website ini masih dalam tahap beta, enjoy dan kasih masukan apapun😊😎 </span>
          <CharactersEndCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
