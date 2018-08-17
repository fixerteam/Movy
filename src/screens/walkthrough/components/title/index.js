import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Font } from 'expo'
import SFProBold from '@fonts/SF-Pro-Display-Bold.otf'
import SFProUltralight from '@fonts/SF-Pro-Display-Ultralight.otf'
import styles from './style'

class Title extends Component {
  state = {
    fontLoaded: false,
    primary: '',
    secondary: ''
  }

  async componentDidMount() {
    await Font.loadAsync({
      SFProBold,
      SFProUltralight
    })

    this.setState({ fontLoaded: true })
  }

  static getDerivedStateFromProps(props) {
    return {
      primary: props.primary,
      secondary: props.secondary
    }
  }

  render() {
    const { fontLoaded, primary, secondary } = this.state
    return (
      fontLoaded && (
        <View {...this.props}>
          <Text style={styles.title}>{primary}</Text>
          <Text style={styles.description}>{secondary}</Text>
        </View>
      )
    )
  }
}

export default Title
