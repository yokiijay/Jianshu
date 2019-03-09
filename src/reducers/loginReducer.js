import { fromJS }  from 'immutable'

const defaultState = fromJS({
  login: false
})

export default function (state=defaultState, {type,...action}){
  switch(type){
    case 'LOGIN': return state.set('login',true)
    case 'LOGOUT': return state.set('login',false)
    default: return state
  }
}