import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import GlobalStyle from './globalStyle'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'

//Components
import Header from './Common/Header'

//Pages
import Home from './Pages/home'
import Detail from './Pages/detail'


class App extends Component {
  render(){
    return(
      <Fragment>
        <GlobalStyle />
        <Header />

        <Router>
          <Fragment>
            <Route exact path='/' component={ Home } />
            <Route exact path='/home' render={()=><Redirect to='/' />} />
            <Route exact path='/detail' component={ Detail } />
          </Fragment>
        </Router>

      </Fragment>
    )
  }
}

export default connect()(App)