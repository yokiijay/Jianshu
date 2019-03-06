import React, { PureComponent, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import { connect } from 'react-redux'
import styled from 'styled-components'
import $ from 'jquery'
import 'jquery.easing'

//Components
import Banner from './Components/Banner'
import Recommend from './Components/Recommend'
import List from './Components/List'


class Home extends PureComponent {
	handleScrollTop(){
		$('html,body').animate({
			scrollTop: 0
		}, 400, 'easeOutSine')
	}

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
				<ScrollTop onClick={this.handleScrollTop.bind(this)}><i className="iconfont">&#xe60f;</i></ScrollTop>
			</Fragment>
		)
	}
}

const ScrollTop = styled.div `
	position: fixed;
	width: 50px;
	height: 50px;
	border: 1px solid #dcdcdc;
	background: white;
	right: 40px;
	bottom: 40px;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all .2s;

	&:hover {
		box-shadow: 0 4px 10px rgba(0,0,0,.1);
		bottom: 45px;
	}
`
const Line = styled.hr `
	border: none;
	border-top: 1px solid #f0f0f0;
	margin: 35px 0 0 0;
`

export default connect()(Home)