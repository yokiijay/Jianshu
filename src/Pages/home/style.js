import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
// import { Image } from '@rebass/grid'

export const Container = styled(Box).attrs({
	mx: 'auto',
}) `
	max-width: 976px;
`
export const BannerItem = styled.a `
	height: 270px;
	border-radius: ${ (props)=>props.borderRadius || 8 }px;
	background-image: url(${ (props)=>props.src || 'https://via.placeholder.com/150' });
	background-size: cover;
	background-position: center;
	display: block;
`

export const Line = styled.hr `
	border: none;
	border-top: 1px solid #f0f0f0;
	margin: 28px 0 5px 0;
`

export const ListWrapper = styled.ul `

`

export const ListItem = styled.li `
	border-bottom: 1px solid #f0f0f0;
	padding: 15px 0 20px 0;
	margin-bottom: 5px;

	.a{
		display: block;
		// font-size: 18px;
		// font-weight: 700;
		&:link{color:#333}
		&:visited{color:#333}
		margin-bottom: 10px;
	}
	.p{
		color: #969696;
		font-size: 13px;
		line-height: 24px;
		margin-bottom: 10px;
	}
	i{
		font-size: 12px;
	}
	.meta a{
		&:hover{color:#767878;}
	}
`

export const ListItemImg = styled.a `
	height: 100px;
	border-radius: ${ (props)=>props.borderRadius || 8 }px;
	background-image: url(${ (props)=>props.src || 'https://via.placeholder.com/150' });
	background-size: cover;
	background-position: center;
	border: 1px solid #f0f0f0;
	display: block;
`