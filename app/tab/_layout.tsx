import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import type { FC } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import AppHeader from "../../components/utils/AppHeader";

const { width } = Dimensions.get("window");


export interface ScreensProps {
  id?: number;
  name: string;
  options: object;
}

const screens: ScreensProps[] = [
  {
    id: 1,
    name: "index",
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Image
          style={[styles.tabIcon, { opacity: focused ? 1 : 0.3 }]}
          source={
            focused
              ? require("../../assets/icons/follow2.png")
              : require("../../assets/icons/follow1.png")
          }
        />
      ),
    },
  },
  {
    id: 2,
    name: "discover",
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Image
          style={[styles.tabIcon, { opacity: focused ? 1 : 0.3 }]}
          source={
            focused
              ? require("../../assets/icons/discover2.png")
              : require("../../assets/icons/discover1.png")
          }
        />
      ),
    },
  },
  {
    id: 3,
    name: "streaming",
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Image
          style={[styles.tabIcon, { opacity: focused ? 1 : 0.3 }]}
          source={
            focused
              ? require("../../assets/icons/streaming2.png")
              : require("../../assets/icons/streaming1.png")
          }
        />
      ),
    },
  },
  {
    id: 4,
    name: "live",
    options: {
      headerShown: false,
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Image
          style={[styles.tabIcon, { opacity: focused ? 1 : 0.3 }]}
          source={
            focused
              ? require("../../assets/icons/live2.png")
              : require("../../assets/icons/live1.png")
          }
        />
      ),
    },
  },
  
];

const Layout: FC = (): JSX.Element => {
  return (
    <>
      <StatusBar backgroundColor="white" />
      <Tabs
        screenOptions={{
          header: () => <AppHeader />,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            width: width - 30,
            height: 70,
            backgroundColor: "#1D212A",
            padding: 0,
            borderRadius: 20,
            marginLeft: 15,
            marginBottom: 10,
          },
          tabBarAllowFontScaling:false
        }}
      >
        {screens.map((screen: any) => (
          <Tabs.Screen key={screen.id} {...screen} />
        ))}
      </Tabs>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});
