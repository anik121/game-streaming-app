import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { IAllPost } from "../../mock/post";

const { width } = Dimensions.get("window");

const SliderPost: FC<IAllPost> = ({thumbnail, title ,id}): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imgWrapper}>
        <Image
          source={{ uri: thumbnail }}
          resizeMode="cover"
          style={styles.thumbnail}
        />
        <View style={styles.overlay} />
        <View style={styles.postMeta}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.smallText}><View style={styles.badge} /> Live {id}k Watching</Text>
        </View>
      </View>
    </View>
  );
};

export default SliderPost;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderRadius: 30,
    width: width / 2 - 50,
  },
  imgWrapper: {
    height: width - 170,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
  },
  postMeta: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 20,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    width: width  / 2 - 50,
    marginBottom: 7
  },
  horizontalRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  smallText: {
    color: "white",
    fontSize: 10,
    fontWeight: "500",
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "red",
  }
});
