import React, { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { IAllPost } from '../../mock/post';

const { width } = Dimensions.get('window');

const CategoryItem:FC<IAllPost> = ({thumbnail, title, id}):JSX.Element => {
  return (
    <View style={styles.card}>
        <Image
            source={{uri: thumbnail}}
            resizeMode='cover'
            style={styles.thumb}
        />
      <Text style={styles.name} numberOfLines={2}>{title}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'white',
        width: width > 500 ? width / 4 : width / 3,
        margin: 7
    },
    thumb: {
        width: '100%',
        height: 180,
        borderRadius: 20
    },
    name: {
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 'bold'
    }
})