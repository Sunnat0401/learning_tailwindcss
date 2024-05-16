import { card } from "../assets"
import { layout, styles } from "../util/style"
import Button from "./Button"

const Contract = () => {
  return (
    <section className={layout.section} >
        <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>
                Bir necha son qadamda <br  className="sm:block hidden"/> yaxshiroq karta bitimini toping 
              </h2>
              <p className={`${styles.paragraph} max-w-[530px] mt-5 `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quos explicabo architecto suscipit vitae sapiente nisi, iusto eum eligendi libero. </p>
              <Button styles={'mt-10'}/>
        </div> 
        <div className={layout.sectionImage}>
          <img src={card} alt="card" className="w-[100% ] h-[100%] " />
        </div>
    </section>
  )
}

export default Contract