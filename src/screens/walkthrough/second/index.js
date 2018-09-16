import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import image from './walk2.png'
import Title from '../components/title'
import Indicators from '../components/indicators'
import NextButton from '../components/button'
import styles from '../style'

const onNextClick = navigation => () => navigation.navigate('WalkthroughThird')

const SecondWalk = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar hidden />
    <Image source={image} style={styles.imageFull} />
    <LinearGradient colors={['#F5D54701', '#F5D547FF']} style={styles.gradient} />
    <Title primary="Know the movie" secondary="is not worth Watching" style={styles.titleWrapper} />
    <Indicators activeIndex={1} style={styles.indicators} />
    <NextButton onPress={onNextClick(navigation)} style={styles.nextButton} />
  </View>
)

export default SecondWalk
