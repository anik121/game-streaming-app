import NexenPlayer from "expo-nexen-player";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page(props: any) {
  const [paused, setPaused] = useState(true);
  const playerRef = useRef(null);

  return (
    <SafeAreaView>
      <StatusBar hidden/>
        <NexenPlayer
          ref={playerRef}
          style={styles.video}
          source={{
            source: {
              uri: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            poster: "https://www.freetogame.com/g/370/thumbnail.jpg",
            title: "Big Buck Bunny:",
          }}
        />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  video: {
    width: "100%",
    height: 220,
    backgroundColor: "white",
  },
});
