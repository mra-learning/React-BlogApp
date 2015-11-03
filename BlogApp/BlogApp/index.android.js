var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ReactNative = require('react-native');
var AppRegistry = ReactNative.AppRegistry, any = ReactNative.StyleSheet, View = ReactNative.View, TouchableNativeFeedback = ReactNative.TouchableNativeFeedback, ListView = ReactNative.ListView;
var CommentBox = (function (_super) {
    __extends(CommentBox, _super);
    function CommentBox(props, context) {
        _super.call(this, props, context);
    }
    CommentBox.prototype.setState = function () {
    };
    CommentBox.prototype.render = function () {
        return React.createElement(View, null, React.createElement(TouchableNativeFeedback, null));
    };
    return CommentBox;
})(React.Component);
React.render(React.createElement(CommentBox, null), document.getElementById('content'));
//# sourceMappingURL=index.android.js.map