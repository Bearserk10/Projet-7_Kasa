import BannerImg from "../../assets/Banner-about.png"
import styles from "./BannerAbout.module.css"

export default function banner() {
  return (
    <div className= { styles.banner }>
      <img  className= { styles.bannerImg } src={ BannerImg } alt="Images Bannière pages A propos" />
    </div>
  )
}