
var ReactNative = require('react-native');
var {
    AppRegistry,
    StyleSheet: any,
    
    View,
    TouchableNativeFeedback,
    ListView

} = ReactNative;

interface ICommentBox extends React.Props<any> {

}
  
class CommentBox extends React.Component<ICommentBox, any> {  
    
    constructor(props: ICommentBox, context) {
        super(props, context);
        
    }
    

    public render() {

        return null;
    }
}

React.render(<CommentBox />, document.getElementById('content')); 
