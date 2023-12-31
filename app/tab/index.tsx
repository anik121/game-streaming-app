import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import BigPost from "../../components/home/BigPost";
import ListPost from "../../components/home/ListPost";
import { allPost } from "../../mock/post";

export default function Page() {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);

  return (
    <>
      {isReady && <SplashScreen />}
      <ScrollView
        style={styles.container}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.title}>Following</Text>
          <FlatList
            data={allPost}
            renderItem={({ item }) => <BigPost {...item} />}
            keyExtractor={(item: any) => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            showsHorizontalScrollIndicator={false}
            horizontal
          />

          <Text style={styles.subtitle}>Live Channels</Text>
          <View style={styles.listPostWrapper}>
            {allPost.map((item) => (
              <ListPost key={item.id} {...item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
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
