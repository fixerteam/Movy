import React from 'react'
import { Image, StyleSheet } from 'react-native'
import filled from './images/walk-indicator-fill.png'
import outlined from './images/walk-indicator-empty.png'

const style = StyleSheet.create({
  image: {
    marginHorizontal: 5
  }
})

const Indicator = ({ fill }) => <Image source={fill ? filled : outlined} style={style.image} />

export default Indicator
