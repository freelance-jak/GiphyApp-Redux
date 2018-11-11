import React from "react";

class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchText}
            onChange={this.handleChange}
          />

          <input type="submit" value={this.props.buttonText} />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const searchText = event.target.value;
    this.setState({ searchText: searchText });
  };

  handleSubmit = event => {
    const { getUrls } = this.props;
    event.preventDefault();
    getUrls(this.state.searchText);
    this.setState({ searchText: "" });
  };
}

export default SearchArea;
