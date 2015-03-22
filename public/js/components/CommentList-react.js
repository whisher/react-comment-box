var React = require('react');
var Comment = require('./Comment-react');

var CommentList = React.createClass({
  render: function() {
    var searchText = this.props.searchText;
    var commentNodes = this.props.data.filter(function (comment) {
      if(!searchText){
        return true;
      }
      return comment.author.toLowerCase().indexOf(searchText) !== -1;
    })
    .map(function (comment) {
      return (
        <Comment data={comment} key={comment._id}/>
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