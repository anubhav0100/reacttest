/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Appp from './Appp';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
 
import configureStore from './src/store';

const store = configureStore();

const RNRedux = () =>{
    <Provider store = {store}>
        <Appp/>
    </Provider> 
}

AppRegistry.registerComponent(appName, () => RNRedux);
