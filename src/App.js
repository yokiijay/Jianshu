import React, { Component, Fragment } from 'react'
import GlobalStyle from './globalStyle'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'

//Components
import Header from './Components/Header'

//Pages
import Home from './Pages/Home'
import Detail from './Pages/Detail'

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