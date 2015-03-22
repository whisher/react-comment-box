var React = require('react');
var moment = require('moment');

var Comment = React.createClass({
  render: function() {
  return (
      <div className="comment">
        <span className="comment-date">{moment(this.props.data.created).format('YYYY-DD-MM')}</span>
        <h3 className="comment-author">
          {this.props.data.author} 
        </h3>
        <div className="comment-text">{this.props.data.text}</div>
      </div>
    );
  }
});

module.exports = Comment;