(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(L,t,M){"use strict";M.r(t),M.d(t,"query",function(){return T});var u=M(7),e=M.n(u),s=M(0),j=M.n(s),i=M(160),a=M(186),w=M(161),n=(M(187),M(188)),N=M(189),y=M(159),D=M(157),c=M(153),S=M.n(c),r=(M(199),function(L){function t(){return L.apply(this,arguments)||this}return e()(t,L),t.prototype.render=function(){var L=this.props.data,t=L.site.siteMetadata.title,M=L.aboutData.edges;return console.log(L),j.a.createElement(y.a,{location:this.props.location,title:t},j.a.createElement(D.a,{title:"About"}),M.map(function(L){var t=L.node;return j.a.createElement("div",{className:"about-container",key:t.fields.slug},j.a.createElement("div",{className:"about-container__image"},j.a.createElement(S.a,{fluid:t.frontmatter.image.childImageSharp.fluid}),j.a.createElement("div",{className:"about-container__icons-container"},j.a.createElement("div",{className:"about-container__icons"},j.a.createElement("a",{className:"about-container__icon",href:"https://github.com/tarasiegel/fullstackkitchen",target:"_blank"},j.a.createElement(i.Icon,{icon:a.github,size:30})),j.a.createElement("a",{className:"about-container__icon",href:"https://www.instagram.com/taras.kitchen",target:"_blank"},j.a.createElement(i.Icon,{icon:w.instagram,size:30})),j.a.createElement("a",{className:"about-container__icon",href:"https://www.facebook.com/tarasiegelskitchen/",target:"_blank"},j.a.createElement(i.Icon,{icon:n.facebookSquare,size:30})),j.a.createElement("a",{className:"about-container__icon",href:"https://www.pinterest.com",target:"_blank"},j.a.createElement(i.Icon,{icon:N.pinterest,size:30}))))),j.a.createElement("div",{className:"about-container__text-container"},j.a.createElement("div",{className:"blog-html",dangerouslySetInnerHTML:{__html:t.html}})))}))},t}(j.a.Component));t.default=r;var T="727396169"},150:function(L,t,M){"use strict";M.r(t),M.d(t,"graphql",function(){return c}),M.d(t,"StaticQueryContext",function(){return y}),M.d(t,"StaticQuery",function(){return D});var u=M(0),e=M.n(u),s=M(4),j=M.n(s),i=M(149),a=M.n(i);M.d(t,"Link",function(){return a.a}),M.d(t,"withPrefix",function(){return i.withPrefix}),M.d(t,"navigate",function(){return i.navigate}),M.d(t,"push",function(){return i.push}),M.d(t,"replace",function(){return i.replace}),M.d(t,"navigateTo",function(){return i.navigateTo});var w=M(152),n=M.n(w);M.d(t,"PageRenderer",function(){return n.a});var N=M(32);M.d(t,"parsePath",function(){return N.a});var y=e.a.createContext({}),D=function(L){return e.a.createElement(y.Consumer,null,function(t){return L.data||t[L.query]&&t[L.query].data?(L.render||L.children)(L.data?L.data.data:t[L.query].data):e.a.createElement("div",null,"Loading (StaticQuery)")})};function c(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}D.propTypes={data:j.a.object,query:j.a.string.isRequired,render:j.a.func,children:j.a.func}},151:function(L,t,M){"use strict";M.d(t,"a",function(){return a});var u=M(164),e=M.n(u),s=M(165),j=M.n(s);j.a.baseFontSize="17px",j.a.baseLineHeight="28px",j.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#a09097",backgroundImage:"none",textShadow:"none",padding:"0 5px"},"a:hover":{backgroundColor:"#a09097",color:"#fff"}}};var i=new e.a(j.a);var a=i.rhythm;i.scale},152:function(L,t,M){var u;L.exports=(u=M(155))&&u.default||u},154:function(L,t,M){},155:function(L,t,M){"use strict";M.r(t);M(33);var u=M(0),e=M.n(u),s=M(4),j=M.n(s),i=M(51),a=M(2),w=function(L){var t=L.location,M=a.default.getResourcesForPathnameSync(t.pathname);return e.a.createElement(i.a,Object.assign({location:t,pageResources:M},M.json))};w.propTypes={location:j.a.shape({pathname:j.a.string.isRequired}).isRequired},t.default=w},156:function(L,t){L.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAuMzkgNTMuODgiPjx0aXRsZT5mdWxsc3RhY2traXRjaGVuLXdpdGhvdXQ8L3RpdGxlPjxwYXRoIGQ9Ik02MTQuODMsNDA4LjFjLjEtLjQuMi0uOC4zLTEuMSwxLjEtNS4zLDIuMi0xMC42LDMuNC0xNS44LjgtMy44LDIuMy03LjMsNS40LTkuOWE4LjU3LDguNTcsMCwwLDEsNC41LTIuMSwyOCwyOCwwLDAsMSwwLDQuMWMtMS4xLDUuOC0yLjQsMTEuNi0zLjYsMTcuNC0uNSwyLjUtMS4xLDUtMS42LDcuNWg5LjZjMS40LTYuNiwyLjgtMTMuMSw0LjEtMTkuNmEzMi43OSwzMi43OSwwLDAsMCwxLTEwLjhjLS41LTQuNC0zLjMtNy03LjctNy4yYTE2LDE2LDAsMCwwLTcuNywxLjdjMS00LjYsMS45LTksMi45LTEzLjVINjE3Yy0uOSwwLTEuMy4yLTEuNSwxLjItMi44LDEzLjMtNS42LDI2LjYtOC41LDM5LjhsLTEuOCw4LjRDNjA4LjUzLDQwOC4xLDYxMS42Myw0MDguMSw2MTQuODMsNDA4LjFabS0yMTEuOS4xaDljLjIsMCwuNi0uNC43LS43LjQtMS40LjYtMi45LDEtNC4zLjYtMi42LDEuMS01LjIsMS43LThhNi4yMSw2LjIxLDAsMCwxLC44LDEuMmMyLjQsMy43LDQuNyw3LjMsNywxMWExLjY4LDEuNjgsMCwwLDAsMS43LjloMTAuOWMtNC42LTYuNi05LTEzLTEzLjQtMTkuM0w0NDEsMzcxLjVjLTQuMy0uMy04LjQtLjMtMTIuNS0uMmExLjc5LDEuNzksMCwwLDAtMSwuNmMtMi45LDIuOC01LjcsNS42LTguNSw4LjRhNC40OSw0LjQ5LDAsMCwxLS45LjZjMS42LTcuNSwzLjEtMTQuNyw0LjctMjJoLTkuNkM0MDkuOTMsMzc1LjMsNDA2LjUzLDM5MS43LDQwMi45Myw0MDguMlptODIuNy0yNy41Yy0uMS0uMS0uMi0uMS0uMi0uMiwxLjUtNy4yLDMuMS0xNC41LDQuNi0yMS44aC05LjZjLTMuNSwxNi41LTcsMzIuOS0xMC41LDQ5LjNoOS42Yy45LTQuMywxLjgtOC41LDIuOC0xMy4xLDIuNyw0LjMsNS4zLDguMyw3LjksMTIuM2ExLjYyLDEuNjIsMCwwLDAsMS42LjloMTBjLjMsMCwuNi0uMSwxLS4xLTQuNS02LjUtOC45LTEyLjktMTMuMy0xOS4ybDE4LjktMTcuN2MtLjcsMC0xLjEtLjEtMS41LS4xLTIuOCwwLTUuNS4yLTguMywwLTIuMy0uMi00LjIuMy01LjUsMi40YTUuNzMsNS43MywwLDAsMS0xLjEsMS4xQzQ4OS45MywzNzYuNiw0ODcuODMsMzc4LjcsNDg1LjYzLDM4MC43Wm0xNjUuNSwxMi41aDIxLjNjLjQtMi4xLjgtNC4xLDEtNmEzMS4wOCwzMS4wOCwwLDAsMCwwLTYuMWMtLjYtNi00LjQtMTAtOS45LTEwLjZhMTUuOTMsMTUuOTMsMCwwLDAtMTIuNiwzLjhjLTcuMiw2LjQtMTAsMTQuNi04LjksMjQsLjYsNC45LDMuMyw4LjUsOC4zLDEwYTE3LDE3LDAsMCwwLDcuMS40YzQuNi0uNSw4LjgtMi4yLDEzLTQtLjgtMi45LTEuNS01LjctMi4zLTguNWExLjQyLDEuNDIsMCwwLDEtLjItLjZjLTEuOSwxLTMuOCwyLTUuOCwyLjlhMTUuNzEsMTUuNzEsMCwwLDEtNy4xLDEuNiwzLjcyLDMuNzIsMCwwLDEtMy45LTMuNkM2NTEsMzk1LjQsNjUxLjEzLDM5NC40LDY1MS4xMywzOTMuMlptLTMwOC40LTEwLjVhMTMuMTQsMTMuMTQsMCwwLDEsMS41LS41YzIuOS0xLDUuNy0yLjEsOC42LTIuOCwyLjMtLjYsMy4zLjgsMi41LDMuMS00LjctLjgtNi42LS43LTkuMy4zYTE3LjMyLDE3LjMyLDAsMCwwLTEwLjcsMTUuNmMtLjEsNy4xLDQuOCwxMS41LDExLjgsMTAuNGE0Mi4wOSw0Mi4wOSwwLDAsMCw0LjgtMS4yYy4xLjUuMSwxLjEuMiwxLjhsOS4zLTEuMmMwLS40LS4xLS42LS4xLS45LS4xLTIuMi0uNS00LjUtLjEtNi43LjktNS41LDIuMS0xMSwzLjMtMTYuNCwxLjYtNy4zLTIuNS0xNC4zLTExLjQtMTMuNmEzOC4xOSwzOC4xOSwwLDAsMC0xMC40LDIuOC45NC45NCwwLDAsMC0uNS43QzM0Mi41MywzNzYuOCwzNDIuNjMsMzc5LjcsMzQyLjczLDM4Mi43Wm0tMTczLjQtMTEuNWMtLjcsMy40LTEuNCw2LjgtMi4yLDEwLjEtLjgsMy44LTEuNCw3LjYtMy4xLDExLjItMS40LDIuOS0zLjIsNS42LTYuMiw3YTE3LDE3LDAsMCwxLTIuNC41LDE4LjQ4LDE4LjQ4LDAsMCwxLS4xLTIuM2MxLTUsMi4xLTkuOSwzLjEtMTQuOS44LTMuOCwxLjYtNy42LDIuNS0xMS42aC05LjVjLS4xLjQtLjIuNy0uMywxLTEuNSw2LjktMi45LDEzLjgtNC40LDIwLjZhMjYuNDQsMjYuNDQsMCwwLDAtLjksOC40LDguMTEsOC4xMSwwLDAsMCw3LjEsNy41QTEzLjU2LDEzLjU2LDAsMCwwLDE2MSw0MDdjLjgtLjQsMS42LS45LDIuNi0xLjVWNDA4aDkuMWE4Ni43OCw4Ni43OCwwLDAsMSwuNi05YzEtNi4xLDIuMy0xMi4xLDMuNS0xOC4xLjYtMy4yLDEuNC02LjUsMi4xLTkuOEMxNzUuNzMsMzcxLjIsMTcyLjYzLDM3MS4yLDE2OS4zMywzNzEuMlptNTA2LjQsMzYuOWg5Yy4yLDAsLjYtLjUuNy0uOS44LTMuNCwxLjQtNi44LDIuMi0xMC4yYTg4Ljg5LDg4Ljg5LDAsMCwxLDMtMTAuNCwxMiwxMiwwLDAsMSw2LjItNi45LDEwLjg4LDEwLjg4LDAsMCwxLDIuNC0uN2MuMS4xLjMuMi40LjMtMS42LDkuNi00LDE5LjEtNS44LDI4LjdoOS42Yy43LTMuNCwxLjQtNi43LDIuMS0xMC4xLDEuMS01LjUsMi41LTExLDMuMy0xNi41LDEuMi03LjgtNC4yLTEyLjUtMTEuOC0xMC41YTUwLjUxLDUwLjUxLDAsMCwwLTYuMSwyLjN2LTIuMWgtOS4zQzY4MiwzODMuOSw2NzcuNzMsMzk1LjgsNjc1LjczLDQwOC4xWm0tMTA5LTExLjZjLTIuOS0uOC01LjctMS41LTguNC0yLjMtLjctLjItLjkuMS0xLjIuNmE0Ny4wNiw0Ny4wNiwwLDAsMS0zLjYsNC4yLDMuNjQsMy42NCwwLDAsMS0zLjcuOWMxLTYuNywyLjgtMTMuMyw0LjEtMjBoMTEuNWMuNi0yLjksMS4zLTUuOCwxLjktOC44aC0xMS41Yy43LTMuMywxLjQtNi41LDIuMS05LjhoLTkuNWMtLjYsMy0xLjMsNS45LTEuOSw4LjgtLjIuOC0uNSwxLTEuMywxLTEuMS0uMS0yLjIsMC0zLjIsMC0yLjYsMC0yLjYsMC0zLjIsMi41LS41LDItLjksNC4xLTEuNCw2LjJoNi44YTIsMiwwLDAsMS0uMS44Yy0uNywzLjUtMS41LDctMi4yLDEwLjZzLTEuNiw2LjktMS4xLDEwLjVhNy42Niw3LjY2LDAsMCwwLDYuMyw2LjksMTQuMSwxNC4xLDAsMCwwLDktMS4zQzU2MC45Myw0MDUsNTYzLjkzLDQwMSw1NjYuNzMsMzk2LjVabS0yNTguOC0xNi42Yy0uNywzLjItMS4zLDYuMi0xLjksOS4yLS44LDMuOC0xLjgsNy41LTEuNywxMS4zLjEsNC41LDIuNCw3LjUsNi40LDguMmExNC4yOSwxNC4yOSwwLDAsMCw2LjgtLjRjNi4xLTEuOSw5LjYtNi41LDEyLjktMTEuOGwtNi44LTEuOGMtMi40LS42LTIuNC0uNi0zLjcsMS4zYTkuNDgsOS40OCwwLDAsMS00LjUsMy45Yy0xLjYuNS0yLC4xLTEuOC0xLjUuNC0yLjMuOS00LjUsMS40LTYuOC44LTMuOSwxLjctNy44LDIuNS0xMS43aDExLjRjLjctMi45LDEuMy01LjgsMi04LjhoLTExLjVjLjctMy4zLDEuNC02LjUsMi05LjdoLTkuNmMtLjYsMi45LTEuMyw1LjgtMS45LDguNy0uMi45LS41LDEuMS0xLjMsMS4xLTEuNi0uMS0zLjMsMC00LjksMC0uMywwLS45LjItLjkuNS0uNywyLjctMS4yLDUuNC0xLjksOC4zWm0tMTk2LDIuMWg4Yy0xLjksOC44LTMuNywxNy40LTUuNSwyNi4xSDEyNGwuMy0xLjIsNS4xLTI0Yy4yLS44LjQtMS4xLDEuMy0xLDIsLjEsNC4xLDAsNi4xLDAsMy4yLDAsMy4yLDAsMy44LTMuMS40LTEuOS43LTMuNywxLjEtNS43aC0xMC4zYTcuNDksNy40OSwwLDAsMSwuNC0xLjZjMS0zLjMsMy41LTQuNCw2LjYtMywxLC40LDIsMSwzLDEuNSwxLjMuNywyLjcsMS4zLDQuMSwyLC43LTMuMywxLjMtNi40LDItOS41LS43LS4zLTEuMy0uNy0xLjktMS0xLjItLjUtMi4zLTEuMS0zLjUtMS41LTguMy0yLjctMTYuNCwxLjItMTkuMyw5LjUtLjQsMS4yLS43LDIuNC0xLDMuNmgtNy45QzExMy4xMywzNzYuMSwxMTIuNTMsMzc4LjksMTExLjkzLDM4MlptMTg0LTUuOGE1NS41Nyw1NS41NywwLDAsMC01LjItMy43Yy02LjgtMy44LTE1LjYtMi0yMCw0LTMuMyw0LjUtMywxMCwuOSwxMy4zYTI2LjI0LDI2LjI0LDAsMCwwLDUuMSwzYzEuMy43LDIuNiwxLjIsMy45LDEuOGEyLDIsMCwwLDEsMS4xLDIuNWMtLjUsMi4zLTMsMy41LTUuNywyLjhhMTEuMTQsMTEuMTQsMCwwLDEtNS45LTQuM2MtLjYtLjgtMS4xLTEuNS0xLjctMi4zLTEuMiwxLjQtMi4zLDIuNi0zLjUsMy44cy0yLjIsMi41LTMuMywzLjdjMy4xLDMuNyw1LjgsNS43LDkuNCw3LDcsMi41LDE0LjUuMiwxOC4zLTUuN3MyLjMtMTIuMi0zLjktMTUuNWMtMS40LS43LTIuOC0xLjMtNC4zLTEuOWExOS42NSwxOS42NSwwLDAsMS0yLjUtMS4zYy0uOC0uNS0uOS0xLjEtLjQtMmE0LjI1LDQuMjUsMCwwLDEsNC4zLTIuMSwxMC41NiwxMC41NiwwLDAsMSw0LjgsMi41Yy45LjcsMS43LDEuNCwyLjYsMi4xQzI5MiwzODEuNCwyOTMuOTMsMzc4LjksMjk1LjkzLDM3Ni4yWm05Ny4yLDE3LjRhMTMuMSwxMy4xLDAsMCwxLTEuMywxLjJjLTIuMSwxLjktNC4xLDQtNi44LDUtMy4yLDEuMS01LjgtLjQtNi4yLTMuOGExOC40MiwxOC40MiwwLDAsMSwzLjctMTMuNiw3Ljg0LDcuODQsMCwwLDEsNC4yLTIuOWMzLS45LDQuOCwwLDUuOCwyLjkuNSwxLjMuOCwyLjYsMS4zLDQsMy4xLTEuOCw2LTMuNSw5LjMtNS40LTEuMi0yLTIuMi00LTMuNS01LjhhMTEuMTYsMTEuMTYsMCwwLDAtNy40LTQuNSwxNy4yNSwxNy4yNSwwLDAsMC0xNi4zLDUuOGMtNC43LDUuMi02LjcsMTEuNS02LjgsMTguNC0uMiw5LjMsNi4yLDE0LjksMTUuNSwxMy44LDUuOC0uNyw5LjktNC4yLDE0LTcuOUMzOTYuNzMsMzk4LjQsMzk1LDM5Ni4xLDM5My4xMywzOTMuNlptMjAzLjEtNy4yYzMuMS0xLjgsNi4xLTMuNiw5LjEtNS4zLS42LTEuMy0xLjEtMi40LTEuNy0zLjUtMi0zLjctNC45LTYuMi05LjEtNi45YTE3LjM5LDE3LjM5LDAsMCwwLTE2LjIsNS44Yy01LDUuNS02LjksMTIuMy02LjgsMTkuNi4xLDYsMy4yLDEwLjIsOC4zLDExLjlhMTYsMTYsMCwwLDAsOC40LjVjNS4xLTEsOC45LTQuMywxMi43LTcuNy0xLjgtMi40LTMuNi00LjgtNS40LTcuM2ExMy4xLDEzLjEsMCwwLDEtMS4zLDEuMmMtMi4xLDItNC4xLDQuMS02LjksNS0zLjEsMS01LjctLjUtNi4xLTMuOGExOSwxOSwwLDAsMSwzLjYtMTMuNSw3LjU5LDcuNTksMCwwLDEsNC4xLTIuOWMzLS45LDQuOS0uMSw2LDIuOUEzNy41OCwzNy41OCwwLDAsMSw1OTYuMjMsMzg2LjRabS04NC4zLTYuNkg1MjFjLTIsOS41LTQsMTguOC02LDI4LjMsMi44LDAsNS41LS4xLDguMiwwLDEuMiwwLDEuNS0uNCwxLjgtMS41LDEuNy04LjMsMy41LTE2LjYsNS4zLTI0LjguOC0zLjUsMS41LTcuMSwyLjMtMTAuN2wtMS4yLS4zYzIuMi0xLjYsMy4xLTIuOCwzLjYtNC42YTUuNTYsNS41NiwwLDAsMC0yLjYtNi41LDcsNywwLDAsMC03LjcsMS4zLDYuNTQsNi41NCwwLDAsMC0xLjcsNy41LDEzLDEzLDAsMCwwLDEuOCwyLjVoLTkuOWMtLjQsMC0xLC4zLTEsLjZDNTEzLjEzLDM3NC4zLDUxMi42MywzNzcsNTExLjkzLDM3OS44Wm0tMzE4LjItMTIuM2MtMi45LDEzLjYtNS43LDI3LjEtOC42LDQwLjdoOS42YzMuNS0xNi41LDctMzIuOSwxMC41LTQ5LjNoLTE4LjdjLS42LDIuOS0xLjMsNS43LTEuOSw4LjZabTI4LjcsNDAuN2MzLjUtMTYuNSw3LTMyLjksMTAuNS00OS4zaC0xOC43Yy0uNiwyLjktMS4zLDUuNy0xLjksOC43aDkuMWMtMi45LDEzLjYtNS43LDI3LjEtOC42LDQwLjZabTQyOC43LTE1YzAsMS4yLS4xLDIuMiwwLDMuMnEuMywzLjQ1LDMuOSwzLjZhMTYsMTYsMCwwLDAsNy4xLTEuNmMyLS45LDMuOC0xLjksNS44LTIuOWExLjQyLDEuNDIsMCwwLDEsLjIuNmMuOCwyLjgsMS41LDUuNiwyLjMsOC41LTQuMiwxLjgtOC40LDMuNS0xMyw0YTE3LDE3LDAsMCwxLTcuMS0uNGMtNS0xLjUtNy43LTUtOC4zLTEwLTEuMS05LjQsMS43LTE3LjcsOC45LTI0YTE2LjQzLDE2LjQzLDAsMCwxLDEyLjYtMy44YzUuNS41LDkuNCw0LjYsOS45LDEwLjZhMzEuMDgsMzEuMDgsMCwwLDEsMCw2LjFjLS4yLDItLjYsMy45LTEsNkM2NjUuMzMsMzkzLjIsNjU4LjIzLDM5My4yLDY1MS4xMywzOTMuMlptMTMuMi04LjdhMTUsMTUsMCwwLDAtLjQtMi40LDMuNDMsMy40MywwLDAsMC0zLjUtMi45Yy0yLjcsMC02LDIuNi02LjcsNS4zWm0tMzIxLjYtMS44cS0uMTUtNC41LS4zLTguN2ExLjE2LDEuMTYsMCwwLDEsLjUtLjdjMy40LTEuMiw2LjctMi41LDEwLjQtMi44LDguOS0uNywxMyw2LjMsMTEuNCwxMy42LTEuMiw1LjUtMi40LDEwLjktMy4zLDE2LjQtLjQsMi4yLDAsNC40LjEsNi43LDAsLjMuMS41LjEuOWwtOS4zLDEuMmExNC4wNSwxNC4wNSwwLDAsMS0uMi0xLjgsNDIuMDksNDIuMDksMCwwLDEtNC44LDEuMmMtNywxLTExLjktMy40LTExLjgtMTAuNGExNy4zMiwxNy4zMiwwLDAsMSwxMC43LTE1LjZjMi43LTEsNC42LTEuMSw5LjMtLjMuOC0yLjMtLjItMy43LTIuNS0zLjEtMi45LjgtNS44LDEuOS04LjYsMi44QzM0My43MywzODIuMywzNDMuMzMsMzgyLjUsMzQyLjczLDM4Mi43Wm0xMC44LDguNWMtMi4zLS43LTQuNC0xLTYuMS43YTguNDEsOC40MSwwLDAsMC0yLjUsNy4yYy4xLjkuNywxLjIsMS42LDEuMSwyLjgtLjUsNC42LTIuNCw2LTQuNUMzNTMuMzMsMzk0LjQsMzUzLjIzLDM5Mi43LDM1My41MywzOTEuMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTAuMTIgLTM1Ny4yKSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6M3B4Ii8+PC9zdmc+"},157:function(L,t,M){"use strict";var u=M(158),e=M(0),s=M.n(e),j=M(4),i=M.n(j),a=M(163),w=M.n(a),n=M(150);function N(L){var t=L.description,M=L.lang,e=L.meta,j=L.keywords,i=L.title;return s.a.createElement(n.StaticQuery,{query:y,render:function(L){var u=t||L.site.siteMetadata.description;return s.a.createElement(w.a,{htmlAttributes:{lang:M},title:i,titleTemplate:"%s | "+L.site.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:L.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(j.length>0?{name:"keywords",content:j.join(", ")}:[]).concat(e)})},data:u})}N.defaultProps={lang:"en",meta:[],keywords:[]},N.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=N;var y="1025518380"},158:function(L){L.exports={data:{site:{siteMetadata:{title:"Full Stack Kitchen",description:"Full Stack Kitchen: Unique Dessert Recipes from an Engineer's Mind",author:"Tara Siegel"}}}}},159:function(L,t,M){"use strict";var u=M(7),e=M.n(u),s=M(0),j=M.n(s),i=(M(151),M(154),M(150)),a=(M(153),M(156)),w=M.n(a),n=M(166),N=M.n(n),y=(M(162),M(160)),D=M(161),c=function(L){function t(t){var M;return(M=L.call(this,t)||this).toggleMenu=function(){M.setState({menuOpen:!M.state.menuOpen})},M.state={start:!1,menuOpen:!1},M}e()(t,L);var M=t.prototype;return M.componentDidMount=function(){},M.render=function(){return j.a.createElement("div",{className:"header"},j.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},className:"header-logo-container",to:"/"},j.a.createElement(N.a,{id:"header-logo",option:{file:w.a,animTimingFunction:"EASE",type:"delayed",delay:200,duration:500,onReady:console.log},style:{height:"auto",width:"450px"},callback:console.log})),j.a.createElement("div",{className:"header__link-container "+(this.state.menuOpen?"menu-open":"")},j.a.createElement("div",{className:"header__menu mobile",onClick:this.toggleMenu},"menu"),j.a.createElement("div",{className:"header__link mobile"},j.a.createElement(i.Link,{to:"/"},"home")),j.a.createElement("div",{className:"header__link"},j.a.createElement(i.Link,{to:"/about"},"about")),j.a.createElement("div",{className:"header__link"},j.a.createElement(i.Link,{to:"/recipes"},"recipes")),j.a.createElement("div",{className:"header__link"},j.a.createElement("a",{href:"https://www.instagram.com/taras.kitchen",target:"_blank"},j.a.createElement(y.Icon,{size:30,icon:D.instagram})))))},t}(j.a.Component),S=function(L){function t(){return L.apply(this,arguments)||this}return e()(t,L),t.prototype.render=function(){var L=this.props,t=(L.location,L.title,L.children);return j.a.createElement("div",{className:"body-container"},j.a.createElement(c,null),j.a.createElement("div",{className:"layout-container"},t),j.a.createElement("footer",null,j.a.createElement("div",{className:"footer__text"},"© ",(new Date).getFullYear()," fullstackkitchen.com")))},t}(j.a.Component);t.a=S},186:function(L,t,M){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.github={viewBox:"0 0 1536 1792",children:[{name:"path",attribs:{d:"M768 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 0.5-76.5t0.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 0.5 88.5t0.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zM291 1231q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zM322 1265q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zM352 1310q9-7 0-19-8-13-17-6-9 5 0 18t17 7zM394 1352q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zM451 1377q3-11-13-16-15-4-19 7t13 15q15 6 19-6zM514 1382q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zM572 1372q-2-11-18-9-16 3-14 15t18 8 14-14z"}}]}},187:function(L,t,M){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.facebook={viewBox:"0 0 1024 1792",children:[{name:"path",attribs:{d:"M959 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"}}]}},188:function(L,t,M){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.facebookSquare={viewBox:"0 0 1536 1792",children:[{name:"path",attribs:{d:"M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z"}}]}},189:function(L,t,M){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.pinterest={viewBox:"0 0 1536 1792",children:[{name:"path",attribs:{d:"M1536 896q0 209-103 385.5t-279.5 279.5-385.5 103q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214t-172.5-163-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5-21.5 134q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5t273.5-108.5q151 0 235.5 82t84.5 213q0 170-68.5 289t-175.5 119q-61 0-98-43.5t-23-104.5q8-35 26.5-93.5t30-103 11.5-75.5q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281t-127-423q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"}}]}},199:function(L,t,M){}}]);
//# sourceMappingURL=component---src-pages-about-js-21968eaa63099db2ff0a.js.map