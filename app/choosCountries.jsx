import React from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import Country from '../components/ChoosCountries/Country'
import { useSelector } from 'react-redux';
import { getSearchText } from '../store/reducers/test-selectors';
import { getCountriesList } from '../store/reducers/info-selectors';

const ChoosCountries = () => {

  let countries = useSelector(getCountriesList)
  const searchText = useSelector(getSearchText)
  let filtredCountriesList = countries.filter(c=>c.name.includes(searchText))

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#FBFCFF'}}>
        <ScrollView>
                  <View style={{paddingTop: 20, paddingBottom: 20, height: '100%', width: '100%'}}>
            {/* <StatusBar style="auto" /> */}
            
            {filtredCountriesList.map(cb => <Country
              id={cb.id}
              key={cb.id}
              ico={cb.uri}
              name={cb.name}
            />)}
            </View>
        <StatusBar theme="auto"/>      
        </ScrollView>
    </View>
  )
}

export default ChoosCountries