import { combineReducers } from 'redux-immutable'

// reducers
import header from './headerReducer'
import banner from './bannerReducer'

export default combineReducers({
	header,
	banner,
})