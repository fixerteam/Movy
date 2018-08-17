import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#222222'
  },
  imageWrap: {
    width: '100%',
    height: '60%'
  },
  imageFull: {
    width: '100%',
    height: '100%'
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
  titleWrapper: {
    position: 'absolute',
    bottom: '40%',
    alignSelf: 'center',
    alignItems: 'center'
  },
  indicators: {
    position: 'absolute',
    bottom: '30%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  nextButton: {
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center'
  }
})
