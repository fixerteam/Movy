import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import image from './walk3.png'
import Title from '../components/title'
import Indicators from '../components/indicators'
import NextButton from '../components/button'
import styles from '../style'

const onNextClick = navigation => () => navigation.navigate('WalkthroughFirst')

const ThirdWalk = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar hidden />
    <Image source={image} style={styles.imageFull} />
    <LinearGradient colors={['#345CC501', '#142246FF']} style={styles.gradient} />
    <Title primary="Real-time" secondary="updates movie Trailer" style={styles.titleWrapper} />
    <Indicators activeIndex={2} style={styles.indicators} />
    <NextButton onPress={onNextClick(navigation)} style={styles.nextButton} />
  </View>
)

export default ThirdWalk
