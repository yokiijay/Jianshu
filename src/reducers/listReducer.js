import { fromJS } from 'immutable'

const defaultState = fromJS([
  {title: "心里学：你是聪明女人还是笨女人，自己对照", content: "在现实生活中，你会发现，往往而言，那些活得幸福的女人往往都是聪明与智慧的。而那些越来越糟心的女孩，往往是由于自己的无知，所以才会屡屡遭受生活的惩...", diamond: "11.3", username: "科技脑洞", comment: "18", liked: "65", src: "https://upload-images.jianshu.io/upload_images/14339932-72556cfdcb2c20ba.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
  {title: "中国程序员真的过多了吗？2019年该何去何从？", content: "2000 年左右配合着美国互联网泡沫的破裂，那时候就听不少人讲过，甚至没摸过计算机的大爷大妈都知道：“别学计算机，饱和了。十几年过去了，今天的...", diamond: "0.4", username: "我选C和CPP", comment: "0", liked: "8", src: "https://upload-images.jianshu.io/upload_images/4230858-df02266adc13292d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
  {title: "新小程序消息推送平台，不止于推送！", content: "2000 扯谈 开头前先扯扯，比如这是个什么平台？ 以推送为主，边缘功能为辅的小程序开发平台，致力于解决微信小程序开发的50%难点，让开发者更轻易地增强编...", diamond: "1.1", username: "古人云小程序", comment: "0", liked: "12", src: "https://upload-images.jianshu.io/upload_images/3973862-256e8cfe25d5a5cc.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
  {title: "老板丢给我60万行的Excel数据，幸亏我会Python，不然就惨了", content: "一个朋友在某运动品牌公司上班，老板给他布置了一个处理客户订单数据的任务。要求是根据订单时间和客户id判断生成四个新的数据： 1、记录该客户是...", diamond: "1.7", username: "诸葛青云999", comment: "3", liked: "14", src: "https://upload-images.jianshu.io/upload_images/13655065-b1d2411d2873da6e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
])

export default function listReducer(state=defaultState, {type, ...action}){
  switch(type) {
    case 'LOAD_MORE_LIST':
      return state.concat(state)
    default: return state
  }
}