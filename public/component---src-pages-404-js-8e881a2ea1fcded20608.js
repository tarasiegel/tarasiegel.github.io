(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(158),s=n(156),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=l;var u="1097489062"},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(148),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(151),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(160),r=n.n(a),i=n(161),o=n.n(i);o.a.baseFontSize="16px",o.a.baseLineHeight="24px",o.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#a09097",backgroundImage:"none",textShadow:"none",padding:"0 5px"},"a:hover":{backgroundColor:"#a09097",color:"#fff"}}};var c=new r.a(o.a);var s=c.rhythm;c.scale},151:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,n){},155:function(e,t,n){e.exports=n.p+"static/fullstackkitchen_logo-f595365e2769f0358f9268df6e7e692d.svg"},156:function(e,t,n){"use strict";var a=n(157),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(165),l=n.n(s),u=n(149);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Kitchen",description:"Full Stack Kitchen: Unique Dessert Recipes from an Engineer's Mind",author:"Tara Siegel"}}}}},158:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=(n(150),n(154),n(149)),s=(n(153),n(155)),l=n.n(s),u=n(162),d=n.n(u),p=(n(159),n(163)),m=n(164),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleMenu=function(){n.setState({menuOpen:!n.state.menuOpen})},n.state={start:!1,menuOpen:!1},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){},n.render=function(){return o.a.createElement("div",{className:"header"},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},className:"header-logo-container",to:"/"},o.a.createElement(d.a,{id:"header-logo",option:{file:l.a,animTimingFunction:"EASE",type:"delayed",delay:200,duration:500,onReady:console.log},style:{height:"auto",width:"450px"},callback:console.log})),o.a.createElement("div",{className:"header__link-container "+(this.state.menuOpen?"menu-open":"")},o.a.createElement("div",{className:"header__menu mobile",onClick:this.toggleMenu},"menu"),o.a.createElement("div",{className:"header__link"},o.a.createElement(c.Link,{to:"/about"},"about")),o.a.createElement("div",{className:"header__link"},o.a.createElement(c.Link,{to:"/recipes"},"recipes")),o.a.createElement("div",{className:"header__link"},o.a.createElement(c.Link,{to:"/contact"},"contact")),o.a.createElement("div",{className:"header__link"},o.a.createElement("a",{href:"https://www.instagram.com/taras.kitchen",target:"_blank"},o.a.createElement(p.Icon,{size:30,icon:m.instagram})))))},t}(o.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.title,e.children);return o.a.createElement("div",{className:"body-container"},o.a.createElement(f,null),o.a.createElement("div",{className:"layout-container"},t),o.a.createElement("footer",null,o.a.createElement("div",{className:"footer__text"},"© ",(new Date).getFullYear()," fullstackkitchen.com")))},t}(o.a.Component);t.a=h}}]);
//# sourceMappingURL=component---src-pages-404-js-8e881a2ea1fcded20608.js.map