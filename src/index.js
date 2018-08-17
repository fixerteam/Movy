import { createStackNavigator } from 'react-navigation'
import First from './screens/walkthrough/First'
import Second from './screens/walkthrough/Second'
import Third from './screens/walkthrough/Third'

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
