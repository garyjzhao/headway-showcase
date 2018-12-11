(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=(t(139),t(137),t(134)),o=t.n(i),c=t(140),s=t(135),l=t(136);function d(){var n=o()(["\n  width: 200px;\n  height: 200px;\n  margin: 0 auto 15px;\n  img {\n    border-radius: 5px;\n    width: 100%;\n  }\n"]);return d=function(){return n},n}function u(){var n=o()(["\n  background-color: #59aad3;\n  color: #fff;\n  .flex-container {\n    max-width: 600px;\n    margin: 0 auto;\n    padding: 60px 20px;\n    @media (min-width: 650px) {\n      padding: 60px 100px 30px;\n    }\n    @media screen and (min-width: 500px) {\n      display: flex;\n      justify-content: space-between;\n    }\n  }\n  .copy {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 400px;\n    margin: 0 15px;\n    @media screen and (max-width: 500px) {\n      text-align: center;\n    }\n    h1 {\n      margin-top: 0;\n    }\n  }\n"]);return u=function(){return n},n}var p=s.a.div(u()),m=s.a.div(d()),g=function(){return r.a.createElement(l.StaticQuery,{query:"513339476",render:function(n){return r.a.createElement(p,null,r.a.createElement("div",{class:"flex-container"},r.a.createElement(m,null,r.a.createElement("img",{src:n.github.user.avatarUrl,alt:"My Github Avatar"})),r.a.createElement("div",{className:"copy"},r.a.createElement("h1",null,"Hi, ",n.github.user.name," here!"),r.a.createElement("p",null,"Thanks for this opportunity to showcase some of my latest works and a little bit of myself!"))))},data:c})};function h(){var n=o()(["\n  text-align: center;\n"]);return h=function(){return n},n}var f=s.a.h2(h()),x=function(){return r.a.createElement(f,null,"Thank you for stopping by!")},w=function(n){var e=n.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),e,r.a.createElement(x,null))},b=(t(151),t(153));function _(){var n=o()(["\n  max-width: 1340px;\n  margin: 0 auto;\n  padding: 60px 40px;\n  @media (min-width: 650px) {\n    padding: 60px 100px;\n  }\n  display: flex;\n  flex-wrap: wrap;\n  h2 {\n    flex: 1 1 100%;\n    text-align: center;\n  }\n  .image-wrapper {\n    overflow: hidden;\n    background-color: #000;\n    display: flex;\n    align-items: center;\n    flex: 1 1 50%;\n    @media screen and (min-width: 500px) {\n      flex: 1 1 33%;\n    }\n    @media screen and (min-width: 768px) {\n      flex: 1 1 25%;\n    }\n    img {\n      width: 100%;\n    }\n  }\n"]);return _=function(){return n},n}var v=s.a.div(_()),y=function(){return r.a.createElement(l.StaticQuery,{query:"4113329626",render:function(n){return r.a.createElement(v,null,r.a.createElement("h2",null,"Snapshot of My Life Away From the Screen"," ",r.a.createElement("span",{role:"img","aria-label":"wave"},"🌊"),r.a.createElement("span",{role:"img","aria-label":"hiking"},"🥾"),r.a.createElement("span",{role:"img","aria-label":"shrimp"},"🍤")),n.allInstagramContent.edges.map(function(n,e){return r.a.createElement("a",{href:n.node.link,target:"_blank",className:"image-wrapper",rel:"noopener noreferrer"},r.a.createElement("img",{src:n.node.images.standard_resolution.url,alt:""}))}))},data:b})},E=t(154),k=t(7),A=t.n(k),C=t(155),j=t.n(C),S=t(156),q=t.n(S);function z(){var n=o()(["\n  flex: 1 1 0;\n  max-width: 500px;\n\n  @media screen and (min-width: 500px) {\n    ","\n  }\n  img {\n    width: 100%;\n    box-shadow: 0 0 20px #ccc;\n  }\n"]);return z=function(){return n},n}function I(){var n=o()(["\n  background: #59aad3;\n  font-size: 18px;\n  letter-spacing: 1px;\n  display: inline-block;\n  margin-bottom: 10px;\n  border-radius: 7px;\n  padding: 10px 20px;\n  text-decoration: none;\n  color: #fff;\n  margin-right: 10px;\n"]);return I=function(){return n},n}function Q(){var n=o()(["\n  max-width: 1340px;\n  margin: 0 auto;\n  padding: 30px 40px;\n  @media (min-width: 650px) {\n    padding: 30px 100px;\n  }\n  @media screen and (min-width: 500px) {\n    display: flex;\n    align-items: center;\n  }\n  .copy {\n    flex: 1 1 0;\n    ","\n  }\n"]);return Q=function(){return n},n}var R=s.a.div(Q(),function(n){return 0===n.index?"order: 1;":"order: 2;"}),D=s.a.a(I()),F=s.a.div(z(),function(n){return 0===n.index?"order: 2;margin-left:25px":"order: 1;margin-right:25px"}),T=function(n){function e(){return n.apply(this,arguments)||this}return A()(e,n),e.prototype.render=function(){var n,e;return"garyjzhao.github.io"===this.props.name?(n=""+q.a,e="This is my personal portfolio website I made back in 2017. I need to update it, but wanted to include it since I am ultilizing the GitHub API."):(n=""+j.a,e="This is a coding challenge I did for Asana. It was to create a puppy gallery page and useres can click on images to display a fuller image."),r.a.createElement(R,{index:this.props.index},r.a.createElement(F,{index:this.props.index},r.a.createElement("img",{src:n,alt:"Screenshot of my work"})),r.a.createElement("div",{className:"copy"},r.a.createElement("h2",null,this.props.description),r.a.createElement("p",null,e),r.a.createElement(D,{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},"Visit Site"),r.a.createElement(D,{href:this.props.repoUrl,target:"_blank",rel:"noopener noreferrer"},"View Repo")))},e}(r.a.Component);function G(){var n=o()(["\n  margin: 50px 0 0;\n  text-align: center;\n"]);return G=function(){return n},n}var H=s.a.h2(G()),U=function(){return r.a.createElement(l.StaticQuery,{query:"3682342094",render:function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,"Just a short list of GitHub Repos"),n.github.viewer.pinnedRepositories.edges.map(function(n,e){return r.a.createElement(T,{index:e,name:n.node.name,repoUrl:n.node.url,url:n.node.homepageUrl,description:n.node.description})}))},data:E})};e.default=function(){return r.a.createElement(w,null,r.a.createElement(U,null),r.a.createElement(y,null))}},136:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return g}),t.d(e,"StaticQueryContext",function(){return p}),t.d(e,"StaticQuery",function(){return m});var a=t(0),r=t.n(a),i=t(4),o=t.n(i),c=t(133),s=t.n(c);t.d(e,"Link",function(){return s.a}),t.d(e,"withPrefix",function(){return c.withPrefix}),t.d(e,"navigate",function(){return c.navigate}),t.d(e,"push",function(){return c.push}),t.d(e,"replace",function(){return c.replace}),t.d(e,"navigateTo",function(){return c.navigateTo});var l=t(138),d=t.n(l);t.d(e,"PageRenderer",function(){return d.a});var u=t(48);t.d(e,"parsePath",function(){return u.a});var p=r.a.createContext({}),m=function(n){return r.a.createElement(p.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},138:function(n,e,t){var a;n.exports=(a=t(143))&&a.default||a},139:function(n,e,t){},140:function(n){n.exports={data:{github:{user:{avatarUrl:"https://avatars0.githubusercontent.com/u/2349702?v=4",name:"Gary Zhao"}}}}},143:function(n,e,t){"use strict";t.r(e);t(32);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),c=t(66),s=t(2),l=function(n){var e=n.location,t=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},153:function(n){n.exports={data:{allInstagramContent:{edges:[{node:{link:"https://www.instagram.com/p/BAQEzu3glB5bLUIuKRDuR-k8GsbpiPnH3v22UI0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/030644141306f33535a4d876e735b7eb/5CAA42DC/t51.2885-15/sh0.08/e35/s640x640/38868664_1064069787090458_7124862900203683840_n.jpg?_nc_ht=scontent.cdninstagram.com"}}}},{node:{link:"https://www.instagram.com/p/_X1ElXglCSzSrkh5fHt5golrwD66XpQsXAVG80/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/a78ba2c25ad0740b32cf75a016afe57c/5CA8F0C2/t51.2885-15/sh0.08/e35/s640x640/38802421_1108649379286734_5507405609831497728_n.jpg"}}}},{node:{link:"https://www.instagram.com/p/_FqiciAlDA6BtoSr0ojw97ZmzEuYc5rEaEF1I0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/ad9dedb7be288a25805fa5d891478bf8/5C115A5B/t51.2885-15/e15/39178656_918407858351493_5951675789979156480_n.jpg"}}}},{node:{link:"https://www.instagram.com/p/-qEpLcglLyeVQMFxp4zJHV_ElVDOCuLq6zrIw0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/39e4ed88daa3092404964d9937b7c4f0/5CAA0C77/t51.2885-15/sh0.08/e35/p640x640/39051607_257055221799674_7369378970367688704_n.jpg?_nc_ht=scontent.cdninstagram.com"}}}},{node:{link:"https://www.instagram.com/p/-lRSEdAlLgg4HuTBaHnqCgA--H2nznJNruSlQ0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/fd9f3aebec0c56ee7d1489192fe5d278/5CABD659/t51.2885-15/sh0.08/e35/s640x640/39137732_529050387533897_5472413089636810752_n.jpg"}}}},{node:{link:"https://www.instagram.com/p/-Fz0CQglAHVEZ2ihq_egqJysX5LStnMmQ0_ik0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/bd17074efd9efce7bdf18527a2f14068/5CA3B56A/t51.2885-15/sh0.08/e35/s640x640/39148855_292235961564625_8212718532199186432_n.jpg"}}}},{node:{link:"https://www.instagram.com/p/81XAK4glNMRAgQFuQ1_tx4EtBEwvXs2S16abA0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/fb3fa4a08f4760f5543fd862c007ddff/5C8FC7D0/t51.2885-15/sh0.08/e35/s640x640/39578052_935125896687198_4031598904976867328_n.jpg?_nc_ht=scontent.cdninstagram.com"}}}},{node:{link:"https://www.instagram.com/p/8NIUMkAlNI-SO8vuz0RR44QmVN4TTSLuYsBYI0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/b9e8d831ef4153f39fad9ae33eea009c/5C927739/t51.2885-15/sh0.08/e35/s640x640/39345023_1845743252173690_3223383632936697856_n.jpg?_nc_ht=scontent.cdninstagram.com"}}}},{node:{link:"https://www.instagram.com/p/8M4aBLAlLNewYD1fQleFPoSTp_NuvMiOgIBhQ0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/414c66f10f328405e41bd133810cbaf6/5CA49083/t51.2885-15/sh0.08/e35/s640x640/38540350_2174868576092902_6178929626371325952_n.jpg?_nc_ht=scontent.cdninstagram.com"}}}},{node:{link:"https://www.instagram.com/p/8MyHpqAlDFpZG8AQuqTSWJgvXD_UbsEOp6Yag0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/f39ceefc16c87151aec33be22d98baf8/5C8DDFED/t51.2885-15/sh0.08/e35/p640x640/39077789_658852814500048_138140274386796544_n.jpg?_nc_ht=scontent.cdninstagram.com"}}}},{node:{link:"https://www.instagram.com/p/7iXaT4AlPRO_vx08N0cfDjmzJ24d0-A90GQZE0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/05bb431744c74d7b6ca0d64d3d9c0e4d/5CA7CBF2/t51.2885-15/sh0.08/e35/s640x640/39189141_2124752731115734_8978336314302660608_n.jpg"}}}},{node:{link:"https://www.instagram.com/p/7Tnk7JAlIxs0nmvYGHixG-oaKP1Ha_cNz4kIc0/",images:{standard_resolution:{url:"https://scontent.cdninstagram.com/vp/5bebc9875fe71babbe606b00c23653b7/5CAC4154/t51.2885-15/sh0.08/e35/s640x640/39122492_1948269338799105_5412396487952826368_n.jpg?_nc_ht=scontent.cdninstagram.com"}}}}]}}}},154:function(n){n.exports={data:{github:{viewer:{pinnedRepositories:{edges:[{node:{name:"asana-coding-challenge",url:"https://github.com/garyjzhao/asana-coding-challenge",homepageUrl:"https://www.garyzhao.com/asana-coding-challenge/",description:"My submission for Asana's Web Developer Coding Challenge"}},{node:{name:"garyjzhao.github.io",url:"https://github.com/garyjzhao/garyjzhao.github.io",homepageUrl:"https://garyzhao.com/",description:"Personal Website"}}]}}}}}},155:function(n,e,t){n.exports=t.p+"static/asana-e8d01978e0b41dabd60ca123f63ba892.jpg"},156:function(n,e,t){n.exports=t.p+"static/personal-8ed66631e323cceaaac76b5387b3e70c.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-6a37a6beed386d80b979.js.map