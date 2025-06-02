import { createDrawerNavigator } from '@react-navigation/drawer';
import PrivacyScreen from './privacy';
import WebViewScreen from './webview';

const DrawerNav = createDrawerNavigator();



export default function Layout() {
  return (
    <DrawerNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <DrawerNav.Screen 
        name="Chat" 
        component={WebViewScreen}
        options={{
          title: 'Chat with Lena',
        }}
      />
      <DrawerNav.Screen 
        name="Privacy" 
        component={PrivacyScreen}
        options={{
          title: 'Privacy Policy',
        }}
      />
    </DrawerNav.Navigator>
  );
}
