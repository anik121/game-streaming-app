import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function Page() {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);
  return <Redirect href="/tab"/>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  listPostWrapper: {
    marginBottom: 10,
  },
});
