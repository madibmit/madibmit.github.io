import{s as G,f as h,g as $,h as w,d as o,j as f,i as p,x as M,a as S,l as b,c as q,m as x,D as P,v,w as V}from"../chunks/scheduler.75449220.js";import{S as W,i as z,b as B,d as C,m as D,a as F,t as j,e as A}from"../chunks/index.477b3b79.js";import{F as J}from"../chunks/FullScreenCard.150f348d.js";import{p as K}from"../chunks/stores.0cd6cb67.js";import{I as L}from"../chunks/Icon.a21c1f0d.js";function N(m){let s,a,r,t,l,n,c,E,k,d,u,I,_,g;return _=new L({props:{icon:"material-symbols:home",width:"1.3rem",class:"inline-block"}}),{c(){s=h("img"),r=S(),t=h("h1"),l=b(m[0]),n=S(),c=h("p"),E=b("Error message: "),k=b(m[1]),d=S(),u=h("a"),I=b("Back to Home "),B(_.$$.fragment),this.h()},l(e){s=$(e,"IMG",{src:!0,alt:!0,class:!0}),r=q(e),t=$(e,"H1",{class:!0});var i=w(t);l=x(i,m[0]),i.forEach(o),n=q(e),c=$(e,"P",{class:!0});var y=w(c);E=x(y,"Error message: "),k=x(y,m[1]),y.forEach(o),d=q(e),u=$(e,"A",{href:!0,class:!0});var H=w(u);I=x(H,"Back to Home "),C(_.$$.fragment,H),H.forEach(o),this.h()},h(){P(s.src,a="/sveltekit_assets/starla-wink.gif")||f(s,"src",a),f(s,"alt","Worse"),f(s,"class","h-[15rem] m-auto"),f(t,"class","text-4xl text-center font-bold mt-4 bg-gradient-to-r from-[#df98c2] to-[#4c27b3] text-transparent bg-clip-text"),f(c,"class","text-md text-center"),f(u,"href","/"),f(u,"class","btn table bg-gradient-to-r from-[#070d2b] to-[#151b4c] p-2 px-6 mt-4 m-auto text-white rounded-lg hover:translate-x-3 transition-all")},m(e,i){p(e,s,i),p(e,r,i),p(e,t,i),v(t,l),p(e,n,i),p(e,c,i),v(c,E),v(c,k),p(e,d,i),p(e,u,i),v(u,I),D(_,u,null),g=!0},p:V,i(e){g||(F(_.$$.fragment,e),g=!0)},o(e){j(_.$$.fragment,e),g=!1},d(e){e&&(o(s),o(r),o(t),o(n),o(c),o(d),o(u)),A(_)}}}function O(m){let s,a,r;return a=new J({props:{class:"h-auto lg:w-[40rem] m-auto",$$slots:{default:[N]},$$scope:{ctx:m}}}),{c(){s=h("div"),B(a.$$.fragment),this.h()},l(t){s=$(t,"DIV",{class:!0});var l=w(s);C(a.$$.fragment,l),l.forEach(o),this.h()},h(){f(s,"class","p-2 px-2")},m(t,l){p(t,s,l),D(a,s,null),r=!0},p(t,[l]){const n={};l&8&&(n.$$scope={dirty:l,ctx:t}),a.$set(n)},i(t){r||(F(a.$$.fragment,t),r=!0)},o(t){j(a.$$.fragment,t),r=!1},d(t){t&&o(s),A(a)}}}function Q(m,s,a){var n;let r;M(m,K,c=>a(2,r=c));const t=r.status,l=(n=r.error)==null?void 0:n.message;return[t,l]}class Z extends W{constructor(s){super(),z(this,s,Q,O,G,{})}}export{Z as component};