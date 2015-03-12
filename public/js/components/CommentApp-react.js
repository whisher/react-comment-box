var React = require('react');
var CommentList = require('./CommentList-react');
var CommentForm = require('./CommentForm-react');

var CommentApp = React.createClass({
	loadCommentsFromServer: function() {
    		$.ajax({
      			url: this.props.url,
      			dataType: 'json',
      			success: function(data) {
        				this.setState({data: data});
      			}.bind(this),
      			error: function(xhr, status, err) {
        			console.error(this.props.url, status, err.toString());
      			}.bind(this)
    		});
  	},
  	getInitialState: function() {
    		return {data: []};
  	},
  	componentDidMount: function() {
    		this.loadCommentsFromServer();
    		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  	},
  	render: function() {
	    	return (
		      <div className="container">
		        <h1>Comments <small>for page {this.props.pageUrl} <span className="badge">{this.state.data.length}</span></small></h1>
		        <CommentList data={this.state.data} />
		        <CommentForm />
		      </div>
	    	);
  	}
});

module.exports = CommentApp;