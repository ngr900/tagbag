(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,g=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&g.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2b63":function(t,e,a){},"372e":function(t,e,a){},"502d":function(t,e,a){"use strict";var n=a("55a3"),o=a.n(n);o.a},"55a3":function(t,e,a){},"56a8":function(t,e,a){"use strict";var n=a("2b63"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("div",{staticClass:"bar"},[a("img",{staticClass:"logo",attrs:{src:"logo.svg",alt:""}}),a("div",{staticClass:"controls"},[a("button",{class:t.deleteEnabled?"toggled":"",on:{click:function(e){t.deleteEnabled=!t.deleteEnabled}}},[t._v(t._s(t.deleteEnabled?"disable deleting":"enable deleting"))]),a("button",{on:{click:t.downloadBackup}},[t._v("backup")])])]),a("div",{staticClass:"main"},[a("CategoryList",{attrs:{categories:t.categories,activeCategory:t.activeCategory,deleteEnabled:t.deleteEnabled},on:{categoryselected:t.setActiveCategory,categorydeleted:t.deleteCategory,newcategory:t.addCategory}}),a("TagList",{attrs:{category:t.activeCategory,bag:t.bag,deleteEnabled:t.deleteEnabled},on:{tagadded:t.addTags,tagdeleted:t.deleteTag,tagaddedtobag:t.addTagToBag}}),a("TagBag",{attrs:{bag:t.bag}})],1)])},r=[],i=(a("7db0"),a("4160"),a("c975"),a("a15b"),a("d81d"),a("a434"),a("b0c0"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("498a"),a("159b"),a("ddb0"),a("2b3d"),a("2909")),s=a("d4ec"),c=a("bee2"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categoryList"},[a("div",{staticClass:"listCreate"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],attrs:{type:"text",placeholder:"Enter category name..."},domProps:{value:t.newCategoryName},on:{keydown:t.keydownHandler,input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}}),a("button",{staticClass:"listButton plus",on:{click:function(e){return t.addNewCategory()}}})]),0!==t.categories.length?a("div",{staticClass:"categories scroll"},t._l(t.categories,(function(e,n){return a("Category",{key:"category-"+n+"-"+e.name,attrs:{category:e,active:t.activeCategory===e,deleteEnabled:t.deleteEnabled},on:{categorydeleted:function(e){return t.$emit("categorydeleted",e)},categoryselected:function(e){return t.categorySelectedHandler(e)}}})})),1):a("div",{staticClass:"placeholder"},[t._v("There are no categories. Create one!")])])},u=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category",class:t.active?"active":"",on:{click:function(e){return t.$emit("categoryselected",t.category)}}},[a("span",{staticClass:"text"},[t._v(t._s(t.category.name))]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.deleteEnabled,expression:"deleteEnabled"}],staticClass:"listButton delete",on:{click:function(e){return t.$emit("categorydeleted",t.category)}}})])},g=[],f={name:"Category",props:["category","active","deleteEnabled"]},v=f,h=(a("c751"),a("2877")),p=Object(h["a"])(v,d,g,!1,null,null,null),y=p.exports,b={name:"CategoryList",props:["categories","activeCategory","deleteEnabled"],components:{Category:y},data:function(){return{newCategoryName:""}},methods:{addNewCategory:function(){var t=this.newCategoryName.trim();this.newCategoryName="",this.$emit("newcategory",t)},categorySelectedHandler:function(t){this.$emit("categoryselected",t)},keydownHandler:function(t){"Enter"===t.key&&this.addNewCategory()}}},m=b,C=(a("56a8"),Object(h["a"])(m,l,u,!1,null,null,null)),T=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tagList"},[a("div",{staticClass:"listCreate"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTagText,expression:"newTagText"}],attrs:{type:"text",placeholder:"Enter tags..."},domProps:{value:t.newTagText},on:{keydown:t.keydownHandler,input:function(e){e.target.composing||(t.newTagText=e.target.value)}}}),a("button",{staticClass:"listButton plus",on:{click:function(e){return t.submitTags()}}})]),void 0!==t.category?a("div",{staticClass:"list scroll"},[0!==t.filteredTags.length?a("div",t._l(t.filteredTags,(function(e,n){return a("Tag",{key:"tag-"+n,attrs:{tag:e,deleteEnabled:t.deleteEnabled},on:{tagaddedtobag:function(a){return t.$emit("tagaddedtobag",e)},tagdeleted:function(e){return t.deleteTag(e)}}})})),1):a("div",{staticClass:"placeholder"},[t._v("There are no "+t._s(t.tagsUsed?"more":"")+" tags in this category")])]):a("div",{staticClass:"placeholder"},[t._v("Select a category...")])])},_=[],O=(a("4de4"),a("b85c")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tag"},[a("span",{staticClass:"text"},[t._v("#"+t._s(t.tag))]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.deleteEnabled,expression:"deleteEnabled"}],staticClass:"listButton delete",on:{click:function(e){return t.$emit("tagdeleted",t.tag)}}}),a("button",{staticClass:"listButton add",on:{click:function(e){return t.$emit("tagaddedtobag",t.tag)}}})])},x=[],E={name:"Tag",props:["tag","deleteEnabled"]},j=E,B=(a("b323"),Object(h["a"])(j,k,x,!1,null,null,null)),N=B.exports;function S(t){var e=t.split(" ");return e.map((function(t){var e=t.split("");return e.filter((function(t){return"#"!==t})).join("")}))}var $={name:"TagList",props:["category","bag","deleteEnabled"],components:{Tag:N},data:function(){return{newTagText:""}},computed:{filteredTags:function(){var t=this;return this.category.tags.filter((function(e){return-1===t.bag.indexOf(e)}))},tagsUsed:function(){var t,e=Object(O["a"])(this.bag);try{for(e.s();!(t=e.n()).done;){var a=t.value;if(this.category.has(a))return!0}}catch(n){e.e(n)}finally{e.f()}}},methods:{keydownHandler:function(){"Enter"===event.key&&this.submitTags()},submitTags:function(){var t=this.newTagText;this.newTagText="",this.$emit("tagadded",{tags:S(t),category:this.category})},deleteTag:function(t){this.$emit("tagdeleted",{tag:t,category:this.category})}}},A=$,L=(a("502d"),Object(h["a"])(A,w,_,!1,null,null,null)),P=L.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tagBag"},[a("div",{staticClass:"controls"},[a("button",{staticClass:"copy",attrs:{disabled:!t.hasTags},on:{click:function(e){return t.copyToClipboard()}}},[t._m(0)])]),t.hasTags?a("div",{staticClass:"tags"},t._l(t.bag,(function(e,n){return a("div",{key:"$tag-"+n,staticClass:"tagInBag"},[a("button",{staticClass:"remove",on:{click:function(a){return t.removeTagFromBag(e)}}}),a("span",{staticClass:"text"},[t._v("#"+t._s(e))])])})),0):a("div",{staticClass:"placeholder"},[t._v("No tags have been selected")])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"content"},[a("span",{staticClass:"icon"}),a("span",{staticClass:"text"},[t._v("Copy To Clipboard")])])}];function D(t){console.log("copying ".concat(t));var e=document.createElement("input");e.type="text",e.value=t,e.style="position:fixed;top:-1000px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}var I={name:"TagBag",props:["bag"],computed:{hasTags:function(){return 0!==this.bag.length}},methods:{removeTagFromBag:function(t){this.bag.splice(this.bag.indexOf(t),1)},copyToClipboard:function(){var t=this.bag.map((function(t){return"#".concat(t)})).join(" ");D(t)}}},M=I,R=(a("b1a6"),Object(h["a"])(M,H,J,!1,null,null,null)),U=R.exports,F="TagBagAppuserData",G=function(){function t(e){Object(s["a"])(this,t),this.tags=[],this.name=e}return Object(c["a"])(t,[{key:"copy",value:function(){return{name:this.name,tags:Object(i["a"])(this.tags)}}},{key:"add",value:function(e){e=t._cleanTag(e),this.has(e)||this.tags.push(e)}},{key:"has",value:function(t){return-1!==this._indexOf(t)}},{key:"delete",value:function(t){this.has(t)&&this.tags.splice(this._indexOf(t),1)}},{key:"_indexOf",value:function(t){return this.tags.indexOf(t)}}],[{key:"_cleanTag",value:function(t){return t=t.trim(),"#"===t.charAt(0)?t.substring(1):t}}]),t}();function K(){return new Date(Date.now()).toLocaleString().split(",")[0].split("/").reverse().join("-")}function Y(t){var e=document.createElement("a"),a=new Blob([t],{type:"text/plain"});e.href=URL.createObjectURL(a),e.download="Tagbag-backup-".concat(K(),".json"),e.click()}var q={name:"App",components:{CategoryList:T,TagList:P,TagBag:U},data:function(){return{categories:[],bag:[],activeCategory:void 0,deleteEnabled:!1,loaded:!1}},computed:{},methods:{downloadBackup:function(){Y(JSON.stringify(this.copy()))},addTagToBag:function(t){-1===this.bag.indexOf(t)&&this.bag.push(t)},addTags:function(t){var e=t.tags,a=t.category;e.forEach((function(t){return a.add(t)})),this.save()},deleteTag:function(t){var e=t.tag,a=t.category;a.delete(e),this.save()},load:function(){var t=this,e=localStorage.getItem(F);e?(e=JSON.parse(e),e.forEach((function(e){var a=t.addCategory(e.name);e.tags.forEach((function(t){return a.add(t)}))})),this.setActiveCategory(this.categories[0]),this.loaded=!0):this.loaded=!0},save:function(){this.loaded&&(localStorage.setItem(F,JSON.stringify(this.copy())),console.log("saved"))},copy:function(){return this.categories.map((function(t){return t.copy()}))},hasCategory:function(t){return void 0!==this.categories.find((function(e){return e.name===t}))},addCategory:function(t){if(!this.hasCategory(t)){var e=new G(t);return this.categories.push(e),this.save(),this.setActiveCategory(e),e}},deleteCategory:function(t){var e=this.categories.indexOf(t);this.categories.splice(e,1);var a=0;a=e<this.categories.length?e:e-1,this.setActiveCategory(this.categories[a]),this.save()},setActiveCategory:function(t){this.activeCategory=t}},created:function(){this.load()}},z=q,Q=(a("5c0b"),Object(h["a"])(z,o,r,!1,null,null,null)),V=Q.exports,W=(a("0481"),a("4069"),a("ade3")),X=a("262e"),Z=a("2caf"),tt=a("9072");var et=function(t){Object(X["a"])(a,t);var e=Object(Z["a"])(a);function a(t){var n;return Object(s["a"])(this,a),n=e.call(this,t),n.name="TagBagError",n}return a}(Object(tt["a"])(Error)),at=function(){function t(){Object(s["a"])(this,t),this.categories=[],this.load()}return Object(c["a"])(t,[{key:"dump",value:function(){this.categories.forEach((function(t){console.log("Category: ".concat(t.name)),console.table(t.tags)}))}},{key:"save",value:function(){localStorage.setItem(t.STORAGE_KEY,JSON.stringify(this.copy())),console.log("Successfully saved user data")}},{key:"copy",value:function(){return this.categories.map((function(t){return t.copy()}))}},{key:"get",value:function(t){return this.categories[t]}},{key:"has",value:function(t){return void 0!==this.categories.find((function(e){return e.name===t}))}},{key:"add",value:function(t){if(this.has(t))throw new et('Category "'.concat(t,'" already exists'));var e=new nt(t);return this.categories.push(e),e}},{key:"tags",get:function(){return this.categories.map((function(t){return t.tags})).flat()}}]),t}();Object(W["a"])(at,"STORAGE_KEY","TagBagAppuserData");var nt=function(){function t(e){Object(s["a"])(this,t),this.tags=[],this.name=e}return Object(c["a"])(t,[{key:"copy",value:function(){return{name:this.name,tags:Object(i["a"])(this.tags)}}},{key:"add",value:function(e){e=t._cleanTag(e),this.has(e)||this.tags.push(e)}},{key:"has",value:function(t){return-1!==this._indexOf(t)}},{key:"remove",value:function(t){this.has(t)&&this.tags.splice(this._indexOf(t),1)}},{key:"_indexOf",value:function(t){return this.tags.indexOf(t)}}],[{key:"_cleanTag",value:function(t){return t=t.trim(),"#"===t.charAt(0)?t.substring(1):t}}]),t}();n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(V)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},"5cf7":function(t,e,a){},"8ad7":function(t,e,a){},"9c0c":function(t,e,a){},b1a6:function(t,e,a){"use strict";var n=a("372e"),o=a.n(n);o.a},b323:function(t,e,a){"use strict";var n=a("5cf7"),o=a.n(n);o.a},c751:function(t,e,a){"use strict";var n=a("8ad7"),o=a.n(n);o.a}});
//# sourceMappingURL=app.629bd571.js.map