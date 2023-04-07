import Logo from "../../assets/footer_logo.svg"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className ={ styles.footerContainer }>
      <img className= { styles.logo } src={ Logo } alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
