import { feedbacks } from "../util/const"
import { styles } from "../util/style"
import FeedBackCard from "./FeedBackCard"

const Testimonials = () => {
  return (
    <div className={`${styles.paddingY}  ${styles.flexCenter} flex-col relative `}>
        <div className="absolute z-0 w-[60%] h-[60%] right-[50%] rounded-full bottom-40"></div>
        <div className="w-full  flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>
                Odamlar Biz haqimizda qanday fikrda 
            </h2>
          <div className="w-full md:mt-0 mt-6 ">
            <p className={`${styles.paragraph} text-left max-w-[550px] `}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis asperiores, ad obcaecati quia debitis quibusdam excepturi!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] ">
            {feedbacks.map((feedback , idx) =>(
                 <FeedBackCard key={feedback?.id} {...feedback}/>
            ))}
        </div>
    </div>
  )
}

export default Testimonials