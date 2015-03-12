var React = require('react');
var CommentApp = require('./components/CommentApp-react');

React.render(
	<CommentApp url="comments.json" pollInterval={2000} pageUrl={document.URL} />,
	document.getElementById('app')
);