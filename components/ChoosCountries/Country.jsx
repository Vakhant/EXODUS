import React from 'react'
import { Image, Text } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions as infoActions}  from '../../store/reducers/info-reducer'

const  Country = ({id, ico, name}) => {
    const [focused, setFocused] = useState(true)

    const dispatch = useDispatch()

    const setCounrie = (chosenCountrieId) => {
        console.log(chosenCountrieId);
      dispatch(infoActions.setChosenCountrieAC(chosenCountrieId))
    }
        
    return (
            <Link style={{
                    width: '90%',
                    paddingLeft: 52,
                    marginLeft: '5%',
                    height: 48, 
                    marginTop: 8, 
                    backgroundColor: focused?'rgba(0,0,0,0)':'#E8EBF9',
                    borderRadius: 20
                }}
                href={{
                    pathname: "/info",
                }} onPress={()=>{setCounrie(id);}} onPressIn={()=>{setFocused(false)}} onPressOut={()=>setFocused(true)}>
                
                <Text style={{fontSize: 16, fontFamily:'Manrope-Regular'}}><Image style={{width: 32, height: 32, resizeMode: 'contain'}} source={ico} />    {name}</Text>
          </Link>
      )
}

export default Country