define(['Components/Comment'], function (Comment) {
    
   return React.createClass({

        render: function () {
            var commentNodes = this.props.data.map(function (comment, i) {
                return (
                  <Comment key={i} author={comment.author}>
                    {comment.text}
                 </Comment>
              );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
            );
        }
    });

});

