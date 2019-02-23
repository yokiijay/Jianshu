import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

//Components
import { Flex, Box } from '@rebass/grid'

class Header extends Component {
	render(){
		return(
			<Fragment>
				<HeaderWrapper width={1}>
					<Nav mx='auto' width={[1,null,null,null,1440]} bg={bg}>
						<Brand>
							<a href="https://jianshu.com">
								<img src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt=""/>
							</a>
						</Brand>
						<Navbar mx='auto' ml={-2} width={[1,null,null,960]} bg={'white'}>
							<ul>
								<li className='active'><i className='iconfont'>&#xe748;</i>发现</li>
								<li><i className='iconfont'>&#xe613;</i>关注</li>
								<li><i className='iconfont'>&#xe642;</i>消息</li>
							</ul>
							<div>
								<input type="text" placeholder="搜索" />

							</div>
						</Navbar>
					</Nav>
				</HeaderWrapper>
			</Fragment>
		)
	}
}
export default Header


const Navbar = styled(Box) `
	display: flex;
	ul {
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: stretch;
		height: 100%;
		color: #333333;

		.iconfont {
			font-size: 22px;
			padding-right: 4px;
		}
		li {
			font-size: 17px;
			padding: 15px;
			display: flex;
			align-items: center;
			cursor: pointer;

			&.active {
				color: #EA6F5A;
			}
		}
	}
`
const Brand = styled(Box) `
	&,.a,img {
		height: 100%
	}
`
const Nav = styled(Flex) `
	height: 100%;
`
const HeaderWrapper = styled(Box) `
	height: 56px;
	box-sizing: content-box;
`
const bg = 'rgba(65, 105, 225, 0.1)'
