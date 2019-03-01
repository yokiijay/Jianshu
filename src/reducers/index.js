import { combineReducers } from 'redux-immutable'

// reducers
import header from './headerReducer'
import banner from './bannerReducer'
import recommend from './recommendReducer'

export default combineReducers({
	header,
	banner,
	recommend
})