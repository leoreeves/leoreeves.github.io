(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,A){"use strict";A.r(t);var a=A(0),n=A.n(a),i=A(157),r=A(155);t.default=function(e){var t=e.location;return n.a.createElement(i.a,null,t.state&&n.a.createElement(r.a,{primaryHeading:t.state.primaryHeading,secondaryHeading:t.state.secondaryHeading,imageFileName:t.state.imageFileName,buttonText:"Demo",buttonRoute:t.state.buttonRoute,buttonTextSecondary:"Code",buttonRouteSecondary:t.state.buttonRouteSecondary,buttonExternalSecondary:!0}))}},149:function(e,t,A){"use strict";A.d(t,"b",function(){return d});var a=A(0),n=A.n(a),i=A(4),r=A.n(i),o=A(32),s=A.n(o);A.d(t,"a",function(){return s.a}),A.d(t,"c",function(){return o.navigate});A(150);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},150:function(e,t,A){var a;e.exports=(a=A(154))&&a.default||a},151:function(e,t,A){"use strict";A(73),A(74),A(75);var a=A(156),n=A(0),i=A.n(n),r=A(149),o=A(160),s=A.n(o);t.a=function(e){return i.a.createElement(r.b,{query:"1484280444",render:function(t){var A=t.images.edges.find(function(t){return t.node.relativePath.includes(e.filename)});if(!A)return null;var a=A.node.childImageSharp.sizes;return i.a.createElement(s.a,{alt:e.alt,sizes:a})},data:a})}},152:function(e,t,A){"use strict";var a=A(0),n=A.n(a),i=A(149),r=A(165),o=A.n(r);t.a=function(e){return n.a.createElement("button",{className:o.a.routeButton+" "+(e.secondary?o.a.secondary:o.a.primary),onClick:function(){return t=e.buttonRoute,A=e.buttonExternal,void(t&&(A?window.open(t,"_blank"):Object(i.c)(t)));var t,A}},e.buttonText)}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Leo Reeves"}}}}},154:function(e,t,A){"use strict";A.r(t);A(33);var a=A(0),n=A.n(a),i=A(4),r=A.n(i),o=A(54),s=A(2),c=function(e){var t=e.location,A=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:A},A.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,A){"use strict";var a=A(0),n=A.n(a),i=A(151),r=A(152),o=A(166),s=A.n(o);t.a=function(e){return n.a.createElement("header",{className:s.a.headerContainer},n.a.createElement("content",{className:s.a.headerContent},n.a.createElement("h1",{className:s.a.primaryHeading},e.primaryHeading),n.a.createElement("h2",{className:s.a.secondaryHeading},e.secondaryHeading),n.a.createElement("hr",{className:s.a.headerRow}),n.a.createElement("div",{className:s.a.headerButtons},e.buttonText&&n.a.createElement("div",{className:s.a.primaryButton},n.a.createElement(r.a,{buttonText:e.buttonText,buttonRoute:e.buttonRoute,buttonExternal:e.buttonExternal})),e.buttonTextSecondary&&n.a.createElement(r.a,{buttonText:e.buttonTextSecondary,buttonRoute:e.buttonRouteSecondary,buttonExternal:e.buttonExternalSecondary,secondary:!0}))),e.imageFileName&&n.a.createElement("div",{className:s.a.headerImage},n.a.createElement(i.a,{filename:e.imageFileName})))}},156:function(e){e.exports={data:{images:{edges:[{node:{relativePath:"favicon.png",name:"favicon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEUlEQVQ4y2NgGGqACYrxyTERUEcxYMQlIQDE3kDsAcTcaIo5gdgTSd4diI2Q5BnRvQICjkD8H4j/ArEuVIwFSqtA5dDxGSBWQjcUZqADVNF3INZBM1AZiP9B5fcA8TYg/gXlr0Izh2gD/0Ll7aFi66D8c9hiD9nAHwQMBIUlMxCfgvLXEnIhLgNh4XYbiB9C2Q+AWJ8YA/WgYmxoBv5Di5RYNItxhqEyWrCoIBkWCcSzkVwoSUwsR0K9YgfEwkAsD8R/oPJmQMwOxG+h/Bm4vOyCI631ALEYEt8Hqr4cScwD2SyYgaZAfB2IrwDxZSC+AMSPgDgbiAWB+Co0Qiyg6nmg6fEZEM8hlA3JKVRGAZUAAHWAVV9PGV9AAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/e7a2ba2533a1df45885ce04b915cd44e/bf9a6/favicon.png",srcSet:"/static/e7a2ba2533a1df45885ce04b915cd44e/f62f9/favicon.png 163w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/ae319/favicon.png 325w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/bf9a6/favicon.png 650w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/14ac3/favicon.png 975w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/33fb0/favicon.png 1300w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/74e4b/favicon.png 1500w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"geolocation-weather-app.png",name:"geolocation-weather-app",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQoz5XN/08ScRzH8c9f2kaWX0dCBYdHxxcpJEMzWLX6wa1vzvUXUIKEBnV1LmdAixPEFsSXiTCD4+4+X3ofh87Njdn22Huf3Z6vHYpVcKz6nyq6+UDxGj6TAHUySo0Y5Z9hj5J1nGwMbda1eKU/oMSr/fM2fhtfNmuaUZ5O0HaTgK0G/txhrzM5W3DFGX7iePDYHoraQ5HBjdoWIvyj5zPz4Rdbe5ClGthcocwRAemmLv1lqwlxmve6Fx+6QsvXnILltttyi79i47jgUiDy1O6/9yz2ETKIByuMvrR1ILa0XYW9TH294b3rCIZn/UGDLzjJ+8Y4AZbCctQTXllNZCATW6q5QjsdAqRj/XufrW1Lky7BKgQmOM+EyzPuMq7x4AS7f8Fi514lRcggNldo94SCbx2c19h6esfmDcwGFqd437R7aIr3Wj3zc/eXZtzeNykRMojNFcp2Kdg7wQXM3qalsZtO+OF1x9x5407eesd31eZY+/AJMojNFfqhEEMP/1SZ1Oy8yxY28vvvL8rJsWxBqrchg9hcoUKfyH1q2tdpmbIRijqTVWpMVCqrBJUxKxMG9wCzkkaKKh4BgpJOixqFC1D26DjXaufbHbmr/KLskFwCpuZFpV6v2O0eKMqhplcZu4zK6eMfP8eoA17rMj0AAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/dd3d6637e1b46048251804264fb4d564/bf9a6/geolocation-weather-app.png",srcSet:"/static/dd3d6637e1b46048251804264fb4d564/f62f9/geolocation-weather-app.png 163w,\n/static/dd3d6637e1b46048251804264fb4d564/ae319/geolocation-weather-app.png 325w,\n/static/dd3d6637e1b46048251804264fb4d564/bf9a6/geolocation-weather-app.png 650w,\n/static/dd3d6637e1b46048251804264fb4d564/b7a80/geolocation-weather-app.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"simple-clock.png",name:"simple-clock",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAABwUlEQVQoz62SbU/iQBDH+a6aKG81uRCbEDUxEQ9hW0h4r/EBhd551FJKHwBrQC2mtdIuW7A97hQ+htPFoIkPMcbJL5OZ3fnvZGc35niDLxP7BrHnh3gw+iRQ/Cy+cUnz/KKut+r6WeQ1in4ma0+xrDUBWhDRMDp2j0RiPPhblbW5uXmWGsdyebBcfhqjLMrncoVCAdYQQuA5LgfFJ4LUH45i5O5f+VclkUjcP9y7rqvrOvgeNeFUgLSP+91ut1araZoWhuF4PGYYZr9Y9oP/kZg/OWVWmMlkYhhGu912HMe2bc/DxWKxKkkYY8uyFEUxTZMQAmXJZPLwmCcz8cLCIjQRBEEURUVVa5JUFUWe58vlEvRstZqqotRlWVXVRqMRj8cPjqi417/rXFnpDJv6mckgbjvLpjMIUgiybB6AeCudpYtoGgNGx3RJEE37Fg9hbHg4ijx9DNcPI0gQ4Yf0IenWcDQtA8nsqXwY/QxIPT/AIHjB65o3fhgceX3jHfwWd0uVneM/O+BLlT1eMG23R7u9+z3hPBdG0HVWNtHyWmppdXN5fWtpNfVjY/v80oIrTBt+9LehuUcCj151xu2rtsAjhYCI+MZGCTIAAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/7f1760178ed80db44c85bf977d71039e/bf9a6/simple-clock.png",srcSet:"/static/7f1760178ed80db44c85bf977d71039e/f62f9/simple-clock.png 163w,\n/static/7f1760178ed80db44c85bf977d71039e/ae319/simple-clock.png 325w,\n/static/7f1760178ed80db44c85bf977d71039e/bf9a6/simple-clock.png 650w,\n/static/7f1760178ed80db44c85bf977d71039e/b7a80/simple-clock.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"uk-vat-calculator.png",name:"uk-vat-calculator",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA0UlEQVQoz6WSwQ6CMBBE+XIPHj0YD34bF41gMGmaUigt0qUp4EQ0MUqk6BwmbdLX2d1sNHyof+r1OkwpGv5Q9JYJz/OcMZZlmRCC3ZWmqdY6KBnvpJScczjI8YumaYJg5FNLlghA69ovnU/AXddXSqF4a0mVJQ4owXs/n+ycM9ooBaqs65qIxrMxxlo7A6PUQkpVKsRxISptpCwAw7U2QT3DL4yvt/vVZnc6Z2MvoQODK32ND0l8TIqqXjCwx8Cd992APHJI/XHD+tANW8D9v9s3Gj83aEW70Q0AAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/bf9a6/uk-vat-calculator.png",srcSet:"/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/f62f9/uk-vat-calculator.png 163w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/ae319/uk-vat-calculator.png 325w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/bf9a6/uk-vat-calculator.png 650w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/b7a80/uk-vat-calculator.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"quotes-on-design-generator.jpg",name:"quotes-on-design-generator",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe9NCKP/xAAXEAEAAwAAAAAAAAAAAAAAAAARAAEg/9oACAEBAAEFAkjWf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAICAwAAAAAAAAAAAAAAAAEQABExcZH/2gAIAQEAAT8hIZTdx0F//9oADAMBAAIAAwAAABAjD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQEAAwEBAAAAAAAAAAAAAAEAESExgfD/2gAIAQEAAT8QKMHwzfRWneI5AcAnt//Z",aspectRatio:1.3846153846153846,src:"/static/34996c655cedb0c1472a8abb2b219f34/07dca/quotes-on-design-generator.jpg",srcSet:"/static/34996c655cedb0c1472a8abb2b219f34/13e52/quotes-on-design-generator.jpg 163w,\n/static/34996c655cedb0c1472a8abb2b219f34/d4cde/quotes-on-design-generator.jpg 325w,\n/static/34996c655cedb0c1472a8abb2b219f34/07dca/quotes-on-design-generator.jpg 650w,\n/static/34996c655cedb0c1472a8abb2b219f34/02b42/quotes-on-design-generator.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"hex-colour-generator.jpg",name:"hex-colour-generator",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHWVsim/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQABBQJf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFhAAAwAAAAAAAAAAAAAAAAAAABEg/9oACAEBAAE/IRz/AP/aAAwDAQACAAMAAAAQiw//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEAAgMAAAAAAAAAAAAAAAABABEgMWH/2gAIAQEAAT8QvjAOhYYf/9k=",aspectRatio:1.3846153846153846,src:"/static/5b37ff11550855d441ea0c5a3a96b00d/07dca/hex-colour-generator.jpg",srcSet:"/static/5b37ff11550855d441ea0c5a3a96b00d/13e52/hex-colour-generator.jpg 163w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/d4cde/hex-colour-generator.jpg 325w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/07dca/hex-colour-generator.jpg 650w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/02b42/hex-colour-generator.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"elliott-smith-tribute.jpg",name:"elliott-smith-tribute",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGiU6TBQ//EABkQAQADAQEAAAAAAAAAAAAAAAEAAhESIf/aAAgBAQABBQLcnWtL81AhQj4//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRABAAIDAAAAAAAAAAAAAAAAABExAhAh/9oACAEBAAY/AqlSHWOv/8QAGxAAAwEAAwEAAAAAAAAAAAAAAAERIVFxgZH/2gAIAQEAAT8hW1lPhyHQ5OPR3a8J3V3XRaJH/9oADAMBAAIAAwAAABBTD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEAAwADAAAAAAAAAAAAAAERACExQaGx/9oACAEBAAE/ENZSh3CM4yDsLo94KHWujjqFyFfcP2MBUk5nj0cz/9k=",aspectRatio:1.3846153846153846,src:"/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/07dca/elliott-smith-tribute.jpg",srcSet:"/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/13e52/elliott-smith-tribute.jpg 163w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/d4cde/elliott-smith-tribute.jpg 325w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/07dca/elliott-smith-tribute.jpg 650w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/02b42/elliott-smith-tribute.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}}]}}}},157:function(e,t,A){"use strict";var a=A(153),n=A(0),i=A.n(n),r=A(4),o=A.n(r),s=A(149),c=A(161),d=A.n(c),l=function(){return i.a.createElement("nav",{className:d.a.nav},i.a.createElement("div",{className:d.a.navContainer},i.a.createElement(s.a,{className:d.a.navLink,to:"/"},"Leo Reeves"),i.a.createElement(s.a,{style:{marginLeft:"auto"},activeStyle:{borderBottomColor:"#00AC7E"},className:d.a.navLink,to:"/portfolio"},"Portfolio"),i.a.createElement(s.a,{activeStyle:{borderBottomColor:"#00AC7E"},className:d.a.navLink,to:"/about"},"About"),i.a.createElement(s.a,{activeStyle:{borderBottomColor:"#00AC7E"},className:d.a.navLink,to:"/contact"},"Contact")))},u=A(162),f=A.n(u),g=function(){return i.a.createElement("footer",{className:f.a.footer},i.a.createElement("div",{className:f.a.navContainer},i.a.createElement(s.a,{className:f.a.navLink,to:"/"},"© 2019 Leo Reeves"),i.a.createElement("a",{style:{marginLeft:"auto"},className:f.a.navLink,href:"https://codepen.io/leoreeves/",target:"_blank",rel:"noopener noreferrer"},"Codepen"),i.a.createElement("a",{href:"https://github.com/leoreeves/",target:"_blank",rel:"noopener noreferrer",className:f.a.navLink},"Github"),i.a.createElement("a",{href:"https://www.linkedin.com/in/leoreeves/",target:"_blank",rel:"noopener noreferrer",className:f.a.navLink},"Linkedin")))},p=A(163),b=A.n(p),h=(A(164),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(){return i.a.createElement("div",{className:b.a.layoutContainer},i.a.createElement(l,null),i.a.createElement("main",null,t),i.a.createElement(g,null))},data:a})});h.propTypes={children:o.a.node.isRequired};t.a=h},160:function(e,t,A){"use strict";var a=A(8);t.__esModule=!0,t.default=void 0;var n,i=a(A(7)),r=a(A(34)),o=a(A(76)),s=a(A(77)),c=a(A(0)),d=a(A(4)),l=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=l(e),A=t.fluid?t.fluid.src:t.fixed.src;return u[A]||!1},g=[];var p=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),g.push([e,t])},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',A=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+A+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+a+"<img "+o+s+A+n+t+r+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},h=c.default.forwardRef(function(e,t){var A=e.sizes,a=e.srcSet,n=e.src,i=e.style,r=e.onLoad,d=e.onError,l=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,s.default)({sizes:A,srcSet:a,src:n},l,{onLoad:r,onError:d,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});h.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var m=function(e){function t(t){var A;A=e.call(this,t)||this;var a=!0,n=!1,i=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,n=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,n=!1);var s=!(A.props.critical&&!A.props.fadeIn);return A.state={isVisible:a,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:s,seenBefore:o},A.imageRef=c.default.createRef(),A.handleImageLoaded=A.handleImageLoaded.bind((0,r.default)((0,r.default)(A))),A.handleRef=A.handleRef.bind((0,r.default)((0,r.default)(A))),A}(0,i.default)(t,e);var A=t.prototype;return A.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},A.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},A.handleImageLoaded=function(){var e,t,A;e=this.props,t=l(e),A=t.fluid?t.fluid.src:t.fixed.src,u[A]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},A.render=function(){var e=l(this.props),t=e.title,A=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,r=e.imgStyle,o=void 0===r?{}:r,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,E=e.Tag,w=e.itemProp,B="boolean"==typeof m?"lightgray":m,v=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,u),Q=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),j={title:t,alt:this.state.isVisible?"":A,style:v,className:f};if(g){var y=g;return c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(y.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/y.aspectRatio+"%"}}),B&&c.default.createElement(E,{title:t,style:{backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),y.base64&&c.default.createElement(h,(0,s.default)({src:y.base64},j)),y.tracedSVG&&c.default.createElement(h,(0,s.default)({src:y.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,y.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:y.srcSetWebp,sizes:y.sizes}),c.default.createElement(h,{alt:A,title:t,sizes:y.sizes,src:y.src,srcSet:y.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,s.default)({alt:A,title:t},y))}}))}if(p){var S=p,x=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},i);return"inherit"===i.display&&delete x.display,c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},B&&c.default.createElement(E,{title:t,style:{backgroundColor:B,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),S.base64&&c.default.createElement(h,(0,s.default)({src:S.base64},j)),S.tracedSVG&&c.default.createElement(h,(0,s.default)({src:S.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,S.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),c.default.createElement(h,{alt:A,title:t,width:S.width,height:S.height,sizes:S.sizes,src:S.src,srcSet:S.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,s.default)({alt:A,title:t,width:S.width,height:S.height},S))}}))}return null},t}(c.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});m.propTypes={resolutions:E,sizes:w,fixed:E,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var B=m;t.default=B}}]);
//# sourceMappingURL=component---src-pages-portfolio-detail-js-94b48873ccd098db83a6.js.map