'use strict';

var CommentForm = React.createClass({
    displayName: 'CommentForm',

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }
        // TODO: send request to the server
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },
    render: function render() {
        return React.createElement(
            'form',
            { className: 'commentForm', onSubmit: this.handleSubmit },
            React.createElement('input', { type: 'text', placeholder: 'Your name', ref: 'author' }),
            React.createElement('input', { type: 'text', placeholder: 'Say something...', ref: 'text' }),
            React.createElement('input', { type: 'submit', value: 'Post' })
        );
    }
});
define("Components/CommentForm", [], function () {
    return CommentForm;
});

