import React, { Component, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'

//Components
import {
	Container,
	Line,

} from './style'
import Banner from './Components/Banner'
import List from './Components/List.js'


class Home extends Component {
	render(){
		return(
			<Fragment>
				<Container width={1} pt={4} px={2}>
					<Flex justifyContent='space-between' flexWrap='wrap'>

						{/* 左侧的 */}
						<Box px={2} width={[1,1/2,641]}>
							<Banner />
							<Line />
							<List />
						</Box>

						{/* 右侧的 */}
						<Box px={2} width={[0,1/2,296]}>
							<Banner />
						</Box>

					</Flex>
				</Container>
			</Fragment>
		)
	}
}

export default Home