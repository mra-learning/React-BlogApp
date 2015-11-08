/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NotificationAndroid = require('NotificationAndroid');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ListView

} = React;

var BlogApp = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Natives!
        </Text>
        <Text style={styles.instructions}>
          
        </Text>
        <TouchableNativeFeedback
            onPress={() =>
            NotificationAndroid.show('The synchronization finished successfully', 'Sync', NotificationAndroid.NOTIFICATION, 1234)}
            >
          <View >
            <Text style={{margin: 30}}>Sync</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BlogApp', () => BlogApp);
