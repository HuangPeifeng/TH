(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{X7ZN:function(n,o,t){"use strict";t.r(o);var l=t("8Y7J");class e{}var c=t("pMnS"),s=t("SVse");class a{constructor(){this.menu=[{name:"\u5168\u90e8"},{name:"\u9ad8\u97f3"},{name:"\u4e2d\u97f3"},{name:"\u6b21\u4e2d\u97f3"}],this.list=[{category:"\u9ad8\u97f3",fileName:"sax-high1.jpg"},{category:"\u9ad8\u97f3",fileName:"sax-high2.jpg"},{category:"\u9ad8\u97f3",fileName:"sax-high3.jpg"},{category:"\u9ad8\u97f3",fileName:"sax-high4.jpg"},{category:"\u9ad8\u97f3",fileName:"sax-high5.jpg"},{category:"\u4e2d\u97f3",fileName:"sax-mid1.jpg"},{category:"\u4e2d\u97f3",fileName:"sax-mid2.jpg"},{category:"\u4e2d\u97f3",fileName:"sax-mid3.jpg"},{category:"\u4e2d\u97f3",fileName:"sax-mid4.jpg"},{category:"\u4e2d\u97f3",fileName:"sax-mid5.jpg"},{category:"\u4e2d\u97f3",fileName:"sax-mid6.jpg"}],this.subList=this.list,this.selectedIndex=0,this.isPopupOpen=!1,this.selected=null}ngOnInit(){}changeCategory(n,o){switch(this.selectedIndex=o,n.name){case"\u9ad8\u97f3":this.subList=this.list.filter(n=>"\u9ad8\u97f3"===n.category);break;case"\u4e2d\u97f3":this.subList=this.list.filter(n=>"\u4e2d\u97f3"===n.category);break;case"\u6b21\u4e2d\u97f3":this.subList=this.list.filter(n=>"\u6b21\u4e2d\u97f3"===n.category);break;default:this.subList=this.list}}openPopup(n){this.isPopupOpen=!0,this.selected=n}closePopup(){this.isPopupOpen=!1,this.selected=null}}var i=l.mb({encapsulation:0,styles:[[".saxophones-bg[_ngcontent-%COMP%]{width:calc(100% - 250px);height:100%;position:fixed;color:#fff;background-image:url(/assets/images/sax/sax-high4.jpg);background-repeat:no-repeat;background-size:cover;background-position:center}.saxophones-bg[_ngcontent-%COMP%]   .block-bg[_ngcontent-%COMP%]{width:calc(100% - 250px);height:100%;position:fixed;background-image:url(/assets/images/img-cover.png);background-repeat:repeat;background-position:center}@media (max-width:991px){.saxophones-bg[_ngcontent-%COMP%], .saxophones-bg[_ngcontent-%COMP%]   .block-bg[_ngcontent-%COMP%]{width:100%}}.saxophones-layout[_ngcontent-%COMP%]{position:absolute;color:#fff;width:calc(100% - 350px);height:calc(100% - 100px);padding:50px;overflow-y:auto}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-title[_ngcontent-%COMP%]{font-size:5rem;margin-bottom:30px}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]{display:flex;width:100%}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{width:20%;padding:10px}@media (max-width:576px){.saxophones-layout[_ngcontent-%COMP%]   .saxophones-title[_ngcontent-%COMP%]{font-size:3rem}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]{flex-direction:column}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{width:100%}}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{border:1px solid #fff;margin-bottom:10px;line-height:2.5;text-align:center;border-radius:5px;cursor:pointer;transition:.3s ease-in-out}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:3px solid #ccc}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:80%;padding:10px;-moz-column-gap:3rem;column-gap:3rem;-moz-column-count:3;column-count:3}@media (max-width:991px){.saxophones-layout[_ngcontent-%COMP%]{width:calc(100% - 100px)}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{-moz-column-count:2;column-count:2}}@media (max-width:768px){.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{-moz-column-count:1;column-count:1}}@media (max-width:576px){.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:calc(100% - 2rem)}}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .image-block[_ngcontent-%COMP%]{margin-bottom:15px;width:100%;background:rgba(0,0,0,.7);padding:15px;display:inline-block}.saxophones-layout[_ngcontent-%COMP%]   .saxophones-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .image-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:cover;object-fit:cover;cursor:pointer}.padding-1rem[_ngcontent-%COMP%]{padding:1rem}.font-size-25rem[_ngcontent-%COMP%]{font-size:2.5rem}.img-width-100[_ngcontent-%COMP%]{width:100%}.w-50-2rem[_ngcontent-%COMP%]{width:calc((100% / 2) - 2rem)}.flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.text-left[_ngcontent-%COMP%]{text-align:left!important}.mr-b-1em[_ngcontent-%COMP%]{margin-bottom:1em}"]],data:{}});function u(n){return l.Fb(0,[(n()(),l.ob(0,0,null,null,4,"div",[["class","item"]],null,[[null,"click"]],(function(n,o,t){var l=!0;return"click"===o&&(l=!1!==n.component.changeCategory(n.context.$implicit,n.context.index)&&l),l}),null,null)),l.Bb(512,null,s.r,s.s,[l.q,l.r,l.k,l.B]),l.nb(2,278528,null,0,s.h,[s.r],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Ab(3,{active:0}),(n()(),l.Eb(4,null,[" "," "]))],(function(n,o){var t=n(o,3,0,o.component.selectedIndex===o.context.index);n(o,2,0,"item",t)}),(function(n,o){n(o,4,0,o.context.$implicit.name)}))}function g(n){return l.Fb(0,[(n()(),l.ob(0,0,null,null,1,"div",[["class","image-block"]],null,[[null,"click"]],(function(n,o,t){var l=!0;return"click"===o&&(l=!1!==n.component.openPopup(n.context.$implicit)&&l),l}),null,null)),(n()(),l.ob(1,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,o){n(o,1,0,"assets/images/sax/"+o.context.$implicit.fileName)}))}function p(n){return l.Fb(0,[(n()(),l.ob(0,0,null,null,1,"div",[["class","popup"]],null,[[null,"click"]],(function(n,o,t){var l=!0;return"click"===o&&(l=!1!==n.component.closePopup()&&l),l}),null,null)),(n()(),l.ob(1,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,o){n(o,1,0,"assets/images/sax/"+o.component.selected.fileName)}))}function r(n){return l.Fb(0,[(n()(),l.ob(0,0,null,null,1,"div",[["class","saxophones-bg"]],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,0,"div",[["class","block-bg"]],null,null,null,null,null)),(n()(),l.ob(2,0,null,null,9,"div",[["class","saxophones-layout"]],null,null,null,null,null)),(n()(),l.ob(3,0,null,null,1,"div",[["class","saxophones-title"]],null,null,null,null,null)),(n()(),l.Eb(-1,null,["Saxophone"])),(n()(),l.ob(5,0,null,null,6,"div",[["class","saxophones-block"]],null,null,null,null,null)),(n()(),l.ob(6,0,null,null,2,"div",[["class","menu"]],null,null,null,null,null)),(n()(),l.db(16777216,null,null,1,null,u)),l.nb(8,278528,null,0,s.i,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(n()(),l.ob(9,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),(n()(),l.db(16777216,null,null,1,null,g)),l.nb(11,278528,null,0,s.i,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(n()(),l.db(16777216,null,null,1,null,p)),l.nb(13,16384,null,0,s.j,[l.M,l.J],{ngIf:[0,"ngIf"]},null)],(function(n,o){var t=o.component;n(o,8,0,t.menu),n(o,11,0,t.subList),n(o,13,0,t.isPopupOpen)}),null)}function m(n){return l.Fb(0,[(n()(),l.ob(0,0,null,null,1,"app-saxophones",[],null,null,null,r,i)),l.nb(1,114688,null,0,a,[],null,null)],(function(n,o){n(o,1,0)}),null)}var x=l.kb("app-saxophones",a,m,{},{},[]),h=t("iInd");class b{}t.d(o,"SaxophonesModuleNgFactory",(function(){return d}));var d=l.lb(e,[],(function(n){return l.wb([l.xb(512,l.j,l.W,[[8,[c.a,x]],[3,l.j],l.v]),l.xb(4608,s.l,s.k,[l.s,[2,s.w]]),l.xb(1073742336,s.b,s.b,[]),l.xb(1073742336,h.o,h.o,[[2,h.t],[2,h.k]]),l.xb(1073742336,b,b,[]),l.xb(1073742336,e,e,[]),l.xb(1024,h.i,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);