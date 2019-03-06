import { combineReducers } from 'redux-immutable'

// reducers
import header from './headerReducer'
import banner from './bannerReducer'
import recommend from './recommendReducer'
import list from './listReducer'

export default combineReducers({
	header,
	banner,
	recommend,
	list,
})