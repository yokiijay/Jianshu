import styled, {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle `
	${reset}
  *:focus{ outline: none }
  button{ cursor: pointer }
  a{ text-decoration: none }
  * {font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif !important;}
  
  @font-face {
    font-family: 'iconfont';  /* project id 1036286 */
    src: url('//at.alicdn.com/t/font_1036286_7f2yi1w5bl.eot');
    src: url('//at.alicdn.com/t/font_1036286_7f2yi1w5bl.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1036286_7f2yi1w5bl.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1036286_7f2yi1w5bl.woff') format('woff'),
    url('//at.alicdn.com/t/font_1036286_7f2yi1w5bl.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1036286_7f2yi1w5bl.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
  }
`

export default GlobalStyle