import React from 'react'
import { View } from 'react-native'
import R from 'ramda'
import Indicator from '../indicator'

const Indicators = ({ size = 3, activeIndex = 0, ...otherProps }) => (
  <View {...otherProps}>
    {R.range(0, size).map(index => (
      <Indicator key={index} fill={index === activeIndex} />
    ))}
  </View>
)

export default Indicators
