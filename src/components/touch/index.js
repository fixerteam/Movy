import React from 'react'
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

const Touchable = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity

const Touch = ({ children, touchProps, ...otherProps }) => (
  <Touchable {...touchProps}>
    <View {...otherProps}>{children}</View>
  </Touchable>
)

export default Touch
