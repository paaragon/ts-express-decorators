(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{314:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"registerinterceptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#registerinterceptor","aria-hidden":"true"}},[t._v("#")]),t._v(" registerInterceptor "),n("Badge",{attrs:{text:"Function",type:"function"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[t._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { registerInterceptor } "),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),n("tr",[n("th",[t._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v5.2.2/packages/common/src/interceptors/registries/InterceptorRegistries.ts#L0-L0"}},[t._v("/packages/common/src/interceptors/registries/InterceptorRegistries.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",[n("code",{staticClass:"typescript-lang "},[n("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" registerInterceptor"),n("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),n("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("provider"),n("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("any")]),n("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" instance?"),n("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("any")]),n("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" =>"),n("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("void")]),n("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{pre:!0},[n("p",[t._v("Add a new interceptor in the "),n("code",[t._v("ProviderRegistry")]),t._v(". This interceptor will be built when "),n("code",[t._v("InjectorService")]),t._v(" will be loaded.")]),t._v(" "),n("h4",{pre:!0,attrs:{id:"example"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),n("div",{pre:!0,attrs:{class:"language-typescript extra-class"}},[n("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("registerInterceptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" InjectorService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/common"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyInterceptor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("aroundInvoke")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerInterceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("provide"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyInterceptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerInterceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyInterceptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" injector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectorService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninjector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myInterceptor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" injector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyInterceptor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyInterceptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyInterceptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("aroundInvoke")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="registerInterceptor.md";s.default=e.exports}}]);