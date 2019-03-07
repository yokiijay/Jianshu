import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: ''
})

export default function (state=defaultState, {type,...action}){
  switch(type) {
    case 'LOAD_DETAIL' : return state.set('title',action.title)
    default: return state
  }
}