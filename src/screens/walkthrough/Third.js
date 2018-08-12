import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import { LinearGradient } from 'expo'
import image from '@images/walk3.png'
import Title from './components/title'
import styles from './style'

const ThirdWalk = () => (
  <View style={styles.root}>
    <StatusBar hidden />
    <Image source={image} style={styles.imageFull} />
    <LinearGradient colors={['#345CC501', '#142246FF']} style={styles.gradient} />
    <Title primary="Real-time" secondary="updates movie Trailer" style={styles.titleWrapper} />
  </View>
)

export default ThirdWalk
