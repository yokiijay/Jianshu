import React, { Component, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

// Components

class List extends Component {
  render(){
    return(
      <Fragment>
        <ListWrapper width={[1]} flexDirection='column'>
          <ListItem width={[1]} py={4} flexWrap='wrap' src='https://upload-images.jianshu.io/upload_images/4127955-912a80fba95073bd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'>
            <Box className="left" width={[458]}>
              <h3>心里学：你是聪明女人还是笨女人，自己对照</h3>
              <p>在现实生活中，你会发现，往往而言，那些活得幸福的女人往往都是聪明与智慧的。而那些越来越糟心的女孩，往往是由于自己的无知，所以才会屡屡遭受生活的惩...</p>
              <div className="info">
                <i className="iconfont diamond">&#xe675;</i>&nbsp;<span style={{color:'#ea6f5a'}}>11.3</span>
                <a href="">科技脑洞</a>
                <i className="iconfont comment">&#xe7ec;</i>&nbsp;<span>18</span>
                <i className="iconfont liked">&#xe79d;</i>&nbsp;<span>65</span>
              </div>
            </Box>
            <Box className="right" width={[150]}>
              <a className="img" href=""></a>
            </Box>
          </ListItem>
        <ListMore>阅读更多</ListMore>
        </ListWrapper>
      </Fragment>
    )
  }
}

const ListMore = styled.div `
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: white;
  padding: 10px;
  margin: 30px 0;
  font-size: 15px;
  background: #a5a5a5;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    background: #9b9b9b;
  }
`
const ListItem = styled(Flex) `
  border-bottom: 1px solid #f0f0f0;

  justify-content: space-between;
  h3 {
    font-size: 18px;
    line-height: 27px;
    color: #2f2f2f;
    font-weight: 700;
    margin-bottom: 4px;
  }
  p {
    font-size: 13px;
    line-height: 24px;
    color: #999999;
    margin-bottom: 8px;
  }
  .info {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #b4b4b4;

    .diamond {
      font-size: 16px;
      color: #ea6f5a;
    }
    i {
      font-size: 12px;
      &:hover {
        color: #787878;
      }
    }
    span {
      margin-right: 10px;
    }
    a {
      margin-right: 10px;
      color: inherit;
      &:hover {
        color: #787878;
      }
    }
  }
  .img {
    display: block;
    height: 100px;
    background-image: url(${props=>props.src});
    background-size: cover;
    background-position: center;
    border-radius: 4px;
  }
`
const ListWrapper = styled(Flex) `
`

export default List