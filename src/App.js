import './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import About_us from './components/About_us'
import Nav from './components/Nav'
import Shop from './components/Shop'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ItemDetail from './components/ItemDetail'


export class App extends Component {
  static propTypes = {

  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About_us}/>
          <Route path='/shop' component={Shop} exact/>
          <Route path='/shop/:id' component={ItemDetail}/>
        </div>
      </Router>
    );
  }
}


const Home=()=>(
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App

