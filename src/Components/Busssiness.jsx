import React from 'react'
import { layout, styles } from '../util/style'
import Button from './Button'
import { futures } from '../util/const'
import FutureCard from './FutureCard'

const Busssiness = () => {
  return (
    <section id='futures' className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Bussiness rivojlantiring <br  className='sm:block hidden'/>  pulni hal qilamiz 
            </h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi, blanditiis ipsum consectetur asperiores sed quod sint ea! Quo, vitae.
            </p>
            <Button styles={'mt-10'} />
        </div>
    
        <div className={`${layout.sectionImage} flex-col`}>
            {
                futures.map((feature, idx) =>(
                <FutureCard  key={fe?.id} {...feature} idx={idx}/>
                ))
            }
        </div>
    </section>
  )
}

export default Busssiness