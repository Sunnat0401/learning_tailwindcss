import React from 'react'
import { styles } from '../util/style'

const FutureCard = ({icon, title, content, idx}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] `}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-light `  }>
            <img src={icon} alt={title} className='w-[50%] h-[50%] object-contain' />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4></h4>
            <p></p>
        </div>
    </div>
  )
}

export default FutureCard