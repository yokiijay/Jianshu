import React, { Component, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import { Text, Link } from 'rebass'

//Components
import {
	ListWrapper,
	ListItem,
	ListItemImg,
} from '../style'

class List extends Component {
	render(){
		return(
			<Fragment>
				<Box {...this.props}>
					<ListWrapper>
						<ListItem>
							<Flex justifyContent='space-between' flexWrap='wrap'>
								<Box py={2} width={[1,2/3,458]}>
									<a className='a' href="/"><Text fontSize={[4,3]} fontWeight='700'>只有程序员才能看懂的趣图，第二个我就忍不住了哈哈哈哈!</Text></a>
									<Text className='p'>1.只改了一行代码。。。 2.客户期望的效果VS实际支付的结果 3..iPhone X滚动通过刘海的另一种解决方案 如果有对java感兴趣的同...</Text >
									<Flex className='meta'>
										<Link pr={10} href='/' color='#b4b4b4'><Text fontSize={12}>胖胖爱Java</Text></Link>
										<Link pr={10} href='/' color='#b4b4b4'><Text fontSize={12}><i className='iconfont'>&#xe7ec;</i> 0</Text></Link>
										<Text fontSize={12} color='#b4b4b4'><i className='iconfont'>&#xe79d;</i> 3</Text>
									</Flex>
								</Box>
								<Box py={2} width={[1,1/3,150]}>
									<ListItemImg src='https://upload-images.jianshu.io/upload_images/15369823-e5cc8f8c9a7a87ca?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240' />
								</Box>
							</Flex>
						</ListItem>
					</ListWrapper>
				</Box>
			</Fragment>
		)
	}
}

export default List