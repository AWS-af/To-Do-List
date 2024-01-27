import React from 'react'
import './app.scss'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className='app'>
      <ToDoList />
    </div>
  )
}

export default App