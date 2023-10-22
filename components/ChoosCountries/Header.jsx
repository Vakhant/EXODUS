import { StackActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import React from 'react'
import { Image, Pressable,  View } from 'react-native'

const Header = () => {

  const navigation = useNavigation()
  return (
    <View style={{marginTop: 50, flexDirection: 'row', alignItems: 'center', height: 50, backgroundColor: '#fff',}}>
          <Pressable onPress={()=>navigation.dispatch(StackActions.pop())}>
            <Image style={{width: 48, height: 48, borderRadius: 20, backgroundColor: '#fff'}} source={require("../../assets/images/ico/back_btn.png")} />
          </Pressable>
        {/* <Search/> */}
    </View>
  )
}

export default Header