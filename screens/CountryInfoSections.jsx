import React from 'react'
import CountryInfoSection from '../components/CountryInfoSections/CountryInfoSection'
import { View } from 'react-native'


const CountryInfoSections = ({countries}) => {
  return (
    <View>
      {countries.map(c=><CountryInfoSection id={c.id} key={c.skey} sectionName={c.name} countries={c.li}/>)}
    </View>
  )
}

export default CountryInfoSections