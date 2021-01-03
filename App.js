import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GirisEkrani from './screens/GirisEkrani';
import ToDo from './screens/ToDo';
import Color from './utils/color';
import { firebaseConfig } from './utils/firebaseconfig';
import LoginEkrani from './screens/Auth/LoginEkrani';
import Kayit from './screens/Auth/Kayit';
import firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();



export default function App() {
  

  [user,setUser] = React.useState(null);
  [isLoggedIn, setIsLoggedIn] = React.useState(false);

  firebase.auth().onAuthStateChanged(user=>{
    if(user){
      setUser(user);
      setIsLoggedIn(true);
    }
    else{
      setUser(unullser);
      setIsLoggedIn(false);
    }
  })

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      
        (isLoggedIn) ? 
        <>
        <Stack.Screen name='Anasayfa' component={GirisEkrani} options={screenOptions.GirisEkrani} />
        <Stack.Screen name='ToDo' component={ToDo} options={screenOptions.ToDo} />
      
      <Stack.Screen name='Login' component={LoginEkrani}/>
      <Stack.Screen name='Kaydol' component={Kayit}/>
      </>
       
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const screenOptions={
  GirisEkrani:{ title: 'Welcome', headerShown: false},
  ToDo:{
    title: 'ToDo',
    headerShown: true,
    headerStyle:{backgroundColor:Color.white},
    headerTintColor:Color.primary
  }
};