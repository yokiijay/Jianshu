import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle `
	${reset}
  *:focus{ outline: none }
  button{ cursor: pointer }
  a { text-decoration: none }
  a:link { color: inherit }
  * {font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif !important;}
  
  @font-face {
    font-family: 'iconfont';  /* project id 1036286 */
    src: url('//at.alicdn.com/t/font_1036286_7t5jnn3fx6j.eot');
    src: url('//at.alicdn.com/t/font_1036286_7t5jnn3fx6j.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1036286_7t5jnn3fx6j.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1036286_7t5jnn3fx6j.woff') format('woff'),
    url('//at.alicdn.com/t/font_1036286_7t5jnn3fx6j.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1036286_7t5jnn3fx6j.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
  }
`

export default GlobalStyle