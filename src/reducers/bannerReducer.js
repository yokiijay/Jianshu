import {fromJS} from 'immutable'

const defaultState = fromJS({
  items: [
    'https://upload.jianshu.io/admin_banners/web_images/4613/e96eece16a9e3ae1699dd4bd0002666c571c30f5.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/1250/h/540',
    'https://upload-images.jianshu.io/upload_images/11715595-079e5c8d1a6edb47.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'
  ],
  count: 0
})

export default function (state=defaultState, {type,...action}){
  switch(type) {
    case 'COUNT_UPDATE': return state.set('count', action.current) || 0
    default: return state
  }
}