import styled from 'styled-components'
import posed from 'react-pose'

export const HeaderWrapper = styled.div`
	height: 56px;
	width: 100%;
	border-bottom: 1px solid #f0f0f0;
	text-align: center;
	box-sizing: border-box;
`

export const LogoImg = styled.img.attrs({
	src: 'https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png',

})`
	height: inherit;	
`

export const Logo = styled.a.attrs({
	href: '/',

})`
	height: 56px;
	display: inline-block;
	float: left
`

export const Nav = styled.div `
	width: 960px;
	height: 100%;
	display: inline-block;
	padding-right: 70px;
	box-sizing: border-box;
`

export const NavItem = styled.div `
	line-height: 26px;
	padding: 15px;
	font-size: 17px;
	cursor: pointer;

	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`

export const SearchWrapper = styled.div `
	float: left;
	position: relative;
	.iconfont.sr {
		position: absolute;
		right: 5px;
		bottom: 4px;
		width: 30px;
		height: 30px;
		line-height: 30px;
		color: #999;
		&.focused {
			background: #999;
			border-radius: 50%;
			color: white;
		}
	}
	.expand-enter {
		width: 160px;
		transition: all .2s ease-out;
	}
	.expand-enter-active {
		width: 200px;
	}
	.expand-exit {
		transition: all .4s ease-out;
	}
	.expand-exit-active {
		width: 160px;
	}
`

export const NavSearchAnimated = posed.input({
	focused: { width: '200px', transition: {type:'spring', stiffness: 400,damping: 20} },
	blured: { width: '160px', transition: {ease:'backOut', duration: 400} }
})

export const NavSearch = styled(NavSearchAnimated).attrs({
	placeholder: '搜索'
}) `
	width: 160px;
	height: 38px;
	margin-top: 8px;
	margin-left: 20px;
	padding: 0 30px 0 20px;
	color: #666;
	box-sizing: border-box;
	border: none;
	outline-style: none;
	border-radius: 19px;
	background: #eeeeee;
	float: left;
	font-size: 14px;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 200px;
	}
`

export const SearchInfoAnimated = posed.div({
	show: { scale: 1, opacity: 1, transition: {
		scale: { ease: 'backOut' },
		opacity: { type: 'tween', from: .8, to: 1 }
	} },
	hide: { scale: 0, opacity: 0, transition: {
		scale: { ease: 'backOut' },
		opacity: { type: 'tween', from: .2, to: 0 }
	} },
})

export const SearchInfo = styled(SearchInfoAnimated) `
	position: absolute;
	left: 20px;
	top: 56px;
	width: 210px;
	transform-origin: 30px 0;
	padding: 20px 20px 10px 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	border-radius: 4px;
	display: flex;
	flex-wrap: wrap;
	background: white;

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

export const SearchInfoTitle = styled.div `
	width: 210px;
	height: 20px;
	margin-bottom: 10px;
	color: #969696;
	font-size: 14px;
	display: flex;
	flex-wrap: wrap;
	// justify-content: space-between;
`

export const SearchInfoSwitch = styled.a `
	font-size: 13px;
	margin-left: auto;
	color: #969696;
	cursor: pointer;
	user-select: none;
	
	.iconfont{
		font-size: 8px;
		padding: 4px;
	}
	&:hover{
		color: black;
	}
`

export const SearchInfoItem = styled.a `
	padding: 2px 6px;
	color: #787878 ;
	font-size: 12px;
	border: 1px solid #ddd;
	border-radius: 3px;
	margin: 6px 10px 6px 0;

	&:hover {
		color: black;
		border-color: rgba(0,0,0,.4);
	}
`

let countSpin = 0;
export const SpinAnimated = posed.i({
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

export const Spin = styled(SpinAnimated) `
	display: inline-block;
`

export const Addition = styled.div `
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`

export const Button = styled.button `
	// float: right;
	margin-top: 8px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ea6f5a;
	&.reg {
		color: #ea6f5a;
	}
	&.writting {
		font-size: 14px;
		color: white;
		background: #ea6f5a;
	}
	&.writting .iconfont {
		padding-right: 4px;
	}
`