import React from 'react'
import { useState } from 'react'
import { Pressable, View, Image } from 'react-native';
import BackSVG from './../../assets/images/ico/Header/backSVG';
import { useNavigation } from 'expo-router';
import { StackActions } from '@react-navigation/native';

const BackBtn = ({countrieUrl='', page='', clearStash=()=>{}}) => {

    const [btnPressed, setBtnPressed] = useState(false)
    const navigation = useNavigation()


  console.log(countrieUrl);
  return (
  <Pressable onPress={()=>{clearStash();navigation.dispatch(StackActions.pop());}}
    onPressIn={()=>setBtnPressed(true)}
    onPressOut={()=>setBtnPressed(false)}
  >
    {page==="Info"&&countrieUrl?
      <Image style={{ width: 48, height: 48, marginLeft: 16, marginRight: 8}} source={countrieUrl} />:
        <View style={{
        marginLeft: 8, marginRight: 8,
        width: 48, height: 48, borderRadius: 20, backgroundColor: btnPressed?'#E8EBF9':'#ffffff'}}><BackSVG/></View>
    }
  </Pressable>
  )
}

export default BackBtn