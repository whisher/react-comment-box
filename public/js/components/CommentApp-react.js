var request = require('superagent');
var React = require('react');
//var socket = require('socket.io-client')('http://localhost:3000');
var socket = io.connect('http://localhost:3000');

var CommentList = require('./CommentList-react');
var CommentForm = require('./CommentForm-react');
var SearchBar = require('./SearchBar-react');

var CommentApp = React.createClass({
  loadCommentsFromServer: function() {
    request
      .get(this.props.url + '/' + encodeURIComponent(this.props.pageUrl))
      .end(function(err, res){
        if(err){
          return;
        }
        this.setState({data:res.body})
      }.bind(this));
  },
  handleCommentSubmit: function(comment) {
    socket.emit('comment sent', comment) ;
  },
  handleSearchInput: function(searchText) {console.log('Box',searchText);
    this.setState({
      searchText: searchText
    });
  },
  getInitialState: function() {
    return {
      data: [],
      searchText: '',
    };
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    socket.on('comment added', function(comment){
        var comments = this.state.data;
        this.setState({data: comments.concat([comment])});
    }.bind(this)) ;
     socket.on('comment error', function(err){
       //do something
    }.bind(this)) ;
  },
  render: function() {
    return (
      <div className="container">
        <div className="comment-header">
          <div className="pull-left">
            <p>Comments for page {this.props.pageUrl} <span className="comment-badge">{this.state.data.length}</span></p>
          </div>
          <div className="pull-right">
            <SearchBar  searchText={this.state.searchText} onSearchInput={this.handleSearchInput} />
          </div>
        </div>
  	 <CommentList data={this.state.data}  searchText={this.state.searchText}  />
        <CommentForm commentUrl={this.props.pageUrl}  onCommentSubmit={this.handleCommentSubmit} />
	</div>
    );
  }
});

module.exports = CommentApp;