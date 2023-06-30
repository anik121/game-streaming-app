import { Stack } from "expo-router";
import React, { FC } from "react";

export interface ScreensProps {
  id?: number;
  name: string;
  options: object;
}

const screens: ScreensProps[] = [
  {
    id: 1,
    name: "live",
    options: {
      headerShown: false,
    },
  },
  {
    id: 2,
    name: "live/stream",
    options: {
      headerShown: false,
    },
  },
];

const Layout: FC = (): JSX.Element => {
  return (
    <Stack
        screenOptions={{
            headerShown: false
        }}
    />
  );
};

export default Layout;
