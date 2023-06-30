import { Stack } from "expo-router";
import React, { FC } from "react";

export interface ScreensProps {
  id?: number;
  name: string;
  options: object;
}

const Layout: FC = (): JSX.Element => {
  return (
    <Stack
        screenOptions={{
            headerShown: false,
        }}
    />
  );
};

export default Layout;
