var React = require('react');
var CommentApp = require('./components/CommentApp-react');

React.render(
	<CommentApp url="api/comments" pageUrl={document.URL.replace(/\/$/, '')} />,
	document.getElementById('app')
);