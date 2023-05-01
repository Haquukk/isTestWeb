import{j as e,a as t,F as _,T}from"./react-tilt-f5704d7b.js";import{r as n,R as L}from"./react-ccb5ed75.js";import{c as C}from"./react-dom-6efbe13b.js";import{u as k,a as h,b as N,C as x,O as g,P as S,S as I}from"./@react-three-7963bbec.js";import{m}from"./framer-motion-3179522e.js";import{L as j,B as A}from"./react-router-dom-3391493b.js";import{H as O,I as $}from"./react-icons-0e21efb7.js";import"./@chevrotain-39b5b250.js";import"./scheduler-04ce0582.js";import"./@babel-34ca84e8.js";import"./three-0c2681a8.js";import"./react-use-measure-43afca94.js";import"./debounce-ae8cc837.js";import"./its-fine-b0cabe29.js";import"./react-reconciler-c5549ab8.js";import"./zustand-36b18702.js";import"./three-stdlib-f12fc2d7.js";import"./react-merge-refs-239dbb3c.js";import"./suspend-react-00b64780.js";import"./react-router-3073a0b2.js";import"./@remix-run-c85e312f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const M=a=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:a}}}),P=(a,o,s,l)=>({hidden:{x:a==="left"?100:a==="right"?-100:0,y:a==="up"?100:a==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:o,delay:s,duration:l,ease:"easeOut"}}}),w=(a,o,s,l)=>({hidden:{x:a==="left"?"-100%":a==="right"?"100%":0,y:a==="up"?"-100%":a==="down"?"100%":0},show:{x:0,y:0,transition:{type:o,delay:s,duration:l,ease:"easeOut"}}}),E=(a,o)=>({hidden:{},show:{transition:{staggerChildren:a,delayChildren:o||0}}}),R=()=>{const{progress:a}=k(),[o,s]=n.useState(!0),[l,r]=n.useState(!0),[i,d]=n.useState(null),[u,c]=n.useState(""),b="Hello World!";return n.useEffect(()=>{d(setTimeout(()=>s(!1),4e3)),r(!1)},[]),n.useEffect(()=>{let y=setTimeout(()=>{c(b.slice(0,u.length+1))},100);return u.length===b.length&&clearTimeout(y),()=>clearTimeout(y)},[u]),e(m.div,{className:`${o?"absolute inset-0":"hidden"}`,children:e(m.div,{animate:{opacity:l?1:0},transition:{duration:1,delay:3},className:"h-[100%] flex justify-center items-center flex-col bg-gradient-to-l from-secondary via-transparent to-primary",children:t(m.div,{style:{opacity:`${a}%`},className:"text-8xl font-thin text-center",children:["DAMNFOLIO.",e(m.h1,{variants:M,initial:"hidden",animate:"visible",className:"text-2xl font-light",children:u})]})})})},H="/isTestWeb/assets/backend-565fc01f.png",K="/isTestWeb/assets/creator-dbbffaec.png",W="/isTestWeb/assets/mobile-896ef2f5.png",B="/isTestWeb/assets/web-0d05165f.png",v=[{id:"about",title:"About"},{id:"work",title:"Work"},{id:"contact",title:"Contact"}],z=[{title:"Web Developer",icon:B},{title:"React Native Developer",icon:W},{title:"Backend Developer",icon:H},{title:"Game Creator",icon:K}],D=()=>{const[a,o]=n.useState(),[s,l]=n.useState(!1),r=()=>{l(!s)},[i,d]=n.useState(!1),u=()=>{scrollY>20?d(!0):d(!1)};return window.addEventListener("scroll",u),e("nav",{className:i?"w-full flex items-center h-12 px-7 mx-auto fixed z-20 bg-gradient-to-r from-[#01729E] transition-all":"w-full flex items-center h-10 px-7 mx-auto fixed z-20 bg-gradient-to-r from-transparent from-30% via-[#01729E] to-transparent to-70% transition-all",children:t("div",{className:"max-w-[1284px] w-full flex items-center justify-between mx-auto",children:[e("div",{className:"animate-ping font-bold",children:e(j,{to:"/",onClick:()=>{o(""),window.scrollTo(0,0)},children:e("p",{children:"DAMNFOLIO."})})}),e("ul",{className:"hidden sm:flex gap-10 text-sm",children:v.map(c=>e("li",{className:`${a===c.title?"text-primary":"text-white"} hover:text-secondary text-[16px] font-medium cursor-pointer`,onClick:()=>o(c.title),children:t("a",{href:`#${c.id}`,children:[c.title," "]})},c.id))}),e("div",{onClick:r,className:"z-20",children:s?e($,{size:30}):e(O,{size:30})}),e("div",{className:`${s?"flex":"hidden"} absolute right-5 top-12 sm:w-[20%] w-[40%] bg-gradient-to-b from-[#01729E] p-10 h-screen `,children:e("ul",{className:"text-sm flex flex-col gap-10 mx-auto ",children:v.map(c=>e("li",{className:`${a===c.title?"text-primary":"text-white"} hover:text-secondary text-[16px] font-medium cursor-pointer`,onClick:()=>o(c.title),children:t("a",{href:`#${c.id}`,children:[c.title," "]})},c.id))})})]})})},p={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-primary uppercase tracking-wider"},F=({action:a})=>{const o=n.useRef(),{nodes:s,materials:l,animations:r}=h("./desktop_pc/Mans.gltf"),{actions:i,names:d}=N(r,o);return n.useEffect(()=>(i[a].reset().fadeIn(.5).play(),()=>i[a].fadeOut(.5)),[a]),e("group",{ref:o,...a,dispose:null,children:t("group",{name:"Scene",children:[t("group",{name:"Armature",children:[e("primitive",{object:s.mixamorigHips}),e("primitive",{object:s.Ctrl_Master}),e("primitive",{object:s.Ctrl_ArmPole_IK_Left}),e("primitive",{object:s.Ctrl_Hand_IK_Left}),e("primitive",{object:s.Ctrl_ArmPole_IK_Right}),e("primitive",{object:s.Ctrl_Hand_IK_Right}),e("primitive",{object:s.Ctrl_Foot_IK_Left}),e("primitive",{object:s.Ctrl_LegPole_IK_Left}),e("primitive",{object:s.Ctrl_Foot_IK_Right}),e("primitive",{object:s.Ctrl_LegPole_IK_Right}),e("skinnedMesh",{castShadow:!0,name:"Leather_small_Low003",geometry:s.Leather_small_Low003.geometry,material:l["Material.004"],skeleton:s.Leather_small_Low003.skeleton})]}),t("group",{name:"cs_grp",children:[e("group",{name:"cs_arm_fk",position:[1.5,8.5,0],scale:.82}),e("group",{name:"cs_calf_fk",position:[.5,8.5,0],scale:.82}),e("group",{name:"cs_circle",position:[.5,4.5,0],scale:.21}),e("group",{name:"cs_circle001",position:[.5,4.5,0],scale:.21}),e("group",{name:"cs_circle_025",position:[2.5,4.5,0],scale:.21}),e("group",{name:"cs_foot",position:[.5,10.5,0],rotation:[-Math.PI,0,0],scale:.31}),e("group",{name:"cs_foot001",position:[.5,10.5,0],rotation:[-Math.PI,0,0],scale:.31}),e("group",{name:"cs_foot002",position:[.5,10.5,0],rotation:[-Math.PI,0,0],scale:.31}),e("group",{name:"cs_foot_01",position:[.5,18.5,0],rotation:[0,Math.PI/2,0],scale:2.19}),e("group",{name:"cs_foot_roll",position:[.5,12.5,0],scale:.59}),e("group",{name:"cs_forearm_fk",position:[2.5,8.5,0],scale:.82}),e("group",{name:"cs_hand",position:[.5,19.5,0],rotation:[-Math.PI,0,0],scale:.31}),e("group",{name:"cs_head",position:[.5,13.5,0],scale:.21}),e("group",{name:"cs_hips",position:[.5,11.5,0],scale:.21}),e("group",{name:"cs_master",position:[.5,17.5,0],scale:.1}),e("group",{name:"cs_neck",position:[.5,14.5,0],scale:.21}),e("group",{name:"cs_shoulder_left",position:[.5,15.5,0],rotation:[-Math.PI,-Math.PI/2,0],scale:1.04}),e("group",{name:"cs_shoulder_right",position:[.5,16.5,0],rotation:[-Math.PI,-Math.PI/2,0],scale:1.04}),e("group",{name:"cs_sphere",position:[.5,2.5,0],scale:.21}),e("group",{name:"cs_sphere_012",position:[3.5,2.5,0],scale:.21}),e("group",{name:"cs_square",position:[1.5,1.5,0],rotation:[-Math.PI,0,0],scale:.15}),e("group",{name:"cs_square_2",position:[.5,1.5,0],rotation:[-Math.PI,0,0],scale:.15}),e("group",{name:"cs_thigh_fk",position:[.5,7.5,0],scale:.82}),e("group",{name:"cs_toe",position:[.5,9.5,0],scale:.43}),e("group",{name:"cs_user_Ctrl_Toe_IK_Right001",position:[-14.61,-1.45,13.38],rotation:[3.12,.08,-3.13],scale:7.37}),e("group",{name:"cs_user_Ctrl_Toe_IK_Right002",position:[-14.61,-1.45,13.38],rotation:[3.12,.08,-3.13],scale:7.37}),e("group",{name:"cs_user_Ctrl_Toe_IK_Right",position:[-14.61,-1.45,13.38],rotation:[3.12,.08,-3.13],scale:7.37})]})]})})};h.preload("./destop_pc/Mans.gltf");const G=()=>{const[a,o]=n.useState("idle"),[s,l]=n.useState(null),r=i=>{setTimeout(()=>{const d=document.getElementById(i);d&&d.scrollIntoView({behavior:"smooth"})},2200)};return t(_,{children:[t(x,{frameloop:"always",shadows:!0,camera:{position:[1,3,2.5],fov:50},gl:{preserveDrawingBuffer:!0},children:[e("ambientLight",{}),e("spotLight",{position:[-20,50,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),e("group",{scale:.012,position:[0,-1.7,0],rotation:[0,.2,0],children:t(n.Suspense,{children:[e(g,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/4}),e(F,{action:a})]})}),t("mesh",{rotation:[-.5*Math.PI,0,0],position:[0,-1.7,0],receiveShadow:!0,children:[e("planeGeometry",{args:[10,10,1,1]}),e("shadowMaterial",{transparent:!0,opacity:.5})]}),e(S,{all:!0})]}),e("div",{className:"absolute xs:bottom-7 bottom-32 w-full flex justify-center items-center cursor-pointer",children:t("div",{onClick:()=>{l(setTimeout(()=>o("idle"),2600)),o("turn start walking"),r("#about")},className:"w-[100px] h-[70px] flex text-center rounded-3xl border-4 border-secondary p-2 italic font-medium hover:blur-[2px] ",children:["Lets Started!",e(m.div,{className:"w-3 h-3 bg-secondary rounded-full mb-1 ",animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"}})]})})]})},Y=()=>{const a=n.useRef(),{nodes:o,materials:s,animations:l}=h("./desktop_pc/Mans.gltf"),{actions:r,names:i}=N(l,a);return n.useEffect(()=>(r.idle.reset().fadeIn(.5).play(),()=>r.idle.fadeOut(.5)),[]),e("group",{ref:a,dispose:null,children:e("group",{name:"Scene",children:e("group",{name:"Armature",children:e("skinnedMesh",{castShadow:!0,name:"Leather_small_Low003",geometry:o.Leather_small_Low003.geometry,material:s["Material.004"],skeleton:o.Leather_small_Low003.skeleton})})})})},q=()=>t(x,{frameloop:"always",shadows:!0,camera:{position:[1,3,2.5],fov:50},gl:{preserveDrawingBuffer:!0},children:[e("ambientLight",{}),e("pointLight",{intensity:1}),e(I,{position:[.5,2.2,.6],attenuation:3,intensity:.2,scale:1,angle:.2,castShadow:!0}),e("group",{children:t(n.Suspense,{children:[e(g,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e(Y,{})]})}),t("mesh",{rotation:[-.5*Math.PI,0,0],position:[0,-1.7,0],receiveShadow:!0,children:[e("planeGeometry",{args:[10,10,1,1]}),e("shadowMaterial",{transparent:!0,opacity:.5})]}),t("mesh",{rotation:[-.5*Math.PI,0,0],position:[0,-1.8,0],castShadow:!0,children:[e("circleGeometry",{args:[1,32]}),e("meshStandardMaterial",{color:"#DDD8B8"})]}),e(S,{all:!0})]}),V=()=>t(x,{shadows:!0,camera:{position:[1,.5,2],fov:20},children:[e("ambientLight",{}),e(g,{maxPolarAngle:Math.PI/2.2,minPolarAngle:Math.PI/2.5,enableZoom:!1}),e(I,{position:[0,1,0],attenuation:1,intensity:.2,scale:.18,angle:.2}),e("spotLight",{position:[-20,35,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),e("group",{children:t("mesh",{scale:.5,position:[0,.1,0],castShadow:!0,children:[e("boxGeometry",{args:[2,.08,2]}),e("meshStandardMaterial",{color:"#314362"})]})}),t("mesh",{rotation:[-.5*Math.PI,0,0],position:[0,0,0],receiveShadow:!0,children:[e("planeGeometry",{args:[1.3,1,2]}),e("shadowMaterial",{opacity:.2})]})]}),Z=()=>t("section",{className:"relative w-full mx-auto h-screen ",children:[e("div",{className:`${p.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`,children:t("div",{children:[t("h1",{className:`${p.heroHeadText}`,children:[" the door always open ",e("span",{className:"text-[#314362]",children:" dd!."})]}),t("p",{className:`${p.heroSubText} text-white`,children:[" Lorem ipsum telor, ",e("br",{className:"hidden sm:block"})," Latest website created by! "]}),t("div",{className:"flex  items-center mt-5",children:[e("div",{className:"w-2 h-5 rounded-r-full bg-[#314362]"}),e("div",{className:"w-[300px] sm:w-[400px] h-1 bg-gradient-to-r from-[#314362]"})]})]})}),e(G,{})]}),f=(a,o)=>function(){return t(m.section,{variants:E,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${p.padding} max-w-7xl mx-auto relative z-0`,children:[e("span",{className:"hash-span",id:o,children:" "}),e(a,{})]})},X=({index:a,title:o,icon:s})=>e(T,{className:"xs:w-[250px] w-full",children:e(m.div,{variants:P("right","spring",.5*a,.75),className:"w-full rounded-[20px] green-pink-gradient p-[1px] shadow-card ",children:t("div",{options:{max:45,scale:1,speed:450},className:"bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly ",children:[e("img",{src:s,alt:o,className:"w-16 h-16 object-contain "}),e("h3",{className:"text-center font-bold text-secondary",children:o})]})})}),J=()=>t(_,{children:[t(m.div,{variants:M(),children:[e("p",{id:"#about",className:p.sectionSubText,children:"introduction"}),e("h2",{className:p.sectionHeadText,children:"Overview."})]}),e(m.p,{variants:P("","",.1,1),className:"max-w-3xl text-lg leading-[30px] ",children:"I'm a person who always learning about art and all about masterpiece in progam and i'm absolutely interested something called 3d creation. I'm going to improve my skills now, may could say like software developer with experience in javascript, and expertise in frameworks like react, Node.js, and Three.js. Lets works together to bring ideas each other!"}),e("a",{className:p.sectionSubText,children:"ongoing:"}),e("div",{className:"mt-10 flex flex-wrap gap-10",children:z.map((a,o)=>e(X,{index:o,...a},a.title))})]}),Q=f(J,"about"),U=()=>t("section",{className:" relative w-full h-[50vh] mx-auto",children:[e("div",{className:"center-div z-10 text-3d text-shadow-up ",children:e("h1",{className:`${p.sectionHeadText}`,children:"Work"})}),e("p",{className:`${p.sectionSubText} absolute top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-shadow-up`,children:"there isn't any yet!"}),e(V,{})]}),ee=f(U,"work"),te=()=>{const[a,o]=n.useState(!1);return t("div",{className:"w-full h-auto mt-[-100px] xl:mt-[0] flex xl:flex-row flex-col-reverse gap-10 ",children:[t(m.div,{variants:w("left","tween",.1,1),className:"bg-[#7db1da] p-5 rounded-2xl w-full",children:[e("p",{className:`${p.sectionSubText}`,children:"Get in touch"}),e("h1",{className:`${p.sectionHeadText}`,children:"Contact."}),t("from",{className:"",children:[t("label",{className:"flex flex-col mt-5",children:[e("span",{className:"font-medium mb-2",children:"Your Name."}),e("input",{type:"text",name:"name",placeholder:"what's your name?",className:"py-2 px-4 text-sm rounded bg-secondary placeholder:text-primary"})]}),t("label",{className:"flex flex-col mt-5",children:[e("span",{className:"font-medium mb-2",children:"Your Email."}),e("input",{type:"text",name:"email",placeholder:"put your Email",className:"py-2 px-4 text-sm rounded bg-secondary placeholder:text-primary"})]}),t("label",{className:"flex flex-col mt-5",children:[e("span",{className:"font-medium mb-2",children:"Your Massage."}),e("textarea",{type:"text",rows:7,placeholder:"type here!",className:"py-2 px-4 text-sm rounded bg-secondary placeholder:text-primary"})]}),e("button",{type:"submit",className:"border-2 rounded border-primary text-primary font-medium px-4 mt-8 hover:blur-[1px] hover:bg-secondary ",children:a?"Sending...":"Send"})]})]}),t(m.div,{variants:w("left","tween",.2,1),className:"xl:w-[550px] lg:h-[80vh] h-[60vh]  ",children:[e("span",{className:"absolute top-20 text-center text-xl",children:"Website ini masih dalam tahap beta, enjoy dan kasih masukan apapun😊😎 "}),e(q,{})]})]})},ae=f(te,"contact"),oe=()=>t(A,{children:[t("div",{className:"relative z-0 bg-gradient-to-bl from-secondary from-65% to-primary",children:[t("div",{className:"bg-hero-pattern bg-cover bg-no-repeat bg-center",children:[e(D,{}),e(Z,{})]}),e(Q,{}),e(ee,{}),e(ae,{})]}),e(R,{})]});C.createRoot(document.getElementById("root")).render(e(L.StrictMode,{children:e(oe,{})}));