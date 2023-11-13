let initialState = {
    chosenCountrie:{},
    countries: [
        {id: 1, uri: require("../../assets/images/ico/countries_flags/Albania.png"), name:"Албания", hidden: false},
        {id: 2, uri: require("../../assets/images/ico/countries_flags/Bulgaria.png"), name:"Болгария", hidden: false},
        {id: 3, uri: require("../../assets/images/ico/countries_flags/Bosnia.png"), name:"Босния", hidden: false},
        {id: 4, uri: require("../../assets/images/ico/countries_flags/Hungary.png"), name:"Венгрия", hidden: false},
        {id: 5, uri: require("../../assets/images/ico/countries_flags/Germany.png"), name:"Германия", hidden: false},
        {id: 6, uri: require("../../assets/images/ico/countries_flags/Greece.png"), name:"Греция", hidden: false},
        {id: 7, uri: require("../../assets/images/ico/countries_flags/Spain.png"), name:"Испания", hidden: false},
        {id: 8, uri: require("../../assets/images/ico/countries_flags/Italy.png"), name:"Италия", hidden: false},
        {id: 9, uri: require("../../assets/images/ico/countries_flags/Latvia.png"), name:"Латвия", hidden: false},
        {id: 10, uri: require("../../assets/images/ico/countries_flags/Lithuania.png"), name:"Литва", hidden: false},
        {id: 11, uri: require("../../assets/images/ico/countries_flags/Poland.png"), name:"Польша", hidden: false},
        {id: 12, uri: require("../../assets/images/ico/countries_flags/Portugal.png"), name:"Португалия", hidden: false},
        {id: 13, uri: require("../../assets/images/ico/countries_flags/Serbia.png"), name:"Сербия", hidden: false},
        {id: 14, uri: require("../../assets/images/ico/countries_flags/Slovakia.png"), name:"Словакия", hidden: false},
        {id: 15, uri: require("../../assets/images/ico/countries_flags/Finland.png"), name:"Финляндия", hidden: false},
        {id: 16, uri: require("../../assets/images/ico/countries_flags/France.png"), name:"Франция", hidden: false},
        {id: 17, uri: require("../../assets/images/ico/countries_flags/Croatia.png"), name:"Хорватия", hidden: false},
        {id: 18, uri: require("../../assets/images/ico/countries_flags/Montenegro.png"), name:"Черногория", hidden: false},
        {id: 19, uri: require("../../assets/images/ico/countries_flags/Switzerland.png"), name:"Швейцария", hidden: false}
    ],
    chosenInformation:{},
    information: [
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
    ],
    informationBlock:{
        name: 'Херцег - Нови',
        uri: require("../../assets/images/ico/countries_flags/Spain.png"),
        text: `# Херцег - Нови\n![Minion](https://top7travel.ru/wp-content/uploads/2020/03/maxresdefault-1.jpg)\n## География\nРасположен на берегу [Которского залива Адриатического моря](https://www.google.com).\nГород лежит в долине у подножия горы Орьен. Из-за холмистого рельефа в Херцег-Нови много крутых тропинок и лестниц, поэтому его называют «городом тысячи ступенек». Площадь муниципалитета Херцег-Нови составляет 235 км².
        \n## Климат\nКлимат — средиземноморский, отличается тёплым сухим летом и мягкой влажной зимой. Херцег-Нови из-за особенностей местоположения обладает особым микроклиматом. Здесь около 200 солнечных дней в году. В июле и августе — приблизительно 11 солнечных часов в день. Среднегодовая температура — 16,2 °C. Часты незначительные колебания температуры, которые могут достигать 4 °C в течение дня. Средняя температура с мая по сентябрь — 25 °C. Купальный сезон может продолжаться до пяти месяцев, средняя температура моря в это время составляет 22-26 °C. За год выпадает в среднем 1930 мм осадков. Относительная влажность воздуха — от 63 % летом и до 80 % осенью.\n![Minion2](https://themaxtravel.com/wp-content/uploads/2023/05/plyazh-zhanitse.jpg)`
    }
}
export const infoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'sn/info/SET_CHOSEN_COUNTRIE':{
            return {
                ...state, chosenCountrie: {...state.countries[action.chosenCountrieId-1]}
            }
        }
        case 'sn/info/SET_INFORMATION_THEME':{
            return {
                ...state, chosenInformation: {...state.information[action.infoSectionId-1].li[action.infoId-1]}
            }
        }
        default:
            return state;
    }
}


export const actions = {
    setChosenCountrieAC: (chosenCountrieId) => ({type: 'sn/info/SET_CHOSEN_COUNTRIE', chosenCountrieId}),
    setChosenInformationAC: (infoSectionId, infoId) => ({type: 'sn/info/SET_INFORMATION_THEME', infoSectionId, infoId}),
}