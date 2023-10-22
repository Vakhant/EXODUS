import { Image, StyleSheet, Animated, Dimensions, Easing } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useEffect, useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import BtnBlueStartPage from '../components/BtnBlueStartPage';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
            'Gilroy': require('../assets/fonts/Gilroy-Medium.ttf')
        })
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  
  const spinValue = new Animated.Value(0)
        
  const spin = () => {
      spinValue.setValue(0)
      Animated.timing(spinValue,{
      toValue: 1,
      duration: 6000,
      easing: Easing.linear,
      useNativeDriver: true
      }).start(()=>{spin()})
  }
  
  useEffect(()=>{
      spin()
  },[])
  
  const rotate = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '358deg']
  })

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if(!appIsReady){
    return (
      
      <View style={{
          position: "absolute", left: 0, top: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          backgroundColor: 'rgba(255,255,255,1)',
          opacity: 1
        }}>
        <Animated.View style={{transform:[{rotate}]}}>
            <Image style={{
              width: 34,
              height: 32,
              transform: [{rotate: '-90deg'},]
            }}
         source={require('../assets/images/mdi_airplane.png')} />
          </Animated.View>
      </View>
    );
  } else {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onLayout={onLayoutRootView}>
      <Image style={{ marginTop: 65}} source={require('../assets/images/logo.png')} />
      <Image style={{maxWidth: '90%', width: '100%', marginTop: 35}} source={require('../assets/images/countriesChoosLogo.png')} />
      <Text style={styles.text}>Проверенная информация о странах и поиск качественных услуг за границей</Text>
      
      <BtnBlueStartPage link='/choosCountries' text='Выберите страну'/>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  text: {
      width: '86.6%',
      textAlign: 'center',
      fontFamily: 'Gilroy',
      fontSize: 18,
      color: '#5379F6'
  }
});
