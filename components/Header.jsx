import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getSearchText } from './../store/reducers/test-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/reducers/test-reduucer'
import SearchBtnCMP from '../assets/images/ico/Header/SearchBtnCMP'
import BackBtn from './Header/BackBtn';
import { getChosenCountrie } from '../store/reducers/info-selectors';

const Header = ({ pageName='' }) => {
  
  const searchText = useSelector(getSearchText)
  const countrie = useSelector(getChosenCountrie)

  const dispatch = useDispatch()

  const setSearchText = (userId) => {
    dispatch(actions.setSearchText(userId))
  }

  const [showInput, onShowInput] = React.useState(false);

  function onSearch (inputedText){
    setSearchText(inputedText)
  }

  useEffect(() => {
    onSearch('')
  }, [showInput])
  

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff', zIndex:100}}/>
      <View style={styles.headerWrap}>

        <BackBtn
          clearStash={()=>{onSearch('')}}
          countrieUrl={countrie.uri}
          page={pageName}
        />

          <View style={{width: Dimensions.get('window').width - 128}}>

            {pageName==="Info"&&countrie.uri?<Text style={{fontSize: 18, fontFamily:'Manrope-Regular'}}>{countrie.name}</Text>:""}
            {pageName==="choosCountries"?
              showInput?
                <TextInput onChangeText={(searchText)=>setSearchText(searchText)} 
                style={{ height: 40, width: '70%', fontSize: 18, borderBottomWidth:1, borderBottomColor: '#E8EBF9',
               width: 160, }} value={searchText} placeholder='Поиск' placeholderTextColor="#8B96A3" />

              :<Text style={{fontSize: 18, fontFamily:'Manrope-Regular'}}>Выберите страну</Text>
              :<></>
            }
            {pageName!=="Info"&&pageName!=="choosCountries"?<Text style={{fontSize: 18, fontFamily:'Manrope-Regular'}}>{pageName}</Text>:""}

          </View>

            <SearchBtnCMP
              clearStash={()=>{showInput?onSearch(''):null}}
              toggleSearch={()=>onShowInput(!showInput)}
              searchIsActive={showInput}
              pageName={pageName}
            />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  headerWrap: {
    justifyContent: 'space-between',
    width: '100%',
    shadowColor: "#060533",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 6, overflow:'visible',
    fontFamily: 'Manrope-Regular',
    flexDirection: 'row', alignItems: 'center', height: 80, backgroundColor: '#fff',}
});

export default Header