import Banner from '../../components/Banner-house/BannerHouse'
import Card from '../../components/Card/Card'
import HouseDetailsData from "../../data/HouseData.json";
import styles from './House.module.css'


export default function House() {
  return (
    <div className= { styles.mainContainer }>
      <Banner/>
      <div className= { styles.cardGrid }>
        {HouseDetailsData.map(HouseDetails =>(
          <Card key={ HouseDetails.id } HouseDetails={ HouseDetails }/>
        ))}
      </div>
    </div>
  )
}
