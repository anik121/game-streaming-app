import { FlatList, StyleSheet, Text, View } from "react-native";
import BigPost from "../components/home/BigPost";
import { allPost } from "../mock/post";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Following</Text>

      <FlatList
        data={allPost}
        renderItem={({item})=> <BigPost {...item}/>}
        keyExtractor={(item: any)=> item.id}
        ItemSeparatorComponent={()=> <View style={{width: 20}}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
