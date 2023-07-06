import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import CategoryItem from "../../components/category/CategoryItem";
import { allPost } from "../../mock/post";

export default function Page() {
  const [btnSwitcher, setBtnSwitcher] = useState("category");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browser</Text>

      <View style={styles.filterWrapper}>
        <View style={styles.btnWrapper}>
          <Pressable
            style={
              btnSwitcher === "category" ? styles.btnActive : styles.btnUnActive
            }
            onPress={() => setBtnSwitcher("category")}
          >
            <Text
              style={
                btnSwitcher === "category"
                  ? styles.txtActive
                  : styles.txtUnActive
              }
            >
              Category
            </Text>
          </Pressable>

          <Pressable
            style={
              btnSwitcher === "live_channels"
                ? styles.btnActive
                : styles.btnUnActive
            }
            onPress={() => setBtnSwitcher("live_channels")}
          >
            <Text
              style={
                btnSwitcher === "live_channels"
                  ? styles.txtActive
                  : styles.txtUnActive
              }
            >
              Live Channels
            </Text>
          </Pressable>
        </View>

        <Pressable>
          <Image source={require('../../assets/icons/filter.png')} resizeMode="cover" style={styles.iconBtn}/>
        </Pressable>
      </View>

      <FlatList style={{ marginBottom: 100 }}
        data={allPost}
        renderItem={({ item }) => <CategoryItem {...item} />}
        keyExtractor={(item: any) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
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
    marginTop: 10,
    marginBottom: 20,
  },
  filterWrapper:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  btnUnActive: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 7,
  },
  btnActive: {
    backgroundColor: "#8633FF",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 7,
  },
  txtUnActive: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 14,
  },
  txtActive: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  iconBtn:{
    width: 30,
    height: 30,
  }
});
