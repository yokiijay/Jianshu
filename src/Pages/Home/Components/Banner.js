import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Slider from 'react-slick'
import { connect } from 'react-redux'

//Components

let slides = null
const Banner = ({settings,...props})=>{
	settings = {
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: current => props.countUpdate(current)
	};
	return(
		<Fragment>
			<BannerWrapper width={1}>
				<SliderContainer {...settings} ref={c=>props.slider=c}>
					{
						props.items.map( (val,index)=>(
							<SliderItem src={val} key={val}></SliderItem>
						) )
					}
				</SliderContainer>
				<ul className='arrow'>
					<li onClick={()=>props.slider.slickPrev()}><i className="iconfont">&#xe7ed;</i></li>
					<li onClick={()=>props.slider.slickNext()}><i className="iconfont">&#xe7eb;</i></li>
				</ul>
				<ul className="pagination">
					{
						props.items.map( (val,index)=>(
							props.count === index ? <li onClick={()=>console.log(1)} key={val} className="current"></li> : <li onClick={()=>props.slider.slickGoTo(index)} key={val}></li>
						) )
					}
				</ul>
			</BannerWrapper>
		</Fragment>
	)
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

const mapState = (state, props)=>({
	items: state.getIn(['banner','items']),
	count: state.getIn(['banner','count'])
})

const mapDispatch = (dispatch, props)=>({
	countUpdate(current){
		const action={ type: 'COUNT_UPDATE', current }
		dispatch(action)
	}
})

export default connect(mapState,mapDispatch)(Banner)