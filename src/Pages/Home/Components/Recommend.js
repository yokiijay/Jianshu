import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import posed from 'react-pose'
import axios from 'axios'

// Components
import { Flex, Box } from '@rebass/grid'

class Recommend extends PureComponent {
  render(){
    return(
      <Fragment>
        <RecommendWrapper flexDirection='column'>
          { this.props.items.map( (val,index)=>(
            <RecommendItem key={val} src={val} />            
          ) ) }
          <RecommendQR>
            <img src="https://s2.ax1x.com/2019/03/01/kH8kE8.jpg" alt=""/>
            <Box ml='10px'>
              <h4>下载简书手机App <i className="iconfont">&#xe7eb;</i></h4>
              <h5>随时随地发现和创作内容</h5>
            </Box>
            <QRFlow className='qr-flow' /> 
          </RecommendQR>
          <RecommendWriters flexWrap='wrap'>
            <WritersTitle width={1}>
              推荐作者
              <WritersSwitch><SpinAnimated className="iconfont">&#xe7ea;</SpinAnimated>换一批</WritersSwitch>
            </WritersTitle>
            {
              this.props.writers.map((val,index)=>(
                <Writer key={index} width={1} mt={2}>
                  <img src={val.avatar} alt=""/>
                  <div>
                    <h4>{val.username}</h4>
                    <h5>写了{(val.written/1000).toFixed(1)}k字 · {(val.liked/1000).toFixed(1)}k喜欢</h5>
                  </div>
                  <span><i className="iconfont">&#xe629;</i>关注</span>
                </Writer>
              ))
            }
            <div className="viewAll">查看全部<i className="iconfont">&#xe7eb;</i></div>
          </RecommendWriters>
        </RecommendWrapper>
      </Fragment>
    )
  }

  componentDidMount(){
    this.props.load()
  }
}

const Writer = styled(Flex) `
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #DDDDDD;
    cursor: pointer;
  }
  h4 {
    margin-left: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    padding-top: 5px;
    cursor: pointer;
  }
  h5 {
    margin-left: 10px;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
  }
  span {
    font-size: 13px;
    color: #42c02e;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    i { margin-right: 2px; }
  }
`
const RecommendWriters = styled(Flex) `
  .viewAll {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 18px;
    margin-top: 20px;
    padding: 7px 7px 7px 12px;
    background: #F7F7F7;
    border: 1px solid #DCDCDC;
    color: #787878;
    font-size: 13px;
    border-radius: 4px;
    cursor: pointer;

    i {
      font-size: 10px;
      padding-left: 4px;
    }
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
const WritersSwitch = styled.div `
	font-size: 13px;
	cursor: pointer;
	user-select: none;

	i {
		font-size: 13px;
		padding: 4px;
		display: inline-block;
	}
`
const WritersTitle = styled(Flex) `
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	color: #969696;
	font-size: 14px;
`
const QRFlow = styled.div `
  position: absolute;
  width: 160px;
  height: 160px;
  padding: 10px;
  background: white;
  border-radius: 6px;
  background-image: url('https://s2.ax1x.com/2019/03/01/kH8kE8.jpg');
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 10px 10px 2px rgba(0,0,0,.1);
  left: 50%;
  top: -190px;
  transform: translateX(-90%) translateY(40%) scale(.4);
  opacity: 0;
  transition: .2s;

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 14px;
    width: 14px;
    bottom: -7px;
    background: white;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
`
const RecommendQR = styled.div `
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 22px;
  margin-top: 4px;
  margin-bottom: 30px;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  position: relative;
  
  img {
    width: 60px;
    height: 60px;  
  }
  h4{
    font-size: 15px;
    color: #333333;
    line-height: 22px;

    i{ display:inline-block; font-size: 12px; transition: .2s;}
  }
  &:hover {
    h4 i{
      transform: rotate(-90deg);
    }
    .qr-flow {
      opacity: 100;
      transform: translateX(-50%) translateY(0) scale(1);
    }
  }
  h5 {
    margin-top: 4px;
    font-size: 13px;
    color: #999999;
  }
`
const RecommendItem = styled.div `
  height: 50px;
  background-image: url(${ props=>props.src });
  background-size: cover;
  background-position: left center;
  border-radius: 4px;
  margin-bottom: 6px;
  cursor: pointer;
`
const RecommendWrapper = styled(Flex) `
  margin-top: -4px;
`

const mapState = (state, props)=>({
  items: props.items || state.getIn(['recommend','recommendItems']),
  writers: props.writers || state.getIn(['recommend','recommendWriters']).toJS(),
})
const mapDispatch = (dispatch, props)=>({
  load(){
    const loadData = ()=>(
      (dispatch, getState)=>{
        axios.get('/api/recommend.json')
        .then(res=>{
          const { data } = res
          const action = {
            type: 'LOAD',
            recommendItems: data.recommendItems,
            recommendWriters: data.recommendWriters,
          }
          dispatch(action)
        })
        .catch(err=>{
          throw err
        })
      }
    )
    dispatch(loadData())
  },
})

export default connect(mapState,mapDispatch)(Recommend)