import React, { Component, Fragment } from 'react'
import GlobalStyle from './globalStyle'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

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

        <Router>
        	<Fragment>
            <Header />
        		<Route exact path='/' component={ Home } />
        		<Route exact path='/home' render={()=><Redirect to='/' />} />
        		<Route exact path='/detail/:id' component={ Detail } />
        	</Fragment>
        </Router>
      </Fragment>
    )
  }
}

export default connect()(App)