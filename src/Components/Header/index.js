import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

//Components
import { Flex, Box } from '@rebass/grid'

class Header extends Component {
	render(){
		return(
			<Fragment>
				<HeaderWrapper width={1} bg={bg}>
					<Nav mx='auto' width={[2/3,null,null,1/3,1440]} bg={bg}>
						11
					</Nav>
				</HeaderWrapper>
			</Fragment>
		)
	}
}
export default Header

const Nav = styled(Box) `
	height: 100%;
`
const bg = 'rgba(65, 105, 225, 0.5)'
const HeaderWrapper = styled(Box) `
	height: 56px;
	box-sizing: content-box;
`
