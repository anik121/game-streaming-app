import { LinearGradient } from 'expo-linear-gradient';
import React, { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { IAllPost } from '../../mock/post';

const {width} = Dimensions.get('window');

const BigPost:FC<IAllPost> = ({thumbnail,title, id, developer}):JSX.Element => {
  return (
    <View style={styles.wrapper}>
        <Image
            source={{uri: thumbnail}}
            resizeMode='cover'
            style={styles.thumbnail}
        />
        {/* <View style={styles.overlay}/> */}
        <LinearGradient style={styles.postMeta} colors={['transparent','rgba(0,0,0,0.6)']}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.horizontalRow}>
                <View style={styles.horizontalRow}>
                    <Image 
                        source={{uri: thumbnail}}
                        resizeMode='cover'
                        style={styles.userAvatar}
                    />
                    <Text style={styles.smallText}>{developer}</Text>
                </View>
                <Text style={styles.smallText}><View style={styles.badge}/> {id}k Watching</Text>
            </View>
        </LinearGradient>
    </View>
  )
}

export default BigPost

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: width - 90,
        height: width - 100
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
    postMeta:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 20,
        padding: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width: '100%'
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    userAvatar:{
        width: 30,
        height: 30,
        borderRadius: 50
    },
    horizontalRow:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    smallText: {
        color: 'white',
        fontSize: 12,
        fontWeight: "500"
    },
    badge: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: 'red',
    }
})