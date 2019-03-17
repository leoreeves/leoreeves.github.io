(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,A,a){"use strict";a.r(A);var t=a(0),n=a.n(t),r=a(157),o=a(158),c=a(155),i=a(178),s=a.n(i),l=(a(179),a(149)),d=a(181),g=a.n(d),u=a(151);var p=function(e){return n.a.createElement("div",{className:g.a.portfolioItem},n.a.createElement("div",{className:g.a.imageContainer,onClick:function(){return A={primaryHeading:e.primaryHeading,secondaryHeading:e.secondaryHeading,buttonRoute:e.buttonRoute,buttonRouteSecondary:e.buttonRouteSecondary,imageFileName:e.imageFileName},void Object(l.c)("/portfolio-detail",{state:A});var A}},n.a.createElement(u.a,{filename:e.imageFileName}),n.a.createElement("div",{className:g.a.imageOverlay})),n.a.createElement("h3",null,e.primaryHeading),n.a.createElement("p",null,e.description,e.link&&n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.linkText),"."))},m="https://github.com/LeoReeves/projects/tree/master/",b=function(){return n.a.createElement("section",{className:s.a.portfolioContainer},n.a.createElement("div",{className:s.a.portfolioRow},n.a.createElement(p,{imageFileName:"elliott-smith-tribute.jpg",primaryHeading:"Elliott Smith",secondaryHeading:"HTML, CSS, Bootstrap",description:"Tribute to the musician Elliott Smith",buttonRoute:"/projects/elliott-smith-tribute-page/",buttonRouteSecondary:m+"elliott-smith-tribute-page"}),n.a.createElement(p,{imageFileName:"quotes-on-design-generator.jpg",primaryHeading:"Quotes on Design Generator",secondaryHeading:"HTML, CSS, jQuery, AJAX",description:"Minimial quote generator powered by ",link:"https://quotesondesign.com/api-v4-0/",linkText:"Quotes on Design API",buttonRoute:"/projects/quotes-on-design-generator",buttonRouteSecondary:m+"quotes-on-design-generator"}),n.a.createElement(p,{imageFileName:"simple-clock.png",primaryHeading:"Simple clock",secondaryHeading:"HTML, CSS, Vue.js",description:"Simple clock with switchable digital and analogue face",buttonRoute:"/projects/simple-clock/",buttonRouteSecondary:m+"simple-clock"}),n.a.createElement(p,{imageFileName:"uk-vat-calculator.png",primaryHeading:"UK Vat Calculator",secondaryHeading:"HTML, CSS, Vue.js",description:"Minimal calculator for quickly calculating VAT",buttonRoute:"/projects/uk-vat-calculator/",buttonRouteSecondary:m+"uk-vat-calculator"}),n.a.createElement(p,{imageFileName:"hex-colour-generator.jpg",primaryHeading:"Hex Colour Generator",secondaryHeading:"HTML, CSS, JavaScript",description:"Generate random hex colours",buttonRoute:"projects/hex-colour-generator/",buttonRouteSecondary:m+"hex-colour-generator"}),n.a.createElement(p,{imageFileName:"geolocation-weather-app.png",primaryHeading:"Geolocation Weather App",secondaryHeading:"HTML, CSS, JavaScript, jQuery, AJAX",description:"Simple weather app, powered by ",link:"https://darksky.net/dev",linkText:"Dark Sky API",buttonRoute:"projects/geolocation-weather-app/",buttonRouteSecondary:m+"geolocation-weather-app"})))};A.default=function(){return n.a.createElement(r.a,null,n.a.createElement(o.a,{title:"Portfolio",keywords:["Leo Reeves","portfolio","featured work"]}),n.a.createElement(c.a,{primaryHeading:"Portfolio",secondaryHeading:"Featured Work"}),n.a.createElement(b,null))}},149:function(e,A,a){"use strict";a.d(A,"b",function(){return l});var t=a(0),n=a.n(t),r=a(4),o=a.n(r),c=a(32),i=a.n(c);a.d(A,"a",function(){return i.a}),a.d(A,"c",function(){return c.navigate});a(150);var s=n.a.createContext({}),l=function(e){return n.a.createElement(s.Consumer,null,function(A){return e.data||A[e.query]&&A[e.query].data?(e.render||e.children)(e.data?e.data.data:A[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,A,a){var t;e.exports=(t=a(154))&&t.default||t},151:function(e,A,a){"use strict";a(73),a(74),a(75);var t=a(156),n=a(0),r=a.n(n),o=a(149),c=a(160),i=a.n(c);A.a=function(e){return r.a.createElement(o.b,{query:"1484280444",render:function(A){var a=A.images.edges.find(function(A){return A.node.relativePath.includes(e.filename)});if(!a)return null;var t=a.node.childImageSharp.sizes;return r.a.createElement(i.a,{alt:e.alt,sizes:t})},data:t})}},152:function(e,A,a){"use strict";var t=a(0),n=a.n(t),r=a(149),o=a(165),c=a.n(o);A.a=function(e){return n.a.createElement("button",{className:c.a.routeButton+" "+(e.secondary?c.a.secondary:c.a.primary),onClick:function(){return A=e.buttonRoute,a=e.buttonExternal,void(A&&(a?window.open(A,"_blank"):Object(r.c)(A)));var A,a}},e.buttonText)}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Leo Reeves"}}}}},154:function(e,A,a){"use strict";a.r(A);a(33);var t=a(0),n=a.n(t),r=a(4),o=a.n(r),c=a(54),i=a(2),s=function(e){var A=e.location,a=i.default.getResourcesForPathnameSync(A.pathname);return n.a.createElement(c.a,Object.assign({location:A,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},A.default=s},155:function(e,A,a){"use strict";var t=a(0),n=a.n(t),r=a(151),o=a(152),c=a(166),i=a.n(c);A.a=function(e){return n.a.createElement("header",{className:i.a.headerContainer},n.a.createElement("content",{className:i.a.headerContent},n.a.createElement("h1",{className:i.a.primaryHeading},e.primaryHeading),n.a.createElement("h2",{className:i.a.secondaryHeading},e.secondaryHeading),n.a.createElement("hr",{className:i.a.headerRow}),n.a.createElement("div",{className:i.a.headerButtons},e.buttonText&&n.a.createElement("div",{className:i.a.primaryButton},n.a.createElement(o.a,{buttonText:e.buttonText,buttonRoute:e.buttonRoute,buttonExternal:e.buttonExternal})),e.buttonTextSecondary&&n.a.createElement(o.a,{buttonText:e.buttonTextSecondary,buttonRoute:e.buttonRouteSecondary,buttonExternal:e.buttonExternalSecondary,secondary:!0}))),e.imageFileName&&n.a.createElement("div",{className:i.a.headerImage},n.a.createElement(r.a,{filename:e.imageFileName})))}},156:function(e){e.exports={data:{images:{edges:[{node:{relativePath:"favicon.png",name:"favicon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEUlEQVQ4y2NgGGqACYrxyTERUEcxYMQlIQDE3kDsAcTcaIo5gdgTSd4diI2Q5BnRvQICjkD8H4j/ArEuVIwFSqtA5dDxGSBWQjcUZqADVNF3INZBM1AZiP9B5fcA8TYg/gXlr0Izh2gD/0Ll7aFi66D8c9hiD9nAHwQMBIUlMxCfgvLXEnIhLgNh4XYbiB9C2Q+AWJ8YA/WgYmxoBv5Di5RYNItxhqEyWrCoIBkWCcSzkVwoSUwsR0K9YgfEwkAsD8R/oPJmQMwOxG+h/Bm4vOyCI631ALEYEt8Hqr4cScwD2SyYgaZAfB2IrwDxZSC+AMSPgDgbiAWB+Co0Qiyg6nmg6fEZEM8hlA3JKVRGAZUAAHWAVV9PGV9AAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/e7a2ba2533a1df45885ce04b915cd44e/bf9a6/favicon.png",srcSet:"/static/e7a2ba2533a1df45885ce04b915cd44e/f62f9/favicon.png 163w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/ae319/favicon.png 325w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/bf9a6/favicon.png 650w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/14ac3/favicon.png 975w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/33fb0/favicon.png 1300w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/74e4b/favicon.png 1500w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"geolocation-weather-app.png",name:"geolocation-weather-app",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQoz5XN/08ScRzH8c9f2kaWX0dCBYdHxxcpJEMzWLX6wa1vzvUXUIKEBnV1LmdAixPEFsSXiTCD4+4+X3ofh87Njdn22Huf3Z6vHYpVcKz6nyq6+UDxGj6TAHUySo0Y5Z9hj5J1nGwMbda1eKU/oMSr/fM2fhtfNmuaUZ5O0HaTgK0G/txhrzM5W3DFGX7iePDYHoraQ5HBjdoWIvyj5zPz4Rdbe5ClGthcocwRAemmLv1lqwlxmve6Fx+6QsvXnILltttyi79i47jgUiDy1O6/9yz2ETKIByuMvrR1ILa0XYW9TH294b3rCIZn/UGDLzjJ+8Y4AZbCctQTXllNZCATW6q5QjsdAqRj/XufrW1Lky7BKgQmOM+EyzPuMq7x4AS7f8Fi514lRcggNldo94SCbx2c19h6esfmDcwGFqd437R7aIr3Wj3zc/eXZtzeNykRMojNFcp2Kdg7wQXM3qalsZtO+OF1x9x5407eesd31eZY+/AJMojNFfqhEEMP/1SZ1Oy8yxY28vvvL8rJsWxBqrchg9hcoUKfyH1q2tdpmbIRijqTVWpMVCqrBJUxKxMG9wCzkkaKKh4BgpJOixqFC1D26DjXaufbHbmr/KLskFwCpuZFpV6v2O0eKMqhplcZu4zK6eMfP8eoA17rMj0AAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/dd3d6637e1b46048251804264fb4d564/bf9a6/geolocation-weather-app.png",srcSet:"/static/dd3d6637e1b46048251804264fb4d564/f62f9/geolocation-weather-app.png 163w,\n/static/dd3d6637e1b46048251804264fb4d564/ae319/geolocation-weather-app.png 325w,\n/static/dd3d6637e1b46048251804264fb4d564/bf9a6/geolocation-weather-app.png 650w,\n/static/dd3d6637e1b46048251804264fb4d564/b7a80/geolocation-weather-app.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"simple-clock.png",name:"simple-clock",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAABwUlEQVQoz62SbU/iQBDH+a6aKG81uRCbEDUxEQ9hW0h4r/EBhd551FJKHwBrQC2mtdIuW7A97hQ+htPFoIkPMcbJL5OZ3fnvZGc35niDLxP7BrHnh3gw+iRQ/Cy+cUnz/KKut+r6WeQ1in4ma0+xrDUBWhDRMDp2j0RiPPhblbW5uXmWGsdyebBcfhqjLMrncoVCAdYQQuA5LgfFJ4LUH45i5O5f+VclkUjcP9y7rqvrOvgeNeFUgLSP+91ut1araZoWhuF4PGYYZr9Y9oP/kZg/OWVWmMlkYhhGu912HMe2bc/DxWKxKkkYY8uyFEUxTZMQAmXJZPLwmCcz8cLCIjQRBEEURUVVa5JUFUWe58vlEvRstZqqotRlWVXVRqMRj8cPjqi417/rXFnpDJv6mckgbjvLpjMIUgiybB6AeCudpYtoGgNGx3RJEE37Fg9hbHg4ijx9DNcPI0gQ4Yf0IenWcDQtA8nsqXwY/QxIPT/AIHjB65o3fhgceX3jHfwWd0uVneM/O+BLlT1eMG23R7u9+z3hPBdG0HVWNtHyWmppdXN5fWtpNfVjY/v80oIrTBt+9LehuUcCj151xu2rtsAjhYCI+MZGCTIAAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/7f1760178ed80db44c85bf977d71039e/bf9a6/simple-clock.png",srcSet:"/static/7f1760178ed80db44c85bf977d71039e/f62f9/simple-clock.png 163w,\n/static/7f1760178ed80db44c85bf977d71039e/ae319/simple-clock.png 325w,\n/static/7f1760178ed80db44c85bf977d71039e/bf9a6/simple-clock.png 650w,\n/static/7f1760178ed80db44c85bf977d71039e/b7a80/simple-clock.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"uk-vat-calculator.png",name:"uk-vat-calculator",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA0UlEQVQoz6WSwQ6CMBBE+XIPHj0YD34bF41gMGmaUigt0qUp4EQ0MUqk6BwmbdLX2d1sNHyof+r1OkwpGv5Q9JYJz/OcMZZlmRCC3ZWmqdY6KBnvpJScczjI8YumaYJg5FNLlghA69ovnU/AXddXSqF4a0mVJQ4owXs/n+ycM9ooBaqs65qIxrMxxlo7A6PUQkpVKsRxISptpCwAw7U2QT3DL4yvt/vVZnc6Z2MvoQODK32ND0l8TIqqXjCwx8Cd992APHJI/XHD+tANW8D9v9s3Gj83aEW70Q0AAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/bf9a6/uk-vat-calculator.png",srcSet:"/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/f62f9/uk-vat-calculator.png 163w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/ae319/uk-vat-calculator.png 325w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/bf9a6/uk-vat-calculator.png 650w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/b7a80/uk-vat-calculator.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"quotes-on-design-generator.jpg",name:"quotes-on-design-generator",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe9NCKP/xAAXEAEAAwAAAAAAAAAAAAAAAAARAAEg/9oACAEBAAEFAkjWf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAICAwAAAAAAAAAAAAAAAAEQABExcZH/2gAIAQEAAT8hIZTdx0F//9oADAMBAAIAAwAAABAjD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQEAAwEBAAAAAAAAAAAAAAEAESExgfD/2gAIAQEAAT8QKMHwzfRWneI5AcAnt//Z",aspectRatio:1.3846153846153846,src:"/static/34996c655cedb0c1472a8abb2b219f34/07dca/quotes-on-design-generator.jpg",srcSet:"/static/34996c655cedb0c1472a8abb2b219f34/13e52/quotes-on-design-generator.jpg 163w,\n/static/34996c655cedb0c1472a8abb2b219f34/d4cde/quotes-on-design-generator.jpg 325w,\n/static/34996c655cedb0c1472a8abb2b219f34/07dca/quotes-on-design-generator.jpg 650w,\n/static/34996c655cedb0c1472a8abb2b219f34/02b42/quotes-on-design-generator.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"hex-colour-generator.jpg",name:"hex-colour-generator",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHWVsim/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQABBQJf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFhAAAwAAAAAAAAAAAAAAAAAAABEg/9oACAEBAAE/IRz/AP/aAAwDAQACAAMAAAAQiw//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEAAgMAAAAAAAAAAAAAAAABABEgMWH/2gAIAQEAAT8QvjAOhYYf/9k=",aspectRatio:1.3846153846153846,src:"/static/5b37ff11550855d441ea0c5a3a96b00d/07dca/hex-colour-generator.jpg",srcSet:"/static/5b37ff11550855d441ea0c5a3a96b00d/13e52/hex-colour-generator.jpg 163w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/d4cde/hex-colour-generator.jpg 325w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/07dca/hex-colour-generator.jpg 650w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/02b42/hex-colour-generator.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"elliott-smith-tribute.jpg",name:"elliott-smith-tribute",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGiU6TBQ//EABkQAQADAQEAAAAAAAAAAAAAAAEAAhESIf/aAAgBAQABBQLcnWtL81AhQj4//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRABAAIDAAAAAAAAAAAAAAAAABExAhAh/9oACAEBAAY/AqlSHWOv/8QAGxAAAwEAAwEAAAAAAAAAAAAAAAERIVFxgZH/2gAIAQEAAT8hW1lPhyHQ5OPR3a8J3V3XRaJH/9oADAMBAAIAAwAAABBTD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEAAwADAAAAAAAAAAAAAAERACExQaGx/9oACAEBAAE/ENZSh3CM4yDsLo94KHWujjqFyFfcP2MBUk5nj0cz/9k=",aspectRatio:1.3846153846153846,src:"/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/07dca/elliott-smith-tribute.jpg",srcSet:"/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/13e52/elliott-smith-tribute.jpg 163w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/d4cde/elliott-smith-tribute.jpg 325w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/07dca/elliott-smith-tribute.jpg 650w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/02b42/elliott-smith-tribute.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}}]}}}},157:function(e,A,a){"use strict";var t=a(153),n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(149),s=a(161),l=a.n(s),d=function(){return r.a.createElement("nav",{className:l.a.nav},r.a.createElement("div",{className:l.a.navContainer},r.a.createElement(i.a,{className:l.a.navLink,to:"/"},"Leo Reeves"),r.a.createElement(i.a,{style:{marginLeft:"auto"},activeStyle:{borderBottomColor:"#00AC7E"},className:l.a.navLink,to:"/portfolio"},"Portfolio"),r.a.createElement(i.a,{activeStyle:{borderBottomColor:"#00AC7E"},className:l.a.navLink,to:"/about"},"About"),r.a.createElement(i.a,{activeStyle:{borderBottomColor:"#00AC7E"},className:l.a.navLink,to:"/contact"},"Contact")))},g=a(162),u=a.n(g),p=function(){return r.a.createElement("footer",{className:u.a.footer},r.a.createElement("div",{className:u.a.navContainer},r.a.createElement(i.a,{className:u.a.navLink,to:"/"},"© 2019 Leo Reeves"),r.a.createElement("a",{style:{marginLeft:"auto"},className:u.a.navLink,href:"https://codepen.io/leoreeves/",target:"_blank",rel:"noopener noreferrer"},"Codepen"),r.a.createElement("a",{href:"https://github.com/leoreeves/",target:"_blank",rel:"noopener noreferrer",className:u.a.navLink},"Github"),r.a.createElement("a",{href:"https://www.linkedin.com/in/leoreeves/",target:"_blank",rel:"noopener noreferrer",className:u.a.navLink},"Linkedin")))},m=a(163),b=a.n(m),E=(a(164),function(e){var A=e.children;return r.a.createElement(i.b,{query:"755544856",render:function(){return r.a.createElement("div",{className:b.a.layoutContainer},r.a.createElement(d,null),r.a.createElement("main",null,A),r.a.createElement(p,null))},data:t})});E.propTypes={children:c.a.node.isRequired};A.a=E},158:function(e,A,a){"use strict";var t=a(159),n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(167),s=a.n(i);function l(e){var A=e.description,a=e.lang,n=e.meta,o=e.keywords,c=e.title,i=t.data.site,l=A||i.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},A.a=l},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Leo Reeves",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},179:function(e,A,a){"use strict";a(180)("link",function(e){return function(A){return e(this,"a","href",A)}})},180:function(e,A,a){var t=a(11),n=a(17),r=a(18),o=/"/g,c=function(e,A,a,t){var n=String(r(e)),c="<"+A;return""!==a&&(c+=" "+a+'="'+String(t).replace(o,"&quot;")+'"'),c+">"+n+"</"+A+">"};e.exports=function(e,A){var a={};a[e]=A(c),t(t.P+t.F*n(function(){var A=""[e]('"');return A!==A.toLowerCase()||A.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-3884b1980fdda9dedba6.js.map