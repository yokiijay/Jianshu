import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

//Components
import { Flex, Box } from '@rebass/grid'

class Header extends Component {
	render(){
		return(
			<Fragment>
				<HeaderWrapper width={1}>
					<Nav mx='auto' width={[1,null,null,null,1440]} bg={'white'}>
						<Brand width={[240,1/6]}>
							<a href="https://jianshu.com">
								<img src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt=""/>
							</a>
						</Brand>
						<Navbar width={[1,null,null,945]} bg={'white'}>
							<ul>
								<li className='active'><i className='iconfont'>&#xe642;</i>发现</li>
								<li><i className='iconfont'>&#xe748;</i>关注</li>
								<li><i className='iconfont'>&#xe613;</i>消息</li>
							</ul>
							<Search pl={4}>
								<SearchBar px={3} width={[240]}>
									<input type="text" placeholder="搜索" />
									<i className="iconfont">&#xe60d;</i>
								</SearchBar>
							</Search>
						</Navbar>
						<Toolbar>
							<i className='iconfont aa'>&#xe636;</i>
							<Menu>
								<Info>
									<a className='avatar' href="#">
										<img src="https://upload.jianshu.io/users/upload_avatars/6253669/6c55cdbc-6d12-49b1-b82a-6e4cccc81681?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" alt=""/>
									</a>
									<a className='dropdown' href="#"></a>
								</Info>
							</Menu>
							<a className='btn-write' href="#"><i className="iconfont">&#xe624;</i>写文章</a>
						</Toolbar>
					</Nav>
				</HeaderWrapper>
			</Fragment>
		)
	}
}
export default Header

const Info = styled(Flex) `
	width: 88px;
	justify-content: center;
	align-items: center;

	.avatar {
		display: flex;
		align-items: center;
	}
	.avatar img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #f5f5f5;
	}
	.dropdown {
		padding-left: 8px;
		padding-right: 8px;
	}
	.dropdown::before {
		content: '';
		display: block;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #999;
	}
`
const Menu = styled(Box) `

`
const Toolbar = styled(Flex) `
	height: 100%;
	align-items: center;

	.aa {
		width: 49px;
		text-align: center;
		font-size: 24px;
		color: #969696;
		cursor: pointer;
	}
	.btn-write {
		display: block;
		width: 100px;
		height: 40px;
		line-height: 40px;
		vertical-align: middle;
		text-align: center;
		background: #ea6f5a;
		color: white;
		border-radius: 20px;
		font-size: 15px;

		i { padding-right: 4px; }
	}
`
const SearchBar = styled(Flex) `
	height: 38px;
	border: none;
	background: #eeeeee;
	border-radius: 40px;
	align-items: center;
	align-self: center;

	input {
		border: none;
		background: none;
		font-size: 14px;
		padding-left: 4px;

		&::placeholder {
			color: #999999;
		}
	}
	i {
		margin-left: auto;
		font-size: 16px;
		color: #969696;
	}
`
const Search = styled(Flex) `
`
const Navbar = styled(Flex) `
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
			transition: .2s ease-out;

			&.active {
				color: #EA6F5A;
			}
			&:hover {
				transform: scale(.9);
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
	border-bottom: 1px solid #eeeeee;
`
const bg = 'rgba(65, 105, 225, 0.1)'
