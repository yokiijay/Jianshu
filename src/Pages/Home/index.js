import React, { Component, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import { connect } from 'react-redux'

//Components
import Banner from './Components/Banner'
import Recommend from './Components/Recommend'


class Home extends Component {
	render(){
		return(
			<Fragment>
				<Flex py={30} justifyContent='center'>
					<Box  width={[1,1/2,625]}>
						<Banner />
					</Box>
					<Box ml={40} width={[0,280]}>
						<Recommend />
					</Box>
				</Flex>
			</Fragment>
		)
	}
}

export default connect()(Home)