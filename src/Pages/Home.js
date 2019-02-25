import React, { Component, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'

//Components
import Banner from '../Components/Banner'

class Home extends Component {
	render(){
		return(
			<Fragment>
				<Flex justifyContent='center'>
					<Box width={625}>
						<Banner />
					</Box>
				</Flex>
			</Fragment>
		)
	}
}

export default Home