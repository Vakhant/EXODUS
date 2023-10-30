import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import CountryInfoSections from '../../screens/CountryInfoSections';
import InfoBlockSVG from '../../assets/images/ico/info_cat/InfoBlckSVG';

let Countries = [
  {"id":1, "skey": "tu", "name": "Туризм", "li": [
    {"id":1,  "sbkey": "t-kd", "name":"Как добраться"},
    {"id":2,  "sbkey": "t-vr", "name":"Визовый режим"},
    {"id":3,  "sbkey": "t-g", "name":"Города"},
  ]},
  {"id":2, "skey": "l", "name": "Легализация", "li": [
    {"id":1,  "sbkey": "l-iv", "name":"Иммиграционные визы"},
    {"id":2,  "sbkey": "l-VNJ", "name":"ВНЖ"},
  ]},
  {"id":3, "skey": "f", "name": "Финансы", "li": [
    {"id":1,  "sbkey": "f-os", "name":"Открытие счета"},
    {"id":2,  "sbkey": "f-ov", "name":"Обмен валюты"},
    {"id":3,  "sbkey": "f-t", "name":"Трансферы"},
  ]},
  {"id":4, "skey": "n", "name": "Недвижимость", "li": [
    {"id":1,  "sbkey": "n-oi", "name":"Общая информация"},
  ]},
  {"id":5, "skey": "m", "name": "Медицина", "li": [
    {"id":1, "sbkey": "m-oi", "name":"Общая информация"},
    {"id":2, "sbkey": "m-ms", "name":"Медицинская страховка"},
  ]},
  {"id":6, "skey": "o", "name": "Образование", "li": [
    {"id":1, "sbkey": "o-d", "name":"Дошкольное"},
    {"id":2, "sbkey": "o-sh", "name":"Школьное"},
    {"id":3, "sbkey": "o-ku", "name":"Колледжи / Университеты"},
    {"id":4, "sbkey": "o-ks", "name":"Кружки / Секции"},
  ]},
  {"id":7, "skey": "si", "name": "Связь и интернет", "li": [
    {"id":1, "sbkey": "si-o", "name":"Операторы"},
    {"id":2, "sbkey": "si-p", "name":"Пакеты"},
  ]},
  {"id":8, "skey": "tr", "name": "Транспорт", "li": [
    {"id":1, "sbkey": "t-ot", "name":"Общественный транспорт"},
    {"id":2, "sbkey": "t-la", "name":"Личный автомобиль"},
  ]},
  {"id":9, "skey": "j", "name": "Животные", "li": [
    {"id":1, "sbkey": "j-pp", "name":"Правила перевозки"},
    {"id":2, "sbkey": "j-r", "name":"Регистрация"}
  ]},
]

export default function TabInfoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CountryInfoSections countries={Countries}/>
        <View style={styles.separator} />
      </ScrollView>
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
