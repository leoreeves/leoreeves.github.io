(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(A,e,a){"use strict";a.r(e);var t=a(0),n=a.n(t),c=a(157),r=a(158),o=a(176),i=a.n(o),s=function(){return n.a.createElement("div",{className:i.a.aboutContainer},n.a.createElement("div",{className:i.a.aboutRow},n.a.createElement("h3",{className:i.a.aboutHeading},"Profile"),n.a.createElement("div",{className:i.a.aboutContent},"I’m a self-taught developer with a keen eye for detail, strong knowledge of technologies and adept at solving complex problems. I’m passionate about building beautiful and responsive websites and apps.")),n.a.createElement("div",{className:i.a.aboutRow},n.a.createElement("h3",{className:i.a.aboutHeading},"Experience"),n.a.createElement("div",{className:i.a.aboutContent},n.a.createElement("h4",{className:i.a.experienceHeading},n.a.createElement("span",null,"Lavanda"),n.a.createElement("span",null,"Sept. 2017 – Present")),n.a.createElement("span",null,"Front-end Engineer"),n.a.createElement("hr",null),n.a.createElement("h4",{className:i.a.experienceHeading},n.a.createElement("span",null,"Rapid Tender"),n.a.createElement("span",null,"Apr. 2017 – Aug. 2017")),n.a.createElement("span",null,"Junior Software Developer"),n.a.createElement("hr",null),n.a.createElement("h4",{className:i.a.experienceHeading},n.a.createElement("span",null,"Connells"),n.a.createElement("span",null,"Dec. 2015 – Mar. 2017")),n.a.createElement("span",null,"QC & Mortgage Consultant"),n.a.createElement("hr",null))),n.a.createElement("div",{className:i.a.aboutRow},n.a.createElement("h3",{className:i.a.aboutHeading},"Skills"),n.a.createElement("div",{className:i.a.aboutContent},n.a.createElement("h4",{className:i.a.developmentHeading},"Development"),n.a.createElement("span",null,"JavaScript (ES6), TypeScript, React, Ionic, Angular 4+, Vue.js, Semantic HTML, CSS/Sass, Bootstrap, Git"),n.a.createElement("h4",null,"Design"),n.a.createElement("span",null,"Sketch, Figma, Photoshop, After Effects"))))},l=a(155);e.default=function(){return n.a.createElement(c.a,null,n.a.createElement(r.a,{title:"About",keywords:["Leo Reeves","about me"]}),n.a.createElement(l.a,{primaryHeading:"A little about me.",secondaryHeading:"Front-end Developer",buttonText:"Download CV",buttonRoute:"https://drive.google.com/file/d/1pYHHe03v7pZIm3RTyyBdC9wEz8xsM1D2/view",buttonExternal:!0}),n.a.createElement(s,null))}},149:function(A,e,a){"use strict";a.d(e,"b",function(){return l});var t=a(0),n=a.n(t),c=a(4),r=a.n(c),o=a(32),i=a.n(o);a.d(e,"a",function(){return i.a}),a.d(e,"c",function(){return o.navigate});a(150);var s=n.a.createContext({}),l=function(A){return n.a.createElement(s.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},150:function(A,e,a){var t;A.exports=(t=a(154))&&t.default||t},151:function(A,e,a){"use strict";a(73),a(74),a(75);var t=a(156),n=a(0),c=a.n(n),r=a(149),o=a(160),i=a.n(o);e.a=function(A){return c.a.createElement(r.b,{query:"1484280444",render:function(e){var a=e.images.edges.find(function(e){return e.node.relativePath.includes(A.filename)});if(!a)return null;var t=a.node.childImageSharp.sizes;return c.a.createElement(i.a,{alt:A.alt,sizes:t})},data:t})}},152:function(A,e,a){"use strict";var t=a(0),n=a.n(t),c=a(149),r=a(165),o=a.n(r);e.a=function(A){return n.a.createElement("button",{className:o.a.routeButton+" "+(A.secondary?o.a.secondary:o.a.primary),onClick:function(){return e=A.buttonRoute,a=A.buttonExternal,void(e&&(a?window.open(e,"_blank"):Object(c.c)(e)));var e,a}},A.buttonText)}},153:function(A){A.exports={data:{site:{siteMetadata:{title:"Leo Reeves"}}}}},154:function(A,e,a){"use strict";a.r(e);a(33);var t=a(0),n=a.n(t),c=a(4),r=a.n(c),o=a(54),i=a(2),s=function(A){var e=A.location,a=i.default.getResourcesForPathnameSync(e.pathname);return n.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=s},155:function(A,e,a){"use strict";var t=a(0),n=a.n(t),c=a(151),r=a(152),o=a(166),i=a.n(o);e.a=function(A){return n.a.createElement("header",{className:i.a.headerContainer},n.a.createElement("content",{className:i.a.headerContent},n.a.createElement("h1",{className:i.a.primaryHeading},A.primaryHeading),n.a.createElement("h2",{className:i.a.secondaryHeading},A.secondaryHeading),n.a.createElement("hr",{className:i.a.headerRow}),n.a.createElement("div",{className:i.a.headerButtons},A.buttonText&&n.a.createElement("div",{className:i.a.primaryButton},n.a.createElement(r.a,{buttonText:A.buttonText,buttonRoute:A.buttonRoute,buttonExternal:A.buttonExternal})),A.buttonTextSecondary&&n.a.createElement(r.a,{buttonText:A.buttonTextSecondary,buttonRoute:A.buttonRouteSecondary,buttonExternal:A.buttonExternalSecondary,secondary:!0}))),A.imageFileName&&n.a.createElement("div",{className:i.a.headerImage},n.a.createElement(c.a,{filename:A.imageFileName})))}},156:function(A){A.exports={data:{images:{edges:[{node:{relativePath:"favicon.png",name:"favicon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEUlEQVQ4y2NgGGqACYrxyTERUEcxYMQlIQDE3kDsAcTcaIo5gdgTSd4diI2Q5BnRvQICjkD8H4j/ArEuVIwFSqtA5dDxGSBWQjcUZqADVNF3INZBM1AZiP9B5fcA8TYg/gXlr0Izh2gD/0Ll7aFi66D8c9hiD9nAHwQMBIUlMxCfgvLXEnIhLgNh4XYbiB9C2Q+AWJ8YA/WgYmxoBv5Di5RYNItxhqEyWrCoIBkWCcSzkVwoSUwsR0K9YgfEwkAsD8R/oPJmQMwOxG+h/Bm4vOyCI631ALEYEt8Hqr4cScwD2SyYgaZAfB2IrwDxZSC+AMSPgDgbiAWB+Co0Qiyg6nmg6fEZEM8hlA3JKVRGAZUAAHWAVV9PGV9AAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/e7a2ba2533a1df45885ce04b915cd44e/bf9a6/favicon.png",srcSet:"/static/e7a2ba2533a1df45885ce04b915cd44e/f62f9/favicon.png 163w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/ae319/favicon.png 325w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/bf9a6/favicon.png 650w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/14ac3/favicon.png 975w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/33fb0/favicon.png 1300w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/74e4b/favicon.png 1500w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"geolocation-weather-app.png",name:"geolocation-weather-app",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQoz5XN/08ScRzH8c9f2kaWX0dCBYdHxxcpJEMzWLX6wa1vzvUXUIKEBnV1LmdAixPEFsSXiTCD4+4+X3ofh87Njdn22Huf3Z6vHYpVcKz6nyq6+UDxGj6TAHUySo0Y5Z9hj5J1nGwMbda1eKU/oMSr/fM2fhtfNmuaUZ5O0HaTgK0G/txhrzM5W3DFGX7iePDYHoraQ5HBjdoWIvyj5zPz4Rdbe5ClGthcocwRAemmLv1lqwlxmve6Fx+6QsvXnILltttyi79i47jgUiDy1O6/9yz2ETKIByuMvrR1ILa0XYW9TH294b3rCIZn/UGDLzjJ+8Y4AZbCctQTXllNZCATW6q5QjsdAqRj/XufrW1Lky7BKgQmOM+EyzPuMq7x4AS7f8Fi514lRcggNldo94SCbx2c19h6esfmDcwGFqd437R7aIr3Wj3zc/eXZtzeNykRMojNFcp2Kdg7wQXM3qalsZtO+OF1x9x5407eesd31eZY+/AJMojNFfqhEEMP/1SZ1Oy8yxY28vvvL8rJsWxBqrchg9hcoUKfyH1q2tdpmbIRijqTVWpMVCqrBJUxKxMG9wCzkkaKKh4BgpJOixqFC1D26DjXaufbHbmr/KLskFwCpuZFpV6v2O0eKMqhplcZu4zK6eMfP8eoA17rMj0AAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/dd3d6637e1b46048251804264fb4d564/bf9a6/geolocation-weather-app.png",srcSet:"/static/dd3d6637e1b46048251804264fb4d564/f62f9/geolocation-weather-app.png 163w,\n/static/dd3d6637e1b46048251804264fb4d564/ae319/geolocation-weather-app.png 325w,\n/static/dd3d6637e1b46048251804264fb4d564/bf9a6/geolocation-weather-app.png 650w,\n/static/dd3d6637e1b46048251804264fb4d564/b7a80/geolocation-weather-app.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"simple-clock.png",name:"simple-clock",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAABwUlEQVQoz62SbU/iQBDH+a6aKG81uRCbEDUxEQ9hW0h4r/EBhd551FJKHwBrQC2mtdIuW7A97hQ+htPFoIkPMcbJL5OZ3fnvZGc35niDLxP7BrHnh3gw+iRQ/Cy+cUnz/KKut+r6WeQ1in4ma0+xrDUBWhDRMDp2j0RiPPhblbW5uXmWGsdyebBcfhqjLMrncoVCAdYQQuA5LgfFJ4LUH45i5O5f+VclkUjcP9y7rqvrOvgeNeFUgLSP+91ut1araZoWhuF4PGYYZr9Y9oP/kZg/OWVWmMlkYhhGu912HMe2bc/DxWKxKkkYY8uyFEUxTZMQAmXJZPLwmCcz8cLCIjQRBEEURUVVa5JUFUWe58vlEvRstZqqotRlWVXVRqMRj8cPjqi417/rXFnpDJv6mckgbjvLpjMIUgiybB6AeCudpYtoGgNGx3RJEE37Fg9hbHg4ijx9DNcPI0gQ4Yf0IenWcDQtA8nsqXwY/QxIPT/AIHjB65o3fhgceX3jHfwWd0uVneM/O+BLlT1eMG23R7u9+z3hPBdG0HVWNtHyWmppdXN5fWtpNfVjY/v80oIrTBt+9LehuUcCj151xu2rtsAjhYCI+MZGCTIAAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/7f1760178ed80db44c85bf977d71039e/bf9a6/simple-clock.png",srcSet:"/static/7f1760178ed80db44c85bf977d71039e/f62f9/simple-clock.png 163w,\n/static/7f1760178ed80db44c85bf977d71039e/ae319/simple-clock.png 325w,\n/static/7f1760178ed80db44c85bf977d71039e/bf9a6/simple-clock.png 650w,\n/static/7f1760178ed80db44c85bf977d71039e/b7a80/simple-clock.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"uk-vat-calculator.png",name:"uk-vat-calculator",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA0UlEQVQoz6WSwQ6CMBBE+XIPHj0YD34bF41gMGmaUigt0qUp4EQ0MUqk6BwmbdLX2d1sNHyof+r1OkwpGv5Q9JYJz/OcMZZlmRCC3ZWmqdY6KBnvpJScczjI8YumaYJg5FNLlghA69ovnU/AXddXSqF4a0mVJQ4owXs/n+ycM9ooBaqs65qIxrMxxlo7A6PUQkpVKsRxISptpCwAw7U2QT3DL4yvt/vVZnc6Z2MvoQODK32ND0l8TIqqXjCwx8Cd992APHJI/XHD+tANW8D9v9s3Gj83aEW70Q0AAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/bf9a6/uk-vat-calculator.png",srcSet:"/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/f62f9/uk-vat-calculator.png 163w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/ae319/uk-vat-calculator.png 325w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/bf9a6/uk-vat-calculator.png 650w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/b7a80/uk-vat-calculator.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"quotes-on-design-generator.jpg",name:"quotes-on-design-generator",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe9NCKP/xAAXEAEAAwAAAAAAAAAAAAAAAAARAAEg/9oACAEBAAEFAkjWf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAICAwAAAAAAAAAAAAAAAAEQABExcZH/2gAIAQEAAT8hIZTdx0F//9oADAMBAAIAAwAAABAjD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQEAAwEBAAAAAAAAAAAAAAEAESExgfD/2gAIAQEAAT8QKMHwzfRWneI5AcAnt//Z",aspectRatio:1.3846153846153846,src:"/static/34996c655cedb0c1472a8abb2b219f34/07dca/quotes-on-design-generator.jpg",srcSet:"/static/34996c655cedb0c1472a8abb2b219f34/13e52/quotes-on-design-generator.jpg 163w,\n/static/34996c655cedb0c1472a8abb2b219f34/d4cde/quotes-on-design-generator.jpg 325w,\n/static/34996c655cedb0c1472a8abb2b219f34/07dca/quotes-on-design-generator.jpg 650w,\n/static/34996c655cedb0c1472a8abb2b219f34/02b42/quotes-on-design-generator.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"hex-colour-generator.jpg",name:"hex-colour-generator",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHWVsim/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQABBQJf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFhAAAwAAAAAAAAAAAAAAAAAAABEg/9oACAEBAAE/IRz/AP/aAAwDAQACAAMAAAAQiw//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEAAgMAAAAAAAAAAAAAAAABABEgMWH/2gAIAQEAAT8QvjAOhYYf/9k=",aspectRatio:1.3846153846153846,src:"/static/5b37ff11550855d441ea0c5a3a96b00d/07dca/hex-colour-generator.jpg",srcSet:"/static/5b37ff11550855d441ea0c5a3a96b00d/13e52/hex-colour-generator.jpg 163w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/d4cde/hex-colour-generator.jpg 325w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/07dca/hex-colour-generator.jpg 650w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/02b42/hex-colour-generator.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"elliott-smith-tribute.jpg",name:"elliott-smith-tribute",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGiU6TBQ//EABkQAQADAQEAAAAAAAAAAAAAAAEAAhESIf/aAAgBAQABBQLcnWtL81AhQj4//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRABAAIDAAAAAAAAAAAAAAAAABExAhAh/9oACAEBAAY/AqlSHWOv/8QAGxAAAwEAAwEAAAAAAAAAAAAAAAERIVFxgZH/2gAIAQEAAT8hW1lPhyHQ5OPR3a8J3V3XRaJH/9oADAMBAAIAAwAAABBTD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEAAwADAAAAAAAAAAAAAAERACExQaGx/9oACAEBAAE/ENZSh3CM4yDsLo94KHWujjqFyFfcP2MBUk5nj0cz/9k=",aspectRatio:1.3846153846153846,src:"/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/07dca/elliott-smith-tribute.jpg",srcSet:"/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/13e52/elliott-smith-tribute.jpg 163w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/d4cde/elliott-smith-tribute.jpg 325w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/07dca/elliott-smith-tribute.jpg 650w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/02b42/elliott-smith-tribute.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}}]}}}},157:function(A,e,a){"use strict";var t=a(153),n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=a(149),s=a(161),l=a.n(s),d=function(){return c.a.createElement("nav",{className:l.a.nav},c.a.createElement("div",{className:l.a.navContainer},c.a.createElement(i.a,{className:l.a.navLink,to:"/"},"Leo Reeves"),c.a.createElement(i.a,{style:{marginLeft:"auto"},activeStyle:{borderBottomColor:"#00AC7E"},className:l.a.navLink,to:"/portfolio"},"Portfolio"),c.a.createElement(i.a,{activeStyle:{borderBottomColor:"#00AC7E"},className:l.a.navLink,to:"/about"},"About"),c.a.createElement(i.a,{activeStyle:{borderBottomColor:"#00AC7E"},className:l.a.navLink,to:"/contact"},"Contact")))},g=a(162),b=a.n(g),u=function(){return c.a.createElement("footer",{className:b.a.footer},c.a.createElement("div",{className:b.a.navContainer},c.a.createElement(i.a,{className:b.a.navLink,to:"/"},"© 2019 Leo Reeves"),c.a.createElement("a",{style:{marginLeft:"auto"},className:b.a.navLink,href:"https://codepen.io/leoreeves/",target:"_blank",rel:"noopener noreferrer"},"Codepen"),c.a.createElement("a",{href:"https://github.com/leoreeves/",target:"_blank",rel:"noopener noreferrer",className:b.a.navLink},"Github"),c.a.createElement("a",{href:"https://www.linkedin.com/in/leoreeves/",target:"_blank",rel:"noopener noreferrer",className:b.a.navLink},"Linkedin")))},E=a(163),m=a.n(E),p=(a(164),function(A){var e=A.children;return c.a.createElement(i.b,{query:"755544856",render:function(){return c.a.createElement("div",{className:m.a.layoutContainer},c.a.createElement(d,null),c.a.createElement("main",null,e),c.a.createElement(u,null))},data:t})});p.propTypes={children:o.a.node.isRequired};e.a=p},158:function(A,e,a){"use strict";var t=a(159),n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=a(167),s=a.n(i);function l(A){var e=A.description,a=A.lang,n=A.meta,r=A.keywords,o=A.title,i=t.data.site,l=e||i.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l},159:function(A){A.exports={data:{site:{siteMetadata:{title:"Leo Reeves",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-456865eb117ebb45b035.js.map