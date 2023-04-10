import BannerImg from "../../assets/Banner-house.png"
import styles from "./BannerHouse.module.css"

export default function banner() {
  return (
    <div className= { styles.banner }>
      <img  className= { styles.banner__Img } src={ BannerImg } alt="Images de Bannière" />
      <div className= { styles.banner__Txt }>
        <p className= { styles.Txt } >Chez vous, partout et ailleurs</p>
      </div>
    </div>
  )
}
