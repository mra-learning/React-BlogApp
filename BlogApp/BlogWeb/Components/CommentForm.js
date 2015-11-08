'use strict';

var Button = ReactBootstrap.Button;

var CommentForm = React.createClass({
    displayName: 'CommentForm',

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
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
            React.createElement(
                Button,
                { bsStyle: 'danger' },
                'Post'
            )
        );
    }
});

define([], function () {
    return CommentForm;
});

