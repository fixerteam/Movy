import { createStackNavigator } from 'react-navigation'
import First from './screens/walkthrough/first'
import Second from './screens/walkthrough/second'
import Third from './screens/walkthrough/third'

export default createStackNavigator(
  {
    WalkthroughFirst: First,
    WalkthroughSecond: Second,
    WalkthroughThird: Third
  },
  {
    initialRouteName: 'WalkthroughFirst',
    headerMode: 'none'
  }
)
