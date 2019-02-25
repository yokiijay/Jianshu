import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import posed from 'react-pose'

//Components

class Banner extends Component {
	state = {
		items: [
			'https://upload.jianshu.io/admin_banners/web_images/4613/e96eece16a9e3ae1699dd4bd0002666c571c30f5.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
			'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/1250/h/540'
		],
		currentIndex: 0,
		action: 'prev',
		el: [1,2,3,4]
	}

	handlePrev = ()=>{
		console.log()
	}

	render(){
		return(
			<Fragment>
				<BannerWrapper width={1}>
					<BannerItemWrapper>
						{
							this.state.items.map( (val,index)=>	<BannerItem pose={ this.state.action } index key={index} src={val} /> )
						}
					</BannerItemWrapper>
					{/* <BannerItem src='https://upload.jianshu.io/admin_banners/web_images/4613/e96eece16a9e3ae1699dd4bd0002666c571c30f5.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
					<BannerItem src='https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' /> */}
					<ul className='arrow'>
						<li onClick={this.handlePrev}><i className="iconfont">&#xe7ed;</i></li>
						<li><i className="iconfont">&#xe7eb;</i></li>
					</ul>
					<ul className="pagination">
						<li className='current'></li>
						<li></li>
					</ul>
				</BannerWrapper>
				<AnimeUl>
					{
						this.state.el.map(()=>(
							
						))
					}
				</AnimeUl>
			</Fragment>
		)
	}

	handleClick = ()=>{
		this.setState( (prevState)=>({
			currentIndex: prevState.currentIndex+1,
			action: 'next'
		}),()=>{
			console.log(1)
		} )
	}
}

const AnimeStyled = styled.li `
	width: 200px;
	height: 200px;
	background: royalblue;
	margin: 5px;
	float: left;
`
const AnimeUl = posed.ul()
const AnimeLi = posed(AnimeStyled)()

const BannerItemWrapper = styled(Box) `
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	/* overflow: hidden; */
`
const BannerItemPosed = posed.div({
	previous: {
		left: props=>props.index*100+'%'
	},
	next: {
		left: props=>(props.index-1)*100+'%'
	}
})
const BannerItem = styled(BannerItemPosed) `
	position: absolute;
	left: ${props=>props.index*100+'%'};
	z-index: -1;
	width: 100%;
	height: 100%;
	background-image: url(${ props=>props.src });
	background-size: cover;
	background-position: center;
`
const BannerWrapper = styled(Flex) `
	position: relative;
	height: 270px;
	cursor: pointer;

	.arrow {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		li {
			padding: 16px 12px;
			background: rgba(0,0,0,.1);
			color: rgba(255,255,255,.4);
			cursor: pointer;
			transition: .2s;

			&:first-child{border-top-right-radius: 6px;border-bottom-right-radius: 6px;}
			&:last-child{border-top-left-radius: 6px;border-bottom-left-radius: 6px;}
			&:hover {
				background: rgba(0,0,0,.4) !important;
			}
		}
	}

	&:hover .arrow li {
		background: rgba(0,0,0,.2);
		color: rgb(255,255,255);
	}

	.pagination {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: flex-end;

		li {
			width: 20px;
			height: 4px;
			background: rgba(0,0,0,.1);
			margin: 10px 2px;

			&.current {
				background: rgba(0,0,0,.4);
			}
		}
	}
`

export default Banner