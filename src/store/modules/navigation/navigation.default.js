/**
 * @file Exports the default Navigation State
 */

import { ListView } from 'react-native';
import buttonData from './../../../data/navigation.data.json';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
const initialNavigationViewState = dataSource.cloneWithRows(buttonData);

/**
 * Default Navigation State
 */
export default {
  views: initialNavigationViewState
};

