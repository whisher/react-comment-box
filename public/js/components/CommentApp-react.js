var request = require('superagent');
var React = require('react');
var socket = require('socket.io-client')('http://localhost:3000');

var CommentList = require('./CommentList-react');
var CommentForm = require('./CommentForm-react');
var HeaderBar = require('./HeaderBar-react');
function sortByDate(comments){
  return comments.sort(function(a,b) { 
    return new Date(b.created).getTime() - new Date(a.created).getTime() 
  });
}
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
  handleSearchInput: function(searchText) {
    this.setState({
      searchText: searchText
    });
  },
  handleDataAlert: function() {
        var alertData = this.state.alertData;
        var comments = this.state.data;
        this.setState({data: sortByDate(comments.concat(alertData))});
        this.state.alertData = [];
  },
  getInitialState: function() {
    return {
      data: [],
      searchText: '',
      alertData:[]
    };
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    socket.on('comment added socket', function(comment){
        var comments = this.state.data;
        this.setState({data: sortByDate(comments.concat([comment]))});
    }.bind(this));

     socket.on('comment error', function(err){
       //do something
    }.bind(this));

    socket.on('comment added other', function(comment){
        var alertData = this.state.alertData;
        this.setState({alertData: alertData.concat([comment])});
    }.bind(this));
    
  },
  render: function() {
    return (
      <div className="container">
        <HeaderBar 
          pageUrl={this.props.pageUrl} 
          data={this.state.data} 
          alertData={this.state.alertData} 
          searchText={this.state.searchText} 
          handleSearchInput={this.handleSearchInput} 
          handleDataAlert={this.handleDataAlert} />
  	  <CommentList data={this.state.data}  searchText={this.state.searchText}  />
        <CommentForm commentUrl={this.props.pageUrl}  onCommentSubmit={this.handleCommentSubmit} />
	</div>
    );
  }
});

module.exports = CommentApp;