import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";

const createTodo = `mutation createTodo($content:String! $completed: Boolean!) {
    createTodo(input:{
      content:$content
      completed:$completed
    }){
      id
      content
      completed
    }
  }`;

class CreateTodoForm extends Component {
  state = {
    content: ""
  };

  createTodoMutation = newTodo => {
    console.log("creating a new todo");
    API.graphql(graphqlOperation(createTodo, newTodo)).then(createdTodo =>
      console.log("successfully created a new todo", JSON.stringify(createdTodo))
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const newTodo = {
      ...this.state,
      completed: false
    };
    this.createTodoMutation(newTodo);
  };

  handleTodoContentChange = event => {
    this.setState({ content: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="New Todo"
          value={this.state.content}
          onChange={this.handleTodoContentChange}
        />
        <input type="submit" value="Create!" />
      </form>
    );
  }
}

export default CreateTodoForm;
