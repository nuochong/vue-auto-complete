(function(e){function t(t){for(var n,a,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={index:0},i=[];function a(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"44e06e38"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=a(e);var c=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,o[1](c)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-auto-complete/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("c31f")},"19d1":function(e,t,o){"use strict";var n=o("8085"),r=o.n(n);r.a},"1eae":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("b0c0"),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("a9e3"),core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("841c"),core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_4__);__webpack_exports__["a"]={name:"AutoComplete",props:{source:{type:[String,Function],required:!0},method:{type:String,default:"get",required:!1},initialValue:{type:[String,Number],required:!1},resultsProperty:{type:String,required:!1,default:"name"},resultsDisplay:{type:[String,Function],default:"name"},placeholder:{default:"搜索内容",required:!1},maxlength:{type:Number,required:!1},showNoResults:{type:Boolean,default:!0,required:!1},showFocusResults:{type:Boolean,default:!0},inputClass:{type:[String,Object],required:!1},isUpperLower:{type:Boolean,required:!1},clearButtonIcon:{type:Boolean,default:!1,required:!1}},data:function(){return{value:"",isNoResult:!1,loading:!1,error:"",results:null,isShowContent:!1,isFocussed:!1,listSelected:0,boundaryUp:0,boundaryDown:0,tempHeight:0,isShowClear:!1,currentScrollTop:0}},watch:{},computed:{},mounted:function(){this.clearState(),this.value=this.initialValue?this.initialValue:"",console.log("this.value",this.value)},methods:{initSearch:function(){switch(console.log("触发了搜索"),this.resetValueState(),this.clearState(),this.$emit("change",this.value),!0){case"string"===typeof this.source:this.liKey=this.resultsDisplay,console.log("点击了搜索",this.liKey),this.search();break;case"function"===typeof this.source:console.log("使用函数搜索"),this.searchFunction();break;default:throw new TypeError}},resetValueState:function(){0==this.value.length&&(this.results=null)},autoScroll:function(e,t){var o=this.$refs["li-"+e][0];console.log("获取到的ref",o);var n=o.offsetTop;console.log("当前元素距离顶部的距离",n);var r=this.$refs["ul-container"].offsetHeight;console.log("获取滚动容器的高度",r);var i=o.offsetHeight;"down"==t?(this.boundaryUp=0,this.boundaryDown++,(this.checkScrollState(n,r)||this.boundaryDown>=6)&&(console.log("下，第一次，或者返回置顶超出视窗后"),console.log("需要调整滚动条"),this.$refs["ul-container"].scrollTop=n-r+i)):"up"==t&&(this.boundaryDown=0,this.boundaryUp++,(this.checkScrollState(n,r)||this.boundaryUp>=6)&&(console.log("上，第一次，或者返回置顶超出视窗后"),console.log("需要调整滚动条"),this.$refs["ul-container"].scrollTop=n))},checkScrollState:function(e,t){var o=this.$refs["ul-container"].scrollTop;return console.log("包含信息scrollTop",o),console.log("包含信息currentTop",e),console.log("包含信息ulHeight",t),e>o&&e<o+t?(console.log("包含"),!1):(console.log("未包含"),!0)},rememberCurrentLi:function(e){this.isShowContent&&this.isFocussed&&("focus"==e?this.$nextTick((function(){this.$refs["ul-container"].scrollTop=this.currentScrollTop})):"blur"==e&&(this.currentScrollTop=this.$refs["ul-container"].scrollTop))},searchFunction:function(){this.results=this.source(this.value),this.isShowContent=!0,console.log("temp",this.results)},liContent:function(e){return"string"===typeof this.source?e[this.resultsDisplay]:"function"===typeof this.source?e:void 0},downClick:function(){console.log("下");var e=this.results.length;this.listSelected<e-1?this.listSelected++:this.listSelected=0,this.resValue(this.listSelected),this.autoScroll(this.listSelected,"down")},upClick:function(){console.log("上");var e=this.results.length;this.listSelected<=0?this.listSelected=e-1:this.listSelected<e?this.listSelected--:this.listSelected=e-1,this.resValue(this.listSelected),this.autoScroll(this.listSelected,"up")},resValue:function(e){this.value=this.results[e].name},invoiceDropdownClick:function(e){console.log("回车",e)},outsideClose:function(){this.isFocussed=!1},blur:function(){this.$emit("blur",this.value),this.rememberCurrentLi("blur")},focus:function(){this.$emit("focus",this.value),this.isFocussed=!0,null!=this.results&&(this.isShowContent=this.showFocusResults),this.rememberCurrentLi("focus"),console.log("this.isShowContent",this.isShowContent)},search:function(){var e=this;console.log("点击了搜索"),this.debounce((function(){0!=e.value.length&&e.request(e.source+e.value)}),1e3)},clear:function(){this.value="",this.results=null,this.isShowClear=!1},clearState:function(){this.isShowClear=0!=this.value.length},operate:function(e){console.log("点击了操作"),this.$emit("select",e),this.value=e,this.reset()},debounce:function(e,t){null!==this.fun&&clearTimeout(this.fun),this.fun=setTimeout(e,t)},reset:function(){this.isShowContent=!1},request:function(e){var t=this;console.log("请求方式",this.method);var o=fetch(e,{method:this.method});return this.loading=!0,o.then((function(e){if(console.log("请求的初始结果",e),e.ok){t.error=null;var o=e.json();return console.log("第一步处理的结果：",o),o}throw new Error("网络响应不正常")})).then((function(e){console.log("第二部处理",e),t.results=t.setResults(e),console.log("返回的结果是",t.results),t.isNoResult=!1,t.isShowContent=!0,t.loading=!1})).catch((function(e){console.log("错误了"),t.isShowContent=!1,t.isNoResult=!0,t.error=e.message,t.loading=!1}))},getHeaders:function(){var e={Accept:"application/json, text/plain, */*"};return e},setResults:function setResults(response){console.log("处理结果",response),console.log("this.resultsProperty",this.resultsProperty),console.log("处理结果",response[this.resultsProperty]);var temp=eval("response."+this.resultsProperty);return console.log("object",temp),this.resultsProperty&&temp?temp:[]}},directives:{clickoutside:{bind:function(e,t){function o(o){if(e.contains(o.target))return!1;t.expression&&t.value(o)}function n(e){27==e.keyCode&&t.expression&&t.value(e)}e.__vueClickOutSize__=o,e.__vueKeyup__=n,document.addEventListener("keyup",n),document.addEventListener("click",o)},unbind:function(e){document.removeEventListener("click",e.__vueClickOutSize__),delete e.__vueClickOutSize__,document.removeEventListener("keyup",e.__vueKeyup__),delete e.__vueKeyup__}}}}},"227d":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,"::-webkit-scrollbar{width:8px;height:8px;background-color:#f5f5f5;border-radius:10px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 3px rgba(0,0,0,.1);background-color:#f5f5f5;border-radius:10px}::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 3px rgba(0,0,0,.1);background-color:hsla(0,0%,77.6%,.3)}::-webkit-scrollbar-thumb,::-webkit-scrollbar-thumb:hover{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}::-webkit-scrollbar-thumb:hover{background-color:#c6c6c6}",""]),e.exports=t},2517:function(e,t,o){var n=o("24fb"),r=o("9fac");t=n(!1),t.i(r),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#app #nav{padding:30px}#app #nav a{font-weight:700;color:#2c3e50}#app #nav a.router-link-exact-active{color:#42b983}#app .app-wrap{max-width:1012px;margin:0 auto;padding:0 15px}#app .app-wrap table{margin:0 auto;border-spacing:0;border-collapse:collapse}#app .app-wrap pre{text-align:left}#app .app-wrap h3{margin:40px 0 0}#app .app-wrap ul{list-style-type:none;padding:0}#app .app-wrap a{color:#42b983}",""]),e.exports=t},"4d1c":function(e,t,o){"use strict";var n=o("c48d"),r=o.n(n);r.a},"54b3":function(e,t,o){e.exports=o.p+"img/logo.04094c98.png"},8085:function(e,t,o){var n=o("afca");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("560994b1",n,!0,{sourceMap:!1,shadowMode:!1})},"82a9":function(e,t){e.exports='# vue-auto-complete\n\n## 项目安装\n\n```\nyarn add vue-auto-complete\n```\n\n或者\n\n```\nnpm install vue-auto-complete --save\n```\n\n> 温馨提示：暂时未上传到 npm，请 github 下载使用！\n\n## 项目使用\n\nmain.js\n\n```js\nimport AutoComplete from \'vue-auto-complete\';\nVue.use(AutoComplete);\n```\n\n### 网络资源\n\n```xml\n<AutoComplete\n  inputClass="test-class"\n  method="get"\n  placeholder="请输入搜索内容"\n  initial-value="海阔天空"\n  :maxlength="5"\n  :showNoResults="false"\n  :show-focus-results="false"\n  results-property="result.songs"\n  results-display="name"\n  source="http://musicapi.leanapp.cn/search?keywords="\n  @blur="onBlur"\n  @focus="onFocus"\n  @change="onChange"\n  @select="onSelect"\n>\n  <span slot="noResults">没有找到</span>\n</AutoComplete>\n```\n\n### 自定函数\n\n```xml\n<AutoComplete\n  inputClass="test-class"\n  method="get"\n  placeholder="请输入搜索内容"\n  :maxlength="5"\n  :showNoResults="false"\n  results-property="result.songs"\n  results-display="name"\n  :source="handleSearch"\n  :clear-button-icon="true"\n>\n  <span slot="noResults">没有找到</span>\n</AutoComplete>\n```\n\n```js\nexport default {\n  name: \'complete\',\n  methods: {\n    handleSearch(value) {\n      let result;\n      if (!value || value.indexOf(\'@\') >= 0) {\n        result = [];\n      } else {\n        result = [\'gmail.com\', \'163.com\', \'qq.com\'].map(domain => `${value}@${domain}`);\n      }\n      console.log(\'前台处理结果\', result);\n      return result;\n    },\n    onBlur() {\n      console.log(\'失去了焦点\');\n    },\n    onFocus() {\n      console.log(\'获取了焦点\');\n    },\n    onChange() {\n      console.log(\'内容改变了\');\n    },\n    onSelect() {\n      console.log(\'选中时调用\');\n    }\n  }\n};\n```\n\n## 可用道具\n\n| 道具             | 类型              | 是否必须 | 默认值     | 描述                                 |\n| :--------------- | :---------------- | :------- | :--------- | :----------------------------------- |\n| source           | `String|Function` | true     |            | 数据资源                             |\n| method           | `String`          | false    | \'get\'      | 请求方式                             |\n| initialValue     | `String|Number`   | false    |            | 初始值                               |\n| resultsProperty  | `String`          |          | \'name\'     | 输入框默认提示                       |\n| resultsDisplay   | `String|Function` |          | \'name\'     | 输入框默认提示                       |\n| placeholder      | `String`          | false    | \'搜索内容\' | 文本框输入提示                       |\n| maxlength        | `Number`          | false    |            | 输入框默认提示                       |\n| showNoResults    | `Boolean`         | false    | true       | 输入框默认提示                       |\n| showFocusResults | `Boolean`         | false    | true       | 文本框获取焦点后是否显示上次搜索结果 |\n| inputClass       | `String|Object`   | false    |            | 输入框默认提示                       |\n| isUpperLower     | `Boolean`         | false    |            | 输入框默认提示                       |\n| clearButtonIcon  | `Boolean`         | false    | false      | 输入框默认提示                       |\n\n## 可用事件\n\n| 事件   | 输出   | 描述                   |\n| :----- | :----- | :--------------------- |\n| blur   | Object | 失去焦点时的回调       |\n| focus  | Object | 获得焦点时的回调       |\n| change | Object | 输入框数据变化时的回调 |\n| select | Object | 选择下拉列表后的回调   |\n\n## 可用插槽\n\n| 插槽      | 描述           |\n| :-------- | :------------- |\n| noResults | 没有搜索结果时 |\n\n## 项目源码\n\n请浏览[vue-auto-complete](https://github.com/nuochong/vue-auto-complete/)\n'},"9fac":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,":root{--side-bar-bg-color:#fff;--control-text-color:#777}html{font-size:14px}body{font-family:Source Sans Pro,Helvetica Neue,Arial,sans-serif!important;color:#34495e;-webkit-font-smoothing:antialiased;line-height:1.6rem;letter-spacing:0;margin:0;overflow-x:hidden}#write{max-width:860px;margin:0 auto;padding:20px 30px 100px}#write p{line-height:1.6rem;word-spacing:.05rem}#write ol li{text-indent:.5rem}#write>ol:first-child,#write>ul:first-child{margin-top:30px}body>:first-child{margin-top:0!important}body>:last-child{margin-bottom:0!important}a{color:#42b983;font-weight:600;padding:0 2px;text-decoration:none}h1,h2,h3,h4,h5,h6{position:relative;margin-top:1rem;margin-bottom:1rem;font-weight:700;line-height:1.4;cursor:text}h1:hover a.anchor,h2:hover a.anchor,h3:hover a.anchor,h4:hover a.anchor,h5:hover a.anchor,h6:hover a.anchor{text-decoration:none}h1 code,h1 tt,h2 code,h2 tt,h3 code,h3 tt,h4 code,h4 tt,h5 code,h5 tt,h6 code,h6 tt{font-size:inherit!important}h2 a,h3 a{color:#34495e}h1{padding-bottom:.4rem;font-size:2.2rem;line-height:1.3}h2{font-size:1.75rem;line-height:1.225;margin:35px 0 15px;padding-bottom:.5em;border-bottom:1px solid #ddd}h3{font-size:1.4rem;line-height:1.43;margin:20px 0 7px}h4{font-size:1.2rem}h5,h6{font-size:1rem}h6{color:#777}blockquote,dl,ol,p,table,ul{margin:.8em 0}li>ol,li>ul{margin:0 0}hr{height:2px;padding:0;margin:16px 0;background-color:#e7e7e7;border:0 none;overflow:hidden;-webkit-box-sizing:content-box;box-sizing:content-box}a:first-child h1,a:first-child h2,a:first-child h3,a:first-child h4,a:first-child h5,a:first-child h6,body>h1:first-child,body>h1:first-child+h2,body>h2:first-child,body>h3:first-child,body>h4:first-child,body>h5:first-child,body>h6:first-child{margin-top:0;padding-top:0}h1 p,h2 p,h3 p,h4 p,h5 p,h6 p{margin-top:0}li p.first{display:inline-block}ol,ul{padding-left:30px}ol:first-child,ul:first-child{margin-top:0}ol:last-child,ul:last-child{margin-bottom:0}blockquote{border-left:4px solid #42b983;padding:10px 15px;color:#777;background-color:rgba(66,185,131,.1)}table{padding:0;word-break:normal}table tr{border-top:1px solid #dfe2e5;margin:0;padding:0}table tr:nth-child(2n),thead{background-color:#fafafa}table tr th{font-weight:700;border:1px solid #dfe2e5;border-bottom:0}table tr td,table tr th{text-align:left;margin:0;padding:6px 13px}table tr td{border:1px solid #dfe2e5}table tr td:first-child,table tr th:first-child{margin-top:0}table tr td:last-child,table tr th:last-child{margin-bottom:0}#write strong{padding:0 1px}#write em{padding:0 5px 0 2px}#write table thead th{background-color:#f2f2f2}#write .CodeMirror-gutters{border-right:none}#write .md-fences{border:1px solid #f4f4f4;-webkit-font-smoothing:initial;margin:.8rem 0!important;padding:.3rem 0!important;line-height:1.43rem;background-color:#f8f8f8!important;border-radius:2px;font-family:Roboto Mono,Source Sans Pro,Monaco,courier,monospace!important;font-size:.85rem;word-wrap:normal}#write .CodeMirror-wrap .CodeMirror-code pre{padding-left:12px}#write code,tt{margin:0 2px;padding:2px 4px;border-radius:2px;font-family:Roboto Mono,Source Sans Pro,Monaco,courier,monospace!important;font-size:.92rem}#write .md-footnote,#write code,tt{color:#e96900;background-color:#f8f8f8}#write mark{background-color:#ebffeb;border-radius:2px;padding:2px 4px;margin:0 2px;color:#222;font-weight:500}#write del{padding:1px 2px}.cm-s-inner.cm-link,.cm-s-inner .cm-link,.cm-s-inner .cm-string{color:#22a2c9}.md-task-list-item>input{margin-left:-1.3em}@media print{html{font-size:13px}pre,table{page-break-inside:avoid}pre{word-wrap:break-word}}.md-fences{background-color:#f8f8f8}#write pre.md-meta-block{padding:1rem;font-size:85%;line-height:1.45;background-color:#f7f7f7;border:0;border-radius:3px;color:#777;margin-top:0!important}.mathjax-block>.code-tooltip{bottom:.375rem}#write>h3.md-focus:before{left:-1.5625rem;top:.375rem}#write>h4.md-focus:before,#write>h5.md-focus:before,#write>h6.md-focus:before{left:-1.5625rem;top:.285714286rem}.md-image>.md-meta{border-radius:3px;font-family:Consolas,Liberation Mono,Courier,monospace;padding:2px 0 0 4px;font-size:.9em;color:inherit}.md-tag{color:inherit}.md-toc{margin-top:20px;padding-bottom:20px}.sidebar-tabs{border-bottom:none}#typora-quick-open{border:1px solid #ddd;background-color:#f8f8f8}#typora-quick-open-item{background-color:#fafafa;border-color:#fefefe #e5e5e5 #e5e5e5 #eee;border-style:solid;border-width:1px}#md-notification:before{top:10px}.on-focus-mode blockquote{border-left-color:rgba(85,85,85,.12)}.context-menu,.megamenu-content,footer,header{font-family:Segoe UI,Arial,sans-serif}.file-node-content:hover .file-node-icon,.file-node-content:hover .file-node-open-state{visibility:visible}.mac-seamless-mode #typora-sidebar{background-color:var(--side-bar-bg-color)}.md-lang{color:#b4654d}.html-for-mac .context-menu{--item-hover-bg-color:#e6f0fe}",""]),e.exports=t},afca:function(e,t,o){var n=o("24fb"),r=o("227d");t=n(!1),t.i(r),t.push([e.i,".auto-complete-container .auto-complete-wrap[data-v-9f6ae142]{position:relative;display:inline-block}.auto-complete-container .auto-complete-wrap .auto-complete-input[data-v-9f6ae142]{height:32px;line-height:1.5;background:transparent;border-width:1px;-webkit-transition:all .3s cubic-bezier(.645,.045,.355,1),height 0s;transition:all .3s cubic-bezier(.645,.045,.355,1),height 0s;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;display:inline-block;padding:4px 11px;color:rgba(0,0,0,.65);border:1px solid #d9d9d9}.auto-complete-container .auto-complete-wrap .auto-complete-input[data-v-9f6ae142]:hover{border-color:#40a9ff;border-right-width:1px!important}.auto-complete-container .auto-complete-wrap .auto-complete-input[data-v-9f6ae142]:focus{border-color:#40a9ff;border-right-width:1px!important;outline:0;-webkit-box-shadow:0 0 0 2px rgba(24,144,255,.2);box-shadow:0 0 0 2px rgba(24,144,255,.2)}.auto-complete-container .auto-complete-wrap .auto-complete-input-padding[data-v-9f6ae142]{padding-right:30px}.auto-complete-container .auto-complete-wrap .auto-complete-btn[data-v-9f6ae142]{position:absolute;right:10px;top:8px;cursor:pointer}.auto-complete-container .auto-complete-wrap .auto-complete-btn .anticon-spin[data-v-9f6ae142]{display:inline-block;-webkit-animation:loadingCircle-data-v-9f6ae142 1s linear infinite;animation:loadingCircle-data-v-9f6ae142 1s linear infinite}.auto-complete-container .auto-complete-wrap .auto-complete-clear[data-v-9f6ae142]{color:grey}.auto-complete-container .auto-complete-wrap ul[data-v-9f6ae142]{max-height:256px;overflow-y:auto;margin:0;padding:0;color:rgba(0,0,0,.65);line-height:1.5715;list-style:none;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;background-color:#fff;border-radius:4px;outline:none;-webkit-box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);margin-top:3px;width:100%;z-index:10}.auto-complete-container .auto-complete-wrap ul[data-v-9f6ae142]::-webkit-scrollbar{display:none}.auto-complete-container .auto-complete-wrap ul[data-v-9f6ae142]:hover::-webkit-scrollbar{display:block}.auto-complete-container .auto-complete-wrap ul li[data-v-9f6ae142]{position:relative;display:block;min-height:32px;padding:5px 12px;color:rgba(0,0,0,.65);font-weight:400;font-size:14px;line-height:32px;cursor:pointer;-webkit-transition:background .3s ease;transition:background .3s ease;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.auto-complete-container .auto-complete-wrap ul li[data-v-9f6ae142]:hover{background-color:#f5f5f5}.auto-complete-container .auto-complete-wrap ul li.active[data-v-9f6ae142]{color:rgba(0,0,0,.65);background-color:#e6f7ff}@-webkit-keyframes loadingCircle-data-v-9f6ae142{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingCircle-data-v-9f6ae142{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),e.exports=t},c31f:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("项目示例")]),e._v(" | "),n("router-link",{attrs:{to:"/documentation"}},[e._v("项目文档")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("关于我们")])],1),n("img",{attrs:{alt:"Vue logo",src:o("54b3")}}),n("div",{staticClass:"app-wrap"},[n("router-view")],1)])},i=[],a=(o("4d1c"),o("2877")),l={},s=Object(a["a"])(l,r,i,!1,null,null,null),c=s.exports,u=(o("d3b7"),o("8c4f")),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h1",[e._v("网络资源")]),o("AutoComplete",{attrs:{"results-property":"result.songs","results-display":"name",source:"https://musicapi.leanapp.cn/search?keywords="}},[o("span",{attrs:{slot:"noResults"},slot:"noResults"},[e._v("没有找到")])]),o("h1",[e._v("自定函数")]),o("AutoComplete",{attrs:{inputClass:"test-class",method:"get",placeholder:"请输入搜索内容",maxlength:5,showNoResults:!1,"results-property":"result.songs","results-display":"name",source:e.handleSearch,"clear-button-icon":!0}},[o("span",{attrs:{slot:"noResults"},slot:"noResults"},[e._v("没有找到")])])],1)},d=[],h=(o("99af"),o("c975"),o("d81d"),{name:"complete",components:{},methods:{handleSearch:function(e){var t;return t=!e||e.indexOf("@")>=0?[]:["gmail.com","163.com","qq.com"].map((function(t){return"".concat(e,"@").concat(t)})),console.log("前台处理结果",t),t},onBlur:function(){console.log("失去了焦点")},onFocus:function(){console.log("获取了焦点")},onChange:function(){console.log("内容改变了")},onSelect:function(){console.log("选中时调用")}}}),f=h,m=Object(a["a"])(f,p,d,!1,null,null,null),b=m.exports,g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("vue-markdown",[e._v(" "+e._s(e.about)+" ")])],1)},_=[],v=(o("4160"),o("159b"),o("1487")),w=o.n(v),x=o("9ce6"),k=o.n(x),y=o("82a9"),C=o.n(y),S=(o("2c43"),{name:"Home",components:{VueMarkdown:k.a},data:function(){return{about:C.a}},mounted:function(){this.highlightCode()},methods:{highlightCode:function(){var e=document.querySelectorAll("pre");e.forEach((function(e){w.a.highlightBlock(e)}))}}}),E=S,O=Object(a["a"])(E,g,_,!1,null,null,null),M=O.exports;n["a"].use(u["a"]);var P=[{path:"/",name:"Example",component:b},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"c2a7"))}},{path:"/documentation",name:"Documentation",component:M}],j=new u["a"]({mode:"history",base:"/vue-auto-complete/",routes:P}),D=j,R=o("2f62");n["a"].use(R["a"]);var T=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=(o("b0c0"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"auto-complete-container"},[o("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.outsideClose,expression:"outsideClose"}],staticClass:"auto-complete-wrap"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.value,expression:"value",modifiers:{trim:!0}}],staticClass:"auto-complete-input auto-complete-input-padding",class:e.inputClass,attrs:{placeholder:e.placeholder,maxlength:e.maxlength,type:"text",autocomplete:"off"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value.trim())},e.initSearch],blur:[e.blur,function(t){return e.$forceUpdate()}],focus:e.focus,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.invoiceDropdownClick(e.listSelectedName)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.upClick(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.downClick(t)}]}}),e.clearButtonIcon||e.loading?e._e():o("div",{staticClass:"auto-complete-btn",on:{click:e.search}},[o("i",{staticClass:"anticon anticon-search",attrs:{slot:"suffix","aria-label":"icon: search"},slot:"suffix"},[o("svg",{attrs:{viewBox:"64 64 896 896","data-icon":"search",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"}},[o("path",{attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}})])])]),e.loading?o("span",{staticClass:"auto-complete-btn"},[o("span",{staticClass:"anticon anticon-loading",attrs:{role:"img","aria-label":"loading"}},[o("svg",{staticClass:"anticon-spin",attrs:{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"loading",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}})])])]):e._e(),e.isShowClear&&e.clearButtonIcon?o("span",{staticClass:"auto-complete-btn auto-complete-clear",on:{click:e.clear}},[o("span",{staticClass:"anticon anticon-close-circle",attrs:{role:"img","aria-label":"close-circle"}},[o("svg",{attrs:{viewBox:"64 64 896 896",focusable:"false","data-icon":"close-circle",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}})])])]):e._e(),e.isShowContent&&e.isFocussed?o("ul",{ref:"ul-container"},e._l(e.results,(function(t,n){return o("li",{key:n,ref:"li-"+n,refInFor:!0,staticClass:"list-li",class:{active:e.listSelected==n},attrs:{title:e.liContent(t)},on:{click:function(o){e.operate(e.liContent(t))}}},[e._v(" "+e._s(e.liContent(t))+" ")])})),0):e._e(),e.isNoResult&&e.showNoResults&&e.isFocussed?o("ul",[o("li",[e._t("noResults",[e._v("暂无搜索结果")])],2)]):e._e()])])}),A=[],B=o("1eae"),z=B["a"],L=(o("19d1"),Object(a["a"])(z,q,A,!1,null,"9f6ae142",null)),U=L.exports,I={install:function(e,t){console.log("options",t),e.prototype.$msg="Hello I am test message",e.component(U.name,U)}},$=I;n["a"].use($),n["a"].config.productionTip=!1,new n["a"]({router:D,store:T,render:function(e){return e(c)}}).$mount("#app")},c48d:function(e,t,o){var n=o("2517");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("e329d56e",n,!0,{sourceMap:!1,shadowMode:!1})}});