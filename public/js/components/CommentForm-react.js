var React = require('react');

var CommentForm = React.createClass({
	handleSubmit: function(e) {
    e.preventDefault();

    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
     return;
   }
   this.props.onCommentSubmit({author: author, text: text, url: this.props.commentUrl});
   this.refs.author.getDOMNode().value = '';
   this.refs.text.getDOMNode().value = '';
 },

 render: function() {
  return (
   <form className="comment-create row" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <input type="text"  placeholder="Your name" className="form-control" ref="author" />
      </div>
      <div className="form-group">
        <textarea className="form-control" rows="3" placeholder="Say something..." ref="text"></textarea>
      </div>

      <div className="form-group text-right">
        <button type="submit" className="btn btn-success">Post</button>
      </div>
   </form>
   );
}
});

module.exports = CommentForm;