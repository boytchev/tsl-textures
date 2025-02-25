(()=>{var xa="173",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bh=0,Rl=1,Oh=2;var Cl=1,ig=2,Mn=3,Ri=0,sn=1,vi=2,Ni=0,Ji=1,Nl=2,Pl=3,Il=4,Vh=5,es=100,Gh=101,zh=102,kh=103,Hh=104,Wh=200,qh=201,Xh=202,$h=203,Qo=204,Jo=205,Yh=206,Kh=207,Zh=208,jh=209,Qh=210,sg=211,rg=212,og=213,ag=214,ya=0,va=1,Ta=2,Rs=3,Sa=4,ba=5,Ma=6,Aa=7,Dl=0,Jh=1,ed=2,Gn=0,td=1,nd=2,id=3,sd=4,cg=5,rd=6,od=7;var Ea=300,is=301,ss=302,wa=303,Ra=304,lo=306,qr=1e3,wi=1001,Xr=1002,bn=1003,ad=1004;var uo=1005;var Qn=1006,Ca=1007;var Pi=1008,cd=1008,Ti=1009,Ll=1010,Fl=1011,ar=1012,ho=1013,Ii=1014,ni=1015,ii=1016,Na=1017,Pa=1018,Fs=1020,Ul=35902,Bl=1021,Ol=1022,zn=1023,Vl=1024,Gl=1025,ws=1026,Cs=1027,zl=1028,Ia=1029,fo=1030,Da=1031;var La=1033,po=33776,mo=33777,go=33778,_o=33779,Fa=35840,Ua=35841,Ba=35842,Oa=35843,Va=36196,Ga=37492,za=37496,ka=37808,Ha=37809,Wa=37810,qa=37811,Xa=37812,$a=37813,Ya=37814,Ka=37815,Za=37816,ja=37817,Qa=37818,Ja=37819,ec=37820,tc=37821,xo=36492,kl=36494,Hl=36495,Wl=36283,nc=36284,ic=36285,sc=36286;var ea=2300,ll=2301,cl=2302,Dh=2400,Lh=2401,Fh=2402;var lg=3200,ug=3201;var yo=0,ql=1,si="",Rn="srgb",ts="srgb-linear",ta="linear",dt="srgb";var Ms=7680;var ul=519,Xl=512,rc=513,$l=514,oc=515,Yl=516,Kl=517,Zl=518,jl=519,$r=35044,cr=35048;var ld="300 es",Sn=2e3,_i=2001;var Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fm=1234567,Zo=Math.PI/180,Js=180/Math.PI;function ji(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function ud(i,e){return(i%e+e)%e}function n0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function i0(i,e,t){return i!==e?(t-i)/(e-i):0}function jo(i,e,t){return(1-t)*i+t*e}function s0(i,e,t,n){return jo(i,e,1-Math.exp(-t*n))}function r0(i,e=1){return e-Math.abs(ud(i,e*2)-e)}function o0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function a0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function c0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function l0(i,e){return i+Math.random()*(e-i)}function u0(i){return i*(.5-Math.random())}function h0(i){i!==void 0&&(Fm=i);let e=Fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d0(i){return i*Zo}function f0(i){return i*Js}function p0(i){return(i&i-1)===0&&i!==0}function m0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function g0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var vo={DEG2RAD:Zo,RAD2DEG:Js,generateUUID:ji,clamp:Qe,euclideanModulo:ud,mapLinear:n0,inverseLerp:i0,lerp:jo,damp:s0,pingpong:r0,smoothstep:o0,smootherstep:a0,randInt:c0,randFloat:l0,randFloatSpread:u0,seededRandom:h0,degToRad:d0,radToDeg:f0,isPowerOfTwo:p0,ceilPowerOfTwo:m0,floorPowerOfTwo:g0,setQuaternionFromProperEuler:_0,normalize:vt,denormalize:gi},Le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],x=s[0],g=s[3],p=s[6],A=s[1],b=s[4],S=s[7],I=s[2],w=s[5],N=s[8];return r[0]=o*x+a*A+c*I,r[3]=o*g+a*b+c*w,r[6]=o*p+a*S+c*N,r[1]=l*x+u*A+h*I,r[4]=l*g+u*b+h*w,r[7]=l*p+u*S+h*N,r[2]=d*x+m*A+_*I,r[5]=d*g+m*b+_*w,r[8]=d*p+m*S+_*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,m=l*r-o*c,_=t*h+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dh.makeScale(e,t)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dh=new ke;function Ql(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){let i=na("canvas");return i.style.display="block",i}var Um={};function Us(i){i in Um||(Um[i]=!0,console.warn(i))}function hg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function dg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Bm=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function x0(){let i={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?ta:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ts]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:Bm,fromXYZ:Om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Bm,fromXYZ:Om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}var $e=x0();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ir,hl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=na("canvas")),Ir.width=e.width,Ir.height=e.height;let n=Ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ir}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y0=0,ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fh(s[o].image)):r.push(fh(s[o]))}else r=fh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function fh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var v0=0,gn=class i extends Bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wi,s=wi,r=Qn,o=Pi,a=zn,c=Ti,l=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ji(),this.name="",this.source=new ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ea)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Ea;gn.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],_=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,S=(m+1)/2,I=(p+1)/2,w=(u+d)/4,N=(h+x)/4,L=(_+g)/4;return b>S&&b>I?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=N/n):S>I?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=L/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=N/r,s=L/r),this.set(n,s,r,t),this}let A=Math.sqrt((g-_)*(g-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(h-x)/A,this.z=(d-u)/A,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ns=class extends Bn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends ns{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},er=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var dl=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(h!==x||c!==d||l!==m||u!==_){let g=1-a,p=c*d+l*m+u*_+h*x,A=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let I=Math.sqrt(b),w=Math.atan2(I,p*A);g=Math.sin(g*w)/I,a=Math.sin(a*w)/I}let S=a*A;if(c=c*g+d*S,l=l*g+m*S,u=u*g+_*S,h=h*g+x*S,g===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*m-l*d,e[t+1]=c*_+u*d+l*h-a*m,e[t+2]=l*_+u*m+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h+d*m*_;break;case"YZX":this._x=d*u*h+l*m*_,this._y=l*m*h+d*u*_,this._z=l*u*_-d*m*h,this._w=l*u*h-d*m*_;break;case"XZY":this._x=d*u*h-l*m*_,this._y=l*m*h-d*u*_,this._z=l*u*_+d*m*h,this._w=l*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>h){let m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>h){let m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ph=new D,Vm=new Jn,Ns=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(r,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kc.copy(n.boundingBox)),kc.applyMatrix4(e.matrixWorld),this.union(kc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Hc.subVectors(this.max,qo),Dr.subVectors(e.a,qo),Lr.subVectors(e.b,qo),Fr.subVectors(e.c,qo),xs.subVectors(Lr,Dr),ys.subVectors(Fr,Lr),Ks.subVectors(Dr,Fr);let t=[0,-xs.z,xs.y,0,-ys.z,ys.y,0,-Ks.z,Ks.y,xs.z,0,-xs.x,ys.z,0,-ys.x,Ks.z,0,-Ks.x,-xs.y,xs.x,0,-ys.y,ys.x,0,-Ks.y,Ks.x,0];return!mh(t,Dr,Lr,Fr,Hc)||(t=[1,0,0,0,1,0,0,0,1],!mh(t,Dr,Lr,Fr,Hc))?!1:(Wc.crossVectors(xs,ys),t=[Wc.x,Wc.y,Wc.z],mh(t,Dr,Lr,Fr,Hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xi=[new D,new D,new D,new D,new D,new D,new D,new D],fi=new D,kc=new Ns,Dr=new D,Lr=new D,Fr=new D,xs=new D,ys=new D,Ks=new D,qo=new D,Hc=new D,Wc=new D,Zs=new D;function mh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zs.fromArray(i,r);let a=s.x*Math.abs(Zs.x)+s.y*Math.abs(Zs.y)+s.z*Math.abs(Zs.z),c=e.dot(Zs),l=t.dot(Zs),u=n.dot(Zs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var T0=new Ns,Xo=new D,gh=new D,tr=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):T0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);let t=Xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(gh)),this.expandByPoint(Xo.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$i=new D,_h=new D,qc=new D,vs=new D,xh=new D,Xc=new D,yh=new D,nr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_h.copy(e).add(t).multiplyScalar(.5),qc.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(_h);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qc),a=vs.dot(this.direction),c=-vs.dot(qc),l=vs.lengthSq(),u=Math.abs(1-o*o),h,d,m,_;if(u>0)if(h=o*c-a,d=o*a-c,_=r*u,h>=0)if(d>=-_)if(d<=_){let x=1/u;h*=x,d*=x,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_h).addScaledVector(qc,d),m}intersectSphere(e,t){$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),s=$i.dot($i)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,s,r){xh.subVectors(t,e),Xc.subVectors(n,e),yh.crossVectors(xh,Xc);let o=this.direction.dot(yh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,e);let c=a*this.direction.dot(Xc.crossVectors(vs,Xc));if(c<0)return null;let l=a*this.direction.dot(xh.cross(vs));if(l<0||c+l>o)return null;let u=-a*vs.dot(yh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class i{constructor(e,t,n,s,r,o,a,c,l,u,h,d,m,_,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,m,_,x,g)}set(e,t,n,s,r,o,a,c,l,u,h,d,m,_,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=_,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ur.setFromMatrixColumn(e,0).length(),r=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,m=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,m=c*h,_=l*u,x=l*h;t[0]=d+x*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,m=c*h,_=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,m=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=_*l-m,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+_,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,b0)}lookAt(e,t,n){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ts.crossVectors(n,Fn),Ts.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ts.crossVectors(n,Fn)),Ts.normalize(),$c.crossVectors(Fn,Ts),s[0]=Ts.x,s[4]=$c.x,s[8]=Fn.x,s[1]=Ts.y,s[5]=$c.y,s[9]=Fn.y,s[2]=Ts.z,s[6]=$c.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],x=n[6],g=n[10],p=n[14],A=n[3],b=n[7],S=n[11],I=n[15],w=s[0],N=s[4],L=s[8],M=s[12],T=s[1],F=s[5],j=s[9],X=s[13],te=s[2],ae=s[6],Q=s[10],he=s[14],K=s[3],_e=s[7],be=s[11],Ie=s[15];return r[0]=o*w+a*T+c*te+l*K,r[4]=o*N+a*F+c*ae+l*_e,r[8]=o*L+a*j+c*Q+l*be,r[12]=o*M+a*X+c*he+l*Ie,r[1]=u*w+h*T+d*te+m*K,r[5]=u*N+h*F+d*ae+m*_e,r[9]=u*L+h*j+d*Q+m*be,r[13]=u*M+h*X+d*he+m*Ie,r[2]=_*w+x*T+g*te+p*K,r[6]=_*N+x*F+g*ae+p*_e,r[10]=_*L+x*j+g*Q+p*be,r[14]=_*M+x*X+g*he+p*Ie,r[3]=A*w+b*T+S*te+I*K,r[7]=A*N+b*F+S*ae+I*_e,r[11]=A*L+b*j+S*Q+I*be,r[15]=A*M+b*X+S*he+I*Ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],x=e[7],g=e[11],p=e[15];return _*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*m-n*c*m)+x*(+t*c*m-t*l*d+r*o*d-s*o*m+s*l*u-r*c*u)+g*(+t*l*h-t*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],x=e[13],g=e[14],p=e[15],A=h*g*l-x*d*l+x*c*m-a*g*m-h*c*p+a*d*p,b=_*d*l-u*g*l-_*c*m+o*g*m+u*c*p-o*d*p,S=u*x*l-_*h*l+_*a*m-o*x*m-u*a*p+o*h*p,I=_*h*c-u*x*c-_*a*d+o*x*d+u*a*g-o*h*g,w=t*A+n*b+s*S+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/w;return e[0]=A*N,e[1]=(x*d*r-h*g*r-x*s*m+n*g*m+h*s*p-n*d*p)*N,e[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*N,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*m-n*c*m)*N,e[4]=b*N,e[5]=(u*g*r-_*d*r+_*s*m-t*g*m-u*s*p+t*d*p)*N,e[6]=(_*c*r-o*g*r-_*s*l+t*g*l+o*s*p-t*c*p)*N,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*m+t*c*m)*N,e[8]=S*N,e[9]=(_*h*r-u*x*r-_*n*m+t*x*m+u*n*p-t*h*p)*N,e[10]=(o*x*r-_*a*r+_*n*l-t*x*l-o*n*p+t*a*p)*N,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*m-t*a*m)*N,e[12]=I*N,e[13]=(u*x*s-_*h*s+_*n*d-t*x*d-u*n*g+t*h*g)*N,e[14]=(_*a*s-o*x*s-_*n*c+t*x*c+o*n*g-t*a*g)*N,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,m=r*u,_=r*h,x=o*u,g=o*h,p=a*h,A=c*l,b=c*u,S=c*h,I=n.x,w=n.y,N=n.z;return s[0]=(1-(x+p))*I,s[1]=(m+S)*I,s[2]=(_-b)*I,s[3]=0,s[4]=(m-S)*w,s[5]=(1-(d+p))*w,s[6]=(g+A)*w,s[7]=0,s[8]=(_+b)*N,s[9]=(g-A)*N,s[10]=(1-(d+x))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ur.set(s[0],s[1],s[2]).length(),o=Ur.set(s[4],s[5],s[6]).length(),a=Ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pi.copy(this);let l=1/r,u=1/o,h=1/a;return pi.elements[0]*=l,pi.elements[1]*=l,pi.elements[2]*=l,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Sn){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),m,_;if(a===Sn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_i)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Sn){let c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,m=(n+s)*u,_,x;if(a===Sn)_=(o+r)*h,x=-2*h;else if(a===_i)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ur=new D,pi=new ot,S0=new D(0,0,0),b0=new D(1,1,1),Ts=new D,$c=new D,Fn=new D,Gm=new ot,zm=new Jn,On=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zm.setFromEuler(this),this.setFromQuaternion(zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},M0=0,km=new D,Br=new Jn,Yi=new ot,Yc=new D,$o=new D,A0=new D,E0=new Jn,Hm=new D(1,0,0),Wm=new D(0,1,0),qm=new D(0,0,1),Xm={type:"added"},w0={type:"removed"},Or={type:"childadded",child:null},vh={type:"childremoved",child:null},hn=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new On,n=new Jn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new ke}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Hm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(qm,e)}translateOnAxis(e,t){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yc.copy(e):Yc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt($o,Yc,this.up):Yi.lookAt(Yc,$o,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(Yi),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xm),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xm),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,E0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};hn.DEFAULT_UP=new D(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new D,Ki=new D,Th=new D,Zi=new D,Vr=new D,Gr=new D,$m=new D,Sh=new D,bh=new D,Mh=new D,Ah=new pt,Eh=new pt,wh=new pt,As=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),Ki.subVectors(n,t),Th.subVectors(e,t);let o=mi.dot(mi),a=mi.dot(Ki),c=mi.dot(Th),l=Ki.dot(Ki),u=Ki.dot(Th),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,m=(l*c-a*u)*d,_=(o*u-a*c)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zi.x),c.addScaledVector(o,Zi.y),c.addScaledVector(a,Zi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ah.setScalar(0),Eh.setScalar(0),wh.setScalar(0),Ah.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,n),wh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ah,r.x),o.addScaledVector(Eh,r.y),o.addScaledVector(wh,r.z),o}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),Ki.subVectors(e,t),mi.cross(Ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),mi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Vr.subVectors(s,n),Gr.subVectors(r,n),Sh.subVectors(e,n);let c=Vr.dot(Sh),l=Gr.dot(Sh);if(c<=0&&l<=0)return t.copy(n);bh.subVectors(e,s);let u=Vr.dot(bh),h=Gr.dot(bh);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Vr,o);Mh.subVectors(e,r);let m=Vr.dot(Mh),_=Gr.dot(Mh);if(_>=0&&m<=_)return t.copy(r);let x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Gr,a);let g=u*_-m*h;if(g<=0&&h-u>=0&&m-_>=0)return $m.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector($m,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function Rh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=ud(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rh(o,r,e+1/3),this.g=Rh(o,r,e),this.b=Rh(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=Rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){let n=pg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return $e.fromWorkingColorSpace(mn.copy(this),e),Math.round(Qe(mn.r*255,0,255))*65536+Math.round(Qe(mn.g*255,0,255))*256+Math.round(Qe(mn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Rn){$e.fromWorkingColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(Kc);let n=jo(Ss.h,Kc.h,t),s=jo(Ss.s,Kc.s,t),r=jo(Ss.l,Kc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Be;Be.NAMES=pg;var R0=0,ei=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Ji,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=Jo,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Jo&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yr=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new D,Zc=new Le,C0=0,un=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$r,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zc.fromBufferAttribute(this,t),Zc.applyMatrix3(e),this.setXY(t,Zc.x,Zc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$r&&(e.usage=this.usage),e}};var Kr=class extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zr=class extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Yt=class extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}},N0=0,jn=new ot,Ch=new hn,zr=new D,Un=new Ns,Yo=new Ns,nn=new D,Vn=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?Zr:Kr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Un.min,Yo.min),Un.expandByPoint(nn),nn.addVectors(Un.max,Yo.max),Un.expandByPoint(nn)):(Un.expandByPoint(Yo.min),Un.expandByPoint(Yo.max))}Un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(zr.fromBufferAttribute(e,l),nn.add(zr)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new D,c[L]=new D;let l=new D,u=new D,h=new D,d=new Le,m=new Le,_=new Le,x=new D,g=new D;function p(L,M,T){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),d.fromBufferAttribute(r,L),m.fromBufferAttribute(r,M),_.fromBufferAttribute(r,T),u.sub(l),h.sub(l),m.sub(d),_.sub(d);let F=1/(m.x*_.y-_.x*m.y);isFinite(F)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(F),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(F),a[L].add(x),a[M].add(x),a[T].add(x),c[L].add(g),c[M].add(g),c[T].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,M=A.length;L<M;++L){let T=A[L],F=T.start,j=T.count;for(let X=F,te=F+j;X<te;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let b=new D,S=new D,I=new D,w=new D;function N(L){I.fromBufferAttribute(s,L),w.copy(I);let M=a[L];b.copy(M),b.sub(I.multiplyScalar(I.dot(M))).normalize(),S.crossVectors(w,M);let F=S.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,F)}for(let L=0,M=A.length;L<M;++L){let T=A[L],F=T.start,j=T.count;for(let X=F,te=F+j;X<te;X+=3)N(e.getX(X+0)),N(e.getX(X+1)),N(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){let _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),m=0,_=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*u;for(let p=0;p<u;p++)d[_++]=l[m++]}return new un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ym=new ot,js=new nr,jc=new tr,Km=new D,Qc=new D,Jc=new D,el=new D,Nh=new D,tl=new D,Zm=new D,nl=new D,_n=class extends hn{constructor(e=new Vn,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){tl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Nh.fromBufferAttribute(h,e),o?tl.addScaledVector(Nh,u):tl.addScaledVector(Nh.sub(t),u))}t.add(tl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jc.copy(n.boundingSphere),jc.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(jc.containsPoint(js.origin)===!1&&(js.intersectSphere(jc,Km)===null||js.origin.distanceToSquared(Km)>(e.far-e.near)**2))&&(Ym.copy(r).invert(),js.copy(e.ray).applyMatrix4(Ym),!(n.boundingBox!==null&&js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let g=d[_],p=o[g.materialIndex],A=Math.max(g.start,m.start),b=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=A,I=b;S<I;S+=3){let w=a.getX(S),N=a.getX(S+1),L=a.getX(S+2);s=il(this,p,e,n,l,u,h,w,N,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){let A=a.getX(g),b=a.getX(g+1),S=a.getX(g+2);s=il(this,o,e,n,l,u,h,A,b,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let g=d[_],p=o[g.materialIndex],A=Math.max(g.start,m.start),b=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let S=A,I=b;S<I;S+=3){let w=S,N=S+1,L=S+2;s=il(this,p,e,n,l,u,h,w,N,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){let A=g,b=g+1,S=g+2;s=il(this,o,e,n,l,u,h,A,b,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function P0(i,e,t,n,s,r,o,a){let c;if(e.side===sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ri,a),c===null)return null;nl.copy(a),nl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(nl);return l<t.near||l>t.far?null:{distance:l,point:nl.clone(),object:i}}function il(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Qc),i.getVertexPosition(c,Jc),i.getVertexPosition(l,el);let u=P0(i,e,t,n,Qc,Jc,el,Zm);if(u){let h=new D;As.getBarycoord(Zm,Qc,Jc,el,h),s&&(u.uv=As.getInterpolatedAttribute(s,a,c,l,h,new Le)),r&&(u.uv1=As.getInterpolatedAttribute(r,a,c,l,h,new Le)),o&&(u.normal=As.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};As.getNormal(Qc,Jc,el,d.normal),u.face=d,u.barycoord=h}return u}var ir=class i extends Vn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(h,2));function _(x,g,p,A,b,S,I,w,N,L,M){let T=S/N,F=I/L,j=S/2,X=I/2,te=w/2,ae=N+1,Q=L+1,he=0,K=0,_e=new D;for(let be=0;be<Q;be++){let Ie=be*F-X;for(let Je=0;Je<ae;Je++){let bt=Je*T-j;_e[x]=bt*A,_e[g]=Ie*b,_e[p]=te,l.push(_e.x,_e.y,_e.z),_e[x]=0,_e[g]=0,_e[p]=w>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push(Je/N),h.push(1-be/L),he+=1}}for(let be=0;be<L;be++)for(let Ie=0;Ie<N;Ie++){let Je=d+Ie+ae*be,bt=d+Ie+ae*(be+1),ne=d+(Ie+1)+ae*(be+1),de=d+(Ie+1)+ae*be;c.push(Je,bt,de),c.push(bt,ne,de),K+=6}a.addGroup(m,K,M),m+=K,d+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function lr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=lr(i[t]);for(let s in n)e[s]=n[s]}return e}function I0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var mg={clone:lr,merge:xn},D0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xi=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=I0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},jr=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bs=new D,jm=new Le,Qm=new Le,ln=class extends jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,t){return this.getViewBounds(e,jm,Qm),t.subVectors(Qm,jm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kr=-90,Hr=1,ra=class extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(kr,Hr,e,t);s.layers=this.layers,this.add(s);let r=new ln(kr,Hr,e,t);r.layers=this.layers,this.add(r);let o=new ln(kr,Hr,e,t);o.layers=this.layers,this.add(o);let a=new ln(kr,Hr,e,t);a.layers=this.layers,this.add(a);let c=new ln(kr,Hr,e,t);c.layers=this.layers,this.add(c);let l=new ln(kr,Hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Qr=class extends gn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:is,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oa=class extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ir(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ni});r.uniforms.tEquirect.value=t;let o=new _n(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Qn),new ra(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Es=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},F0={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Jr=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$r,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new D,aa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var rr=class extends un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var Ph=new D,U0=new D,B0=new ke,Cn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ph.subVectors(n,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ph),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||B0.getNormalMatrix(e),s=this.coplanarPoint(Ph).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qs=new tr,sl=new D,to=class{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],_=s[9],x=s[10],g=s[11],p=s[12],A=s[13],b=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,g-m,S-p).normalize(),n[1].setComponents(c+r,d+l,g+m,S+p).normalize(),n[2].setComponents(c+o,d+u,g+_,S+A).normalize(),n[3].setComponents(c-o,d-u,g-_,S-A).normalize(),n[4].setComponents(c-a,d-h,g-x,S-b).normalize(),t===Sn)n[5].setComponents(c+a,d+h,g+x,S+b).normalize();else if(t===_i)n[5].setComponents(a,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(sl.x=s.normal.x>0?e.max.x:e.min.x,sl.y=s.normal.y>0?e.max.y:e.min.y,sl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var no=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fl=new D,pl=new D,Jm=new ot,Ko=new nr,rl=new tr,Ih=new D,eg=new D,ml=class extends hn{constructor(e=new Vn,t=new no){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fl.fromBufferAttribute(t,s-1),pl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fl.distanceTo(pl);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(s),rl.radius+=r,e.ray.intersectsSphere(rl)===!1)return;Jm.copy(s).invert(),Ko.copy(e.ray).applyMatrix4(Jm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=m,g=_-1;x<g;x+=l){let p=u.getX(x),A=u.getX(x+1),b=ol(this,e,Ko,c,p,A,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(_-1),g=u.getX(m),p=ol(this,e,Ko,c,x,g,_-1);p&&t.push(p)}}else{let m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=m,g=_-1;x<g;x+=l){let p=ol(this,e,Ko,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=ol(this,e,Ko,c,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ol(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(fl.fromBufferAttribute(a,s),pl.fromBufferAttribute(a,r),t.distanceSqToSegment(fl,pl,Ih,eg)>n)return;Ih.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ih);if(!(l<e.near||l>e.far))return{distance:l,point:eg.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var tg=new D,ng=new D,gl=class extends ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tg.fromBufferAttribute(t,s),ng.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tg.distanceTo(ng);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var io=class extends gn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=bn,this.minFilter=bn,this.generateMipmaps=!1,this.needsUpdate=!0}};var yi=class extends gn{constructor(e,t,n,s,r,o,a,c,l,u=ws){if(u!==ws&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ws&&(n=Ii),n===void 0&&u===Cs&&(n=Fs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var _l=class i extends Vn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let b=new D,S=new D,I=new D;for(let w=0;w<t.length;w+=3)m(t[w+0],b),m(t[w+1],S),m(t[w+2],I),c(b,S,I,A)}function c(A,b,S,I){let w=I+1,N=[];for(let L=0;L<=w;L++){N[L]=[];let M=A.clone().lerp(S,L/w),T=b.clone().lerp(S,L/w),F=w-L;for(let j=0;j<=F;j++)j===0&&L===w?N[L][j]=M:N[L][j]=M.clone().lerp(T,j/F)}for(let L=0;L<w;L++)for(let M=0;M<2*(w-L)-1;M++){let T=Math.floor(M/2);M%2===0?(d(N[L][T+1]),d(N[L+1][T]),d(N[L][T])):(d(N[L][T+1]),d(N[L+1][T+1]),d(N[L+1][T]))}}function l(A){let b=new D;for(let S=0;S<r.length;S+=3)b.x=r[S+0],b.y=r[S+1],b.z=r[S+2],b.normalize().multiplyScalar(A),r[S+0]=b.x,r[S+1]=b.y,r[S+2]=b.z}function u(){let A=new D;for(let b=0;b<r.length;b+=3){A.x=r[b+0],A.y=r[b+1],A.z=r[b+2];let S=g(A)/2/Math.PI+.5,I=p(A)/Math.PI+.5;o.push(S,1-I)}_(),h()}function h(){for(let A=0;A<o.length;A+=6){let b=o[A+0],S=o[A+2],I=o[A+4],w=Math.max(b,S,I),N=Math.min(b,S,I);w>.9&&N<.1&&(b<.2&&(o[A+0]+=1),S<.2&&(o[A+2]+=1),I<.2&&(o[A+4]+=1))}}function d(A){r.push(A.x,A.y,A.z)}function m(A,b){let S=A*3;b.x=e[S+0],b.y=e[S+1],b.z=e[S+2]}function _(){let A=new D,b=new D,S=new D,I=new D,w=new Le,N=new Le,L=new Le;for(let M=0,T=0;M<r.length;M+=9,T+=6){A.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),w.set(o[T+0],o[T+1]),N.set(o[T+2],o[T+3]),L.set(o[T+4],o[T+5]),I.copy(A).add(b).add(S).divideScalar(3);let F=g(I);x(w,T+0,A,F),x(N,T+2,b,F),x(L,T+4,S,F)}}function x(A,b,S,I){I<0&&A.x===1&&(o[b]=A.x-1),S.x===0&&S.z===0&&(o[b]=I/2/Math.PI+.5)}function g(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ca=class i extends _l{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var la=class i extends Vn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,m=[],_=[],x=[],g=[];for(let p=0;p<u;p++){let A=p*d-o;for(let b=0;b<l;b++){let S=b*h-r;_.push(S,-A,0),x.push(0,0,1),g.push(b/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<a;A++){let b=A+l*p,S=A+l*(p+1),I=A+1+l*(p+1),w=A+1+l*p;m.push(b,S,w),m.push(S,I,w)}this.setIndex(m),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var so=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var xl=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function al(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function O0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var or=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vl=class extends or{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lh:r=e,a=2*t-n;break;case Fh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Lh:o=e,c=2*n-t;break;case Fh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(n-t)/(s-t),x=_*_,g=x*_,p=-d*g+2*d*x-d*_,A=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*_+1,b=(-1-m)*g+(1.5+m)*x+.5*_,S=m*g-m*x;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+A*o[l+I]+b*o[c+I]+S*o[h+I];return r}},Tl=class extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Sl=class extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=al(t,this.TimeBufferType),this.values=al(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:al(e.times,Array),values:al(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case ll:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&O0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,d=h-n,m=h+n;for(let _=0;_!==n;++_){let x=t[h+_];if(x!==t[d+_]||x!==t[m+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=ll;var Ps=class extends ti{constructor(e,t,n){super(e,t,n)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=ea;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends ti{};bl.prototype.ValueTypeName="color";var Ml=class extends ti{};Ml.prototype.ValueTypeName="number";var Al=class extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Jn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ua=class extends ti{InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends ti{constructor(e,t,n){super(e,t,n)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=ea;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends ti{};El.prototype.ValueTypeName="vector";var wl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let m=l[h],_=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}},gg=new wl,ha=class{constructor(e){this.manager=e!==void 0?e:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var da=class extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ro=class extends da{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}};var oo=class extends jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ao=class extends da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var fa=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var fd="\\[\\]\\.:\\/",V0=new RegExp("["+fd+"]","g"),pd="[^"+fd+"]",G0="[^"+fd.replace("\\.","")+"]",z0=/((?:WC+[\/:])*)/.source.replace("WC",pd),k0=/(WCOD+)?/.source.replace("WCOD",G0),H0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pd),W0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pd),q0=new RegExp("^"+z0+k0+H0+W0+"$"),X0=["material","materials","bones","map"],Uh=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(V0,"")}static parseTrackName(e){let t=q0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);X0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Uh;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sI=new Float32Array(1);var pa=class extends eo{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var co=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ma=class i{constructor(e,t,n,s){i.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var ga=class extends gl{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Vn;s.setAttribute("position",new Yt(t,3)),s.setAttribute("color",new Yt(n,3));let r=new no({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new Be,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var _a=class extends Bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function md(i,e,t,n){let s=$0(n);switch(t){case Bl:return i*e;case Vl:return i*e;case Gl:return i*e*2;case zl:return i*e/s.components*s.byteLength;case Ia:return i*e/s.components*s.byteLength;case fo:return i*e*2/s.components*s.byteLength;case Da:return i*e*2/s.components*s.byteLength;case Ol:return i*e*3/s.components*s.byteLength;case zn:return i*e*4/s.components*s.byteLength;case La:return i*e*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Oa:return Math.max(i,16)*Math.max(e,8)/4;case Fa:case Ba:return Math.max(i,8)*Math.max(e,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xo:case kl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wl:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ic:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $0(i){switch(i){case Ti:case Ll:return{byteLength:1,components:1};case ar:case Fl:case ii:return{byteLength:2,components:1};case Na:case Pa:return{byteLength:2,components:4};case Ii:case ho:case ni:return{byteLength:4,components:1};case Ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);function Gg(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function PT(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){let _=h[d],x=h[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){let x=h[m];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var IT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cS="gl_FragColor = linearToOutputTexel( gl_FragColor );",lS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ES=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ob=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ib=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ob=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:IT,alphahash_pars_fragment:DT,alphamap_fragment:LT,alphamap_pars_fragment:FT,alphatest_fragment:UT,alphatest_pars_fragment:BT,aomap_fragment:OT,aomap_pars_fragment:VT,batching_pars_vertex:GT,batching_vertex:zT,begin_vertex:kT,beginnormal_vertex:HT,bsdfs:WT,iridescence_fragment:qT,bumpmap_pars_fragment:XT,clipping_planes_fragment:$T,clipping_planes_pars_fragment:YT,clipping_planes_pars_vertex:KT,clipping_planes_vertex:ZT,color_fragment:jT,color_pars_fragment:QT,color_pars_vertex:JT,color_vertex:eS,common:tS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:sS,displacementmap_vertex:rS,emissivemap_fragment:oS,emissivemap_pars_fragment:aS,colorspace_fragment:cS,colorspace_pars_fragment:lS,envmap_fragment:uS,envmap_common_pars_fragment:hS,envmap_pars_fragment:dS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:MS,envmap_vertex:pS,fog_vertex:mS,fog_pars_vertex:gS,fog_fragment:_S,fog_pars_fragment:xS,gradientmap_pars_fragment:yS,lightmap_pars_fragment:vS,lights_lambert_fragment:TS,lights_lambert_pars_fragment:SS,lights_pars_begin:bS,lights_toon_fragment:AS,lights_toon_pars_fragment:ES,lights_phong_fragment:wS,lights_phong_pars_fragment:RS,lights_physical_fragment:CS,lights_physical_pars_fragment:NS,lights_fragment_begin:PS,lights_fragment_maps:IS,lights_fragment_end:DS,logdepthbuf_fragment:LS,logdepthbuf_pars_fragment:FS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:BS,map_fragment:OS,map_pars_fragment:VS,map_particle_fragment:GS,map_particle_pars_fragment:zS,metalnessmap_fragment:kS,metalnessmap_pars_fragment:HS,morphinstance_vertex:WS,morphcolor_vertex:qS,morphnormal_vertex:XS,morphtarget_pars_vertex:$S,morphtarget_vertex:YS,normal_fragment_begin:KS,normal_fragment_maps:ZS,normal_pars_fragment:jS,normal_pars_vertex:QS,normal_vertex:JS,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:tb,clearcoat_normal_fragment_maps:nb,clearcoat_pars_fragment:ib,iridescence_pars_fragment:sb,opaque_fragment:rb,packing:ob,premultiplied_alpha_fragment:ab,project_vertex:cb,dithering_fragment:lb,dithering_pars_fragment:ub,roughnessmap_fragment:hb,roughnessmap_pars_fragment:db,shadowmap_pars_fragment:fb,shadowmap_pars_vertex:pb,shadowmap_vertex:mb,shadowmask_pars_fragment:gb,skinbase_vertex:_b,skinning_pars_vertex:xb,skinning_vertex:yb,skinnormal_vertex:vb,specularmap_fragment:Tb,specularmap_pars_fragment:Sb,tonemapping_fragment:bb,tonemapping_pars_fragment:Mb,transmission_fragment:Ab,transmission_pars_fragment:Eb,uv_pars_fragment:wb,uv_pars_vertex:Rb,uv_vertex:Cb,worldpos_vertex:Nb,background_vert:Pb,background_frag:Ib,backgroundCube_vert:Db,backgroundCube_frag:Lb,cube_vert:Fb,cube_frag:Ub,depth_vert:Bb,depth_frag:Ob,distanceRGBA_vert:Vb,distanceRGBA_frag:Gb,equirect_vert:zb,equirect_frag:kb,linedashed_vert:Hb,linedashed_frag:Wb,meshbasic_vert:qb,meshbasic_frag:Xb,meshlambert_vert:$b,meshlambert_frag:Yb,meshmatcap_vert:Kb,meshmatcap_frag:Zb,meshnormal_vert:jb,meshnormal_frag:Qb,meshphong_vert:Jb,meshphong_frag:eM,meshphysical_vert:tM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:sM,points_vert:rM,points_frag:oM,shadow_vert:aM,shadow_frag:cM,sprite_vert:lM,sprite_frag:uM},pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Di={basic:{uniforms:xn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:xn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:xn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:xn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:xn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:xn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:xn([pe.points,pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:xn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:xn([pe.common,pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:xn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:xn([pe.sprite,pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:xn([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:xn([pe.lights,pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Di.physical={uniforms:xn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Jl={r:0,b:0,g:0},ur=new On,hM=new ot;function dM(i,e,t,n,s,r,o){let a=new Be(0),c=r===!0?0:1,l,u,h=null,d=0,m=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function x(b){let S=!1,I=_(b);I===null?p(a,c):I&&I.isColor&&(p(I,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,S){let I=_(S);I&&(I.isCubeTexture||I.mapping===lo)?(u===void 0&&(u=new _n(new ir(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:lr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,N,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ur.copy(S.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(ur)),u.material.toneMapped=$e.getTransfer(I.colorSpace)!==dt,(h!==I||d!==I.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new _n(new la(2,2),new xi({name:"BackgroundMaterial",uniforms:lr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=$e.getTransfer(I.colorSpace)!==dt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,d=I.version,m=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,S){b.getRGB(Jl,dd(i)),n.buffers.color.setClear(Jl.r,Jl.g,Jl.b,S,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:x,addToRenderList:g,dispose:A}}function fM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(T,F,j,X,te){let ae=!1,Q=h(X,j,F);r!==Q&&(r=Q,l(r.object)),ae=m(T,X,j,te),ae&&_(T,X,j,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,S(T,F,j,X),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function h(T,F,j){let X=j.wireframe===!0,te=n[T.id];te===void 0&&(te={},n[T.id]=te);let ae=te[F.id];ae===void 0&&(ae={},te[F.id]=ae);let Q=ae[X];return Q===void 0&&(Q=d(c()),ae[X]=Q),Q}function d(T){let F=[],j=[],X=[];for(let te=0;te<t;te++)F[te]=0,j[te]=0,X[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:X,object:T,attributes:{},index:null}}function m(T,F,j,X){let te=r.attributes,ae=F.attributes,Q=0,he=j.getAttributes();for(let K in he)if(he[K].location>=0){let be=te[K],Ie=ae[K];if(Ie===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(Ie=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(Ie=T.instanceColor)),be===void 0||be.attribute!==Ie||Ie&&be.data!==Ie.data)return!0;Q++}return r.attributesNum!==Q||r.index!==X}function _(T,F,j,X){let te={},ae=F.attributes,Q=0,he=j.getAttributes();for(let K in he)if(he[K].location>=0){let be=ae[K];be===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(be=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(be=T.instanceColor));let Ie={};Ie.attribute=be,be&&be.data&&(Ie.data=be.data),te[K]=Ie,Q++}r.attributes=te,r.attributesNum=Q,r.index=X}function x(){let T=r.newAttributes;for(let F=0,j=T.length;F<j;F++)T[F]=0}function g(T){p(T,0)}function p(T,F){let j=r.newAttributes,X=r.enabledAttributes,te=r.attributeDivisors;j[T]=1,X[T]===0&&(i.enableVertexAttribArray(T),X[T]=1),te[T]!==F&&(i.vertexAttribDivisor(T,F),te[T]=F)}function A(){let T=r.newAttributes,F=r.enabledAttributes;for(let j=0,X=F.length;j<X;j++)F[j]!==T[j]&&(i.disableVertexAttribArray(j),F[j]=0)}function b(T,F,j,X,te,ae,Q){Q===!0?i.vertexAttribIPointer(T,F,j,te,ae):i.vertexAttribPointer(T,F,j,X,te,ae)}function S(T,F,j,X){x();let te=X.attributes,ae=j.getAttributes(),Q=F.defaultAttributeValues;for(let he in ae){let K=ae[he];if(K.location>=0){let _e=te[he];if(_e===void 0&&(he==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),he==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor)),_e!==void 0){let be=_e.normalized,Ie=_e.itemSize,Je=e.get(_e);if(Je===void 0)continue;let bt=Je.buffer,ne=Je.type,de=Je.bytesPerElement,Re=ne===i.INT||ne===i.UNSIGNED_INT||_e.gpuType===ho;if(_e.isInterleavedBufferAttribute){let xe=_e.data,Ve=xe.stride,ft=_e.offset;if(xe.isInstancedInterleavedBuffer){for(let ze=0;ze<K.locationSize;ze++)p(K.location+ze,xe.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<K.locationSize;ze++)g(K.location+ze);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let ze=0;ze<K.locationSize;ze++)b(K.location+ze,Ie/K.locationSize,ne,be,Ve*de,(ft+Ie/K.locationSize*ze)*de,Re)}else{if(_e.isInstancedBufferAttribute){for(let xe=0;xe<K.locationSize;xe++)p(K.location+xe,_e.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let xe=0;xe<K.locationSize;xe++)g(K.location+xe);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let xe=0;xe<K.locationSize;xe++)b(K.location+xe,Ie/K.locationSize,ne,be,Ie*de,Ie/K.locationSize*xe*de,Re)}}else if(Q!==void 0){let be=Q[he];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(K.location,be);break;case 3:i.vertexAttrib3fv(K.location,be);break;case 4:i.vertexAttrib4fv(K.location,be);break;default:i.vertexAttrib1fv(K.location,be)}}}}A()}function I(){L();for(let T in n){let F=n[T];for(let j in F){let X=F[j];for(let te in X)u(X[te].object),delete X[te];delete F[j]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;let F=n[T.id];for(let j in F){let X=F[j];for(let te in X)u(X[te].object),delete X[te];delete F[j]}delete n[T.id]}function N(T){for(let F in n){let j=n[F];if(j[T.id]===void 0)continue;let X=j[T.id];for(let te in X)u(X[te].object),delete X[te];delete j[T.id]}}function L(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:g,disableUnusedAttributes:A}}function pM(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,n,1)}function c(l,u,h,d){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function mM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==zn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let L=N===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Ti&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ni&&!L)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:I,maxSamples:w}}function gM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Cn,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let _=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||_===null||_.length===0||r&&!g)r?u(null):l();else{let A=r?0:n,b=A*4,S=p.clippingState||null;c.value=S,S=u(_,d,b,m);for(let I=0;I!==b;++I)S[I]=t[I];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,_){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,_!==!0||g===null){let p=m+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,S=m;b!==x;++b,S+=4)o.copy(h[b]).applyMatrix4(A,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function _M(i){let e=new WeakMap;function t(o,a){return a===wa?o.mapping=is:a===Ra&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wa||a===Ra)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new oa(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var So=4,_g=[.125,.215,.35,.446,.526,.582],fr=20,gd=new oo,xg=new Be,_d=null,xd=0,yd=0,vd=!1,dr=(1+Math.sqrt(5))/2,To=1/dr,yg=[new D(-dr,To,0),new D(dr,To,0),new D(-To,0,dr),new D(To,0,dr),new D(0,dr,-To),new D(0,dr,To),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],nu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_d=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,xd,yd),this._renderer.xr.enabled=vd,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:ii,format:zn,colorSpace:ts,depthBuffer:!1},s=vg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(r)),this._blurMaterial=yM(r,e,t)}return s}_compileMaterial(e){let t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,gd)}_sceneToCubeUV(e,t,n,s){let a=new ln(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xg),u.toneMapping=Gn,u.autoClear=!1;let m=new Yr({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new _n(new ir,m),x=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,x=!0):(m.color.copy(xg),x=!0);for(let p=0;p<6;p++){let A=p%3;A===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):A===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let b=this._cubeSize;eu(s,A*b,p>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===is||e.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;eu(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,gd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yg[(s-r-1)%yg.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new _n(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*fr-1),x=r/_,g=isFinite(r)?1+Math.floor(u*x):fr;g>fr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fr}`);let p=[],A=0;for(let N=0;N<fr;++N){let L=N/x,M=Math.exp(-L*L/2);p.push(M),N===0?A+=M:N<g&&(A+=2*M)}for(let N=0;N<p.length;N++)p[N]=p[N]/A;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;let S=this._sizeLods[s],I=3*S*(s>b-So?s-b+So:0),w=4*(this._cubeSize-S);eu(t,I,w,3*S,2*S),c.setRenderTarget(t),c.render(h,gd)}};function xM(i){let e=[],t=[],n=[],s=i,r=i-So+1+_g.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-So?c=_g[o-i+So-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,x=3,g=2,p=1,A=new Float32Array(x*_*m),b=new Float32Array(g*_*m),S=new Float32Array(p*_*m);for(let w=0;w<m;w++){let N=w%3*2/3-1,L=w>2?0:-1,M=[N,L,0,N+2/3,L,0,N+2/3,L+1,0,N,L,0,N+2/3,L+1,0,N,L+1,0];A.set(M,x*_*w),b.set(d,g*_*w);let T=[w,w,w,w,w,w];S.set(T,p*_*w)}let I=new Vn;I.setAttribute("position",new un(A,x)),I.setAttribute("uv",new un(b,g)),I.setAttribute("faceIndex",new un(S,p)),e.push(I),s>So&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vg(i,e,t){let n=new Ci(i,e,t);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eu(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function yM(i,e,t){let n=new Float32Array(fr),s=new D(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Tg(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Sg(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===wa||c===Ra,u=c===is||c===ss;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new nu(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let m=a.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new nu(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function TM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function SM(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(h){let d=[],m=h.index,_=h.attributes.position,x=0;if(m!==null){let A=m.array;x=m.version;for(let b=0,S=A.length;b<S;b+=3){let I=A[b+0],w=A[b+1],N=A[b+2];d.push(I,w,w,N,N,I)}}else if(_!==void 0){let A=_.array;x=_.version;for(let b=0,S=A.length/3-1;b<S;b+=3){let I=b+0,w=b+1,N=b+2;d.push(I,w,w,N,N,I)}}else return;let g=new(Ql(d)?Zr:Kr)(d,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function bM(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*o),t.update(m,n,1)}function l(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,d*o,_),t.update(m,n,_))}function u(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];t.update(g,n,1)}function h(d,m,_,x){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,x,0,_);let p=0;for(let A=0;A<_;A++)p+=m[A]*x[A];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function MM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function AM(i,e,t){let n=new WeakMap,s=new pt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],b=0;m===!0&&(b=1),_===!0&&(b=2),x===!0&&(b=3);let S=a.attributes.position.count*b,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*I*4*h),N=new er(w,S,I,h);N.type=ni,N.needsUpdate=!0;let L=b*4;for(let T=0;T<h;T++){let F=g[T],j=p[T],X=A[T],te=S*I*4*T;for(let ae=0;ae<F.count;ae++){let Q=ae*L;m===!0&&(s.fromBufferAttribute(F,ae),w[te+Q+0]=s.x,w[te+Q+1]=s.y,w[te+Q+2]=s.z,w[te+Q+3]=0),_===!0&&(s.fromBufferAttribute(j,ae),w[te+Q+4]=s.x,w[te+Q+5]=s.y,w[te+Q+6]=s.z,w[te+Q+7]=0),x===!0&&(s.fromBufferAttribute(X,ae),w[te+Q+8]=s.x,w[te+Q+9]=s.y,w[te+Q+10]=s.z,w[te+Q+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:N,size:new Le(S,I)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];let _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function EM(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var zg=new gn,bg=new yi(1,1),kg=new er,Hg=new dl,Wg=new Qr,Mg=[],Ag=[],Eg=new Float32Array(16),wg=new Float32Array(9),Rg=new Float32Array(4);function Mo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Mg[s];if(r===void 0&&(r=new Float32Array(s),Mg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function su(i,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function RM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function CM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function NM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function PM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;Rg.set(n),i.uniformMatrix2fv(this.addr,!1,Rg),Qt(t,n)}}function IM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;wg.set(n),i.uniformMatrix3fv(this.addr,!1,wg),Qt(t,n)}}function DM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;Eg.set(n),i.uniformMatrix4fv(this.addr,!1,Eg),Qt(t,n)}}function LM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function FM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function UM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function BM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function OM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function VM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function GM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function zM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function kM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bg.compareFunction=oc,r=bg):r=zg,t.setTexture2D(e||r,s)}function HM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hg,s)}function WM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wg,s)}function qM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kg,s)}function XM(i){switch(i){case 5126:return wM;case 35664:return RM;case 35665:return CM;case 35666:return NM;case 35674:return PM;case 35675:return IM;case 35676:return DM;case 5124:case 35670:return LM;case 35667:case 35671:return FM;case 35668:case 35672:return UM;case 35669:case 35673:return BM;case 5125:return OM;case 36294:return VM;case 36295:return GM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return qM}}function $M(i,e){i.uniform1fv(this.addr,e)}function YM(i,e){let t=Mo(e,this.size,2);i.uniform2fv(this.addr,t)}function KM(i,e){let t=Mo(e,this.size,3);i.uniform3fv(this.addr,t)}function ZM(i,e){let t=Mo(e,this.size,4);i.uniform4fv(this.addr,t)}function jM(i,e){let t=Mo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function QM(i,e){let t=Mo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function JM(i,e){let t=Mo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eA(i,e){i.uniform1iv(this.addr,e)}function tA(i,e){i.uniform2iv(this.addr,e)}function nA(i,e){i.uniform3iv(this.addr,e)}function iA(i,e){i.uniform4iv(this.addr,e)}function sA(i,e){i.uniform1uiv(this.addr,e)}function rA(i,e){i.uniform2uiv(this.addr,e)}function oA(i,e){i.uniform3uiv(this.addr,e)}function aA(i,e){i.uniform4uiv(this.addr,e)}function cA(i,e,t){let n=this.cache,s=e.length,r=su(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zg,r[o])}function lA(i,e,t){let n=this.cache,s=e.length,r=su(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hg,r[o])}function uA(i,e,t){let n=this.cache,s=e.length,r=su(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wg,r[o])}function hA(i,e,t){let n=this.cache,s=e.length,r=su(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kg,r[o])}function dA(i){switch(i){case 5126:return $M;case 35664:return YM;case 35665:return KM;case 35666:return ZM;case 35674:return jM;case 35675:return QM;case 35676:return JM;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return sA;case 36294:return rA;case 36295:return oA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return hA}}var Sd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=XM(t.type)}},bd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dA(t.type)}},Md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Td=/(\w+)(\])?(\[|\.)?/g;function Cg(i,e){i.seq.push(e),i.map[e.id]=e}function fA(i,e,t){let n=i.name,s=n.length;for(Td.lastIndex=0;;){let r=Td.exec(n),o=Td.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Cg(t,l===void 0?new Sd(a,i,e):new bd(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Md(a),Cg(t,h)),t=h}}}var bo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fA(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ng(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var pA=37297,mA=0;function gA(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Pg=new ke;function _A(i){$e._getMatrix(Pg,$e.workingColorSpace,i);let e=`mat3( ${Pg.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ig(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gA(i.getShaderSource(e),o)}else return s}function xA(i,e){let t=_A(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yA(i,e){let t;switch(e){case td:t="Linear";break;case nd:t="Reinhard";break;case id:t="Cineon";break;case sd:t="ACESFilmic";break;case rd:t="AgX";break;case od:t="Neutral";break;case cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tu=new D;function vA(){$e.getLuminanceCoefficients(tu);let i=tu.x.toFixed(4),e=tu.y.toFixed(4),t=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ac).join(`
`)}function SA(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bA(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ac(i){return i!==""}function Dg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(i){return i.replace(MA,EA)}var AA=new Map;function EA(i,e){let t=je[e];if(t===void 0){let n=AA.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ad(t)}var wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(i){return i.replace(wA,RA)}function RA(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ug(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function NA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function IA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dl:e="ENVMAP_BLENDING_MULTIPLY";break;case Jh:e="ENVMAP_BLENDING_MIX";break;case ed:e="ENVMAP_BLENDING_ADD";break}return e}function DA(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function LA(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=CA(t),l=NA(t),u=PA(t),h=IA(t),d=DA(t),m=TA(t),_=SA(r),x=s.createProgram(),g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ac).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ac).join(`
`),p.length>0&&(p+=`
`)):(g=[Ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ac).join(`
`),p=[Ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?je.tonemapping_pars_fragment:"",t.toneMapping!==Gn?yA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,xA("linearToOutputTexel",t.outputColorSpace),vA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ac).join(`
`)),o=Ad(o),o=Dg(o,t),o=Lg(o,t),a=Ad(a),a=Dg(a,t),a=Lg(a,t),o=Fg(o),a=Fg(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=A+g+o,S=A+p+a,I=Ng(s,s.VERTEX_SHADER,b),w=Ng(s,s.FRAGMENT_SHADER,S);s.attachShader(x,I),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function N(F){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(x).trim(),X=s.getShaderInfoLog(I).trim(),te=s.getShaderInfoLog(w).trim(),ae=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,w);else{let he=Ig(s,I,"vertex"),K=Ig(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+j+`
`+he+`
`+K)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(X===""||te==="")&&(Q=!1);Q&&(F.diagnostics={runnable:ae,programLog:j,vertexShader:{log:X,prefix:g},fragmentShader:{log:te,prefix:p}})}s.deleteShader(I),s.deleteShader(w),L=new bo(s,x),M=bA(s,x)}let L;this.getUniforms=function(){return L===void 0&&N(this),L};let M;this.getAttributes=function(){return M===void 0&&N(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(x,pA)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=w,this}var FA=0,Ed=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wd(e),t.set(e,n)),n}},wd=class{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}};function UA(i,e,t,n,s,r,o){let a=new sa,c=new Ed,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,T,F,j,X){let te=j.fog,ae=X.geometry,Q=M.isMeshStandardMaterial?j.environment:null,he=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),K=he&&he.mapping===lo?he.image.height:null,_e=_[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let be=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ie=be!==void 0?be.length:0,Je=0;ae.morphAttributes.position!==void 0&&(Je=1),ae.morphAttributes.normal!==void 0&&(Je=2),ae.morphAttributes.color!==void 0&&(Je=3);let bt,ne,de,Re;if(_e){let yt=Di[_e];bt=yt.vertexShader,ne=yt.fragmentShader}else bt=M.vertexShader,ne=M.fragmentShader,c.update(M),de=c.getVertexShaderID(M),Re=c.getFragmentShaderID(M);let xe=i.getRenderTarget(),Ve=i.state.buffers.depth.getReversed(),ft=X.isInstancedMesh===!0,ze=X.isBatchedMesh===!0,Ot=!!M.map,Pt=!!M.matcap,nt=!!he,P=!!M.aoMap,Yn=!!M.lightMap,it=!!M.bumpMap,st=!!M.normalMap,De=!!M.displacementMap,Et=!!M.emissiveMap,Pe=!!M.metalnessMap,E=!!M.roughnessMap,y=M.anisotropy>0,k=M.clearcoat>0,ie=M.dispersion>0,re=M.iridescence>0,ee=M.sheen>0,Ne=M.transmission>0,ye=y&&!!M.anisotropyMap,Me=k&&!!M.clearcoatMap,ct=k&&!!M.clearcoatNormalMap,ue=k&&!!M.clearcoatRoughnessMap,Ae=re&&!!M.iridescenceMap,Oe=re&&!!M.iridescenceThicknessMap,We=ee&&!!M.sheenColorMap,Ee=ee&&!!M.sheenRoughnessMap,rt=!!M.specularMap,Ze=!!M.specularColorMap,Mt=!!M.specularIntensityMap,U=Ne&&!!M.transmissionMap,me=Ne&&!!M.thicknessMap,$=!!M.gradientMap,se=!!M.alphaMap,Te=M.alphaTest>0,ve=!!M.alphaHash,Ye=!!M.extensions,Lt=Gn;M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let fn={shaderID:_e,shaderType:M.type,shaderName:M.name,vertexShader:bt,fragmentShader:ne,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ze,batchingColor:ze&&X._colorsTexture!==null,instancing:ft,instancingColor:ft&&X.instanceColor!==null,instancingMorph:ft&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ts,alphaToCoverage:!!M.alphaToCoverage,map:Ot,matcap:Pt,envMap:nt,envMapMode:nt&&he.mapping,envMapCubeUVHeight:K,aoMap:P,lightMap:Yn,bumpMap:it,normalMap:st,displacementMap:d&&De,emissiveMap:Et,normalMapObjectSpace:st&&M.normalMapType===ql,normalMapTangentSpace:st&&M.normalMapType===yo,metalnessMap:Pe,roughnessMap:E,anisotropy:y,anisotropyMap:ye,clearcoat:k,clearcoatMap:Me,clearcoatNormalMap:ct,clearcoatRoughnessMap:ue,dispersion:ie,iridescence:re,iridescenceMap:Ae,iridescenceThicknessMap:Oe,sheen:ee,sheenColorMap:We,sheenRoughnessMap:Ee,specularMap:rt,specularColorMap:Ze,specularIntensityMap:Mt,transmission:Ne,transmissionMap:U,thicknessMap:me,gradientMap:$,opaque:M.transparent===!1&&M.blending===Ji&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:Te,alphaHash:ve,combine:M.combine,mapUv:Ot&&x(M.map.channel),aoMapUv:P&&x(M.aoMap.channel),lightMapUv:Yn&&x(M.lightMap.channel),bumpMapUv:it&&x(M.bumpMap.channel),normalMapUv:st&&x(M.normalMap.channel),displacementMapUv:De&&x(M.displacementMap.channel),emissiveMapUv:Et&&x(M.emissiveMap.channel),metalnessMapUv:Pe&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:ye&&x(M.anisotropyMap.channel),clearcoatMapUv:Me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ct&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(M.sheenRoughnessMap.channel),specularMapUv:rt&&x(M.specularMap.channel),specularColorMapUv:Ze&&x(M.specularColorMap.channel),specularIntensityMapUv:Mt&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:me&&x(M.thicknessMap.channel),alphaMapUv:se&&x(M.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(st||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ae.attributes.uv&&(Ot||se),fog:!!te,useFog:M.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ve,skinning:X.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Je,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ot&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:Et&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vi,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&M.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return fn.vertexUv1s=l.has(1),fn.vertexUv2s=l.has(2),fn.vertexUv3s=l.has(3),l.clear(),fn}function p(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)T.push(F),T.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(A(T,M),b(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function A(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function b(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){let T=_[M.type],F;if(T){let j=Di[T];F=mg.clone(j.uniforms)}else F=M.uniforms;return F}function I(M,T){let F;for(let j=0,X=u.length;j<X;j++){let te=u[j];if(te.cacheKey===T){F=te,++F.usedTimes;break}}return F===void 0&&(F=new LA(i,T,M,r),u.push(F)),F}function w(M){if(--M.usedTimes===0){let T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function N(M){c.remove(M)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:I,releaseProgram:w,releaseShaderCache:N,programs:u,dispose:L}}function BA(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function OA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Og(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,m,_,x,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function a(h,d,m,_,x,g){let p=o(h,d,m,_,x,g);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function c(h,d,m,_,x,g){let p=o(h,d,m,_,x,g);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||OA),n.length>1&&n.sort(d||Bg),s.length>1&&s.sort(d||Bg)}function u(){for(let h=e,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function VA(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Og,i.set(n,[o])):s>=r.length?(o=new Og,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function GA(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Be};break;case"SpotLight":t={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function zA(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var kA=0;function HA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function WA(i){let e=new GA,t=zA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new ot,o=new ot;function a(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,_=0,x=0,g=0,p=0,A=0,b=0,S=0,I=0,w=0,N=0;l.sort(HA);for(let M=0,T=l.length;M<T;M++){let F=l[M],j=F.color,X=F.intensity,te=F.distance,ae=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=j.r*X,h+=j.g*X,d+=j.b*X;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(F.sh.coefficients[Q],X);N++}else if(F.isDirectionalLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let he=F.shadow,K=t.get(F);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=ae,n.directionalShadowMatrix[m]=F.shadow.matrix,A++}n.directional[m]=Q,m++}else if(F.isSpotLight){let Q=e.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(j).multiplyScalar(X),Q.distance=te,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,n.spot[x]=Q;let he=F.shadow;if(F.map&&(n.spotLightMap[I]=F.map,I++,he.updateMatrices(F),F.castShadow&&w++),n.spotLightMatrix[x]=he.matrix,F.castShadow){let K=t.get(F);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=ae,S++}x++}else if(F.isRectAreaLight){let Q=e.get(F);Q.color.copy(j).multiplyScalar(X),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),n.rectArea[g]=Q,g++}else if(F.isPointLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){let he=F.shadow,K=t.get(F);K.shadowIntensity=he.intensity,K.shadowBias=he.bias,K.shadowNormalBias=he.normalBias,K.shadowRadius=he.radius,K.shadowMapSize=he.mapSize,K.shadowCameraNear=he.camera.near,K.shadowCameraFar=he.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=ae,n.pointShadowMatrix[_]=F.shadow.matrix,b++}n.point[_]=Q,_++}else if(F.isHemisphereLight){let Q=e.get(F);Q.skyColor.copy(F.color).multiplyScalar(X),Q.groundColor.copy(F.groundColor).multiplyScalar(X),n.hemi[p]=Q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==A||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==I||L.numLightProbes!==N)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=N,L.directionalLength=m,L.pointLength=_,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=A,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=I,L.numLightProbes=N,n.version=kA++)}function c(l,u){let h=0,d=0,m=0,_=0,x=0,g=u.matrixWorldInverse;for(let p=0,A=l.length;p<A;p++){let b=l[p];if(b.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(b.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Vg(i){let e=new WA(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qA(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Vg(i),e.set(s,[a])):r>=o.length?(a=new Vg(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YA(i,e,t){let n=new to,s=new Le,r=new Le,o=new pt,a=new xl({depthPacking:ug}),c=new yl,l={},u=t.maxTextureSize,h={[Ri]:sn,[sn]:Ri,[vi]:vi},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:XA,fragmentShader:$A}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new Vn;_.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _n(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let p=this.type;this.render=function(w,N,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Ni),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let X=p!==Mn&&this.type===Mn,te=p===Mn&&this.type!==Mn;for(let ae=0,Q=w.length;ae<Q;ae++){let he=w[ae],K=he.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let _e=K.getFrameExtents();if(s.multiply(_e),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,K.mapSize.y=r.y)),K.map===null||X===!0||te===!0){let Ie=this.type!==Mn?{minFilter:bn,magFilter:bn}:{};K.map!==null&&K.map.dispose(),K.map=new Ci(s.x,s.y,Ie),K.map.texture.name=he.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let be=K.getViewportCount();for(let Ie=0;Ie<be;Ie++){let Je=K.getViewport(Ie);o.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),j.viewport(o),K.updateMatrices(he,Ie),n=K.getFrustum(),S(N,L,K.camera,he,this.type)}K.isPointLightShadow!==!0&&this.type===Mn&&A(K,L),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,T,F)};function A(w,N){let L=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ci(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(N,null,L,d,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(N,null,L,m,x,null)}function b(w,N,L,M){let T=null,F=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)T=F;else if(T=L.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let j=T.uuid,X=N.uuid,te=l[j];te===void 0&&(te={},l[j]=te);let ae=te[X];ae===void 0&&(ae=T.clone(),te[X]=ae,N.addEventListener("dispose",I)),T=ae}if(T.visible=N.visible,T.wireframe=N.wireframe,M===Mn?T.side=N.shadowSide!==null?N.shadowSide:N.side:T.side=N.shadowSide!==null?N.shadowSide:h[N.side],T.alphaMap=N.alphaMap,T.alphaTest=N.alphaTest,T.map=N.map,T.clipShadows=N.clipShadows,T.clippingPlanes=N.clippingPlanes,T.clipIntersection=N.clipIntersection,T.displacementMap=N.displacementMap,T.displacementScale=N.displacementScale,T.displacementBias=N.displacementBias,T.wireframeLinewidth=N.wireframeLinewidth,T.linewidth=N.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let j=i.properties.get(T);j.light=L}return T}function S(w,N,L,M,T){if(w.visible===!1)return;if(w.layers.test(N.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Mn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let X=e.update(w),te=w.material;if(Array.isArray(te)){let ae=X.groups;for(let Q=0,he=ae.length;Q<he;Q++){let K=ae[Q],_e=te[K.materialIndex];if(_e&&_e.visible){let be=b(w,_e,M,T);w.onBeforeShadow(i,w,N,L,X,be,K),i.renderBufferDirect(L,null,X,be,w,K),w.onAfterShadow(i,w,N,L,X,be,K)}}}else if(te.visible){let ae=b(w,te,M,T);w.onBeforeShadow(i,w,N,L,X,ae,null),i.renderBufferDirect(L,null,X,ae,w,null),w.onAfterShadow(i,w,N,L,X,ae,null)}}let j=w.children;for(let X=0,te=j.length;X<te;X++)S(j[X],N,L,M,T)}function I(w){w.target.removeEventListener("dispose",I);for(let L in l){let M=l[L],T=w.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}var KA={[ya]:va,[Ta]:Ma,[Sa]:Aa,[Rs]:ba,[va]:ya,[Ma]:Ta,[Aa]:Sa,[ba]:Rs};function ZA(i,e){function t(){let U=!1,me=new pt,$=null,se=new pt(0,0,0,0);return{setMask:function(Te){$!==Te&&!U&&(i.colorMask(Te,Te,Te,Te),$=Te)},setLocked:function(Te){U=Te},setClear:function(Te,ve,Ye,Lt,fn){fn===!0&&(Te*=Lt,ve*=Lt,Ye*=Lt),me.set(Te,ve,Ye,Lt),se.equals(me)===!1&&(i.clearColor(Te,ve,Ye,Lt),se.copy(me))},reset:function(){U=!1,$=null,se.set(-1,0,0,0)}}}function n(){let U=!1,me=!1,$=null,se=null,Te=null;return{setReversed:function(ve){if(me!==ve){let Ye=e.get("EXT_clip_control");me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let Lt=Te;Te=null,this.setClear(Lt)}me=ve},getReversed:function(){return me},setTest:function(ve){ve?xe(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(ve){$!==ve&&!U&&(i.depthMask(ve),$=ve)},setFunc:function(ve){if(me&&(ve=KA[ve]),se!==ve){switch(ve){case ya:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){U=ve},setClear:function(ve){Te!==ve&&(me&&(ve=1-ve),i.clearDepth(ve),Te=ve)},reset:function(){U=!1,$=null,se=null,Te=null,me=!1}}}function s(){let U=!1,me=null,$=null,se=null,Te=null,ve=null,Ye=null,Lt=null,fn=null;return{setTest:function(yt){U||(yt?xe(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(yt){me!==yt&&!U&&(i.stencilMask(yt),me=yt)},setFunc:function(yt,hi,qi){($!==yt||se!==hi||Te!==qi)&&(i.stencilFunc(yt,hi,qi),$=yt,se=hi,Te=qi)},setOp:function(yt,hi,qi){(ve!==yt||Ye!==hi||Lt!==qi)&&(i.stencilOp(yt,hi,qi),ve=yt,Ye=hi,Lt=qi)},setLocked:function(yt){U=yt},setClear:function(yt){fn!==yt&&(i.clearStencil(yt),fn=yt)},reset:function(){U=!1,me=null,$=null,se=null,Te=null,ve=null,Ye=null,Lt=null,fn=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,m=[],_=null,x=!1,g=null,p=null,A=null,b=null,S=null,I=null,w=null,N=new Be(0,0,0),L=0,M=!1,T=null,F=null,j=null,X=null,te=null,ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,he=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),Q=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Q=he>=2);let _e=null,be={},Ie=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),bt=new pt().fromArray(Ie),ne=new pt().fromArray(Je);function de(U,me,$,se){let Te=new Uint8Array(4),ve=i.createTexture();i.bindTexture(U,ve),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<$;Ye++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(me+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ve}let Re={};Re[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),o.setFunc(Rs),it(!1),st(Rl),xe(i.CULL_FACE),P(Ni);function xe(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Ve(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function ft(U,me){return h[U]!==me?(i.bindFramebuffer(U,me),h[U]=me,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function ze(U,me){let $=m,se=!1;if(U){$=d.get(me),$===void 0&&($=[],d.set(me,$));let Te=U.textures;if($.length!==Te.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Ye=Te.length;ve<Ye;ve++)$[ve]=i.COLOR_ATTACHMENT0+ve;$.length=Te.length,se=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,se=!0);se&&i.drawBuffers($)}function Ot(U){return _!==U?(i.useProgram(U),_=U,!0):!1}let Pt={[es]:i.FUNC_ADD,[Gh]:i.FUNC_SUBTRACT,[zh]:i.FUNC_REVERSE_SUBTRACT};Pt[kh]=i.MIN,Pt[Hh]=i.MAX;let nt={[Wh]:i.ZERO,[qh]:i.ONE,[Xh]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[Qh]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[Yh]:i.DST_ALPHA,[$h]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Kh]:i.ONE_MINUS_DST_ALPHA,[sg]:i.CONSTANT_COLOR,[rg]:i.ONE_MINUS_CONSTANT_COLOR,[og]:i.CONSTANT_ALPHA,[ag]:i.ONE_MINUS_CONSTANT_ALPHA};function P(U,me,$,se,Te,ve,Ye,Lt,fn,yt){if(U===Ni){x===!0&&(Ve(i.BLEND),x=!1);return}if(x===!1&&(xe(i.BLEND),x=!0),U!==Vh){if(U!==g||yt!==M){if((p!==es||S!==es)&&(i.blendEquation(i.FUNC_ADD),p=es,S=es),yt)switch(U){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.ONE,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,b=null,I=null,w=null,N.set(0,0,0),L=0,g=U,M=yt}return}Te=Te||me,ve=ve||$,Ye=Ye||se,(me!==p||Te!==S)&&(i.blendEquationSeparate(Pt[me],Pt[Te]),p=me,S=Te),($!==A||se!==b||ve!==I||Ye!==w)&&(i.blendFuncSeparate(nt[$],nt[se],nt[ve],nt[Ye]),A=$,b=se,I=ve,w=Ye),(Lt.equals(N)===!1||fn!==L)&&(i.blendColor(Lt.r,Lt.g,Lt.b,fn),N.copy(Lt),L=fn),g=U,M=!1}function Yn(U,me){U.side===vi?Ve(i.CULL_FACE):xe(i.CULL_FACE);let $=U.side===sn;me&&($=!$),it($),U.blending===Ji&&U.transparent===!1?P(Ni):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let se=U.stencilWrite;a.setTest(se),se&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Et(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(U){T!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),T=U)}function st(U){U!==Bh?(xe(i.CULL_FACE),U!==F&&(U===Rl?i.cullFace(i.BACK):U===Oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),F=U}function De(U){U!==j&&(Q&&i.lineWidth(U),j=U)}function Et(U,me,$){U?(xe(i.POLYGON_OFFSET_FILL),(X!==me||te!==$)&&(i.polygonOffset(me,$),X=me,te=$)):Ve(i.POLYGON_OFFSET_FILL)}function Pe(U){U?xe(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+ae-1),_e!==U&&(i.activeTexture(U),_e=U)}function y(U,me,$){$===void 0&&(_e===null?$=i.TEXTURE0+ae-1:$=_e);let se=be[$];se===void 0&&(se={type:void 0,texture:void 0},be[$]=se),(se.type!==U||se.texture!==me)&&(_e!==$&&(i.activeTexture($),_e=$),i.bindTexture(U,me||Re[U]),se.type=U,se.texture=me)}function k(){let U=be[_e];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(U){bt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),bt.copy(U))}function Ee(U){ne.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ne.copy(U))}function rt(U,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let se=$.get(U);se===void 0&&(se=i.getUniformBlockIndex(me,U.name),$.set(U,se))}function Ze(U,me){let se=l.get(me).get(U);c.get(me)!==se&&(i.uniformBlockBinding(me,se,U.__bindingPointIndex),c.set(me,se))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},_e=null,be={},h={},d=new WeakMap,m=[],_=null,x=!1,g=null,p=null,A=null,b=null,S=null,I=null,w=null,N=new Be(0,0,0),L=0,M=!1,T=null,F=null,j=null,X=null,te=null,bt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xe,disable:Ve,bindFramebuffer:ft,drawBuffers:ze,useProgram:Ot,setBlending:P,setMaterial:Yn,setFlipSided:it,setCullFace:st,setLineWidth:De,setPolygonOffset:Et,setScissorTest:Pe,activeTexture:E,bindTexture:y,unbindTexture:k,compressedTexImage2D:ie,compressedTexImage3D:re,texImage2D:Ae,texImage3D:Oe,updateUBOMapping:rt,uniformBlockBinding:Ze,texStorage2D:ct,texStorage3D:ue,texSubImage2D:ee,texSubImage3D:Ne,compressedTexSubImage2D:ye,compressedTexSubImage3D:Me,scissor:We,viewport:Ee,reset:Mt}}function jA(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,y){return m?new OffscreenCanvas(E,y):na("canvas")}function x(E,y,k){let ie=1,re=Pe(E);if((re.width>k||re.height>k)&&(ie=k/Math.max(re.width,re.height)),ie<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ee=Math.floor(ie*re.width),Ne=Math.floor(ie*re.height);h===void 0&&(h=_(ee,Ne));let ye=y?_(ee,Ne):h;return ye.width=ee,ye.height=Ne,ye.getContext("2d").drawImage(E,0,0,ee,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Ne+")."),ye}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,y,k,ie,re=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=y;if(y===i.RED&&(k===i.FLOAT&&(ee=i.R32F),k===i.HALF_FLOAT&&(ee=i.R16F),k===i.UNSIGNED_BYTE&&(ee=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.R8UI),k===i.UNSIGNED_SHORT&&(ee=i.R16UI),k===i.UNSIGNED_INT&&(ee=i.R32UI),k===i.BYTE&&(ee=i.R8I),k===i.SHORT&&(ee=i.R16I),k===i.INT&&(ee=i.R32I)),y===i.RG&&(k===i.FLOAT&&(ee=i.RG32F),k===i.HALF_FLOAT&&(ee=i.RG16F),k===i.UNSIGNED_BYTE&&(ee=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RG8UI),k===i.UNSIGNED_SHORT&&(ee=i.RG16UI),k===i.UNSIGNED_INT&&(ee=i.RG32UI),k===i.BYTE&&(ee=i.RG8I),k===i.SHORT&&(ee=i.RG16I),k===i.INT&&(ee=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),k===i.UNSIGNED_INT&&(ee=i.RGB32UI),k===i.BYTE&&(ee=i.RGB8I),k===i.SHORT&&(ee=i.RGB16I),k===i.INT&&(ee=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),k===i.UNSIGNED_INT&&(ee=i.RGBA32UI),k===i.BYTE&&(ee=i.RGBA8I),k===i.SHORT&&(ee=i.RGBA16I),k===i.INT&&(ee=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),y===i.RGBA){let Ne=re?ta:$e.getTransfer(ie);k===i.FLOAT&&(ee=i.RGBA32F),k===i.HALF_FLOAT&&(ee=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ee=Ne===dt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(E,y){let k;return E?y===null||y===Ii||y===Fs?k=i.DEPTH24_STENCIL8:y===ni?k=i.DEPTH32F_STENCIL8:y===ar&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ii||y===Fs?k=i.DEPTH_COMPONENT24:y===ni?k=i.DEPTH_COMPONENT32F:y===ar&&(k=i.DEPTH_COMPONENT16),k}function I(E,y){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==bn&&E.minFilter!==Qn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function w(E){let y=E.target;y.removeEventListener("dispose",w),L(y),y.isVideoTexture&&u.delete(y)}function N(E){let y=E.target;y.removeEventListener("dispose",N),T(y)}function L(E){let y=n.get(E);if(y.__webglInit===void 0)return;let k=E.source,ie=d.get(k);if(ie){let re=ie[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(E),Object.keys(ie).length===0&&d.delete(k)}n.remove(E)}function M(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let k=E.source,ie=d.get(k);delete ie[y.__cacheKey],o.memory.textures--}function T(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(y.__webglFramebuffer[ie]))for(let re=0;re<y.__webglFramebuffer[ie].length;re++)i.deleteFramebuffer(y.__webglFramebuffer[ie][re]);else i.deleteFramebuffer(y.__webglFramebuffer[ie]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ie])}else{if(Array.isArray(y.__webglFramebuffer))for(let ie=0;ie<y.__webglFramebuffer.length;ie++)i.deleteFramebuffer(y.__webglFramebuffer[ie]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ie=0;ie<y.__webglColorRenderbuffer.length;ie++)y.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ie]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=E.textures;for(let ie=0,re=k.length;ie<re;ie++){let ee=n.get(k[ie]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(k[ie])}n.remove(E)}let F=0;function j(){F=0}function X(){let E=F;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function te(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function ae(E,y){let k=n.get(E);if(E.isVideoTexture&&De(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(k,E,y);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function Q(E,y){let k=n.get(E);if(E.version>0&&k.__version!==E.version){ne(k,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function he(E,y){let k=n.get(E);if(E.version>0&&k.__version!==E.version){ne(k,E,y);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function K(E,y){let k=n.get(E);if(E.version>0&&k.__version!==E.version){de(k,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let _e={[qr]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[Xr]:i.MIRRORED_REPEAT},be={[bn]:i.NEAREST,[ad]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},Ie={[Xl]:i.NEVER,[jl]:i.ALWAYS,[rc]:i.LESS,[oc]:i.LEQUAL,[$l]:i.EQUAL,[Zl]:i.GEQUAL,[Yl]:i.GREATER,[Kl]:i.NOTEQUAL};function Je(E,y){if(y.type===ni&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Qn||y.magFilter===Ca||y.magFilter===uo||y.magFilter===Pi||y.minFilter===Qn||y.minFilter===Ca||y.minFilter===uo||y.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,_e[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,_e[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,_e[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,be[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,be[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bn||y.minFilter!==uo&&y.minFilter!==Pi||y.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function bt(E,y){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",w));let ie=y.source,re=d.get(ie);re===void 0&&(re={},d.set(ie,re));let ee=te(y);if(ee!==E.__cacheKey){re[ee]===void 0&&(re[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),re[ee].usedTimes++;let Ne=re[E.__cacheKey];Ne!==void 0&&(re[E.__cacheKey].usedTimes--,Ne.usedTimes===0&&M(y)),E.__cacheKey=ee,E.__webglTexture=re[ee].texture}return k}function ne(E,y,k){let ie=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ie=i.TEXTURE_3D);let re=bt(E,y),ee=y.source;t.bindTexture(ie,E.__webglTexture,i.TEXTURE0+k);let Ne=n.get(ee);if(ee.version!==Ne.__version||re===!0){t.activeTexture(i.TEXTURE0+k);let ye=$e.getPrimaries($e.workingColorSpace),Me=y.colorSpace===si?null:$e.getPrimaries(y.colorSpace),ct=y.colorSpace===si||ye===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ue=x(y.image,!1,s.maxTextureSize);ue=Et(y,ue);let Ae=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type),We=b(y.internalFormat,Ae,Oe,y.colorSpace,y.isVideoTexture);Je(ie,y);let Ee,rt=y.mipmaps,Ze=y.isVideoTexture!==!0,Mt=Ne.__version===void 0||re===!0,U=ee.dataReady,me=I(y,ue);if(y.isDepthTexture)We=S(y.format===Cs,y.type),Mt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,We,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,We,ue.width,ue.height,0,Ae,Oe,null));else if(y.isDataTexture)if(rt.length>0){Ze&&Mt&&t.texStorage2D(i.TEXTURE_2D,me,We,rt[0].width,rt[0].height);for(let $=0,se=rt.length;$<se;$++)Ee=rt[$],Ze?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee.width,Ee.height,Ae,Oe,Ee.data):t.texImage2D(i.TEXTURE_2D,$,We,Ee.width,Ee.height,0,Ae,Oe,Ee.data);y.generateMipmaps=!1}else Ze?(Mt&&t.texStorage2D(i.TEXTURE_2D,me,We,ue.width,ue.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Ae,Oe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,We,ue.width,ue.height,0,Ae,Oe,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ze&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,We,rt[0].width,rt[0].height,ue.depth);for(let $=0,se=rt.length;$<se;$++)if(Ee=rt[$],y.format!==zn)if(Ae!==null)if(Ze){if(U)if(y.layerUpdates.size>0){let Te=md(Ee.width,Ee.height,y.format,y.type);for(let ve of y.layerUpdates){let Ye=Ee.data.subarray(ve*Te/Ee.data.BYTES_PER_ELEMENT,(ve+1)*Te/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ve,Ee.width,Ee.height,1,Ae,Ye)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ee.width,Ee.height,ue.depth,Ae,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,We,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ee.width,Ee.height,ue.depth,Ae,Oe,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,We,Ee.width,Ee.height,ue.depth,0,Ae,Oe,Ee.data)}else{Ze&&Mt&&t.texStorage2D(i.TEXTURE_2D,me,We,rt[0].width,rt[0].height);for(let $=0,se=rt.length;$<se;$++)Ee=rt[$],y.format!==zn?Ae!==null?Ze?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,$,We,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee.width,Ee.height,Ae,Oe,Ee.data):t.texImage2D(i.TEXTURE_2D,$,We,Ee.width,Ee.height,0,Ae,Oe,Ee.data)}else if(y.isDataArrayTexture)if(Ze){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,We,ue.width,ue.height,ue.depth),U)if(y.layerUpdates.size>0){let $=md(ue.width,ue.height,y.format,y.type);for(let se of y.layerUpdates){let Te=ue.data.subarray(se*$/ue.data.BYTES_PER_ELEMENT,(se+1)*$/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,ue.width,ue.height,1,Ae,Oe,Te)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Oe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,ue.width,ue.height,ue.depth,0,Ae,Oe,ue.data);else if(y.isData3DTexture)Ze?(Mt&&t.texStorage3D(i.TEXTURE_3D,me,We,ue.width,ue.height,ue.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Oe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,We,ue.width,ue.height,ue.depth,0,Ae,Oe,ue.data);else if(y.isFramebufferTexture){if(Mt)if(Ze)t.texStorage2D(i.TEXTURE_2D,me,We,ue.width,ue.height);else{let $=ue.width,se=ue.height;for(let Te=0;Te<me;Te++)t.texImage2D(i.TEXTURE_2D,Te,We,$,se,0,Ae,Oe,null),$>>=1,se>>=1}}else if(rt.length>0){if(Ze&&Mt){let $=Pe(rt[0]);t.texStorage2D(i.TEXTURE_2D,me,We,$.width,$.height)}for(let $=0,se=rt.length;$<se;$++)Ee=rt[$],Ze?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ae,Oe,Ee):t.texImage2D(i.TEXTURE_2D,$,We,Ae,Oe,Ee);y.generateMipmaps=!1}else if(Ze){if(Mt){let $=Pe(ue);t.texStorage2D(i.TEXTURE_2D,me,We,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Oe,ue)}else t.texImage2D(i.TEXTURE_2D,0,We,Ae,Oe,ue);g(y)&&p(ie),Ne.__version=ee.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function de(E,y,k){if(y.image.length!==6)return;let ie=bt(E,y),re=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let ee=n.get(re);if(re.version!==ee.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);let Ne=$e.getPrimaries($e.workingColorSpace),ye=y.colorSpace===si?null:$e.getPrimaries(y.colorSpace),Me=y.colorSpace===si||Ne===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ct=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,Ae=[];for(let se=0;se<6;se++)!ct&&!ue?Ae[se]=x(y.image[se],!0,s.maxCubemapSize):Ae[se]=ue?y.image[se].image:y.image[se],Ae[se]=Et(y,Ae[se]);let Oe=Ae[0],We=r.convert(y.format,y.colorSpace),Ee=r.convert(y.type),rt=b(y.internalFormat,We,Ee,y.colorSpace),Ze=y.isVideoTexture!==!0,Mt=ee.__version===void 0||ie===!0,U=re.dataReady,me=I(y,Oe);Je(i.TEXTURE_CUBE_MAP,y);let $;if(ct){Ze&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,rt,Oe.width,Oe.height);for(let se=0;se<6;se++){$=Ae[se].mipmaps;for(let Te=0;Te<$.length;Te++){let ve=$[Te];y.format!==zn?We!==null?Ze?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,ve.width,ve.height,We,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,rt,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,ve.width,ve.height,We,Ee,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,rt,ve.width,ve.height,0,We,Ee,ve.data)}}}else{if($=y.mipmaps,Ze&&Mt){$.length>0&&me++;let se=Pe(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,rt,se.width,se.height)}for(let se=0;se<6;se++)if(ue){Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae[se].width,Ae[se].height,We,Ee,Ae[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,rt,Ae[se].width,Ae[se].height,0,We,Ee,Ae[se].data);for(let Te=0;Te<$.length;Te++){let Ye=$[Te].image[se].image;Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,Ye.width,Ye.height,We,Ee,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,rt,Ye.width,Ye.height,0,We,Ee,Ye.data)}}else{Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,We,Ee,Ae[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,rt,We,Ee,Ae[se]);for(let Te=0;Te<$.length;Te++){let ve=$[Te];Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,We,Ee,ve.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,rt,We,Ee,ve.image[se])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),ee.__version=re.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Re(E,y,k,ie,re,ee){let Ne=r.convert(k.format,k.colorSpace),ye=r.convert(k.type),Me=b(k.internalFormat,Ne,ye,k.colorSpace),ct=n.get(y),ue=n.get(k);if(ue.__renderTarget=y,!ct.__hasExternalTextures){let Ae=Math.max(1,y.width>>ee),Oe=Math.max(1,y.height>>ee);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Me,Ae,Oe,y.depth,0,Ne,ye,null):t.texImage2D(re,ee,Me,Ae,Oe,0,Ne,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),st(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,re,ue.__webglTexture,0,it(y)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,re,ue.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(E,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let ie=y.depthTexture,re=ie&&ie.isDepthTexture?ie.type:null,ee=S(y.stencilBuffer,re),Ne=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=it(y);st(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ee,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ee,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ee,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,E)}else{let ie=y.textures;for(let re=0;re<ie.length;re++){let ee=ie[re],Ne=r.convert(ee.format,ee.colorSpace),ye=r.convert(ee.type),Me=b(ee.internalFormat,Ne,ye,ee.colorSpace),ct=it(y);k&&st(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Me,y.width,y.height):st(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Me,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Me,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ie=n.get(y.depthTexture);ie.__renderTarget=y,(!ie.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ae(y.depthTexture,0);let re=ie.__webglTexture,ee=it(y);if(y.depthTexture.format===ws)st(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(y.depthTexture.format===Cs)st(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ft(E){let y=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let ie=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ie){let re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ie.removeEventListener("dispose",re)};ie.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=ie}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ve(y.__webglFramebuffer,E)}else if(k){y.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ie]),y.__webglDepthbuffer[ie]===void 0)y.__webglDepthbuffer[ie]=i.createRenderbuffer(),xe(y.__webglDepthbuffer[ie],E,!1);else{let re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),xe(y.__webglDepthbuffer,E,!1);else{let ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(E,y,k){let ie=n.get(E);y!==void 0&&Re(ie.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ft(E)}function Ot(E){let y=E.texture,k=n.get(E),ie=n.get(y);E.addEventListener("dispose",N);let re=E.textures,ee=E.isWebGLCubeRenderTarget===!0,Ne=re.length>1;if(Ne||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=y.version,o.memory.textures++),ee){k.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ye]=[];for(let Me=0;Me<y.mipmaps.length;Me++)k.__webglFramebuffer[ye][Me]=i.createFramebuffer()}else k.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ye=0;ye<y.mipmaps.length;ye++)k.__webglFramebuffer[ye]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let ye=0,Me=re.length;ye<Me;ye++){let ct=n.get(re[ye]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&st(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ye=0;ye<re.length;ye++){let Me=re[ye];k.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ye]);let ct=r.convert(Me.format,Me.colorSpace),ue=r.convert(Me.type),Ae=b(Me.internalFormat,ct,ue,Me.colorSpace,E.isXRRenderTarget===!0),Oe=it(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ae,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,k.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Je(i.TEXTURE_CUBE_MAP,y);for(let ye=0;ye<6;ye++)if(y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)Re(k.__webglFramebuffer[ye][Me],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me);else Re(k.__webglFramebuffer[ye],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ye=0,Me=re.length;ye<Me;ye++){let ct=re[ye],ue=n.get(ct);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),Je(i.TEXTURE_2D,ct),Re(k.__webglFramebuffer,E,ct,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),g(ct)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ye=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ie.__webglTexture),Je(ye,y),y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)Re(k.__webglFramebuffer[Me],E,y,i.COLOR_ATTACHMENT0,ye,Me);else Re(k.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ye,0);g(y)&&p(ye),t.unbindTexture()}E.depthBuffer&&ft(E)}function Pt(E){let y=E.textures;for(let k=0,ie=y.length;k<ie;k++){let re=y[k];if(g(re)){let ee=A(E),Ne=n.get(re).__webglTexture;t.bindTexture(ee,Ne),p(ee),t.unbindTexture()}}}let nt=[],P=[];function Yn(E){if(E.samples>0){if(st(E)===!1){let y=E.textures,k=E.width,ie=E.height,re=i.COLOR_BUFFER_BIT,ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(E),ye=y.length>1;if(ye)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Me]);let ct=n.get(y[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,k,ie,0,0,k,ie,re,i.NEAREST),c===!0&&(nt.length=0,P.length=0,nt.push(i.COLOR_ATTACHMENT0+Me),E.depthBuffer&&E.resolveDepthBuffer===!1&&(nt.push(ee),P.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Me]);let ct=n.get(y[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,ct,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function it(E){return Math.min(s.maxSamples,E.samples)}function st(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function De(E){let y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function Et(E,y){let k=E.colorSpace,ie=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==ts&&k!==si&&($e.getTransfer(k)===dt?(ie!==zn||re!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=j,this.setTexture2D=ae,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=K,this.rebindTextures=ze,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Yn,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=st}function QA(i,e){function t(n,s=si){let r,o=$e.getTransfer(s);if(n===Ti)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return i.BYTE;if(n===Fl)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===Bl)return i.ALPHA;if(n===Ol)return i.RGB;if(n===zn)return i.RGBA;if(n===Vl)return i.LUMINANCE;if(n===Gl)return i.LUMINANCE_ALPHA;if(n===ws)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===zl)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===fo)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Ua||n===Ba||n===Oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ga)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Ha||n===Wa||n===qa||n===Xa||n===$a||n===Ya||n===Ka||n===Za||n===ja||n===Qa||n===Ja||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===kl||n===Hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xo)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wl||n===nc||n===ic||n===sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var JA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new gn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xi({vertexShader:JA,fragmentShader:eE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new la(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cd=class extends Bn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,_=null,x=new Rd,g=t.getContextAttributes(),p=null,A=null,b=[],S=[],I=new Le,w=null,N=new ln;N.viewport=new pt;let L=new ln;L.viewport=new pt;let M=[N,L],T=new fa,F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=b[ne];return de===void 0&&(de=new sr,b[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=b[ne];return de===void 0&&(de=new sr,b[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=b[ne];return de===void 0&&(de=new sr,b[ne]=de),de.getHandSpace()};function X(ne){let de=S.indexOf(ne.inputSource);if(de===-1)return;let Re=b[de];Re!==void 0&&(Re.update(ne.inputSource,ne.frame,l||o),Re.dispatchEvent({type:ne.type,data:ne.inputSource}))}function te(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ae);for(let ne=0;ne<b.length;ne++){let de=S[ne];de!==null&&(S[ne]=null,b[ne].disconnect(de))}F=null,j=null,x.reset(),e.setRenderTarget(p),m=null,d=null,h=null,s=null,A=null,bt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ae),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,xe=null,Ve=null;g.depth&&(Ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=g.stencil?Cs:ws,xe=g.stencil?Fs:Ii);let ft={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Ci(d.textureWidth,d.textureHeight,{format:zn,type:Ti,depthTexture:new yi(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{let Re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Ci(m.framebufferWidth,m.framebufferHeight,{format:zn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(ne){for(let de=0;de<ne.removed.length;de++){let Re=ne.removed[de],xe=S.indexOf(Re);xe>=0&&(S[xe]=null,b[xe].disconnect(Re))}for(let de=0;de<ne.added.length;de++){let Re=ne.added[de],xe=S.indexOf(Re);if(xe===-1){for(let ft=0;ft<b.length;ft++)if(ft>=S.length){S.push(Re),xe=ft;break}else if(S[ft]===null){S[ft]=Re,xe=ft;break}if(xe===-1)break}let Ve=b[xe];Ve&&Ve.connect(Re)}}let Q=new D,he=new D;function K(ne,de,Re){Q.setFromMatrixPosition(de.matrixWorld),he.setFromMatrixPosition(Re.matrixWorld);let xe=Q.distanceTo(he),Ve=de.projectionMatrix.elements,ft=Re.projectionMatrix.elements,ze=Ve[14]/(Ve[10]-1),Ot=Ve[14]/(Ve[10]+1),Pt=(Ve[9]+1)/Ve[5],nt=(Ve[9]-1)/Ve[5],P=(Ve[8]-1)/Ve[0],Yn=(ft[8]+1)/ft[0],it=ze*P,st=ze*Yn,De=xe/(-P+Yn),Et=De*-P;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Et),ne.translateZ(De),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ve[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let Pe=ze+De,E=Ot+De,y=it-Et,k=st+(xe-Et),ie=Pt*Ot/E*Pe,re=nt*Ot/E*Pe;ne.projectionMatrix.makePerspective(y,k,ie,re,Pe,E),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function _e(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let de=ne.near,Re=ne.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),T.near=L.near=N.near=de,T.far=L.far=N.far=Re,(F!==T.near||j!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,j=T.far),N.layers.mask=ne.layers.mask|2,L.layers.mask=ne.layers.mask|4,T.layers.mask=N.layers.mask|L.layers.mask;let xe=ne.parent,Ve=T.cameras;_e(T,xe);for(let ft=0;ft<Ve.length;ft++)_e(Ve[ft],xe);Ve.length===2?K(T,N,L):T.projectionMatrix.copy(N.projectionMatrix),be(ne,T,xe)};function be(ne,de,Re){Re===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(Re.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Js*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(T)};let Ie=null;function Je(ne,de){if(u=de.getViewerPose(l||o),_=de,u!==null){let Re=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let xe=!1;Re.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let ze=0;ze<Re.length;ze++){let Ot=Re[ze],Pt=null;if(m!==null)Pt=m.getViewport(Ot);else{let P=h.getViewSubImage(d,Ot);Pt=P.viewport,ze===0&&(e.setRenderTargetTextures(A,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(A))}let nt=M[ze];nt===void 0&&(nt=new ln,nt.layers.enable(ze),nt.viewport=new pt,M[ze]=nt),nt.matrix.fromArray(Ot.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ot.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ze===0&&(T.matrix.copy(nt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(nt)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){let ze=h.getDepthInformation(Re[0]);ze&&ze.isValid&&ze.texture&&x.init(e,ze,s.renderState)}}for(let Re=0;Re<b.length;Re++){let xe=S[Re],Ve=b[Re];xe!==null&&Ve!==void 0&&Ve.update(xe,de,l||o)}Ie&&Ie(ne,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),_=null}let bt=new Gg;bt.setAnimationLoop(Je),this.setAnimationLoop=function(ne){Ie=ne},this.dispose=function(){}}},hr=new On,tE=new ot;function nE(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,dd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,A,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,A,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let A=e.get(p),b=A.envMap,S=A.envMapRotation;b&&(g.envMap.value=b,hr.copy(S),hr.x*=-1,hr.y*=-1,hr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(hr)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,A,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iE(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,b){let S=b.program;n.uniformBlockBinding(A,S)}function l(A,b){let S=s[A.id];S===void 0&&(_(A),S=u(A),s[A.id]=S,A.addEventListener("dispose",g));let I=b.program;n.updateUBOMapping(A,I);let w=e.render.frame;r[A.id]!==w&&(d(A),r[A.id]=w)}function u(A){let b=h();A.__bindingPointIndex=b;let S=i.createBuffer(),I=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let b=s[A.id],S=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,N=S.length;w<N;w++){let L=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,T=L.length;M<T;M++){let F=L[M];if(m(F,w,M,I)===!0){let j=F.__offset,X=Array.isArray(F.value)?F.value:[F.value],te=0;for(let ae=0;ae<X.length;ae++){let Q=X[ae],he=x(Q);typeof Q=="number"||typeof Q=="boolean"?(F.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,j+te,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=0,F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=0,F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=0):(Q.toArray(F.__data,te),te+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,b,S,I){let w=A.value,N=b+"_"+S;if(I[N]===void 0)return typeof w=="number"||typeof w=="boolean"?I[N]=w:I[N]=w.clone(),!0;{let L=I[N];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return I[N]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(A){let b=A.uniforms,S=0,I=16;for(let N=0,L=b.length;N<L;N++){let M=Array.isArray(b[N])?b[N]:[b[N]];for(let T=0,F=M.length;T<F;T++){let j=M[T],X=Array.isArray(j.value)?j.value:[j.value];for(let te=0,ae=X.length;te<ae;te++){let Q=X[te],he=x(Q),K=S%I,_e=K%he.boundary,be=K+_e;S+=_e,be!==0&&I-be<he.storage&&(S+=I-be),j.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=he.storage}}}let w=S%I;return w>0&&(S+=I-w),A.__size=S,A.__cache={},this}function x(A){let b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function g(A){let b=A.target;b.removeEventListener("dispose",g);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var iu=class{constructor(e={}){let{canvas:t=hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=Gn,this.toneMappingExposure=1;let S=this,I=!1,w=0,N=0,L=null,M=-1,T=null,F=new pt,j=new pt,X=null,te=new Be(0),ae=0,Q=t.width,he=t.height,K=1,_e=null,be=null,Ie=new pt(0,0,Q,he),Je=new pt(0,0,Q,he),bt=!1,ne=new to,de=!1,Re=!1;this.transmissionResolutionScale=1;let xe=new ot,Ve=new ot,ft=new D,ze=new pt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function nt(){return L===null?K:1}let P=n;function Yn(v,B){return t.getContext(v,B)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ve,!1),P===null){let B="webgl2";if(P=Yn(B,v),P===null)throw Yn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let it,st,De,Et,Pe,E,y,k,ie,re,ee,Ne,ye,Me,ct,ue,Ae,Oe,We,Ee,rt,Ze,Mt,U;function me(){it=new TM(P),it.init(),Ze=new QA(P,it),st=new mM(P,it,e,Ze),De=new ZA(P,it),st.reverseDepthBuffer&&d&&De.buffers.depth.setReversed(!0),Et=new MM(P),Pe=new BA,E=new jA(P,it,De,Pe,st,Ze,Et),y=new _M(S),k=new vM(S),ie=new PT(P),Mt=new fM(P,ie),re=new SM(P,ie,Et,Mt),ee=new EM(P,re,ie,Et),We=new AM(P,st,E),ue=new gM(Pe),Ne=new UA(S,y,k,it,st,Mt,ue),ye=new nE(S,Pe),Me=new VA,ct=new qA(it),Oe=new dM(S,y,k,De,ee,m,c),Ae=new YA(S,ee,st),U=new iE(P,Et,st,De),Ee=new pM(P,it,Et),rt=new bM(P,it,Et),Et.programs=Ne.programs,S.capabilities=st,S.extensions=it,S.properties=Pe,S.renderLists=Me,S.shadowMap=Ae,S.state=De,S.info=Et}me();let $=new Cd(S,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let v=it.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=it.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(v){v!==void 0&&(K=v,this.setSize(Q,he,!1))},this.getSize=function(v){return v.set(Q,he)},this.setSize=function(v,B,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=v,he=B,t.width=Math.floor(v*K),t.height=Math.floor(B*K),H===!0&&(t.style.width=v+"px",t.style.height=B+"px"),this.setViewport(0,0,v,B)},this.getDrawingBufferSize=function(v){return v.set(Q*K,he*K).floor()},this.setDrawingBufferSize=function(v,B,H){Q=v,he=B,K=H,t.width=Math.floor(v*H),t.height=Math.floor(B*H),this.setViewport(0,0,v,B)},this.getCurrentViewport=function(v){return v.copy(F)},this.getViewport=function(v){return v.copy(Ie)},this.setViewport=function(v,B,H,W){v.isVector4?Ie.set(v.x,v.y,v.z,v.w):Ie.set(v,B,H,W),De.viewport(F.copy(Ie).multiplyScalar(K).round())},this.getScissor=function(v){return v.copy(Je)},this.setScissor=function(v,B,H,W){v.isVector4?Je.set(v.x,v.y,v.z,v.w):Je.set(v,B,H,W),De.scissor(j.copy(Je).multiplyScalar(K).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(v){De.setScissorTest(bt=v)},this.setOpaqueSort=function(v){_e=v},this.setTransparentSort=function(v){be=v},this.getClearColor=function(v){return v.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(v=!0,B=!0,H=!0){let W=0;if(v){let O=!1;if(L!==null){let ce=L.texture.format;O=ce===La||ce===Da||ce===Ia}if(O){let ce=L.texture.type,ge=ce===Ti||ce===Ii||ce===ar||ce===Fs||ce===Na||ce===Pa,Se=Oe.getClearColor(),we=Oe.getClearAlpha(),qe=Se.r,Xe=Se.g,Fe=Se.b;ge?(_[0]=qe,_[1]=Xe,_[2]=Fe,_[3]=we,P.clearBufferuiv(P.COLOR,0,_)):(x[0]=qe,x[1]=Xe,x[2]=Fe,x[3]=we,P.clearBufferiv(P.COLOR,0,x))}else W|=P.COLOR_BUFFER_BIT}B&&(W|=P.DEPTH_BUFFER_BIT),H&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Oe.dispose(),Me.dispose(),ct.dispose(),Pe.dispose(),y.dispose(),k.dispose(),ee.dispose(),Mt.dispose(),U.dispose(),Ne.dispose(),$.dispose(),$.removeEventListener("sessionstart",Rm),$.removeEventListener("sessionend",Cm),$s.stop()};function se(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let v=Et.autoReset,B=Ae.enabled,H=Ae.autoUpdate,W=Ae.needsUpdate,O=Ae.type;me(),Et.autoReset=v,Ae.enabled=B,Ae.autoUpdate=H,Ae.needsUpdate=W,Ae.type=O}function ve(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ye(v){let B=v.target;B.removeEventListener("dispose",Ye),Lt(B)}function Lt(v){fn(v),Pe.remove(v)}function fn(v){let B=Pe.get(v).programs;B!==void 0&&(B.forEach(function(H){Ne.releaseProgram(H)}),v.isShaderMaterial&&Ne.releaseShaderCache(v))}this.renderBufferDirect=function(v,B,H,W,O,ce){B===null&&(B=Ot);let ge=O.isMesh&&O.matrixWorld.determinant()<0,Se=Zv(v,B,H,W,O);De.setMaterial(W,ge);let we=H.index,qe=1;if(W.wireframe===!0){if(we=re.getWireframeAttribute(H),we===void 0)return;qe=2}let Xe=H.drawRange,Fe=H.attributes.position,lt=Xe.start*qe,gt=(Xe.start+Xe.count)*qe;ce!==null&&(lt=Math.max(lt,ce.start*qe),gt=Math.min(gt,(ce.start+ce.count)*qe)),we!==null?(lt=Math.max(lt,0),gt=Math.min(gt,we.count)):Fe!=null&&(lt=Math.max(lt,0),gt=Math.min(gt,Fe.count));let Xt=gt-lt;if(Xt<0||Xt===1/0)return;Mt.setup(O,W,Se,H,we);let Ft,ht=Ee;if(we!==null&&(Ft=ie.get(we),ht=rt,ht.setIndex(Ft)),O.isMesh)W.wireframe===!0?(De.setLineWidth(W.wireframeLinewidth*nt()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(O.isLine){let Ue=W.linewidth;Ue===void 0&&(Ue=1),De.setLineWidth(Ue*nt()),O.isLineSegments?ht.setMode(P.LINES):O.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else O.isPoints?ht.setMode(P.POINTS):O.isSprite&&ht.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ue=O._multiDrawStarts,cn=O._multiDrawCounts,_t=O._multiDrawCount,di=we?ie.get(we).bytesPerElement:1,Pr=Pe.get(W).currentProgram.getUniforms();for(let Ln=0;Ln<_t;Ln++)Pr.setValue(P,"_gl_DrawID",Ln),ht.render(Ue[Ln]/di,cn[Ln])}else if(O.isInstancedMesh)ht.renderInstances(lt,Xt,O.count);else if(H.isInstancedBufferGeometry){let Ue=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,cn=Math.min(H.instanceCount,Ue);ht.renderInstances(lt,Xt,cn)}else ht.render(lt,Xt)};function yt(v,B,H){v.transparent===!0&&v.side===vi&&v.forceSinglePass===!1?(v.side=sn,v.needsUpdate=!0,zc(v,B,H),v.side=Ri,v.needsUpdate=!0,zc(v,B,H),v.side=vi):zc(v,B,H)}this.compile=function(v,B,H=null){H===null&&(H=v),p=ct.get(H),p.init(B),b.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),v!==H&&v.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let W=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ce=O.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let Se=ce[ge];yt(Se,H,O),W.add(Se)}else yt(ce,H,O),W.add(ce)}),b.pop(),p=null,W},this.compileAsync=function(v,B,H=null){let W=this.compile(v,B,H);return new Promise(O=>{function ce(){if(W.forEach(function(ge){Pe.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){O(v);return}setTimeout(ce,10)}it.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let hi=null;function qi(v){hi&&hi(v)}function Rm(){$s.stop()}function Cm(){$s.start()}let $s=new Gg;$s.setAnimationLoop(qi),typeof self<"u"&&$s.setContext(self),this.setAnimationLoop=function(v){hi=v,$.setAnimationLoop(v),v===null?$s.stop():$s.start()},$.addEventListener("sessionstart",Rm),$.addEventListener("sessionend",Cm),this.render=function(v,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,B,L),p=ct.get(v,b.length),p.init(B),b.push(p),Ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ne.setFromProjectionMatrix(Ve),Re=this.localClippingEnabled,de=ue.init(this.clippingPlanes,Re),g=Me.get(v,A.length),g.init(),A.push(g),$.enabled===!0&&$.isPresenting===!0){let ce=S.xr.getDepthSensingMesh();ce!==null&&uh(ce,B,-1/0,S.sortObjects)}uh(v,B,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(_e,be),Pt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Pt&&Oe.addToRenderList(g,v),this.info.render.frame++,de===!0&&ue.beginShadows();let H=p.state.shadowsArray;Ae.render(H,v,B),de===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,O=g.transmissive;if(p.setupLights(),B.isArrayCamera){let ce=B.cameras;if(O.length>0)for(let ge=0,Se=ce.length;ge<Se;ge++){let we=ce[ge];Pm(W,O,v,we)}Pt&&Oe.render(v);for(let ge=0,Se=ce.length;ge<Se;ge++){let we=ce[ge];Nm(g,v,we,we.viewport)}}else O.length>0&&Pm(W,O,v,B),Pt&&Oe.render(v),Nm(g,v,B);L!==null&&N===0&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(S,v,B),Mt.resetDefaultState(),M=-1,T=null,b.pop(),b.length>0?(p=b[b.length-1],de===!0&&ue.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function uh(v,B,H,W){if(v.visible===!1)return;if(v.layers.test(B.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(B);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ne.intersectsSprite(v)){W&&ze.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ve);let ge=ee.update(v),Se=v.material;Se.visible&&g.push(v,ge,Se,H,ze.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ne.intersectsObject(v))){let ge=ee.update(v),Se=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ze.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ze.copy(ge.boundingSphere.center)),ze.applyMatrix4(v.matrixWorld).applyMatrix4(Ve)),Array.isArray(Se)){let we=ge.groups;for(let qe=0,Xe=we.length;qe<Xe;qe++){let Fe=we[qe],lt=Se[Fe.materialIndex];lt&&lt.visible&&g.push(v,ge,lt,H,ze.z,Fe)}}else Se.visible&&g.push(v,ge,Se,H,ze.z,null)}}let ce=v.children;for(let ge=0,Se=ce.length;ge<Se;ge++)uh(ce[ge],B,H,W)}function Nm(v,B,H,W){let O=v.opaque,ce=v.transmissive,ge=v.transparent;p.setupLightsView(H),de===!0&&ue.setGlobalState(S.clippingPlanes,H),W&&De.viewport(F.copy(W)),O.length>0&&Gc(O,B,H),ce.length>0&&Gc(ce,B,H),ge.length>0&&Gc(ge,B,H),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Pm(v,B,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ci(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?ii:Ti,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let ce=p.state.transmissionRenderTarget[W.id],ge=W.viewport||F;ce.setSize(ge.z*S.transmissionResolutionScale,ge.w*S.transmissionResolutionScale);let Se=S.getRenderTarget();S.setRenderTarget(ce),S.getClearColor(te),ae=S.getClearAlpha(),ae<1&&S.setClearColor(16777215,.5),S.clear(),Pt&&Oe.render(H);let we=S.toneMapping;S.toneMapping=Gn;let qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),de===!0&&ue.setGlobalState(S.clippingPlanes,W),Gc(v,H,W),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),it.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Fe=0,lt=B.length;Fe<lt;Fe++){let gt=B[Fe],Xt=gt.object,Ft=gt.geometry,ht=gt.material,Ue=gt.group;if(ht.side===vi&&Xt.layers.test(W.layers)){let cn=ht.side;ht.side=sn,ht.needsUpdate=!0,Im(Xt,H,W,Ft,ht,Ue),ht.side=cn,ht.needsUpdate=!0,Xe=!0}}Xe===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}S.setRenderTarget(Se),S.setClearColor(te,ae),qe!==void 0&&(W.viewport=qe),S.toneMapping=we}function Gc(v,B,H){let W=B.isScene===!0?B.overrideMaterial:null;for(let O=0,ce=v.length;O<ce;O++){let ge=v[O],Se=ge.object,we=ge.geometry,qe=W===null?ge.material:W,Xe=ge.group;Se.layers.test(H.layers)&&Im(Se,B,H,we,qe,Xe)}}function Im(v,B,H,W,O,ce){v.onBeforeRender(S,B,H,W,O,ce),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(S,B,H,W,v,ce),O.transparent===!0&&O.side===vi&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,S.renderBufferDirect(H,B,W,O,v,ce),O.side=Ri,O.needsUpdate=!0,S.renderBufferDirect(H,B,W,O,v,ce),O.side=vi):S.renderBufferDirect(H,B,W,O,v,ce),v.onAfterRender(S,B,H,W,O,ce)}function zc(v,B,H){B.isScene!==!0&&(B=Ot);let W=Pe.get(v),O=p.state.lights,ce=p.state.shadowsArray,ge=O.state.version,Se=Ne.getParameters(v,O.state,ce,B,H),we=Ne.getProgramCacheKey(Se),qe=W.programs;W.environment=v.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(v.isMeshStandardMaterial?k:y).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?B.environmentRotation:v.envMapRotation,qe===void 0&&(v.addEventListener("dispose",Ye),qe=new Map,W.programs=qe);let Xe=qe.get(we);if(Xe!==void 0){if(W.currentProgram===Xe&&W.lightsStateVersion===ge)return Lm(v,Se),Xe}else Se.uniforms=Ne.getUniforms(v),v.onBeforeCompile(Se,S),Xe=Ne.acquireProgram(Se,we),qe.set(we,Xe),W.uniforms=Se.uniforms;let Fe=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Fe.clippingPlanes=ue.uniform),Lm(v,Se),W.needsLights=Qv(v),W.lightsStateVersion=ge,W.needsLights&&(Fe.ambientLightColor.value=O.state.ambient,Fe.lightProbe.value=O.state.probe,Fe.directionalLights.value=O.state.directional,Fe.directionalLightShadows.value=O.state.directionalShadow,Fe.spotLights.value=O.state.spot,Fe.spotLightShadows.value=O.state.spotShadow,Fe.rectAreaLights.value=O.state.rectArea,Fe.ltc_1.value=O.state.rectAreaLTC1,Fe.ltc_2.value=O.state.rectAreaLTC2,Fe.pointLights.value=O.state.point,Fe.pointLightShadows.value=O.state.pointShadow,Fe.hemisphereLights.value=O.state.hemi,Fe.directionalShadowMap.value=O.state.directionalShadowMap,Fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Fe.spotShadowMap.value=O.state.spotShadowMap,Fe.spotLightMatrix.value=O.state.spotLightMatrix,Fe.spotLightMap.value=O.state.spotLightMap,Fe.pointShadowMap.value=O.state.pointShadowMap,Fe.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Xe,W.uniformsList=null,Xe}function Dm(v){if(v.uniformsList===null){let B=v.currentProgram.getUniforms();v.uniformsList=bo.seqWithValue(B.seq,v.uniforms)}return v.uniformsList}function Lm(v,B){let H=Pe.get(v);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.batchingColor=B.batchingColor,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function Zv(v,B,H,W,O){B.isScene!==!0&&(B=Ot),E.resetTextureUnits();let ce=B.fog,ge=W.isMeshStandardMaterial?B.environment:null,Se=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ts,we=(W.isMeshStandardMaterial?k:y).get(W.envMap||ge),qe=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xe=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!H.morphAttributes.position,lt=!!H.morphAttributes.normal,gt=!!H.morphAttributes.color,Xt=Gn;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Xt=S.toneMapping);let Ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ht=Ft!==void 0?Ft.length:0,Ue=Pe.get(W),cn=p.state.lights;if(de===!0&&(Re===!0||v!==T)){let vn=v===T&&W.id===M;ue.setState(W,v,vn)}let _t=!1;W.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==cn.state.version||Ue.outputColorSpace!==Se||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==we||W.fog===!0&&Ue.fog!==ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ue.numPlanes||Ue.numIntersection!==ue.numIntersection)||Ue.vertexAlphas!==qe||Ue.vertexTangents!==Xe||Ue.morphTargets!==Fe||Ue.morphNormals!==lt||Ue.morphColors!==gt||Ue.toneMapping!==Xt||Ue.morphTargetsCount!==ht)&&(_t=!0):(_t=!0,Ue.__version=W.version);let di=Ue.currentProgram;_t===!0&&(di=zc(W,B,O));let Pr=!1,Ln=!1,Wo=!1,Nt=di.getUniforms(),Kn=Ue.uniforms;if(De.useProgram(di.program)&&(Pr=!0,Ln=!0,Wo=!0),W.id!==M&&(M=W.id,Ln=!0),Pr||T!==v){De.buffers.depth.getReversed()?(xe.copy(v.projectionMatrix),dg(xe),fg(xe),Nt.setValue(P,"projectionMatrix",xe)):Nt.setValue(P,"projectionMatrix",v.projectionMatrix),Nt.setValue(P,"viewMatrix",v.matrixWorldInverse);let wn=Nt.map.cameraPosition;wn!==void 0&&wn.setValue(P,ft.setFromMatrixPosition(v.matrixWorld)),st.logarithmicDepthBuffer&&Nt.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Nt.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),T!==v&&(T=v,Ln=!0,Wo=!0)}if(O.isSkinnedMesh){Nt.setOptional(P,O,"bindMatrix"),Nt.setOptional(P,O,"bindMatrixInverse");let vn=O.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Nt.setValue(P,"boneTexture",vn.boneTexture,E))}O.isBatchedMesh&&(Nt.setOptional(P,O,"batchingTexture"),Nt.setValue(P,"batchingTexture",O._matricesTexture,E),Nt.setOptional(P,O,"batchingIdTexture"),Nt.setValue(P,"batchingIdTexture",O._indirectTexture,E),Nt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Nt.setValue(P,"batchingColorTexture",O._colorsTexture,E));let Zn=H.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&We.update(O,H,di),(Ln||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,Nt.setValue(P,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Kn.envMap.value=we,Kn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Kn.envMapIntensity.value=B.environmentIntensity),Ln&&(Nt.setValue(P,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&jv(Kn,Wo),ce&&W.fog===!0&&ye.refreshFogUniforms(Kn,ce),ye.refreshMaterialUniforms(Kn,W,K,he,p.state.transmissionRenderTarget[v.id]),bo.upload(P,Dm(Ue),Kn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(bo.upload(P,Dm(Ue),Kn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Nt.setValue(P,"center",O.center),Nt.setValue(P,"modelViewMatrix",O.modelViewMatrix),Nt.setValue(P,"normalMatrix",O.normalMatrix),Nt.setValue(P,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let vn=W.uniformsGroups;for(let wn=0,hh=vn.length;wn<hh;wn++){let Ys=vn[wn];U.update(Ys,di),U.bind(Ys,di)}}return di}function jv(v,B){v.ambientLightColor.needsUpdate=B,v.lightProbe.needsUpdate=B,v.directionalLights.needsUpdate=B,v.directionalLightShadows.needsUpdate=B,v.pointLights.needsUpdate=B,v.pointLightShadows.needsUpdate=B,v.spotLights.needsUpdate=B,v.spotLightShadows.needsUpdate=B,v.rectAreaLights.needsUpdate=B,v.hemisphereLights.needsUpdate=B}function Qv(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,B,H){Pe.get(v.texture).__webglTexture=B,Pe.get(v.depthTexture).__webglTexture=H;let W=Pe.get(v);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,B){let H=Pe.get(v);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0};let Jv=P.createFramebuffer();this.setRenderTarget=function(v,B=0,H=0){L=v,w=B,N=H;let W=!0,O=null,ce=!1,ge=!1;if(v){let we=Pe.get(v);if(we.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)E.setupRenderTarget(v);else if(we.__hasExternalTextures)E.rebindTextures(v,Pe.get(v.texture).__webglTexture,Pe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Fe=v.depthTexture;if(we.__boundDepthTexture!==Fe){if(Fe!==null&&Pe.has(Fe)&&(v.width!==Fe.image.width||v.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(v)}}let qe=v.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ge=!0);let Xe=Pe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Xe[B])?O=Xe[B][H]:O=Xe[B],ce=!0):v.samples>0&&E.useMultisampledRTT(v)===!1?O=Pe.get(v).__webglMultisampledFramebuffer:Array.isArray(Xe)?O=Xe[H]:O=Xe,F.copy(v.viewport),j.copy(v.scissor),X=v.scissorTest}else F.copy(Ie).multiplyScalar(K).floor(),j.copy(Je).multiplyScalar(K).floor(),X=bt;if(H!==0&&(O=Jv),De.bindFramebuffer(P.FRAMEBUFFER,O)&&W&&De.drawBuffers(v,O),De.viewport(F),De.scissor(j),De.setScissorTest(X),ce){let we=Pe.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,H)}else if(ge){let we=Pe.get(v.texture),qe=B;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.__webglTexture,H,qe)}else if(v!==null&&H!==0){let we=Pe.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,we.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(v,B,H,W,O,ce,ge){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Pe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){De.bindFramebuffer(P.FRAMEBUFFER,Se);try{let we=v.texture,qe=we.format,Xe=we.type;if(!st.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=v.width-W&&H>=0&&H<=v.height-O&&P.readPixels(B,H,W,O,Ze.convert(qe),Ze.convert(Xe),ce)}finally{let we=L!==null?Pe.get(L).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(v,B,H,W,O,ce,ge){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Pe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){let we=v.texture,qe=we.format,Xe=we.type;if(!st.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=v.width-W&&H>=0&&H<=v.height-O){De.bindFramebuffer(P.FRAMEBUFFER,Se);let Fe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(B,H,W,O,Ze.convert(qe),Ze.convert(Xe),0);let lt=L!==null?Pe.get(L).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,lt);let gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await hg(P,gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(Fe),P.deleteSync(gt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,B=null,H=0){v.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1]);let W=Math.pow(2,-H),O=Math.floor(v.image.width*W),ce=Math.floor(v.image.height*W),ge=B!==null?B.x:0,Se=B!==null?B.y:0;E.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,ge,Se,O,ce),De.unbindTexture()};let e0=P.createFramebuffer(),t0=P.createFramebuffer();this.copyTextureToTexture=function(v,B,H=null,W=null,O=0,ce=null){v.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,v=arguments[1],B=arguments[2],ce=arguments[3]||0,H=null),ce===null&&(O!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=O,O=0):ce=0);let ge,Se,we,qe,Xe,Fe,lt,gt,Xt,Ft=v.isCompressedTexture?v.mipmaps[ce]:v.image;if(H!==null)ge=H.max.x-H.min.x,Se=H.max.y-H.min.y,we=H.isBox3?H.max.z-H.min.z:1,qe=H.min.x,Xe=H.min.y,Fe=H.isBox3?H.min.z:0;else{let Zn=Math.pow(2,-O);ge=Math.floor(Ft.width*Zn),Se=Math.floor(Ft.height*Zn),v.isDataArrayTexture?we=Ft.depth:v.isData3DTexture?we=Math.floor(Ft.depth*Zn):we=1,qe=0,Xe=0,Fe=0}W!==null?(lt=W.x,gt=W.y,Xt=W.z):(lt=0,gt=0,Xt=0);let ht=Ze.convert(B.format),Ue=Ze.convert(B.type),cn;B.isData3DTexture?(E.setTexture3D(B,0),cn=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),cn=P.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),cn=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let _t=P.getParameter(P.UNPACK_ROW_LENGTH),di=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Pr=P.getParameter(P.UNPACK_SKIP_PIXELS),Ln=P.getParameter(P.UNPACK_SKIP_ROWS),Wo=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);let Nt=v.isDataArrayTexture||v.isData3DTexture,Kn=B.isDataArrayTexture||B.isData3DTexture;if(v.isDepthTexture){let Zn=Pe.get(v),vn=Pe.get(B),wn=Pe.get(Zn.__renderTarget),hh=Pe.get(vn.__renderTarget);De.bindFramebuffer(P.READ_FRAMEBUFFER,wn.__webglFramebuffer),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,hh.__webglFramebuffer);for(let Ys=0;Ys<we;Ys++)Nt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.get(v).__webglTexture,O,Fe+Ys),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.get(B).__webglTexture,ce,Xt+Ys)),P.blitFramebuffer(qe,Xe,ge,Se,lt,gt,ge,Se,P.DEPTH_BUFFER_BIT,P.NEAREST);De.bindFramebuffer(P.READ_FRAMEBUFFER,null),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Pe.has(v)){let Zn=Pe.get(v),vn=Pe.get(B);De.bindFramebuffer(P.READ_FRAMEBUFFER,e0),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,t0);for(let wn=0;wn<we;wn++)Nt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zn.__webglTexture,O,Fe+wn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zn.__webglTexture,O),Kn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vn.__webglTexture,ce,Xt+wn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vn.__webglTexture,ce),O!==0?P.blitFramebuffer(qe,Xe,ge,Se,lt,gt,ge,Se,P.COLOR_BUFFER_BIT,P.NEAREST):Kn?P.copyTexSubImage3D(cn,ce,lt,gt,Xt+wn,qe,Xe,ge,Se):P.copyTexSubImage2D(cn,ce,lt,gt,qe,Xe,ge,Se);De.bindFramebuffer(P.READ_FRAMEBUFFER,null),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Kn?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(cn,ce,lt,gt,Xt,ge,Se,we,ht,Ue,Ft.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(cn,ce,lt,gt,Xt,ge,Se,we,ht,Ft.data):P.texSubImage3D(cn,ce,lt,gt,Xt,ge,Se,we,ht,Ue,Ft):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ce,lt,gt,ge,Se,ht,Ue,Ft.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ce,lt,gt,Ft.width,Ft.height,ht,Ft.data):P.texSubImage2D(P.TEXTURE_2D,ce,lt,gt,ge,Se,ht,Ue,Ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,_t),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,di),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pr),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ln),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Wo),ce===0&&B.generateMipmaps&&P.generateMipmap(cn),De.unbindTexture()},this.copyTextureToTexture3D=function(v,B,H=null,W=null,O=0){return v.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,v=arguments[2],B=arguments[3],O=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,B,H,W,O)},this.initRenderTarget=function(v){Pe.get(v).__webglFramebuffer===void 0&&E.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),De.unbindTexture()},this.resetState=function(){w=0,N=0,L=null,De.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var qg={type:"change"},Id={type:"start"},$g={type:"end"},ru=new nr,Xg=new Cn,rE=Math.cos(70*vo.DEG2RAD),Jt=new D,Nn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pd=1e-6,ou=class extends _a{constructor(e,t=null){super(e,t),this.state=St.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Jn,this._lastTargetPosition=new D,this._quat=new Jn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new co,this._sphericalDelta=new co,this._scale=1,this._panOffset=new D,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new D,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aE.bind(this),this._onPointerDown=oE.bind(this),this._onPointerUp=cE.bind(this),this._onContextMenu=mE.bind(this),this._onMouseWheel=hE.bind(this),this._onKeyDown=dE.bind(this),this._onTouchStart=fE.bind(this),this._onTouchMove=pE.bind(this),this._onMouseDown=lE.bind(this),this._onMouseMove=uE.bind(this),this._interceptControlDown=gE.bind(this),this._interceptControlUp=_E.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qg),this.update(),this.state=St.NONE}update(e=null){let t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Nn:n>Math.PI&&(n-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Jt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ru.origin.copy(this.object.position),ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ru.direction))<rE?this.object.lookAt(this.target):(Xg.setFromNormalAndCoplanarPoint(this.object.up,this.target),ru.intersectPlane(Xg,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pd||this._lastTargetPosition.distanceToSquared(this.target)>Pd?(this.dispatchEvent(qg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Nn/60*this.autoRotateSpeed*e:Nn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Jt.copy(s).sub(this.target);let r=Jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function oE(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function aE(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function cE(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($g),this.state=St.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lE(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=St.DOLLY;break;case Ds.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}break;case Ds.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(Id)}function uE(i){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hE(i){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(i.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($g))}function dE(i){this.enabled!==!1&&this._handleKeyDown(i)}function fE(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=St.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=St.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(Id)}function pE(i){switch(this._trackPointer(i),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=St.NONE}}function mE(i){this.enabled!==!1&&i.preventDefault()}function gE(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _E(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var xE=["alphaMap","alphaTest","anisotropy","anisotropyMap","anisotropyRotation","aoMap","attenuationColor","attenuationDistance","bumpMap","clearcoat","clearcoatMap","clearcoatNormalMap","clearcoatNormalScale","clearcoatRoughness","color","dispersion","displacementMap","emissive","emissiveMap","envMap","gradientMap","ior","iridescence","iridescenceIOR","iridescenceMap","iridescenceThicknessMap","lightMap","map","matcap","metalness","metalnessMap","normalMap","normalScale","opacity","roughness","roughnessMap","sheen","sheenColor","sheenColorMap","sheenRoughnessMap","shininess","specular","specularColor","specularColorMap","specularIntensity","specularIntensityMap","specularMap","thickness","transmission","transmissionMap"],Yd=class{constructor(e){this.renderObjects=new WeakMap,this.hasNode=this.containsNode(e),this.hasAnimation=e.object.isSkinnedMesh===!0,this.refreshUniforms=xE,this.renderId=0}firstInitialization(e){return this.renderObjects.has(e)===!1?(this.getRenderObjectData(e),!0):!1}getRenderObjectData(e){let t=this.renderObjects.get(e);if(t===void 0){let{geometry:n,material:s,object:r}=e;if(t={material:this.getMaterialData(s),geometry:{id:n.id,attributes:this.getAttributesData(n.attributes),indexVersion:n.index?n.index.version:null,drawRange:{start:n.drawRange.start,count:n.drawRange.count}},worldMatrix:r.matrixWorld.clone()},r.center&&(t.center=r.center.clone()),r.morphTargetInfluences&&(t.morphTargetInfluences=r.morphTargetInfluences.slice()),e.bundle!==null&&(t.version=e.bundle.version),t.material.transmission>0){let{width:o,height:a}=e.context;t.bufferWidth=o,t.bufferHeight=a}this.renderObjects.set(e,t)}return t}getAttributesData(e){let t={};for(let n in e){let s=e[n];t[n]={version:s.version}}return t}containsNode(e){let t=e.material;for(let n in t)if(t[n]&&t[n].isNode)return!0;return e.renderer.nodes.modelViewMatrix!==null||e.renderer.nodes.modelNormalViewMatrix!==null}getMaterialData(e){let t={};for(let n of this.refreshUniforms){let s=e[n];s!=null&&(typeof s=="object"&&s.clone!==void 0?s.isTexture===!0?t[n]={id:s.id,version:s.version}:t[n]=s.clone():t[n]=s)}return t}equals(e){let{object:t,material:n,geometry:s}=e,r=this.getRenderObjectData(e);if(r.worldMatrix.equals(t.matrixWorld)!==!0)return r.worldMatrix.copy(t.matrixWorld),!1;let o=r.material;for(let x in o){let g=o[x],p=n[x];if(g.equals!==void 0){if(g.equals(p)===!1)return g.copy(p),!1}else if(p.isTexture===!0){if(g.id!==p.id||g.version!==p.version)return g.id=p.id,g.version=p.version,!1}else if(g!==p)return o[x]=p,!1}if(o.transmission>0){let{width:x,height:g}=e.context;if(r.bufferWidth!==x||r.bufferHeight!==g)return r.bufferWidth=x,r.bufferHeight=g,!1}let a=r.geometry,c=s.attributes,l=a.attributes,u=Object.keys(l),h=Object.keys(c);if(a.id!==s.id)return a.id=s.id,!1;if(u.length!==h.length)return r.geometry.attributes=this.getAttributesData(c),!1;for(let x of u){let g=l[x],p=c[x];if(p===void 0)return delete l[x],!1;if(g.version!==p.version)return g.version=p.version,!1}let d=s.index,m=a.indexVersion,_=d?d.version:null;if(m!==_)return a.indexVersion=_,!1;if(a.drawRange.start!==s.drawRange.start||a.drawRange.count!==s.drawRange.count)return a.drawRange.start=s.drawRange.start,a.drawRange.count=s.drawRange.count,!1;if(r.morphTargetInfluences){let x=!1;for(let g=0;g<r.morphTargetInfluences.length;g++)r.morphTargetInfluences[g]!==t.morphTargetInfluences[g]&&(x=!0);if(x)return!0}return r.center&&r.center.equals(t.center)===!1?(r.center.copy(t.center),!0):(e.bundle!==null&&(r.version=e.bundle.version),!0)}needsRefresh(e,t){if(this.hasNode||this.hasAnimation||this.firstInitialization(e))return!0;let{renderId:n}=t;if(this.renderId!==n)return this.renderId=n,!0;let s=e.object.static===!0,r=e.bundle!==null&&e.bundle.static===!0&&this.getRenderObjectData(e).version===e.bundle.version;return s||r?!1:this.equals(e)!==!0}};function _c(i,e=0){let t=3735928559^e,n=1103547991^e;if(i instanceof Array)for(let s=0,r;s<i.length;s++)r=i[s],t=Math.imul(t^r,2654435761),n=Math.imul(n^r,1597334677);else for(let s=0,r;s<i.length;s++)r=i.charCodeAt(s),t=Math.imul(t^r,2654435761),n=Math.imul(n^r,1597334677);return t=Math.imul(t^t>>>16,2246822507),t^=Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}var yE=i=>_c(i),g_=i=>_c(i),__=(...i)=>_c(i);function x_(i,e=!1){let t=[];i.isNode===!0&&(t.push(i.id),i=i.getSelf());for(let{property:n,childNode:s}of yu(i))t.push(_c(n.slice(0,-4)),s.getCacheKey(e));return _c(t)}function*yu(i,e=!1){for(let t in i){if(t.startsWith("_")===!0)continue;let n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){let r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(let s in n){let r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}var vE=new Map([[1,"float"],[2,"vec2"],[3,"vec3"],[4,"vec4"],[9,"mat3"],[16,"mat4"]]),Yg=new WeakMap;function TE(i){return vE.get(i)}function vu(i){if(/[iu]?vec\d/.test(i))return i.startsWith("ivec")?Int32Array:i.startsWith("uvec")?Uint32Array:Float32Array;if(/mat\d/.test(i)||/float/.test(i))return Float32Array;if(/uint/.test(i))return Uint32Array;if(/int/.test(i))return Int32Array;throw new Error(`THREE.NodeUtils: Unsupported type: ${i}`)}function Up(i){if(/float|int|uint/.test(i))return 1;if(/vec2/.test(i))return 2;if(/vec3/.test(i))return 3;if(/vec4/.test(i)||/mat2/.test(i))return 4;if(/mat3/.test(i))return 9;if(/mat4/.test(i))return 16;console.error("THREE.TSL: Unsupported type:",i)}function Vs(i){if(i==null)return null;let e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix2===!0?"mat2":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function y_(i,...e){let t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Be(...e):t==="vec2"?new Le(...e):t==="vec3"?new D(...e):t==="vec4"?new pt(...e):t==="mat2"?new ma(...e):t==="mat3"?new ke(...e):t==="mat4"?new ot(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?S_(e[0]):null}function v_(i){let e=Yg.get(i);return e===void 0&&(e={},Yg.set(i,e)),e}function T_(i){let e="",t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function S_(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}var Kd={VERTEX:"vertex",FRAGMENT:"fragment"},mt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},SE={BOOLEAN:"bool",INTEGER:"int",FLOAT:"float",VECTOR2:"vec2",VECTOR3:"vec3",VECTOR4:"vec4",MATRIX2:"mat2",MATRIX3:"mat3",MATRIX4:"mat4"},Fi={READ_ONLY:"readOnly",WRITE_ONLY:"writeOnly",READ_WRITE:"readWrite"},b_=["fragment","vertex"],bE=["setup","analyze","generate"],ME=[...b_,"compute"],Oo=["x","y","z","w"],AE=0,Ce=class extends Bn{static get type(){return"Node"}constructor(e=null){super(),this.nodeType=e,this.updateType=mt.NONE,this.updateBeforeType=mt.NONE,this.updateAfterType=mt.NONE,this.uuid=vo.generateUUID(),this.version=0,this.global=!1,this.isNode=!0,this._cacheKey=null,this._cacheKeyVersion=0,Object.defineProperty(this,"id",{value:AE++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,mt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,mt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,mt.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(let{childNode:e}of yu(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(let t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=__(x_(this,e),this.customCacheKey()),this._cacheKeyVersion=this.version),this._cacheKey}customCacheKey(){return 0}getScope(){return this}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getUpdateAfterType(){return this.updateAfterType}getElementType(e){let t=this.getNodeType(e);return e.getElementType(t)}getMemberType(){return"void"}getNodeType(e){let t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){let t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){let t=e.getNodeProperties(this),n=0;for(let s of this.getChildren())t["node"+n++]=s;return t.outputNode||null}analyze(e){if(e.increaseUsage(this)===1){let n=e.getNodeProperties(this);for(let s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){let{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}updateAfter(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){let n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null,r=e.getBuildStage();if(r==="setup"){this.updateReference(e);let o=e.getNodeProperties(this);if(o.initialized!==!0){o.initialized=!0;let a=this.setup(e),c=a&&a.isNode===!0;for(let l of Object.values(o))l&&l.isNode===!0&&l.build(e);c&&a.build(e),o.outputNode=a}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){let a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0?(s=this.generate(e)||"",c.snippet=s):c.flowCodes!==void 0&&e.context.nodeBlock!==void 0&&e.addFlowCodeHierarchy(this,e.context.nodeBlock),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),e.addSequentialNode(this),s}getSerializeChildren(){return yu(this)}serialize(e){let t=this.getSerializeChildren(),n={};for(let{property:s,index:r,childNode:o}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=o.toJSON(e.meta).uuid):n[s]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){let t=e.meta.nodes;for(let n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){let s=[];for(let r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){let s={};for(let r in e.inputNodes[n]){let o=e.inputNodes[n][r];s[r]=t[o]}this[n]=s}else{let s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){let{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}if(s){let a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}},us=class extends Ce{static get type(){return"ArrayElementNode"}constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){let t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}},Tu=class extends Ce{static get type(){return"ConvertNode"}constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){let t=this.node.getNodeType(e),n=null;for(let s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){let n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}},It=class extends Ce{static get type(){return"TempNode"}constructor(e=null){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){let s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(s!=="void"&&t!=="void"&&this.hasDependencies(e)){let o=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`,this),r.snippet=o,r.propertyName=c,e.format(r.propertyName,s,t)}}return super.build(e,t)}},Zd=class extends It{static get type(){return"JoinNode"}constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){let n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),o=[];for(let c of s){let l=c.build(e),u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}let a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}},EE=Oo.join(""),xc=class extends Ce{static get type(){return"SplitNode"}constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(let t of this.components)e=Math.max(Oo.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){let n=this.node,s=e.getTypeLength(n.getNodeType(e)),r=null;if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));let c=n.build(e,o);this.components.length===s&&this.components===EE.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}},jd=class extends It{static get type(){return"SetNode"}constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){let{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),o=e.getComponentType(s.getNodeType(e)),a=e.getTypeFromLength(n.length,o),c=s.build(e,a),l=t.build(e,r),u=e.getTypeLength(r),h=[];for(let d=0;d<u;d++){let m=Oo[d];m===n[0]?(h.push(c),d+=n.length-1):h.push(l+"."+m)}return`${e.getType(r)}( ${h.join(", ")} )`}},Qd=class extends It{static get type(){return"FlipNode"}constructor(e,t){super(),this.sourceNode=e,this.components=t}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){let{components:t,sourceNode:n}=this,s=this.getNodeType(e),r=n.build(e),o=e.getVarFromNode(this),a=e.getPropertyName(o);e.addLineFlowCode(a+" = "+r,this);let c=e.getTypeLength(s),l=[],u=0;for(let h=0;h<c;h++){let d=Oo[h];d===t[u]?(l.push("1.0 - "+(a+"."+d)),u++):l.push(a+"."+d)}return`${e.getType(s)}( ${l.join(", ")} )`}},yc=class extends Ce{static get type(){return"InputNode"}constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Vs(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Vs(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=T_(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?y_(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}},Kg=/float|u?int/,Xn=class extends yc{static get type(){return"ConstNode"}constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){let n=this.getNodeType(e);return Kg.test(n)&&Kg.test(t)?e.generateConst(t,this.value):e.format(this.generateConst(e),n,t)}},Jd=class extends Ce{static get type(){return"MemberNode"}constructor(e,t){super(),this.node=e,this.property=t,this.isMemberNode=!0}getNodeType(e){return this.node.getMemberType(e,this.property)}generate(e){return this.node.build(e)+"."+this.property}},Lo=null,Po=new Map;function q(i,e){if(Po.has(i)){console.warn(`Redefinition of method chaining ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);Po.set(i,e)}var M_=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Zg=i=>M_(i).split("").sort().join(""),A_={setup(i,e){let t=e.shift();return i(Mc(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(Lo.assign(t,...n),t);if(Po.has(e)){let n=Po.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&Po.has(e.slice(0,e.length-6))){let n=Po.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=M_(e),Z(new xc(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Zg(e.slice(3).toLowerCase()),n=>Z(new jd(i,e,n));if(/^flip[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Zg(e.slice(4).toLowerCase()),()=>Z(new Qd(Z(i),e));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),Z(new xc(i,e));if(/^\d+$/.test(e)===!0)return Z(new us(t,new Xn(Number(e),"uint")));if(/^get$/.test(e)===!0)return n=>Z(new Jd(t,n))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},Dd=new WeakMap,jg=new WeakMap,wE=function(i,e=null){let t=Vs(i);if(t==="node"){let n=Dd.get(i);return n===void 0&&(n=new Proxy(i,A_),Dd.set(i,n),Dd.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return Z(nf(i,e));if(t==="shader")return z(i)}return i},RE=function(i,e=null){for(let t in i)i[t]=Z(i[t],e);return i},CE=function(i,e=null){let t=i.length;for(let n=0;n<t;n++)i[n]=Z(i[n],e);return i},NE=function(i,e=null,t=null,n=null){let s=r=>Z(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...vr(r))):t!==null?(t=Z(t),(...r)=>s(new i(e,...vr(r),t))):(...r)=>s(new i(e,...vr(r)))},PE=function(i,...e){return Z(new i(...vr(e)))},ef=class extends Ce{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){return this.shaderNode.nodeType||this.getOutputNode(e).getNodeType(e)}getMemberType(e,t){return this.getOutputNode(e).getMemberType(e,t)}call(e){let{shaderNode:t,inputNodes:n}=this,s=e.getNodeProperties(t);if(s.onceOutput)return s.onceOutput;let r=null;if(t.layout){let o=jg.get(e.constructor);o===void 0&&(o=new WeakMap,jg.set(e.constructor,o));let a=o.get(t);a===void 0&&(a=Z(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),r=Z(a.call(n))}else{let o=t.jsFunc,a=n!==null||o.length>1?o(n||[],e):o(e);r=Z(a)}return t.once&&(s.onceOutput=r),r}getOutputNode(e){let t=e.getNodeProperties(this);return t.outputNode===null&&(t.outputNode=this.setupOutput(e)),t.outputNode}setup(e){return this.getOutputNode(e)}setupOutput(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){return this.getOutputNode(e).build(e,t)}},tf=class extends Ce{constructor(e,t){super(t),this.jsFunc=e,this.layout=null,this.global=!0,this.once=!1}setLayout(e){return this.layout=e,this}call(e=null){return Mc(e),Z(new ef(this,e))}setup(){return this.call()}},IE=[!1,!0],DE=[0,1,2,3],LE=[-1,-2],E_=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Bp=new Map;for(let i of IE)Bp.set(i,new Xn(i));var Op=new Map;for(let i of DE)Op.set(i,new Xn(i,"uint"));var Vp=new Map([...Op].map(i=>new Xn(i.value,"int")));for(let i of LE)Vp.set(i,new Xn(i,"int"));var Xu=new Map([...Vp].map(i=>new Xn(i.value)));for(let i of E_)Xu.set(i,new Xn(i));for(let i of E_)Xu.set(-i,new Xn(-i));var $u={bool:Bp,uint:Op,ints:Vp,float:Xu},Qg=new Map([...Bp,...Xu]),nf=(i,e)=>Qg.has(i)?Qg.get(i):i.isNode===!0?i:new Xn(i,e),FE=i=>{try{return i.getNodeType()}catch{return}},Zt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[y_(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return Z(e.get(t[0]));if(t.length===1){let s=nf(t[0],i);return FE(s)===i?Z(s):Z(new Tu(s,i))}let n=t.map(s=>nf(s));return Z(new Zd(n,i))}},vc=i=>typeof i=="object"&&i!==null?i.value:i,w_=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function mc(i,e){return new Proxy(new tf(i,e),A_)}var Z=(i,e=null)=>wE(i,e),Mc=(i,e=null)=>new RE(i,e),vr=(i,e=null)=>new CE(i,e),Y=(...i)=>new NE(...i),le=(...i)=>new PE(...i),z=(i,e)=>{let t=new mc(i,e),n=(...s)=>{let r;return Mc(s),s[0]&&s[0].isNode?r=[...s]:r=s[0],t.call(r)};return n.shaderNode=t,n.setLayout=s=>(t.setLayout(s),n),n.once=()=>(t.once=!0,n),n},UE=(...i)=>(console.warn("TSL.ShaderNode: tslFn() has been renamed to Fn()."),z(...i));q("toGlobal",i=>(i.global=!0,i));var sf=i=>{Lo=i},R_=()=>Lo,et=(...i)=>Lo.If(...i);function C_(i){return Lo&&Lo.add(i),i}q("append",C_);var N_=new Zt("color"),R=new Zt("float",$u.float),C=new Zt("int",$u.ints),fe=new Zt("uint",$u.uint),hs=new Zt("bool",$u.bool),oe=new Zt("vec2"),en=new Zt("ivec2"),P_=new Zt("uvec2"),I_=new Zt("bvec2"),V=new Zt("vec3"),D_=new Zt("ivec3"),Vo=new Zt("uvec3"),Gp=new Zt("bvec3"),Ge=new Zt("vec4"),L_=new Zt("ivec4"),F_=new Zt("uvec4"),U_=new Zt("bvec4"),Yu=new Zt("mat2"),ai=new Zt("mat3"),Tr=new Zt("mat4"),BE=(i="")=>Z(new Xn(i,"string")),OE=i=>Z(new Xn(i,"ArrayBuffer"));q("toColor",N_);q("toFloat",R);q("toInt",C);q("toUint",fe);q("toBool",hs);q("toVec2",oe);q("toIVec2",en);q("toUVec2",P_);q("toBVec2",I_);q("toVec3",V);q("toIVec3",D_);q("toUVec3",Vo);q("toBVec3",Gp);q("toVec4",Ge);q("toIVec4",L_);q("toUVec4",F_);q("toBVec4",U_);q("toMat2",Yu);q("toMat3",ai);q("toMat4",Tr);var B_=Y(us),O_=(i,e)=>Z(new Tu(Z(i),e)),VE=(i,e)=>Z(new xc(Z(i),e));q("element",B_);q("convert",O_);var Su=class extends It{static get type(){return"ArrayNode"}constructor(e,t,n=null){super(e),this.count=t,this.values=n,this.isArrayNode=!0}getNodeType(e){return this.nodeType===null&&(this.nodeType=this.values[0].getNodeType(e)),this.nodeType}getElementType(e){return this.getNodeType(e)}generate(e){let t=this.getNodeType(e);return e.generateArray(t,this.count,this.values)}},V_=(...i)=>{let e;if(i.length===1){let t=i[0];e=new Su(null,t.length,t)}else{let t=i[0],n=i[1];e=new Su(t,n)}return Z(e)};q("toArray",(i,e)=>V_(Array(e).fill(i)));var bu=class extends Ce{static get type(){return"UniformGroupNode"}constructor(e,t=!1,n=1){super("string"),this.name=e,this.shared=t,this.order=n,this.isUniformGroup=!0}serialize(e){super.serialize(e),e.name=this.name,e.version=this.version,e.shared=this.shared}deserialize(e){super.deserialize(e),this.name=e.name,this.version=e.version,this.shared=e.shared}},G_=i=>new bu(i),Ku=(i,e=0)=>new bu(i,!0,e),GE=Ku("frame"),at=Ku("render"),z_=G_("object"),br=class extends yc{static get type(){return"UniformNode"}constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.name="",this.groupNode=z_}label(e){return this.name=e,this}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){let n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{let r=e(s,n);r!==void 0&&(this.value=r)},t)}generate(e,t){let n=this.getNodeType(e),s=this.getUniformHash(e),r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);let o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,this.name||e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}},Ke=(i,e)=>{let t=w_(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return Z(new br(n,t))},ut=class extends Ce{static get type(){return"PropertyNode"}constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}},k_=(i,e)=>Z(new ut(i,e)),Tc=(i,e)=>Z(new ut(i,e,!0)),Si=le(ut,"vec4","DiffuseColor"),rf=le(ut,"vec3","EmissiveColor"),H_=le(ut,"float","Roughness"),zE=le(ut,"float","Metalness"),kE=le(ut,"float","Clearcoat"),HE=le(ut,"float","ClearcoatRoughness"),WE=le(ut,"vec3","Sheen"),qE=le(ut,"float","SheenRoughness"),W_=le(ut,"float","Iridescence"),XE=le(ut,"float","IridescenceIOR"),$E=le(ut,"float","IridescenceThickness"),of=le(ut,"float","AlphaT"),q_=le(ut,"float","Anisotropy"),gu=le(ut,"vec3","AnisotropyT"),Io=le(ut,"vec3","AnisotropyB"),YE=le(ut,"color","SpecularColor"),KE=le(ut,"float","SpecularF90"),ZE=le(ut,"float","Shininess"),Sc=le(ut,"vec4","Output"),jE=le(ut,"float","dashSize"),QE=le(ut,"float","gapSize"),JE=le(ut,"float","pointWidth"),ew=le(ut,"float","IOR"),tw=le(ut,"float","Transmission"),nw=le(ut,"float","Thickness"),iw=le(ut,"float","AttenuationDistance"),sw=le(ut,"color","AttenuationColor"),rw=le(ut,"float","Dispersion"),af=class extends It{static get type(){return"AssignNode"}constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){let{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){let n=e.getTypeLength(t.node.getNodeType(e));return Oo.join("").slice(0,n)!==t.components}return!1}generate(e,t){let{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,o),l=s.getNodeType(e),u=e.getDataFromNode(this),h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){let d=e.getVarFromNode(this,null,o),m=e.getPropertyName(d);e.addLineFlowCode(`${m} = ${c}`,this);let _=n.node.context({assign:!0}).build(e);for(let x=0;x<n.components.length;x++){let g=n.components[x];e.addLineFlowCode(`${_}.${g} = ${m}[ ${x} ]`,this)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h,this),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}},X_=Y(af);q("assign",X_);var cf=class extends It{static get type(){return"FunctionCallNode"}constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){let t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters,o=(c,l)=>{let u=l.type,h=u==="pointer",d;return h?d="&"+c.build(e):d=c.build(e,u),d};if(Array.isArray(r))for(let c=0;c<r.length;c++)t.push(o(r[c],s[c]));else for(let c of s){let l=r[c.name];if(l!==void 0)t.push(o(l,c));else throw new Error(`FunctionCallNode: Input '${c.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}},$_=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?vr(e):Mc(e[0]),Z(new cf(Z(i),e)));q("call",$_);var Dt=class i extends It{static get type(){return"OperatorNode"}constructor(e,t,n,...s){if(super(),s.length>0){let r=new i(e,t,n);for(let o=0;o<s.length-1;o++)r=new i(e,r,s[o]);t=r,n=s[s.length-1]}this.op=e,this.aNode=t,this.bNode=n,this.isOperatorNode=!0}getNodeType(e,t){let n=this.op,s=this.aNode,r=this.bNode,o=s.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){let c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else{if(e.isMatrix(o)){if(a==="float")return o;if(e.isVector(a))return e.getVectorFromMatrix(o);if(e.isMatrix(a))return o}else if(e.isMatrix(a)){if(o==="float")return a;if(e.isVector(o))return e.getVectorFromMatrix(a)}return e.getTypeLength(a)>e.getTypeLength(o)?a:o}}generate(e,t){let n=this.op,s=this.aNode,r=this.bNode,o=this.getNodeType(e,t),a=null,c=null;o!=="void"?(a=s.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a!==c&&(a=c="float"):n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)?c==="float"?c="float":e.isVector(c)?c=e.getVectorFromMatrix(a):e.isMatrix(c)||(a=c=o):e.isMatrix(c)?a==="float"?a="float":e.isVector(a)?a=e.getVectorFromMatrix(c):a=c=o:a=c=o):a=c=o;let l=s.build(e,a),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.useComparisonMethod?e.format(`${e.getMethod("lessThan",t)}( ${l}, ${u} )`,o,t):e.format(`( ${l} < ${u} )`,o,t):n==="<="&&h>1?e.useComparisonMethod?e.format(`${e.getMethod("lessThanEqual",t)}( ${l}, ${u} )`,o,t):e.format(`( ${l} <= ${u} )`,o,t):n===">"&&h>1?e.useComparisonMethod?e.format(`${e.getMethod("greaterThan",t)}( ${l}, ${u} )`,o,t):e.format(`( ${l} > ${u} )`,o,t):n===">="&&h>1?e.useComparisonMethod?e.format(`${e.getMethod("greaterThanEqual",t)}( ${l}, ${u} )`,o,t):e.format(`( ${l} >= ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.isMatrix(a)&&c==="float"?e.format(`( ${u} ${n} ${l} )`,o,t):a==="float"&&e.isMatrix(c)?e.format(`${l} ${n} ${u}`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.isMatrix(a)&&c==="float"?e.format(`${u} ${n} ${l}`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}},Ht=Y(Dt,"+"),tt=Y(Dt,"-"),He=Y(Dt,"*"),ds=Y(Dt,"/"),zp=Y(Dt,"%"),Y_=Y(Dt,"=="),K_=Y(Dt,"!="),Z_=Y(Dt,"<"),kp=Y(Dt,">"),j_=Y(Dt,"<="),Q_=Y(Dt,">="),J_=Y(Dt,"&&"),ex=Y(Dt,"||"),tx=Y(Dt,"!"),nx=Y(Dt,"^^"),ix=Y(Dt,"&"),sx=Y(Dt,"~"),rx=Y(Dt,"|"),ox=Y(Dt,"^"),ax=Y(Dt,"<<"),cx=Y(Dt,">>");q("add",Ht);q("sub",tt);q("mul",He);q("div",ds);q("modInt",zp);q("equal",Y_);q("notEqual",K_);q("lessThan",Z_);q("greaterThan",kp);q("lessThanEqual",j_);q("greaterThanEqual",Q_);q("and",J_);q("or",ex);q("not",tx);q("xor",nx);q("bitAnd",ix);q("bitNot",sx);q("bitOr",rx);q("bitXor",ox);q("shiftLeft",ax);q("shiftRight",cx);var lx=(...i)=>(console.warn("TSL.OperatorNode: .remainder() has been renamed to .modInt()."),zp(...i));q("remainder",lx);var G=class i extends It{static get type(){return"MathNode"}constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s,this.isMathNode=!0}getInputType(e){let t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return r>o&&r>a?t:o>a?n:a>r?s:t}getNodeType(e){let t=this.method;return t===i.LENGTH||t===i.DISTANCE||t===i.DOT?"float":t===i.CROSS?"vec3":t===i.ALL?"bool":t===i.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===i.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){let n=this.method,s=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.coordinateSystem;if(n===i.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=Ge(V(h),0):u=Ge(V(u),0);let d=He(u,h).xyz;return wr(d).build(e,t)}else{if(n===i.NEGATE)return e.format("( - "+o.build(e,r)+" )",s,t);if(n===i.ONE_MINUS)return tt(1,o).build(e,t);if(n===i.RECIPROCAL)return ds(1,o).build(e,t);if(n===i.DIFFERENCE)return At(tt(o,a)).build(e,t);{let u=[];return n===i.CROSS||n===i.MOD?u.push(o.build(e,s),a.build(e,s)):l===Sn&&n===i.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l===Sn&&(n===i.MIN||n===i.MAX)||n===i.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===i.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===i.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(l===_i&&n===i.ATAN&&a!==null&&(n="atan2"),u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}};G.ALL="all";G.ANY="any";G.RADIANS="radians";G.DEGREES="degrees";G.EXP="exp";G.EXP2="exp2";G.LOG="log";G.LOG2="log2";G.SQRT="sqrt";G.INVERSE_SQRT="inversesqrt";G.FLOOR="floor";G.CEIL="ceil";G.NORMALIZE="normalize";G.FRACT="fract";G.SIN="sin";G.COS="cos";G.TAN="tan";G.ASIN="asin";G.ACOS="acos";G.ATAN="atan";G.ABS="abs";G.SIGN="sign";G.LENGTH="length";G.NEGATE="negate";G.ONE_MINUS="oneMinus";G.DFDX="dFdx";G.DFDY="dFdy";G.ROUND="round";G.RECIPROCAL="reciprocal";G.TRUNC="trunc";G.FWIDTH="fwidth";G.TRANSPOSE="transpose";G.BITCAST="bitcast";G.EQUALS="equals";G.MIN="min";G.MAX="max";G.MOD="mod";G.STEP="step";G.REFLECT="reflect";G.DISTANCE="distance";G.DIFFERENCE="difference";G.DOT="dot";G.CROSS="cross";G.POW="pow";G.TRANSFORM_DIRECTION="transformDirection";G.MIX="mix";G.CLAMP="clamp";G.REFRACT="refract";G.SMOOTHSTEP="smoothstep";G.FACEFORWARD="faceforward";var ux=R(1e-6),ow=R(1e6),Mu=R(Math.PI),aw=R(Math.PI*2),Hp=Y(G,G.ALL),hx=Y(G,G.ANY),dx=Y(G,G.RADIANS),fx=Y(G,G.DEGREES),px=Y(G,G.EXP),Fo=Y(G,G.EXP2),Wp=Y(G,G.LOG),ls=Y(G,G.LOG2),zi=Y(G,G.SQRT),qp=Y(G,G.INVERSE_SQRT),Ui=Y(G,G.FLOOR),Zu=Y(G,G.CEIL),wr=Y(G,G.NORMALIZE),gs=Y(G,G.FRACT),Wn=Y(G,G.SIN),rs=Y(G,G.COS),mx=Y(G,G.TAN),gx=Y(G,G.ASIN),_x=Y(G,G.ACOS),Xp=Y(G,G.ATAN),At=Y(G,G.ABS),$p=Y(G,G.SIGN),Au=Y(G,G.LENGTH),xx=Y(G,G.NEGATE),yx=Y(G,G.ONE_MINUS),Yp=Y(G,G.DFDX),Kp=Y(G,G.DFDY),vx=Y(G,G.ROUND),Tx=Y(G,G.RECIPROCAL),Zp=Y(G,G.TRUNC),Sx=Y(G,G.FWIDTH),bx=Y(G,G.TRANSPOSE),cw=Y(G,G.BITCAST),Mx=Y(G,G.EQUALS),$n=Y(G,G.MIN),on=Y(G,G.MAX),jp=Y(G,G.MOD),ju=Y(G,G.STEP),Ax=Y(G,G.REFLECT),Ex=Y(G,G.DISTANCE),wx=Y(G,G.DIFFERENCE),ks=Y(G,G.DOT),Qu=Y(G,G.CROSS),bi=Y(G,G.POW),Rx=Y(G,G.POW,2),Cx=Y(G,G.POW,3),Nx=Y(G,G.POW,4),Px=Y(G,G.TRANSFORM_DIRECTION),Ix=i=>He($p(i),bi(At(i),1/3)),Qp=i=>ks(i,i),zt=Y(G,G.MIX),fs=(i,e=0,t=1)=>Z(new G(G.CLAMP,Z(i),Z(e),Z(t))),Dx=i=>fs(i),Lx=Y(G,G.REFRACT),Mr=Y(G,G.SMOOTHSTEP),Jp=Y(G,G.FACEFORWARD),Fx=z(([i])=>{let n=43758.5453,s=ks(i.xy,oe(12.9898,78.233)),r=jp(s,Mu);return gs(Wn(r).mul(n))}),Ux=(i,e,t)=>zt(e,t,i),Bx=(i,e,t)=>Mr(e,t,i),Ox=(i,e)=>(console.warn('THREE.TSL: "atan2" is overloaded. Use "atan" instead.'),Xp(i,e)),lw=Jp,uw=qp;q("all",Hp);q("any",hx);q("equals",Mx);q("radians",dx);q("degrees",fx);q("exp",px);q("exp2",Fo);q("log",Wp);q("log2",ls);q("sqrt",zi);q("inverseSqrt",qp);q("floor",Ui);q("ceil",Zu);q("normalize",wr);q("fract",gs);q("sin",Wn);q("cos",rs);q("tan",mx);q("asin",gx);q("acos",_x);q("atan",Xp);q("abs",At);q("sign",$p);q("length",Au);q("lengthSq",Qp);q("negate",xx);q("oneMinus",yx);q("dFdx",Yp);q("dFdy",Kp);q("round",vx);q("reciprocal",Tx);q("trunc",Zp);q("fwidth",Sx);q("atan2",Ox);q("min",$n);q("max",on);q("mod",jp);q("step",ju);q("reflect",Ax);q("distance",Ex);q("dot",ks);q("cross",Qu);q("pow",bi);q("pow2",Rx);q("pow3",Cx);q("pow4",Nx);q("transformDirection",Px);q("mix",Ux);q("clamp",fs);q("refract",Lx);q("smoothstep",Bx);q("faceForward",Jp);q("difference",wx);q("saturate",Dx);q("cbrt",Ix);q("transpose",bx);q("rand",Fx);var lf=class extends Ce{static get type(){return"ConditionalNode"}constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){let{ifNode:t,elseNode:n}=e.getNodeProperties(this);if(t===void 0)return this.setup(e),this.getNodeType(e);let s=t.getNodeType(e);if(n!==null){let r=n.getNodeType(e);if(e.getTypeLength(r)>e.getTypeLength(s))return r}return s}setup(e){let t=this.condNode.cache(),n=this.ifNode.cache(),s=this.elseNode?this.elseNode.cache():null,r=e.context.nodeBlock;e.getDataFromNode(n).parentNodeBlock=r,s!==null&&(e.getDataFromNode(s).parentNodeBlock=r);let o=e.getNodeProperties(this);o.condNode=t,o.ifNode=n.context({nodeBlock:n}),o.elseNode=s?s.context({nodeBlock:s}):null}generate(e,t){let n=this.getNodeType(e),s=e.getDataFromNode(this);if(s.nodeProperty!==void 0)return s.nodeProperty;let{condNode:r,ifNode:o,elseNode:a}=e.getNodeProperties(this),c=t!=="void",l=c?k_(n).build(e):"";s.nodeProperty=l;let u=r.build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=o.build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=a.build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}},Pn=Y(lf);q("select",Pn);var Vx=(...i)=>(console.warn("TSL.ConditionalNode: cond() has been renamed to select()."),Pn(...i));q("cond",Vx);var Eu=class extends Ce{static get type(){return"ContextNode"}constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.value=t}getScope(){return this.node.getScope()}getNodeType(e){return this.node.getNodeType(e)}analyze(e){this.node.build(e)}setup(e){let t=e.getContext();e.setContext({...e.context,...this.value});let n=this.node.build(e);return e.setContext(t),n}generate(e,t){let n=e.getContext();e.setContext({...e.context,...this.value});let s=this.node.build(e,t);return e.setContext(n),s}},em=Y(Eu),Gx=(i,e)=>em(i,{label:e});q("context",em);q("label",Gx);var uf=class extends Ce{static get type(){return"VarNode"}constructor(e,t=null,n=!1){super(),this.node=e,this.name=t,this.global=!0,this.isVarNode=!0,this.readOnly=n}getHash(e){return this.name||super.getHash(e)}getMemberType(e,t){return this.node.getMemberType(e,t)}getElementType(e){return this.node.getElementType(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){let{node:t,name:n,readOnly:s}=this,{renderer:r}=e,o=r.backend.isWebGPUBackend===!0,a=!1,c=!1;s&&(a=e.isDeterministic(t),c=o?s:a);let l=e.getVectorType(this.getNodeType(e)),u=t.build(e,l),h=e.getVarFromNode(this,n,l,void 0,c),d=e.getPropertyName(h),m=d;if(c)if(o)m=a?`const ${d}`:`let ${d}`;else{let _=e.getArrayCount(t);m=`const ${e.getVar(h.type,d,_)}`}return e.addLineFlowCode(`${m} = ${u}`,this),d}},tm=Y(uf),zx=(i,e=null)=>tm(i,e).append(),kx=(i,e=null)=>tm(i,e,!0).append();q("toVar",zx);q("toConst",kx);var Hx=i=>(console.warn('TSL: "temp( node )" is deprecated. Use "Var( node )" or "node.toVar()" instead.'),tm(i));q("temp",Hx);var hf=class extends Ce{static get type(){return"VaryingNode"}constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}setupVarying(e){let t=e.getNodeProperties(this),n=t.varying;if(n===void 0){let s=this.name,r=this.getNodeType(e);t.varying=n=e.getVaryingFromNode(this,s,r),t.node=this.node}return n.needsInterpolation||(n.needsInterpolation=e.shaderStage==="fragment"),n}setup(e){this.setupVarying(e)}analyze(e){return this.setupVarying(e),this.node.analyze(e)}generate(e){let t=e.getNodeProperties(this),n=this.setupVarying(e),s=e.shaderStage==="fragment"&&t.reassignPosition===!0&&e.context.needsPositionReassign;if(t.propertyName===void 0||s){let r=this.getNodeType(e),o=e.getPropertyName(n,Kd.VERTEX);e.flowNodeFromShaderStage(Kd.VERTEX,this.node,r,o),t.propertyName=o,s?t.reassignPosition=!1:t.reassignPosition===void 0&&e.context.isPositionNodeInput&&(t.reassignPosition=!0)}return e.getPropertyName(n)}},En=Y(hf),Wx=i=>En(i);q("toVarying",En);q("toVertexStage",Wx);q("varying",(...i)=>(console.warn("TSL.VaryingNode: .varying() has been renamed to .toVarying()."),En(...i)));q("vertexStage",(...i)=>(console.warn("TSL.VaryingNode: .vertexStage() has been renamed to .toVertexStage()."),En(...i)));var qx=z(([i])=>{let e=i.mul(.9478672986).add(.0521327014).pow(2.4),t=i.mul(.0773993808),n=i.lessThanEqual(.04045);return zt(e,t,n)}).setLayout({name:"sRGBTransferEOTF",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),Xx=z(([i])=>{let e=i.pow(.41666).mul(1.055).sub(.055),t=i.mul(12.92),n=i.lessThanEqual(.0031308);return zt(e,t,n)}).setLayout({name:"sRGBTransferOETF",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),Ac="WorkingColorSpace",nm="OutputColorSpace",Ar=class extends It{static get type(){return"ColorSpaceNode"}constructor(e,t,n){super("vec4"),this.colorNode=e,this.source=t,this.target=n}resolveColorSpace(e,t){return t===Ac?$e.workingColorSpace:t===nm?e.context.outputColorSpace||e.renderer.outputColorSpace:t}setup(e){let{colorNode:t}=this,n=this.resolveColorSpace(e,this.source),s=this.resolveColorSpace(e,this.target),r=t;return $e.enabled===!1||n===s||!n||!s||($e.getTransfer(n)===dt&&(r=Ge(qx(r.rgb),r.a)),$e.getPrimaries(n)!==$e.getPrimaries(s)&&(r=Ge(ai($e._getMatrix(new ke,n,s)).mul(r.rgb),r.a)),$e.getTransfer(s)===dt&&(r=Ge(Xx(r.rgb),r.a))),r}},$x=i=>Z(new Ar(Z(i),Ac,nm)),Yx=i=>Z(new Ar(Z(i),nm,Ac)),Kx=(i,e)=>Z(new Ar(Z(i),Ac,e)),im=(i,e)=>Z(new Ar(Z(i),e,Ac)),hw=(i,e,t)=>Z(new Ar(Z(i),e,t));q("toOutputColorSpace",$x);q("toWorkingColorSpace",Yx);q("workingToColorSpace",Kx);q("colorSpaceToWorking",im);var dw=class extends us{static get type(){return"ReferenceElementNode"}constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){let t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}},df=class extends Ce{static get type(){return"ReferenceBaseNode"}constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=n,this.node=null,this.group=null,this.updateType=mt.OBJECT}setGroup(e){return this.group=e,this}element(e){return Z(new dw(this,Z(e)))}setNodeType(e){let t=Ke(null,e).getSelf();this.group!==null&&t.setGroup(this.group),this.node=t}getNodeType(e){return this.node===null&&(this.updateReference(e),this.updateValue()),this.node.getNodeType(e)}getValueFromReference(e=this.reference){let{properties:t}=this,n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);let e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}};var ff=class extends df{static get type(){return"RendererReferenceNode"}constructor(e,t,n=null){super(e,t,n),this.renderer=n,this.setGroup(at)}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}},Zx=(i,e,t=null)=>Z(new ff(i,e,t)),pf=class extends It{static get type(){return"ToneMappingNode"}constructor(e,t=Qx,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}customCacheKey(){return __(this.toneMapping)}setup(e){let t=this.colorNode||e.context.color,n=this.toneMapping;if(n===Gn)return t;let s=null,r=e.renderer.library.getToneMappingFunction(n);return r!==null?s=Ge(r(t.rgb,this.exposureNode),t.a):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),s=t),s}},jx=(i,e,t)=>Z(new pf(i,Z(e),Z(t))),Qx=Zx("toneMappingExposure","float");q("toneMapping",(i,e,t)=>jx(e,t,i));var mf=class extends yc{static get type(){return"BufferAttributeNode"}constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=$r,this.instanced=!1,this.attribute=null,this.global=!0,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getHash(e){if(this.bufferStride===0&&this.bufferOffset===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;let t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new eo(n,r),c=new aa(a,s,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){let t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n),r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=En(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this.attribute&&this.attribute.isBufferAttribute===!0&&(this.attribute.usage=e),this}setInstanced(e){return this.instanced=e,this}},Ec=(i,e=null,t=0,n=0)=>Z(new mf(i,e,t,n)),Jx=(i,e=null,t=0,n=0)=>Ec(i,e,t,n).setUsage(cr),wu=(i,e=null,t=0,n=0)=>Ec(i,e,t,n).setInstanced(!0),gf=(i,e=null,t=0,n=0)=>Jx(i,e,t,n).setInstanced(!0);q("toAttribute",i=>Ec(i.value));var _f=class extends Ce{static get type(){return"ComputeNode"}constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.name="",this.updateBeforeType=mt.OBJECT,this.onInitFunction=null,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}label(e){return this.name=e,this}updateDispatchCount(){let{count:e,workgroupSize:t}=this,n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(e){return this.onInitFunction=e,this}updateBefore({renderer:e}){e.compute(this)}generate(e){let{shaderStage:t}=e;if(t==="compute"){let n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n,this)}}},ey=(i,e,t)=>Z(new _f(Z(i),e,t));q("compute",ey);var xf=class extends Ce{static get type(){return"CacheNode"}constructor(e,t=!0){super(),this.node=e,this.parent=t,this.isCacheNode=!0}getNodeType(e){let t=e.getCache(),n=e.getCacheFromNode(this,this.parent);e.setCache(n);let s=this.node.getNodeType(e);return e.setCache(t),s}build(e,...t){let n=e.getCache(),s=e.getCacheFromNode(this,this.parent);e.setCache(s);let r=this.node.build(e,...t);return e.setCache(n),r}},ty=(i,e)=>Z(new xf(Z(i),e));q("cache",ty);var yf=class extends Ce{static get type(){return"BypassNode"}constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){let t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t,this),this.outputNode.build(e)}},ny=Y(yf);q("bypass",ny);var Ru=class extends Ce{static get type(){return"RemapNode"}constructor(e,t,n,s=R(0),r=R(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){let{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:o}=this,a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(s)).add(s)}},iy=Y(Ru,null,null,{doClamp:!1}),sy=Y(Ru);q("remap",iy);q("remapClamp",sy);var vf=class extends Ce{static get type(){return"ExpressionNode"}constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){let n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s,this);else return e.format(`( ${s} )`,n,t)}},zs=Y(vf),ry=i=>(i?Pn(i,zs("discard")):zs("discard")).append(),fw=()=>zs("return").append();q("discard",ry);var Tf=class extends It{static get type(){return"RenderOutputNode"}constructor(e,t,n){super("vec4"),this.colorNode=e,this.toneMapping=t,this.outputColorSpace=n,this.isRenderOutputNode=!0}setup({context:e}){let t=this.colorNode||e.color,n=(this.toneMapping!==null?this.toneMapping:e.toneMapping)||Gn,s=(this.outputColorSpace!==null?this.outputColorSpace:e.outputColorSpace)||si;return n!==Gn&&(t=t.toneMapping(n)),s!==si&&s!==$e.workingColorSpace&&(t=t.workingToColorSpace(s)),t}},oy=(i,e=null,t=null)=>Z(new Tf(Z(i),e,t));q("renderOutput",oy);function pw(i){console.warn("THREE.TSLBase: AddNodeElement has been removed in favor of tree-shaking. Trying add",i)}var Cu=class extends Ce{static get type(){return"AttributeNode"}constructor(e,t=null){super(t),this.global=!0,this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=this.nodeType;if(t===null){let n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){let s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){let t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){let r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):En(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}serialize(e){super.serialize(e),e.global=this.global,e._attributeName=this._attributeName}deserialize(e){super.deserialize(e),this.global=e.global,this._attributeName=e._attributeName}},ps=(i,e)=>Z(new Cu(i,e)),Ct=(i=0)=>ps("uv"+(i>0?i:""),"vec2"),Sf=class extends Ce{static get type(){return"TextureSizeNode"}constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){let n=this.textureNode.build(e,"property"),s=this.levelNode===null?"0":this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}},Gs=Y(Sf),bf=class extends br{static get type(){return"MaxMipLevelNode"}constructor(e){super(0),this._textureNode=e,this.updateType=mt.FRAME}get textureNode(){return this._textureNode}get texture(){return this._textureNode.value}update(){let e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){let{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}},ay=Y(bf),Mi=class extends br{static get type(){return"TextureNode"}constructor(e,t=null,n=null,s=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.biasNode=s,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=mt.NONE,this.referenceNode=null,this._value=e,this._matrixUniform=null,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":this.value.type===Ii?"uvec4":this.value.type===ho?"ivec4":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Ct(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){return this._matrixUniform===null&&(this._matrixUniform=Ke(this.value.matrix)),this._matrixUniform.mul(V(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?mt.RENDER:mt.NONE,this}setupUV(e,t){let n=this.value;return e.isFlipY()&&(n.image instanceof ImageBitmap&&n.flipY===!0||n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(this.sampler?t=t.flipY():t=t.setY(C(Gs(this,this.levelNode).y).sub(t.y).sub(1))),t}setup(e){let t=e.getNodeProperties(this);t.referenceNode=this.referenceNode;let n=this.value;if(!n||n.isTexture!==!0)throw new Error("THREE.TSL: `texture( value )` function expects a valid instance of THREE.Texture().");let s=this.uvNode;(s===null||e.context.forceUVContext===!0)&&e.context.getUV&&(s=e.context.getUV(this)),s||(s=this.getDefaultUV()),this.updateMatrix===!0&&(s=this.getTransformedUV(s)),s=this.setupUV(e,s);let r=this.levelNode;r===null&&e.context.getTextureLevel&&(r=e.context.getTextureLevel(this)),t.uvNode=s,t.levelNode=r,t.biasNode=this.biasNode,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,o,a,c){let l=this.value,u;return s?u=e.generateTextureLevel(l,t,n,s,o):r?u=e.generateTextureBias(l,t,n,r,o):c?u=e.generateTextureGrad(l,t,n,c,o):a?u=e.generateTextureCompare(l,t,n,a,o):this.sampler===!1?u=e.generateTextureLoad(l,t,n,o):u=e.generateTexture(l,t,n,o),u}generate(e,t){let n=this.value,s=e.getNodeProperties(this),r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{let o=e.getDataFromNode(this),a=o.propertyName;if(a===void 0){let{uvNode:u,levelNode:h,biasNode:d,compareNode:m,depthNode:_,gradNode:x}=s,g=this.generateUV(e,u),p=h?h.build(e,"float"):null,A=d?d.build(e,"float"):null,b=_?_.build(e,"int"):null,S=m?m.build(e,"float"):null,I=x?[x[0].build(e,"vec2"),x[1].build(e,"vec2")]:null,w=e.getVarFromNode(this);a=e.getPropertyName(w);let N=this.generateSnippet(e,r,g,p,A,b,S,I);e.addLineFlowCode(`${a} = ${N}`,this),o.snippet=N,o.propertyName=a}let c=a,l=this.getNodeType(e);return e.needsToWorkingColorSpace(n)&&(c=im(zs(c,l),n.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){return console.warn("THREE.TextureNode: .uv() has been renamed. Use .sample() instead."),this.sample(e)}sample(e){let t=this.clone();return t.uvNode=Z(e),t.referenceNode=this.getSelf(),Z(t)}blur(e){let t=this.clone();return t.biasNode=Z(e).mul(ay(t)),t.referenceNode=this.getSelf(),Z(t)}level(e){let t=this.clone();return t.levelNode=Z(e),t.referenceNode=this.getSelf(),Z(t)}size(e){return Gs(this,e)}bias(e){let t=this.clone();return t.biasNode=Z(e),t.referenceNode=this.getSelf(),Z(t)}compare(e){let t=this.clone();return t.compareNode=Z(e),t.referenceNode=this.getSelf(),Z(t)}grad(e,t){let n=this.clone();return n.gradNode=[Z(e),Z(t)],n.referenceNode=this.getSelf(),Z(n)}depth(e){let t=this.clone();return t.depthNode=Z(e),t.referenceNode=this.getSelf(),Z(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid,e.sampler=this.sampler,e.updateMatrix=this.updateMatrix,e.updateType=this.updateType}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value],this.sampler=e.sampler,this.updateMatrix=e.updateMatrix,this.updateType=e.updateType}update(){let e=this.value,t=this._matrixUniform;t!==null&&(t.value=e.matrix),e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){let e=new this.constructor(this.value,this.uvNode,this.levelNode,this.biasNode);return e.sampler=this.sampler,e}},An=Y(Mi),Ut=(...i)=>An(...i).setSampler(!1),mw=i=>(i.isNode===!0?i:An(i)).convert("sampler"),bc=class extends br{static get type(){return"BufferNode"}constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getElementType(e){return this.getNodeType(e)}getInputType(){return"buffer"}},wc=(i,e,t)=>Z(new bc(i,e,t)),Mf=class extends us{static get type(){return"UniformArrayElementNode"}constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}generate(e){let t=super.generate(e),n=this.getNodeType(),s=this.node.getPaddedType();return e.format(t,s,n)}},Nu=class extends bc{static get type(){return"UniformArrayNode"}constructor(e,t=null){super(null),this.array=e,this.elementType=t===null?Vs(e[0]):t,this.paddedType=this.getPaddedType(),this.updateType=mt.RENDER,this.isArrayBufferNode=!0}getNodeType(){return this.paddedType}getElementType(){return this.elementType}getPaddedType(){let e=this.elementType,t="vec4";return e==="mat2"?t="mat2":/mat/.test(e)===!0?t="mat4":e.charAt(0)==="i"?t="ivec4":e.charAt(0)==="u"&&(t="uvec4"),t}update(){let{array:e,value:t}=this,n=this.elementType;if(n==="float"||n==="int"||n==="uint")for(let s=0;s<e.length;s++){let r=s*4;t[r]=e[s]}else if(n==="color")for(let s=0;s<e.length;s++){let r=s*4,o=e[s];t[r]=o.r,t[r+1]=o.g,t[r+2]=o.b||0}else if(n==="mat2")for(let s=0;s<e.length;s++){let r=s*4,o=e[s];t[r]=o.elements[0],t[r+1]=o.elements[1],t[r+2]=o.elements[2],t[r+3]=o.elements[3]}else if(n==="mat3")for(let s=0;s<e.length;s++){let r=s*16,o=e[s];t[r]=o.elements[0],t[r+1]=o.elements[1],t[r+2]=o.elements[2],t[r+4]=o.elements[3],t[r+5]=o.elements[4],t[r+6]=o.elements[5],t[r+8]=o.elements[6],t[r+9]=o.elements[7],t[r+10]=o.elements[8],t[r+15]=1}else if(n==="mat4")for(let s=0;s<e.length;s++){let r=s*16,o=e[s];for(let a=0;a<o.elements.length;a++)t[r+a]=o.elements[a]}else for(let s=0;s<e.length;s++){let r=s*4,o=e[s];t[r]=o.x,t[r+1]=o.y,t[r+2]=o.z||0,t[r+3]=o.w||0}}setup(e){let t=this.array.length,n=this.elementType,s=Float32Array,r=this.paddedType,o=e.getTypeLength(r);return n.charAt(0)==="i"&&(s=Int32Array),n.charAt(0)==="u"&&(s=Uint32Array),this.value=new s(t*o),this.bufferCount=t,this.bufferType=r,super.setup(e)}element(e){return Z(new Mf(this,Z(e)))}},as=(i,e)=>Z(new Nu(i,e)),gw=(i,e)=>(console.warn("TSL.UniformArrayNode: uniforms() has been renamed to uniformArray()."),Z(new Nu(i,e))),sm=Ke(0,"uint").setGroup(Ku("cameraIndex")).toVarying("v_cameraIndex"),Bs=Ke("float").label("cameraNear").setGroup(at).onRenderUpdate(({camera:i})=>i.near),Os=Ke("float").label("cameraFar").setGroup(at).onRenderUpdate(({camera:i})=>i.far),Rc=z(({camera:i})=>{let e;if(i.isArrayCamera&&i.cameras.length>0){let t=[];for(let s of i.cameras)t.push(s.projectionMatrix);e=as(t).setGroup(at).label("cameraProjectionMatrices").element(sm).toVar("cameraProjectionMatrix")}else e=Ke("mat4").label("cameraProjectionMatrix").setGroup(at).onRenderUpdate(({camera:t})=>t.projectionMatrix);return e}).once()(),_w=Ke("mat4").label("cameraProjectionMatrixInverse").setGroup(at).onRenderUpdate(({camera:i})=>i.projectionMatrixInverse),li=z(({camera:i})=>{let e;if(i.isArrayCamera&&i.cameras.length>0){let t=[];for(let s of i.cameras)t.push(s.matrixWorldInverse);e=as(t).setGroup(at).label("cameraViewMatrices").element(sm).toVar("cameraViewMatrix")}else e=Ke("mat4").label("cameraViewMatrix").setGroup(at).onRenderUpdate(({camera:t})=>t.matrixWorldInverse);return e}).once()(),xw=Ke("mat4").label("cameraWorldMatrix").setGroup(at).onRenderUpdate(({camera:i})=>i.matrixWorld),yw=Ke("mat3").label("cameraNormalMatrix").setGroup(at).onRenderUpdate(({camera:i})=>i.normalMatrix),vw=Ke(new D).label("cameraPosition").setGroup(at).onRenderUpdate(({camera:i},e)=>e.value.setFromMatrixPosition(i.matrixWorld)),an=class i extends Ce{static get type(){return"Object3DNode"}constructor(e,t=null){super(),this.scope=e,this.object3d=t,this.updateType=mt.OBJECT,this._uniformNode=new br(null)}getNodeType(){let e=this.scope;if(e===i.WORLD_MATRIX)return"mat4";if(e===i.POSITION||e===i.VIEW_POSITION||e===i.DIRECTION||e===i.SCALE)return"vec3"}update(e){let t=this.object3d,n=this._uniformNode,s=this.scope;if(s===i.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===i.POSITION)n.value=n.value||new D,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===i.SCALE)n.value=n.value||new D,n.value.setFromMatrixScale(t.matrixWorld);else if(s===i.DIRECTION)n.value=n.value||new D,t.getWorldDirection(n.value);else if(s===i.VIEW_POSITION){let r=e.camera;n.value=n.value||new D,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){let t=this.scope;return t===i.WORLD_MATRIX?this._uniformNode.nodeType="mat4":(t===i.POSITION||t===i.VIEW_POSITION||t===i.DIRECTION||t===i.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}};an.WORLD_MATRIX="worldMatrix";an.POSITION="position";an.SCALE="scale";an.VIEW_POSITION="viewPosition";an.DIRECTION="direction";var Tw=Y(an,an.DIRECTION),Sw=Y(an,an.WORLD_MATRIX),cy=Y(an,an.POSITION),bw=Y(an,an.SCALE),Mw=Y(an,an.VIEW_POSITION),ci=class extends an{static get type(){return"ModelNode"}constructor(e){super(e)}update(e){this.object3d=e.object,super.update(e)}},Aw=le(ci,ci.DIRECTION),cs=le(ci,ci.WORLD_MATRIX),Ew=le(ci,ci.POSITION),ww=le(ci,ci.SCALE),Rw=le(ci,ci.VIEW_POSITION),ly=Ke(new ke).onObjectUpdate(({object:i},e)=>e.value.getNormalMatrix(i.matrixWorld)),Cw=Ke(new ot).onObjectUpdate(({object:i},e)=>e.value.copy(i.matrixWorld).invert()),Cc=z(i=>i.renderer.nodes.modelViewMatrix||uy).once()().toVar("modelViewMatrix"),uy=li.mul(cs),Nw=z(i=>(i.context.isHighPrecisionModelViewMatrix=!0,Ke("mat4").onObjectUpdate(({object:e,camera:t})=>e.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse,e.matrixWorld)))).once()().toVar("highpModelViewMatrix"),Pw=z(i=>{let e=i.context.isHighPrecisionModelViewMatrix;return Ke("mat3").onObjectUpdate(({object:t,camera:n})=>(e!==!0&&t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix)))}).once()().toVar("highpModelNormalViewMatrix"),rm=ps("position","vec3"),Bt=rm.toVarying("positionLocal"),Pu=rm.toVarying("positionPrevious"),Sr=cs.mul(Bt).xyz.toVarying("v_positionWorld").context({needsPositionReassign:!0}),hy=Bt.transformDirection(cs).toVarying("v_positionWorldDirection").normalize().toVar("positionWorldDirection").context({needsPositionReassign:!0}),tn=z(i=>i.context.setupPositionView(),"vec3").once()().toVarying("v_positionView").context({needsPositionReassign:!0}),qn=tn.negate().toVarying("v_positionViewDirection").normalize().toVar("positionViewDirection"),Af=class extends Ce{static get type(){return"FrontFacingNode"}constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){let{renderer:t,material:n}=e;return t.coordinateSystem===Sn&&n.side===sn?"false":e.getFrontFacing()}},dy=le(Af),Nc=R(dy).mul(2).sub(1),om=ps("normal","vec3"),In=z(i=>i.geometry.hasAttribute("normal")===!1?(console.warn('TSL.NormalNode: Vertex attribute "normal" not found on geometry.'),V(0,1,0)):om,"vec3").once()().toVar("normalLocal"),fy=tn.dFdx().cross(tn.dFdy()).normalize().toVar("normalFlat"),Oi=z(i=>{let e;return i.material.flatShading===!0?e=fy:e=En(am(In),"v_normalView").normalize(),e},"vec3").once()().toVar("normalView"),py=En(Oi.transformDirection(li),"v_normalWorld").normalize().toVar("normalWorld"),ms=z(i=>i.context.setupNormal().context({getUV:null}),"vec3").once()().mul(Nc).toVar("transformedNormalView"),my=ms.transformDirection(li).toVar("transformedNormalWorld"),Iw=z(i=>i.context.setupClearcoatNormal().context({getUV:null}),"vec3").once()().mul(Nc).toVar("transformedClearcoatNormalView"),gy=z(([i,e=cs])=>{let t=ai(e),n=i.div(V(t[0].dot(t[0]),t[1].dot(t[1]),t[2].dot(t[2])));return t.mul(n).xyz}),am=z(([i],e)=>{let t=e.renderer.nodes.modelNormalViewMatrix;if(t!==null)return t.transformDirection(i);let n=ly.mul(i);return li.transformDirection(n)}),_y=Ke(0).onReference(({material:i})=>i).onRenderUpdate(({material:i})=>i.refractionRatio),xy=qn.negate().reflect(ms),yy=qn.negate().refract(ms,_y),vy=xy.transformDirection(li).toVar("reflectVector"),Ty=yy.transformDirection(li).toVar("reflectVector"),Ef=class extends Mi{static get type(){return"CubeTextureNode"}constructor(e,t=null,n=null,s=null){super(e,t,n,s),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){let e=this.value;return e.mapping===is?vy:e.mapping===ss?Ty:(console.error('THREE.CubeTextureNode: Mapping "%s" not supported.',e.mapping),V(0,0,0))}setUpdateMatrix(){}setupUV(e,t){let n=this.value;return e.renderer.coordinateSystem===_i||!n.isRenderTargetTexture?V(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}},Sy=Y(Ef),wf=class extends us{static get type(){return"ReferenceElementNode"}constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){let t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}},Uo=class extends Ce{static get type(){return"ReferenceNode"}constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=n,this.node=null,this.group=null,this.name=null,this.updateType=mt.OBJECT}element(e){return Z(new wf(this,Z(e)))}setGroup(e){return this.group=e,this}label(e){return this.name=e,this}setNodeType(e){let t=null;this.count!==null?t=wc(null,e,this.count):Array.isArray(this.getValueFromReference())?t=as(null,e):e==="texture"?t=An(null):e==="cubeTexture"?t=Sy(null):t=Ke(null,e),this.group!==null&&t.setGroup(this.group),this.name!==null&&t.label(this.name),this.node=t.getSelf()}getNodeType(e){return this.node===null&&(this.updateReference(e),this.updateValue()),this.node.getNodeType(e)}getValueFromReference(e=this.reference){let{properties:t}=this,n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);let e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}},Gt=(i,e,t)=>Z(new Uo(i,e,t)),Rf=(i,e,t,n)=>Z(new Uo(i,e,n,t)),Cf=class extends Uo{static get type(){return"MaterialReferenceNode"}constructor(e,t,n=null){super(e,t,n),this.material=n,this.isMaterialReferenceNode=!0}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}},yr=(i,e,t=null)=>Z(new Cf(i,e,t)),Ju=z(i=>(i.geometry.hasAttribute("tangent")===!1&&i.geometry.computeTangents(),ps("tangent","vec4")))(),Pc=Ju.xyz.toVar("tangentLocal"),Ic=Cc.mul(Ge(Pc,0)).xyz.toVarying("v_tangentView").normalize().toVar("tangentView"),by=Ic.transformDirection(li).toVarying("v_tangentWorld").normalize().toVar("tangentWorld"),cm=Ic.toVar("transformedTangentView"),Dw=cm.transformDirection(li).normalize().toVar("transformedTangentWorld"),Dc=i=>i.mul(Ju.w).xyz,Lw=En(Dc(om.cross(Ju)),"v_bitangentGeometry").normalize().toVar("bitangentGeometry"),Fw=En(Dc(In.cross(Pc)),"v_bitangentLocal").normalize().toVar("bitangentLocal"),My=En(Dc(Oi.cross(Ic)),"v_bitangentView").normalize().toVar("bitangentView"),Uw=En(Dc(py.cross(by)),"v_bitangentWorld").normalize().toVar("bitangentWorld"),Ay=Dc(ms.cross(cm)).normalize().toVar("transformedBitangentView"),Bw=Ay.transformDirection(li).normalize().toVar("transformedBitangentWorld"),lm=ai(Ic,My,Oi),Ey=qn.mul(lm),Ow=(i,e)=>i.sub(Ey.mul(e)),Vw=(()=>{let i=Io.cross(qn);return i=i.cross(Io).normalize(),i=zt(i,ms,q_.mul(H_.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})(),Gw=z(i=>{let{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),o=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),m=u.mul(a.y).add(h.mul(c.y)),_=d.dot(d).max(m.dot(m)),x=Nc.mul(_.inverseSqrt());return Ht(d.mul(n.x,x),m.mul(n.y,x),l.mul(n.z)).normalize()}),Nf=class extends It{static get type(){return"NormalMapNode"}constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=yo}setup(e){let{normalMapType:t,scaleNode:n}=this,s=this.node.mul(2).sub(1);n!==null&&(s=V(s.xy.mul(n),s.z));let r=null;return t===ql?r=am(s):t===yo&&(e.hasGeometryAttribute("tangent")===!0?r=lm.mul(s).normalize():r=Gw({eye_pos:tn,surf_norm:Oi,mapN:s,uv:Ct()})),r}},Pf=Y(Nf),zw=z(({textureNode:i,bumpScale:e})=>{let t=s=>i.cache().context({getUV:r=>s(r.uvNode||Ct()),forceUVContext:!0}),n=R(t(s=>s));return oe(R(t(s=>s.add(s.dFdx()))).sub(n),R(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),kw=z(i=>{let{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(s),l=s.dot(a).mul(Nc),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()}),If=class extends It{static get type(){return"BumpMapNode"}constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){let e=this.scaleNode!==null?this.scaleNode:1,t=zw({textureNode:this.textureNode,bumpScale:e});return kw({surf_pos:tn,surf_norm:Oi,dHdxy:t})}},wy=Y(If),Jg=new Map,J=class i extends Ce{static get type(){return"MaterialNode"}constructor(e){super(),this.scope=e}getCache(e,t){let n=Jg.get(e);return n===void 0&&(n=yr(e,t),Jg.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){let t=e.context.material,n=this.scope,s=null;if(n===i.COLOR){let r=t.color!==void 0?this.getColor(n):V();t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===i.OPACITY){let r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===i.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=R(1);else if(n===i.SPECULAR_INTENSITY){let r=this.getFloat(n);t.specularIntensityMap&&t.specularIntensityMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r}else if(n===i.SPECULAR_COLOR){let r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=r.mul(this.getTexture(n).rgb):s=r}else if(n===i.ROUGHNESS){let r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===i.METALNESS){let r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===i.EMISSIVE){let r=this.getFloat("emissiveIntensity"),o=this.getColor(n).mul(r);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=o.mul(this.getTexture(n)):s=o}else if(n===i.NORMAL)t.normalMap?(s=Pf(this.getTexture("normal"),this.getCache("normalScale","vec2")),s.normalMapType=t.normalMapType):t.bumpMap?s=wy(this.getTexture("bump").r,this.getFloat("bumpScale")):s=Oi;else if(n===i.CLEARCOAT){let r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===i.CLEARCOAT_ROUGHNESS){let r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===i.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=Pf(this.getTexture(n),this.getCache(n+"Scale","vec2")):s=Oi;else if(n===i.SHEEN){let r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===i.SHEEN_ROUGHNESS){let r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===i.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){let r=this.getTexture(n);s=Yu(Co.x,Co.y,Co.y.negate(),Co.x).mul(r.rg.mul(2).sub(oe(1)).normalize().mul(r.b))}else s=Co;else if(n===i.IRIDESCENCE_THICKNESS){let r=Gt("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){let o=Gt("0","float",t.iridescenceThicknessRange);s=r.sub(o).mul(this.getTexture(n).g).add(o)}else s=r}else if(n===i.TRANSMISSION){let r=this.getFloat(n);t.transmissionMap?s=r.mul(this.getTexture(n).r):s=r}else if(n===i.THICKNESS){let r=this.getFloat(n);t.thicknessMap?s=r.mul(this.getTexture(n).g):s=r}else if(n===i.IOR)s=this.getFloat(n);else if(n===i.LIGHT_MAP)s=this.getTexture(n).rgb.mul(this.getFloat("lightMapIntensity"));else if(n===i.AO)s=this.getTexture(n).r.sub(1).mul(this.getFloat("aoMapIntensity")).add(1);else{let r=this.getNodeType(e);s=this.getCache(n,r)}return s}};J.ALPHA_TEST="alphaTest";J.COLOR="color";J.OPACITY="opacity";J.SHININESS="shininess";J.SPECULAR="specular";J.SPECULAR_STRENGTH="specularStrength";J.SPECULAR_INTENSITY="specularIntensity";J.SPECULAR_COLOR="specularColor";J.REFLECTIVITY="reflectivity";J.ROUGHNESS="roughness";J.METALNESS="metalness";J.NORMAL="normal";J.CLEARCOAT="clearcoat";J.CLEARCOAT_ROUGHNESS="clearcoatRoughness";J.CLEARCOAT_NORMAL="clearcoatNormal";J.EMISSIVE="emissive";J.ROTATION="rotation";J.SHEEN="sheen";J.SHEEN_ROUGHNESS="sheenRoughness";J.ANISOTROPY="anisotropy";J.IRIDESCENCE="iridescence";J.IRIDESCENCE_IOR="iridescenceIOR";J.IRIDESCENCE_THICKNESS="iridescenceThickness";J.IOR="ior";J.TRANSMISSION="transmission";J.THICKNESS="thickness";J.ATTENUATION_DISTANCE="attenuationDistance";J.ATTENUATION_COLOR="attenuationColor";J.LINE_SCALE="scale";J.LINE_DASH_SIZE="dashSize";J.LINE_GAP_SIZE="gapSize";J.LINE_WIDTH="linewidth";J.LINE_DASH_OFFSET="dashOffset";J.POINT_SIZE="size";J.DISPERSION="dispersion";J.LIGHT_MAP="light";J.AO="ao";var Ry=le(J,J.ALPHA_TEST),Cy=le(J,J.COLOR),Hw=le(J,J.SHININESS),Ny=le(J,J.EMISSIVE),Py=le(J,J.OPACITY),Ww=le(J,J.SPECULAR),qw=le(J,J.SPECULAR_INTENSITY),Xw=le(J,J.SPECULAR_COLOR),$w=le(J,J.SPECULAR_STRENGTH),Yw=le(J,J.REFLECTIVITY),Kw=le(J,J.ROUGHNESS),Zw=le(J,J.METALNESS),Iy=le(J,J.NORMAL),jw=le(J,J.CLEARCOAT),Qw=le(J,J.CLEARCOAT_ROUGHNESS),Jw=le(J,J.CLEARCOAT_NORMAL),eR=le(J,J.ROTATION),tR=le(J,J.SHEEN),nR=le(J,J.SHEEN_ROUGHNESS),iR=le(J,J.ANISOTROPY),sR=le(J,J.IRIDESCENCE),rR=le(J,J.IRIDESCENCE_IOR),oR=le(J,J.IRIDESCENCE_THICKNESS),aR=le(J,J.TRANSMISSION),cR=le(J,J.THICKNESS),lR=le(J,J.IOR),uR=le(J,J.ATTENUATION_DISTANCE),hR=le(J,J.ATTENUATION_COLOR),dR=le(J,J.LINE_SCALE),fR=le(J,J.LINE_DASH_SIZE),pR=le(J,J.LINE_GAP_SIZE),mR=le(J,J.LINE_WIDTH),gR=le(J,J.LINE_DASH_OFFSET),_R=le(J,J.POINT_SIZE),xR=le(J,J.DISPERSION),Dy=le(J,J.LIGHT_MAP),Ly=le(J,J.AO),Co=Ke(new Le).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))}),Fy=z(i=>i.context.setupModelViewProjection(),"vec4").once()().toVarying("v_modelViewProjection"),Kt=class i extends Ce{static get type(){return"IndexNode"}constructor(e){super("uint"),this.scope=e,this.isIndexNode=!0}generate(e){let t=this.getNodeType(e),n=this.scope,s;if(n===i.VERTEX)s=e.getVertexIndex();else if(n===i.INSTANCE)s=e.getInstanceIndex();else if(n===i.DRAW)s=e.getDrawIndex();else if(n===i.INVOCATION_LOCAL)s=e.getInvocationLocalIndex();else if(n===i.INVOCATION_SUBGROUP)s=e.getInvocationSubgroupIndex();else if(n===i.SUBGROUP)s=e.getSubgroupIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=En(this).build(e,t),r}};Kt.VERTEX="vertex";Kt.INSTANCE="instance";Kt.SUBGROUP="subgroup";Kt.INVOCATION_LOCAL="invocationLocal";Kt.INVOCATION_SUBGROUP="invocationSubgroup";Kt.DRAW="draw";var Uy=le(Kt,Kt.VERTEX),Lc=le(Kt,Kt.INSTANCE),yR=le(Kt,Kt.SUBGROUP),vR=le(Kt,Kt.INVOCATION_SUBGROUP),TR=le(Kt,Kt.INVOCATION_LOCAL),By=le(Kt,Kt.DRAW),Iu=class extends Ce{static get type(){return"InstanceNode"}constructor(e,t,n){super("void"),this.count=e,this.instanceMatrix=t,this.instanceColor=n,this.instanceMatrixNode=null,this.instanceColorNode=null,this.updateType=mt.FRAME,this.buffer=null,this.bufferColor=null}setup(e){let{count:t,instanceMatrix:n,instanceColor:s}=this,{instanceMatrixNode:r,instanceColorNode:o}=this;if(r===null){if(t<=1e3)r=wc(n.array,"mat4",Math.max(t,1)).element(Lc);else{let c=new pa(n.array,16,1);this.buffer=c;let l=n.usage===cr?gf:wu,u=[l(c,"vec4",16,0),l(c,"vec4",16,4),l(c,"vec4",16,8),l(c,"vec4",16,12)];r=Tr(...u)}this.instanceMatrixNode=r}if(s&&o===null){let c=new rr(s.array,3),l=s.usage===cr?gf:wu;this.bufferColor=c,o=V(l(c,"vec3",3,0)),this.instanceColorNode=o}let a=r.mul(Bt).xyz;if(Bt.assign(a),e.hasGeometryAttribute("normal")){let c=gy(In,r);In.assign(c)}this.instanceColorNode!==null&&Tc("vec3","vInstanceColor").assign(this.instanceColorNode)}update(){this.instanceMatrix.usage!==cr&&this.buffer!==null&&this.instanceMatrix.version!==this.buffer.version&&(this.buffer.version=this.instanceMatrix.version),this.instanceColor&&this.instanceColor.usage!==cr&&this.bufferColor!==null&&this.instanceColor.version!==this.bufferColor.version&&(this.bufferColor.version=this.instanceColor.version)}},SR=Y(Iu),Df=class extends Iu{static get type(){return"InstancedMeshNode"}constructor(e){let{count:t,instanceMatrix:n,instanceColor:s}=e;super(t,n,s),this.instancedMesh=e}},Oy=Y(Df),Lf=class extends Ce{static get type(){return"BatchNode"}constructor(e){super("void"),this.batchMesh=e,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(e.getDrawIndex()===null?this.batchingIdNode=Lc:this.batchingIdNode=By);let n=z(([_])=>{let x=C(Gs(Ut(this.batchMesh._indirectTexture),0)),g=C(_).modInt(x),p=C(_).div(x);return Ut(this.batchMesh._indirectTexture,en(g,p)).x}).setLayout({name:"getIndirectIndex",type:"uint",inputs:[{name:"id",type:"int"}]})(C(this.batchingIdNode)),s=this.batchMesh._matricesTexture,r=Gs(Ut(s),0),o=R(n).mul(4).toInt().toVar(),a=o.modInt(r),c=o.div(C(r)),l=Tr(Ut(s,en(a,c)),Ut(s,en(a.add(1),c)),Ut(s,en(a.add(2),c)),Ut(s,en(a.add(3),c))),u=this.batchMesh._colorsTexture;if(u!==null){let x=z(([g])=>{let p=Gs(Ut(u),0).x,A=g,b=A.modInt(p),S=A.div(p);return Ut(u,en(b,S)).rgb}).setLayout({name:"getBatchingColor",type:"vec3",inputs:[{name:"id",type:"int"}]})(n);Tc("vec3","vBatchColor").assign(x)}let h=ai(l);Bt.assign(l.mul(Bt));let d=In.div(V(h[0].dot(h[0]),h[1].dot(h[1]),h[2].dot(h[2]))),m=h.mul(d).xyz;In.assign(m),e.hasGeometryAttribute("tangent")&&Pc.mulAssign(h)}},Vy=Y(Lf),e_=new WeakMap,Du=class extends Ce{static get type(){return"SkinningNode"}constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=mt.OBJECT,this.skinIndexNode=ps("skinIndex","uvec4"),this.skinWeightNode=ps("skinWeight","vec4");let n,s,r;t?(n=Gt("bindMatrix","mat4"),s=Gt("bindMatrixInverse","mat4"),r=Rf("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=Ke(e.bindMatrix,"mat4"),s=Ke(e.bindMatrixInverse,"mat4"),r=wc(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r,this.previousBoneMatricesNode=null}getSkinnedPosition(e=this.boneMatricesNode,t=Bt){let{skinIndexNode:n,skinWeightNode:s,bindMatrixNode:r,bindMatrixInverseNode:o}=this,a=e.element(n.x),c=e.element(n.y),l=e.element(n.z),u=e.element(n.w),h=r.mul(t),d=Ht(a.mul(s.x).mul(h),c.mul(s.y).mul(h),l.mul(s.z).mul(h),u.mul(s.w).mul(h));return o.mul(d).xyz}getSkinnedNormal(e=this.boneMatricesNode,t=In){let{skinIndexNode:n,skinWeightNode:s,bindMatrixNode:r,bindMatrixInverseNode:o}=this,a=e.element(n.x),c=e.element(n.y),l=e.element(n.z),u=e.element(n.w),h=Ht(s.x.mul(a),s.y.mul(c),s.z.mul(l),s.w.mul(u));return h=o.mul(h).mul(r),h.transformDirection(t).xyz}getPreviousSkinnedPosition(e){let t=e.object;return this.previousBoneMatricesNode===null&&(t.skeleton.previousBoneMatrices=new Float32Array(t.skeleton.boneMatrices),this.previousBoneMatricesNode=Rf("skeleton.previousBoneMatrices","mat4",t.skeleton.bones.length)),this.getSkinnedPosition(this.previousBoneMatricesNode,Pu)}needsPreviousBoneMatrices(e){let t=e.renderer.getMRT();return t&&t.has("velocity")||v_(e.object).useVelocity===!0}setup(e){this.needsPreviousBoneMatrices(e)&&Pu.assign(this.getPreviousSkinnedPosition(e));let t=this.getSkinnedPosition();if(Bt.assign(t),e.hasGeometryAttribute("normal")){let n=this.getSkinnedNormal();In.assign(n),e.hasGeometryAttribute("tangent")&&Pc.assign(n)}}generate(e,t){if(t!=="void")return Bt.build(e,t)}update(e){let n=(this.useReference?e.object:this.skinnedMesh).skeleton;e_.get(n)!==e.frameId&&(e_.set(n,e.frameId),this.previousBoneMatricesNode!==null&&n.previousBoneMatrices.set(n.boneMatrices),n.update())}},bR=i=>Z(new Du(i)),Gy=i=>Z(new Du(i,!0)),Ff=class extends Ce{static get type(){return"LoopNode"}constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){let t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;let n={};for(let r=0,o=this.params.length-1;r<o;r++){let a=this.params[r],c=a.isNode!==!0&&a.name||this.getVarName(r),l=a.isNode!==!0&&a.type||"int";n[c]=zs(c,l)}let s=e.addStack();return t.returnsNode=this.params[this.params.length-1](n,s,e),t.stackNode=s,e.removeStack(),t}getNodeType(e){let{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){let t=this.getProperties(e),n=this.params,s=t.stackNode;for(let a=0,c=n.length-1;a<c;a++){let l=n[a],u=null,h=null,d=null,m=null,_=null,x=null;l.isNode?(m="int",d=this.getVarName(a),u="0",h=l.build(e,m),_="<"):(m=l.type||"int",d=l.name||this.getVarName(a),u=l.start,h=l.end,_=l.condition,x=l.update,typeof u=="number"?u=e.generateConst(m,u):u&&u.isNode&&(u=u.build(e,m)),typeof h=="number"?h=e.generateConst(m,h):h&&h.isNode&&(h=h.build(e,m)),u!==void 0&&h===void 0?(u=u+" - 1",h="0",_=">="):h!==void 0&&u===void 0&&(u="0",_="<"),_===void 0&&(Number(u)>Number(h)?_=">=":_="<"));let g={start:u,end:h,condition:_},p=g.start,A=g.end,b="",S="",I="";x||(m==="int"||m==="uint"?_.includes("<")?x="++":x="--":_.includes("<")?x="+= 1.":x="-= 1."),b+=e.getVar(m,d)+" = "+p,S+=d+" "+_+" "+A,I+=d+" "+x;let w=`for ( ${b}; ${S}; ${I} )`;e.addFlowCode((a===0?`
`:"")+e.tab+w+` {

`).addFlowTab()}let r=s.build(e,"void"),o=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+r);for(let a=0,c=this.params.length-1;a<c;a++)e.addFlowCode((a===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),o}},Tt=(...i)=>Z(new Ff(vr(i,"int"))).append(),MR=()=>zs("continue").append(),zy=()=>zs("break").append(),AR=(...i)=>(console.warn("TSL.LoopNode: loop() has been renamed to Loop()."),Tt(...i)),Ld=new WeakMap,kn=new pt,t_=z(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{let o=C(Uy).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return Ut(i,en(c,a)).depth(s).mul(e)});function ER(i){let e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0,o=Ld.get(i);if(o===void 0||o.count!==r){let p=function(){x.dispose(),Ld.delete(i),i.removeEventListener("dispose",p)};o!==void 0&&o.texture.dispose();let a=i.morphAttributes.position||[],c=i.morphAttributes.normal||[],l=i.morphAttributes.color||[],u=0;e===!0&&(u=1),t===!0&&(u=2),n===!0&&(u=3);let h=i.attributes.position.count*u,d=1,m=4096;h>m&&(d=Math.ceil(h/m),h=m);let _=new Float32Array(h*d*4*r),x=new er(_,h,d,r);x.type=ni,x.needsUpdate=!0;let g=u*4;for(let A=0;A<r;A++){let b=a[A],S=c[A],I=l[A],w=h*d*4*A;for(let N=0;N<b.count;N++){let L=N*g;e===!0&&(kn.fromBufferAttribute(b,N),_[w+L+0]=kn.x,_[w+L+1]=kn.y,_[w+L+2]=kn.z,_[w+L+3]=0),t===!0&&(kn.fromBufferAttribute(S,N),_[w+L+4]=kn.x,_[w+L+5]=kn.y,_[w+L+6]=kn.z,_[w+L+7]=0),n===!0&&(kn.fromBufferAttribute(I,N),_[w+L+8]=kn.x,_[w+L+9]=kn.y,_[w+L+10]=kn.z,_[w+L+11]=I.itemSize===4?kn.w:1)}}o={count:r,texture:x,stride:u,size:new Le(h,d)},Ld.set(i,o),i.addEventListener("dispose",p)}return o}var Uf=class extends Ce{static get type(){return"MorphNode"}constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=Ke(1),this.updateType=mt.OBJECT}setup(e){let{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.hasAttribute("normal")&&t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=ER(t);n===!0&&Bt.mulAssign(this.morphBaseInfluence),s===!0&&In.mulAssign(this.morphBaseInfluence);let u=C(l.width);Tt(o,({i:h})=>{let d=R(0).toVar();this.mesh.count>1&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(Ut(this.mesh.morphTexture,en(C(h).add(1),C(Lc))).r):d.assign(Gt("morphTargetInfluences","float").element(h).toVar()),n===!0&&Bt.addAssign(t_({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(0)})),s===!0&&In.addAssign(t_({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(1)}))})}update(){let e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}},ky=Y(Uf),Lu=class extends Ce{static get type(){return"LightingNode"}constructor(){super("vec3"),this.isLightingNode=!0}},Bf=class extends Lu{static get type(){return"AONode"}constructor(e=null){super(),this.aoNode=e}setup(e){e.context.ambientOcclusion.mulAssign(this.aoNode)}},Of=class extends Eu{static get type(){return"LightingContextNode"}constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._value=null}getContext(){let{backdropNode:e,backdropAlphaNode:t}=this,n=V().toVar("directDiffuse"),s=V().toVar("directSpecular"),r=V().toVar("indirectDiffuse"),o=V().toVar("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:o};return{radiance:V().toVar("radiance"),irradiance:V().toVar("irradiance"),iblIrradiance:V().toVar("iblIrradiance"),ambientOcclusion:R(1).toVar("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.value=this._value||(this._value=this.getContext()),this.value.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}},Hy=Y(Of),Vf=class extends Lu{static get type(){return"IrradianceNode"}constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}},cc,lc,Dn=class i extends Ce{static get type(){return"ScreenNode"}constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===i.VIEWPORT?"vec4":"vec2"}getUpdateType(){let e=mt.NONE;return(this.scope===i.SIZE||this.scope===i.VIEWPORT)&&(e=mt.RENDER),this.updateType=e,e}update({renderer:e}){let t=e.getRenderTarget();this.scope===i.VIEWPORT?t!==null?lc.copy(t.viewport):(e.getViewport(lc),lc.multiplyScalar(e.getPixelRatio())):t!==null?(cc.width=t.width,cc.height=t.height):e.getDrawingBufferSize(cc)}setup(){let e=this.scope,t=null;return e===i.SIZE?t=Ke(cc||(cc=new Le)):e===i.VIEWPORT?t=Ke(lc||(lc=new pt)):t=oe(Fc.div(Fu)),t}generate(e){if(this.scope===i.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){let n=e.getNodeProperties(Fu).outputNode.build(e);t=`${e.getType("vec2")}( ${t}.x, ${n}.y - ${t}.y )`}return t}return super.generate(e)}};Dn.COORDINATE="coordinate";Dn.VIEWPORT="viewport";Dn.SIZE="size";Dn.UV="uv";var Hs=le(Dn,Dn.UV),Fu=le(Dn,Dn.SIZE),Fc=le(Dn,Dn.COORDINATE),um=le(Dn,Dn.VIEWPORT),Wy=um.zw,qy=Fc.sub(um.xy),wR=qy.div(Wy),RR=z(()=>(console.warn('TSL.ViewportNode: "viewportResolution" is deprecated. Use "screenSize" instead.'),Fu),"vec2").once()(),CR=z(()=>(console.warn('TSL.ViewportNode: "viewportTopLeft" is deprecated. Use "screenUV" instead.'),Hs),"vec2").once()(),NR=z(()=>(console.warn('TSL.ViewportNode: "viewportBottomLeft" is deprecated. Use "screenUV.flipY()" instead.'),Hs.flipY()),"vec2").once()(),uc=new Le,Bo=class extends Mi{static get type(){return"ViewportTextureNode"}constructor(e=Hs,t=null,n=null){n===null&&(n=new io,n.minFilter=Pi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=mt.FRAME}updateBefore(e){let t=e.renderer;t.getDrawingBufferSize(uc);let n=this.value;(n.image.width!==uc.width||n.image.height!==uc.height)&&(n.image.width=uc.width,n.image.height=uc.height,n.needsUpdate=!0);let s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){let e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}},PR=Y(Bo),IR=Y(Bo,null,null,{generateMipmaps:!0}),Fd=null,Gf=class extends Bo{static get type(){return"ViewportDepthTextureNode"}constructor(e=Hs,t=null){Fd===null&&(Fd=new yi),super(e,t,Fd)}},hm=Y(Gf),Ai=class i extends Ce{static get type(){return"ViewportDepthNode"}constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){let{scope:t}=this;return t===i.DEPTH_BASE?e.getFragDepth():super.generate(e)}setup({camera:e}){let{scope:t}=this,n=this.valueNode,s=null;if(t===i.DEPTH_BASE)n!==null&&(s=$y().assign(n));else if(t===i.DEPTH)e.isPerspectiveCamera?s=Xy(tn.z,Bs,Os):s=Do(tn.z,Bs,Os);else if(t===i.LINEAR_DEPTH)if(n!==null)if(e.isPerspectiveCamera){let r=dm(n,Bs,Os);s=Do(r,Bs,Os)}else s=n;else s=Do(tn.z,Bs,Os);return s}};Ai.DEPTH_BASE="depthBase";Ai.DEPTH="depth";Ai.LINEAR_DEPTH="linearDepth";var Do=(i,e,t)=>i.add(e).div(e.sub(t)),DR=(i,e,t)=>e.sub(t).mul(i).sub(e),Xy=(i,e,t)=>e.add(i).mul(t).div(t.sub(e).mul(i)),dm=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t)),fm=(i,e,t)=>{e=e.max(1e-6).toVar();let n=ls(i.negate().div(e)),s=ls(t.div(e));return n.div(s)},LR=(i,e,t)=>{let n=i.mul(Wp(t.div(e)));return R(Math.E).pow(n).mul(e).negate()},$y=Y(Ai,Ai.DEPTH_BASE),pm=le(Ai,Ai.DEPTH),Uu=Y(Ai,Ai.LINEAR_DEPTH),FR=Uu(hm());pm.assign=i=>$y(i);var zf=class extends Ce{constructor(e){super("float"),this.name=e,this.isBuiltinNode=!0}generate(){return this.name}},UR=Y(zf),Vi=class i extends Ce{static get type(){return"ClippingNode"}constructor(e=i.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);let t=e.clippingContext,{intersectionPlanes:n,unionPlanes:s}=t;return this.hardwareClipping=e.material.hardwareClipping,this.scope===i.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(n,s):this.scope===i.HARDWARE?this.setupHardwareClipping(s,e):this.setupDefault(n,s)}setupAlphaToCoverage(e,t){return z(()=>{let n=R().toVar("distanceToPlane"),s=R().toVar("distanceToGradient"),r=R(1).toVar("clipOpacity"),o=t.length;if(this.hardwareClipping===!1&&o>0){let c=as(t);Tt(o,({i:l})=>{let u=c.element(l);n.assign(tn.dot(u.xyz).negate().add(u.w)),s.assign(n.fwidth().div(2)),r.mulAssign(Mr(s.negate(),s,n))})}let a=e.length;if(a>0){let c=as(e),l=R(1).toVar("intersectionClipOpacity");Tt(a,({i:u})=>{let h=c.element(u);n.assign(tn.dot(h.xyz).negate().add(h.w)),s.assign(n.fwidth().div(2)),l.mulAssign(Mr(s.negate(),s,n).oneMinus())}),r.mulAssign(l.oneMinus())}Si.a.mulAssign(r),Si.a.equal(0).discard()})()}setupDefault(e,t){return z(()=>{let n=t.length;if(this.hardwareClipping===!1&&n>0){let r=as(t);Tt(n,({i:o})=>{let a=r.element(o);tn.dot(a.xyz).greaterThan(a.w).discard()})}let s=e.length;if(s>0){let r=as(e),o=hs(!0).toVar("clipped");Tt(s,({i:a})=>{let c=r.element(a);o.assign(tn.dot(c.xyz).greaterThan(c.w).and(o))}),o.discard()}})()}setupHardwareClipping(e,t){let n=e.length;return t.enableHardwareClipping(n),z(()=>{let s=as(e),r=UR(t.getClipDistance());Tt(n,({i:o})=>{let a=s.element(o),c=tn.dot(a.xyz).sub(a.w).negate();r.element(o).assign(c)})})()}};Vi.ALPHA_TO_COVERAGE="alphaToCoverage";Vi.DEFAULT="default";Vi.HARDWARE="hardware";var BR=()=>Z(new Vi),OR=()=>Z(new Vi(Vi.ALPHA_TO_COVERAGE)),VR=()=>Z(new Vi(Vi.HARDWARE)),GR=.05,n_=z(([i])=>gs(He(1e4,Wn(He(17,i.x).add(He(.1,i.y)))).mul(Ht(.1,At(Wn(He(13,i.y).add(i.x))))))),i_=z(([i])=>n_(oe(n_(i.xy),i.z))),zR=z(([i])=>{let e=on(Au(Yp(i.xyz)),Au(Kp(i.xyz))),t=R(1).div(R(GR).mul(e)).toVar("pixScale"),n=oe(Fo(Ui(ls(t))),Fo(Zu(ls(t)))),s=oe(i_(Ui(n.x.mul(i.xyz))),i_(Ui(n.y.mul(i.xyz)))),r=gs(ls(t)),o=Ht(He(r.oneMinus(),s.x),He(r,s.y)),a=$n(r,r.oneMinus()),c=V(o.mul(o).div(He(2,a).mul(tt(1,a))),o.sub(He(.5,a)).div(tt(1,a)),tt(1,tt(1,o).mul(tt(1,o)).div(He(2,a).mul(tt(1,a))))),l=o.lessThan(a.oneMinus()).select(o.lessThan(a).select(c.x,c.y),c.z);return fs(l,1e-6,1)}).setLayout({name:"getAlphaHashThreshold",type:"float",inputs:[{name:"position",type:"vec3"}]}),Er=class extends ei{static get type(){return"NodeMaterial"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isNodeMaterial=!0,this.fog=!0,this.lights=!1,this.hardwareClipping=!1,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.geometryNode=null,this.depthNode=null,this.shadowPositionNode=null,this.receivedShadowNode=null,this.castShadowNode=null,this.outputNode=null,this.mrtNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+x_(this)}build(e){this.setup(e)}setupObserver(e){return new Yd(e)}setup(e){e.context.setupNormal=()=>this.setupNormal(e),e.context.setupPositionView=()=>this.setupPositionView(e),e.context.setupModelViewProjection=()=>this.setupModelViewProjection(e);let t=e.renderer,n=t.getRenderTarget();e.addStack();let s=this.vertexNode||this.setupVertex(e);e.stack.outputNode=s,this.setupHardwareClipping(e),this.geometryNode!==null&&(e.stack.outputNode=e.stack.outputNode.bypass(this.geometryNode)),e.addFlow("vertex",e.removeStack()),e.addStack();let r,o=this.setupClipping(e);if((this.depthWrite===!0||this.depthTest===!0)&&(n!==null?n.depthBuffer===!0&&this.setupDepth(e):t.depth===!0&&this.setupDepth(e)),this.fragmentNode===null){this.setupDiffuseColor(e),this.setupVariants(e);let a=this.setupLighting(e);o!==null&&e.stack.add(o);let c=Ge(a,Si.a).max(0);if(r=this.setupOutput(e,c),Sc.assign(r),this.outputNode!==null&&(r=this.outputNode),n!==null){let l=t.getMRT(),u=this.mrtNode;l!==null?(r=l,u!==null&&(r=l.merge(u))):u!==null&&(r=u)}}else{let a=this.fragmentNode;a.isOutputStructNode!==!0&&(a=Ge(a)),r=this.setupOutput(e,a)}e.stack.outputNode=r,e.addFlow("fragment",e.removeStack()),e.observer=this.setupObserver(e)}setupClipping(e){if(e.clippingContext===null)return null;let{unionPlanes:t,intersectionPlanes:n}=e.clippingContext,s=null;if(t.length>0||n.length>0){let r=e.renderer.samples;this.alphaToCoverage&&r>1?s=OR():e.stack.add(BR())}return s}setupHardwareClipping(e){if(this.hardwareClipping=!1,e.clippingContext===null)return;let t=e.clippingContext.unionPlanes.length;t>0&&t<=8&&e.isAvailable("clipDistance")&&(e.stack.add(VR()),this.hardwareClipping=!0)}setupDepth(e){let{renderer:t,camera:n}=e,s=this.depthNode;if(s===null){let r=t.getMRT();r&&r.has("depth")?s=r.get("depth"):t.logarithmicDepthBuffer===!0&&(n.isPerspectiveCamera?s=fm(tn.z,Bs,Os):s=Do(tn.z,Bs,Os))}s!==null&&pm.assign(s).append()}setupPositionView(){return Cc.mul(Bt).xyz}setupModelViewProjection(){return Rc.mul(tn)}setupVertex(e){return e.addStack(),this.setupPosition(e),e.context.vertex=e.removeStack(),Fy}setupPosition(e){let{object:t,geometry:n}=e;if((n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&ky(t).append(),t.isSkinnedMesh===!0&&Gy(t).append(),this.displacementMap){let s=yr("displacementMap","texture"),r=yr("displacementScale","float"),o=yr("displacementBias","float");Bt.addAssign(In.normalize().mul(s.x.mul(r).add(o)))}return t.isBatchedMesh&&Vy(t).append(),t.isInstancedMesh&&t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&Oy(t).append(),this.positionNode!==null&&Bt.assign(this.positionNode.context({isPositionNodeInput:!0})),Bt}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Ge(this.colorNode):Cy;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Ge(n.xyz.mul(ps("color","vec3")),n.a)),e.instanceColor&&(n=Tc("vec3","vInstanceColor").mul(n)),e.isBatchedMesh&&e._colorsTexture&&(n=Tc("vec3","vBatchColor").mul(n)),Si.assign(n);let s=this.opacityNode?R(this.opacityNode):Py;if(Si.a.assign(Si.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){let r=this.alphaTestNode!==null?R(this.alphaTestNode):Ry;Si.a.lessThanEqual(r).discard()}this.alphaHash===!0&&Si.a.lessThan(zR(Bt)).discard(),this.transparent===!1&&this.blending===Ji&&this.alphaToCoverage===!1&&Si.a.assign(1)}setupVariants(){}setupOutgoingLight(){return this.lights===!0?V(0):Si.rgb}setupNormal(){return this.normalNode?V(this.normalNode):Iy}setupEnvironment(){let e=null;return this.envNode?e=this.envNode:this.envMap&&(e=this.envMap.isCubeTexture?yr("envMap","cubeTexture"):yr("envMap","texture")),e}setupLightMap(e){let t=null;return e.material.lightMap&&(t=new Vf(Dy)),t}setupLights(e){let t=[],n=this.setupEnvironment(e);n&&n.isLightingNode&&t.push(n);let s=this.setupLightMap(e);if(s&&s.isLightingNode&&t.push(s),this.aoNode!==null||e.material.aoMap){let o=this.aoNode!==null?this.aoNode:Ly;t.push(new Bf(o))}let r=this.lightsNode||e.lightsNode;return t.length>0&&(r=e.renderer.lighting.createNode([...r.getLights(),...t])),r}setupLightingModel(){}setupLighting(e){let{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null,c=this.setupOutgoingLight(e);if(a&&a.getScope().hasLights){let l=this.setupLightingModel(e);c=Hy(a,l,n,s)}else n!==null&&(c=V(s!==null?zt(c,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(rf.assign(V(r||Ny)),c=c.add(rf)),c}setupOutput(e,t){if(this.fog===!0){let n=e.fogNode;n&&(Sc.assign(t),t=Ge(n))}return t}setDefaultValues(e){for(let n in e){let s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}let t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(let n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});let n=ei.prototype.toJSON.call(this,e),s=yu(this);n.inputNodes={};for(let{property:o,childNode:a}of s)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}if(t){let o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.geometryNode=e.geometryNode,this.depthNode=e.depthNode,this.shadowPositionNode=e.shadowPositionNode,this.receivedShadowNode=e.receivedShadowNode,this.castShadowNode=e.castShadowNode,this.outputNode=e.outputNode,this.mrtNode=e.mrtNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}};var Ud=null,kf=class extends Bo{static get type(){return"ViewportSharedTextureNode"}constructor(e=Hs,t=null){Ud===null&&(Ud=new io),super(e,t,Ud)}updateReference(){return this}},kR=Y(kf);var HR=i=>Z(i).mul(.5).add(.5),WR=i=>Z(i).mul(2).sub(1);var Hf=class extends It{static get type(){return"EquirectUVNode"}constructor(e=hy){super("vec2"),this.dirNode=e}setup(){let e=this.dirNode,t=e.z.atan(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return oe(t,n)}},qR=Y(Hf);var Yy=z(({f0:i,f90:e,dotVH:t})=>{let n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),XR=z(i=>i.diffuseColor.mul(1/Math.PI));var Ky=z(i=>{if(i.geometry.hasAttribute("normal")===!1)return R(0);let e=Oi.dFdx().abs().max(Oi.dFdy().abs());return e.x.max(e.y).max(e.z)}),$R=z(i=>{let{roughness:e}=i,t=Ky(),n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),Zy=z(({alpha:i,dotNL:e,dotNV:t})=>{let n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return ds(.5,s.add(r).max(ux))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),YR=z(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:r,dotNV:o,dotNL:a})=>{let c=a.mul(V(i.mul(t),e.mul(n),o).length()),l=o.mul(V(i.mul(s),e.mul(r),a).length());return ds(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),jy=z(({alpha:i,dotNH:e})=>{let t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),KR=R(1/Math.PI),ZR=z(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{let r=i.mul(e),o=V(e.mul(n),i.mul(s),r.mul(t)),a=o.dot(o),c=r.div(a);return KR.mul(r.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),jR=z(i=>{let{lightDirection:e,f0:t,f90:n,roughness:s,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=i,c=i.normalView||ms,l=s.pow2(),u=e.add(qn).normalize(),h=c.dot(e).clamp(),d=c.dot(qn).clamp(),m=c.dot(u).clamp(),_=qn.dot(u).clamp(),x=Yy({f0:t,f90:n,dotVH:_}),g,p;if(vc(o)&&(x=W_.mix(x,r)),vc(a)){let A=gu.dot(e),b=gu.dot(qn),S=gu.dot(u),I=Io.dot(e),w=Io.dot(qn),N=Io.dot(u);g=YR({alphaT:of,alphaB:l,dotTV:b,dotBV:w,dotTL:A,dotBL:I,dotNV:d,dotNL:h}),p=ZR({alphaT:of,alphaB:l,dotNH:m,dotTH:S,dotBH:N})}else g=Zy({alpha:l,dotNL:h,dotNV:d}),p=jy({alpha:l,dotNH:m});return x.mul(g).mul(p)}),QR=z(({roughness:i,dotNV:e})=>{let t=Ge(-1,-.0275,-.572,.022),n=Ge(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return oe(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]});var JR=z(({f:i,f90:e,dotVH:t})=>{let n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(V(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]});var eh=1/6,Qy=i=>He(eh,He(i,He(i,i.negate().add(3)).sub(3)).add(1)),Wf=i=>He(eh,He(i,He(i,He(3,i).sub(6))).add(4)),Jy=i=>He(eh,He(i,He(i,He(-3,i).add(3)).add(3)).add(1)),qf=i=>He(eh,bi(i,3)),s_=i=>Qy(i).add(Wf(i)),r_=i=>Jy(i).add(qf(i)),o_=i=>Ht(-1,Wf(i).div(Qy(i).add(Wf(i)))),a_=i=>Ht(1,qf(i).div(Jy(i).add(qf(i)))),c_=(i,e,t)=>{let n=i.uvNode,s=He(n,e.zw).add(.5),r=Ui(s),o=gs(s),a=s_(o.x),c=r_(o.x),l=o_(o.x),u=a_(o.x),h=o_(o.y),d=a_(o.y),m=oe(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),_=oe(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),x=oe(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),g=oe(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),p=s_(o.y).mul(Ht(a.mul(i.sample(m).level(t)),c.mul(i.sample(_).level(t)))),A=r_(o.y).mul(Ht(a.mul(i.sample(x).level(t)),c.mul(i.sample(g).level(t))));return p.add(A)},eC=z(([i,e=R(3)])=>{let t=oe(i.size(C(e))),n=oe(i.size(C(e.add(1)))),s=ds(1,t),r=ds(1,n),o=c_(i,Ge(s,t),Ui(e)),a=c_(i,Ge(r,n),Zu(e));return gs(e).mix(o,a)});var FL=V(.04),UL=R(1);var l_=R(1),Xf=R(-2),au=R(.8),Bd=R(-1),cu=R(.4),Od=R(2),lu=R(.305),Vd=R(3),u_=R(.21),tC=R(4),h_=R(4),nC=R(16),iC=z(([i])=>{let e=V(At(i)).toVar(),t=R(-1).toVar();return et(e.x.greaterThan(e.z),()=>{et(e.x.greaterThan(e.y),()=>{t.assign(Pn(i.x.greaterThan(0),0,3))}).Else(()=>{t.assign(Pn(i.y.greaterThan(0),1,4))})}).Else(()=>{et(e.z.greaterThan(e.y),()=>{t.assign(Pn(i.z.greaterThan(0),2,5))}).Else(()=>{t.assign(Pn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),sC=z(([i,e])=>{let t=oe().toVar();return et(e.equal(0),()=>{t.assign(oe(i.z,i.y).div(At(i.x)))}).ElseIf(e.equal(1),()=>{t.assign(oe(i.x.negate(),i.z.negate()).div(At(i.y)))}).ElseIf(e.equal(2),()=>{t.assign(oe(i.x.negate(),i.y).div(At(i.z)))}).ElseIf(e.equal(3),()=>{t.assign(oe(i.z.negate(),i.y).div(At(i.x)))}).ElseIf(e.equal(4),()=>{t.assign(oe(i.x.negate(),i.z).div(At(i.y)))}).Else(()=>{t.assign(oe(i.x,i.y).div(At(i.z)))}),He(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),rC=z(([i])=>{let e=R(0).toVar();return et(i.greaterThanEqual(au),()=>{e.assign(l_.sub(i).mul(Bd.sub(Xf)).div(l_.sub(au)).add(Xf))}).ElseIf(i.greaterThanEqual(cu),()=>{e.assign(au.sub(i).mul(Od.sub(Bd)).div(au.sub(cu)).add(Bd))}).ElseIf(i.greaterThanEqual(lu),()=>{e.assign(cu.sub(i).mul(Vd.sub(Od)).div(cu.sub(lu)).add(Od))}).ElseIf(i.greaterThanEqual(u_),()=>{e.assign(lu.sub(i).mul(tC.sub(Vd)).div(lu.sub(u_)).add(Vd))}).Else(()=>{e.assign(R(-2).mul(ls(He(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]}),ev=z(([i,e])=>{let t=i.toVar();t.assign(He(2,t).sub(1));let n=V(t,1).toVar();return et(e.equal(0),()=>{n.assign(n.zyx)}).ElseIf(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).ElseIf(e.equal(2),()=>{n.x.mulAssign(-1)}).ElseIf(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).ElseIf(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).ElseIf(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]}),tv=z(([i,e,t,n,s,r])=>{let o=R(t),a=V(e),c=fs(rC(o),Xf,r),l=gs(c),u=Ui(c),h=V($f(i,a,u,n,s,r)).toVar();return et(l.notEqual(0),()=>{let d=V($f(i,a,u.add(1),n,s,r)).toVar();h.assign(zt(h,d,l))}),h}),$f=z(([i,e,t,n,s,r])=>{let o=R(t).toVar(),a=V(e),c=R(iC(a)).toVar(),l=R(on(h_.sub(o),0)).toVar();o.assign(on(o,h_));let u=R(Fo(o)).toVar(),h=oe(sC(a,c).mul(u.sub(2)).add(1)).toVar();return et(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(He(3,nC))),h.y.addAssign(He(4,Fo(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(s),i.sample(h).grad(oe(),oe())}),Gd=z(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{let c=rs(n),l=t.mul(c).add(s.cross(t).mul(Wn(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return $f(i,l,e,r,o,a)}),oC=z(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{let d=V(Pn(e,t,Qu(t,n))).toVar();et(Hp(d.equals(V(0))),()=>{d.assign(V(n.z,0,n.x.negate()))}),d.assign(wr(d));let m=V().toVar();return m.addAssign(s.element(0).mul(Gd({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),Tt({start:C(1),end:i},({i:_})=>{et(_.greaterThanEqual(r),()=>{zy()});let x=R(o.mul(R(_))).toVar();m.addAssign(s.element(_).mul(Gd({theta:x.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),m.addAssign(s.element(_).mul(Gd({theta:x,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Ge(m,1)}),Bu=null,d_=new WeakMap;function aC(i){let e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function cC(i){let e=d_.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){let n=i.image;if(i.isCubeTexture)if(lC(n))e=Bu.fromCubemap(i,e);else return null;else if(uC(n))e=Bu.fromEquirectangular(i,e);else return null;e.pmremVersion=i.pmremVersion,d_.set(i,e)}return e.texture}var Yf=class extends It{static get type(){return"PMREMNode"}constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null;let s=new gn;s.isRenderTargetTexture=!0,this._texture=An(s),this._width=Ke(0),this._height=Ke(0),this._maxMip=Ke(0),this.updateBeforeType=mt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){let t=aC(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem,t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=cC(n),e!==null&&(this._pmrem=e,this.updateFromTexture(e)))}setup(e){Bu===null&&(Bu=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));let n=this.value;e.renderer.coordinateSystem===Sn&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=V(t.x.negate(),t.yz)),t=V(t.x,t.y.negate(),t.z);let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),tv(this._texture,t,s,this._width,this._height,this._maxMip)}};function lC(i){if(i==null)return!1;let e=0,t=6;for(let n=0;n<t;n++)i[n]!==void 0&&e++;return e===t}function uC(i){return i==null?!1:i.height>0}var hC=Y(Yf);var Kf=class extends It{static get type(){return"MatcapUVNode"}constructor(){super("vec2")}setup(){let e=V(qn.z,0,qn.x.negate()).normalize(),t=qn.cross(e);return oe(e.dot(ms),t.dot(ms)).mul(.495).add(.5)}},dC=le(Kf);var Zf=class extends It{static get type(){return"RotateNode"}constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){let{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){let r=t.cos(),o=t.sin();return Yu(r,o,o.negate(),r).mul(n)}else{let r=t,o=Tr(Ge(1,0,0,0),Ge(0,rs(r.x),Wn(r.x).negate(),0),Ge(0,Wn(r.x),rs(r.x),0),Ge(0,0,0,1)),a=Tr(Ge(rs(r.y),0,Wn(r.y),0),Ge(0,1,0,0),Ge(Wn(r.y).negate(),0,rs(r.y),0),Ge(0,0,0,1)),c=Tr(Ge(rs(r.z),Wn(r.z).negate(),0,0),Ge(Wn(r.z),rs(r.z),0,0),Ge(0,0,1,0),Ge(0,0,0,1));return o.mul(a).mul(c).mul(Ge(n,1)).xyz}}},nv=Y(Zf);var fC=z(({texture:i,uv:e})=>{let n=V().toVar();return et(e.x.lessThan(1e-4),()=>{n.assign(V(1,0,0))}).ElseIf(e.y.lessThan(1e-4),()=>{n.assign(V(0,1,0))}).ElseIf(e.z.lessThan(1e-4),()=>{n.assign(V(0,0,1))}).ElseIf(e.x.greaterThan(1-1e-4),()=>{n.assign(V(-1,0,0))}).ElseIf(e.y.greaterThan(1-1e-4),()=>{n.assign(V(0,-1,0))}).ElseIf(e.z.greaterThan(1-1e-4),()=>{n.assign(V(0,0,-1))}).Else(()=>{let r=i.sample(e.add(V(-.01,0,0))).r.sub(i.sample(e.add(V(.01,0,0))).r),o=i.sample(e.add(V(0,-.01,0))).r.sub(i.sample(e.add(V(0,.01,0))).r),a=i.sample(e.add(V(0,0,-.01))).r.sub(i.sample(e.add(V(0,0,.01))).r);n.assign(V(r,o,a))}),n.normalize()}),jf=class extends Mi{static get type(){return"Texture3DNode"}constructor(e,t=null,n=null){super(e,t,n),this.isTexture3DNode=!0}getInputType(){return"texture3D"}getDefaultUV(){return V(.5,.5,.5)}setUpdateMatrix(){}setupUV(e,t){let n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0)&&(this.sampler?t=t.flipY():t=t.setY(C(Gs(this,this.levelNode).y).sub(t.y).sub(1))),t}generateUV(e,t){return t.build(e,"vec3")}normal(e){return fC({texture:this,uv:e})}},pC=Y(jf);var Qf=class extends ut{static get type(){return"ParameterNode"}constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}},mC=(i,e)=>Z(new Qf(i,e)),Jf=class extends Ce{static get type(){return"StackNode"}constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}getMemberType(e,t){return this.outputNode?this.outputNode.getMemberType(e,t):"void"}add(e){return this.nodes.push(e),this}If(e,t){let n=new mc(t);return this._currentCond=Pn(e,n),this.add(this._currentCond)}ElseIf(e,t){let n=new mc(t),s=Pn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}Else(e){return this._currentCond.elseNode=new mc(e),this}build(e,...t){let n=R_();sf(this);for(let s of this.nodes)s.build(e,"void");return sf(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}else(...e){return console.warn("TSL.StackNode: .else() has been renamed to .Else()."),this.Else(...e)}elseif(...e){return console.warn("TSL.StackNode: .elseif() has been renamed to .ElseIf()."),this.ElseIf(...e)}},gC=Y(Jf);function _C(i){return Object.entries(i).map(([e,t])=>typeof t=="string"?{name:e,type:t,atomic:!1}:{name:e,type:t.type,atomic:t.atomic||!1})}var ep=class extends Ce{static get type(){return"StructTypeNode"}constructor(e,t=null){super("struct"),this.membersLayout=_C(e),this.name=t,this.isStructLayoutNode=!0}getLength(){let e=0;for(let t of this.membersLayout)e+=Up(t.type);return e}getMemberType(e,t){let n=this.membersLayout.find(s=>s.name===t);return n?n.type:"void"}getNodeType(e){return e.getStructTypeFromNode(this,this.membersLayout,this.name).name}generate(e){return this.getNodeType(e)}},tp=class extends Ce{static get type(){return"StructNode"}constructor(e,t){super("vec3"),this.structLayoutNode=e,this.values=t,this.isStructNode=!0}getNodeType(e){return this.structLayoutNode.getNodeType(e)}getMemberType(e,t){return this.structLayoutNode.getMemberType(e,t)}generate(e){let t=e.getVarFromNode(this),n=t.type,s=e.getPropertyName(t);return e.addLineFlowCode(`${s} = ${e.generateStruct(n,this.structLayoutNode.membersLayout,this.values)}`,this),t.name}},xC=(i,e=null)=>{let t=new ep(i,e),n=(...s)=>{let r=null;if(s.length>0)if(s[0].isNode){r={};let o=Object.keys(i);for(let a=0;a<s.length;a++)r[o[a]]=s[a]}else r=s[0];return Z(new tp(t,r))};return n.layout=t,n.isStruct=!0,n},Ou=class extends Ce{static get type(){return"OutputStructNode"}constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}getNodeType(e){let t=e.getNodeProperties(this);if(t.membersLayout===void 0){let n=this.members,s=[];for(let r=0;r<n.length;r++){let o="m"+r,a=n[r].getNodeType(e);s.push({name:o,type:a,index:r})}t.membersLayout=s,t.structType=e.getOutputStructTypeFromNode(this,t.membersLayout)}return t.structType.name}generate(e){let t=e.getOutputStructName(),n=this.members,s=t!==""?t+".":"";for(let r=0;r<n.length;r++){let o=n[r].build(e);e.addLineFlowCode(`${s}m${r} = ${o}`,this)}return t}},yC=Y(Ou);function iv(i,e){for(let t=0;t<i.length;t++)if(i[t].name===e)return t;return-1}var np=class extends Ou{static get type(){return"MRTNode"}constructor(e){super(),this.outputNodes=e,this.isMRTNode=!0}has(e){return this.outputNodes[e]!==void 0}get(e){return this.outputNodes[e]}merge(e){let t={...this.outputNodes,...e.outputNodes};return sv(t)}setup(e){let t=this.outputNodes,n=e.renderer.getRenderTarget(),s=[],r=n.textures;for(let o in t){let a=iv(r,o);s[a]=Ge(t[o])}return this.members=s,super.setup(e)}},sv=Y(np),vC=z(([i])=>{let e=i.toUint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).toFloat().mul(1/2**32)}),ip=(i,e)=>bi(He(4,i.mul(tt(1,i))),e),TC=(i,e)=>i.lessThan(.5)?ip(i.mul(2),e).div(2):tt(1,ip(He(tt(1,i),2),e).div(2)),SC=(i,e,t)=>bi(ds(bi(i,e),Ht(bi(i,e),bi(tt(1,i),t))),1/e),bC=(i,e)=>Wn(Mu.mul(e.mul(i).sub(1))).div(Mu.mul(e.mul(i).sub(1))),os=z(([i])=>i.fract().sub(.5).abs()).setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]}),MC=z(([i])=>V(os(i.z.add(os(i.y.mul(1)))),os(i.z.add(os(i.x.mul(1)))),os(i.y.add(os(i.x.mul(1)))))).setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]}),AC=z(([i,e,t])=>{let n=V(i).toVar(),s=R(1.4).toVar(),r=R(0).toVar(),o=V(n).toVar();return Tt({start:R(0),end:R(3),type:"float",condition:"<="},()=>{let a=V(MC(o.mul(2))).toVar();n.addAssign(a.add(t.mul(R(.1).mul(e)))),o.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);let c=R(os(n.z.add(os(n.x.add(os(n.y)))))).toVar();r.addAssign(c.div(s)),o.addAssign(.14)}),r}).setLayout({name:"triNoise3D",type:"float",inputs:[{name:"position",type:"vec3"},{name:"speed",type:"float"},{name:"time",type:"float"}]}),sp=class extends Ce{static get type(){return"FunctionOverloadingNode"}constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null,this.global=!0}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){let t=this.parametersNodes,n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(let o of this.functionNodes){let c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");let l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){let d=t[h],m=l[h];d.getNodeType(e)===m.type?u++:u=0}u>r&&(s=o,r=u)}}this._candidateFnCall=n=s(...t)}return n}},EC=Y(sp),dn=i=>(...e)=>EC(i,...e),Rr=Ke(0).setGroup(at).onRenderUpdate(i=>i.time),rv=Ke(0).setGroup(at).onRenderUpdate(i=>i.deltaTime),wC=Ke(0,"uint").setGroup(at).onRenderUpdate(i=>i.frameId),RC=(i=1)=>(console.warn('TSL: timerLocal() is deprecated. Use "time" instead.'),Rr.mul(i)),CC=(i=1)=>(console.warn('TSL: timerGlobal() is deprecated. Use "time" instead.'),Rr.mul(i)),NC=(i=1)=>(console.warn('TSL: timerDelta() is deprecated. Use "deltaTime" instead.'),rv.mul(i)),PC=(i=Rr)=>i.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5),IC=(i=Rr)=>i.fract().round(),DC=(i=Rr)=>i.add(.5).fract().mul(2).sub(1).abs(),LC=(i=Rr)=>i.fract(),FC=z(([i,e,t=oe(.5)])=>nv(i.sub(t),e).add(t)),UC=z(([i,e,t=oe(.5)])=>{let n=i.sub(t),s=n.dot(n),o=s.mul(s).mul(e);return i.add(n.mul(o))}),BC=z(({position:i=null,horizontal:e=!0,vertical:t=!1})=>{let n;i!==null?(n=cs.toVar(),n[3][0]=i.x,n[3][1]=i.y,n[3][2]=i.z):n=cs;let s=li.mul(n);return vc(e)&&(s[0][0]=cs[0].length(),s[0][1]=0,s[0][2]=0),vc(t)&&(s[1][0]=0,s[1][1]=cs[1].length(),s[1][2]=0),s[2][0]=0,s[2][1]=0,s[2][2]=1,Rc.mul(s).mul(Bt)}),OC=z(([i=null])=>{let e=Uu();return Uu(hm(i)).sub(e).lessThan(0).select(Hs,i)}),rp=class extends Ce{static get type(){return"SpriteSheetUVNode"}constructor(e,t=Ct(),n=R(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){let{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,o=e.mod(s.mul(r)).floor(),a=o.mod(s),c=r.sub(o.add(1).div(s).ceil()),l=n.reciprocal(),u=oe(a,c);return t.add(u).mul(l)}},VC=Y(rp),op=class extends Ce{static get type(){return"TriplanarTexturesNode"}constructor(e,t=null,n=null,s=R(1),r=Bt,o=In){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=o}setup(){let{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:o}=this,a=o.abs().normalize();a=a.div(a.dot(V(1)));let c=r.yz.mul(s),l=r.zx.mul(s),u=r.xy.mul(s),h=e.value,d=t!==null?t.value:h,m=n!==null?n.value:h,_=An(h,c).mul(a.x),x=An(d,l).mul(a.y),g=An(m,u).mul(a.z);return Ht(_,x,g)}},ov=Y(op),GC=(...i)=>ov(...i),Ao=new Cn,pr=new D,Eo=new D,zd=new D,hc=new ot,uu=new D(0,0,-1),Li=new pt,dc=new D,hu=new D,fc=new pt,du=new Le,Vu=new ns,zC=Hs.flipX();Vu.depthTexture=new yi(1,1);var kd=!1,ap=class i extends Mi{static get type(){return"ReflectorNode"}constructor(e={}){super(e.defaultTexture||Vu.texture,zC),this._reflectorBaseNode=e.reflector||new cp(this,e),this._depthNode=null,this.setUpdateMatrix(!1)}get reflector(){return this._reflectorBaseNode}get target(){return this._reflectorBaseNode.target}getDepthNode(){if(this._depthNode===null){if(this._reflectorBaseNode.depth!==!0)throw new Error("THREE.ReflectorNode: Depth node can only be requested when the reflector is created with { depth: true }. ");this._depthNode=Z(new i({defaultTexture:Vu.depthTexture,reflector:this._reflectorBaseNode}))}return this._depthNode}setup(e){return e.object.isQuadMesh||this._reflectorBaseNode.build(e),super.setup(e)}clone(){let e=new this.constructor(this.reflectorNode);return e._reflectorBaseNode=this._reflectorBaseNode,e}},cp=class extends Ce{static get type(){return"ReflectorBaseNode"}constructor(e,t={}){super();let{target:n=new hn,resolution:s=1,generateMipmaps:r=!1,bounces:o=!0,depth:a=!1}=t;this.textureNode=e,this.target=n,this.resolution=s,this.generateMipmaps=r,this.bounces=o,this.depth=a,this.updateBeforeType=o?mt.RENDER:mt.FRAME,this.virtualCameras=new WeakMap,this.renderTargets=new WeakMap}_updateResolution(e,t){let n=this.resolution;t.getDrawingBufferSize(du),e.setSize(Math.round(du.width*n),Math.round(du.height*n))}setup(e){return this._updateResolution(Vu,e.renderer),super.setup(e)}getVirtualCamera(e){let t=this.virtualCameras.get(e);return t===void 0&&(t=e.clone(),this.virtualCameras.set(e,t)),t}getRenderTarget(e){let t=this.renderTargets.get(e);return t===void 0&&(t=new ns(0,0,{type:ii}),this.generateMipmaps===!0&&(t.texture.minFilter=cd,t.texture.generateMipmaps=!0),this.depth===!0&&(t.depthTexture=new yi),this.renderTargets.set(e,t)),t}updateBefore(e){if(this.bounces===!1&&kd)return!1;kd=!0;let{scene:t,camera:n,renderer:s,material:r}=e,{target:o}=this,a=this.getVirtualCamera(n),c=this.getRenderTarget(a);if(s.getDrawingBufferSize(du),this._updateResolution(c,s),Eo.setFromMatrixPosition(o.matrixWorld),zd.setFromMatrixPosition(n.matrixWorld),hc.extractRotation(o.matrixWorld),pr.set(0,0,1),pr.applyMatrix4(hc),dc.subVectors(Eo,zd),dc.dot(pr)>0)return;dc.reflect(pr).negate(),dc.add(Eo),hc.extractRotation(n.matrixWorld),uu.set(0,0,-1),uu.applyMatrix4(hc),uu.add(zd),hu.subVectors(Eo,uu),hu.reflect(pr).negate(),hu.add(Eo),a.coordinateSystem=n.coordinateSystem,a.position.copy(dc),a.up.set(0,1,0),a.up.applyMatrix4(hc),a.up.reflect(pr),a.lookAt(hu),a.near=n.near,a.far=n.far,a.updateMatrixWorld(),a.projectionMatrix.copy(n.projectionMatrix),Ao.setFromNormalAndCoplanarPoint(pr,Eo),Ao.applyMatrix4(a.matrixWorldInverse),Li.set(Ao.normal.x,Ao.normal.y,Ao.normal.z,Ao.constant);let l=a.projectionMatrix;fc.x=(Math.sign(Li.x)+l.elements[8])/l.elements[0],fc.y=(Math.sign(Li.y)+l.elements[9])/l.elements[5],fc.z=-1,fc.w=(1+l.elements[10])/l.elements[14],Li.multiplyScalar(1/Li.dot(fc));let u=0;l.elements[2]=Li.x,l.elements[6]=Li.y,l.elements[10]=s.coordinateSystem===_i?Li.z-u:Li.z+1-u,l.elements[14]=Li.w,this.textureNode.value=c.texture,this.depth===!0&&(this.textureNode.getDepthNode().value=c.depthTexture),r.visible=!1;let h=s.getRenderTarget(),d=s.getMRT(),m=s.autoClear;s.setMRT(null),s.setRenderTarget(c),s.autoClear=!0,s.render(t,a),s.setMRT(d),s.setRenderTarget(h),s.autoClear=m,r.visible=!0,kd=!1}},kC=i=>Z(new ap(i)),Hd=new oo(-1,1,1,-1,0,1),lp=class extends Vn{constructor(e=!1){super();let t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt(t,2))}},HC=new lp,Gu=class extends _n{constructor(e=null){super(HC,e),this.camera=Hd,this.isQuadMesh=!0}async renderAsync(e){return e.renderAsync(this,Hd)}render(e){e.render(this,Hd)}},WC=new Le,up=class extends Mi{static get type(){return"RTTNode"}constructor(e,t=null,n=null,s={type:ii}){let r=new ns(t,n,s);super(r.texture,Ct()),this.node=e,this.width=t,this.height=n,this.pixelRatio=1,this.renderTarget=r,this.textureNeedsUpdate=!0,this.autoUpdate=!0,this._rttNode=null,this._quadMesh=new Gu(new Er),this.updateBeforeType=mt.RENDER}get autoSize(){return this.width===null}setup(e){return this._rttNode=this.node.context(e.getSharedContext()),this._quadMesh.material.name="RTT",this._quadMesh.material.needsUpdate=!0,super.setup(e)}setSize(e,t){this.width=e,this.height=t;let n=e*this.pixelRatio,s=t*this.pixelRatio;this.renderTarget.setSize(n,s),this.textureNeedsUpdate=!0}setPixelRatio(e){this.pixelRatio=e,this.setSize(this.width,this.height)}updateBefore({renderer:e}){if(this.textureNeedsUpdate===!1&&this.autoUpdate===!1)return;if(this.textureNeedsUpdate=!1,this.autoSize===!0){this.pixelRatio=e.getPixelRatio();let n=e.getSize(WC);this.setSize(n.width,n.height)}this._quadMesh.material.fragmentNode=this._rttNode;let t=e.getRenderTarget();e.setRenderTarget(this.renderTarget),this._quadMesh.render(e),e.setRenderTarget(t)}clone(){let e=new Mi(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e.referenceNode=this,e}},av=(i,...e)=>Z(new up(Z(i),...e)),qC=(i,...e)=>i.isTextureNode?i:i.isPassNode?i.getTextureNode():av(i,...e),No=z(([i,e,t],n)=>{let s;n.renderer.coordinateSystem===_i?(i=oe(i.x,i.y.oneMinus()).mul(2).sub(1),s=Ge(V(i,e),1)):s=Ge(V(i.x,i.y.oneMinus(),e).mul(2).sub(1),1);let r=Ge(t.mul(s));return r.xyz.div(r.w)}),XC=z(([i,e])=>{let t=e.mul(Ge(i,1)),n=t.xy.div(t.w).mul(.5).add(.5).toVar();return oe(n.x,n.y.oneMinus())}),$C=z(([i,e,t])=>{let n=Gs(Ut(e)),s=en(i.mul(n)).toVar(),r=Ut(e,s).toVar(),o=Ut(e,s.sub(en(2,0))).toVar(),a=Ut(e,s.sub(en(1,0))).toVar(),c=Ut(e,s.add(en(1,0))).toVar(),l=Ut(e,s.add(en(2,0))).toVar(),u=Ut(e,s.add(en(0,2))).toVar(),h=Ut(e,s.add(en(0,1))).toVar(),d=Ut(e,s.sub(en(0,1))).toVar(),m=Ut(e,s.sub(en(0,2))).toVar(),_=At(tt(R(2).mul(a).sub(o),r)).toVar(),x=At(tt(R(2).mul(c).sub(l),r)).toVar(),g=At(tt(R(2).mul(h).sub(u),r)).toVar(),p=At(tt(R(2).mul(d).sub(m),r)).toVar(),A=No(i,r,t).toVar(),b=_.lessThan(x).select(A.sub(No(i.sub(oe(R(1).div(n.x),0)),a,t)),A.negate().add(No(i.add(oe(R(1).div(n.x),0)),c,t))),S=g.lessThan(p).select(A.sub(No(i.add(oe(0,R(1).div(n.y))),h,t)),A.negate().add(No(i.sub(oe(0,R(1).div(n.y))),d,t)));return wr(Qu(b,S))}),hp=class extends rr{constructor(e,t,n=Float32Array){let s=ArrayBuffer.isView(e)?e:new n(e*t);super(s,t),this.isStorageInstancedBufferAttribute=!0}},dp=class extends un{constructor(e,t,n=Float32Array){let s=ArrayBuffer.isView(e)?e:new n(e*t);super(s,t),this.isStorageBufferAttribute=!0}},fp=class extends us{static get type(){return"StorageArrayElementNode"}constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}getMemberType(e,t){let n=this.storageBufferNode.structTypeNode;return n?n.getMemberType(e,t):"void"}setup(e){return e.isAvailable("storageBuffer")===!1&&this.node.isPBO===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n,s=e.context.assign;if(e.isAvailable("storageBuffer")===!1?this.node.isPBO===!0&&s!==!0&&(this.node.value.isInstancedBufferAttribute||e.shaderStage!=="compute")?n=e.generatePBO(this):n=this.node.build(e):n=super.generate(e),s!==!0){let r=this.getNodeType(e);n=e.format(n,r,t)}return n}},YC=Y(fp),pp=class extends bc{static get type(){return"StorageBufferNode"}constructor(e,t=null,n=0){let s,r=null;t&&t.isStruct?(s="struct",r=t.layout):t===null&&(e.isStorageBufferAttribute||e.isStorageInstancedBufferAttribute)?(s=TE(e.itemSize),n=e.count):s=t,super(e,s,n),this.isStorageBufferNode=!0,this.structTypeNode=r,this.access=Fi.READ_WRITE,this.isAtomic=!1,this.isPBO=!1,this._attribute=null,this._varying=null,this.global=!0,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getHash(e){if(this.bufferCount===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getInputType(){return this.value.isIndirectStorageBufferAttribute?"indirectStorageBuffer":"storageBuffer"}element(e){return YC(this,e)}setPBO(e){return this.isPBO=e,this}getPBO(){return this.isPBO}setAccess(e){return this.access=e,this}toReadOnly(){return this.setAccess(Fi.READ_ONLY)}setAtomic(e){return this.isAtomic=e,this}toAtomic(){return this.setAtomic(!0)}getAttributeData(){return this._attribute===null&&(this._attribute=Ec(this.value),this._varying=En(this._attribute)),{attribute:this._attribute,varying:this._varying}}getNodeType(e){if(this.structTypeNode!==null)return this.structTypeNode.getNodeType(e);if(e.isAvailable("storageBuffer")||e.isAvailable("indirectStorageBuffer"))return super.getNodeType(e);let{attribute:t}=this.getAttributeData();return t.getNodeType(e)}generate(e){if(this.structTypeNode!==null&&this.structTypeNode.build(e),e.isAvailable("storageBuffer")||e.isAvailable("indirectStorageBuffer"))return super.generate(e);let{attribute:t,varying:n}=this.getAttributeData(),s=n.build(e);return e.registerTransform(s,t),s}},th=(i,e=null,t=0)=>Z(new pp(i,e,t)),KC=(i,e,t)=>(console.warn('THREE.TSL: "storageObject()" is deprecated. Use "storage().setPBO( true )" instead.'),th(i,e,t).setPBO(!0)),ZC=(i,e="float")=>{let t,n;e.isStruct===!0?(t=e.layout.getLength(),n=vu("float")):(t=Up(e),n=vu(e));let s=new dp(i,t,n);return th(s,e,i)},jC=(i,e="float")=>{let t,n;e.isStruct===!0?(t=e.layout.getLength(),n=vu("float")):(t=Up(e),n=vu(e));let s=new hp(i,t,n);return th(s,e,i)},mp=class extends Cu{static get type(){return"VertexColorNode"}constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){let e=this.index;return"color"+(e>0?e:"")}generate(e){let t=this.getAttributeName(e),n=e.hasGeometryAttribute(t),s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new pt(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}},QC=i=>Z(new mp(i)),gp=class extends Ce{static get type(){return"PointUVNode"}constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}},JC=le(gp),pc=new On,Wd=new ot,Ei=class i extends Ce{static get type(){return"SceneNode"}constructor(e=i.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){let t=this.scope,n=this.scene!==null?this.scene:e.scene,s;return t===i.BACKGROUND_BLURRINESS?s=Gt("backgroundBlurriness","float",n):t===i.BACKGROUND_INTENSITY?s=Gt("backgroundIntensity","float",n):t===i.BACKGROUND_ROTATION?s=Ke("mat4").label("backgroundRotation").setGroup(at).onRenderUpdate(()=>{let r=n.background;return r!==null&&r.isTexture&&r.mapping!==Ea?(pc.copy(n.backgroundRotation),pc.x*=-1,pc.y*=-1,pc.z*=-1,Wd.makeRotationFromEuler(pc)):Wd.identity(),Wd}):console.error("THREE.SceneNode: Unknown scope:",t),s}};Ei.BACKGROUND_BLURRINESS="backgroundBlurriness";Ei.BACKGROUND_INTENSITY="backgroundIntensity";Ei.BACKGROUND_ROTATION="backgroundRotation";var e1=le(Ei,Ei.BACKGROUND_BLURRINESS),t1=le(Ei,Ei.BACKGROUND_INTENSITY),n1=le(Ei,Ei.BACKGROUND_ROTATION),_p=class extends Mi{static get type(){return"StorageTextureNode"}constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStorageTextureNode=!0,this.access=Fi.WRITE_ONLY}getInputType(){return"storageTexture"}setup(e){super.setup(e);let t=e.getNodeProperties(this);t.storeNode=this.storeNode}setAccess(e){return this.access=e,this}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}toReadWrite(){return this.setAccess(Fi.READ_WRITE)}toReadOnly(){return this.setAccess(Fi.READ_ONLY)}toWriteOnly(){return this.setAccess(Fi.WRITE_ONLY)}generateStore(e){let t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c,this)}},cv=Y(_p),i1=(i,e,t)=>{let n=cv(i,e,t);return t!==null&&n.append(),n},xp=class extends Uo{static get type(){return"UserDataNode"}constructor(e,t,n=null){super(e,t,n),this.userData=n}updateReference(e){return this.reference=this.userData!==null?this.userData:e.object.userData,this.reference}},s1=(i,e,t)=>Z(new xp(i,e,t)),f_=new WeakMap,yp=class extends It{static get type(){return"VelocityNode"}constructor(){super("vec2"),this.projectionMatrix=null,this.updateType=mt.OBJECT,this.updateAfterType=mt.OBJECT,this.previousModelWorldMatrix=Ke(new ot),this.previousProjectionMatrix=Ke(new ot).setGroup(at),this.previousCameraViewMatrix=Ke(new ot)}setProjectionMatrix(e){this.projectionMatrix=e}update({frameId:e,camera:t,object:n}){let s=p_(n);this.previousModelWorldMatrix.value.copy(s);let r=lv(t);r.frameId!==e&&(r.frameId=e,r.previousProjectionMatrix===void 0?(r.previousProjectionMatrix=new ot,r.previousCameraViewMatrix=new ot,r.currentProjectionMatrix=new ot,r.currentCameraViewMatrix=new ot,r.previousProjectionMatrix.copy(this.projectionMatrix||t.projectionMatrix),r.previousCameraViewMatrix.copy(t.matrixWorldInverse)):(r.previousProjectionMatrix.copy(r.currentProjectionMatrix),r.previousCameraViewMatrix.copy(r.currentCameraViewMatrix)),r.currentProjectionMatrix.copy(this.projectionMatrix||t.projectionMatrix),r.currentCameraViewMatrix.copy(t.matrixWorldInverse),this.previousProjectionMatrix.value.copy(r.previousProjectionMatrix),this.previousCameraViewMatrix.value.copy(r.previousCameraViewMatrix))}updateAfter({object:e}){p_(e).copy(e.matrixWorld)}setup(){let e=this.projectionMatrix===null?Rc:Ke(this.projectionMatrix),t=this.previousCameraViewMatrix.mul(this.previousModelWorldMatrix),n=e.mul(Cc).mul(Bt),s=this.previousProjectionMatrix.mul(t).mul(Pu),r=n.xy.div(n.w),o=s.xy.div(s.w);return tt(r,o)}};function lv(i){let e=f_.get(i);return e===void 0&&(e={},f_.set(i,e)),e}function p_(i,e=0){let t=lv(i),n=t[e];return n===void 0&&(t[e]=n=new ot),n}var r1=le(yp),uv=z(([i,e])=>$n(1,i.oneMinus().div(e)).oneMinus()).setLayout({name:"blendBurn",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),hv=z(([i,e])=>$n(i.div(e.oneMinus()),1)).setLayout({name:"blendDodge",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),dv=z(([i,e])=>i.oneMinus().mul(e.oneMinus()).oneMinus()).setLayout({name:"blendScreen",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),fv=z(([i,e])=>zt(i.mul(2).mul(e),i.oneMinus().mul(2).mul(e.oneMinus()).oneMinus(),ju(.5,i))).setLayout({name:"blendOverlay",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),o1=z(([i,e])=>{let t=e.a.add(i.a.mul(e.a.oneMinus()));return Ge(e.rgb.mul(e.a).add(i.rgb.mul(i.a).mul(e.a.oneMinus())).div(t),t)}).setLayout({name:"blendColor",type:"vec4",inputs:[{name:"base",type:"vec4"},{name:"blend",type:"vec4"}]}),a1=(...i)=>(console.warn('THREE.TSL: "burn" has been renamed. Use "blendBurn" instead.'),uv(i)),c1=(...i)=>(console.warn('THREE.TSL: "dodge" has been renamed. Use "blendDodge" instead.'),hv(i)),l1=(...i)=>(console.warn('THREE.TSL: "screen" has been renamed. Use "blendScreen" instead.'),dv(i)),u1=(...i)=>(console.warn('THREE.TSL: "overlay" has been renamed. Use "blendOverlay" instead.'),fv(i)),h1=z(([i])=>mm(i.rgb)),d1=z(([i,e=R(1)])=>e.mix(mm(i.rgb),i.rgb)),f1=z(([i,e=R(1)])=>{let t=Ht(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return zt(i.rgb,n,s)}),p1=z(([i,e=R(1)])=>{let t=V(.57735,.57735,.57735),n=e.cos();return V(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(ks(t,i.rgb).mul(n.oneMinus())))))}),mm=(i,e=V($e.getLuminanceCoefficients(new D)))=>ks(i,e),m1=z(([i,e=V(1),t=V(0),n=V(1),s=R(1),r=V($e.getLuminanceCoefficients(new D,ts))])=>{let o=i.rgb.dot(V(r)),a=on(i.rgb.mul(e).add(t),0).toVar(),c=a.pow(n).toVar();return et(a.r.greaterThan(0),()=>{a.r.assign(c.r)}),et(a.g.greaterThan(0),()=>{a.g.assign(c.g)}),et(a.b.greaterThan(0),()=>{a.b.assign(c.b)}),a.assign(o.add(a.sub(o).mul(s))),Ge(a.rgb,i.a)}),vp=class extends It{static get type(){return"PosterizeNode"}constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){let{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}},g1=Y(vp),_1=new Le,zu=class extends Mi{static get type(){return"PassTextureNode"}constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return e.object.isQuadMesh&&this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}},ku=class extends zu{static get type(){return"PassMultipleTextureNode"}constructor(e,t,n=!1){super(e,null),this.textureName=t,this.previousTexture=n}updateTexture(){this.value=this.previousTexture?this.passNode.getPreviousTexture(this.textureName):this.passNode.getTexture(this.textureName)}setup(e){return this.updateTexture(),super.setup(e)}clone(){return new this.constructor(this.passNode,this.textureName,this.previousTexture)}},Gi=class i extends It{static get type(){return"PassNode"}constructor(e,t,n,s={}){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this.options=s,this._pixelRatio=1,this._width=1,this._height=1;let r=new yi;r.isRenderTargetTexture=!0,r.name="depth";let o=new ns(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii,...s});o.texture.name="output",o.depthTexture=r,this.renderTarget=o,this._textures={output:o.texture,depth:r},this._textureNodes={},this._linearDepthNodes={},this._viewZNodes={},this._previousTextures={},this._previousTextureNodes={},this._cameraNear=Ke(0),this._cameraFar=Ke(0),this._mrt=null,this.isPassNode=!0,this.updateBeforeType=mt.FRAME}setMRT(e){return this._mrt=e,this}getMRT(){return this._mrt}isGlobal(){return!0}getTexture(e){let t=this._textures[e];return t===void 0&&(t=this.renderTarget.texture.clone(),t.name=e,this._textures[e]=t,this.renderTarget.textures.push(t)),t}getPreviousTexture(e){let t=this._previousTextures[e];return t===void 0&&(t=this.getTexture(e).clone(),this._previousTextures[e]=t),t}toggleTexture(e){let t=this._previousTextures[e];if(t!==void 0){let n=this._textures[e],s=this.renderTarget.textures.indexOf(n);this.renderTarget.textures[s]=t,this._textures[e]=t,this._previousTextures[e]=n,this._textureNodes[e].updateTexture(),this._previousTextureNodes[e].updateTexture()}}getTextureNode(e="output"){let t=this._textureNodes[e];return t===void 0&&(t=Z(new ku(this,e)),t.updateTexture(),this._textureNodes[e]=t),t}getPreviousTextureNode(e="output"){let t=this._previousTextureNodes[e];return t===void 0&&(this._textureNodes[e]===void 0&&this.getTextureNode(e),t=Z(new ku(this,e,!0)),t.updateTexture(),this._previousTextureNodes[e]=t),t}getViewZNode(e="depth"){let t=this._viewZNodes[e];if(t===void 0){let n=this._cameraNear,s=this._cameraFar;this._viewZNodes[e]=t=dm(this.getTextureNode(e),n,s)}return t}getLinearDepthNode(e="depth"){let t=this._linearDepthNodes[e];if(t===void 0){let n=this._cameraNear,s=this._cameraFar,r=this.getViewZNode(e);this._linearDepthNodes[e]=t=Do(r,n,s)}return t}setup({renderer:e}){return this.renderTarget.samples=this.options.samples===void 0?e.samples:this.options.samples,e.backend.isWebGLBackend===!0&&(this.renderTarget.samples=0),this.renderTarget.texture.type=e.getColorBufferType(),this.scope===i.COLOR?this.getTextureNode():this.getLinearDepthNode()}updateBefore(e){let{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();let r=t.getSize(_1);this.setSize(r.width,r.height);let o=t.getRenderTarget(),a=t.getMRT();this._cameraNear.value=s.near,this._cameraFar.value=s.far;for(let c in this._previousTextures)this.toggleTexture(c);t.setRenderTarget(this.renderTarget),t.setMRT(this._mrt),t.render(n,s),t.setRenderTarget(o),t.setMRT(a)}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}};Gi.COLOR="color";Gi.DEPTH="depth";var x1=(i,e,t)=>Z(new Gi(Gi.COLOR,i,e,t)),y1=(i,e)=>Z(new zu(i,e)),v1=(i,e,t)=>Z(new Gi(Gi.DEPTH,i,e,t)),Tp=class extends Gi{static get type(){return"ToonOutlinePassNode"}constructor(e,t,n,s,r){super(Gi.COLOR,e,t),this.colorNode=n,this.thicknessNode=s,this.alphaNode=r,this._materialCache=new WeakMap}updateBefore(e){let{renderer:t}=e,n=t.getRenderObjectFunction();t.setRenderObjectFunction((s,r,o,a,c,l,u,h)=>{if((c.isMeshToonMaterial||c.isMeshToonNodeMaterial)&&c.wireframe===!1){let d=this._getOutlineMaterial(c);t.renderObject(s,r,o,a,d,l,u,h)}t.renderObject(s,r,o,a,c,l,u,h)}),super.updateBefore(e),t.setRenderObjectFunction(n)}_createMaterial(){let e=new Er;e.isMeshToonOutlineMaterial=!0,e.name="Toon_Outline",e.side=sn;let t=In.negate(),n=Rc.mul(Cc),s=R(1),r=n.mul(Ge(Bt,1)),o=n.mul(Ge(Bt.add(t),1)),a=wr(r.sub(o));return e.vertexNode=r.add(a.mul(this.thicknessNode).mul(r.w).mul(s)),e.colorNode=Ge(this.colorNode,this.alphaNode),e}_getOutlineMaterial(e){let t=this._materialCache.get(e);return t===void 0&&(t=this._createMaterial(),this._materialCache.set(e,t)),t}},T1=(i,e,t=new Be(0,0,0),n=.003,s=1)=>Z(new Tp(i,e,Z(t),Z(n),Z(s))),S1=z(([i,e])=>i.mul(e).clamp()).setLayout({name:"linearToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),b1=z(([i,e])=>(i=i.mul(e),i.div(i.add(1)).clamp())).setLayout({name:"reinhardToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),M1=z(([i,e])=>{i=i.mul(e),i=i.sub(.004).max(0);let t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}).setLayout({name:"cineonToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),A1=z(([i])=>{let e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),E1=z(([i,e])=>{let t=ai(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=ai(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=A1(i),i=n.mul(i),i.clamp()}).setLayout({name:"acesFilmicToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),w1=ai(V(1.6605,-.1246,-.0182),V(-.5876,1.1329,-.1006),V(-.0728,-.0083,1.1187)),R1=ai(V(.6274,.0691,.0164),V(.3293,.9195,.088),V(.0433,.0113,.8956)),C1=z(([i])=>{let e=V(i).toVar(),t=V(e.mul(e)).toVar(),n=V(t.mul(t)).toVar();return R(15.5).mul(n.mul(t)).sub(He(40.14,n.mul(e))).add(He(31.96,n).sub(He(6.868,t.mul(e))).add(He(.4298,t).add(He(.1191,e).sub(.00232))))}),N1=z(([i,e])=>{let t=V(i).toVar(),n=ai(V(.856627153315983,.137318972929847,.11189821299995),V(.0951212405381588,.761241990602591,.0767994186031903),V(.0482516061458583,.101439036467562,.811302368396859)),s=ai(V(1.1271005818144368,-.1413297634984383,-.14132976349843826),V(-.11060664309660323,1.157823702216272,-.11060664309660294),V(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=R(-12.47393),o=R(4.026069);return t.mulAssign(e),t.assign(R1.mul(t)),t.assign(n.mul(t)),t.assign(on(t,1e-10)),t.assign(ls(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(fs(t,0,1)),t.assign(C1(t)),t.assign(s.mul(t)),t.assign(bi(on(V(0),t),V(2.2))),t.assign(w1.mul(t)),t.assign(fs(t,0,1)),t}).setLayout({name:"agxToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),P1=z(([i,e])=>{let t=R(.76),n=R(.15);i=i.mul(e);let s=$n(i.r,$n(i.g,i.b)),r=Pn(s.lessThan(.08),s.sub(He(6.25,s.mul(s))),.04);i.subAssign(r);let o=on(i.r,on(i.g,i.b));et(o.lessThan(t),()=>i);let a=tt(1,t),c=tt(1,a.mul(a).div(o.add(a.sub(t))));i.mulAssign(c.div(o));let l=tt(1,ds(1,n.mul(o.sub(c)).add(1)));return zt(i,V(c),l)}).setLayout({name:"neutralToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),Vt=class extends Ce{static get type(){return"CodeNode"}constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.includes=t,this.language=n}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){let t=this.getIncludes(e);for(let s of t)s.build(e);let n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}},nh=Y(Vt),I1=(i,e)=>nh(i,e,"js"),D1=(i,e)=>nh(i,e,"wgsl"),L1=(i,e)=>nh(i,e,"glsl"),Sp=class extends Vt{static get type(){return"FunctionNode"}constructor(e="",t=[],n=""){super(e,t,n)}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){let t=e.getDataFromNode(this),n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);let n=this.getNodeFunction(e),s=n.name,r=n.type,o=e.getCodeFromNode(this,r);s!==""&&(o.name=s);let a=e.getPropertyName(o),c=this.getNodeFunction(e).getCode(a);return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}},pv=(i,e=[],t="")=>{for(let r=0;r<e.length;r++){let o=e[r];typeof o=="function"&&(e[r]=o.functionNode)}let n=Z(new Sp(i,e,t)),s=(...r)=>n.call(...r);return s.functionNode=n,s},F1=(i,e)=>pv(i,e,"glsl"),U1=(i,e)=>pv(i,e,"wgsl"),bp=class extends Ce{static get type(){return"ScriptableValueNode"}constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outputType=null,this.events=new Bn,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){let e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:R()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=T_(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=S_(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}},_u=Y(bp),Hu=class extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){let s=t(...n);return this.set(e,s),s}}},Mp=class{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){let t=this.parameters[e];return t?t.getValue():null}},xu=new Hu,Ap=class extends Ce{static get type(){return"ScriptableNode"}constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new Hu,this._output=_u(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(let t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(let t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){let n=this._outputs;return n[e]===void 0?n[e]=_u(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){let n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=_u(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(let e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){let s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){let s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;let e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new Mp(this),s=xu.get("THREE"),r=xu.get("TSL"),o=this.getMethod(),a=[n,this._local,xu,e,t,s,r];this._object=o(...a);let c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(let l of c.elements){let u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(let t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){let e=this.getDefaultOutput().value;return e&&e.isNode?e:R()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;let e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=s+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}getCacheKey(e){let t=[yE(this.source),this.getDefaultOutputNode().getCacheKey(e)];for(let n in this.parameters)t.push(this.parameters[n].getCacheKey(e));return g_(t)}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}},B1=Y(Ap);function mv(i){let e,t=i.context.getViewZ;return t!==void 0&&(e=t(this)),(e||tn.z).negate()}var gv=z(([i,e],t)=>{let n=mv(t);return Mr(i,e,n)}),_v=z(([i],e)=>{let t=mv(e);return i.mul(i,t,t).negate().exp().oneMinus()}),gm=z(([i,e])=>Ge(e.toFloat().mix(Sc.rgb,i.toVec3()),Sc.a));function O1(i,e,t){return console.warn('THREE.TSL: "rangeFog( color, near, far )" is deprecated. Use "fog( color, rangeFogFactor( near, far ) )" instead.'),gm(i,gv(e,t))}function V1(i,e){return console.warn('THREE.TSL: "densityFog( color, density )" is deprecated. Use "fog( color, densityFogFactor( density ) )" instead.'),gm(i,_v(e))}var mr=null,gr=null,Ep=class extends Ce{static get type(){return"RangeNode"}constructor(e=R(),t=R()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){let t=e.getTypeLength(Vs(this.minNode.value)),n=e.getTypeLength(Vs(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.count>1?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){let t=e.object,n=null;if(t.count>1){let s=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(Vs(s)),a=e.getTypeLength(Vs(r));mr=mr||new pt,gr=gr||new pt,mr.setScalar(0),gr.setScalar(0),o===1?mr.setScalar(s):s.isColor?mr.set(s.r,s.g,s.b,1):mr.set(s.x,s.y,s.z||0,s.w||0),a===1?gr.setScalar(r):r.isColor?gr.set(r.r,r.g,r.b,1):gr.set(r.x,r.y,r.z||0,r.w||0);let c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){let m=d%c,_=mr.getComponent(m),x=gr.getComponent(m);u[d]=vo.lerp(_,x,Math.random())}let h=this.getNodeType(e);if(t.count<=4096)n=wc(u,"vec4",t.count).element(Lc).convert(h);else{let d=new rr(u,4);e.geometry.setAttribute("__range"+this.id,d),n=wu(d).convert(h)}}else n=R(0);return n}},G1=Y(Ep),wp=class extends Ce{static get type(){return"ComputeBuiltinNode"}constructor(e,t){super(t),this._builtinName=e}getHash(e){return this.getBuiltinName(e)}getNodeType(){return this.nodeType}setBuiltinName(e){return this._builtinName=e,this}getBuiltinName(){return this._builtinName}hasBuiltin(e){e.hasBuiltin(this._builtinName)}generate(e,t){let n=this.getBuiltinName(e),s=this.getNodeType(e);return e.shaderStage==="compute"?e.format(n,s,t):(console.warn(`ComputeBuiltinNode: Compute built-in value ${n} can not be accessed in the ${e.shaderStage} stage`),e.generateConst(s))}serialize(e){super.serialize(e),e.global=this.global,e._builtinName=this._builtinName}deserialize(e){super.deserialize(e),this.global=e.global,this._builtinName=e._builtinName}},Uc=(i,e)=>Z(new wp(i,e)),z1=Uc("numWorkgroups","uvec3"),k1=Uc("workgroupId","uvec3"),H1=Uc("globalId","uvec3"),W1=Uc("localId","uvec3"),q1=Uc("subgroupSize","uint"),Rp=class extends Ce{constructor(e){super(),this.scope=e}generate(e){let{scope:t}=this,{renderer:n}=e;n.backend.isWebGLBackend===!0?e.addFlowCode(`	// ${t}Barrier 
`):e.addLineFlowCode(`${t}Barrier()`,this)}},_m=Y(Rp),X1=()=>_m("workgroup").append(),$1=()=>_m("storage").append(),Y1=()=>_m("texture").append(),Cp=class extends us{constructor(e,t){super(e,t),this.isWorkgroupInfoElementNode=!0}generate(e,t){let n,s=e.context.assign;if(n=super.generate(e),s!==!0){let r=this.getNodeType(e);n=e.format(n,r,t)}return n}},Np=class extends Ce{constructor(e,t,n=0){super(t),this.bufferType=t,this.bufferCount=n,this.isWorkgroupInfoNode=!0,this.elementType=t,this.scope=e}label(e){return this.name=e,this}setScope(e){return this.scope=e,this}getElementType(){return this.elementType}getInputType(){return`${this.scope}Array`}element(e){return Z(new Cp(this,e))}generate(e){return e.getScopedArray(this.name||`${this.scope}Array_${this.id}`,this.scope.toLowerCase(),this.bufferType,this.bufferCount)}},K1=(i,e)=>Z(new Np("Workgroup",i,e)),Wt=class extends It{static get type(){return"AtomicFunctionNode"}constructor(e,t,n,s=null){super("uint"),this.method=e,this.pointerNode=t,this.valueNode=n,this.storeNode=s}getInputType(e){return this.pointerNode.getNodeType(e)}getNodeType(e){return this.getInputType(e)}generate(e){let t=this.method,n=this.getNodeType(e),s=this.getInputType(e),r=this.pointerNode,o=this.valueNode,a=[];a.push(`&${r.build(e,s)}`),o!==null&&a.push(o.build(e,s));let c=`${e.getMethod(t,n)}( ${a.join(", ")} )`;if(this.storeNode!==null){let l=this.storeNode.build(e,s);e.addLineFlowCode(`${l} = ${c}`,this)}else e.addLineFlowCode(c,this)}};Wt.ATOMIC_LOAD="atomicLoad";Wt.ATOMIC_STORE="atomicStore";Wt.ATOMIC_ADD="atomicAdd";Wt.ATOMIC_SUB="atomicSub";Wt.ATOMIC_MAX="atomicMax";Wt.ATOMIC_MIN="atomicMin";Wt.ATOMIC_AND="atomicAnd";Wt.ATOMIC_OR="atomicOr";Wt.ATOMIC_XOR="atomicXor";var Z1=Y(Wt),ki=(i,e,t,n=null)=>{let s=Z1(i,e,t,n);return s.append(),s},j1=(i,e=null)=>ki(Wt.ATOMIC_LOAD,i,null,e),Q1=(i,e,t=null)=>ki(Wt.ATOMIC_STORE,i,e,t),J1=(i,e,t=null)=>ki(Wt.ATOMIC_ADD,i,e,t),eN=(i,e,t=null)=>ki(Wt.ATOMIC_SUB,i,e,t),tN=(i,e,t=null)=>ki(Wt.ATOMIC_MAX,i,e,t),nN=(i,e,t=null)=>ki(Wt.ATOMIC_MIN,i,e,t),iN=(i,e,t=null)=>ki(Wt.ATOMIC_AND,i,e,t),sN=(i,e,t=null)=>ki(Wt.ATOMIC_OR,i,e,t),rN=(i,e,t=null)=>ki(Wt.ATOMIC_XOR,i,e,t),fu;function Bc(i){fu=fu||new WeakMap;let e=fu.get(i);return e===void 0&&fu.set(i,e={}),e}function xm(i){let e=Bc(i);return e.shadowMatrix||(e.shadowMatrix=Ke("mat4").setGroup(at).onRenderUpdate(()=>(i.castShadow!==!0&&i.shadow.updateMatrices(i),i.shadow.matrix)))}function oN(i){let e=Bc(i);if(e.projectionUV===void 0){let t=xm(i).mul(Sr);e.projectionUV=t.xyz.div(t.w)}return e.projectionUV}function xv(i){let e=Bc(i);return e.position||(e.position=Ke(new D).setGroup(at).onRenderUpdate((t,n)=>n.value.setFromMatrixPosition(i.matrixWorld)))}function yv(i){let e=Bc(i);return e.targetPosition||(e.targetPosition=Ke(new D).setGroup(at).onRenderUpdate((t,n)=>n.value.setFromMatrixPosition(i.target.matrixWorld)))}function aN(i){let e=Bc(i);return e.viewPosition||(e.viewPosition=Ke(new D).setGroup(at).onRenderUpdate(({camera:t},n)=>{n.value=n.value||new D,n.value.setFromMatrixPosition(i.matrixWorld),n.value.applyMatrix4(t.matrixWorldInverse)}))}var cN=i=>li.transformDirection(xv(i).sub(yv(i))),lN=i=>i.sort((e,t)=>e.id-t.id),uN=(i,e)=>{for(let t of e)if(t.isAnalyticLightNode&&t.light.id===i)return t;return null},qd=new WeakMap,Pp=class extends Ce{static get type(){return"LightsNode"}constructor(){super("vec3"),this.totalDiffuseNode=V().toVar("totalDiffuse"),this.totalSpecularNode=V().toVar("totalSpecular"),this.outgoingLightNode=V().toVar("outgoingLight"),this._lights=[],this._lightNodes=null,this._lightNodesHash=null,this.global=!0}customCacheKey(){let e=[],t=this._lights;for(let n=0;n<t.length;n++)e.push(t[n].id);return g_(e)}getHash(e){if(this._lightNodesHash===null){this._lightNodes===null&&this.setupLightsNode(e);let t=[];for(let n of this._lightNodes)t.push(n.getSelf().getHash());this._lightNodesHash="lights-"+t.join(",")}return this._lightNodesHash}analyze(e){let t=e.getDataFromNode(this);for(let n of t.nodes)n.build(e)}setupLightsNode(e){let t=[],n=this._lightNodes,s=lN(this._lights),r=e.renderer.library;for(let o of s)if(o.isNode)t.push(Z(o));else{let a=null;if(n!==null&&(a=uN(o.id,n)),a===null){let c=r.getLightNodeClass(o.constructor);if(c===null){console.warn(`LightsNode.setupNodeLights: Light node not found for ${o.constructor.name}`);continue}let l=null;qd.has(o)?l=qd.get(o):(l=Z(new c(o)),qd.set(o,l)),t.push(l)}}this._lightNodes=t}setupLights(e,t){for(let n of t)n.build(e)}setup(e){this._lightNodes===null&&this.setupLightsNode(e);let t=e.context,n=t.lightingModel,s=this.outgoingLightNode;if(n){let{_lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=s;let c=e.addStack(),l=e.getDataFromNode(this);l.nodes=c.nodes,n.start(t,c,e),this.setupLights(e,r),n.indirect(t,c,e);let{backdrop:u,backdropAlpha:h}=t,{directDiffuse:d,directSpecular:m,indirectDiffuse:_,indirectSpecular:x}=t.reflectedLight,g=d.add(_);u!==null&&(h!==null?g=V(h.mix(g,u)):g=V(u),t.material.transparent=!0),o.assign(g),a.assign(m.add(x)),s.assign(o.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}setLights(e){return this._lights=e,this._lightNodes=null,this._lightNodesHash=null,this}getLights(){return this._lights}get hasLights(){return this._lights.length>0}},hN=(i=[])=>Z(new Pp).setLights(i),Ip=class extends Ce{static get type(){return"ShadowBaseNode"}constructor(e){super(),this.light=e,this.updateBeforeType=mt.RENDER,this.isShadowBaseNode=!0}setupShadowPosition({material:e}){ym.assign(e.shadowPositionNode||Sr)}dispose(){this.updateBeforeType=mt.NONE}},ym=V().toVar("shadowPositionWorld");function dN(i,e={}){return e.toneMapping=i.toneMapping,e.toneMappingExposure=i.toneMappingExposure,e.outputColorSpace=i.outputColorSpace,e.renderTarget=i.getRenderTarget(),e.activeCubeFace=i.getActiveCubeFace(),e.activeMipmapLevel=i.getActiveMipmapLevel(),e.renderObjectFunction=i.getRenderObjectFunction(),e.pixelRatio=i.getPixelRatio(),e.mrt=i.getMRT(),e.clearColor=i.getClearColor(e.clearColor||new Be),e.clearAlpha=i.getClearAlpha(),e.autoClear=i.autoClear,e.scissorTest=i.getScissorTest(),e}function fN(i,e){return e=dN(i,e),i.setMRT(null),i.setRenderObjectFunction(null),i.setClearColor(0,1),i.autoClear=!0,e}function pN(i,e){i.toneMapping=e.toneMapping,i.toneMappingExposure=e.toneMappingExposure,i.outputColorSpace=e.outputColorSpace,i.setRenderTarget(e.renderTarget,e.activeCubeFace,e.activeMipmapLevel),i.setRenderObjectFunction(e.renderObjectFunction),i.setPixelRatio(e.pixelRatio),i.setMRT(e.mrt),i.setClearColor(e.clearColor,e.clearAlpha),i.autoClear=e.autoClear,i.setScissorTest(e.scissorTest)}function mN(i,e={}){return e.background=i.background,e.backgroundNode=i.backgroundNode,e.overrideMaterial=i.overrideMaterial,e}function gN(i,e){return e=mN(i,e),i.background=null,i.backgroundNode=null,i.overrideMaterial=null,e}function _N(i,e){i.background=e.background,i.backgroundNode=e.backgroundNode,i.overrideMaterial=e.overrideMaterial}function xN(i,e,t){return t=fN(i,t),t=gN(e,t),t}function yN(i,e,t){pN(i,t),_N(e,t)}var m_=new WeakMap,vN=z(([i,e,t])=>{let n=Sr.sub(i).length();return n=n.sub(e).div(t.sub(e)),n=n.saturate(),n}),TN=i=>{let e=i.shadow.camera,t=Gt("near","float",e).setGroup(at),n=Gt("far","float",e).setGroup(at),s=cy(i);return vN(s,t,n)},SN=i=>{let e=m_.get(i);if(e===void 0){let t=i.isPointLight?TN(i):null;e=new Er,e.colorNode=Ge(0,0,0,1),e.depthNode=t,e.isShadowPassMaterial=!0,e.name="ShadowMaterial",e.fog=!1,m_.set(i,e)}return e},vv=z(({depthTexture:i,shadowCoord:e})=>An(i,e.xy).compare(e.z)),Tv=z(({depthTexture:i,shadowCoord:e,shadow:t})=>{let n=(x,g)=>An(i,x).compare(g),s=Gt("mapSize","vec2",t).setGroup(at),r=Gt("radius","float",t).setGroup(at),o=oe(1).div(s),a=o.x.negate().mul(r),c=o.y.negate().mul(r),l=o.x.mul(r),u=o.y.mul(r),h=a.div(2),d=c.div(2),m=l.div(2),_=u.div(2);return Ht(n(e.xy.add(oe(a,c)),e.z),n(e.xy.add(oe(0,c)),e.z),n(e.xy.add(oe(l,c)),e.z),n(e.xy.add(oe(h,d)),e.z),n(e.xy.add(oe(0,d)),e.z),n(e.xy.add(oe(m,d)),e.z),n(e.xy.add(oe(a,0)),e.z),n(e.xy.add(oe(h,0)),e.z),n(e.xy,e.z),n(e.xy.add(oe(m,0)),e.z),n(e.xy.add(oe(l,0)),e.z),n(e.xy.add(oe(h,_)),e.z),n(e.xy.add(oe(0,_)),e.z),n(e.xy.add(oe(m,_)),e.z),n(e.xy.add(oe(a,u)),e.z),n(e.xy.add(oe(0,u)),e.z),n(e.xy.add(oe(l,u)),e.z)).mul(1/17)}),Sv=z(({depthTexture:i,shadowCoord:e,shadow:t})=>{let n=(u,h)=>An(i,u).compare(h),s=Gt("mapSize","vec2",t).setGroup(at),r=oe(1).div(s),o=r.x,a=r.y,c=e.xy,l=gs(c.mul(s).add(.5));return c.subAssign(l.mul(r)),Ht(n(c,e.z),n(c.add(oe(o,0)),e.z),n(c.add(oe(0,a)),e.z),n(c.add(r),e.z),zt(n(c.add(oe(o.negate(),0)),e.z),n(c.add(oe(o.mul(2),0)),e.z),l.x),zt(n(c.add(oe(o.negate(),a)),e.z),n(c.add(oe(o.mul(2),a)),e.z),l.x),zt(n(c.add(oe(0,a.negate())),e.z),n(c.add(oe(0,a.mul(2))),e.z),l.y),zt(n(c.add(oe(o,a.negate())),e.z),n(c.add(oe(o,a.mul(2))),e.z),l.y),zt(zt(n(c.add(oe(o.negate(),a.negate())),e.z),n(c.add(oe(o.mul(2),a.negate())),e.z),l.x),zt(n(c.add(oe(o.negate(),a.mul(2))),e.z),n(c.add(oe(o.mul(2),a.mul(2))),e.z),l.x),l.y)).mul(1/9)}),bv=z(({depthTexture:i,shadowCoord:e})=>{let t=R(1).toVar(),n=An(i).sample(e.xy).rg,s=ju(e.z,n.x);return et(s.notEqual(R(1)),()=>{let r=e.z.sub(n.x),o=on(0,n.y.mul(n.y)),a=o.div(o.add(r.mul(r)));a=fs(tt(a,.3).div(.95-.3)),t.assign(fs(on(s,a)))}),t}),bN=z(({samples:i,radius:e,size:t,shadowPass:n})=>{let s=R(0).toVar(),r=R(0).toVar(),o=i.lessThanEqual(R(1)).select(R(0),R(2).div(i.sub(1))),a=i.lessThanEqual(R(1)).select(R(0),R(-1));Tt({start:C(0),end:C(i),type:"int",condition:"<"},({i:l})=>{let u=a.add(R(l).mul(o)),h=n.sample(Ht(Fc.xy,oe(0,u).mul(e)).div(t)).x;s.addAssign(h),r.addAssign(h.mul(h))}),s.divAssign(i),r.divAssign(i);let c=zi(r.sub(s.mul(s)));return oe(s,c)}),MN=z(({samples:i,radius:e,size:t,shadowPass:n})=>{let s=R(0).toVar(),r=R(0).toVar(),o=i.lessThanEqual(R(1)).select(R(0),R(2).div(i.sub(1))),a=i.lessThanEqual(R(1)).select(R(0),R(-1));Tt({start:C(0),end:C(i),type:"int",condition:"<"},({i:l})=>{let u=a.add(R(l).mul(o)),h=n.sample(Ht(Fc.xy,oe(u,0).mul(e)).div(t));s.addAssign(h.x),r.addAssign(Ht(h.y.mul(h.y),h.x.mul(h.x)))}),s.divAssign(i),r.divAssign(i);let c=zi(r.sub(s.mul(s)));return oe(s,c)}),AN=[vv,Tv,Sv,bv],Xd,pu=new Gu,Dp=class extends Ip{static get type(){return"ShadowNode"}constructor(e,t=null){super(e),this.shadow=t||e.shadow,this.shadowMap=null,this.vsmShadowMapVertical=null,this.vsmShadowMapHorizontal=null,this.vsmMaterialVertical=null,this.vsmMaterialHorizontal=null,this._node=null,this.isShadowNode=!0}setupShadowFilter(e,{filterFn:t,depthTexture:n,shadowCoord:s,shadow:r}){let o=s.x.greaterThanEqual(0).and(s.x.lessThanEqual(1)).and(s.y.greaterThanEqual(0)).and(s.y.lessThanEqual(1)).and(s.z.lessThanEqual(1)),a=t({depthTexture:n,shadowCoord:s,shadow:r});return o.select(a,R(1))}setupShadowCoord(e,t){let{shadow:n}=this,{renderer:s}=e,r=Gt("bias","float",n).setGroup(at),o=t,a;if(n.camera.isOrthographicCamera||s.logarithmicDepthBuffer!==!0)o=o.xyz.div(o.w),a=o.z,s.coordinateSystem===_i&&(a=a.mul(2).sub(1));else{let c=o.w;o=o.xy.div(c);let l=Gt("near","float",n.camera).setGroup(at),u=Gt("far","float",n.camera).setGroup(at);a=fm(c.negate(),l,u)}return o=V(o.x,o.y.oneMinus(),a.add(r)),o}getShadowFilterFn(e){return AN[e]}setupShadow(e){let{renderer:t}=e,{light:n,shadow:s}=this,r=t.shadowMap.type,o=new yi(s.mapSize.width,s.mapSize.height);o.compareFunction=rc;let a=e.createRenderTarget(s.mapSize.width,s.mapSize.height);if(a.depthTexture=o,s.camera.updateProjectionMatrix(),r===Mn){o.compareFunction=null,this.vsmShadowMapVertical=e.createRenderTarget(s.mapSize.width,s.mapSize.height,{format:fo,type:ii}),this.vsmShadowMapHorizontal=e.createRenderTarget(s.mapSize.width,s.mapSize.height,{format:fo,type:ii});let p=An(o),A=An(this.vsmShadowMapVertical.texture),b=Gt("blurSamples","float",s).setGroup(at),S=Gt("radius","float",s).setGroup(at),I=Gt("mapSize","vec2",s).setGroup(at),w=this.vsmMaterialVertical||(this.vsmMaterialVertical=new Er);w.fragmentNode=bN({samples:b,radius:S,size:I,shadowPass:p}).context(e.getSharedContext()),w.name="VSMVertical",w=this.vsmMaterialHorizontal||(this.vsmMaterialHorizontal=new Er),w.fragmentNode=MN({samples:b,radius:S,size:I,shadowPass:A}).context(e.getSharedContext()),w.name="VSMHorizontal"}let c=Gt("intensity","float",s).setGroup(at),l=Gt("normalBias","float",s).setGroup(at),u=xm(n).mul(ym.add(my.mul(l))),h=this.setupShadowCoord(e,u),d=s.filterNode||this.getShadowFilterFn(t.shadowMap.type)||null;if(d===null)throw new Error("THREE.WebGPURenderer: Shadow map type not supported yet.");let m=r===Mn?this.vsmShadowMapHorizontal.texture:o,_=this.setupShadowFilter(e,{filterFn:d,shadowTexture:a.texture,depthTexture:m,shadowCoord:h,shadow:s}),x=An(a.texture,h),g=zt(1,_.rgb.mix(x,1),c.mul(x.a)).toVar();return this.shadowMap=a,this.shadow.map=a,g}setup(e){if(e.renderer.shadowMap.enabled!==!1)return z(()=>{let t=this._node;return this.setupShadowPosition(e),t===null&&(this._node=t=this.setupShadow(e)),e.material.shadowNode&&console.warn('THREE.NodeMaterial: ".shadowNode" is deprecated. Use ".castShadowNode" instead.'),e.material.receivedShadowNode&&(t=e.material.receivedShadowNode(t)),t})()}renderShadow(e){let{shadow:t,shadowMap:n,light:s}=this,{renderer:r,scene:o}=e;t.updateMatrices(s),n.setSize(t.mapSize.width,t.mapSize.height),r.render(o,t.camera)}updateShadow(e){let{shadowMap:t,light:n,shadow:s}=this,{renderer:r,scene:o,camera:a}=e,c=r.shadowMap.type,l=t.depthTexture.version;this._depthVersionCached=l,s.camera.layers.mask=a.layers.mask;let u=r.getRenderObjectFunction(),h=r.getMRT(),d=h?h.has("velocity"):!1;Xd=xN(r,o,Xd),o.overrideMaterial=SN(n),r.setRenderObjectFunction((m,_,x,g,p,A,...b)=>{(m.castShadow===!0||m.receiveShadow&&c===Mn)&&(d&&(v_(m).useVelocity=!0),m.onBeforeShadow(r,m,a,s.camera,g,_.overrideMaterial,A),r.renderObject(m,_,x,g,p,A,...b),m.onAfterShadow(r,m,a,s.camera,g,_.overrideMaterial,A))}),r.setRenderTarget(t),this.renderShadow(e),r.setRenderObjectFunction(u),n.isPointLight!==!0&&c===Mn&&this.vsmPass(r),yN(r,o,Xd)}vsmPass(e){let{shadow:t}=this;this.vsmShadowMapVertical.setSize(t.mapSize.width,t.mapSize.height),this.vsmShadowMapHorizontal.setSize(t.mapSize.width,t.mapSize.height),e.setRenderTarget(this.vsmShadowMapVertical),pu.material=this.vsmMaterialVertical,pu.render(e),e.setRenderTarget(this.vsmShadowMapHorizontal),pu.material=this.vsmMaterialHorizontal,pu.render(e)}dispose(){this.shadowMap.dispose(),this.shadowMap=null,this.vsmShadowMapVertical!==null&&(this.vsmShadowMapVertical.dispose(),this.vsmShadowMapVertical=null,this.vsmMaterialVertical.dispose(),this.vsmMaterialVertical=null),this.vsmShadowMapHorizontal!==null&&(this.vsmShadowMapHorizontal.dispose(),this.vsmShadowMapHorizontal=null,this.vsmMaterialHorizontal.dispose(),this.vsmMaterialHorizontal=null),super.dispose()}updateBefore(e){let{shadow:t}=this;(t.needsUpdate||t.autoUpdate)&&(this.updateShadow(e),this.shadowMap.depthTexture.version===this._depthVersionCached&&(t.needsUpdate=!1))}},EN=(i,e)=>Z(new Dp(i,e));var Mv=z(i=>{let{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).select(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});var wN=z(({color:i,lightViewPosition:e,cutoffDistance:t,decayExponent:n},s)=>{let r=s.context.lightingModel,o=e.sub(tn),a=o.normalize(),c=o.length(),l=Mv({lightDistance:c,cutoffDistance:t,decayExponent:n}),u=i.mul(l),h=s.context.reflectedLight;r.direct({lightDirection:a,lightColor:u,reflectedLight:h},s.stack,s)});var RN=z(([i=Ct()])=>{let e=i.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()}),CN=z(([i=Ct()],{renderer:e,material:t})=>{let n=R(1).toVar(),s=Qp(i.mul(2).sub(1));if(t.alphaToCoverage&&e.samples>1){let r=R(s.fwidth()).toVar();n.assign(Mr(r.oneMinus(),r.add(1),s).oneMinus())}else s.greaterThan(1).discard();return n}),gc=z(([i,e,t])=>{let n=R(t).toVar(),s=R(e).toVar(),r=hs(i).toVar();return Pn(r,s,n)}).setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]}),Wu=z(([i,e])=>{let t=hs(e).toVar(),n=R(i).toVar();return Pn(t,n.negate(),n)}).setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]}),kt=z(([i])=>{let e=R(i).toVar();return C(Ui(e))}).setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]}),Rt=z(([i,e])=>{let t=R(i).toVar();return e.assign(kt(t)),t.sub(R(e))}),NN=z(([i,e,t,n,s,r])=>{let o=R(r).toVar(),a=R(s).toVar(),c=R(n).toVar(),l=R(t).toVar(),u=R(e).toVar(),h=R(i).toVar(),d=R(tt(1,a)).toVar();return tt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}).setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]}),PN=z(([i,e,t,n,s,r])=>{let o=R(r).toVar(),a=R(s).toVar(),c=V(n).toVar(),l=V(t).toVar(),u=V(e).toVar(),h=V(i).toVar(),d=R(tt(1,a)).toVar();return tt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}).setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]}),Av=dn([NN,PN]),IN=z(([i,e,t,n,s,r,o,a,c,l,u])=>{let h=R(u).toVar(),d=R(l).toVar(),m=R(c).toVar(),_=R(a).toVar(),x=R(o).toVar(),g=R(r).toVar(),p=R(s).toVar(),A=R(n).toVar(),b=R(t).toVar(),S=R(e).toVar(),I=R(i).toVar(),w=R(tt(1,m)).toVar(),N=R(tt(1,d)).toVar();return R(tt(1,h)).toVar().mul(N.mul(I.mul(w).add(S.mul(m))).add(d.mul(b.mul(w).add(A.mul(m))))).add(h.mul(N.mul(p.mul(w).add(g.mul(m))).add(d.mul(x.mul(w).add(_.mul(m))))))}).setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]}),DN=z(([i,e,t,n,s,r,o,a,c,l,u])=>{let h=R(u).toVar(),d=R(l).toVar(),m=R(c).toVar(),_=V(a).toVar(),x=V(o).toVar(),g=V(r).toVar(),p=V(s).toVar(),A=V(n).toVar(),b=V(t).toVar(),S=V(e).toVar(),I=V(i).toVar(),w=R(tt(1,m)).toVar(),N=R(tt(1,d)).toVar();return R(tt(1,h)).toVar().mul(N.mul(I.mul(w).add(S.mul(m))).add(d.mul(b.mul(w).add(A.mul(m))))).add(h.mul(N.mul(p.mul(w).add(g.mul(m))).add(d.mul(x.mul(w).add(_.mul(m))))))}).setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]}),Ev=dn([IN,DN]),LN=z(([i,e,t])=>{let n=R(t).toVar(),s=R(e).toVar(),r=fe(i).toVar(),o=fe(r.bitAnd(fe(7))).toVar(),a=R(gc(o.lessThan(fe(4)),s,n)).toVar(),c=R(He(2,gc(o.lessThan(fe(4)),n,s))).toVar();return Wu(a,hs(o.bitAnd(fe(1)))).add(Wu(c,hs(o.bitAnd(fe(2)))))}).setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]}),FN=z(([i,e,t,n])=>{let s=R(n).toVar(),r=R(t).toVar(),o=R(e).toVar(),a=fe(i).toVar(),c=fe(a.bitAnd(fe(15))).toVar(),l=R(gc(c.lessThan(fe(8)),o,r)).toVar(),u=R(gc(c.lessThan(fe(4)),r,gc(c.equal(fe(12)).or(c.equal(fe(14))),o,s))).toVar();return Wu(l,hs(c.bitAnd(fe(1)))).add(Wu(u,hs(c.bitAnd(fe(2)))))}).setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]}),rn=dn([LN,FN]),UN=z(([i,e,t])=>{let n=R(t).toVar(),s=R(e).toVar(),r=Vo(i).toVar();return V(rn(r.x,s,n),rn(r.y,s,n),rn(r.z,s,n))}).setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]}),BN=z(([i,e,t,n])=>{let s=R(n).toVar(),r=R(t).toVar(),o=R(e).toVar(),a=Vo(i).toVar();return V(rn(a.x,o,r,s),rn(a.y,o,r,s),rn(a.z,o,r,s))}).setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]}),ri=dn([UN,BN]),ON=z(([i])=>{let e=R(i).toVar();return He(.6616,e)}).setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]}),VN=z(([i])=>{let e=R(i).toVar();return He(.982,e)}).setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]}),GN=z(([i])=>{let e=V(i).toVar();return He(.6616,e)}).setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]}),wv=dn([ON,GN]),zN=z(([i])=>{let e=V(i).toVar();return He(.982,e)}).setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]}),Rv=dn([VN,zN]),Hn=z(([i,e])=>{let t=C(e).toVar(),n=fe(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(C(32).sub(t)))}).setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]}),Cv=z(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(Hn(t,C(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(Hn(i,C(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(Hn(e,C(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(Hn(t,C(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(Hn(i,C(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(Hn(e,C(4))),e.addAssign(i)}),Oc=z(([i,e,t])=>{let n=fe(t).toVar(),s=fe(e).toVar(),r=fe(i).toVar();return n.bitXorAssign(s),n.subAssign(Hn(s,C(14))),r.bitXorAssign(n),r.subAssign(Hn(n,C(11))),s.bitXorAssign(r),s.subAssign(Hn(r,C(25))),n.bitXorAssign(s),n.subAssign(Hn(s,C(16))),r.bitXorAssign(n),r.subAssign(Hn(n,C(4))),s.bitXorAssign(r),s.subAssign(Hn(r,C(14))),n.bitXorAssign(s),n.subAssign(Hn(s,C(24))),n}).setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]}),yn=z(([i])=>{let e=fe(i).toVar();return R(e).div(R(fe(C(4294967295))))}).setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]}),Bi=z(([i])=>{let e=R(i).toVar();return e.mul(e).mul(e).mul(e.mul(e.mul(6).sub(15)).add(10))}).setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]}),kN=z(([i])=>{let e=C(i).toVar(),t=fe(fe(1)).toVar(),n=fe(fe(C(3735928559)).add(t.shiftLeft(fe(2))).add(fe(13))).toVar();return Oc(n.add(fe(e)),n,n)}).setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]}),HN=z(([i,e])=>{let t=C(e).toVar(),n=C(i).toVar(),s=fe(fe(2)).toVar(),r=fe().toVar(),o=fe().toVar(),a=fe().toVar();return r.assign(o.assign(a.assign(fe(C(3735928559)).add(s.shiftLeft(fe(2))).add(fe(13))))),r.addAssign(fe(n)),o.addAssign(fe(t)),Oc(r,o,a)}).setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]}),WN=z(([i,e,t])=>{let n=C(t).toVar(),s=C(e).toVar(),r=C(i).toVar(),o=fe(fe(3)).toVar(),a=fe().toVar(),c=fe().toVar(),l=fe().toVar();return a.assign(c.assign(l.assign(fe(C(3735928559)).add(o.shiftLeft(fe(2))).add(fe(13))))),a.addAssign(fe(r)),c.addAssign(fe(s)),l.addAssign(fe(n)),Oc(a,c,l)}).setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]}),qN=z(([i,e,t,n])=>{let s=C(n).toVar(),r=C(t).toVar(),o=C(e).toVar(),a=C(i).toVar(),c=fe(fe(4)).toVar(),l=fe().toVar(),u=fe().toVar(),h=fe().toVar();return l.assign(u.assign(h.assign(fe(C(3735928559)).add(c.shiftLeft(fe(2))).add(fe(13))))),l.addAssign(fe(a)),u.addAssign(fe(o)),h.addAssign(fe(r)),Cv(l,u,h),l.addAssign(fe(s)),Oc(l,u,h)}).setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]}),XN=z(([i,e,t,n,s])=>{let r=C(s).toVar(),o=C(n).toVar(),a=C(t).toVar(),c=C(e).toVar(),l=C(i).toVar(),u=fe(fe(5)).toVar(),h=fe().toVar(),d=fe().toVar(),m=fe().toVar();return h.assign(d.assign(m.assign(fe(C(3735928559)).add(u.shiftLeft(fe(2))).add(fe(13))))),h.addAssign(fe(l)),d.addAssign(fe(c)),m.addAssign(fe(a)),Cv(h,d,m),h.addAssign(fe(o)),d.addAssign(fe(r)),Oc(h,d,m)}).setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]}),xt=dn([kN,HN,WN,qN,XN]),$N=z(([i,e])=>{let t=C(e).toVar(),n=C(i).toVar(),s=fe(xt(n,t)).toVar(),r=Vo().toVar();return r.x.assign(s.bitAnd(C(255))),r.y.assign(s.shiftRight(C(8)).bitAnd(C(255))),r.z.assign(s.shiftRight(C(16)).bitAnd(C(255))),r}).setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]}),YN=z(([i,e,t])=>{let n=C(t).toVar(),s=C(e).toVar(),r=C(i).toVar(),o=fe(xt(r,s,n)).toVar(),a=Vo().toVar();return a.x.assign(o.bitAnd(C(255))),a.y.assign(o.shiftRight(C(8)).bitAnd(C(255))),a.z.assign(o.shiftRight(C(16)).bitAnd(C(255))),a}).setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]}),oi=dn([$N,YN]),KN=z(([i])=>{let e=oe(i).toVar(),t=C().toVar(),n=C().toVar(),s=R(Rt(e.x,t)).toVar(),r=R(Rt(e.y,n)).toVar(),o=R(Bi(s)).toVar(),a=R(Bi(r)).toVar(),c=R(Av(rn(xt(t,n),s,r),rn(xt(t.add(C(1)),n),s.sub(1),r),rn(xt(t,n.add(C(1))),s,r.sub(1)),rn(xt(t.add(C(1)),n.add(C(1))),s.sub(1),r.sub(1)),o,a)).toVar();return wv(c)}).setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]}),ZN=z(([i])=>{let e=V(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),r=R(Rt(e.x,t)).toVar(),o=R(Rt(e.y,n)).toVar(),a=R(Rt(e.z,s)).toVar(),c=R(Bi(r)).toVar(),l=R(Bi(o)).toVar(),u=R(Bi(a)).toVar(),h=R(Ev(rn(xt(t,n,s),r,o,a),rn(xt(t.add(C(1)),n,s),r.sub(1),o,a),rn(xt(t,n.add(C(1)),s),r,o.sub(1),a),rn(xt(t.add(C(1)),n.add(C(1)),s),r.sub(1),o.sub(1),a),rn(xt(t,n,s.add(C(1))),r,o,a.sub(1)),rn(xt(t.add(C(1)),n,s.add(C(1))),r.sub(1),o,a.sub(1)),rn(xt(t,n.add(C(1)),s.add(C(1))),r,o.sub(1),a.sub(1)),rn(xt(t.add(C(1)),n.add(C(1)),s.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Rv(h)}).setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]}),vm=dn([KN,ZN]),jN=z(([i])=>{let e=oe(i).toVar(),t=C().toVar(),n=C().toVar(),s=R(Rt(e.x,t)).toVar(),r=R(Rt(e.y,n)).toVar(),o=R(Bi(s)).toVar(),a=R(Bi(r)).toVar(),c=V(Av(ri(oi(t,n),s,r),ri(oi(t.add(C(1)),n),s.sub(1),r),ri(oi(t,n.add(C(1))),s,r.sub(1)),ri(oi(t.add(C(1)),n.add(C(1))),s.sub(1),r.sub(1)),o,a)).toVar();return wv(c)}).setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]}),QN=z(([i])=>{let e=V(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),r=R(Rt(e.x,t)).toVar(),o=R(Rt(e.y,n)).toVar(),a=R(Rt(e.z,s)).toVar(),c=R(Bi(r)).toVar(),l=R(Bi(o)).toVar(),u=R(Bi(a)).toVar(),h=V(Ev(ri(oi(t,n,s),r,o,a),ri(oi(t.add(C(1)),n,s),r.sub(1),o,a),ri(oi(t,n.add(C(1)),s),r,o.sub(1),a),ri(oi(t.add(C(1)),n.add(C(1)),s),r.sub(1),o.sub(1),a),ri(oi(t,n,s.add(C(1))),r,o,a.sub(1)),ri(oi(t.add(C(1)),n,s.add(C(1))),r.sub(1),o,a.sub(1)),ri(oi(t,n.add(C(1)),s.add(C(1))),r,o.sub(1),a.sub(1)),ri(oi(t.add(C(1)),n.add(C(1)),s.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Rv(h)}).setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]}),Tm=dn([jN,QN]),JN=z(([i])=>{let e=R(i).toVar(),t=C(kt(e)).toVar();return yn(xt(t))}).setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]}),eP=z(([i])=>{let e=oe(i).toVar(),t=C(kt(e.x)).toVar(),n=C(kt(e.y)).toVar();return yn(xt(t,n))}).setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]}),tP=z(([i])=>{let e=V(i).toVar(),t=C(kt(e.x)).toVar(),n=C(kt(e.y)).toVar(),s=C(kt(e.z)).toVar();return yn(xt(t,n,s))}).setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]}),nP=z(([i])=>{let e=Ge(i).toVar(),t=C(kt(e.x)).toVar(),n=C(kt(e.y)).toVar(),s=C(kt(e.z)).toVar(),r=C(kt(e.w)).toVar();return yn(xt(t,n,s,r))}).setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]}),iP=dn([JN,eP,tP,nP]),sP=z(([i])=>{let e=R(i).toVar(),t=C(kt(e)).toVar();return V(yn(xt(t,C(0))),yn(xt(t,C(1))),yn(xt(t,C(2))))}).setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]}),rP=z(([i])=>{let e=oe(i).toVar(),t=C(kt(e.x)).toVar(),n=C(kt(e.y)).toVar();return V(yn(xt(t,n,C(0))),yn(xt(t,n,C(1))),yn(xt(t,n,C(2))))}).setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]}),oP=z(([i])=>{let e=V(i).toVar(),t=C(kt(e.x)).toVar(),n=C(kt(e.y)).toVar(),s=C(kt(e.z)).toVar();return V(yn(xt(t,n,s,C(0))),yn(xt(t,n,s,C(1))),yn(xt(t,n,s,C(2))))}).setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]}),aP=z(([i])=>{let e=Ge(i).toVar(),t=C(kt(e.x)).toVar(),n=C(kt(e.y)).toVar(),s=C(kt(e.z)).toVar(),r=C(kt(e.w)).toVar();return V(yn(xt(t,n,s,r,C(0))),yn(xt(t,n,s,r,C(1))),yn(xt(t,n,s,r,C(2))))}).setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]}),Nv=dn([sP,rP,oP,aP]),qu=z(([i,e,t,n])=>{let s=R(n).toVar(),r=R(t).toVar(),o=C(e).toVar(),a=V(i).toVar(),c=R(0).toVar(),l=R(1).toVar();return Tt(o,()=>{c.addAssign(l.mul(vm(a))),l.mulAssign(s),a.mulAssign(r)}),c}).setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]}),Pv=z(([i,e,t,n])=>{let s=R(n).toVar(),r=R(t).toVar(),o=C(e).toVar(),a=V(i).toVar(),c=V(0).toVar(),l=R(1).toVar();return Tt(o,()=>{c.addAssign(l.mul(Tm(a))),l.mulAssign(s),a.mulAssign(r)}),c}).setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]}),cP=z(([i,e,t,n])=>{let s=R(n).toVar(),r=R(t).toVar(),o=C(e).toVar(),a=V(i).toVar();return oe(qu(a,o,r,s),qu(a.add(V(C(19),C(193),C(17))),o,r,s))}).setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]}),lP=z(([i,e,t,n])=>{let s=R(n).toVar(),r=R(t).toVar(),o=C(e).toVar(),a=V(i).toVar(),c=V(Pv(a,o,r,s)).toVar(),l=R(qu(a.add(V(C(19),C(193),C(17))),o,r,s)).toVar();return Ge(c,l)}).setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]}),uP=z(([i,e,t,n,s,r,o])=>{let a=C(o).toVar(),c=R(r).toVar(),l=C(s).toVar(),u=C(n).toVar(),h=C(t).toVar(),d=C(e).toVar(),m=oe(i).toVar(),_=V(Nv(oe(d.add(u),h.add(l)))).toVar(),x=oe(_.x,_.y).toVar();x.subAssign(.5),x.mulAssign(c),x.addAssign(.5);let g=oe(oe(R(d),R(h)).add(x)).toVar(),p=oe(g.sub(m)).toVar();return et(a.equal(C(2)),()=>At(p.x).add(At(p.y))),et(a.equal(C(3)),()=>on(At(p.x),At(p.y))),ks(p,p)}).setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),hP=z(([i,e,t,n,s,r,o,a,c])=>{let l=C(c).toVar(),u=R(a).toVar(),h=C(o).toVar(),d=C(r).toVar(),m=C(s).toVar(),_=C(n).toVar(),x=C(t).toVar(),g=C(e).toVar(),p=V(i).toVar(),A=V(Nv(V(g.add(m),x.add(d),_.add(h)))).toVar();A.subAssign(.5),A.mulAssign(u),A.addAssign(.5);let b=V(V(R(g),R(x),R(_)).add(A)).toVar(),S=V(b.sub(p)).toVar();return et(l.equal(C(2)),()=>At(S.x).add(At(S.y)).add(At(S.z))),et(l.equal(C(3)),()=>on(on(At(S.x),At(S.y)),At(S.z))),ks(S,S)}).setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),Go=dn([uP,hP]),dP=z(([i,e,t])=>{let n=C(t).toVar(),s=R(e).toVar(),r=oe(i).toVar(),o=C().toVar(),a=C().toVar(),c=oe(Rt(r.x,o),Rt(r.y,a)).toVar(),l=R(1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{let d=R(Go(c,u,h,o,a,s,n)).toVar();l.assign($n(l,d))})}),et(n.equal(C(0)),()=>{l.assign(zi(l))}),l}).setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),fP=z(([i,e,t])=>{let n=C(t).toVar(),s=R(e).toVar(),r=oe(i).toVar(),o=C().toVar(),a=C().toVar(),c=oe(Rt(r.x,o),Rt(r.y,a)).toVar(),l=oe(1e6,1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{let d=R(Go(c,u,h,o,a,s,n)).toVar();et(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).ElseIf(d.lessThan(l.y),()=>{l.y.assign(d)})})}),et(n.equal(C(0)),()=>{l.assign(zi(l))}),l}).setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),pP=z(([i,e,t])=>{let n=C(t).toVar(),s=R(e).toVar(),r=oe(i).toVar(),o=C().toVar(),a=C().toVar(),c=oe(Rt(r.x,o),Rt(r.y,a)).toVar(),l=V(1e6,1e6,1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{let d=R(Go(c,u,h,o,a,s,n)).toVar();et(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).ElseIf(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).ElseIf(d.lessThan(l.z),()=>{l.z.assign(d)})})}),et(n.equal(C(0)),()=>{l.assign(zi(l))}),l}).setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),mP=z(([i,e,t])=>{let n=C(t).toVar(),s=R(e).toVar(),r=V(i).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=V(Rt(r.x,o),Rt(r.y,a),Rt(r.z,c)).toVar(),u=R(1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Tt({start:-1,end:C(1),name:"z",condition:"<="},({z:m})=>{let _=R(Go(l,h,d,m,o,a,c,s,n)).toVar();u.assign($n(u,_))})})}),et(n.equal(C(0)),()=>{u.assign(zi(u))}),u}).setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),gP=dn([dP,mP]),_P=z(([i,e,t])=>{let n=C(t).toVar(),s=R(e).toVar(),r=V(i).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=V(Rt(r.x,o),Rt(r.y,a),Rt(r.z,c)).toVar(),u=oe(1e6,1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Tt({start:-1,end:C(1),name:"z",condition:"<="},({z:m})=>{let _=R(Go(l,h,d,m,o,a,c,s,n)).toVar();et(_.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(_)}).ElseIf(_.lessThan(u.y),()=>{u.y.assign(_)})})})}),et(n.equal(C(0)),()=>{u.assign(zi(u))}),u}).setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),xP=dn([fP,_P]),yP=z(([i,e,t])=>{let n=C(t).toVar(),s=R(e).toVar(),r=V(i).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=V(Rt(r.x,o),Rt(r.y,a),Rt(r.z,c)).toVar(),u=V(1e6,1e6,1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Tt({start:-1,end:C(1),name:"z",condition:"<="},({z:m})=>{let _=R(Go(l,h,d,m,o,a,c,s,n)).toVar();et(_.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(_)}).ElseIf(_.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(_)}).ElseIf(_.lessThan(u.z),()=>{u.z.assign(_)})})})}),et(n.equal(C(0)),()=>{u.assign(zi(u))}),u}).setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]}),vP=dn([pP,yP]),TP=z(([i])=>{let e=i.y,t=i.z,n=V().toVar();return et(e.lessThan(1e-4),()=>{n.assign(V(t,t,t))}).Else(()=>{let s=i.x;s=s.sub(Ui(s)).mul(6).toVar();let r=C(Zp(s)),o=s.sub(R(r)),a=t.mul(e.oneMinus()),c=t.mul(e.mul(o).oneMinus()),l=t.mul(e.mul(o.oneMinus()).oneMinus());et(r.equal(C(0)),()=>{n.assign(V(t,l,a))}).ElseIf(r.equal(C(1)),()=>{n.assign(V(c,t,a))}).ElseIf(r.equal(C(2)),()=>{n.assign(V(a,t,l))}).ElseIf(r.equal(C(3)),()=>{n.assign(V(a,c,t))}).ElseIf(r.equal(C(4)),()=>{n.assign(V(l,a,t))}).Else(()=>{n.assign(V(t,a,c))})}),n}).setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]}),SP=z(([i])=>{let e=V(i).toVar(),t=R(e.x).toVar(),n=R(e.y).toVar(),s=R(e.z).toVar(),r=R($n(t,$n(n,s))).toVar(),o=R(on(t,on(n,s))).toVar(),a=R(o.sub(r)).toVar(),c=R().toVar(),l=R().toVar(),u=R().toVar();return u.assign(o),et(o.greaterThan(0),()=>{l.assign(a.div(o))}).Else(()=>{l.assign(0)}),et(l.lessThanEqual(0),()=>{c.assign(0)}).Else(()=>{et(t.greaterThanEqual(o),()=>{c.assign(n.sub(s).div(a))}).ElseIf(n.greaterThanEqual(o),()=>{c.assign(Ht(2,s.sub(t).div(a)))}).Else(()=>{c.assign(Ht(4,t.sub(n).div(a)))}),c.mulAssign(1/6),et(c.lessThan(0),()=>{c.addAssign(1)})}),V(c,l,u)}).setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]}),bP=z(([i])=>{let e=V(i).toVar(),t=Gp(kp(e,V(.04045))).toVar(),n=V(e.div(12.92)).toVar(),s=V(bi(on(e.add(V(.055)),V(0)).div(1.055),V(2.4))).toVar();return zt(n,s,t)}).setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),Iv=(i,e)=>{i=R(i),e=R(e);let t=oe(e.dFdx(),e.dFdy()).length().mul(.7071067811865476);return Mr(i.sub(t),i.add(t),e)},Dv=(i,e,t,n)=>zt(i,e,t[n].clamp()),MP=(i,e,t=Ct())=>Dv(i,e,t,"x"),AP=(i,e,t=Ct())=>Dv(i,e,t,"y"),Lv=(i,e,t,n,s)=>zt(i,e,Iv(t,n[s])),EP=(i,e,t,n=Ct())=>Lv(i,e,t,n,"x"),wP=(i,e,t,n=Ct())=>Lv(i,e,t,n,"y"),RP=(i=1,e=0,t=Ct())=>t.mul(i).add(e),CP=(i,e=1)=>(i=R(i),i.abs().pow(e).mul(i.sign())),NP=(i,e=1,t=.5)=>R(i).sub(t).mul(e).add(t),PP=(i=Ct(),e=1,t=0)=>vm(i.convert("vec2|vec3")).mul(e).add(t),IP=(i=Ct(),e=1,t=0)=>Tm(i.convert("vec2|vec3")).mul(e).add(t),DP=(i=Ct(),e=1,t=0)=>(i=i.convert("vec2|vec3"),Ge(Tm(i),vm(i.add(oe(19,73)))).mul(e).add(t)),LP=(i=Ct(),e=1)=>gP(i.convert("vec2|vec3"),e,C(1)),FP=(i=Ct(),e=1)=>xP(i.convert("vec2|vec3"),e,C(1)),UP=(i=Ct(),e=1)=>vP(i.convert("vec2|vec3"),e,C(1)),BP=(i=Ct())=>iP(i.convert("vec2|vec3")),OP=(i=Ct(),e=3,t=2,n=.5,s=1)=>qu(i,C(e),t,n).mul(s),VP=(i=Ct(),e=3,t=2,n=.5,s=1)=>cP(i,C(e),t,n).mul(s),GP=(i=Ct(),e=3,t=2,n=.5,s=1)=>Pv(i,C(e),t,n).mul(s),zP=(i=Ct(),e=3,t=2,n=.5,s=1)=>lP(i,C(e),t,n).mul(s),kP=z(([i,e,t])=>{let n=wr(i).toVar("nDir"),s=tt(R(.5).mul(e.sub(t)),Sr).div(n).toVar("rbmax"),r=tt(R(-.5).mul(e.sub(t)),Sr).div(n).toVar("rbmin"),o=V().toVar("rbminmax");o.x=n.x.greaterThan(R(0)).select(s.x,r.x),o.y=n.y.greaterThan(R(0)).select(s.y,r.y),o.z=n.z.greaterThan(R(0)).select(s.z,r.z);let a=$n($n(o.x,o.y),o.z).toVar("correction");return Sr.add(n.mul(a)).toVar("boxIntersection").sub(t)}),HP=z(([i,e])=>{let t=i.x,n=i.y,s=i.z,r=e.element(0).mul(.886227);return r=r.add(e.element(1).mul(2*.511664).mul(n)),r=r.add(e.element(2).mul(2*.511664).mul(s)),r=r.add(e.element(3).mul(2*.511664).mul(t)),r=r.add(e.element(4).mul(2*.429043).mul(t).mul(n)),r=r.add(e.element(5).mul(2*.429043).mul(n).mul(s)),r=r.add(e.element(6).mul(s.mul(s).mul(.743125).sub(.247708))),r=r.add(e.element(7).mul(2*.429043).mul(t).mul(s)),r=r.add(e.element(8).mul(.429043).mul(He(t,t).sub(He(n,n)))),r}),f=Object.freeze({__proto__:null,BRDF_GGX:jR,BRDF_Lambert:XR,BasicShadowFilter:vv,Break:zy,Const:kx,Continue:MR,DFGApprox:QR,D_GGX:jy,Discard:ry,EPSILON:ux,F_Schlick:Yy,Fn:z,INFINITY:ow,If:et,Loop:Tt,NodeAccess:Fi,NodeShaderStage:Kd,NodeType:SE,NodeUpdateType:mt,PCFShadowFilter:Tv,PCFSoftShadowFilter:Sv,PI:Mu,PI2:aw,Return:fw,Schlick_to_F0:JR,ScriptableNodeResources:xu,ShaderNode:mc,TBNViewMatrix:lm,VSMShadowFilter:bv,V_GGX_SmithCorrelated:Zy,Var:zx,abs:At,acesFilmicToneMapping:E1,acos:_x,add:Ht,addMethodChaining:q,addNodeElement:pw,agxToneMapping:N1,all:Hp,alphaT:of,and:J_,anisotropy:q_,anisotropyB:Io,anisotropyT:gu,any:hx,append:C_,array:V_,arrayBuffer:OE,asin:gx,assign:X_,atan:Xp,atan2:Ox,atomicAdd:J1,atomicAnd:iN,atomicFunc:ki,atomicLoad:j1,atomicMax:tN,atomicMin:nN,atomicOr:sN,atomicStore:Q1,atomicSub:eN,atomicXor:rN,attenuationColor:sw,attenuationDistance:iw,attribute:ps,attributeArray:ZC,backgroundBlurriness:e1,backgroundIntensity:t1,backgroundRotation:n1,batch:Vy,billboarding:BC,bitAnd:ix,bitNot:sx,bitOr:rx,bitXor:ox,bitangentGeometry:Lw,bitangentLocal:Fw,bitangentView:My,bitangentWorld:Uw,bitcast:cw,blendBurn:uv,blendColor:o1,blendDodge:hv,blendOverlay:fv,blendScreen:dv,blur:oC,bool:hs,buffer:wc,bufferAttribute:Ec,bumpMap:wy,burn:a1,bvec2:I_,bvec3:Gp,bvec4:U_,bypass:ny,cache:ty,call:$_,cameraFar:Os,cameraIndex:sm,cameraNear:Bs,cameraNormalMatrix:yw,cameraPosition:vw,cameraProjectionMatrix:Rc,cameraProjectionMatrixInverse:_w,cameraViewMatrix:li,cameraWorldMatrix:xw,cbrt:Ix,cdl:m1,ceil:Zu,checker:RN,cineonToneMapping:M1,clamp:fs,clearcoat:kE,clearcoatRoughness:HE,code:nh,color:N_,colorSpaceToWorking:im,colorToDirection:WR,compute:ey,cond:Vx,context:em,convert:O_,convertColorSpace:hw,convertToTexture:qC,cos:rs,cross:Qu,cubeTexture:Sy,dFdx:Yp,dFdy:Kp,dashSize:jE,defaultBuildStages:bE,defaultShaderStages:b_,defined:vc,degrees:fx,deltaTime:rv,densityFog:V1,densityFogFactor:_v,depth:pm,depthPass:v1,difference:wx,diffuseColor:Si,directPointLight:wN,directionToColor:HR,dispersion:rw,distance:Ex,div:ds,dodge:c1,dot:ks,drawIndex:By,dynamicBufferAttribute:Jx,element:B_,emissive:rf,equal:Y_,equals:Mx,equirectUV:qR,exp:px,exp2:Fo,expression:zs,faceDirection:Nc,faceForward:Jp,faceforward:lw,float:R,floor:Ui,fog:gm,fract:gs,frameGroup:GE,frameId:wC,frontFacing:dy,fwidth:Sx,gain:TC,gapSize:QE,getConstNodeType:w_,getCurrentStack:R_,getDirection:ev,getDistanceAttenuation:Mv,getGeometryRoughness:Ky,getNormalFromDepth:$C,getParallaxCorrectNormal:kP,getRoughness:$R,getScreenPosition:XC,getShIrradianceAt:HP,getTextureIndex:iv,getViewPosition:No,globalId:H1,glsl:L1,glslFn:F1,grayscale:h1,greaterThan:kp,greaterThanEqual:Q_,hash:vC,highpModelNormalViewMatrix:Pw,highpModelViewMatrix:Nw,hue:p1,instance:SR,instanceIndex:Lc,instancedArray:jC,instancedBufferAttribute:wu,instancedDynamicBufferAttribute:gf,instancedMesh:Oy,int:C,inverseSqrt:qp,inversesqrt:uw,invocationLocalIndex:TR,invocationSubgroupIndex:vR,ior:ew,iridescence:W_,iridescenceIOR:XE,iridescenceThickness:$E,ivec2:en,ivec3:D_,ivec4:L_,js:I1,label:Gx,length:Au,lengthSq:Qp,lessThan:Z_,lessThanEqual:j_,lightPosition:xv,lightProjectionUV:oN,lightShadowMatrix:xm,lightTargetDirection:cN,lightTargetPosition:yv,lightViewPosition:aN,lightingContext:Hy,lights:hN,linearDepth:Uu,linearToneMapping:S1,localId:W1,log:Wp,log2:ls,logarithmicDepthToViewZ:LR,loop:AR,luminance:mm,mat2:Yu,mat3:ai,mat4:Tr,matcapUV:dC,materialAO:Ly,materialAlphaTest:Ry,materialAnisotropy:iR,materialAnisotropyVector:Co,materialAttenuationColor:hR,materialAttenuationDistance:uR,materialClearcoat:jw,materialClearcoatNormal:Jw,materialClearcoatRoughness:Qw,materialColor:Cy,materialDispersion:xR,materialEmissive:Ny,materialIOR:lR,materialIridescence:sR,materialIridescenceIOR:rR,materialIridescenceThickness:oR,materialLightMap:Dy,materialLineDashOffset:gR,materialLineDashSize:fR,materialLineGapSize:pR,materialLineScale:dR,materialLineWidth:mR,materialMetalness:Zw,materialNormal:Iy,materialOpacity:Py,materialPointSize:_R,materialReference:yr,materialReflectivity:Yw,materialRefractionRatio:_y,materialRotation:eR,materialRoughness:Kw,materialSheen:tR,materialSheenRoughness:nR,materialShininess:Hw,materialSpecular:Ww,materialSpecularColor:Xw,materialSpecularIntensity:qw,materialSpecularStrength:$w,materialThickness:cR,materialTransmission:aR,max:on,maxMipLevel:ay,mediumpModelViewMatrix:uy,metalness:zE,min:$n,mix:zt,mixElement:Ux,mod:jp,modInt:zp,modelDirection:Aw,modelNormalMatrix:ly,modelPosition:Ew,modelScale:ww,modelViewMatrix:Cc,modelViewPosition:Rw,modelViewProjection:Fy,modelWorldMatrix:cs,modelWorldMatrixInverse:Cw,morphReference:ky,mrt:sv,mul:He,mx_aastep:Iv,mx_cell_noise_float:BP,mx_contrast:NP,mx_fractal_noise_float:OP,mx_fractal_noise_vec2:VP,mx_fractal_noise_vec3:GP,mx_fractal_noise_vec4:zP,mx_hsvtorgb:TP,mx_noise_float:PP,mx_noise_vec3:IP,mx_noise_vec4:DP,mx_ramplr:MP,mx_ramptb:AP,mx_rgbtohsv:SP,mx_safepower:CP,mx_splitlr:EP,mx_splittb:wP,mx_srgb_texture_to_lin_rec709:bP,mx_transform_uv:RP,mx_worley_noise_float:LP,mx_worley_noise_vec2:FP,mx_worley_noise_vec3:UP,negate:xx,neutralToneMapping:P1,nodeArray:vr,nodeImmutable:le,nodeObject:Z,nodeObjects:Mc,nodeProxy:Y,normalFlat:fy,normalGeometry:om,normalLocal:In,normalMap:Pf,normalView:Oi,normalWorld:py,normalize:wr,not:tx,notEqual:K_,numWorkgroups:z1,objectDirection:Tw,objectGroup:z_,objectPosition:cy,objectScale:bw,objectViewPosition:Mw,objectWorldMatrix:Sw,oneMinus:yx,or:ex,orthographicDepthToViewZ:DR,oscSawtooth:LC,oscSine:PC,oscSquare:IC,oscTriangle:DC,output:Sc,outputStruct:yC,overlay:u1,overloadingFn:dn,parabola:ip,parallaxDirection:Ey,parallaxUV:Ow,parameter:mC,pass:x1,passTexture:y1,pcurve:SC,perspectiveDepthToViewZ:dm,pmremTexture:hC,pointUV:JC,pointWidth:JE,positionGeometry:rm,positionLocal:Bt,positionPrevious:Pu,positionView:tn,positionViewDirection:qn,positionWorld:Sr,positionWorldDirection:hy,posterize:g1,pow:bi,pow2:Rx,pow3:Cx,pow4:Nx,property:k_,radians:dx,rand:Fx,range:G1,rangeFog:O1,rangeFogFactor:gv,reciprocal:Tx,reference:Gt,referenceBuffer:Rf,reflect:Ax,reflectVector:vy,reflectView:xy,reflector:kC,refract:Lx,refractVector:Ty,refractView:yy,reinhardToneMapping:b1,remainder:lx,remap:iy,remapClamp:sy,renderGroup:at,renderOutput:oy,rendererReference:Zx,rotate:nv,rotateUV:FC,roughness:H_,round:vx,rtt:av,sRGBTransferEOTF:qx,sRGBTransferOETF:Xx,sampler:mw,saturate:Dx,saturation:d1,screen:l1,screenCoordinate:Fc,screenSize:Fu,screenUV:Hs,scriptable:B1,scriptableValue:_u,select:Pn,setCurrentStack:sf,shaderStages:ME,shadow:EN,shadowPositionWorld:ym,shapeCircle:CN,sharedUniformGroup:Ku,sheen:WE,sheenRoughness:qE,shiftLeft:ax,shiftRight:cx,shininess:ZE,sign:$p,sin:Wn,sinc:bC,skinning:bR,skinningReference:Gy,smoothstep:Mr,smoothstepElement:Bx,specularColor:YE,specularF90:KE,spherizeUV:UC,split:VE,spritesheetUV:VC,sqrt:zi,stack:gC,step:ju,storage:th,storageBarrier:$1,storageObject:KC,storageTexture:cv,string:BE,struct:xC,sub:tt,subgroupIndex:yR,subgroupSize:q1,tan:mx,tangentGeometry:Ju,tangentLocal:Pc,tangentView:Ic,tangentWorld:by,temp:Hx,texture:An,texture3D:pC,textureBarrier:Y1,textureBicubic:eC,textureCubeUV:tv,textureLoad:Ut,textureSize:Gs,textureStore:i1,thickness:nw,time:Rr,timerDelta:NC,timerGlobal:CC,timerLocal:RC,toOutputColorSpace:$x,toWorkingColorSpace:Yx,toneMapping:jx,toneMappingExposure:Qx,toonOutlinePass:T1,transformDirection:Px,transformNormal:gy,transformNormalToView:am,transformedBentNormalView:Vw,transformedBitangentView:Ay,transformedBitangentWorld:Bw,transformedClearcoatNormalView:Iw,transformedNormalView:ms,transformedNormalWorld:my,transformedTangentView:cm,transformedTangentWorld:Dw,transmission:tw,transpose:bx,triNoise3D:AC,triplanarTexture:GC,triplanarTextures:ov,trunc:Zp,tslFn:UE,uint:fe,uniform:Ke,uniformArray:as,uniformGroup:G_,uniforms:gw,userData:s1,uv:Ct,uvec2:P_,uvec3:Vo,uvec4:F_,varying:En,varyingProperty:Tc,vec2:oe,vec3:V,vec4:Ge,vectorComponents:Oo,velocity:r1,vertexColor:QC,vertexIndex:Uy,vertexStage:Wx,vibrance:f1,viewZToLogarithmicDepth:fm,viewZToOrthographicDepth:Do,viewZToPerspectiveDepth:Xy,viewport:um,viewportBottomLeft:NR,viewportCoordinate:qy,viewportDepthTexture:hm,viewportLinearDepth:FR,viewportMipTexture:IR,viewportResolution:RR,viewportSafeUV:OC,viewportSharedTexture:kR,viewportSize:Wy,viewportTexture:PR,viewportTopLeft:CR,viewportUV:wR,wgsl:D1,wgslFn:U1,workgroupArray:K1,workgroupBarrier:X1,workgroupId:k1,workingToColorSpace:Kx,xor:nx});var xr=(1+Math.sqrt(5))/2,wo=1/xr,BL=[new D(-xr,wo,0),new D(xr,wo,0),new D(-wo,0,xr),new D(wo,0,xr),new D(0,xr,-wo),new D(0,xr,wo),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];var $d=ev(Ct(),ps("faceIndex")).normalize(),OL=V($d.x,$d.y,$d.z);var Lp=class{constructor(e,t,n=null,s="",r=!1){this.type=e,this.name=t,this.count=n,this.qualifier=s,this.isConst=r}};Lp.isNodeFunctionInput=!0;var Fp=class{constructor(e,t,n="",s=""){this.type=e,this.inputs=t,this.name=n,this.precision=s}getCode(){console.warn("Abstract function.")}};Fp.isNodeFunction=!0;var VL={[Xl]:"never",[rc]:"less",[$l]:"equal",[oc]:"less-equal",[Yl]:"greater",[Zl]:"greater-equal",[jl]:"always",[Kl]:"not-equal"};var Ro=typeof self<"u"?self.GPUShaderStage:{VERTEX:1,FRAGMENT:2,COMPUTE:4},GL={[Fi.READ_ONLY]:"read",[Fi.WRITE_ONLY]:"write",[Fi.READ_WRITE]:"read_write"},zL={[qr]:"repeat",[wi]:"clamp",[Xr]:"mirror"},kL={vertex:Ro?Ro.VERTEX:1,fragment:Ro?Ro.FRAGMENT:2,compute:Ro?Ro.COMPUTE:4};var _r={tsl_xor:new Vt("fn tsl_xor( a : bool, b : bool ) -> bool { return ( a || b ) && !( a && b ); }"),mod_float:new Vt("fn tsl_mod_float( x : f32, y : f32 ) -> f32 { return x - y * floor( x / y ); }"),mod_vec2:new Vt("fn tsl_mod_vec2( x : vec2f, y : vec2f ) -> vec2f { return x - y * floor( x / y ); }"),mod_vec3:new Vt("fn tsl_mod_vec3( x : vec3f, y : vec3f ) -> vec3f { return x - y * floor( x / y ); }"),mod_vec4:new Vt("fn tsl_mod_vec4( x : vec4f, y : vec4f ) -> vec4f { return x - y * floor( x / y ); }"),equals_bool:new Vt("fn tsl_equals_bool( a : bool, b : bool ) -> bool { return a == b; }"),equals_bvec2:new Vt("fn tsl_equals_bvec2( a : vec2f, b : vec2f ) -> vec2<bool> { return vec2<bool>( a.x == b.x, a.y == b.y ); }"),equals_bvec3:new Vt("fn tsl_equals_bvec3( a : vec3f, b : vec3f ) -> vec3<bool> { return vec3<bool>( a.x == b.x, a.y == b.y, a.z == b.z ); }"),equals_bvec4:new Vt("fn tsl_equals_bvec4( a : vec4f, b : vec4f ) -> vec4<bool> { return vec4<bool>( a.x == b.x, a.y == b.y, a.z == b.z, a.w == b.w ); }"),repeatWrapping_float:new Vt("fn tsl_repeatWrapping_float( coord: f32 ) -> f32 { return fract( coord ); }"),mirrorWrapping_float:new Vt("fn tsl_mirrorWrapping_float( coord: f32 ) -> f32 { let mirrored = fract( coord * 0.5 ) * 2.0; return 1.0 - abs( 1.0 - mirrored ); }"),clampWrapping_float:new Vt("fn tsl_clampWrapping_float( coord: f32 ) -> f32 { return clamp( coord, 0.0, 1.0 ); }"),biquadraticTexture:new Vt(`
fn tsl_biquadraticTexture( map : texture_2d<f32>, coord : vec2f, iRes : vec2u, level : u32 ) -> vec4f {

	let res = vec2f( iRes );

	let uvScaled = coord * res;
	let uvWrapping = ( ( uvScaled % res ) + res ) % res;

	// https://www.shadertoy.com/view/WtyXRy

	let uv = uvWrapping - 0.5;
	let iuv = floor( uv );
	let f = fract( uv );

	let rg1 = textureLoad( map, vec2u( iuv + vec2( 0.5, 0.5 ) ) % iRes, level );
	let rg2 = textureLoad( map, vec2u( iuv + vec2( 1.5, 0.5 ) ) % iRes, level );
	let rg3 = textureLoad( map, vec2u( iuv + vec2( 0.5, 1.5 ) ) % iRes, level );
	let rg4 = textureLoad( map, vec2u( iuv + vec2( 1.5, 1.5 ) ) % iRes, level );

	return mix( mix( rg1, rg2, f.x ), mix( rg3, rg4, f.x ), f.y );

}
`)},mu={dFdx:"dpdx",dFdy:"- dpdy",mod_float:"tsl_mod_float",mod_vec2:"tsl_mod_vec2",mod_vec3:"tsl_mod_vec3",mod_vec4:"tsl_mod_vec4",equals_bool:"tsl_equals_bool",equals_bvec2:"tsl_equals_bvec2",equals_bvec3:"tsl_equals_bvec3",equals_bvec4:"tsl_equals_bvec4",inversesqrt:"inverseSqrt",bitcast:"bitcast<f32>"};typeof navigator<"u"&&/Windows/g.test(navigator.userAgent)&&(_r.pow_float=new Vt("fn tsl_pow_float( a : f32, b : f32 ) -> f32 { return select( -pow( -a, b ), pow( a, b ), a > 0.0 ); }"),_r.pow_vec2=new Vt("fn tsl_pow_vec2( a : vec2f, b : vec2f ) -> vec2f { return vec2f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ) ); }",[_r.pow_float]),_r.pow_vec3=new Vt("fn tsl_pow_vec3( a : vec3f, b : vec3f ) -> vec3f { return vec3f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ), tsl_pow_float( a.z, b.z ) ); }",[_r.pow_float]),_r.pow_vec4=new Vt("fn tsl_pow_vec4( a : vec4f, b : vec4f ) -> vec4f { return vec4f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ), tsl_pow_float( a.z, b.z ), tsl_pow_float( a.w, b.w ) ); }",[_r.pow_float]),mu.pow_float="tsl_pow_float",mu.pow_vec2="tsl_pow_vec2",mu.pow_vec3="tsl_pow_vec3",mu.pow_vec4="tsl_pow_vec4");var WP="";(typeof navigator<"u"&&/Firefox|Deno/g.test(navigator.userAgent))!==!0&&(WP+=`diagnostic( off, derivative_uniformity );
`);var qL=f.BRDF_GGX,XL=f.BRDF_Lambert,$L=f.BasicShadowFilter,YL=f.Break,KL=f.Continue,ZL=f.DFGApprox,jL=f.D_GGX,QL=f.Discard,JL=f.EPSILON,eF=f.F_Schlick,qt=f.Fn,tF=f.INFINITY,Sm=f.If,Fv=f.Loop,nF=f.NodeShaderStage,iF=f.NodeType,sF=f.NodeUpdateType,rF=f.NodeAccess,oF=f.PCFShadowFilter,aF=f.PCFSoftShadowFilter,cF=f.PI,lF=f.PI2,uF=f.Return,hF=f.Schlick_to_F0,dF=f.ScriptableNodeResources,fF=f.ShaderNode,pF=f.TBNViewMatrix,mF=f.VSMShadowFilter,gF=f.V_GGX_SmithCorrelated,_F=f.abs,xF=f.acesFilmicToneMapping,Uv=f.acos,_s=f.add,yF=f.addNodeElement,vF=f.agxToneMapping,TF=f.all,SF=f.alphaT,bF=f.and,MF=f.anisotropy,AF=f.anisotropyB,EF=f.anisotropyT,wF=f.any,RF=f.append,CF=f.array,NF=f.arrayBuffer,PF=f.asin,IF=f.assign,DF=f.atan,LF=f.atan2,FF=f.atomicAdd,UF=f.atomicAnd,BF=f.atomicFunc,OF=f.atomicMax,VF=f.atomicMin,GF=f.atomicOr,zF=f.atomicStore,kF=f.atomicSub,HF=f.atomicXor,WF=f.atomicLoad,qF=f.attenuationColor,XF=f.attenuationDistance,$F=f.attribute,YF=f.attributeArray,KF=f.backgroundBlurriness,ZF=f.backgroundIntensity,jF=f.backgroundRotation,QF=f.batch,JF=f.billboarding,eU=f.bitAnd,tU=f.bitNot,nU=f.bitOr,iU=f.bitXor,sU=f.bitangentGeometry,rU=f.bitangentLocal,oU=f.bitangentView,aU=f.bitangentWorld,cU=f.bitcast,lU=f.blendBurn,uU=f.blendColor,hU=f.blendDodge,dU=f.blendOverlay,fU=f.blendScreen,pU=f.blur,mU=f.bool,gU=f.buffer,_U=f.bufferAttribute,xU=f.bumpMap,yU=f.burn,vU=f.bvec2,TU=f.bvec3,SU=f.bvec4,bU=f.bypass,MU=f.cache,AU=f.call,EU=f.cameraFar,wU=f.cameraIndex,RU=f.cameraNear,CU=f.cameraNormalMatrix,NU=f.cameraPosition,PU=f.cameraProjectionMatrix,IU=f.cameraProjectionMatrixInverse,DU=f.cameraViewMatrix,LU=f.cameraWorldMatrix,FU=f.cbrt,UU=f.cdl,BU=f.ceil,OU=f.checker,VU=f.cineonToneMapping,GU=f.clamp,zU=f.clearcoat,kU=f.clearcoatRoughness,HU=f.code,WU=f.color,qU=f.colorSpaceToWorking,XU=f.colorToDirection,$U=f.compute,YU=f.cond,KU=f.Const,ZU=f.context,jU=f.convert,QU=f.convertColorSpace,JU=f.convertToTexture,zo=f.cos,ih=f.cross,e2=f.cubeTexture,Bv=f.dFdx,Ov=f.dFdy,t2=f.dashSize,n2=f.defaultBuildStages,i2=f.defaultShaderStages,s2=f.defined,r2=f.degrees,o2=f.deltaTime,a2=f.densityFog,c2=f.densityFogFactor,l2=f.depth,u2=f.depthPass,h2=f.difference,d2=f.diffuseColor,f2=f.directPointLight,p2=f.directionToColor,m2=f.dispersion,Vv=f.distance,g2=f.div,_2=f.dodge,x2=f.dot,y2=f.drawIndex,v2=f.dynamicBufferAttribute,T2=f.element,S2=f.emissive,b2=f.equal,M2=f.equals,A2=f.equirectUV,Gv=f.exp,E2=f.exp2,w2=f.expression,R2=f.faceDirection,C2=f.faceForward,N2=f.faceforward,Hi=f.float,P2=f.floor,I2=f.fog,D2=f.fract,L2=f.frameGroup,F2=f.frameId,U2=f.frontFacing,B2=f.fwidth,O2=f.gain,V2=f.gapSize,G2=f.getConstNodeType,z2=f.getCurrentStack,k2=f.getDirection,H2=f.getDistanceAttenuation,W2=f.getGeometryRoughness,q2=f.getNormalFromDepth,X2=f.getParallaxCorrectNormal,$2=f.getRoughness,Y2=f.getScreenPosition,K2=f.getShIrradianceAt,Z2=f.getTextureIndex,j2=f.getViewPosition,Q2=f.glsl,J2=f.glslFn,eB=f.grayscale,tB=f.greaterThan,nB=f.greaterThanEqual,iB=f.hash,sB=f.highpModelNormalViewMatrix,rB=f.highpModelViewMatrix,oB=f.hue,aB=f.instance,cB=f.instanceIndex,lB=f.instancedArray,uB=f.instancedBufferAttribute,hB=f.instancedDynamicBufferAttribute,dB=f.instancedMesh,fB=f.int,pB=f.inverseSqrt,mB=f.inversesqrt,gB=f.invocationLocalIndex,_B=f.invocationSubgroupIndex,xB=f.ior,yB=f.iridescence,vB=f.iridescenceIOR,TB=f.iridescenceThickness,SB=f.ivec2,bB=f.ivec3,MB=f.ivec4,AB=f.js,EB=f.label,wB=f.length,RB=f.lengthSq,CB=f.lessThan,NB=f.lessThanEqual,PB=f.lightPosition,IB=f.lightTargetDirection,DB=f.lightTargetPosition,LB=f.lightViewPosition,FB=f.lightingContext,UB=f.lights,BB=f.linearDepth,OB=f.linearToneMapping,VB=f.localId,GB=f.globalId,zB=f.log,bm=f.log2,kB=f.logarithmicDepthToViewZ,HB=f.loop,WB=f.luminance,qB=f.mediumpModelViewMatrix,XB=f.mat2,$B=f.mat3,ko=f.mat4,YB=f.matcapUV,KB=f.materialAO,ZB=f.materialAlphaTest,jB=f.materialAnisotropy,QB=f.materialAnisotropyVector,JB=f.materialAttenuationColor,e3=f.materialAttenuationDistance,t3=f.materialClearcoat,n3=f.materialClearcoatNormal,i3=f.materialClearcoatRoughness,s3=f.materialColor,r3=f.materialDispersion,o3=f.materialEmissive,a3=f.materialIOR,c3=f.materialIridescence,l3=f.materialIridescenceIOR,u3=f.materialIridescenceThickness,h3=f.materialLightMap,d3=f.materialLineDashOffset,f3=f.materialLineDashSize,p3=f.materialLineGapSize,m3=f.materialLineScale,g3=f.materialLineWidth,_3=f.materialMetalness,x3=f.materialNormal,y3=f.materialOpacity,v3=f.materialPointSize,T3=f.materialReference,S3=f.materialReflectivity,b3=f.materialRefractionRatio,M3=f.materialRotation,A3=f.materialRoughness,E3=f.materialSheen,w3=f.materialSheenRoughness,R3=f.materialShininess,C3=f.materialSpecular,N3=f.materialSpecularColor,P3=f.materialSpecularIntensity,I3=f.materialSpecularStrength,D3=f.materialThickness,L3=f.materialTransmission,Ho=f.max,F3=f.maxMipLevel,U3=f.metalness,Ws=f.min,zv=f.mix,B3=f.mixElement,kv=f.mod,O3=f.modInt,V3=f.modelDirection,G3=f.modelNormalMatrix,z3=f.modelPosition,k3=f.modelScale,H3=f.modelViewMatrix,W3=f.modelViewPosition,q3=f.modelViewProjection,X3=f.modelWorldMatrix,$3=f.modelWorldMatrixInverse,Y3=f.morphReference,K3=f.mrt,ui=f.mul,Z3=f.mx_aastep,j3=f.mx_cell_noise_float,Q3=f.mx_contrast,J3=f.mx_fractal_noise_float,eO=f.mx_fractal_noise_vec2,tO=f.mx_fractal_noise_vec3,nO=f.mx_fractal_noise_vec4,iO=f.mx_hsvtorgb,sO=f.mx_noise_float,rO=f.mx_noise_vec3,oO=f.mx_noise_vec4,aO=f.mx_ramplr,cO=f.mx_ramptb,lO=f.mx_rgbtohsv,uO=f.mx_safepower,hO=f.mx_splitlr,dO=f.mx_splittb,fO=f.mx_srgb_texture_to_lin_rec709,pO=f.mx_transform_uv,mO=f.mx_worley_noise_float,gO=f.mx_worley_noise_vec2,_O=f.mx_worley_noise_vec3,xO=f.negate,yO=f.neutralToneMapping,vO=f.nodeArray,TO=f.nodeImmutable,SO=f.nodeObject,bO=f.nodeObjects,MO=f.nodeProxy,AO=f.normalFlat,EO=f.normalGeometry,wO=f.normalLocal,RO=f.normalMap,CO=f.normalView,NO=f.normalWorld,PO=f.normalize,IO=f.not,DO=f.notEqual,LO=f.numWorkgroups,FO=f.objectDirection,UO=f.objectGroup,BO=f.objectPosition,OO=f.objectScale,VO=f.objectViewPosition,GO=f.objectWorldMatrix,Mm=f.oneMinus,zO=f.or,kO=f.orthographicDepthToViewZ,HO=f.oscSawtooth,WO=f.oscSine,qO=f.oscSquare,XO=f.oscTriangle,$O=f.output,YO=f.outputStruct,KO=f.overlay,ZO=f.overloadingFn,jO=f.parabola,QO=f.parallaxDirection,JO=f.parallaxUV,eV=f.parameter,tV=f.pass,nV=f.passTexture,iV=f.pcurve,sV=f.perspectiveDepthToViewZ,rV=f.pmremTexture,oV=f.pointUV,aV=f.pointWidth,sh=f.positionGeometry,cV=f.positionLocal,lV=f.positionPrevious,uV=f.positionView,hV=f.positionViewDirection,dV=f.positionWorld,fV=f.positionWorldDirection,pV=f.posterize,rh=f.pow,mV=f.pow2,gV=f.pow3,_V=f.pow4,xV=f.property,yV=f.radians,vV=f.rand,TV=f.range,SV=f.rangeFog,bV=f.rangeFogFactor,MV=f.reciprocal,AV=f.reference,EV=f.referenceBuffer,wV=f.reflect,RV=f.reflectVector,CV=f.reflectView,NV=f.reflector,PV=f.refract,IV=f.refractVector,DV=f.refractView,LV=f.reinhardToneMapping,FV=f.remainder,Hv=f.remap,UV=f.remapClamp,BV=f.renderGroup,OV=f.renderOutput,VV=f.rendererReference,GV=f.rotate,zV=f.rotateUV,kV=f.roughness,HV=f.round,WV=f.rtt,qV=f.sRGBTransferEOTF,XV=f.sRGBTransferOETF,$V=f.sampler,YV=f.saturate,KV=f.saturation,ZV=f.screen,jV=f.screenCoordinate,QV=f.screenSize,JV=f.screenUV,eG=f.scriptable,tG=f.scriptableValue,Am=f.select,nG=f.setCurrentStack,iG=f.shaderStages,sG=f.shadow,rG=f.shadowPositionWorld,oG=f.sharedUniformGroup,aG=f.shapeCircle,cG=f.sheen,lG=f.sheenRoughness,uG=f.shiftLeft,hG=f.shiftRight,dG=f.shininess,fG=f.sign,Cr=f.sin,pG=f.sinc,mG=f.skinning,gG=f.skinningReference,oh=f.smoothstep,_G=f.smoothstepElement,xG=f.specularColor,yG=f.specularF90,vG=f.spherizeUV,TG=f.split,SG=f.spritesheetUV,bG=f.sqrt,MG=f.stack,AG=f.step,EG=f.storage,wG=f.storageBarrier,RG=f.storageObject,CG=f.storageTexture,NG=f.string,PG=f.struct,Wi=f.sub,IG=f.subgroupIndex,DG=f.subgroupSize,LG=f.tan,FG=f.tangentGeometry,UG=f.tangentLocal,BG=f.tangentView,OG=f.tangentWorld,VG=f.temp,GG=f.texture,zG=f.texture3D,kG=f.textureBarrier,HG=f.textureBicubic,WG=f.textureCubeUV,qG=f.textureLoad,XG=f.textureSize,$G=f.textureStore,YG=f.thickness,KG=f.threshold,ZG=f.time,jG=f.timerDelta,QG=f.timerGlobal,JG=f.timerLocal,ez=f.toOutputColorSpace,tz=f.toWorkingColorSpace,nz=f.toneMapping,iz=f.toneMappingExposure,sz=f.toonOutlinePass,rz=f.transformDirection,oz=f.transformNormal,Wv=f.transformNormalToView,az=f.transformedBentNormalView,cz=f.transformedBitangentView,lz=f.transformedBitangentWorld,uz=f.transformedClearcoatNormalView,hz=f.transformedNormalView,dz=f.transformedNormalWorld,fz=f.transformedTangentView,pz=f.transformedTangentWorld,mz=f.transmission,gz=f.transpose,_z=f.tri,xz=f.tri3,yz=f.triNoise3D,vz=f.triplanarTexture,Tz=f.triplanarTextures,Sz=f.trunc,bz=f.tslFn,Mz=f.uint,qP=f.uniform,Az=f.uniformArray,Ez=f.uniformGroup,wz=f.uniforms,Rz=f.userData,Cz=f.uv,Nz=f.uvec2,Pz=f.uvec3,Iz=f.uvec4,Dz=f.Var,Lz=f.varying,Fz=f.varyingProperty,Uz=f.vec2,qs=f.vec3,qv=f.vec4,Bz=f.vectorComponents,Oz=f.velocity,Vz=f.vertexColor,Gz=f.vertexIndex,zz=f.vibrance,kz=f.viewZToLogarithmicDepth,Hz=f.viewZToOrthographicDepth,Wz=f.viewZToPerspectiveDepth,qz=f.viewport,Xz=f.viewportBottomLeft,$z=f.viewportCoordinate,Yz=f.viewportDepthTexture,Kz=f.viewportLinearDepth,Zz=f.viewportMipTexture,jz=f.viewportResolution,Qz=f.viewportSafeUV,Jz=f.viewportSharedTexture,ek=f.viewportSize,tk=f.viewportTexture,nk=f.viewportTopLeft,ik=f.viewportUV,sk=f.wgsl,rk=f.wgslFn,ok=f.workgroupArray,ak=f.workgroupBarrier,ck=f.workgroupId,lk=f.workingToColorSpace,uk=f.xor;var ah=qt(([i,e,t,n])=>{var s=n.add(i.mul(12)).mod(12),r=e.mul(Ws(t,Wi(1,t)));return t.sub(r.mul(Ho(-1,Ws(Ws(s.sub(3),Wi(9,s)),1))))});ah.setLayout({name:"hslHelper",type:"float",inputs:[{name:"h",type:"float"},{name:"s",type:"float"},{name:"l",type:"float"},{name:"n",type:"float"}]});var XP=qt(([i,e,t])=>{i=i.fract().add(1).fract(),e=e.clamp(0,1),t=t.clamp(0,1);var n=ah(i,e,t,0),s=ah(i,e,t,8),r=ah(i,e,t,4);return qs(n,s,r)});XP.setLayout({name:"hsl",type:"vec3",inputs:[{name:"h",type:"float"},{name:"s",type:"float"},{name:"l",type:"float"}]});var pk=qt(([i])=>{var e=Hi(i.x).toVar(),t=Hi(i.y).toVar(),n=Hi(i.z).toVar(),s=Ho(e,Ho(t,n)).toVar(),r=Ws(e,Ws(t,n)).toVar(),o=Hi(0).toVar(),a=Hi(0).toVar(),c=_s(s,r).div(2);return Sm(r.notEqual(s),()=>{let l=Wi(s,r).toVar();a.assign(Am(c.lessThanEqual(.5),l.div(_s(r,s)),l.div(Wi(2,_s(r,s))))),Sm(s.equal(e),()=>{o.assign(Wi(t,n).div(l).add(Am(t.lessThanEqual(n),6,0)))}).ElseIf(s.equal(t),()=>{o.assign(Wi(n,e).div(l).add(2))}).Else(()=>{o.assign(Wi(e,t).div(l).add(4))}),o.divAssign(6)}),qs(o,a,c)});var ch=qt(([i,e])=>qs(Cr(e).mul(Cr(i)),zo(i),zo(e).mul(Cr(i))));ch.setLayout({name:"spherical",type:"vec3",inputs:[{name:"phi",type:"float"},{name:"theta",type:"float"}]});var mk=qt(([i,e])=>{var t=$P(e);return YP(i,t)}),$P=qt(([i])=>{var e=zo(i.x.div(2)),t=zo(i.y.div(2)),n=zo(i.z.div(2)),s=Cr(i.x.div(2)),r=Cr(i.y.div(2)),o=Cr(i.z.div(2));return qv(_s(ui(s,t,n),ui(e,r,o)),Wi(ui(e,r,n),ui(s,t,o)),_s(ui(e,t,o),ui(s,r,n)),Wi(ui(e,t,n),ui(s,r,o)))}),YP=qt(([i,e])=>{var t=ih(e,i).mul(2).toVar();return _s(i,t.mul(e.w),ih(e.xyz,t))}),gk=qt(([i,e,t,n,s])=>(i=Hv(i,e,t,0,1),i=rh(2,ui(i,bm(s.div(n))).add(bm(n))),i)),_k=qt(([i])=>i.dot(qs(12.9898,78.233,-97.5123)).sin().mul(43758.5453).fract().mul(2).sub(1)),KP=qt(([i])=>{var e=i.cos().toVar(),t=i.sin().toVar();return ko(1,0,0,0,0,e,t,0,0,t.negate(),e,0,0,0,0,1)}),ZP=qt(([i])=>{var e=i.cos().toVar(),t=i.sin().toVar();return ko(e,0,t.negate(),0,0,1,0,0,t,0,e,0,0,0,0,1)}),jP=qt(([i])=>{var e=i.cos().toVar(),t=i.sin().toVar();return ko(e,t,0,0,t.negate(),e,0,0,0,0,1,0,0,0,0,1)}),xk=qt(([i])=>{var e=KP(i.x),t=ZP(i.y),n=jP(i.z);return t.mul(e).mul(n)}),yk=qt(([i])=>ko(i.x,0,0,0,0,i.y,0,0,0,0,i.z,0,0,0,0,1)),vk=qt(([i])=>ko(1,0,0,0,0,1,0,0,0,0,1,0,i.x,i.y,i.z,1)),QP=qt(([i,e,t,n])=>{var s=ch(e.x,e.y).mul(n).toVar(),r=t.sub(s.div(2)).sub(i).dot(s).div(s.dot(s)).negate();return oh(0,1,r)}),Tk=qt(i=>{var e=QP(sh,i.selectorAngles,i.selectorCenter,i.selectorWidth).sub(.5).mul(2).abs().oneMinus().pow(.25).negate().mul(i.selectorShow);return qs(0,e,e)}),Sk=qt(([i])=>{var e=Bv(i),t=Ov(i);return Wv(ih(e,t).normalize())});function Xv(i){for(var e of Object.keys(i))typeof i[e]=="number"?i[e]=Hi(i[e]):i[e]instanceof Be?i[e]=qs(i[e].r,i[e].g,i[e].b):i[e]instanceof D&&(i[e]=qs(i[e].x,i[e].y,i[e].z));return i}var JP=(1+5**.5)/2,lh=qt(i=>{i=Xv({...lh.defaults,...i});var e=rh(10,i.count).toVar(),t=sh.normalize().toVar(),n=Mm(t.y).mul(e).sub(1).div(2),s=Ho(10,e.pow(.5)),r=n.sub(s).floor().clamp(0,e),o=n.add(s).floor().clamp(0,e),a=Hi(1).toVar();Fv(o.sub(r),({i:h})=>{var d=_s(h,r),m=kv(ui(2*Math.PI/JP,d),2*Math.PI),_=Uv(Mm(Hi(d).mul(2).add(1).div(e))),x=ch(_,m);a.assign(Ws(a,Vv(t,x)))});var c=Gv(i.size.mul(5).sub(5)).toVar(),l=i.blur.pow(4).toVar(),u=oh(c.sub(l),c.add(l),a);return zv(i.color,i.background,u)});lh.defaults={$name:"Polka dots",count:2,size:.5,blur:.25,color:new Be(0),background:new Be(16777215)};var Em,Xs,Nr,Vc,$v,wm;Xs=new iu({antialias:!0});Xs.useLegacyLights=!1;Xs.setPixelRatio(window.devicePixelRatio);Xs.setSize(window.innerWidth,window.innerHeight);Xs.setAnimationLoop(Kv);Em=document.getElementById("threejs-container");Em.innerHTML="";Em.appendChild(Xs.domElement);Nr=new Jr;Nr.background=new Be(16777215);Vc=new ln(60,window.innerWidth/window.innerHeight,1,100);Vc.position.set(5,2.5,5);Vc.lookAt(0,0,0);var Yv=new ou(Vc,Xs.domElement);Yv.enableDamping=!0;var eI=new ao(10066329);Nr.add(eI);var tI=new ro(16777215,0,.9);Nr.add(tI);var nI=new ga(5);Nr.add(nI);var iI=new ca(20,12);wm=new so({color:13421772,roughness:.5,metalness:0});wm.colorNode=lh({count:.5,size:.1,blur:.22,color:new Be(0),background:new Be(16777215)});$v=new _n(iI,wm);Nr.add($v);function Kv(){requestAnimationFrame(Kv),Yv.update(),Xs.render(Nr,Vc)}})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.webgpu.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.tsl.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=bundle.js.map
