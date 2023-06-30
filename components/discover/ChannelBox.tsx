import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IAllPost } from '../../mock/post'

const ChannelBox:FC<IAllPost> = ({thumbnail, title, id}):JSX.Element => {
  return (
    <View style={styles.card}>
        <Image
            source={{uri: thumbnail}}
            resizeMode='cover'
            style={styles.logo}
        />
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.follower}>{id}M Followers</Text>
    </View>
  )
}

export default ChannelBox

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F1F1F2',
        padding: 20,
        borderRadius: 20
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    name: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    follower: {
        color: 'gray',
        fontSize: 12
    }
})