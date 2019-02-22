import {fromJS} from 'immutable'

const defaultState = fromJS({
	searchOnFocus: false,
	mouseIn: false,
	searchList: [],
	searchPage: 1,
	searchTotalPage: 1,
})

export default function headerReducer(state=defaultState,{type,...action}){
	switch(type){
		case 'SEARCH_ON_FOCUS' : return state.set('searchOnFocus',true)
		case 'SEARCH_ON_BLUR' : return state.set('searchOnFocus',false)
		case 'CHANGE_SEARCH_LIST' : return state.set('searchList',action.data).set('searchTotalPage',action.totalPage)
		case 'CHANGE_SEARCH_PAGE' : {
			const { currentPage } = action
			return state.set('searchPage',currentPage>0&&currentPage<5 ? (currentPage+1): (1))
		}
		case 'MOUSE_ENTER' : return state.set('mouseIn',true)
		case 'MOUSE_LEAVE' : return state.set('mouseIn',false)
		default: return state
	}
}