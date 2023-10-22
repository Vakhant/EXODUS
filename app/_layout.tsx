import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, StackActions, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, Text } from 'react-native';
import Header from '../components/ChoosCountries/Header';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgba(255, 255, 255, 1)',
      text: 'rgb(61, 61, 190)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : MyTheme}>
      <Stack>
        <Stack.Screen name="index"  options={{ headerShown: false }}/>
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="choosCountries" options={{ presentation: 'modal' }} />
        <Stack.Screen name="(tabs)" options={{ headerBackButtonMenuEnabled: true,
          header: ()=> <Header/>,
          headerLeft: ()=><Text>123</Text>,
          headerRight: ()=><Text>sdf</Text>, headerTitle: ({children})=><Text>{children}</Text> }} />
      </Stack>
    </ThemeProvider>
  );
}
