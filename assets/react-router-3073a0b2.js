import{r as a}from"./react-ccb5ed75.js";import{A as J,i as f,p as M,s as T,j as L,g as O,r as B}from"./@remix-run-c85e312f.js";/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}const E=a.createContext(null),v=a.createContext(null),d=a.createContext(null),x=a.createContext({outlet:null,matches:[]});function V(e,t){let{relative:n}=t===void 0?{}:t;h()||f(!1);let{basename:r,navigator:s}=a.useContext(v),{hash:u,pathname:l,search:i}=q(e,{relative:n}),o=l;return r!=="/"&&(o=l==="/"?r:L([r,l])),s.createHref({pathname:o,search:i,hash:u})}function h(){return a.useContext(d)!=null}function j(){return h()||f(!1),a.useContext(d).location}function I(e){a.useContext(v).static||a.useLayoutEffect(e)}function W(){return a.useContext(E)!=null?G():D()}function D(){h()||f(!1);let{basename:e,navigator:t}=a.useContext(v),{matches:n}=a.useContext(x),{pathname:r}=j(),s=JSON.stringify(O(n).map(i=>i.pathnameBase)),u=a.useRef(!1);return I(()=>{u.current=!0}),a.useCallback(function(i,o){if(o===void 0&&(o={}),!u.current)return;if(typeof i=="number"){t.go(i);return}let c=B(i,JSON.parse(s),r,o.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:L([e,c.pathname])),(o.replace?t.replace:t.push)(c,o.state,o)},[e,t,s,r])}function q(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=a.useContext(x),{pathname:s}=j(),u=JSON.stringify(O(r).map(l=>l.pathnameBase));return a.useMemo(()=>B(e,JSON.parse(u),s,n==="path"),[e,u,s,n])}var g;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(g||(g={}));var p;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(p||(p={}));function z(e){let t=a.useContext(E);return t||f(!1),t}function A(e){let t=a.useContext(x);return t||f(!1),t}function F(e){let t=A(),n=t.matches[t.matches.length-1];return n.route.id||f(!1),n.route.id}function G(){let{router:e}=z(g.UseNavigateStable),t=F(p.UseNavigateStable),n=a.useRef(!1);return I(()=>{n.current=!0}),a.useCallback(function(s,u){u===void 0&&(u={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,m({fromRouteId:t},u)))},[e,t])}function X(e){let{basename:t="/",children:n=null,location:r,navigationType:s=J.Pop,navigator:u,static:l=!1}=e;h()&&f(!1);let i=t.replace(/^\/*/,"/"),o=a.useMemo(()=>({basename:i,navigator:u,static:l}),[i,u,l]);typeof r=="string"&&(r=M(r));let{pathname:c="/",search:C="",hash:b="",state:N=null,key:P="default"}=r,U=a.useMemo(()=>{let R=T(c,i);return R==null?null:{location:{pathname:R,search:C,hash:b,state:N,key:P},navigationType:s}},[i,c,C,b,N,P,s]);return U==null?null:a.createElement(v.Provider,{value:o},a.createElement(d.Provider,{children:n,value:U}))}var y;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(y||(y={}));new Promise(()=>{});export{v as N,X as R,W as a,j as b,q as c,V as u};