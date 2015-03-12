var React = require('react');

var CommentForm = React.createClass({
	handleSubmit: function(e) {
    		e.preventDefault();
    		var author = this.refs.author.getDOMNode().value.trim();
    		var text = this.refs.text.getDOMNode().value.trim();
    		if (!text || !author) {
      			return;
    		}
		this.refs.author.getDOMNode().value = '';
		this.refs.text.getDOMNode().value = '';
  	},
  	render: function() {
    		return (
			<form className="form-comment" onSubmit={this.handleSubmit}>
	        			<div className="form-group">
	        				<input type="text" placeholder="Your name" className="form-control" />
	        			</div>
	        			<div className="form-group">
	        				<textarea className="form-control" rows="3" placeholder="Say something..."></textarea>
	        			</div>
	        			<div className="form-group">
	        				<button type="submit" className="btn btn-primary btn-lg btn-block">Post</button>
	        			</div>
      			</form>
    		);
  }
});

module.exports = CommentForm;