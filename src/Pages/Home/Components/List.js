import React, { PureComponent, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'

// Components

class List extends PureComponent {
  render(){
    return(
      <Fragment>
        <ListWrapper width={[1]} flexDirection='column'>
          {
            this.props.listItems.map( (val,index)=>(
              <ListItem key={uuidv4()} width={[1]} py={4} flexWrap='wrap' src={val.get('src')} >
                <Box className="left" width={[458]}>
                  <h3>{val.get('title')}</h3>
                  <p>{val.get('content')}</p>
                  <div className="info">
                    <i className="iconfont diamond">&#xe675;</i>&nbsp;<span style={{color:'#ea6f5a'}}>{val.get('diamond')}</span>
                    <a href="">{val.get('useranme')}</a>
                    <i className="iconfont comment">&#xe7ec;</i>&nbsp;<span>{val.get('comment')}</span>
                    <i className="iconfont liked">&#xe79d;</i>&nbsp;<span>{val.get('liked')}</span>
                  </div>
                </Box>
                <Box className="right" width={[150]}>
                  <a className="img" href=""></a>
                </Box>
              </ListItem>
            ) )
          }
        <ListMore onClick={()=>this.props.loadMoreList()}>阅读更多</ListMore>
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
    cursor: pointer;
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

const mapState = (state, props)=>({
  listItems: state.get('list')
})
const mapDispatch = (dispatch, props)=>({
  loadMoreList(){
    const action = { type: 'LOAD_MORE_LIST' }
    dispatch(action)
  },
})

export default connect(mapState, mapDispatch)(List)