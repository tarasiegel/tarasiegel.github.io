(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(33);var n=a(7),r=a.n(n),i=a(0),A=a.n(i),o=a(149),c=a(166),l=a(158),s=a(156),u=a(150),d=(a(192),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return A.a.createElement(l.a,{location:this.props.location,title:t},A.a.createElement(s.a,{title:e.frontmatter.title,description:e.excerpt}),A.a.createElement("h1",null,e.frontmatter.title),A.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(1)})},e.frontmatter.date),A.a.createElement("div",{className:"blog-html",dangerouslySetInnerHTML:{__html:e.html}}),A.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),A.a.createElement(c.a,null),A.a.createElement("ul",{className:"blog-post__navigation"},A.a.createElement("li",null,n&&A.a.createElement(o.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),A.a.createElement("li",null,r&&A.a.createElement(o.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(A.a.Component));t.default=d;var p="2761936148"},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),A=a.n(i),o=a(148),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(151),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(160),r=a.n(n),i=a(161),A=a.n(i);A.a.baseFontSize="16px",A.a.baseLineHeight="24px",A.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#a09097",backgroundImage:"none",textShadow:"none",padding:"0 5px"},"a:hover":{backgroundColor:"#a09097",color:"#fff"}}};var o=new r.a(A.a);var c=o.rhythm,l=o.scale},151:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),A=a.n(i),o=a(51),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,a){},155:function(e,t,a){e.exports=a.p+"static/fullstackkitchen_logo-f595365e2769f0358f9268df6e7e692d.svg"},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),A=a(4),o=a.n(A),c=a(165),l=a.n(c),s=a(149);function u(e){var t=e.description,a=e.lang,r=e.meta,A=e.keywords,o=e.title;return i.a.createElement(s.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var d="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Kitchen",description:"Full Stack Kitchen: Unique Dessert Recipes from an Engineer's Mind",author:"Tara Siegel"}}}}},158:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),A=a.n(i),o=(a(150),a(154),a(149)),c=(a(153),a(155)),l=a.n(c),s=a(162),u=a.n(s),d=(a(159),a(163)),p=a(164),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={start:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return A.a.createElement("div",{className:"header"},A.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},className:"header-logo-container",to:"/"},A.a.createElement(u.a,{id:"header-logo",option:{file:l.a,animTimingFunction:"EASE",type:"delayed",delay:200,duration:500,onReady:console.log},style:{height:"auto",width:"450px"},callback:console.log})),A.a.createElement("div",{className:"header__link-container"},A.a.createElement("div",{className:"header__link"},A.a.createElement(o.Link,{to:"/about"},"about")),A.a.createElement("div",{className:"header__link"},A.a.createElement(o.Link,{to:"/recipes"},"recipes")),A.a.createElement("div",{className:"header__link"},A.a.createElement("a",{href:"https://www.instagram.com/taras.kitchen",target:"_blank"},A.a.createElement(d.Icon,{size:30,icon:p.instagram})))))},t}(A.a.Component),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.title,e.children);return A.a.createElement("div",{className:"body-container"},A.a.createElement(f,null),A.a.createElement("div",{className:"layout-container"},t,A.a.createElement("footer",null,"© ",(new Date).getFullYear()," fullstackkitchen.com")))},t}(A.a.Component);t.a=m},166:function(e,t,a){"use strict";a(167);var n=a(169),r=a(0),i=a.n(r),A=a(149),o=a(153),c=a.n(o),l=a(150);var s="20992707";t.a=function(){return i.a.createElement(A.StaticQuery,{query:s,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},i.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who lives and works in Brooklyn, NY building useful things."," ",i.a.createElement("a",{href:"https://instagram.com/"+n.instagram},"Follow on instagram")))},data:n})}},167:function(e,t,a){"use strict";a(168)("fixed",function(e){return function(){return e(this,"tt","","")}})},168:function(e,t,a){var n=a(11),r=a(24),i=a(16),A=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(A,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},169:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABgBAAIDAAAAAAAAAAAAAAAAAAIDAAEE/9oADAMBAAIQAxAAAAHXKWem700PFAJPSAaP/8QAHBAAAQQDAQAAAAAAAAAAAAAAAgABAzEREiEi/9oACAEBAAEFAm4Iy5IrlLURLB2pn8x3uS//xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIQETL/2gAIAQMBAT8BbqXZiP/EABYRAQEBAAAAAAAAAAAAAAAAABABMv/aAAgBAgEBPwEmT//EABwQAAIBBQEAAAAAAAAAAAAAAAABEQIQITFREv/aAAgBAQAGPwKZpHpejdJHRTwl4vhn/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRQWH/2gAIAQEAAT8hfDJu9jkrrtfkPwZ+RKoIsfYBmJm/GbyW/OxK3tZs0WuSq8Dwn//aAAwDAQACAAMAAAAQw9/8/8QAGREAAwADAAAAAAAAAAAAAAAAAAERITFB/9oACAEDAQE/EEUWFKchS0f/xAAZEQABBQAAAAAAAAAAAAAAAAAAARARITH/2gAIAQIBAT8QttCVP//EAB0QAQACAgMBAQAAAAAAAAAAAAEAESFBMVFhsZH/2gAIAQEAAT8QuLKqrDu4iRinF2PLuC4oMGIRVQkB99EsSMA/h7YRDCQXhh6xFNygGhUY4OVGsF/SD7LK6C+p/9k=",width:50,height:50,src:"/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/d2d31/profile-pic.jpg",srcSet:"/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/d2d31/profile-pic.jpg 1x,\n/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/0b804/profile-pic.jpg 1.5x,\n/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/753c3/profile-pic.jpg 2x,\n/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Tara Siegel",social:{instagram:"taras.kitchen"}}}}}},192:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-66b65076007ef7feb296.js.map