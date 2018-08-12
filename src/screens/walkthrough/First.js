import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import { LinearGradient } from 'expo'
import image from '@images/walk1.png'
import Title from './components/title'
import styles from './style'

const FirstWalk = () => (
  <View style={styles.root}>
    <StatusBar hidden />
    <Image source={image} style={styles.imageWrap} />
    <LinearGradient
      colors={['#2222220D', '#222222BF', '#222222F2', '#222222FF', '#222222FF']}
      style={styles.gradientTitle}
    />
    <LinearGradient colors={['#F5900E11', '#DB3167FF']} style={styles.gradient} />
    <Title primary="Get the first" secondary="Movie &TV information" style={styles.titleWrapper} />
  </View>
)

export default FirstWalk
