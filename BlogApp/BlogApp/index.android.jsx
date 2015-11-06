/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

//var React = require('react-native');
//var {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View,
//  TouchableNativeFeedback,
//  ListView

//} = React;

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
            onPress={this._onPressButton}
            background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={{margin: 30}}>Button</Text>
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
