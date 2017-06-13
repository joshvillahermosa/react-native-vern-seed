import { StackNavigator } from 'react-navigation';

// Views
import Home from './../views/home.view';
import ViewOne from './../views/view-one.view';
import ViewTwo from './../views/view-two.view';

export default StackNavigator({
  Home: { screen: Home },
  ViewOne: {screen: ViewOne},
  ViewTwo: {screen: ViewTwo}
});
