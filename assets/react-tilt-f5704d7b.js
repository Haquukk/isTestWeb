import{j as r,r as g,R as d}from"./react-ccb5ed75.js";const j=r.Fragment,v=r.jsx,b=r.jsxs;var f=Object.defineProperty,M=Object.defineProperties,x=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,l=(e,t,s)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,i=(e,t)=>{for(var s in t||(t={}))y.call(t,s)&&l(e,s,t[s]);if(h)for(var s of h(t))_.call(t,s)&&l(e,s,t[s]);return e},n=(e,t)=>M(e,x(t)),E=class extends g.Component{constructor(e){super(e),this.ref=d.createRef(),this.state={style:{}};const t={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},t,this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout(()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()},0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(e=()=>{},t){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{willChange:"transform"})})),this.setTransition(),e(t)}reset(){window.requestAnimationFrame(()=>{this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})}))})}onMouseMove(e=()=>{},t){return t.persist(),this.updateCall!==null&&window.cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.update.bind(this,t)),e(t)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{transition:`${this.settings.speed}ms ${this.settings.easing}`})})),this.transitionTimeout=setTimeout(()=>{this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{transition:""})}))},this.settings.speed)}onMouseLeave(e=()=>{},t){return this.setTransition(),this.settings.reset&&this.reset(),e(t)}getValues(e){const t=(e.nativeEvent.clientX-this.left)/this.width,s=(e.nativeEvent.clientY-this.top)/this.height,o=Math.min(Math.max(t,0),1),a=Math.min(Math.max(s,0),1),p=(this.reverse*(this.settings.max/2-o*this.settings.max)).toFixed(2),u=(this.reverse*(a*this.settings.max-this.settings.max/2)).toFixed(2),c=o*100,m=a*100;return{tiltX:p,tiltY:u,percentageX:c,percentageY:m}}updateElementPosition(){const e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(e){const t=this.getValues(e);this.setState(Object.assign({},this.state,{style:n(i({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(${this.settings.axis==="x"?0:t.tiltY}deg) rotateY(${this.settings.axis==="y"?0:t.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`})})),this.updateCall=null}render(){const e=Object.assign({},this.props.style,this.state.style);return v("div",{style:e,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}};export{j as F,E as T,b as a,v as j};
