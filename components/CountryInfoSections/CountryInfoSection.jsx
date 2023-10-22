import React from 'react'
import { FlatList, Text, View } from 'react-native'

const CountryInfoSection = ({name='Название раздела', itemList=['test-indo-block1', 'test-indo-block2', 'test-indo-block3', 'test-indo-block4']}) => {
    
  return (
    <View style={{marginTop: 40, marginLeft: 10}}>
        <Text style={{marginBottom: 10}}>{name}</Text>
        <FlatList
            data={itemList}
            renderItem={({item})=>
                <View style={{backgroundColor: '#fff', borderRadius: 20, marginRight: 20, boxShadow: '5px 5px 5px #000000', width: 128, height: 90}}>
                    <Text>{item}</Text>
                </View>}
            keyExtractor={item=>item}
            horizontal
        />
    </View>
  )
}

export default CountryInfoSection