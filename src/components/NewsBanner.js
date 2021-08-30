import React from 'react';
import { ScrollView,Image} from "react-native"
import newsBannerData from '../news_banner_data.json'
import styles from './NewsBanner.style'
const NewsBanner=()=>
{
    return(
        <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
        {
          newsBannerData.map(x=> (
          <Image 
          style={styles.banner_image} 
          source={{ uri: x.imageUrl}}
           />
          ))}
     
      </ScrollView>
    )
}
export default NewsBanner;