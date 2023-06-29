import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import type { FC } from 'react';
import { StyleSheet } from 'react-native';
import AppHeader from '../components/utils/AppHeader';

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",
  };
  
const Layout:FC = ():JSX.Element => {
  return (
      <>
      <StatusBar backgroundColor='white'/>
      <Tabs screenOptions={{
        header: ()=> <AppHeader/>,
      }}/>
      </>
  )
}

export default Layout

const styles = StyleSheet.create({})