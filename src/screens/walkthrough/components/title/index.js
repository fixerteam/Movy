import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'

const Title = ({ primary, secondary, ...otherProps }) => (
  <View {...otherProps}>
    <Text style={styles.title}>{primary}</Text>
    <Text style={styles.description}>{secondary}</Text>
  </View>
)

export default Title
