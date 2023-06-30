import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IAllPost } from "../../mock/post";

const ListPost: FC<IAllPost> = ({ title, thumbnail, developer, id, platform, tag}): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imgWrapper}>
        <View style={styles.overlay} />
        <Image
          source={{ uri: thumbnail }}
          resizeMode="cover"
          style={styles.thumbnail}
        />
        <Text style={styles.smallText}>
          <View style={styles.badge} /> {id}k Watching
        </Text>
      </View>

      <View>
        <Text style={styles.title} lineBreakMode="tail" numberOfLines={1}>{title}</Text>
        <Text style={styles.subtitle}>LIVE: {developer}</Text>
        <Text style={styles.subtitle}># {platform}</Text>
        <View style={styles.horizontalRow}>
            {tag.map((item,index)=>(
                <Text style={[styles.tag, {backgroundColor: item.color}]} key={index}>{item.title}</Text>
            ))}
        </View>
      </View>
    </View>
  );
};

export default ListPost;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 15
  },
  thumbnail: {
    width: 130,
    height: 93,
    borderRadius: 10,
  },
  imgWrapper: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 10,
  },
  smallText: {
    color: "white",
    fontSize: 10,
    fontWeight: "500",
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 11
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "red",
    zIndex: 11
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '90%'
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666'
  },
  tag: {
    color: 'white',
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 3
  },
  horizontalRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 4,
    flexWrap: 'wrap'
  }
});
