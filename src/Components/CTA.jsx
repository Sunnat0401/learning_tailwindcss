import { styles } from "../util/style"
import Button from "./Button"

const CTA = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row fex-col  rounded-[20px] box-shadow bg-dark-gradient`} >
        <div className="flex-1 flex flex-col ">
            <h2 className={styles.heading2} >Xizmatlarni sinab ko'rish</h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5 `}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.  repellat sunt adipisci blanditiis voluptates.
            </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
            <Button/>
        </div>
    </div>
  )
}

export default CTA