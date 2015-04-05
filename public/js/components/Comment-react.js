var React = require('react');
var moment = require('moment');

var Comment = React.createClass({
  render: function() {
  return (
      <div className="comment">
        <div className="comment-text">{this.props.data.text}</div>

        <div className="comment-meta">
          <div className="comment-author">
            {this.props.data.author}
          </div>
          <span className="comment-date">{moment(this.props.data.created, 'YYYYMMDD').fromNow()}</span>
        </div>
      </div>
    );
  }
});

module.exports = Comment;