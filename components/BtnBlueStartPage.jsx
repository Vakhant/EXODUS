import { Link, router } from 'expo-router';
import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native';

const BtnBlueStartPage = ({link='/two', text='Выберите страну'}) => {
    const [focused, setFocused] = useState(true)

  return (
        <Link style={styles.btnBlue} href={link} onPressIn={()=>setFocused(false)} onPressOut={()=>setFocused(true)} asChild>
            <Pressable>
                <View style={
        {width: '100%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: focused?'#5379F6':'#E8EBF9',
        justifyContent: 'center',
        alignItems: 'center'}}>
                    <Text style={{color: focused?'#ffffff':'#1374F3', fontFamily: 'Manrope-Medium', fontSize: 18}}>{text}</Text>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    btnBlue: {
        width: '91.1%',
        backgroundColor: '#5379F6',
        borderRadius: 20,
        marginTop: 'auto',
        marginBottom: 32,
        height: 48,
    },
    btnBgWhite: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E8EBF9',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '.3s',
        opacity: 1,
    },
    btnBlueText: {
        fontSize: 18,
    }
  });
  

export default BtnBlueStartPage