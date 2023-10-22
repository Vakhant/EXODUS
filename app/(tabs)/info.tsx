import { StyleSheet, Text, View } from 'react-native';
import CountryInfoSections from '../../screens/CountryInfoSections';


export default function TabInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Info</Text>
      <CountryInfoSections/>
      <View style={styles.separator} />
    </View>
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
