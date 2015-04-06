var React = require('react');
var classNames = require('classnames');

var SearchInput = require('./SearchInput-react');
var HeaderBar = React.createClass({
  onDataAlert: function(e) {
    e.preventDefault();
    this.props.handleDataAlert();
  },
  render: function() {
    var commentBadgeClass = classNames(
      {'comment-header-alert'    : this.props.alertData.length > 0 },
      {'hide'                    : this.props.alertData.length < 1});
    return (
      <div className="comment-header">
        <div className="comment-header-info">
          <p>Comments for page {this.props.pageUrl} <span className="comment-badge">{this.props.data.length}</span></p>
        </div>
        <div className="comment-header-search">
          <SearchInput  searchText={this.props.searchText} onSearchInput={this.props.handleSearchInput} />
        </div>
        <div className={commentBadgeClass}>
          <a href="" className="comment-badge-alert" onClick={this.onDataAlert}>{this.props.alertData.length}</a>
        </div>
      </div>
    );
    }
});

module.exports = HeaderBar;