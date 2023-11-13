import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/info-reducer';
import CountryInfoSectionBlock from './CountryInfoSectionBlock';

const  CountryInfoSection = ({sectionId, sectionBlocks, sectionName='Название раздела'}) => {
  const [hightToggle, setHightToggle] = useState(true)
  
  const dispatch = useDispatch()

  const setChosenInfo = (sbId) => {
    dispatch(actions.setChosenInformationAC(sectionId, sbId))
  }

  return (
    <View style={{height: hightToggle?137:30, marginTop: 40, width: '100%'}}>
        <Text onPress={()=>{setHightToggle(!hightToggle)}} style={{fontSize:16, fontFamily:"Manrope-Regular", marginLeft: 16, marginBottom: 8}}>{sectionName}</Text>
        <FlatList
            data={sectionBlocks}
            renderItem={({item})=>
              <CountryInfoSectionBlock sectionBlocksLenght={sectionBlocks.length} item={item} setChosenInfo={setChosenInfo}/>
            }
            keyExtractor={item=>item.sbkey}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default CountryInfoSection