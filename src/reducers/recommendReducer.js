import { fromJS } from 'immutable'

const defaultState = fromJS({
  recommendItems: [
    'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    'https://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png',
    'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png',
    'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
  ],
  recommendWriters: [
    {username:'遛遛心情的溜妈', avatar: 'https://i.postimg.cc/G26Zxyg5/avatar-1.png', written: 620400, liked: 17900},
  ]
})

export default function recommendReducer(state=defaultState, {type,...action}){
  return state
}