import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import posed  from 'react-pose'

//Components
import { Flex, Box } from '@rebass/grid'

class Header extends Component {
	state = {
		focused: false,
	}

	handleFocus = ()=>{
		this.setState((prevState)=>(
			{
				focused: true
			}
		),()=>{
			console.log(this.state.focused)
		})
	}
	handleBlur = ()=>{
		this.setState((prevState)=>(
			{
				focused: false
			}
		),()=>{
			console.log(this.state.focused)
		})
	}

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
								<SearchBar width={[300]}>
										<SearchBarPosed px={3} pose={ this.state.focused ? 'focused' : 'blured' }>
											<input onFocus={ this.handleFocus } onBlur={ this.handleBlur } type="text" placeholder="搜索" />
											<i className={ this.state.focused ? 'iconfont focused' : 'iconfont' }>&#xe60d;</i>
										</SearchBarPosed>
								</SearchBar>
								<SearchInfo width={[250]}>
									<SearchInfoTitle>
										热门搜索
										<SearchInfoSwitch><SpinAnimated className="iconfont">&#xe7ea;</SpinAnimated>换一批</SearchInfoSwitch>
									</SearchInfoTitle>
								</SearchInfo>
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
let countSpin = 0;
const SpinAnimated = posed.i({
	pressable: true,
	press: {
		rotate: 180,
		transition: ()=>{
			countSpin++
			return {
				to: 180*countSpin
			}
		}
	}
})
const SearchInfoSwitch = styled.div `
	font-size: 13px;
	cursor: pointer;
	user-select: none;

	i {
		font-size: 13px;
		padding: 4px;
		display: inline-block;
	}
`
const SearchInfoTitle = styled(Flex) `
	justify-content: space-between;
	margin-bottom: 10px;
	color: #969696;
	font-size: 14px;
`
const SearchInfo = styled(Box) `
	position: absolute;
	top: 56px;
	padding: 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	border-radius: 4px;
	transform-origin: 30px 0;

	&::before{
		content: '';
		position: absolute;
		left: 27px;
		width: 10px;
		height: 10px;
		transform: rotate(45deg);
		top: -5px;
		background: white;
	}
`
const SearchBarPose = posed(Flex)({
	focused: { width: '90%', transition: {
		type: 'spring', stiffness: 400, damping: 20
	} }, 
	blured: { width: '70%', transition: { ease:'backOut', duration: 400 } }
}) 
const SearchBarPosed = styled(SearchBarPose) `
	height: 38px;
	border: none;
	background: #eeeeee;
	border-radius: 40px;
	align-items: center;
	align-self: center;

	input {
		width: 100%; //input有默认宽度所以必须给个宽度或者min-width: 0;解决
		border: none;
		background: none;
		font-size: 14px;

		&::placeholder {
			color: #999999;
		}
	}
	i {
		text-align: center;
		margin-left: auto;
		font-size: 14px;
		color: #969696;
		margin-right: -10px;
		padding: 7px;
		transition: all .1s ease-out;
		border-radius: 50%;

		&.focused {
			background: #969696;
			color: white;
		}
	}
`
const SearchBar = styled(Flex) `
`
const Search = styled(Flex) `
	position: relative;
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
