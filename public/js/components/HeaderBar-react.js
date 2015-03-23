var React = require('react');

var SearchInput = require('./SearchInput-react');
var HeaderBar = React.createClass({
  onDataAlert: function(e) {
    e.preventDefault();
    this.props.handleDataAlert();
  },
  render: function() {
    var classString = '';
    if (this.props.alertData.length > 0) {
      classString = 'comment-header-alert';
    }
    else{
      classString = 'hide';
    }
    return (
      <div className="comment-header">
        <div className="comment-header-info">
          <p>Comments for page {this.props.pageUrl} <span className="comment-badge">{this.props.data.length}</span></p>
        </div>
        <div className="comment-header-search">
          <SearchInput  searchText={this.props.searchText} onSearchInput={this.props.handleSearchInput} />
        </div>
        <div className={classString}>
          <a href="" className="comment-badge-alert" onClick={this.onDataAlert}>{this.props.alertData.length}</a>
        </div>
      </div>
    );
    }
});

module.exports = HeaderBar;