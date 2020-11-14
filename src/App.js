// import Navbar from './components/Navbar/Navbar';
// import Tourlist from './components/Tourlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
//showin vs code guthubts
export default class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: 'wake up',
      },
      {
        id: 2,
        title: 'break fast',
      },
    ],
    id: uuidv4(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => {
    console.log('====================================');
    console.log('handleChange');
    console.log('====================================');
  };
  handleSubmit = (e) => {
    console.log('====================================');
    console.log('handleSubmit');
    console.log('====================================');
  };
  clearList = () => {
    console.log('====================================');
    console.log('clearList');
    console.log('====================================');
  };
  handleDelete = (id) => {
    console.log('====================================');
    console.log('handleDelete', `${id}`);
    console.log('====================================');
  };
  handleEdit = (id) => {
    console.log('====================================');
    console.log('handleEdit', `${id}`);
    console.log('====================================');
  };

  render() {
    console.log('====================================');
    console.log(this.state);
    console.log('====================================');
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
            </div>
          </div>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}
