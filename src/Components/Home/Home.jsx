import { discount, robot } from '../../assets'
import { styles } from '../../util/style'
import Button from '../Button'
import './Home.css'
const Home = () => {
  return (
    <section id='home' className={`flex md:flex-row  flex-col ${styles.paddingY}`}>
         {/* Animation images */}
         <div className={`flex-1 ${styles.flexStart} md:my-0 my-10 `}>
    <img src={robot} alt="robot" className='w-[100%] h-[100%] relative z-10 rounded-lg'    />
        </div>
        {/* Information */}
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
            {/* Discount information */}
            <div className=' flex flex-row items-center py-[6px] px-4 rounded-[10px]  mb-2 bg-slate-500 bg-discount-gradient'>
                <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
                <p className={`${styles.paragraph} ml-2`}>
                    <span className='text-white'>20%</span> chegirma   <spa  n className='text-white'>1 oylik </spa> xisob uchun 
                </p>
            </div>
            {/* Title */}
            <div className='w-full'>
                <h1 className={` ${styles.heading1}`}>
                    Yangi avlod <br />
                    <span className='text-gradient'>To'lov usuli</span>
                </h1>
            </div>
            {/* Animation image */}
            <p className={`${styles.paragraph} mt-5 max-w-[550px] `}> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui rerum excepturi eligendi odit? Architecto nihil inventore error ipsam voluptatum?</p>
            {/* Getting started */}
            <Button styles={'mt-2'}/>
                 <div className= 'pink__gradient  absolute z-[0] w-[40%] h-{35%] top-0 '/>
                 <div  className='white__gradient  absolute z-[1] w-[80%] h-{80%] rounded-full bottom-40 '/>
                 <div  className='blue__gradient   absolute z-[0] w-[50%] h-{55%] right-20 bottom-20 '  />
        </div>
       
    </section>
  )
}

export default Home