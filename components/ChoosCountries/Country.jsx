import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

const Country = ({ico, link, name}) => {
    const [focused, setFocused] = useState(true)

    return (
            <Link style={{
                    width: '100%', 
                    paddingLeft: '20%', 
                    height: 48, 
                    marginBottom: 8, 
                    backgroundColor: focused?'rgba(0,0,0,0)':'#E8EBF9'
                }}
                href={{
                    pathname: "/info",
                    // /* 1. Navigate to the details route with query params */
                    params: {
                        link: link,
                        ico: ico,
                        name: name
                    },
                }} onPressIn={()=>setFocused(false)} onPressOut={()=>setFocused(true)}>
                
                <Text style={{fontSize: 18}}><Image style={{width: 32, height: 32, resizeMode: 'contain'}} source={ico} /> {name}</Text>
          </Link>
      )
}

export default Country