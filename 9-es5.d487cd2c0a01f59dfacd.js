(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{TbC0:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),u=function(){},e=t("pMnS"),i=t("SVse"),c=function(){function n(){this.cover="/assets/images/1.jpg",this.count=0,this.list=[1,2,3,4,5,6],this.opacity=1,this.$interval=null}return n.prototype.ngOnInit=function(){var n=this;this.$interval=setInterval((function(){n.count++,n.count>5&&(n.count=0);var l=setInterval((function(){if(n.opacity=n.opacity-.1,n.opacity<0){n.opacity=0,clearInterval(l),n.cover="/assets/images/"+n.list[n.count]+".jpg";var t=setInterval((function(){n.opacity=n.opacity+.1,n.opacity>1&&(n.opacity=1,clearInterval(t))}),100)}}),100)}),1e4)},n.prototype.ngOnDestroy=function(){clearInterval(this.$interval)},n}(),a=o.mb({encapsulation:0,styles:[[".home-layout[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.home-layout[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center;background-size:cover;background-repeat:no-repeat}.home-layout[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]{position:absolute;left:100px;top:100px;font-size:3rem;padding:50px;background-color:#0000004d;color:#fff}.home-layout[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%]{position:absolute;right:0;left:10%;top:350px;font-size:2rem;padding:30px;background:#0000004d;color:#fff}"]],data:{}});function r(n){return o.Fb(0,[(n()(),o.ob(0,0,null,null,11,"div",[["class","home-layout"]],null,null,null,null,null)),(n()(),o.ob(1,0,null,null,3,"div",[["class","cover-block"]],null,null,null,null,null)),o.Bb(512,null,i.t,i.u,[o.k,o.r,o.B]),o.nb(3,278528,null,0,i.m,[i.t],{ngStyle:[0,"ngStyle"]},null),o.Ab(4,{"background-image":0,opacity:1}),(n()(),o.ob(5,0,null,null,1,"div",[["class","title-block"]],null,null,null,null,null)),(n()(),o.Eb(-1,null,["\u656c\u611b\u7684\u5404\u4f4d\u4f01\u696d\u4e3b,"])),(n()(),o.ob(7,0,null,null,4,"div",[["class","content-block"]],null,null,null,null,null)),(n()(),o.ob(8,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o.Eb(-1,null,["\u611f\u8b1d\u60a8\u849e\u81e8\u700f\u89bd\u6211\u5011\u7684\u7db2\u9801"])),(n()(),o.ob(10,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o.Eb(-1,null,["\u6211\u5011\u662f\u4f4d\u65bc\u53f0\u7063\u7684\u5c08\u696d\u85a9\u514b\u65af\u98a8/\u9577\u7b1b/\u5c0f\u5587\u53ed/\u9ed1\u7ba1\u751f\u7522\u5546\u53ca\u4f9b\u61c9\u5546,\u5f9e1997\u5e74\u8d77\u5373\u958b\u59cb\u91dd\u5c0d\u4f01\u696d/\u4f01\u696d\u4f9b\u61c9\u9ad8\u54c1\u8cea\u7684\u6728\u7ba1/\u9285\u7ba1\u6a02\u5668"]))],(function(n,l){var t=l.component,o=n(l,4,0,"url("+t.cover+")",t.opacity);n(l,3,0,o)}),null)}var s=o.kb("app-home",c,(function(n){return o.Fb(0,[(n()(),o.ob(0,0,null,null,1,"app-home",[],null,null,null,r,a)),o.nb(1,245760,null,0,c,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),b=t("iInd"),p=function(){};t.d(l,"HomeModuleNgFactory",(function(){return v}));var v=o.lb(u,[],(function(n){return o.wb([o.xb(512,o.j,o.W,[[8,[e.a,s]],[3,o.j],o.v]),o.xb(4608,i.l,i.k,[o.s,[2,i.w]]),o.xb(1073742336,i.b,i.b,[]),o.xb(1073742336,b.o,b.o,[[2,b.t],[2,b.k]]),o.xb(1073742336,p,p,[]),o.xb(1073742336,u,u,[]),o.xb(1024,b.i,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);