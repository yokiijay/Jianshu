import { fromJS } from 'immutable'

const defaultState = fromJS({
  recommendItems: [],
  recommendWriters: []
})

export default function recommendReducer(state=defaultState, {type,...action}){
  switch(type){
    case 'LOAD' :
      return state.merge({
        recommendItems: fromJS(action.recommendItems),
        recommendWriters: fromJS(action.recommendWriters),
      })
    default : return state
  }
}