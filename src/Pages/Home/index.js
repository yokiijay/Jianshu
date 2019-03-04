import React, { Component, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import { connect } from 'react-redux'
import styled from 'styled-components'

//Components
import Banner from './Components/Banner'
import Recommend from './Components/Recommend'
import List from './Components/List'


class Home extends Component {
	render(){
		return(
			<Fragment>
				<Flex py={30} justifyContent='center'>
					<Box  width={[1,1/2,625]}>
						<Banner />
						<Line />
						<List />
					</Box>
					<Box ml={40} width={[0,280]}>
						<Recommend />
					</Box>
				</Flex>
			</Fragment>
		)
	}
}

const Line = styled.hr `
	border: none;
	border-top: 1px solid #f0f0f0;
	margin: 35px 0 0 0;
`

export default connect()(Home)