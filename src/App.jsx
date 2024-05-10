import { Home, Navbar } from "./Components"
import { styles } from "./util/style"
const App = () => {
  return (
   <div className="bg-primary p-10 w-full overflow-hidden" > 
   <div className={`${styles.paddingX}${styles.flexCenter} `}>
    <div className={`${styles.container} `}>
     <Navbar/>
    </div>
    </div>
    <div className={`bg-primary  ${styles.flexStart}`}>
      <div className={`${styles.container}`}>
     <Home/>
      </div>
    </div>
    </div>
  )
}

export default App