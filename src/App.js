import React from "react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import ListTodos from "./ListTodos";
import CreateTodoForm from "./CreateTodoForm";
Amplify.configure(aws_exports);

const App = () => (
  <div>
    <CreateTodoForm />
    <ListTodos />
  </div>
);

export default withAuthenticator(App, true);
