import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, View, Text } from 'react-native';
import InfoSvg from '../../assets/images/ico/main_nav/InfoSvg';
import LikedSvg from '../../assets/images/ico/main_nav/LikedSvg';
import MoreSvg from '../../assets/images/ico/main_nav/MoreSvg';
import RecsSvg from '../../assets/images/ico/main_nav/RecsSvg';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2f95dc', headerShadowVisible:true,
        tabBarStyle: {backgroundColor: 'rgba(255,255,255,1)', borderTopWidth: 0, boxShadow: 'none',
        height:56, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        opacity: 1
      }
      }}>
      <Tabs.Screen
        name="info"
        options={{
          title: 'Информация',
          tabBarLabelStyle: {
            display: 'none'
          },
          tabBarIcon: ({focused}) => 
          <View style={{
              width: '100%',
              height: 56,
              backgroundColor: '#fff',
              borderTopLeftRadius: 20,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <InfoSvg chsn={focused}/>
            <Text style={{fontSize: 11, color: focused? '#1374F3':'#5A6B8B'}}>Информация</Text>
          </View>
        }}
      />
      <Tabs.Screen
        name="recs"
        options={{
          title: 'Рекомендации',
          tabBarLabelStyle: {
            display: 'none'
          },
          tabBarIcon: ({focused}) => 
          <View style={{
              width: '100%',
              height: 56,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <RecsSvg chsn={focused}/>
            <Text style={{fontSize: 11, color: focused? '#1374F3':'#5A6B8B'}}>Рекомендации</Text>
          </View>,
        }}
      />
      <Tabs.Screen
        name="liked"
        options={{
          title: 'Tab liked',
          tabBarLabelStyle: {
            display: 'none'
          },
          tabBarIcon: ({focused}) => 
          <View style={{
              width: '100%',
              height: 56,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <LikedSvg chsn={focused}/>
            <Text style={{fontSize: 11, color: focused? '#1374F3':'#5A6B8B'}}>Избранное</Text>
          </View>,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'Tab more',
          tabBarLabelStyle: {
            display: 'none'
          },
          tabBarIcon: ({focused}) => 
          <View style={{
              width: '100%',
              height: 56,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 20,
            }}>
            <MoreSvg chsn={focused}/>
            <Text style={{fontSize: 11, color: focused? '#1374F3':'#5A6B8B'}}>Еще</Text>
          </View>,
        }}
      />
    </Tabs>
  );
}
