(function(t){function n(n){for(var e,r,c=n[0],s=n[1],l=n[2],h=0,u=[];h<c.length;h++)r=c[h],o[r]&&u.push(o[r][0]),o[r]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);g&&g(n);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,n=0;n<i.length;n++){for(var a=i[n],e=!0,c=1;c<a.length;c++){var s=a[c];0!==o[s]&&(e=!1)}e&&(i.splice(n--,1),t=r(r.s=a[0]))}return t}var e={},o={app:0},i=[];function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,n,a){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(a,e,function(n){return t[n]}.bind(null,e));return a},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var g=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"48d8":function(t,n,a){"use strict";var e=a("6a54"),o=a.n(e);o.a},"56d7":function(t,n,a){"use strict";a.r(n);a("cadf"),a("551c"),a("f751"),a("097d");var e=a("2b0e"),o=a("bb71");a("da64");e["default"].use(o["a"],{iconfont:"md"});var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-app",[a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[a("v-list",{staticClass:"pa-1"},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})]),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Ajay Phatak")])],1)],1)],1),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),t._l(t.dances,function(n){return a("v-list-tile",{key:n.title,attrs:{to:n.path}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(n.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(n.title))])],1)],1)})],2)],1),a("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[a("v-toolbar-side-icon",{on:{click:function(n){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.currentDance))]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("more_vert")])],1)],1),a("v-content",[a("router-view")],1)],1)},r=[],c={name:"App",components:{},watch:{zoom:function(){this.zoom<.5?this.zoom=.5:this.zoom>1.5&&(this.zoom=1.5)}},data:function(){return{drawer:null,dances:[{title:"Waltz",path:"waltz"},{title:"Tango",path:"tango"},{title:"Viennese Waltz",path:"viennese-waltz"},{title:"Foxtrot",path:"foxtrot"},{title:"Quickstep",path:"quickstep"}],current:0}},computed:{currentFigure:function(){return this.waltz.newcomer.figures.RFChangeStep.title},currentDance:function(){return"Waltz"},currentCount:function(){return 3},currentInstruction:function(){return this.waltz.newcomer.figures.RFChangeStep.steps[0].instructionBoth}}},s=c,l=a("2877"),g=a("6544"),h=a.n(g),u=a("7496"),f=a("8336"),p=a("549c"),m=a("ce7e"),v=a("132d"),d=a("8860"),O=a("ba95"),y=a("40fe"),w=a("c954"),k=a("5d23"),R=a("f774"),T=a("9910"),Y=a("71d9"),b=a("706c"),X=a("2a7f"),F=Object(l["a"])(s,i,r,!1,null,null,null),_=F.exports;h()(F,{VApp:u["a"],VBtn:f["a"],VContent:p["a"],VDivider:m["a"],VIcon:v["a"],VList:d["a"],VListTile:O["a"],VListTileAction:y["a"],VListTileAvatar:w["a"],VListTileContent:k["a"],VListTileTitle:k["b"],VNavigationDrawer:R["a"],VSpacer:T["a"],VToolbar:Y["a"],VToolbarSideIcon:b["a"],VToolbarTitle:X["a"]});var H=a("ce5b"),C=a.n(H),L=a("8c4f"),x=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container fluid pa-0 ma-0"},[a("Player",{attrs:{instruction:t.currentFigure,count:t.currentCount,figure:t.waltz.newcomer.figures.RFChangeStep}}),a("NextPrevFigures",{attrs:{precedingFigures:t.waltz.newcomer.figures,followingFigures:t.waltz.newcomer.figures}}),a("AllFigures",{attrs:{figureList:t.waltz},on:{"change-dance":function(n){t.current++}}})],1)},z=[],S=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"top-controls"},[a("v-btn",{attrs:{icon:""},on:{click:function(n){t.rotation-=45}}},[a("v-icon",[t._v("rotate_left")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(n){t.rotation+=45}}},[a("v-icon",[t._v("rotate_right")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(n){t.zoom-=.1}}},[a("v-icon",[t._v("zoom_out")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(n){t.zoom+=.1}}},[a("v-icon",[t._v("zoom_in")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.setManOn}},[a("v-icon",{attrs:{color:t.lady?"":"blue"}},[t._v("fa-male")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.setLadyOn}},[a("v-icon",{attrs:{color:t.man?"":"red"}},[t._v("fa-female")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.setBothOn}},[a("v-icon",{attrs:{color:t.man&&t.lady?"purple":""}},[t._v("wc")])],1)],1),a("div",{staticClass:"player"},[a("div",{staticClass:"perspective",style:{transform:"rotate("+t.rotation+"deg) scale("+t.zoom+")"}},[a("div",{staticClass:"contents"},[a("div",{staticClass:"footarea ml",style:t.mlStyle},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.man,expression:"man"}],staticClass:"foot man"},[t._v("ml")])]),a("div",{staticClass:"footarea mr",style:t.mrStyle},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.man,expression:"man"}],staticClass:"foot man"},[t._v("mr")])]),a("div",{staticClass:"footarea ll",style:t.llStyle},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.lady,expression:"lady"}],staticClass:"foot lady"},[t._v("ll")])]),a("div",{staticClass:"footarea lr",style:t.lrStyle},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.lady,expression:"lady"}],staticClass:"foot lady"},[t._v("lr")])])])])]),a("div",{staticClass:"controls"},[a("v-slider",{staticClass:"slider",attrs:{ticks:"",max:t.maxStep},model:{value:t.step,callback:function(n){t.step=n},expression:"step"}}),a("div",{staticClass:"instruction"},[a("h5",{staticClass:"headline"},[t._v(t._s(t.instruction))])]),a("div",{staticClass:"seek"},[a("v-btn",{attrs:{icon:"",disabled:t.step<1},on:{click:function(n){t.step--}}},[a("i",{staticClass:"control fas fa-backward"})]),a("v-btn",{attrs:{icon:""}},[a("i",{staticClass:"fas fa-play large",on:{click:function(n){return t.play()}}})]),a("v-btn",{attrs:{icon:"",disabled:t.step>=t.maxStep},on:{click:function(n){t.step++}}},[a("i",{staticClass:"control fas fa-forward"})])],1)],1)])},V=[],B=(a("c5f6"),{name:"Player",props:{head:String,subhead:String,instruction:String,count:Number,figure:Object},watch:{zoom:function(){this.zoom<.5?this.zoom=.5:this.zoom>1.5&&(this.zoom=1.5)}},methods:{setManOn:function(){this.man=!0,this.lady=!1},setLadyOn:function(){this.man=!1,this.lady=!0},setBothOn:function(){this.man=!0,this.lady=!0}},data:function(){return{rotation:0,zoom:1,man:!0,lady:!0,step:0}},computed:{maxStep:function(){return this.figure.steps.length-1},mlStyle:function(){var t=this.figure.steps[this.step].ml,n=void 0!=t.changeX?t.changeX:0,a=void 0!=t.changeY?t.changeY:0,e=void 0!=t.changeRotation?t.changeRotation:0,o=void 0!=t.opacity?t.opacity:1;return{transform:"translate(".concat(n,"px, ").concat(a,"px) rotate(").concat(e,")"),opacity:"".concat(o)}},mrStyle:function(){var t=this.figure.steps[this.step].mr,n=void 0!=t.changeX?t.changeX:0,a=void 0!=t.changeY?t.changeY:0,e=void 0!=t.changeRotation?t.changeRotation:0,o=void 0!=t.opacity?t.opacity:1;return{transform:"translate(".concat(n,"px, ").concat(a,"px) rotate(").concat(e,")"),opacity:"".concat(o)}},llStyle:function(){var t=this.figure.steps[this.step].ll,n=void 0!=t.changeX?t.changeX:0,a=void 0!=t.changeY?t.changeY:0,e=void 0!=t.changeRotation?t.changeRotation:0,o=void 0!=t.opacity?t.opacity:1;return{transform:"translate(".concat(n,"px, ").concat(a,"px) rotate(").concat(e,")"),opacity:"".concat(o)}},lrStyle:function(){var t=this.figure.steps[this.step].lr,n=void 0!=t.changeX?t.changeX:0,a=void 0!=t.changeY?t.changeY:0,e=void 0!=t.changeRotation?t.changeRotation:0,o=void 0!=t.opacity?t.opacity:1;return{transform:"translate(".concat(n,"px, ").concat(a,"px) rotate(").concat(e,")"),opacity:"".concat(o)}}}}),j=B,P=(a("b1ca"),a("ba0d")),M=Object(l["a"])(j,S,V,!1,null,"42a0364f",null),A=M.exports;h()(M,{VBtn:f["a"],VIcon:v["a"],VSlider:P["a"]});var W=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("v-list",{staticClass:"list"},[a("p",{staticClass:"subhead"},[t._v("Precedes")]),t._l(t.precedingFigures,function(n){return a("v-list-tile",{key:n.title,attrs:{avatar:""}},[a("v-list-tile-action",[n.icon?a("v-icon",{attrs:{color:"brown"}},[t._v("star")]):t._e()],1),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(n.title)}})],1)],1)})],2),a("v-list",{staticClass:"list"},[a("p",{staticClass:"subhead"},[t._v("Follows")]),t._l(t.precedingFigures,function(n){return a("v-list-tile",{key:n.title,attrs:{avatar:""}},[a("v-list-tile-action",[n.icon?a("v-icon",{attrs:{color:"brown"}},[t._v("star")]):t._e()],1),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(n.title)}})],1)],1)})],2)],1)},N=[],D={name:"NextPrevFigures",props:{precedingFigures:Array,followingFigures:Array}},I=D,$=(a("48d8"),Object(l["a"])(I,W,N,!1,null,"45ad06c4",null)),E=$.exports;h()($,{VIcon:v["a"],VList:d["a"],VListTile:O["a"],VListTileAction:y["a"],VListTileContent:k["a"],VListTileTitle:k["b"]});var G=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("v-list",[a("p",{staticClass:"subhead"},[t._v("Syllabus")]),t._l(t.figureList,function(n){return a("v-list-group",{key:n.id,attrs:{"prepend-icon":n.action,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(n.level))])],1)],1)]},proxy:!0}],null,!0),model:{value:n.active,callback:function(a){t.$set(n,"active",a)},expression:"item.active"}},t._l(n.figures,function(n){return a("v-list-tile",{key:n.title,on:{click:function(n){return t.$emit("change-dance")}}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(n.title))])],1),a("v-list-tile-action",[a("v-icon",[t._v(t._s(n.action))])],1)],1)}),1)})],2)],1)},J=[],Q={name:"AllFigures",props:{figureList:Object}},q=Q,K=(a("e5c2"),a("56b0")),U=Object(l["a"])(q,G,J,!1,null,"10dbbcea",null),Z=U.exports;h()(U,{VIcon:v["a"],VList:d["a"],VListGroup:K["a"],VListTile:O["a"],VListTileAction:y["a"],VListTileContent:k["a"],VListTileTitle:k["b"]});var tt={name:"App",components:{Player:A,NextPrevFigures:E,AllFigures:Z},data:function(){return{drawer:null,dances:[{title:"Waltz"},{title:"Tango"},{title:"Viennese Waltz"},{title:"Foxtrot"},{title:"Quickstep"}],current:0,items:[{id:1,title:"one",icon:!0},{id:2,title:"two",icon:!0},{id:3,title:"three",icon:!0}],waltz:{newcomer:{level:"Newcomer",figures:{RFChangeStep:{title:"RF Change Step",commenceFacing:135,startFoot:"RFF",endFoot:"LFF",level:"Newcomer",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:1},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:1}},{count:1,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{changeRotation:0,changeOpacity:-.8},mr:{changeY:-80,changeOpacity:.8,footwork:"HT"},ll:{changeY:-80,changeOpacity:.8,footwork:"TH"},lr:{changeOpacity:-.8}},{count:1.5,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{changeX:0,changeY:-80,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:-80,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:null,footwork:null},ll:{changeX:0,changeY:-80,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:null,footwork:null},lr:{changeX:0,changeY:-80,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"TH"}},{count:2,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{changeX:-80,changeY:-80,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:-80,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:0,changeY:-80,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:-80,changeY:-80,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}},{count:3,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{changeX:-80,changeY:-80,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:-80,changeY:-80,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:-80,changeY:-80,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:-80,changeY:-80,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}}]},LFChangeStep:{title:"LF Change Step",commenceFacing:135,startFoot:"LFF",endFoot:"RFF",level:"Newcomer",steps:[{count:0,ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"TH"}},{count:1,ml:{changeX:0,changeY:-20,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},lr:{changeX:0,changeY:-20,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"TH"}},{count:2,ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}},{count:3,ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}}]}}},bronze:{level:"Bronze",figures:{closedImpetus:{title:"Closed Impetus",commenceFacing:135,startFoot:"RFF",endFoot:"LFB",level:"Bronze",steps:[{count:1,ml:{changeX:0,changeY:-80,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},lr:{changeX:0,changeY:-20,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"TH"}},{count:2,ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}},{count:3,ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}}]}}},silver:{level:"Silver",figures:{Wing:{title:"Wing",commenceFacing:135,startFoot:"RFF",endFoot:"LFB",level:"Silver",steps:[{count:1,ml:{changeX:0,changeY:-80,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},lr:{changeX:0,changeY:-20,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"TH"}},{count:2,ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}},{count:3,ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}}]}}},gold:{level:"Gold",figures:{TurningLockToRight:{title:"Turning Lock to Right",commenceFacing:135,startFoot:"RFF",endFoot:"LFB",level:"Gold",steps:[{count:1,ml:{changeX:0,changeY:-80,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:-.8,transformOrigin:"center",transition:null,footwork:null},lr:{changeX:0,changeY:-20,changeRotation:0,changeOpacity:.8,transformOrigin:"center",transition:"all 2s",footwork:"TH"}},{count:2,ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}},{count:3,ml:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},mr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},ll:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"},lr:{changeX:0,changeY:0,changeRotation:0,changeOpacity:0,transformOrigin:"center",transition:"all 2s",footwork:"HT"}}]}}}}}},computed:{currentFigure:function(){return this.waltz.newcomer.figures.RFChangeStep.title},currentDance:function(){return"Waltz"},currentCount:function(){return 3},currentInstruction:function(){return this.waltz.newcomer.figures.RFChangeStep.steps[0].instructionBoth}}},nt=tt,at=Object(l["a"])(nt,x,z,!1,null,"4626110c",null),et=at.exports;e["default"].use(L["a"]),e["default"].use(C.a,{iconfont:"fa"}),e["default"].config.productionTip=!1;var ot=[{path:"/waltz",component:et},{path:"/bar",component:E}],it=new L["a"]({routes:ot});new e["default"]({router:it,render:function(t){return t(_)}}).$mount("#app")},"6a54":function(t,n,a){},"7a17":function(t,n,a){},b1ca:function(t,n,a){"use strict";var e=a("7a17"),o=a.n(e);o.a},e127:function(t,n,a){},e5c2:function(t,n,a){"use strict";var e=a("e127"),o=a.n(e);o.a}});
//# sourceMappingURL=app.8bcfff60.js.map