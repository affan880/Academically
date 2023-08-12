import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import firebaseService from "./src/services/FirebaseService"

firebaseService.requestUserPermission();

AppRegistry.registerComponent(appName, () => App);
