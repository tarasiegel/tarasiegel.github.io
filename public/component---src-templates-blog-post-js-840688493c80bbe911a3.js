(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(e,t,a){"use strict";a.r(t);var n=a(205),i=a.n(n),r=(a(180),a(207)),c=a.n(r),o=a(7),s=a.n(o),l=a(0),A=a.n(l),m=a(157),p=(a(174),a(162)),d=a(161),u=(a(34),a(33),a(181),a(73),a(4)),g=a.n(u),f=a(208),h=a(169),E=a.n(h);function _(e){var t=e.data,a=e.name,n=e.keywords,i=e.date,r=e.description;return A.a.createElement(m.b,{query:b,render:function(e){return A.a.createElement(E.a,null,A.a.createElement("script",{type:"application/ld+json"},'{\n                    "@context": "https://schema.org/",\n                    "@type": "Recipe",\n                    "name": "'+a+'",\n                    "author": {\n                        "@type": "Person",\n                        "name": "Tara Siegel"\n                    },\n                    "datePublished": "'+i+'",\n                    "description": "'+r+'",\n                    "prepTime": "'+t.prepTime+'",\n                    "cookTime": "'+t.cookTime+'",\n                    "totalTime": "'+t.totalTime+'",\n                    "keywords": "'+n+'",\n                    "recipeYield": "'+t.yield+'",\n                    "recipeCategory": "Dessert",\n                    "recipeCuisine": "Dessert",\n                    "recipeIngredient": ['+(s=t.ingredients,l=[],s.forEach(function(e){l=l.concat(e.data)}),console.log(l),l=l.map(function(e){return'"'+e+'"'}))+'],\n                    "recipeInstructions": ['+(c=t.instructions,o=[],c.forEach(function(e){o.push(['{\n            "@type": "HowToStep",\n            "text": "'+e+'"\n        }'])}),o)+"]\n                }"));var c,o,s,l},data:f})}_.defaultProps={data:{name:"Cookies",image:"",datePublished:"",description:"",keywords:"",yield:"",ingredients:[],instructions:[]}},_.propTypes={data:g.a.object};var v=_,b="4240880194",k=(a(149),a(160)),N=a.n(k),y=a(209),w=a.n(y),B=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).getRecipeSection=function(e){console.log(e);var t=[];return e.forEach(function(e,a){t.push(A.a.createElement(I,{recipe:e,sectionKey:a,key:a}))}),console.log(t),t},t}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,a=e.recipe,n=e.image,i=this.getRecipeSection(a);return A.a.createElement("div",{className:"recipe"},A.a.createElement(v,Object.assign({data:a[0]},this.props)),A.a.createElement("div",{className:"recipe__image"},A.a.createElement(N.a,{fluid:n})),A.a.createElement("h3",{className:"recipe__title"},t),i)},t}(A.a.Component),I=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).getTime=function(e){var t=Math.floor(e/60),a=e%60,n="";return t>0&&(n+=t+" hour"+(t>1?"s":""),n+=a>0?" & ":""),a>0&&(n+=a+" minutes"),n},t.getRefData=function(e){var t=[];return e.forEach(function(e,a){var n=e.data.map(function(e){return!!e.reference&&e.reference});t.push(n)}),t},t.instructionClicked=function(e){var a=e.target,n=a.dataset.ref,i=w()("#ingredient--"+n+" input");console.log("click"),console.log(w()("#ingredient--"+n+" input")),i.prop("checked",!i.prop("checked")),t.strikeOutIngredient(w()(a),i)},t.instructionHovered=function(e){var t=e.target.dataset.ref;w()("#ingredient--"+t).addClass("hover"),console.log(w()("#ingredient--"+t))},t.instructionLeft=function(e){var t=e.target.dataset.ref;w()("#ingredient--"+t).removeClass("hover")},t.strikeOutIngredient=function(e,t){if(console.log(e),console.log(t),null!==e){var a=t.prop("checked")?"line-through":"underline";console.log(a),e.attr("style","text-decoration: "+a+";")}},t.updateInstruction=function(e,t,a){var n=e;return t.forEach(function(e,t){e.forEach(function(e,i){if(-1!==n.indexOf(e)){var r=a+"-"+t+"-"+i;n=n.replace(e,'<span id="ref-'+r+'" class="instruction-item" data-ref="'+r+'" data-ingredient='+e+" >"+e+"</span>")}})}),n},t}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;w()(".instruction-item").on({mouseenter:function(t){e.instructionHovered(t)},mouseleave:function(t){e.instructionLeft(t)},click:function(t){e.instructionClicked(t)}})},a.render=function(){var e=this,t=this.props,a=t.recipe,n=t.sectionKey,i=this.getRefData(a.ingredients);console.log(i);var r=a.ingredients.map(function(t,a){return A.a.createElement(j,{key:a,ingredientData:t,sectionKey:n,ingredientKey:a,strikeOutIngredient:e.strikeOutIngredient})}),c=a.instructions.map(function(t,a){return A.a.createElement("div",{className:"recipe__instruction recipe__paragraph",index:a,key:a,dangerouslySetInnerHTML:{__html:e.updateInstruction(t,i,n)}})}),o=a.assembly?a.assembly.map(function(e,t){return A.a.createElement("div",{className:"recipe__assembly recipe__paragraph",index:t,key:t,dangerouslySetInnerHTML:{__html:e}})}):[];return A.a.createElement("div",{className:"recipe__section recipe__section--"+n},a.subTitle?A.a.createElement("h3",{className:"recipe__sub-title"},a.subTitle):null,A.a.createElement("div",{className:"recipe__time"},A.a.createElement("em",{className:"recipe__yield"},a.yield),A.a.createElement("div",{className:"recipe__prep-time"},"Prep: "+this.getTime(a.prepTime)),A.a.createElement("div",{className:"recipe__cook-time"},"Cook: "+this.getTime(a.cookTime)),A.a.createElement("div",{className:"recipe__total-time"},"Total: "+this.getTime(a.totalTime))),A.a.createElement("div",{className:"recipe__content"},A.a.createElement("div",{className:"recipe__ingredients-container"},A.a.createElement("div",{className:"recipe__ingredients-title recipe__section-title"},"Ingredients"),r),A.a.createElement("div",{className:"recipe__instructions-container"},A.a.createElement("div",{className:"recipe__instructions-title recipe__section-title"},"Directions"),c,o.length>0?A.a.createElement("div",{className:"recipe__assembly-container"},A.a.createElement("div",{className:"recipe__assembly-title recipe__section-title"},"Assembly"),o):null)))},t}(A.a.Component),j=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).inputClicked=function(e){var a=e.target,n=a.dataset.ingredient,i=w()("#ref-"+n);t.props.strikeOutIngredient(i,w()(a))},t}return s()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.ingredientData,n=t.sectionKey,i=t.ingredientKey,r=a.data.map(function(t,a){var r="object"==typeof t?t.text:t,c=n+"-"+i+"-"+a;return A.a.createElement("li",{id:"ingredient--"+c,key:a,className:"ingredient-section__ingredient-item ingredient--"+c,"data-name":t.reference?t.reference:t},A.a.createElement("input",{className:"ingredient-section__ingredient-item-input",type:"checkbox",id:"cbx-"+c,"data-ingredient":""+c,onClick:e.inputClicked}),A.a.createElement("label",{htmlFor:"cbx-"+c,className:"check"},A.a.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16"},A.a.createElement("path",{d:"M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C14,1 15,2 15,3.5 L15,14.5 C15,14 14,15 14.5,15 L3.5,15 C2,15 1,14 1,14.5 L1,9 Z"}),A.a.createElement("polyline",{points:"1 9 7 14 15 4"}))),A.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))});return A.a.createElement("div",{className:"ingredient-section"},A.a.createElement("div",{className:"ingredient-section__title"},a.title),A.a.createElement("div",{className:"ingredient-section__ingredients"},r))},t}(A.a.Component);j.propTypes={ingredientData:g.a.object},j.defaultProps={ingredientData:[]};var Q=B,D=a(178),T=a(158),x=(a(150),a(166)),C=a(167),R=a(173),S=a(210);a.d(t,"pageQuery",function(){return Y});var M=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={recipeData:[]},a}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=this.props.pageContext.slug;this.getRecipeData(t).then(function(t){e.setState({recipeData:t.default})}).catch(function(t){e.setState({recipeData:!1})})},n.getRecipeData=function(){var e=c()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a(211)("./blog"+t+"recipe.js"));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,i=a.next;return console.log(e.frontmatter.image.childImageSharp.fluid),console.log(e),A.a.createElement(p.a,{location:this.props.location,title:t},A.a.createElement(d.a,{title:e.frontmatter.title,description:e.excerpt}),A.a.createElement("div",{className:"blog-post--left"},A.a.createElement("h1",{className:"blog-post__title"},e.frontmatter.title),A.a.createElement("p",{className:"blog-post__date"},e.frontmatter.date),A.a.createElement("div",{className:"blog-html",dangerouslySetInnerHTML:{__html:e.html}}),this.state.recipeData?A.a.createElement("div",{className:"recipe-container"},A.a.createElement(Q,{recipe:this.state.recipeData,name:e.frontmatter.title,keywords:e.frontmatter.tags,date:e.frontmatter.date,description:e.frontmatter.description,image:e.frontmatter.image.childImageSharp.fluid})):null,A.a.createElement("hr",{style:{marginBottom:Object(T.a)(1)}}),A.a.createElement("div",{className:"recipe-tags"},e.frontmatter.tags.map(function(e){return A.a.createElement("a",{className:"recipe-tag",href:"/recipes"},"  "+e+"  ")})),A.a.createElement("ul",{className:"blog-post__navigation"},A.a.createElement("li",null,n&&A.a.createElement(m.a,{to:n.fields.slug,rel:"prev"},"< "+n.frontmatter.title)),A.a.createElement("li",null,i&&A.a.createElement(m.a,{to:i.fields.slug,rel:"next"},i.frontmatter.title+" >"))),A.a.createElement("div",{className:"blog-post__bottom"},A.a.createElement("div",{className:"blog-post__bottom-title"},"follow at ",A.a.createElement("a",{href:"https://www.instagram.com/taras.kitchen",target:"_blank"},"@taras.kitchen")),A.a.createElement("div",{className:"blog-post__share-tools desktop"},A.a.createElement("a",{className:"is-icon",href:"https://www.instagram.com/taras.kitchen",target:"_blank"},A.a.createElement(x.Icon,{size:25,icon:C.instagram})),A.a.createElement("a",{className:"is-icon",href:"https://www.facebook.com/tarasiegelskitchen/",target:"_blank"},A.a.createElement(x.Icon,{size:25,icon:R.facebook})),A.a.createElement("a",{className:"is-icon",href:"mailto:tarafsiegel@gmail.com",target:"_blank"},A.a.createElement(x.Icon,{size:25,icon:S.envelope}))),A.a.createElement(D.a,null),A.a.createElement("div",{className:"blog-post__share-tools mobile"},A.a.createElement("a",{className:"is-icon",href:"https://www.instagram.com/taras.kitchen",target:"_blank"},A.a.createElement(x.Icon,{size:30,icon:C.instagram})),A.a.createElement("a",{className:"is-icon",href:"https://www.facebook.com/tarasiegelskitchen/",target:"_blank"},A.a.createElement(x.Icon,{size:30,icon:R.facebook})),A.a.createElement("a",{className:"is-icon",href:"mailto:tarafsiegel@gmail.com",target:"_blank"},A.a.createElement(x.Icon,{size:30,icon:S.envelope}))))),A.a.createElement("div",{className:"blog-post--right"}))},t}(A.a.Component),Y=(t.default=M,"2834178697")},174:function(e,t,a){"use strict";a(175),a(177),a(0),a(157),a(160),a(158)},177:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABgBAAIDAAAAAAAAAAAAAAAAAAIDAAEE/9oADAMBAAIQAxAAAAHXKWem700PFAJPSAaP/8QAHBAAAQQDAQAAAAAAAAAAAAAAAgABAzEREiEi/9oACAEBAAEFAm4Iy5IrlLURLB2pn8x3uS//xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIQETL/2gAIAQMBAT8BbqXZiP/EABYRAQEBAAAAAAAAAAAAAAAAABABMv/aAAgBAgEBPwEmT//EABwQAAIBBQEAAAAAAAAAAAAAAAABEQIQITFREv/aAAgBAQAGPwKZpHpejdJHRTwl4vhn/8QAGxABAAMBAQEBAAAAAAAAAAAAAQARITFRQWH/2gAIAQEAAT8hfDJu9jkrrtfkPwZ+RKoIsfYBmJm/GbyW/OxK3tZs0WuSq8Dwn//aAAwDAQACAAMAAAAQw9/8/8QAGREAAwADAAAAAAAAAAAAAAAAAAERITFB/9oACAEDAQE/EEUWFKchS0f/xAAZEQABBQAAAAAAAAAAAAAAAAAAARARITH/2gAIAQIBAT8QttCVP//EAB0QAQACAgMBAQAAAAAAAAAAAAEAESFBMVFhsZH/2gAIAQEAAT8QuLKqrDu4iRinF2PLuC4oMGIRVQkB99EsSMA/h7YRDCQXhh6xFNygGhUY4OVGsF/SD7LK6C+p/9k=",width:50,height:50,src:"/fullstackkitchen/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/c3bbc/profile-pic.jpg",srcSet:"/fullstackkitchen/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/c3bbc/profile-pic.jpg 1x,\n/fullstackkitchen/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/ac385/profile-pic.jpg 1.5x,\n/fullstackkitchen/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/587d5/profile-pic.jpg 2x,\n/fullstackkitchen/static/ca2cdcba6cc7692c4f0d3f5db5632f2f/20b3c/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Tara Siegel",social:{instagram:"taras.kitchen"}}}}}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Kitchen",description:"Full Stack Kitchen: Unique Dessert Recipes from an Engineer's Mind",author:"Tara Siegel"}}}}},211:function(e,t,a){var n={"./blog/berry-rhubarb-bars/recipe.js":[212,13],"./blog/blood-orange-bars/recipe.js":[213,14],"./blog/hot-cocoa-macarons/recipe.js":[214,15],"./blog/tomato-mole-jam/recipe.js":[215,16]};function i(e){var t=n[e];return t?a.e(t[1]).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(n)},i.id=211,e.exports=i}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-840688493c80bbe911a3.js.map