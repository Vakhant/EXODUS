import React from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import Country from '../components/ChoosCountries/Country'
import { useLocalSearchParams } from 'expo-router'

let countries = [
  {"id":1, "uri": require("../assets/images/ico/countries_flags/Albania.png"), "name":"Албания", "link": "albania"},
  {"id":2, "uri": require("../assets/images/ico/countries_flags/Bulgaria.png"), "name":"Болгария", "link": "bolgria"},
  {"id":3, "uri": require("../assets/images/ico/countries_flags/Bosnia.png"), "name":"Босния", "link": "bosnia"},
  {"id":4, "uri": require("../assets/images/ico/countries_flags/Hungary.png"), "name":"Венгрия", "link": "vengria"},
  {"id":5, "uri": require("../assets/images/ico/countries_flags/Germany.png"), "name":"Германия", "link": "germania"},
  {"id":6, "uri": require("../assets/images/ico/countries_flags/Greece.png"), "name":"Греция", "link": "grecia"},
  {"id":7, "uri": require("../assets/images/ico/countries_flags/Spain.png"), "name":"Испания", "link": "ispania"},
  {"id":8, "uri": require("../assets/images/ico/countries_flags/Italy.png"), "name":"Италия", "link": "italia"},
  {"id":9, "uri": require("../assets/images/ico/countries_flags/Latvia.png"), "name":"Латвия", "link": "latvia"},
  {"id":10, "uri": require("../assets/images/ico/countries_flags/Lithuania.png"), "name":"Литва", "link": "litva"},
  {"id":11, "uri": require("../assets/images/ico/countries_flags/Poland.png"), "name":"Польша", "link": "polsha"},
  {"id":12, "uri": require("../assets/images/ico/countries_flags/Portugal.png"), "name":"Португалия", "link": "portuglia"},
  {"id":13, "uri": require("../assets/images/ico/countries_flags/Serbia.png"), "name":"Сербия", "link": "serbia"},
  {"id":14, "uri": require("../assets/images/ico/countries_flags/Slovakia.png"), "name":"Словакия", "link": "slvk"},
  {"id":15, "uri": require("../assets/images/ico/countries_flags/Finland.png"), "name":"Финляндия", "link": "fnld"},
  {"id":16, "uri": require("../assets/images/ico/countries_flags/France.png"), "name":"Франция", "link": "frnc"},
  {"id":17, "uri": require("../assets/images/ico/countries_flags/Croatia.png"), "name":"Хорватия", "link": "hrvt"},
  {"id":18, "uri": require("../assets/images/ico/countries_flags/Montenegro.png"), "name":"Черногория", "link": "chrngr"},
  {"id":19, "uri": require("../assets/images/ico/countries_flags/Switzerland.png"), "name":"Швейцария", "link": "shvcr"}
]

const ChoosCountries = () => {


  return (
    <View style={{paddingTop: 20, height: '100%', width: '100%'}}>
      {/* <Header/> */}
      <View style={{height: '100%', width: '100%'}}>
        <ScrollView>
            
            {/* <StatusBar style="auto" /> */}
            
            {countries.map(cb => <Country
              id={cb.id}
              key={cb.id}
              ico={cb.uri}
              name={cb.name}
              link={cb.link}
            />)}
        <StatusBar theme="auto"/>
        </ScrollView>
      </View>
    </View>
  )
}

export default ChoosCountries