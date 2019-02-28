import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

// Components
import { Flex, Box } from '@rebass/grid'

class Recommend extends Component {
  render(){
    return(
      <Fragment>
        <RecommendWrapper flexDirection='column'>
          <RecommendItem src='https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png' />
          <RecommendItem src='https://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png' />
          <RecommendItem src='https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png' />
          <RecommendItem src='https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png' />
          <RecommendItem src='https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png' />
          <RecommendItem src='https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png' />
          <RecommendQR>
            <img src="https://s2.ax1x.com/2019/03/01/kH8kE8.jpg" alt=""/>
            <Box ml='10px'>
              <h4>下载简书手机App <i className="iconfont">&#xe7eb;</i></h4>
              <h5>随时随地发现和创作内容</h5>
            </Box>
            <QRFlow className='qr-flow' /> 
          </RecommendQR>
        </RecommendWrapper>
      </Fragment>
    )
  }
}

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

export default Recommend