import { apple, bill, google } from "../assets"
import { layout, styles } from "../util/style"

const Building = () => {
  return (
    <section id="product" className={layout.sectionReverse}> 
     <div className={layout.sectionImageReverse}  >
      <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]  " />
     </div>
     <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        hisob kitob va kaktoreal <br className="sm:block hidden " /> osongina boshqaring 
       </h2>
       <p p className={`${styles.paragraph} max-w-[550px] mt-5 `}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis qui ut, nisi aspernatur sequi esse provident corrupti deserunt laboriosam aperiam.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={google} alt="google" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={apple} alt="google" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer" />
        </div>
     </div>
    </section>
  )
}

export default Building