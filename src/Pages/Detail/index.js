import React, { PureComponent } from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

//Components

class Detail extends PureComponent {
	render(){
		return(
			<Flex py={30} justifyContent='center'>
				<Box width={[620]}>
					<Title>
						<h2>{this.props.title}</h2>
						<UserInfo py={4}>
							<Avatar src='https://i.postimg.cc/NM3VfDxf/me.jpg' />
							<Info ml={2} py={1} flexDirection='column'>
								<div>
									<div className="username">Yokiijay</div>
									<span className="follow">+ 关注</span>
								</div>
								<div className="infoDetail">
									<span className="diamond"><i className="iconfont">&#xe675;</i>1.4</span>
									<span className="date">2019.03.04 17:38</span>
									<span className="letters">字数 1339</span>
									<span className="read">阅读 135</span>
									<span className="comments">评论 2</span>
									<span className="liked">喜欢 7</span>
								</div>
							</Info>
						</UserInfo>
					</Title>
					<Content width={1} dangerouslySetInnerHTML={{__html:
						"<img src='https://upload-images.jianshu.io/upload_images/5344101-eaa76e127ae78efc.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp' alt='img' />"+
						"<p>Raspberry Pi** 是一款基于 ARM 的单板计算机，默认运行一款称为 Raspbian 的操作系统。Raspberry Pi 「树莓派」由注册于英国的慈善组织“Raspberry Pi 基金会”开发和维护，其设计初衷是用来教孩子们学习程序设计的低成本计算机。而现在它已经可以用来做很多有趣的事情。这里推荐了2019年在 Raspberry Pi 「树莓派」上运行的 10 个 操作系统希望大家喜欢。</p>"
					}} />
				</Box>
			</Flex>
		)
	}

	componentDidMount(){
		this.props.loadDetail(this.props.match.params.id)
	}
}
const Content = styled(Box) `
	img {
		width: 700px;
		margin-left: -40px;
		padding-bottom: 25px;
	}
	p {
		color: #2f2f2f;
		line-height: 1.8em;
	}
`
const Info = styled(Flex) `
	justify-content: space-between;
	.username {
		font-size: 16px;
		color: #333333;
		display: inline;
		cursor: pointer;
	}
	.follow {
		padding: 4px 10px 4px 8px;
		background: #42c02e;
		font-size: 12px;
		border-radius: 40px;
		color: white;
		margin-left: 6px;
		cursor: pointer;
	}
	.infoDetail {
		font-size: 12px;
		color: #969696;
		span {
			padding-right: 10px;
		}
		.diamond {
			color: #ea6f5a;
		}
		.iconfont { vertical-align: -10%; }
	}
`
const Avatar = styled.div `
	width: 48px;
	height: 48px;
	background-image: url(${props=>props.src});
	background-size: cover;
	background-position: center;
	border-radius: 50px;
	border: 1px solid #ddd;
`
const UserInfo = styled(Flex) `

`
const Title = styled(Box) `
	width: 100%;
	h2 {
		font-size: 34px;
		color: #333333;
		font-weight: 700;
	}
`

const mapState = (state, props)=>({
	title: state.getIn(['detail','title'])
})
const mapDispatch = (dispatch, props)=>({
	loadDetail(id){
		const getDetail = ()=>(
			(dispatch, getState)=>{
				axios.get(`/api/details.json?id=${id}`)
				.then(res=>{
					const action={ type: 'LOAD_DETAIL', title: res.data[id].title }
					dispatch(action)
				})
			}
		)
		dispatch(getDetail())
	},
})

export default connect(mapState,mapDispatch)(withRouter(Detail))