import{S as w,i as A,s as C,e as u,t as E,k as G,c as _,a as v,h as I,d,m as S,b as h,g as H,I as t,j,M as q}from"../chunks/vendor-eca5a9d7.js";function M(a){let e,r,s,l,n,p,m,g,x,o,b;return{c(){e=u("div"),r=u("div"),s=u("div"),l=u("h1"),n=E(a[0]),p=G(),m=u("p"),g=E(a[1]),x=G(),o=u("a"),b=E("Go back"),this.h()},l(c){e=_(c,"DIV",{class:!0});var i=v(e);r=_(i,"DIV",{class:!0});var k=v(r);s=_(k,"DIV",{class:!0});var f=v(s);l=_(f,"H1",{class:!0});var D=v(l);n=I(D,a[0]),D.forEach(d),p=S(f),m=_(f,"P",{class:!0});var V=v(m);g=I(V,a[1]),V.forEach(d),x=S(f),o=_(f,"A",{class:!0,href:!0});var y=v(o);b=I(y,"Go back"),y.forEach(d),f.forEach(d),k.forEach(d),i.forEach(d),this.h()},h(){h(l,"class","mb-5 text-5xl font-bold opacity-10 lg:text-7xl xl:text-9xl"),h(m,"class","mb-5"),h(o,"class","btn"),h(o,"href","/"),h(s,"class","max-w-md"),h(r,"class","hero-content text-center"),h(e,"class","hero not-prose min-h-screen")},m(c,i){H(c,e,i),t(e,r),t(r,s),t(s,l),t(l,n),t(s,p),t(s,m),t(m,g),t(s,x),t(s,o),t(o,b)},p(c,[i]){i&1&&j(n,c[0]),i&2&&j(g,c[1])},i:q,o:q,d(c){c&&d(e)}}}function B({error:a,status:e}){return{props:{status:e,message:a.message}}}function P(a,e,r){let{status:s}=e,{message:l}=e;return a.$$set=n=>{"status"in n&&r(0,s=n.status),"message"in n&&r(1,l=n.message)},[s,l]}class F extends w{constructor(e){super();A(this,e,P,M,C,{status:0,message:1})}}export{F as default,B as load};