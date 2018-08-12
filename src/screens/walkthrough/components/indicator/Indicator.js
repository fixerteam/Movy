import React from 'react'
import { Image } from 'react-native'
import filled from '@images/walk-indicator-fill.png'
import outlined from '@images/walk-indicator-empty.png'

const Indicator = ({ fill }) => <Image source={fill ? filled : outlined} />

export default Indicator
