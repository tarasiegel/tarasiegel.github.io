(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(L,M,t){"use strict";t.r(M),t.d(M,"pageQuery",function(){return D});var u=t(7),e=t.n(u),j=t(0),s=t.n(j),a=t(157),i=(t(174),t(162)),w=t(161),N=(t(158),t(160)),A=t.n(N),n=function(L){function M(){return L.apply(this,arguments)||this}return e()(M,L),M.prototype.render=function(){var L=this.props.data,M=L.site.siteMetadata.title,t=L.allMarkdownRemark.edges;return s.a.createElement(i.a,{location:this.props.location,title:M},s.a.createElement("div",{className:"home-item__container"},t.map(function(L){var M=L.node,t=M.frontmatter.title||M.fields.slug;return s.a.createElement("div",{className:"home-item",key:M.fields.slug},s.a.createElement(w.a,{title:"Full Stack Kitchen",keywords:["baking"],image:M.frontmatter.image.childImageSharp.fluid.src}),s.a.createElement("div",{className:"home-item__image"},s.a.createElement(a.a,{style:{boxShadow:"none"},to:M.fields.slug},s.a.createElement(A.a,{fluid:M.frontmatter.image.childImageSharp.fluid}))),s.a.createElement("div",{className:"home-item__category"},M.frontmatter.tags[0]),s.a.createElement("div",{className:"home-item__date"},M.frontmatter.date),s.a.createElement("div",{className:"home-item__title"},s.a.createElement(a.a,{style:{boxShadow:"none"},to:M.fields.slug},t)))})))},M}(s.a.Component);M.default=n;var D="878401524"},157:function(L,M,t){"use strict";t.d(M,"b",function(){return N});var u=t(0),e=t.n(u),j=t(4),s=t.n(j),a=t(32),i=t.n(a);t.d(M,"a",function(){return i.a});t(159);var w=e.a.createContext({}),N=function(L){return e.a.createElement(w.Consumer,null,function(M){return L.data||M[L.query]&&M[L.query].data?(L.render||L.children)(L.data?L.data.data:M[L.query].data):e.a.createElement("div",null,"Loading (StaticQuery)")})};N.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},158:function(L,M,t){"use strict";t.d(M,"a",function(){return i});var u=t(170),e=t.n(u),j=t(171),s=t.n(j);s.a.baseFontSize="17px",s.a.baseLineHeight="28px",s.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#a09097",backgroundImage:"none",textShadow:"none",padding:"0 5px"},"a:hover":{backgroundColor:"#a09097",color:"#fff"}}};var a=new e.a(s.a);var i=a.rhythm;a.scale},159:function(L,M,t){var u;L.exports=(u=t(163))&&u.default||u},161:function(L,M,t){"use strict";var u=t(165),e=t(0),j=t.n(e),s=t(4),a=t.n(s),i=t(169),w=t.n(i),N=t(157);function A(L){var M=L.description,t=L.lang,e=L.meta,s=L.keywords,a=L.title,i="https://www.fullstackkitchen.com"+L.image;return console.log(i),j.a.createElement(N.b,{query:n,render:function(L){var u=M||L.site.siteMetadata.description;return j.a.createElement(w.a,{htmlAttributes:{lang:t},title:a,titleTemplate:"%s | "+L.site.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:a},{property:"og:description",content:u},{property:"og:image",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:L.site.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:u},{name:"twitter:image",content:i}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(e)})},data:u})}A.defaultProps={lang:"en",meta:[],keywords:[]},A.propTypes={description:a.a.string,lang:a.a.string,meta:a.a.array,keywords:a.a.arrayOf(a.a.string),title:a.a.string.isRequired},M.a=A;var n="1025518380"},162:function(L,M,t){"use strict";var u=t(7),e=t.n(u),j=t(0),s=t.n(j),a=(t(158),t(145),t(157)),i=(t(160),t(164)),w=t.n(i),N=t(172),A=t.n(N),n=(t(168),t(166)),D=t(167),S=function(L){function M(M){var t;return(t=L.call(this,M)||this).toggleMenu=function(){t.setState({menuOpen:!t.state.menuOpen})},t.state={start:!1,menuOpen:!1},t}return e()(M,L),M.prototype.render=function(){return s.a.createElement("div",{className:"header"},s.a.createElement(a.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},className:"header-logo-container",to:"/"},s.a.createElement(A.a,{id:"header-logo",option:{file:w.a,animTimingFunction:"EASE",type:"delayed",delay:200,duration:500,onReady:console.log},style:{height:"auto",width:"450px"},callback:console.log})),s.a.createElement("div",{className:"header__link-container "+(this.state.menuOpen?"menu-open":"")},s.a.createElement("div",{className:"header__menu mobile",onClick:this.toggleMenu},"menu"),s.a.createElement("div",{className:"header__link mobile"},s.a.createElement(a.a,{to:"/"},"home")),s.a.createElement("div",{className:"header__link"},s.a.createElement(a.a,{to:"/about"},"about")),s.a.createElement("div",{className:"header__link"},s.a.createElement(a.a,{to:"/recipes"},"recipes")),s.a.createElement("div",{className:"header__link"},s.a.createElement("a",{href:"https://www.instagram.com/taras.kitchen",target:"_blank"},s.a.createElement(n.Icon,{size:30,icon:D.instagram})))))},M}(s.a.Component),y=function(L){function M(){return L.apply(this,arguments)||this}return e()(M,L),M.prototype.render=function(){var L=this.props,M=(L.location,L.title,L.children);return s.a.createElement("div",{className:"body-container"},s.a.createElement(S,null),s.a.createElement("div",{className:"layout-container"},M),s.a.createElement("footer",null,s.a.createElement("div",{className:"footer__container"},s.a.createElement("div",{className:"footer__navigation"},s.a.createElement("div",{className:"footer__link"},s.a.createElement(a.a,{to:"/"},"home")),s.a.createElement("div",{className:"footer__link"},s.a.createElement(a.a,{to:"/about"},"about")),s.a.createElement("div",{className:"footer__link"},s.a.createElement(a.a,{to:"/recipes"},"recipes"))),s.a.createElement("div",{className:"footer__text"},"© ",(new Date).getFullYear()," fullstackkitchen.com"))))},M}(s.a.Component);M.a=y},163:function(L,M,t){"use strict";t.r(M);t(33);var u=t(0),e=t.n(u),j=t(4),s=t.n(j),a=t(53),i=t(2),w=function(L){var M=L.location,t=i.default.getResourcesForPathnameSync(M.pathname);return e.a.createElement(a.a,Object.assign({location:M,pageResources:t},t.json))};w.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},M.default=w},164:function(L,M){L.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAuMzkgNTMuODgiPjx0aXRsZT5mdWxsc3RhY2traXRjaGVuLXdpdGhvdXQ8L3RpdGxlPjxwYXRoIGQ9Ik02MTQuODMsNDA4LjFjLjEtLjQuMi0uOC4zLTEuMSwxLjEtNS4zLDIuMi0xMC42LDMuNC0xNS44LjgtMy44LDIuMy03LjMsNS40LTkuOWE4LjU3LDguNTcsMCwwLDEsNC41LTIuMSwyOCwyOCwwLDAsMSwwLDQuMWMtMS4xLDUuOC0yLjQsMTEuNi0zLjYsMTcuNC0uNSwyLjUtMS4xLDUtMS42LDcuNWg5LjZjMS40LTYuNiwyLjgtMTMuMSw0LjEtMTkuNmEzMi43OSwzMi43OSwwLDAsMCwxLTEwLjhjLS41LTQuNC0zLjMtNy03LjctNy4yYTE2LDE2LDAsMCwwLTcuNywxLjdjMS00LjYsMS45LTksMi45LTEzLjVINjE3Yy0uOSwwLTEuMy4yLTEuNSwxLjItMi44LDEzLjMtNS42LDI2LjYtOC41LDM5LjhsLTEuOCw4LjRDNjA4LjUzLDQwOC4xLDYxMS42Myw0MDguMSw2MTQuODMsNDA4LjFabS0yMTEuOS4xaDljLjIsMCwuNi0uNC43LS43LjQtMS40LjYtMi45LDEtNC4zLjYtMi42LDEuMS01LjIsMS43LThhNi4yMSw2LjIxLDAsMCwxLC44LDEuMmMyLjQsMy43LDQuNyw3LjMsNywxMWExLjY4LDEuNjgsMCwwLDAsMS43LjloMTAuOWMtNC42LTYuNi05LTEzLTEzLjQtMTkuM0w0NDEsMzcxLjVjLTQuMy0uMy04LjQtLjMtMTIuNS0uMmExLjc5LDEuNzksMCwwLDAtMSwuNmMtMi45LDIuOC01LjcsNS42LTguNSw4LjRhNC40OSw0LjQ5LDAsMCwxLS45LjZjMS42LTcuNSwzLjEtMTQuNyw0LjctMjJoLTkuNkM0MDkuOTMsMzc1LjMsNDA2LjUzLDM5MS43LDQwMi45Myw0MDguMlptODIuNy0yNy41Yy0uMS0uMS0uMi0uMS0uMi0uMiwxLjUtNy4yLDMuMS0xNC41LDQuNi0yMS44aC05LjZjLTMuNSwxNi41LTcsMzIuOS0xMC41LDQ5LjNoOS42Yy45LTQuMywxLjgtOC41LDIuOC0xMy4xLDIuNyw0LjMsNS4zLDguMyw3LjksMTIuM2ExLjYyLDEuNjIsMCwwLDAsMS42LjloMTBjLjMsMCwuNi0uMSwxLS4xLTQuNS02LjUtOC45LTEyLjktMTMuMy0xOS4ybDE4LjktMTcuN2MtLjcsMC0xLjEtLjEtMS41LS4xLTIuOCwwLTUuNS4yLTguMywwLTIuMy0uMi00LjIuMy01LjUsMi40YTUuNzMsNS43MywwLDAsMS0xLjEsMS4xQzQ4OS45MywzNzYuNiw0ODcuODMsMzc4LjcsNDg1LjYzLDM4MC43Wm0xNjUuNSwxMi41aDIxLjNjLjQtMi4xLjgtNC4xLDEtNmEzMS4wOCwzMS4wOCwwLDAsMCwwLTYuMWMtLjYtNi00LjQtMTAtOS45LTEwLjZhMTUuOTMsMTUuOTMsMCwwLDAtMTIuNiwzLjhjLTcuMiw2LjQtMTAsMTQuNi04LjksMjQsLjYsNC45LDMuMyw4LjUsOC4zLDEwYTE3LDE3LDAsMCwwLDcuMS40YzQuNi0uNSw4LjgtMi4yLDEzLTQtLjgtMi45LTEuNS01LjctMi4zLTguNWExLjQyLDEuNDIsMCwwLDEtLjItLjZjLTEuOSwxLTMuOCwyLTUuOCwyLjlhMTUuNzEsMTUuNzEsMCwwLDEtNy4xLDEuNiwzLjcyLDMuNzIsMCwwLDEtMy45LTMuNkM2NTEsMzk1LjQsNjUxLjEzLDM5NC40LDY1MS4xMywzOTMuMlptLTMwOC40LTEwLjVhMTMuMTQsMTMuMTQsMCwwLDEsMS41LS41YzIuOS0xLDUuNy0yLjEsOC42LTIuOCwyLjMtLjYsMy4zLjgsMi41LDMuMS00LjctLjgtNi42LS43LTkuMy4zYTE3LjMyLDE3LjMyLDAsMCwwLTEwLjcsMTUuNmMtLjEsNy4xLDQuOCwxMS41LDExLjgsMTAuNGE0Mi4wOSw0Mi4wOSwwLDAsMCw0LjgtMS4yYy4xLjUuMSwxLjEuMiwxLjhsOS4zLTEuMmMwLS40LS4xLS42LS4xLS45LS4xLTIuMi0uNS00LjUtLjEtNi43LjktNS41LDIuMS0xMSwzLjMtMTYuNCwxLjYtNy4zLTIuNS0xNC4zLTExLjQtMTMuNmEzOC4xOSwzOC4xOSwwLDAsMC0xMC40LDIuOC45NC45NCwwLDAsMC0uNS43QzM0Mi41MywzNzYuOCwzNDIuNjMsMzc5LjcsMzQyLjczLDM4Mi43Wm0tMTczLjQtMTEuNWMtLjcsMy40LTEuNCw2LjgtMi4yLDEwLjEtLjgsMy44LTEuNCw3LjYtMy4xLDExLjItMS40LDIuOS0zLjIsNS42LTYuMiw3YTE3LDE3LDAsMCwxLTIuNC41LDE4LjQ4LDE4LjQ4LDAsMCwxLS4xLTIuM2MxLTUsMi4xLTkuOSwzLjEtMTQuOS44LTMuOCwxLjYtNy42LDIuNS0xMS42aC05LjVjLS4xLjQtLjIuNy0uMywxLTEuNSw2LjktMi45LDEzLjgtNC40LDIwLjZhMjYuNDQsMjYuNDQsMCwwLDAtLjksOC40LDguMTEsOC4xMSwwLDAsMCw3LjEsNy41QTEzLjU2LDEzLjU2LDAsMCwwLDE2MSw0MDdjLjgtLjQsMS42LS45LDIuNi0xLjVWNDA4aDkuMWE4Ni43OCw4Ni43OCwwLDAsMSwuNi05YzEtNi4xLDIuMy0xMi4xLDMuNS0xOC4xLjYtMy4yLDEuNC02LjUsMi4xLTkuOEMxNzUuNzMsMzcxLjIsMTcyLjYzLDM3MS4yLDE2OS4zMywzNzEuMlptNTA2LjQsMzYuOWg5Yy4yLDAsLjYtLjUuNy0uOS44LTMuNCwxLjQtNi44LDIuMi0xMC4yYTg4Ljg5LDg4Ljg5LDAsMCwxLDMtMTAuNCwxMiwxMiwwLDAsMSw2LjItNi45LDEwLjg4LDEwLjg4LDAsMCwxLDIuNC0uN2MuMS4xLjMuMi40LjMtMS42LDkuNi00LDE5LjEtNS44LDI4LjdoOS42Yy43LTMuNCwxLjQtNi43LDIuMS0xMC4xLDEuMS01LjUsMi41LTExLDMuMy0xNi41LDEuMi03LjgtNC4yLTEyLjUtMTEuOC0xMC41YTUwLjUxLDUwLjUxLDAsMCwwLTYuMSwyLjN2LTIuMWgtOS4zQzY4MiwzODMuOSw2NzcuNzMsMzk1LjgsNjc1LjczLDQwOC4xWm0tMTA5LTExLjZjLTIuOS0uOC01LjctMS41LTguNC0yLjMtLjctLjItLjkuMS0xLjIuNmE0Ny4wNiw0Ny4wNiwwLDAsMS0zLjYsNC4yLDMuNjQsMy42NCwwLDAsMS0zLjcuOWMxLTYuNywyLjgtMTMuMyw0LjEtMjBoMTEuNWMuNi0yLjksMS4zLTUuOCwxLjktOC44aC0xMS41Yy43LTMuMywxLjQtNi41LDIuMS05LjhoLTkuNWMtLjYsMy0xLjMsNS45LTEuOSw4LjgtLjIuOC0uNSwxLTEuMywxLTEuMS0uMS0yLjIsMC0zLjIsMC0yLjYsMC0yLjYsMC0zLjIsMi41LS41LDItLjksNC4xLTEuNCw2LjJoNi44YTIsMiwwLDAsMS0uMS44Yy0uNywzLjUtMS41LDctMi4yLDEwLjZzLTEuNiw2LjktMS4xLDEwLjVhNy42Niw3LjY2LDAsMCwwLDYuMyw2LjksMTQuMSwxNC4xLDAsMCwwLDktMS4zQzU2MC45Myw0MDUsNTYzLjkzLDQwMSw1NjYuNzMsMzk2LjVabS0yNTguOC0xNi42Yy0uNywzLjItMS4zLDYuMi0xLjksOS4yLS44LDMuOC0xLjgsNy41LTEuNywxMS4zLjEsNC41LDIuNCw3LjUsNi40LDguMmExNC4yOSwxNC4yOSwwLDAsMCw2LjgtLjRjNi4xLTEuOSw5LjYtNi41LDEyLjktMTEuOGwtNi44LTEuOGMtMi40LS42LTIuNC0uNi0zLjcsMS4zYTkuNDgsOS40OCwwLDAsMS00LjUsMy45Yy0xLjYuNS0yLC4xLTEuOC0xLjUuNC0yLjMuOS00LjUsMS40LTYuOC44LTMuOSwxLjctNy44LDIuNS0xMS43aDExLjRjLjctMi45LDEuMy01LjgsMi04LjhoLTExLjVjLjctMy4zLDEuNC02LjUsMi05LjdoLTkuNmMtLjYsMi45LTEuMyw1LjgtMS45LDguNy0uMi45LS41LDEuMS0xLjMsMS4xLTEuNi0uMS0zLjMsMC00LjksMC0uMywwLS45LjItLjkuNS0uNywyLjctMS4yLDUuNC0xLjksOC4zWm0tMTk2LDIuMWg4Yy0xLjksOC44LTMuNywxNy40LTUuNSwyNi4xSDEyNGwuMy0xLjIsNS4xLTI0Yy4yLS44LjQtMS4xLDEuMy0xLDIsLjEsNC4xLDAsNi4xLDAsMy4yLDAsMy4yLDAsMy44LTMuMS40LTEuOS43LTMuNywxLjEtNS43aC0xMC4zYTcuNDksNy40OSwwLDAsMSwuNC0xLjZjMS0zLjMsMy41LTQuNCw2LjYtMywxLC40LDIsMSwzLDEuNSwxLjMuNywyLjcsMS4zLDQuMSwyLC43LTMuMywxLjMtNi40LDItOS41LS43LS4zLTEuMy0uNy0xLjktMS0xLjItLjUtMi4zLTEuMS0zLjUtMS41LTguMy0yLjctMTYuNCwxLjItMTkuMyw5LjUtLjQsMS4yLS43LDIuNC0xLDMuNmgtNy45QzExMy4xMywzNzYuMSwxMTIuNTMsMzc4LjksMTExLjkzLDM4MlptMTg0LTUuOGE1NS41Nyw1NS41NywwLDAsMC01LjItMy43Yy02LjgtMy44LTE1LjYtMi0yMCw0LTMuMyw0LjUtMywxMCwuOSwxMy4zYTI2LjI0LDI2LjI0LDAsMCwwLDUuMSwzYzEuMy43LDIuNiwxLjIsMy45LDEuOGEyLDIsMCwwLDEsMS4xLDIuNWMtLjUsMi4zLTMsMy41LTUuNywyLjhhMTEuMTQsMTEuMTQsMCwwLDEtNS45LTQuM2MtLjYtLjgtMS4xLTEuNS0xLjctMi4zLTEuMiwxLjQtMi4zLDIuNi0zLjUsMy44cy0yLjIsMi41LTMuMywzLjdjMy4xLDMuNyw1LjgsNS43LDkuNCw3LDcsMi41LDE0LjUuMiwxOC4zLTUuN3MyLjMtMTIuMi0zLjktMTUuNWMtMS40LS43LTIuOC0xLjMtNC4zLTEuOWExOS42NSwxOS42NSwwLDAsMS0yLjUtMS4zYy0uOC0uNS0uOS0xLjEtLjQtMmE0LjI1LDQuMjUsMCwwLDEsNC4zLTIuMSwxMC41NiwxMC41NiwwLDAsMSw0LjgsMi41Yy45LjcsMS43LDEuNCwyLjYsMi4xQzI5MiwzODEuNCwyOTMuOTMsMzc4LjksMjk1LjkzLDM3Ni4yWm05Ny4yLDE3LjRhMTMuMSwxMy4xLDAsMCwxLTEuMywxLjJjLTIuMSwxLjktNC4xLDQtNi44LDUtMy4yLDEuMS01LjgtLjQtNi4yLTMuOGExOC40MiwxOC40MiwwLDAsMSwzLjctMTMuNiw3Ljg0LDcuODQsMCwwLDEsNC4yLTIuOWMzLS45LDQuOCwwLDUuOCwyLjkuNSwxLjMuOCwyLjYsMS4zLDQsMy4xLTEuOCw2LTMuNSw5LjMtNS40LTEuMi0yLTIuMi00LTMuNS01LjhhMTEuMTYsMTEuMTYsMCwwLDAtNy40LTQuNSwxNy4yNSwxNy4yNSwwLDAsMC0xNi4zLDUuOGMtNC43LDUuMi02LjcsMTEuNS02LjgsMTguNC0uMiw5LjMsNi4yLDE0LjksMTUuNSwxMy44LDUuOC0uNyw5LjktNC4yLDE0LTcuOUMzOTYuNzMsMzk4LjQsMzk1LDM5Ni4xLDM5My4xMywzOTMuNlptMjAzLjEtNy4yYzMuMS0xLjgsNi4xLTMuNiw5LjEtNS4zLS42LTEuMy0xLjEtMi40LTEuNy0zLjUtMi0zLjctNC45LTYuMi05LjEtNi45YTE3LjM5LDE3LjM5LDAsMCwwLTE2LjIsNS44Yy01LDUuNS02LjksMTIuMy02LjgsMTkuNi4xLDYsMy4yLDEwLjIsOC4zLDExLjlhMTYsMTYsMCwwLDAsOC40LjVjNS4xLTEsOC45LTQuMywxMi43LTcuNy0xLjgtMi40LTMuNi00LjgtNS40LTcuM2ExMy4xLDEzLjEsMCwwLDEtMS4zLDEuMmMtMi4xLDItNC4xLDQuMS02LjksNS0zLjEsMS01LjctLjUtNi4xLTMuOGExOSwxOSwwLDAsMSwzLjYtMTMuNSw3LjU5LDcuNTksMCwwLDEsNC4xLTIuOWMzLS45LDQuOS0uMSw2LDIuOUEzNy41OCwzNy41OCwwLDAsMSw1OTYuMjMsMzg2LjRabS04NC4zLTYuNkg1MjFjLTIsOS41LTQsMTguOC02LDI4LjMsMi44LDAsNS41LS4xLDguMiwwLDEuMiwwLDEuNS0uNCwxLjgtMS41LDEuNy04LjMsMy41LTE2LjYsNS4zLTI0LjguOC0zLjUsMS41LTcuMSwyLjMtMTAuN2wtMS4yLS4zYzIuMi0xLjYsMy4xLTIuOCwzLjYtNC42YTUuNTYsNS41NiwwLDAsMC0yLjYtNi41LDcsNywwLDAsMC03LjcsMS4zLDYuNTQsNi41NCwwLDAsMC0xLjcsNy41LDEzLDEzLDAsMCwwLDEuOCwyLjVoLTkuOWMtLjQsMC0xLC4zLTEsLjZDNTEzLjEzLDM3NC4zLDUxMi42MywzNzcsNTExLjkzLDM3OS44Wm0tMzE4LjItMTIuM2MtMi45LDEzLjYtNS43LDI3LjEtOC42LDQwLjdoOS42YzMuNS0xNi41LDctMzIuOSwxMC41LTQ5LjNoLTE4LjdjLS42LDIuOS0xLjMsNS43LTEuOSw4LjZabTI4LjcsNDAuN2MzLjUtMTYuNSw3LTMyLjksMTAuNS00OS4zaC0xOC43Yy0uNiwyLjktMS4zLDUuNy0xLjksOC43aDkuMWMtMi45LDEzLjYtNS43LDI3LjEtOC42LDQwLjZabTQyOC43LTE1YzAsMS4yLS4xLDIuMiwwLDMuMnEuMywzLjQ1LDMuOSwzLjZhMTYsMTYsMCwwLDAsNy4xLTEuNmMyLS45LDMuOC0xLjksNS44LTIuOWExLjQyLDEuNDIsMCwwLDEsLjIuNmMuOCwyLjgsMS41LDUuNiwyLjMsOC41LTQuMiwxLjgtOC40LDMuNS0xMyw0YTE3LDE3LDAsMCwxLTcuMS0uNGMtNS0xLjUtNy43LTUtOC4zLTEwLTEuMS05LjQsMS43LTE3LjcsOC45LTI0YTE2LjQzLDE2LjQzLDAsMCwxLDEyLjYtMy44YzUuNS41LDkuNCw0LjYsOS45LDEwLjZhMzEuMDgsMzEuMDgsMCwwLDEsMCw2LjFjLS4yLDItLjYsMy45LTEsNkM2NjUuMzMsMzkzLjIsNjU4LjIzLDM5My4yLDY1MS4xMywzOTMuMlptMTMuMi04LjdhMTUsMTUsMCwwLDAtLjQtMi40LDMuNDMsMy40MywwLDAsMC0zLjUtMi45Yy0yLjcsMC02LDIuNi02LjcsNS4zWm0tMzIxLjYtMS44cS0uMTUtNC41LS4zLTguN2ExLjE2LDEuMTYsMCwwLDEsLjUtLjdjMy40LTEuMiw2LjctMi41LDEwLjQtMi44LDguOS0uNywxMyw2LjMsMTEuNCwxMy42LTEuMiw1LjUtMi40LDEwLjktMy4zLDE2LjQtLjQsMi4yLDAsNC40LjEsNi43LDAsLjMuMS41LjEuOWwtOS4zLDEuMmExNC4wNSwxNC4wNSwwLDAsMS0uMi0xLjgsNDIuMDksNDIuMDksMCwwLDEtNC44LDEuMmMtNywxLTExLjktMy40LTExLjgtMTAuNGExNy4zMiwxNy4zMiwwLDAsMSwxMC43LTE1LjZjMi43LTEsNC42LTEuMSw5LjMtLjMuOC0yLjMtLjItMy43LTIuNS0zLjEtMi45LjgtNS44LDEuOS04LjYsMi44QzM0My43MywzODIuMywzNDMuMzMsMzgyLjUsMzQyLjczLDM4Mi43Wm0xMC44LDguNWMtMi4zLS43LTQuNC0xLTYuMS43YTguNDEsOC40MSwwLDAsMC0yLjUsNy4yYy4xLjkuNywxLjIsMS42LDEuMSwyLjgtLjUsNC42LTIuNCw2LTQuNUMzNTMuMzMsMzk0LjQsMzUzLjIzLDM5Mi43LDM1My41MywzOTEuMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTAuMTIgLTM1Ny4yKSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6M3B4Ii8+PC9zdmc+"},165:function(L){L.exports={data:{site:{siteMetadata:{title:"Full Stack Kitchen",description:"Full Stack Kitchen: Unique Dessert Recipes from an Engineer's Mind",author:"Tara Siegel"}}}}},174:function(L,M,t){"use strict";t(175),t(177),t(0),t(157),t(160),t(158)},175:function(L,M,t){"use strict";t(176)("fixed",function(L){return function(){return L(this,"tt","","")}})},176:function(L,M,t){var u=t(11),e=t(17),j=t(18),s=/"/g,a=function(L,M,t,u){var e=String(j(L)),a="<"+M;return""!==t&&(a+=" "+t+'="'+String(u).replace(s,"&quot;")+'"'),a+">"+e+"</"+M+">"};L.exports=function(L,M){var t={};t[L]=M(a),u(u.P+u.F*e(function(){var M=""[L]('"');return M!==M.toLowerCase()||M.split('"').length>3}),"String",t)}},177:function(L){L.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABgBAAIDAAAAAAAAAAAAAAAAAAIDAAEE/9oADAMBAAIQAxAAAAHXKWem700PFAJPSAaP/8QAHBAAAQQDAQAAAAAAAAAAAAAAAgABAzEREiEi/9oACAEBAAEFAm4Iy5IrlLURLB2pn8x3uS//xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIQETL/2gAIAQMBAT8BbqXZiP/EABYRAQEBAAAAAAAAAAAAAAAAABABMv/aAAgBAgEBPwEmT//EABwQAAIBBQEAAAAAAAAAAAAAAAABEQIQITFREv/aAAgBAQAGPwKZpHpejdJHRTwl4vhn/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRQWH/2gAIAQEAAT8hfDJu9jkrrtfkPwZ+RKoIsfYBmJm/GbyW/OxK3tZs0WuSq8Dwn//aAAwDAQACAAMAAAAQw9/8/8QAGREAAwADAAAAAAAAAAAAAAAAAAERITFB/9oACAEDAQE/EEUWFKchS0f/xAAZEQABBQAAAAAAAAAAAAAAAAAAARARITH/2gAIAQIBAT8QttCVP//EAB0QAQACAgMBAQAAAAAAAAAAAAEAESFBMVFhsZH/2gAIAQEAAT8QuLKqrDu4iRinF2PLuC4oMGIRVQkB99EsSMA/h7YRDCQXhh6xFNygGhUY4OVGsF/SD7LK6C+p/9k=",width:50,height:50,src:"/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/c3bbc/profile-pic.jpg",srcSet:"/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/c3bbc/profile-pic.jpg 1x,\n/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/ac385/profile-pic.jpg 1.5x,\n/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/587d5/profile-pic.jpg 2x,\n/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/20b3c/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Tara Siegel",social:{instagram:"taras.kitchen"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-ca5fa4bb5522d4c20882.js.map