import { fromJS } from 'immutable'

const defaultState = fromJS({
	focused: false,
	mouseEnter: false,
	searchInfoItems: [],
	searchInfoPage: 1,
	searchInfoTotalPages: 1,
})
export default function headerReducer(state=defaultState,{type,...action}){
	switch(type) {
		case 'SEARCH_FOCUSED': return state.set('focused',true)
		case 'SEARCH_BLURED': return state.set('focused',false)
		case 'MOUSE_ENTER': return state.set('mouseEnter',true)
		case 'MOUSE_LEAVE': return state.set('mouseEnter',false)
		case 'CHANGE_SEARCH_LIST': return state.set('searchInfoItems', action.data).set('searchInfoTotalPages', action.totalPages)
		case 'CHANGE_PAGE': {
			const  currentPage = state.get('searchInfoPage')
			return state.set('searchInfoPage',currentPage>0 && currentPage<5 ? currentPage+1 : 1)
		}
		default : return state
	}
}