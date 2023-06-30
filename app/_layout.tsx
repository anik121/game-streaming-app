import { Stack } from "expo-router";
import type { FC } from "react";
import { StyleSheet } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export interface ScreensProps {
  id?: number;
  name: string;
  options: object;
}

const screens: ScreensProps[] = [
  {
    id: 1,
    name: "tab",
    options: {
      headerShown: false
    },
  },
  {
    id: 2,
    name: "stream",
    options: {
      headerShown: true
    },
  },
];

const Layout: FC = (): JSX.Element => {
  return (
      <Stack>
        {screens.map((screen)=> <Stack.Screen key={screen.id} {...screen}/>)}
      </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});
