import { StackActions, useNavigationState } from '@react-navigation/native'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = ({}) => {
  const [text, onChangeText] = React.useState('');

  const navigation = useNavigation()


  function onSearch (kek){
    onChangeText(kek)
    navigation.navigate(
      'choosCountries', {
      searchedCountries: text
    })
  }

  const screenName = useNavigationState((state) => state.routes[state.index].name)
  
  const params = useLocalSearchParams();
  const { link = '', ico = '', name = '' } = params;

  return (
    <>
    <SafeAreaView style={{backgroundColor: '#fff'}}/>
    <View style={{ flexDirection: 'row', alignItems: 'center', height: 80, backgroundColor: '#fff',}}>
          <Pressable onPress={()=>navigation.dispatch(StackActions.pop())}>
          {params.ico?<Image style={{marginLeft: 16, marginRight: 8}} source={params.ico} />:<Image style={{width: 48, height: 48, borderRadius: 20, backgroundColor: '#fff'}} source={require("../../assets/images/ico/back_btn.png")} />}
          </Pressable>
          <Text style={{fontSize: 18}}>{params.name}</Text>
          {screenName==="choosCountries"?
              <TextInput onChangeText={(text)=>onSearch(text)} style={{ height: 40, width: '70%', backgroundColor: '#999'}} value={text}/>
            :<></>}
        {/* <Search/> */}
    </View>
    </>
  )
}

export default Header