import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import CountryInfoSections from '../../../screens/CountryInfoSections';
import { Stack } from 'expo-router';
import Header from '../../../components/Header';
import { useSelector } from 'react-redux';
import { getInformation } from '../../../store/reducers/info-selectors';

export default function TabInfoScreen() {

  const information = useSelector(getInformation)
  return (
    <>
    <Stack.Screen options={{headerShown:true, headerShadowVisible:true, title: 'Info', header: ()=><Header pageName='Info'/>}}/>

    <View style={styles.container}>
      <ScrollView>
        <CountryInfoSections information={information}/>
        <View style={styles.separator} />
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFCFF'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
