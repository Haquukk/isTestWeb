import{c as s}from"./three-0c2681a8.js";function o(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}new s;new s;function v(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}var a=function r(n,t,i){var e=this;v(this,r),o(this,"dot2",function(f,u){return e.x*f+e.y*u}),o(this,"dot3",function(f,u,m){return e.x*f+e.y*u+e.z*m}),this.x=n,this.y=t,this.z=i},p=[new a(1,1,0),new a(-1,1,0),new a(1,-1,0),new a(-1,-1,0),new a(1,0,1),new a(-1,0,1),new a(1,0,-1),new a(-1,0,-1),new a(0,1,1),new a(0,-1,1),new a(0,1,-1),new a(0,-1,-1)],c=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],h=new Array(512),w=new Array(512),y=function(n){n>0&&n<1&&(n*=65536),n=Math.floor(n),n<256&&(n|=n<<8);for(var t=0;t<256;t++){var i;t&1?i=c[t]^n&255:i=c[t]^n>>8&255,h[t]=h[t+256]=i,w[t]=w[t+256]=p[i%12]}};y(0);function g(r){if(typeof r=="number")r=Math.abs(r);else if(typeof r=="string"){var n=r;r=0;for(var t=0;t<n.length;t++)r=(r+(t+1)*(n.charCodeAt(t)%96))%2147483647}return r===0&&(r=311),r}function l(r){var n=g(r);return function(){var t=n*48271%2147483647;return n=t,t/2147483647}}var C=function r(n){var t=this;v(this,r),o(this,"seed",0),o(this,"init",function(i){t.seed=i,t.value=l(i)}),o(this,"value",l(this.seed)),this.init(n)};new C(Math.random());
