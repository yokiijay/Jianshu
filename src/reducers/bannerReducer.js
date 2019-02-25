import {fromJS} from 'immutable'

const defaultState = fromJS({
  state: [],
  count: 0
})

export default function (state=defaultState, {type,...action}){

}