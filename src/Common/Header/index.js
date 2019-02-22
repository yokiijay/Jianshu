import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { fromJS } from 'immutable'

//Components
import {
	HeaderWrapper,
	LogoImg,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	Spin,
	Addition,
	Button,
} from './style'


const Header = (props)=> (
	<Fragment>
		<HeaderWrapper>
			<Logo>
				<LogoImg />
			</Logo>
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				<NavItem className='right'>登录</NavItem>
				<NavItem className='right'>
					<i className='iconfont'>&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<NavSearch
						onFocus={props.handleOnFocus}
						onBlur={props.handleOnBlur}
						pose={props.searchOnFocus ? 'focused' : 'blured'}
						tabIndex='1'
					/>
					<i className={props.searchOnFocus ? 'focused iconfont sr' : 'iconfont sr'}>&#xe62b;</i>
					<SearchInfo
						onMouseEnter={props.handleMouseEnter}
						onMouseLeave={props.handleMouseLeave}
						pose={ props.searchOnFocus||props.mouseIn ? 'show' : 'hide' }
					>
						<SearchInfoTitle>
							热门搜索
							<SearchInfoSwitch onselect="return false" onClick={()=>{props.handleChangePage(props.searchPage)}}>
								<Spin className='iconfont'>&#xe7ea;</Spin>
								换一批 
							</SearchInfoSwitch>
						</SearchInfoTitle>
						{props.searchList.map((val,index)=>(
							index<10*props.searchPage && index>=(props.searchPage-1)*10 && <SearchInfoItem href='/' key={index}>{val}</SearchInfoItem>
						))}
					</SearchInfo>
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className='reg'>注册</Button>
				<Button className='writting'>
					<i className='iconfont'>&#xe624;</i>
					写文章
				</Button>
			</Addition>
		</HeaderWrapper>
	</Fragment>
)

const mapStateToProps = (state,props)=>({
	searchOnFocus: state.getIn(['header','searchOnFocus']),
	searchList: state.getIn(['header','searchList']),
	searchPage: state.getIn(['header','searchPage']),
	mouseIn: state.getIn(['header','mouseIn']),
	totalPage: state.getIn(['header','searchTotalPage']),
})

const mapDispatchToProps = (dispatch,props)=>({

	handleOnFocus(){
		const action = {
			type: 'SEARCH_ON_FOCUS'
		}
		const getList = () => {
			return (dispatch,getState) => {
				axios.get('/api/headerList.json')
				.then((res)=>{
					const { data } = res.data
					const action = {
						type: 'CHANGE_SEARCH_LIST',
						data: fromJS(data),
						totalPage: Math.ceil(data.length / 10)
					}
					dispatch(action)
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		}
		dispatch(getList())
		dispatch(action)
	},

	handleOnBlur(){
		const action = {
			type: 'SEARCH_ON_BLUR'
		}
		dispatch(action)
	},

	handleChangePage(page){
		const action = {
			type: 'CHANGE_SEARCH_PAGE',
			currentPage: page
		}
		dispatch(action)
	},

	handleMouseEnter(){
		const action = {
			type: 'MOUSE_ENTER'
		}
		dispatch(action)
	},

	handleMouseLeave(){
		const action = {
			type: 'MOUSE_LEAVE'
		}
		dispatch(action)
	},


})


export default connect(mapStateToProps,mapDispatchToProps)(Header)