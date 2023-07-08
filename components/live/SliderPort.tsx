import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { IAllPost } from "../../mock/post";

const { width } = Dimensions.get("window");

const SliderPost: FC<IAllPost> = ({thumbnail, title ,id}): JSX.Element => {
  const router = useRouter();

  const goToPost = ()=>{
    router.push('/stream')
  }
  return (
    <Pressable style={styles.wrapper} onPress={goToPost}>
      <View style={styles.imgWrapper}>
        <Image
          source={{ uri: thumbnail }}
          resizeMode="cover"
          style={styles.thumbnail}
        />
        
        <LinearGradient style={styles.postMeta} colors={['transparent','rgba(0,0,0,0.6)']}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.smallText}><View style={styles.badge} /> Live {id}k Watching</Text>
        </LinearGradient>
      </View>
    </Pressable>
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
  postMeta: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 20,
    paddingLeft: 10,
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: '100%'
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    width: width  / 2 - 50,
    marginBottom: 5
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
