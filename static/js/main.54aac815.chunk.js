(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n.n(a),i=n(2),c=n(1),l=(n(9),n(10),n(0)),r=function(e){var t=e.images,n=e.step,a=e.frameSize,s=e.itemWidth,i=e.animationDuration,c=e.infinite,r=e.currentImageIndex,u=e.setCurrentImageIndex,o=t.length-a,m=0===r&&!c,b=r===o&&!c;return Object(l.jsxs)("div",{className:"Carousel",style:{width:"".concat(a*s,"px"),transition:"".concat(i,"ms")},children:[Object(l.jsx)("ul",{className:"Carousel__list",children:t.map((function(e,t){return Object(l.jsx)("li",{style:{width:a*s,transform:"translateX(".concat(-r*s,"px)"),transition:"transform ".concat(i,"ms ease 0s")},children:Object(l.jsx)("img",{src:e,alt:"".concat(t+1),width:s})},e)}))}),Object(l.jsxs)("div",{className:"Carousel__controls",children:[Object(l.jsx)("button",{type:"button",className:m?"Carousel__button Carousel__button--disabled":"Carousel__button Carousel__button--active",onClick:function(){u(0===r&&c?o:r-n<=0?0:r-n)},children:"\u2190"}),Object(l.jsx)("button",{type:"button","data-cy":"next",className:b?"Carousel__button Carousel__button--disabled":"Carousel__button Carousel__button--active",onClick:function(){u(r===o&&c?0:r+n>=o?o:r+n)},children:"\u2192"})]})]})},u=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],o=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(130),o=Object(i.a)(s,2),m=o[0],b=o[1],j=Object(c.useState)(3),d=Object(i.a)(j,2),p=d[0],g=d[1],h=Object(c.useState)(3),x=Object(i.a)(h,2),O=x[0],_=x[1],f=Object(c.useState)(1e3),C=Object(i.a)(f,2),I=C[0],v=C[1],y=Object(c.useState)(!1),N=Object(i.a)(y,2),S=N[0],A=N[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",u.length," images"]}),Object(l.jsxs)("fieldset",{className:"App__settings",children:[Object(l.jsx)("legend",{children:"Settings"}),Object(l.jsxs)("label",{htmlFor:"itemId",className:"App__label",children:["Item width: ",Object(l.jsx)("input",{type:"number",id:"itemId",min:30,max:300,step:10,onChange:function(e){b(+e.target.value),a(0)},value:m})]}),Object(l.jsxs)("label",{htmlFor:"frameId",className:"App__label",children:["Frame size: ",Object(l.jsx)("input",{type:"number",id:"frameId",min:1,max:u.length,step:1,onChange:function(e){g(+e.target.value),a(0)},value:p})]}),Object(l.jsxs)("label",{htmlFor:"stepId",className:"App__label",children:["Step: ",Object(l.jsx)("input",{type:"number",id:"stepId",min:3,max:u.length,step:1,onChange:function(e){_(+e.target.value),a(0)},value:O})]}),Object(l.jsxs)("label",{htmlFor:"animationId",className:"App__label",children:["Animation duration: ",Object(l.jsx)("input",{type:"number",id:"animationId",min:"100",max:"5000",step:100,onChange:function(e){v(+e.target.value),a(0)},value:I})]}),Object(l.jsxs)("label",{htmlFor:"infinite",className:"App__label",children:["Infinite: ",Object(l.jsx)("input",{type:"checkbox",onChange:function(){return A(!S)},checked:S})]})]}),Object(l.jsx)(r,{images:u,step:O,frameSize:p,itemWidth:m,animationDuration:I,infinite:S,currentImageIndex:n,setCurrentImageIndex:a})]})};s.a.render(Object(l.jsx)(o,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.54aac815.chunk.js.map