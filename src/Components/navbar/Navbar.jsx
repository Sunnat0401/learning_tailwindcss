import { useState } from 'react'
import { close, logo, menu } from '../../assets'
import { navigationLinks } from '../../util/const'
import { styles } from '../../util/style'
import './Navbar.css'
const Navbar = () => {
    const [toggleNav , settoggleNav] = useState(true)

  return (
    <div className={`w-full py-6  navbar ${styles.flexBetween} `}>
        {/* Logo  */}
        <img src={logo} alt="logo" className='w-[130px] h-[35px]  cursor-pointer ' />
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
{
    navigationLinks.map((item, idx) =>(
        <li key={item?.Id} className={`font-montserrat font-normal cursor-pointer text-[16px] text-white ${idx == navigationLinks.length - 1 ? "mr-0" : "mr-10"} hover:text-lightWhite transition-all duration-500`}>{item?.title}</li>
    ))
}
        </ul>
        {/* Navigation btn */}
        <div className={`sm:hidden flex flex-1 justify-end items-center `}>
            <img src={toggleNav ? close : menu } alt="menu" />
        </div>
    </div>
  )
}

export default Navbar