import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Slider from 'react-slick'

//Components

class Banner extends Component {

	state = {
		items: [
			'https://upload.jianshu.io/admin_banners/web_images/4613/e96eece16a9e3ae1699dd4bd0002666c571c30f5.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
			'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/1250/h/540',
			'https://upload-images.jianshu.io/upload_images/11715595-079e5c8d1a6edb47.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'
		],
		count: 0
	}
	
	
	render(){
		const settings = {
			infinite: true,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			afterChange: current => this.setState({ count: current })
		};
		return(
			<Fragment>
				<BannerWrapper width={1}>
					<SliderContainer {...settings} ref={c=>this.slider=c}>
						{
							this.state.items.map( (val,index)=>(
								<SliderItem onClick={()=>{console.log('sliderItem')}} src={val} key={val}></SliderItem>
							) )
						}
					</SliderContainer>
					<ul className='arrow'>
						<li onClick={()=>this.slider.slickPrev()}><i className="iconfont">&#xe7ed;</i></li>
						<li onClick={()=>this.slider.slickNext()}><i className="iconfont">&#xe7eb;</i></li>
					</ul>
					<ul className="pagination">
						{
							this.state.items.map( (val,index)=>(
								this.state.count === index ? <li onClick={()=>console.log(1)} key={val} className="current"></li> : <li onClick={()=>this.slider.slickGoTo(index)} key={val}></li>
							) )
						}
					</ul>
				</BannerWrapper>
			</Fragment>
		)
	}
}
const SliderContainer = styled(Slider) `
	position: absolute;
	width: 100%;
`
const SliderItem = styled.div `
	height: 270px;
	background: royalblue;
	background-image: url(${ props=>props.src });
	background-size: cover;
	background-position: center;
	cursor: pointer;
`
const BannerWrapper = styled(Flex) `
	position: relative;
	height: 270px;
	border-radius: 6px;
	overflow: hidden;

	.arrow {

		li {
			padding: 16px 12px;
			background: rgba(0,0,0,.1);
			color: rgba(255,255,255,.4);
			cursor: pointer;
			transition: .2s;

			&:first-child{
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-top-right-radius: 6px;
				border-bottom-right-radius: 6px;
			}
			&:last-child{
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				border-top-left-radius: 6px;
				border-bottom-left-radius: 6px;
			}
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
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);

		li {
			display: inline-block;
			width: 20px;
			height: 4px;
			background: rgba(0,0,0,.1);
			margin: 10px 2px;
			/* cursor: pointer; */

			&.current {
				background: rgba(0,0,0,.4);
			}
		}
	}
`

export default Banner