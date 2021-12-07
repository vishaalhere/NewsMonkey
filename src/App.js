import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light'
    };
  }
  toggleMode = ()=>{
    if(this.state.mode === 'light'){
      this.setState({mode:'dark'});
      document.body.style.backgroundColor = 'black';
    }
    else{
      this.setState({mode:'light'});
      document.body.style.backgroundColor = 'white';
    }
    return this.state.mode;
  }
  pageSize = 6;
  country = 'us';
  render() {
    // toggleMode = ()=> {
    //   if(this.state.mode === 'light'){
    //     this.setState({mode:'dark'});
    //   }
    //   else{
    //     this.setState({mode:'light'});
    //   }
    //   return this.state.mode;
    // }
    return (
      <div>
        <Router>
          <Navbar toggleMode={this.toggleMode} mode={this.state.mode}/>
          <Routes>
            <Route exact path="/" element={  <News mode={this.state.mode} toggleMode={this.toggleMode} key = 'general' pageSize={this.pageSize} country={this.country} category = 'general' />}  ></Route>
            <Route exact path="/business" element={<News mode={this.state.mode} toggleMode={this.toggleMode} key = 'business' pageSize={this.pageSize} country={this.country} category = 'business' />}  ></Route>
            <Route exact path="/entertainment" element={<News mode={this.state.mode} toggleMode={this.toggleMode} key = 'entertainment' pageSize={this.pageSize} country={this.country} category = 'entertainment' />}></Route>
            <Route exact path="/general" element={<News mode={this.state.mode} toggleMode={this.toggleMode} key = 'general' pageSize={this.pageSize} country={this.country} category = 'general' />}></Route>
            <Route exact path="/health" element={<News mode={this.state.mode} toggleMode={this.toggleMode} key = 'health' pageSize={this.pageSize} country={this.country} category = 'health' />}></Route>
            <Route exact path="/science" element={<News mode={this.state.mode} toggleMode={this.toggleMode} key = 'science' pageSize={this.pageSize} country={this.country} category = 'science' />}></Route>
            <Route exact path="/sports" element={<News mode={this.state.mode} toggleMode={this.toggleMode} key = 'sports' pageSize={this.pageSize} country={this.country} category = 'sports' />}></Route>
            <Route exact path="/technology" element={<News mode={this.state.mode} toggleMode={this.toggleMode} key = 'technology'  pageSize={this.pageSize} country={this.country} category = 'technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

