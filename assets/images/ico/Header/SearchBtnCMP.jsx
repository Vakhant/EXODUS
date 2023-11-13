import React, { useState } from 'react'
import { View, Pressable } from 'react-native'
import EscSVG from './escSVG';
import SearchSVG from './searchSVG';

const SearchBtnCMP = ({clearStash=()=>{}, toggleSearch=()=>{}, searchIsActive=false, pageName=''}) => {

  const [pressed, setPressed] = useState(false)

  return (
    <Pressable onPress={()=>{toggleSearch();clearStash()}} onPressIn={()=>{setPressed(true)}} onPressOut={()=>{setPressed(false)}}>
      <View style={{
        marginRight: 8, width: 48, height: 48, borderRadius: 20, backgroundColor: pageName!=="Info"?pressed?'#E8EBF9':'#ffffff':''}}>
        {pageName==="choosCountries"?
        searchIsActive?<EscSVG/>:<SearchSVG/>
      :<></>}
      </View>
    </Pressable>
  )
}

export default SearchBtnCMP