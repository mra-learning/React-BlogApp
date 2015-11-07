'use strict';

require(['Components/CommentList', 'Components/CommentForm'], function (CommentList, CommentForm) {

    var CommentBox = React.createClass({
        displayName: 'CommentBox',

        loadCommentsFromServer: function loadCommentsFromServer() {
            this.setState({ data: [{ key: 1, author: 'Manuel REina', text: 'React comment' }] });
        },
        handleCommentSubmit: function handleCommentSubmit(comment) {
            var comments = this.state.data;
            var newComments = comments.concat([comment]);
            this.setState({ data: newComments });
            //$.ajax({
            //    url: this.props.url,
            //    dataType: 'json',
            //    type: 'POST',
            //    data: comment,
            //    success: function(data) {
            //        this.setState({data: data});
            //    }.bind(this),
            //    error: function(xhr, status, err) {
            //        console.error(this.props.url, status, err.toString());
            //    }.bind(this)
            //});
        },
        getInitialState: function getInitialState() {
            return { data: [] };
        },
        componentDidMount: function componentDidMount() {
            //this.loadCommentsFromServer();
            //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
        },
        render: function render() {
            return React.createElement(
                'div',
                { className: 'commentBox' },
                React.createElement(
                    'h1',
                    null,
                    'Comments'
                ),
                React.createElement(CommentList, { data: this.state.data }),
                React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
            );
        }
    });

    ReactDOM.render(React.createElement(CommentBox, { url: '/api/comments', pollInterval: 2000 }), document.getElementById('content'));
});

