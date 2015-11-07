"use strict";

var Comment = React.createClass({
    displayName: "Comment",

    render: function render() {
        return React.createElement(
            "div",
            { className: "comment" },
            React.createElement(
                "h2",
                { className: "commentAuthor" },
                this.props.author
            ),
            this.props.children
        );
    }
});

define([], function () {
    return Comment;
});

