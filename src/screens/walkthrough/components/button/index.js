import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Touch from '../../../../components/touch'
import styles from './style'

const NextButton = ({ onPress, style, ...otherProps }) => (
  <Touch style={[styles.outlined, style]} touchProps={{ onPress }} {...otherProps}>
    <Text style={styles.text}>Next</Text>
    <Icon name="trending-neutral" size={24} color="#FFF" />
  </Touch>
)

export default NextButton
