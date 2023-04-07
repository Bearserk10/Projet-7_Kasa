import { Link } from 'react-router-dom'
import styles from './Card.module.css'

export default function Card({HouseDetails}) {
  
  return (
    <div className={styles.cardLocation}>
      <Link to={ `/HouseDetails/${HouseDetails.id}` }>
        <img className={ styles.cardImg } src={ HouseDetails.cover } alt='images' />
        <div className= { styles.imgFilter }></div>
        <h2 className= { styles.cardTitle }>{ HouseDetails.title }</h2>
      </Link>
    </div>
  )
}
