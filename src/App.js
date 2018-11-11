import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);

const listTodos = `query listTodos {
  listTodos{
    items{
      id
      content
      completed
    }
  }
}`

const createTodo = `mutation createTodo($content:String! $completed: Boolean!) {
  createTodo(input:{
    content:$content
    completed:$completed
  }){
    id
    content
    completed
  }
}`

class App extends Component {

  createTodoMutation = async () => {
    const newTodo = {
      content: 'Party tonight!',
      completed: false
    };
    
    const newEvent = await API.graphql(graphqlOperation(createTodo, newTodo));
    alert(JSON.stringify(newEvent));
  }

  listTodosQuery = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(listTodos));
    alert(JSON.stringify(allTodos));
  }

  render() {
    return (
      <div>
        <button onClick={this.listTodosQuery}>List Todos</button>
        <button onClick={this.createTodoMutation}>Create Todo</button>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
