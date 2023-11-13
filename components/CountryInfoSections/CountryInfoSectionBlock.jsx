import { Link } from 'expo-router';
import React, { useState } from 'react'
import { Text } from 'react-native';
import { View } from 'react-native';
import InfoBlckSVG from '../../assets/images/ico/info_cat/InfoBlckSVG'

const CountryInfoSectionBlock = ({item, sectionBlocksLenght, setChosenInfo}) => {

    const [pressed, setPressed] = useState(false)

  return (
    <Link
        onPress={()=>{console.log(item.id);setChosenInfo(item.id)}}
        onPressIn={()=>{setPressed(true)}}
        onPressOut={()=>{setPressed(false)}}
        style={{marginLeft: 16, marginRight: sectionBlocksLenght===item.id?16:0, marginTop: 8, display:'flex'}}
        href={{ pathname: "info/infoBlock" }}>
          <View style={{
            shadowColor: "#060533",
            shadowOffset: {
              width: 1,
              height: 6,
            },
            shadowOpacity: 0.01,
            shadowRadius: 3.84,
            elevation: 6,
            paddingTop: 8, paddingLeft: 8,
            backgroundColor: pressed?'#E8EBF9':'#fff',
            borderRadius: 20, width: 128, height: 90}}>
              <InfoBlckSVG sbkey={item.sbkey}/>
              <Text style={{fontSize:13, fontFamily:'Manrope-Regular', marginTop: 10}}>{item.name}</Text>
          </View>
    </Link>
  )
}

  
export default CountryInfoSectionBlock