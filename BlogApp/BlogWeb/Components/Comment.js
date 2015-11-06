"use strict";

var Comment = React.createClass({
    displayName: "Comment",

    rawMarkup: function rawMarkup() {
        var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
        return { __html: rawMarkup };
    },

    render: function render() {
        return React.createElement(
            "div",
            { className: "comment" },
            React.createElement(
                "h2",
                { className: "commentAuthor" },
                this.props.author
            ),
            React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup() })
        );
    }
});

define("Comment", [], function () {
    return Comment;
});

