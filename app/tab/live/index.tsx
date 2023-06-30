import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import BigPost from "../../../components/live/BigPost";
import SliderPost from "../../../components/live/SliderPort";
import AppHeader from "../../../components/utils/AppHeader";
import { allPost } from "../../../mock/post";

export default function Page() {
  return (
    <>
      <AppHeader/>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Esport</Text>
        <FlatList
            data={allPost}
            renderItem={({ item }) => <SliderPost {...item} />}
            keyExtractor={(item: any) => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            showsHorizontalScrollIndicator={false}
            horizontal
          />

        <Text style={styles.subtitle}>Live Matches</Text>

        {allPost.map((item)=>(
          <BigPost key={item.id} {...item}/>
        ))}
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
