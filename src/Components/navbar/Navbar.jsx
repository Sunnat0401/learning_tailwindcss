import { navigationLinks } from '../../util/const'
import { styles } from '../../util/style'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className={`w-full py-6  navbar ${styles.flexBetween} `}>
        {/* Logo  */}
        <div className={`${styles.heading}`}>Logo</div>
        <ul>
{
    navigationLinks.map((item, idx) =>(
        <li>{item?.title}</li>
    ))
}
        </ul>
    </div>
  )
}

export default Navbar