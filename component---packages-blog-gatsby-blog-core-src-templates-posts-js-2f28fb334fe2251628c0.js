/*! For license information please see component---packages-blog-gatsby-blog-core-src-templates-posts-js-2f28fb334fe2251628c0.js.LICENSE.txt */
(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_personal=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_personal||[]).push([[142],{8676:function(t){"use strict";t.exports=function(t,e){e=e||JSON.stringify;for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e(i);n[a]||(r.push(i),n[a]=!0)}return r}},3033:function(t,e){"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;e.validate=function(t){if(!t)return!1;if(t.length>254)return!1;if(!r.test(t))return!1;var e=t.split("@");return!(e[0].length>64)&&!e[1].split(".").some((function(t){return t.length>63}))}},617:function(t,e,r){var n=r(4916)("jsonp");t.exports=function(t,e,r){"function"==typeof e&&(r=e,e={});e||(e={});var a,s,c=e.prefix||"__jp",u=e.name||c+o++,l=e.param||"callback",f=null!=e.timeout?e.timeout:6e4,p=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;f&&(s=setTimeout((function(){h(),r&&r(new Error("Timeout"))}),f));function h(){a.parentNode&&a.parentNode.removeChild(a),window[u]=i,s&&clearTimeout(s)}return window[u]=function(t){n("jsonp got",t),h(),r&&r(null,t)},t=(t+=(~t.indexOf("?")?"&":"?")+l+"="+p(u)).replace("?&","?"),n('jsonp req "%s"',t),(a=document.createElement("script")).src=t,d.parentNode.insertBefore(a,d),function(){window[u]&&h()}};var o=0;function i(){}},4916:function(t,e,r){function n(){var t;try{t=e.storage.debug}catch(r){}return!t&&"undefined"!=typeof process&&"env"in process&&(t={}.DEBUG),t}(e=t.exports=r(3157)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))})),t.splice(i,0,n)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(r){}},e.load=n,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(n())},3157:function(t,e,r){var n;function o(t){function r(){if(r.enabled){var t=r,o=+new Date,i=o-(n||o);t.diff=i,t.prev=n,t.curr=o,n=o;for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];a[0]=e.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var c=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;c++;var o=e.formatters[n];if("function"==typeof o){var i=a[c];r=o.call(t,i),a.splice(c,1),c--}return r})),e.formatArgs.call(t,a);var u=r.log||e.log||console.log.bind(console);u.apply(t,a)}}return r.namespace=t,r.enabled=e.enabled(t),r.useColors=e.useColors(),r.color=function(t){var r,n=0;for(r in t)n=(n<<5)-n+t.charCodeAt(r),n|=0;return e.colors[Math.abs(n)%e.colors.length]}(t),"function"==typeof e.init&&e.init(r),r}(e=t.exports=o.debug=o.default=o).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){e.save(t),e.names=[],e.skips=[];for(var r=("string"==typeof t?t:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(t=r[o].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1},e.humanize=r(4207),e.names=[],e.skips=[],e.formatters={}},4207:function(t){var e=1e3,r=60*e,n=60*r,o=24*n,i=365.25*o;function a(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}t.exports=function(t,s){s=s||{};var c,u=typeof t;if("string"===u&&t.length>0)return function(t){if((t=String(t)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!a)return;var s=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(t);if("number"===u&&!1===isNaN(t))return s.long?a(c=t,o,"day")||a(c,n,"hour")||a(c,r,"minute")||a(c,e,"second")||c+" ms":function(t){if(t>=o)return Math.round(t/o)+"d";if(t>=n)return Math.round(t/n)+"h";if(t>=r)return Math.round(t/r)+"m";if(t>=e)return Math.round(t/e)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},7954:function(t,e,r){"use strict";e.Z=void 0;var n,o=(n=r(617))&&n.__esModule?n:{default:n},i=r(3033);var a=function(t){var e=t.url,r=t.timeout;return new Promise((function(t,n){return(0,o.default)(e,{param:"c",timeout:r},(function(e,r){e&&n(e),r&&t(r)}))}))},s=function(t){var e="";for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n="group["===r.substring(0,6)?r:r.toUpperCase();e=e.concat("&".concat(n,"=").concat(t[r]))}return e},c=function(t,e,r){var n=(0,i.validate)(t),o=encodeURIComponent(t);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var c=__GATSBY_PLUGIN_MAILCHIMP_ADDRESS__,u=__GATSBY_PLUGIN_MAILCHIMP_TIMEOUT__;arguments.length<3&&"string"==typeof e?c=e:"string"==typeof r&&(c=r),c=c.replace(/\/post/g,"/post-json");var l="&EMAIL=".concat(o).concat(s(e)),f="".concat(c).concat(l);return a({url:f,timeout:u})};e.Z=c},9626:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Q}});var n=r(5773),o=r(808),i=r(7378),a=r(7530),s=r(5446),c=r(4675),u=r(9835),l=r(5119),f=r(8692),p=r(9932),d=r(8391),h=r(8945),m=r(7375),v=r(559),g=["tags"],y=function(t){var e=t.tags,r=(0,o.Z)(t,g);return(0,v.tZ)(m.Z,(0,n.Z)({aside:!0,title:"Tags"},r),(0,v.tZ)(h.Zb,{variant:"paper"},(0,v.tZ)(h.xu,{variant:"lists.badges"},e&&e.map((function(t){var e=t.id,r=t.name,n=t.slug;return(0,v.tZ)(h.Ct,{variant:"tag",key:e,as:d.rU,to:n},r)})))))},b={msg:{mb:0},button:{display:"block",mx:"auto"}},x=function(t){var e=t.handleSubmit,r=t.canSubmit,n=t.submitting,o=t.message,a=t.success;return(0,v.tZ)("form",{onSubmit:e},o&&(0,v.tZ)(h.v0,{variant:a?"success":"error",sx:b.msg,dangerouslySetInnerHTML:{__html:o}}),r&&(0,v.tZ)(i.Fragment,null,(0,v.tZ)(h.xu,{variant:"forms.row"},(0,v.tZ)(h.II,{name:"email",type:"email",placeholder:"Email Address","aria-label":"Email Address",required:!0})),(0,v.tZ)(h.zx,{type:"submit",variant:a||n?"disabled":"primary",disabled:a||n,sx:b.button},"Subscribe ",n&&(0,v.tZ)(h.$j,{size:"20"}))))},w=r(7791),Z=r(824),O=r.n(Z),k=r(7954),P=function(){var t=(0,i.useState)(),e=t[0],r=t[1],n=(0,i.useState)(!1),o=n[0],a=n[1],s=function(){var t=(0,w.Z)(O().mark((function t(e){var n,o,i;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a(!0),n=new FormData(e.target),o=n.get("email"),t.next=6,(0,k.Z)(o);case 6:i=t.sent,r(i),a(!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=e&&"success"===e.result,u=e&&"success"!==e.result;return{handleSubmit:s,canSubmit:!e||u,submitting:o,message:e&&e.msg,success:c,error:u}},j=function(t){var e=P(),r=e.handleSubmit,o=e.canSubmit,i=e.submitting,a=e.message,s=e.success;return(0,v.tZ)(m.Z,(0,n.Z)({aside:!0,title:"Newsletter"},t),(0,v.tZ)(h.Zb,{variant:"paper"},(0,v.tZ)(h.xv,{variant:"p"},"Make sure to subscribe to our newsletter and be the first to know the news."),(0,v.tZ)(x,{handleSubmit:r,canSubmit:o,submitting:i,message:a,success:s})))},S=r(9642),_=r(6548),E=r(2551),A=function(){var t=(0,_.Z)().social;return(0,v.tZ)(m.Z,{aside:!0,title:"Let's Talk"},(0,v.tZ)(h.Zb,{variant:"paper"},(0,v.tZ)(h.xv,{variant:"p"},"Want to find out how I can solve problems specific to your business? Let's talk."),(0,v.tZ)(S.Z,{items:(0,E.Z)(t),iconOnly:!0})))},L=r(141),I=["children","sx"],z=["children","sx"],C=["children"];function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){(0,L.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var D={alignItems:"center",justifyContent:"space-between",position:"relative",zIndex:2,pt:4,pb:5},M={flexBasis:"2/3",flex:1,textAlign:["center",null,"left"]},U={display:["none",null,"block"],flexBasis:"1/2"},R=function(t){return t.children},F=function(t){var e=t.children,r=(0,o.Z)(t,C),n=i.Children.toArray(e),a=n.filter((function(t){var e=t.type;return e.displayName===R.name||e.name===R.name})),s=n.filter((function(t){var e=t.type;return e.displayName!==R.name&&e.name!==R.name}));return(0,v.tZ)(i.Fragment,null,(0,v.tZ)(h.kC,{sx:N(N({},D),r.sx)},s),a)},G=function(t){var e=t.children,r=t.sx,i=(0,o.Z)(t,I);return(0,v.tZ)(h.xu,(0,n.Z)({sx:N(N({},M),r)},i),e)},B=function(t){var e=t.children,r=t.sx,i=(0,o.Z)(t,z);return(0,v.tZ)(h.xu,(0,n.Z)({sx:N(N({},U),r)},i),e)},W={author:{display:"inline-block",color:"alpha"},occupation:{mb:4},specialty:{color:"text",mb:4}},$=function(){return(0,v.tZ)(i.Fragment,null,(0,v.tZ)(h.X6,{variant:"h1"},"Hi, I'm ",(0,v.tZ)(h.xv,{sx:W.author},"Jane Smith"),"."),(0,v.tZ)(h.X6,{variant:"h1",sx:W.occupation},"UX/UI Designer"),(0,v.tZ)(h.X6,{variant:"h3",sx:W.specialty},"Specialized in Gatsby and React"),(0,v.tZ)(h.xu,{variant:"buttons.group"},(0,v.tZ)(h.zx,{as:d.rU,to:"/contact"},"Contact Me"),(0,v.tZ)(h.zx,{variant:"white",as:d.rU,to:"/about"},"About Me")))},X=r(3359),q={wrapper:{display:["none",null,"block"],position:"relative",textAlign:"center"},pattern:{height:"1/2",transform:"translate(0, 50%)"}},H=function(){var t=(0,d.K2)(J),e=t&&t.avatar&&t.avatar.childImageSharp;return(0,v.tZ)(h.xu,{sx:q.wrapper},(0,v.tZ)(X.Z,{avatar:e,withPattern:!0,patternStyles:q.pattern,loading:"eager"}))},J="2714988809",K=function(t){return t.location.pathname!==t.pageContext.basePath?null:(0,v.tZ)(F,null,(0,v.tZ)(G,null,(0,v.tZ)($,null)),(0,v.tZ)(B,null,(0,v.tZ)(H,null)))},Y=r(2463),V=["data"],Q=function(t){var e=t.data.paginatedPosts,r=void 0===e?{}:e,d=(0,o.Z)(t,V),h=d.pageContext,m=void 0===h?{}:h,g=m.services,b=void 0===g?{}:g,x=m.basePath,w=(0,Y.c8)(),Z=(0,Y.q6)();return(0,v.tZ)(a.Ar,d,(0,v.tZ)(f.Z,{title:"Home"}),(0,v.tZ)(a.VM,{sx:{bg:"contentBg"}},(0,v.tZ)(K,d)),(0,v.tZ)(u.Z,null),(0,v.tZ)(a.Kq,null,(0,v.tZ)(a.or,null,(0,v.tZ)(s.Z,{variant:["horizontal-md","horizontal"],title:"Recently Published",nodes:r.nodes,columns:[1]})),(0,v.tZ)(a.YE,null,(0,v.tZ)(p.Z,{categories:Z}),(0,v.tZ)(u.Z,null),(0,v.tZ)(y,{tags:w}),(0,v.tZ)(u.Z,null),(0,v.tZ)(A,null),(0,v.tZ)(c.Z,null,b.mailchimp&&(0,v.tZ)(i.Fragment,null,(0,v.tZ)(u.Z,null),(0,v.tZ)(j,null))))),(0,v.tZ)(u.Z,null),(0,v.tZ)(a.jS,null,(0,v.tZ)(l.Z,(0,n.Z)({},r.pageInfo,{basePath:x}))))}},2463:function(t,e,r){"use strict";r.d(e,{gN:function(){return c},q6:function(){return a},c8:function(){return l}});var n=r(8391),o=r(8676),i=r.n(o),a=function(){var t=(0,n.K2)(s).allArticleCategory;return t.nodes?i()(t.nodes,(function(t){return t.slug})):null},s="4235339838",c=function(){var t=(0,n.K2)(u).allArticleAuthor;return t.nodes?i()(t.nodes,(function(t){return t.slug})):null},u="4240507859",l=function(){return(0,n.K2)(f).allArticleTag.nodes||[]},f="2918496967"},3359:function(t,e,r){"use strict";r.d(e,{Z:function(){return m}});var n=r(141),o=(r(7378),r(583)),i=r(8945),a=r(1025),s=r(1115),c=r(7314),u=r(559);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=function(t){return.35*t+"rem"},d={wrapper:{position:"relative",zIndex:2,textAlign:"center",mb:p(3)},pattern:{backgroundSize:"8rem",opacity:.15},circle:function(t){var e=t.width;return{width:[p(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",transform:"translate(-50%)  scale(0.98)",left:"50%",top:p(3),bg:"alpha"}},arc:function(t){var e=t.width;return{width:[p(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",zIndex:2,left:"50%",transform:"translate(-50%)",mt:p(-1),ml:p(-2),boxShadow:function(t){return"\n\t\t\t"+p(2)+"\n\t\t\t"+p(4)+"\n\t\t\t"+t.colors.omegaLight+"\n\t\t"}}},imageWrapper:{mx:"auto",img:{borderRadius:"0 0 9999px 9999px"}}},h=function(t){var e=t.avatar,r=t.withPattern,n=t.patternStyles,l=void 0===n?{}:n,p=t.size,h=t.width,m=t.loading,v=t.alt,g=e&&(0,c.Z)(e,p);return g?(h=h||g.width,(0,u.tZ)(i.xu,{sx:d.wrapper},(0,u.tZ)(i.xu,null,r&&(0,u.tZ)(s.Z,{sx:f(f({},d.pattern),l)}),(0,u.tZ)(i.xu,{sx:d.circle({width:h})}),(0,u.tZ)(i.xu,{sx:d.arc({width:h})}),(0,u.tZ)(o.G,{image:g,alt:v,loading:m,css:(0,a.i)(d.imageWrapper)})))):null},m=h;h.defaultProps={size:"regular",withPattern:!1}},5446:function(t,e,r){"use strict";r.d(e,{Z:function(){return S}});var n=r(5773),o=r(808),i=r(7378),a=r(8945),s=r(2923),c=r(5302),u=r(8676),l=r.n(u),f=r(7375),p=r(141),d=r(5987),h=r(1025),m=r(7566),v={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},g=r(7477),y=r(559);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){(0,p.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w=(0,g.ZP)((function(){return r.e(636).then(r.bind(r,2324))})),Z=i.forwardRef((function(t,e){var r=t.columns,o=t.slidesToScroll,i=t.smoothAutoScroll,s=t.autoPlay,c=t.autoplaySpeed,u=t.fade,l=t.dots,f=t.arrows,p=t.centerMode,g=t.centerPadding,b=t.controlPosition,Z=t.beforeChange,O=t.children,k=(0,d.B7)(),P={slidesToScroll:1,autoplay:!0,cssEase:"linear"},j={centerMode:!u,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!l||!u)},S=k.theme.breakpoints.map((function(t,e){var n=r[e>=r.length?r.length-1:e],i=o[e>=o.length?o.length-1:e];return{breakpoint:parseInt(t),settings:x({slidesToShow:n,slidesToScroll:i},0===e?j:{})}})),_={ref:e,beforeChange:Z,slidesToShow:r[r.length-1],slidesToScroll:o[o.length-1],speed:800,dots:l,arrows:f,centerMode:p,centerPadding:g,infinite:!0,cssEase:u?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:u,responsive:S,css:(0,h.i)(x(x(x(x({},u?v.fade:v.slide),"bottom"===b&&v.controlBottom),"center"===b&&v.controlCenter),"over"===b&&v.controlOver)),prevArrow:(0,y.tZ)(a.hU,{sx:v.arrowPrev},(0,y.tZ)(m.bUI,null)),nextArrow:(0,y.tZ)(a.hU,{sx:v.arrowNext},(0,y.tZ)(m.Dli,null))};i&&(_=x(x(x({},_),P),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!i&&s&&(_=x(x(x({},_),P),{},{speed:300,autoplaySpeed:c}));var E=O.slice(0,r[r.length-1]);return(0,y.tZ)(w,(0,n.Z)({},_,{fallback:E}),O)})),O=Z;Z.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var k=r(8229),P=["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"],j=i.forwardRef((function(t,e){var r=t.nodes,i=t.variant,u=t.title,p=t.withTitleLink,d=t.limit,h=t.skip,m=t.distinct,v=t.slider,g=t.aside,b=t.asNavFor,x=t.loading,w=(0,o.Z)(t,P),Z=function(t,e){var r=e.limit,n=e.skip,o=e.distinct;if(!t)return null;if(!r&&!n&&!o)return t;var i=t;return o&&(i=l()(i,(function(t){return t.id}))),n&&(i=i.slice(n)),r&&(i=i.slice(0,r)),i}(r,{distinct:m,limit:d,skip:h});if(!Z||!Z.length)return null;var j=p?Z[0].category&&Z[0].category.slug:"",S=u&&""+(0,c.Z)(Z.map((function(t){return t.id})).join()),_=(0,s.Z)(v?"lists.cards.slider":"lists.cards.fixed",i),E=function(t){b&&b.current&&(b.current.slickPause(),b.current.slickGoTo(t))},A=Z.map((function(e,r){return(0,y.tZ)(k.Z,(0,n.Z)({key:e.id,variant:i,onMouseOver:function(){return E(r)},onFocus:function(){return E(r)},loading:t.fade?0===r?x:void 0:x},e,w))})),L=function(){return(0,y.tZ)(a.xu,{sx:{variant:_}},v?(0,y.tZ)(O,(0,n.Z)({ref:e},w),A):A)};return u?(0,y.tZ)(f.Z,{title:u,titleLink:j,key:S,aside:g},(0,y.tZ)(L,null)):(0,y.tZ)(L,null)})),S=j;j.defaultProps={variant:"vertical",columns:[1],aside:!1}},5119:function(t,e,r){"use strict";r.d(e,{Z:function(){return p}});var n=r(141),o=(r(7378),r(8391)),i=r(8945),a=r(7566),s=function(t){return t.replace(/\/*$/,"/")},c=r(559);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={wrapper:{justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"full",bg:"contentBg",maxWidth:["none",500],mx:"auto",p:1},item:{width:"1/3"},number:{py:2},button:{minWidth:"full"}},p=function(t){var e=t.currentPage,r=t.pageCount,n=t.hasPreviousPage,u=t.hasNextPage,p=t.basePath,d=void 0===p?"":p,h=t.slug;if(!u&&!n)return"";var m=s(d+(void 0===h?"":h)),v=s(m+"page"),g=e>=3?""+v+(e-1):m,y=""+v+(e+1);return(0,c.tZ)(i.kC,{sx:f.wrapper},(0,c.tZ)(i.xu,{sx:f.item},n&&(0,c.tZ)(i.zx,{variant:"mute",as:o.rU,to:g,sx:f.button},(0,c.tZ)(a.bUI,null),"Previous")),(0,c.tZ)(i.xu,{sx:l(l({},f.item),f.number)},"Page ",(0,c.tZ)("strong",null,e)," of ",(0,c.tZ)("strong",null,r)),(0,c.tZ)(i.xu,{sx:f.item},u&&(0,c.tZ)(i.zx,{variant:"dark",as:o.rU,to:y,sx:f.button},"Next",(0,c.tZ)(a.Dli,null))))}},4675:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});r(7378);var n=r(8945),o=r(559),i=function(t){var e=t.children;return(0,o.tZ)(n.W2,{variant:"sticky"},e)}},9932:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var n=r(5773),o=r(808),i=(r(7378),r(8945)),a=r(7566),s=r(8391),c=r(6030),u=r(559),l={button:{vertical:{variant:"cards.primary",display:"flex",alignItems:"center",textAlign:"initial",overflow:"hidden",mb:3,p:0,pr:2,svg:{color:"omegaDark",verticalAlign:"middle",size:"icon.xs"},":hover":{svg:{color:"white"},"div:first-of-type":{bg:"alpha"}}},horizontal:{variant:"cards.interactive",p:0,svg:{color:"alpha",size:"icon.sm"},":hover":{svg:{color:"omegaDark"}}}},icon:{vertical:{display:["flex","none","flex"],transition:"all 250ms ease",alignItems:"center",justifyContent:"center",alignSelf:"stretch",bg:"omegaLight",width:70},horizontal:{display:["block","none","block"],boxSizing:"content-box",transition:"all 250ms ease",borderRadius:"bottom",width:"1/3",height:"icon.sm",mx:"auto",pt:3}},text:{flex:"auto",color:"omegaDark",whiteSpace:"nowrap",p:3,m:0}},f=function(t){var e=t.variant,r=t.name,n=t.Icon,o=t.iconPath,a=t.iconColor,f=t.to;return(0,u.tZ)(i.zx,{variant:"none",as:f&&s.rU,to:f,sx:l.button[e]},(n||o)&&(0,u.tZ)(i.xu,{sx:l.icon[e]},o&&(0,u.tZ)(c.Z,{src:o}),n&&(0,u.tZ)(n,{color:a})),(0,u.tZ)(i.X6,{variant:"h4",as:"span",sx:l.text},r))},p=f;f.defaultProps={variant:"horizontal",number:void 0};var d=r(7375),h=["variant","categories"],m={horizontal:{display:"flex",flexWrap:"nowrap",overflowX:"auto",width:"auto",scrollBehavior:"smooth",m:-2,a:{flex:1,minWidth:["1/3","auto"],m:2}}},v=function(t){var e=t.variant,r=t.categories,s=(0,o.Z)(t,h);return(0,u.tZ)(d.Z,(0,n.Z)({aside:"vertical"===e,title:"Topics"},s),(0,u.tZ)(i.xu,{sx:m[e]},r&&r.map((function(t){var r=t.id,n=t.name,o=t.slug,i=t.totalCount,s=t.icon,c={key:r,name:n,number:i,to:o,iconPath:s,Icon:!s&&a.ALl,variant:e};return 0!==i&&(0,u.tZ)(p,c)}))))},g=v;v.defaultProps={variant:"vertical"}},1337:function(t,e,r){var n=r(7501).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(L){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),s=new _(n||[]);return a(i,"_invoke",{value:k(t,r,s)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=p;var h={};function m(){}function v(){}function g(){}var y={};f(y,c,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(E([])));x&&x!==r&&i.call(x,c)&&(y=x);var w=g.prototype=m.prototype=Object.create(y);function Z(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,s,c){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function k(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function P(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:A}}function A(){return{value:void 0,done:!0}}return v.prototype=g,a(w,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:v,configurable:!0}),v.displayName=f(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},Z(O.prototype),f(O.prototype,u,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(w),f(w,l,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},7501:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},824:function(t,e,r){var n=r(1337)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},7791:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-posts-js-2f28fb334fe2251628c0.js.map