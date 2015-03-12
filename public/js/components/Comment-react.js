var React = require('react');

var Comment = React.createClass({
  render: function() {
  return (
      <div className="comment">
        <h2 className="comment-author">
          {this.props.author}
        </h2>
        <div className="comment-text">{this.props.text}</div>
      </div>
    );
  }
});

module.exports = Comment;