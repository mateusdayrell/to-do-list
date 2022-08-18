import React, { Component } from "react";
import './Main.css'
import Form from './Form/index'
import List from './List/index'

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if (!tasks) return

    this.setState({ tasks })
  }

  componentDidUpdate(prevProps, prevState) {
    const {tasks} = this.state

    if (tasks === prevState.tasks) return

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {tasks, index} = this.state
    let newTask = this.state.newTask.trim()

    const myTasks = [ ...tasks];

    if(index === -1){
      this.setState({
        tasks: [...myTasks, newTask],
        newTask: ''
      })
    } else {
      myTasks[index] = newTask

      this.setState({
        tasks: [...myTasks],
        index: -1,
        newTask: ''
      })
    }
    
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTask = [...tasks];
    newTask.splice(index, 1);

    this.setState({
      tasks: [...newTask],
    });
  }

  render() {
    const { newTask, tasks, index } = this.state
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
          index={index}
        />
        
        <List
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />
      </div>
    )
  }
}
