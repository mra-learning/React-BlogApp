/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NotificationAndroid = require('NotificationAndroid');

var AppRegistry = React.AppRegistry;
var StyleSheet = React.StyleSheet;
var Text = React.Text;
var View = React.View;
var TouchableNativeFeedback = React.TouchableNativeFeedback;
var ListView = React.ListView;

var BlogApp = React.createClass({
  displayName: 'BlogApp',

  render: function render() {
    return React.createElement(
      View,
      { style: styles.container },
      React.createElement(
        Text,
        { style: styles.welcome },
        'Welcome to React Natives!'
      ),
      React.createElement(Text, { style: styles.instructions }),
      React.createElement(
        TouchableNativeFeedback,
        {
          onPress: function () {
            return NotificationAndroid.show('The synchronization finished successfully', 'Sync', NotificationAndroid.NOTIFICATION, 1234);
          }
        },
        React.createElement(
          View,
          null,
          React.createElement(
            Text,
            { style: { margin: 30 } },
            'Sync'
          )
        )
      )
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('BlogApp', function () {
  return BlogApp;
});

