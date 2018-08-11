import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { LinearGradient, Font } from 'expo'

const SFProBold = require('../../../assets/fonts/SF-Pro-Display-Bold.otf')
const SFProUltralight = require('../../../assets/fonts/SF-Pro-Display-Ultralight.otf')
const image = require('../../../assets/walk1.png')

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#222222'
  },
  image: {
    width: '100%',
    height: '60%'
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  gradientTitle: {
    width: '100%',
    height: '50%',
    top: '25%',
    position: 'absolute'
  },
  title: {
    color: '#FFF',
    fontSize: 36,
    fontFamily: 'SFProBold'
  },
  description: {
    color: '#FFF',
    fontSize: 34,
    fontFamily: 'SFProUltralight'
  },
  titleWrapper: {
    position: 'absolute',
    bottom: '40%',
    alignSelf: 'center',
    alignItems: 'center'
  }
})

class FirstWalk extends Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      SFProBold,
      SFProUltralight
    })

    this.setState({ fontLoaded: true })
  }

  renderTitles = () => (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Get the first</Text>
      <Text style={styles.description}>Movie &TV information</Text>
    </View>
  )

  render() {
    const { fontLoaded } = this.state

    return (
      <View style={styles.root}>
        <Image source={image} style={styles.image} />
        <LinearGradient
          colors={['#2222220D', '#222222BF', '#222222F2', '#222222FF', '#222222FF']}
          style={styles.gradientTitle}
        />
        <LinearGradient colors={['#F5900E11', '#DB3167FF']} style={styles.gradient} />
        {fontLoaded && this.renderTitles()}
      </View>
    )
  }
}

export default FirstWalk
