import React, { Component } from 'react';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Container = styled.div`
  background-color: pink;
  margin: 0;
  min-height: 100vh;
`;

const ToDoOrg = styled.div`
  width: 1160px !important;
  background-color: lemonchiffon;
`;

class App extends Component {
  render() {
    return (
      <Container className="row flex-center flex-middle">
        <ToDoOrg className="border border-primary padding-large margin-large no-responsive">
          <h3 className="margin-small">To-Do Organizer</h3>
          <AddTodo />
          <TodoList />
        </ToDoOrg>
      </Container>
    );
  }
}

export default App;
