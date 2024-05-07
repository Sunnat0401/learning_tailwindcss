import { styles } from "./util/style"
const App = () => {
  return (
   <div className="bg-primary p-10 w-full overflow-hidden" > 
   <div className={`${styles.paddingX} ${styles.paddingY} ${styles.marginY}`}>
    <p className="text-white">Navbar</p>
    </div>
      <div className={`bg-slate-500 ${styles.padding} `}></div>
    </div>
  )
}

export default App