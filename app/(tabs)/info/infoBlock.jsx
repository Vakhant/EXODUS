import { Stack } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../../components/Header';
import { Link } from 'expo-router';
import { useSelector } from 'react-redux';
import { getChosenInformation, getInformationBlock } from '../../../store/reducers/info-selectors';
import Markdown, { getUniqueID } from 'react-native-markdown-display';

const renderers = {
  //This custom renderer changes how images are rendered
  //we use it to constrain the max width of an image to its container
  image: ({ ...el }) => {
    return(
      <Image resizeMode='cover' key={getUniqueID()} source={{uri: el.attributes.src}} style={{ width: "100%", height: 200, borderRadius:20 }}  />
  )},
};

export default function InfoBlock() {

  const infoSectionBlock = useSelector(getChosenInformation)
  const informationBlock = useSelector(getInformationBlock)
  console.log(infoSectionBlock);

  return (
    <>
    <Stack.Screen options={{headerShown:true, title: 'InfoBlock', header: ()=><Header pageName={infoSectionBlock.name} />}}/>

    <ScrollView>
    <View style={styles.container}>
          <Markdown rules={renderers} style={markdownStyles}>{informationBlock.text}</Markdown>
    </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: '#FBFCFF'
  },
  markdown: {
    width: '100%',
  },
});
const markdownStyles = StyleSheet.create({
  heading: {
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  paragraph: {
    fontSize: 16,
    fontFamily:'Manrope-Regular'
  },
  heading1: {
    fontSize: 18,
    fontFamily:'Manrope-Medium'
  },
  heading2: {
    fontSize: 16,
    fontFamily:'Manrope-Medium'
  },
});