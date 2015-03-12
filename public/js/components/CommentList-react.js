var React = require('react');
var Comment = require('./Comment-react');

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} text={comment.text} />
       );
    });
    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
});

module.exports = CommentList;