import React, { Component } from 'react'
import './App.css';
import SideBar from './components/Side BAr/Sidebar'
import Main from './components/Main/Main'


class App extends Component {
  render() {
    return (
      <div className="wrapper">
       <SideBar id="sidenav" className="sidenav-wrapper"></SideBar>
       <Main  id="main" className="main-page active"></Main>
      </div>
    )
  }
}

export default App
