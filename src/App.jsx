import { Building, Contract, CTA, Home, Navbar, Statistics } from "./Components"
import Busssiness from "./Components/Busssiness"
import FutureCard from "./Components/FutureCard"
import Testimonials from "./Components/Testimonials"
import { styles } from "./util/style"
const App = () => {
  return (
   <div className="bg-primary p-10 w-full overflow-hidden" > 
   {/* navbar */}
   <div className={`${styles.paddingX}${styles.flexCenter} `}>
    <div className={`${styles.container} `}>
     <Navbar/>
    </div>
    </div>
    {/* home */}
    <div className={`bg-primary  ${styles.flexStart}`}>
      <div className={`${styles.container}`}>
     <Home/>
      </div>
    </div>
    {/*  */}
    <div className={` bg-primary ${styles.paddingX}${styles.flexCenter} `}>
    <div className={`${styles.container} `}>
     <Statistics/>
     <Contract/>
     <Building/>
     {/* Bussiness  */}
     <Busssiness/>
     <Testimonials/>
     {/* CTA */}
     <CTA/>
     {/* FOOTER  */}
    </div>
    </div>
    </div>
  )
}

export default App