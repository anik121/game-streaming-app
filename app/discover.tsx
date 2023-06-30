import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import BigPost from "../components/discover/BigPost";
import ChannelBox from "../components/discover/ChannelBox";
import { allPost } from "../mock/post";

export default function Page() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Discover</Text>
      <FlatList
        data={allPost}
        renderItem={({ item }) => <BigPost {...item} />}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <Text style={styles.subtitle}>Recommend Channels</Text>

      <FlatList
        style={{marginBottom: 20}}
        data={allPost}
        renderItem={({ item }) => <ChannelBox {...item} />}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: "white"
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
  }
});
