import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { IAllPost } from "../../mock/post";

const { width } = Dimensions.get("window");

const BigPost: FC<IAllPost> = ({thumbnail, title ,id ,developer, platform, tag}): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imgWrapper}>
        <Image
          source={{ uri: thumbnail }}
          resizeMode="cover"
          style={styles.thumbnail}
        />
        
        <LinearGradient style={styles.postMeta} colors={['transparent','rgba(0,0,0,0.6)']}>
          <Text style={styles.smallText}><View style={styles.badge} /> Live {id}k Watching</Text>
        </LinearGradient>
      </View>

      <View style={styles.postMetaWrapper}>
        <Image
          source={{ uri: thumbnail }}
          resizeMode="cover"
          style={styles.userAvatar}
        />

        <View>
            <Text style={styles.title} lineBreakMode="tail" numberOfLines={2}>{title}</Text>
            <Text style={styles.subtitle}>{developer}</Text>
            <Text style={styles.subtitle}># {platform}</Text>
            <View style={[styles.horizontalRow,{marginTop: 5}]}>
                {tag.map((item,index)=>(
                    <Text style={[styles.tag, {backgroundColor: item.color}]} key={index}>{item.title}</Text>
                ))}
            </View>
        </View>
      </View>
    </View>
  );
};

export default BigPost;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderRadius: 30,
    width: width - 90,
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
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: '100%'
  },
  postMetaWrapper:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    gap: 15
  },
  title: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
    width: width - 170
  },
  subtitle: {
    color: '#666',
    fontSize: 14,
    fontWeight: "bold"
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  horizontalRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  smallText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  badge: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "red",
  },
  tag: {
    color: 'white',
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 3
  },
});
