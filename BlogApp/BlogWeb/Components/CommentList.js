"use strict";

define(['Components/Comment'], function (Comment) {

    return React.createClass({

        render: function render() {
            var commentNodes = this.props.data.map(function (comment, i) {
                return React.createElement(
                    Comment,
                    { key: i, author: comment.author },
                    comment.text
                );
            });

            return React.createElement(
                "div",
                { className: "commentList" },
                commentNodes
            );
        }
    });
});

