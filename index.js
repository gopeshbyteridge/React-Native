/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import AppWrapper from './src/AppWrapper';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppWrapper);
