import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export default function TabRecsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Recs Screen</Text>
      <View style={styles.separator}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
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
