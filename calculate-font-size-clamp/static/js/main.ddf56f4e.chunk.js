(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a,l=n(0),r=n.n(l),i=n(7),c=n.n(i),o=n(2),m=n(1),p=(n(16),["svgRef"]);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=function(e){var t=e.svgRef,n=u(e,p);return r.a.createElement("svg",s({height:"512px",viewBox:"-40 0 512 512",width:"512px",ref:t},n),a||(a=r.a.createElement("path",{d:"m271 512h-191c-44.113281 0-80-35.886719-80-80v-271c0-44.113281 35.886719-80 80-80h191c44.113281 0 80 35.886719 80 80v271c0 44.113281-35.886719 80-80 80zm-191-391c-22.054688 0-40 17.945312-40 40v271c0 22.054688 17.945312 40 40 40h191c22.054688 0 40-17.945312 40-40v-271c0-22.054688-17.945312-40-40-40zm351 261v-302c0-44.113281-35.886719-80-80-80h-222c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h222c22.054688 0 40 17.945312 40 40v302c0 11.046875 8.953125 20 20 20s20-8.953125 20-20zm0 0",fill:"#FFFFFF"})))},f=r.a.forwardRef(function(e,t){return r.a.createElement(d,s({svgRef:t},e))}),h=(n.p,m.a.div.withConfig({displayName:"App__AppDiv",componentId:"sc-1v6ss16-0"})(['font-family:"Open Sans",sans-serif;color:#ffffff;padding:8px 16px;display:flex;flex-direction:column;height:90vh;'])),v=m.a.input.attrs({type:"number"}).withConfig({displayName:"App__Input",componentId:"sc-1v6ss16-1"})(["width:50px;&:not(:last-child){margin-bottom:8px;}"]),g=m.a.label.withConfig({displayName:"App__Label",componentId:"sc-1v6ss16-2"})(["&:not(:last-child){margin-bottom:10px;}"]),x=m.a.span.withConfig({displayName:"App__Unit",componentId:"sc-1v6ss16-3"})(["margin-left:8px;"]),b=m.a.div.withConfig({displayName:"App__Container",componentId:"sc-1v6ss16-4"})(["display:flex;justify-content:center;"]),w=m.a.div.withConfig({displayName:"App__LabelGroup",componentId:"sc-1v6ss16-5"})(["display:flex;flex-direction:column;align-items:flex-end;margin-right:16px;"]),E=m.a.div.withConfig({displayName:"App__InputGroup",componentId:"sc-1v6ss16-6"})(["display:flex;flex-direction:column;"]),y=m.a.div.withConfig({displayName:"App__InputAndUnit",componentId:"sc-1v6ss16-7"})([""]),C=m.a.div.withConfig({displayName:"App__ResultBox",componentId:"sc-1v6ss16-8"})(["display:flex;justify-content:center;padding:8px;margin:16px 0 0 0;border:1px solid #4b4d68;border-radius:5px;"]),O=m.a.h1.withConfig({displayName:"App__Result",componentId:"sc-1v6ss16-9"})(["font-size:1rem;"]),_=m.a.button.withConfig({displayName:"App__CopyBtn",componentId:"sc-1v6ss16-10"})(["cursor:pointer;background:none;border:none;margin-left:8px;svg{width:32px;height:32px;}"]),F=function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("".concat(e,"\n  \n  Copied to clipboard!"))};function j(){var e=Object(l.useState)(16),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(l.useState)(360),c=Object(o.a)(i,2),m=c[0],p=c[1],s=Object(l.useState)(840),u=Object(o.a)(s,2),d=u[0],j=u[1],I=Object(l.useState)(1),N=Object(o.a)(I,2),S=N[0],A=N[1],z=Object(l.useState)(3.5),k=Object(o.a)(z,2),P=k[0],R=k[1],B=m/n,M=(P-S)/(d/n-B),W=-B*M+S,L="font-size: clamp(".concat(S,"rem, ").concat(W.toFixed(4),"rem + ").concat((100*M).toFixed(4),"vw, ").concat(P,"rem);");return r.a.createElement(h,null,r.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},r.a.createElement("h1",null,"Calculate font-size clamp"),r.a.createElement("p",null,"Based on article \u201c",r.a.createElement("a",{href:"https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/"},"Linearly Scale font-size with CSS clamp() Based on the Viewport"),"\u201d from css-tricks.com.")),r.a.createElement(b,null,r.a.createElement(w,null,r.a.createElement(g,{htmlFor:"minWidthPx"},"Minimum viewport width ="),r.a.createElement(g,{htmlFor:"maxWidthPx"},"Maximum viewport width ="),r.a.createElement(g,{htmlFor:"minFontSize"},"Minimum font size ="),r.a.createElement(g,{htmlFor:"maxFontSize"},"Maximum font size ="),r.a.createElement(g,{htmlFor:"pixelsPerRem"},"1 rem =")),r.a.createElement(E,null,r.a.createElement(y,null,r.a.createElement(v,{id:"minWidthPx",value:m,onChange:function(e){return p(Number(e.target.value))}}),r.a.createElement(x,null,"px")),r.a.createElement(y,null,r.a.createElement(v,{id:"maxWidthPx",value:d,onChange:function(e){return j(Number(e.target.value))}}),r.a.createElement(x,null,"px")),r.a.createElement(y,null,r.a.createElement(v,{id:"minFontSize",value:S,onChange:function(e){return A(Number(e.target.value))}}),r.a.createElement(x,null,"rem")),r.a.createElement(y,null,r.a.createElement(v,{id:"maxFontSize",value:P,onChange:function(e){return R(Number(e.target.value))}}),r.a.createElement(x,null,"rem")),r.a.createElement(y,null,r.a.createElement(v,{id:"pixelsPerRem",value:n,onChange:function(e){return a(Number(e.target.value))}}),r.a.createElement(x,null,"px")))),r.a.createElement(C,null,r.a.createElement(O,null,L),r.a.createElement(_,{title:"Copy to clipboard",onClick:function(){return F(L)}},r.a.createElement(f,null))),r.a.createElement("div",{style:{marginTop:"auto",textAlign:"center"}},"Icons made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))}var I=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),I)}},[[11,1,2]]]);
//# sourceMappingURL=main.ddf56f4e.chunk.js.map