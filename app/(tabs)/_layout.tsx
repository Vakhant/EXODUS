import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, View, useColorScheme, Text } from 'react-native';
import Colors from '../../constants/Colors';
import InfoSvg from '../../components/SVGs/InfoSvg';
import LikedSvg from '../../components/SVGs/LikedSvg';
import MoreSvg from '../../components/SVGs/MoreSvg';
import RecsSvg from '../../components/SVGs/RecsSvg';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        // header: ()=>null,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {backgroundColor: 'rgba(0,0,0,0)', borderTopWidth: 0, boxShadow: 'none'}
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
              backgroundColor: '#3ea3c5',
              borderTopLeftRadius: 20,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <InfoSvg chsn={focused}/>
            <Text style={{fontSize: 11}}>Информация</Text>
          </View>,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
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
              backgroundColor: '#3ea3c5',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <RecsSvg chsn={focused}/>
            <Text style={{fontSize: 11}}>Рекомендации</Text>
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
              backgroundColor: '#3ea3c5',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <LikedSvg chsn={focused}/>
            <Text style={{fontSize: 11}}>Избранное</Text>
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
              backgroundColor: '#3ea3c5',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 20,
            }}>
            <MoreSvg chsn={focused}/>
            <Text style={{fontSize: 11}}>Еще</Text>
          </View>,
        }}
      />
    </Tabs>
  );
}
