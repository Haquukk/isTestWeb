import react, { useState } from 'react'
import { SectionWrapper } from '../hoc'
import { StuffCanvas } from './canvas'
import { styles } from '../style'

const Work = () => {
    return (
        <section className=' relative w-full  xs:h-[50vh] h-[25vh] mx-auto'>
                <div className='center-div z-10 text-3d text-shadow-up '>
                    <h1 className={`${styles.sectionHeadText}`}>Work</h1>
                </div>
                <p className={`${styles.sectionSubText} absolute top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-shadow-up`}>there isn't any yet!</p>
                <StuffCanvas />
        </section>
    )
}

export default SectionWrapper(Work, 'work')
