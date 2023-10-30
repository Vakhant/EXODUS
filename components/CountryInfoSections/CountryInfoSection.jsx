import React from 'react'
import { FlatList, Text, View } from 'react-native'
import InfoBlckSVG from '../../assets/images/ico/info_cat/InfoBlckSVG'
import { useLocalSearchParams } from 'expo-router';
import { Link } from 'expo-router';

const CountryInfoSection = ({countries, sectionName='Название раздела'}) => {
  
  return (
    <View style={{height: 132, marginTop: 40, width: '100%'}}>
        <Text style={{marginLeft: 16, marginBottom: 8}}>{sectionName}</Text>
        <FlatList
            data={countries}
            renderItem={({item})=>
              <Link style={{marginLeft: 16, marginTop: 8, display:'flex'}} href={{ pathname: "/info", params: { name: 'kek' }}}>
                  <View style={{
                    shadowColor: "#060533",
                    shadowOffset: {
                      width: 1,
                      height: 6,
                    },
                    shadowOpacity: 0.01,
                    shadowRadius: 3.84,
                    elevation: 6,
                    paddingTop: 8, paddingLeft: 8, backgroundColor: '#fff', borderRadius: 20, boxShadow: '5px 5px 5px #000000', width: 128, height: 90}}>
                      <InfoBlckSVG sbkey={item.sbkey}/>
                      <Text style={{marginTop: 10}}>{item.name}</Text>
                  </View>
              </Link>
            }
            keyExtractor={item=>item.sbkey}
            horizontal
        />
    </View>
  )
}

export default CountryInfoSection