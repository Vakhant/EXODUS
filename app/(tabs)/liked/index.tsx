import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../../components/Header';

export default function TabLikedScreen() {
  return (
    <>
    <Stack.Screen options={{headerShown:true, title: 'Liked', header: ()=><Header/>}}/>

    <View style={styles.container}>
      <Text style={styles.title}>Tab Liked</Text>
      <View style={styles.separator} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
