import React from 'react'
import CountryInfoSection from '../components/CountryInfoSections/CountryInfoSection'
import { View } from 'react-native'


const CountryInfoSections = ({information}) => {
  return (
    <View>
      {information.map(i=><CountryInfoSection id={i.id} sectionId={i.id} key={i.skey} sectionName={i.name} sectionBlocks={i.li}/>)}
    </View>
  )
}

export default CountryInfoSections