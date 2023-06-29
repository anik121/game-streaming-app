import Constants from "expo-constants";
import React, { FC } from "react";
import { Image, Pressable as Preservable, StyleSheet, View } from "react-native";

const AppHeader: FC = (): JSX.Element => {
  const handleIconBtn = ()=>{
    console.log('clicked')
  }
  return (
    <View style={styles.headerWrapper}>
      <Image
        source={require("../../assets/image/profile.png")}
        resizeMode="contain"
        style={styles.avatar}
      />
      {/* TODO: End User Avatar */}

      <View style={styles.btnWrapper}>
        <Preservable onPress={handleIconBtn}>
          <Image
            source={require("../../assets/icons/chat.png")}
            resizeMode="contain"
            style={styles.btnIcon}
          />
        </Preservable>
        <Preservable onPress={handleIconBtn}>
          <View style={styles.notify}>
            <View style={styles.badge}/>
            <Image
              source={require("../../assets/icons/notifications.png")}
              resizeMode="contain"
              style={styles.btnIcon}
            />
          </View>
        </Preservable>
        <Preservable onPress={handleIconBtn}>
          <Image
            source={require("../../assets/icons/search.png")}
            resizeMode="contain"
            style={styles.btnIcon}
          />
        </Preservable>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    marginTop: Constants.statusBarHeight - 2,
    padding: 15,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 25
  },
  btnIcon: {
    width: 30,
    height: 30,
  },
  notify: {
    position: 'relative'
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 4,
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'red',
    zIndex: 10
  }
});
