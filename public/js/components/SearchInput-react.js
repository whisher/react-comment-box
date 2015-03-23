var React = require('react');

var SearchInput = React.createClass({
    handleChange: function() {
        this.props.onSearchInput(
            this.refs.searchInput.getDOMNode().value
        );
    },
    handleSubmit:function(e){
        e.preventDefault();
    },
    render: function() {
        return (
            <form className="comment-form-search" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by author"
                        value={this.props.searchText}
                        ref="searchInput"
                        onChange={this.handleChange} />
                </div>   
            </form>
        );
    }
});

module.exports = SearchInput;