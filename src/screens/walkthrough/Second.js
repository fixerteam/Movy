import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import { LinearGradient } from 'expo'
import image from '@images/walk2.png'
import Title from './components/title'
import styles from './style'

const SecondWalk = () => (
  <View style={styles.root}>
    <StatusBar hidden />
    <Image source={image} style={styles.imageFull} />
    <LinearGradient colors={['#F5D54701', '#F5D547FF']} style={styles.gradient} />
    <Title primary="Know the movie" secondary="is not worth Watching" style={styles.titleWrapper} />
  </View>
)

export default SecondWalk
