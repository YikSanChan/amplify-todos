import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Todos from "./Todos";

const listTodos = `query listTodos {
    listTodos{
      items{
        id
        content
        completed
      }
    }
  }`;

class ListTodos extends Component {
  state = {
    todos: []
  };

  // TODO: refresh todo lists on update.
  componentDidMount() {
    console.log("listing todos");
    API.graphql(graphqlOperation(listTodos)).then(todos =>
      this.setState({ todos: todos.data.listTodos.items })
    );
  }

  render() {
    return <Todos todos={this.state.todos} />;
  }
}

export default ListTodos;
