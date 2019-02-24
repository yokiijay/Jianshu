import React, { Component, Fragment } from 'react'
import GlobalStyle from './globalStyle'
import { connect } from 'react-redux'

//Components
import Header from './Components/Header'

class App extends Component {
  render(){
    return(
      <Fragment>
	      <GlobalStyle />
        <Header />
      </Fragment>
    )
  }
}

export default connect()(App)