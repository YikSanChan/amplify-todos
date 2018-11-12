import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Todos from "./Todos";

const searchTodos = `query searchTodos($search: String){
    searchTodos(filter:{content:{match:$search}}){
      items{
        id
        content
        completed
      }
    }
  }`;

class SearchTodos extends Component {
  state = {
    searchValue: "",
    searchResults: []
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const search = { search: this.state.searchValue };
    API.graphql(graphqlOperation(searchTodos, search))
      .then(response => response.data.searchTodos.items)
      .then(match => this.setState({ searchResults: match }));
  };

  handleSearchValueChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Search value"
            value={this.state.searchValue}
            onChange={this.handleSearchValueChange}
          />
          <input type="submit" value="Search!" />
        </form>
        <Todos todos={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchTodos;
