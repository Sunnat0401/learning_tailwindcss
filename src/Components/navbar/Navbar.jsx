import { useState } from 'react'
import { close, logo, menu } from '../../assets'
import { navigationLinks } from '../../util/const'
import { styles } from '../../util/style'
import './Navbar.css'
const Navbar = () => {
    const [toggleNav , setToggleNav] = useState(false)
    const [active, setActive] = useState('home')
    const toggleHander= () => setToggleNav(prev =>!prev)
     const activeHandler =(id) => setActive(id)
  return (
    <div className={`w-full py-6  navbar ${styles.flexBetween} `}>
        {/* Logo  */}
        <img src={logo} alt="logo" className='w-[130px] h-[35px]  cursor-pointer ' />
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
{
    navigationLinks.map((nav, idx) =>(
        <li key={nav.id} onClick={() =>activeHandler(nav.id)} className={`   font-montserrat font-normal cursor-pointer text-[16px]
         ${idx == navigationLinks.length - 1 ? "mr-0" : "mr-10"} 
         ${active === nav.id ? "text-white" : "text-lightWhite"}
         hover:text-white transition-all duration-500`}>
            {nav?.title}
            </li>
    ))
}
        </ul>
        {/* Navigation btn */}
        <div className={`sm:hidden flex flex-1 justify-end items-center `}>
            <img src={toggleNav ? close : menu } alt="menu" className=' w-[30px] h-[30px] object-contain' onClick={toggleHander}/>
            <div className={`${!toggleNav ? "hidden" : "flex"} p-6 absolute top-40  right-0 left-0  w-full sidebar  bg-black-gradient`}>
            <ul className='list-none flex  justify-center items-center flex-1 ' >
{
    navigationLinks.map((nav, idx) =>(
        <li key={nav?.id} className={`font-montserrat font-normal cursor-pointer text-[16px] 
         ${idx == navigationLinks.length - 1 ? "mr-0" : "mr-10"}
         ${active === nav.id ? "text-white" : "text-lightWhite"}
         hover:text-white transition-all duration-500`}
          onClick={()=>activeHandler(nav?.id)}
         >{nav?.title}</li>
    ))
}
        </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar