import React, { Component, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import { connect } from 'react-redux'

//Components
import Banner from './Components/Banner'

class Home extends Component {
	render(){
		return(
			<Fragment>
				<Flex justifyContent='center'>
					<Box width={[1,1/2,625]}>
						<Banner />
					</Box>
				</Flex>
			</Fragment>
		)
	}
}

export default connect()(Home)