
require(['Components/CommentList', 'Components/CommentForm'], function (CommentList, CommentForm) {
    
    var CommentBox = React.createClass({
        loadCommentsFromServer: function() {
            this.setState({ data: [{key: 1, author: 'Manuel REina', text: 'React comment'}] });
        },
        handleCommentSubmit: function(comment) {
            var comments = this.state.data;
            var newComments = comments.concat([comment]);
            this.setState({data: newComments});
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
        getInitialState: function() {
            return {data: []};
        },
        componentDidMount: function() {
            //this.loadCommentsFromServer();
            //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
        },
        render: function() {
            return (
              <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
              </div>
          );
        }
    });

    
    ReactDOM.render(
      <CommentBox url="/api/comments" pollInterval={2000} />,
      document.getElementById('content')
    );
});

