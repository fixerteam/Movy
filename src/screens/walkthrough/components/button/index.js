import React from 'react'
import { Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Touch from '@components/touch'
import styles from './style'

const NextButton = ({ onPress, style, ...otherProps }) => (
  <Touch style={[styles.outlined, style]} touchProps={{ onPress }} {...otherProps}>
    <Text style={styles.text}>Next</Text>
    <MaterialCommunityIcons name="trending-neutral" size={24} color="#FFF" />
  </Touch>
)

export default NextButton
