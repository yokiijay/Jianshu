import React, { Component, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'

//Components
import {
	BannerItem,

} from '../style'

class Banner extends Component {
	render(){
		return(
			<Fragment>
				<Box {...this.props} >
					<BannerItem href='/' src='https://upload.jianshu.io/admin_banners/web_images/4612/1e4eeb1b277034cca932f5e60e46d14b0629073b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'>
					</BannerItem>
				</Box>
			</Fragment>
		)
	}
}

export default Banner