import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

const Country = ({ico, link, name}) => {
    const [focused, setFocused] = useState(true)

    return (
          <Link style={
            {width: '100%', paddingLeft: '20%', height: 48, marginBottom: 8, backgroundColor: focused?'rgba(0,0,0,0)':'#E8EBF9'}} href={link} onPressIn={()=>setFocused(false)} onPressOut={()=>setFocused(true)}>
              <Pressable >
                  <View >
                      <Text style={{fontSize: 18}}><Image source={ico} /> {name}</Text>
                  </View>
              </Pressable>
          </Link>
      )
}

export default Country