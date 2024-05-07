import { Navbar } from "./Components"
import { styles } from "./util/style"
const App = () => {
  return (
   <div className="bg-primary p-10 w-full overflow-hidden" > 
   {/* <div className={`${styles.paddingX} `}>
    <div className={`${styles.container} ${styles.flexCenter}`}>
      <div className={`${styles.heading}`}>
       
      </div>
    </div>
    </div> */}
     <Navbar/>
    </div>
  )
}

export default App