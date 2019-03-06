import { List } from 'immutable'

const defaultState = List()

export default function listReducer(state=defaultState, {type, ...action}){
  switch(type) {
    case 'LOAD_LIST':
      return action.list
    case 'LOAD_MORE_LIST':
      return state.concat(state)
    default: return state
  }
}