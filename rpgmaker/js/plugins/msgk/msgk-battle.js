var u0=Object.defineProperty;var f0=(ze,$,U)=>$ in ze?u0(ze,$,{enumerable:!0,configurable:!0,writable:!0,value:U}):ze[$]=U;var ct=(ze,$,U)=>(f0(ze,typeof $!="symbol"?$+"":$,U),U);(function(ze,$){typeof exports=="object"&&typeof module<"u"?$(require("@pixi/core"),require("@pixi/settings")):typeof define=="function"&&define.amd?define(["@pixi/core","@pixi/settings"],$):(ze=typeof globalThis<"u"?globalThis:ze||self,$(ze.PIXI,ze.PIXI))})(this,function(core,settings){var ze;"use strict";const style="",loadPlugin=async()=>{await Promise.resolve().then(()=>setupPlugin)};if((ze=globalThis.Graphics)!=null&&ze.app)loadPlugin().catch(console.error);else{const $=setInterval(()=>{var U;(U=globalThis.Graphics)!=null&&U.app&&(clearInterval($),loadPlugin().catch(console.error))},200)}const UNIT_STATUS={empty:"empty",block:"block",enemy_empty:"enemy_empty",enemy_block:"enemy_block"},CONFIG={common:{appPaddingY:4,fontSize:{big:32,default:26,medium:20,small:16}},skill:{tint:{normal:11184895,magic:16777130,special:13426141}},map:{offsetX:450,offsetY:140,unitSize:48},menu:{width:192,btnHoverScale:1.2,paddingY:20},battleCommandWind:{padding:16,width:100},figure:{offsetX:100,offsetY:50,width:280,half:250,height:600},helpWindow:{exceedWidth:40}},COLOR_MATRIX={positive:[.8,0,0,0,0,1.5,0,0,0,0,.8,0,0,0,0,1],negative:[1.5,0,0,0,0,.8,0,0,0,0,.8,0,0,0,0,1]};var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lodash={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */lodash.exports,function($,U){(function(){var B,V="4.17.21",K=200,Z="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",J="Expected a function",it="Invalid `variable` option passed into `_.template`",lt="__lodash_hash_undefined__",ht=500,Tt="__lodash_placeholder__",zt=1,Et=2,Ot=4,Vt=1,Bt=2,Rt=1,Re=2,Mr=4,Zt=8,mr=16,Ge=32,vr=64,Ke=128,Pr=256,en=512,Sn=30,$r="...",yi=800,An=16,_e=1,rr=2,Pn=3,gt=1/0,St=9007199254740991,Ht=17976931348623157e292,Fe=0/0,Oe=4294967295,yl=Oe-1,Tl=Oe>>>1,Cl=[["ary",Ke],["bind",Rt],["bindKey",Re],["curry",Zt],["curryRight",mr],["flip",en],["partial",Ge],["partialRight",vr],["rearg",Pr]],Ur="[object Arguments]",In="[object Array]",wl="[object AsyncFunction]",rn="[object Boolean]",nn="[object Date]",bl="[object DOMException]",En="[object Error]",zn="[object Function]",Wo="[object GeneratorFunction]",Ze="[object Map]",on="[object Number]",Sl="[object Null]",sr="[object Object]",Do="[object Promise]",Al="[object Proxy]",sn="[object RegExp]",je="[object Set]",an="[object String]",Rn="[object Symbol]",Pl="[object Undefined]",ln="[object WeakMap]",Il="[object WeakSet]",un="[object ArrayBuffer]",Gr="[object DataView]",Ti="[object Float32Array]",Ci="[object Float64Array]",wi="[object Int8Array]",bi="[object Int16Array]",Si="[object Int32Array]",Ai="[object Uint8Array]",Pi="[object Uint8ClampedArray]",Ii="[object Uint16Array]",Ei="[object Uint32Array]",El=/\b__p \+= '';/g,zl=/\b(__p \+=) '' \+/g,Rl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xo=/&(?:amp|lt|gt|quot|#39);/g,Vo=/[&<>"']/g,Fl=RegExp(Xo.source),Ol=RegExp(Vo.source),Ll=/<%-([\s\S]+?)%>/g,kl=/<%([\s\S]+?)%>/g,qo=/<%=([\s\S]+?)%>/g,Nl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ml=/^\w*$/,$l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zi=/[\\^$.*+?()[\]{}|]/g,Ul=RegExp(zi.source),Ri=/^\s+/,Gl=/\s/,Bl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Hl=/\{\n\/\* \[wrapped with (.+)\] \*/,Wl=/,? & /,Dl=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Xl=/[()=,{}\[\]\/\s]/,Vl=/\\(\\)?/g,ql=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Yo=/\w*$/,Yl=/^[-+]0x[0-9a-f]+$/i,Kl=/^0b[01]+$/i,Zl=/^\[object .+?Constructor\]$/,jl=/^0o[0-7]+$/i,Ql=/^(?:0|[1-9]\d*)$/,Jl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fn=/($^)/,tu=/['\n\r\u2028\u2029\\]/g,On="\\ud800-\\udfff",eu="\\u0300-\\u036f",ru="\\ufe20-\\ufe2f",nu="\\u20d0-\\u20ff",Ko=eu+ru+nu,Zo="\\u2700-\\u27bf",jo="a-z\\xdf-\\xf6\\xf8-\\xff",iu="\\xac\\xb1\\xd7\\xf7",ou="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",su="\\u2000-\\u206f",au=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Qo="A-Z\\xc0-\\xd6\\xd8-\\xde",Jo="\\ufe0e\\ufe0f",ts=iu+ou+su+au,Fi="['’]",lu="["+On+"]",es="["+ts+"]",Ln="["+Ko+"]",rs="\\d+",uu="["+Zo+"]",ns="["+jo+"]",is="[^"+On+ts+rs+Zo+jo+Qo+"]",Oi="\\ud83c[\\udffb-\\udfff]",fu="(?:"+Ln+"|"+Oi+")",os="[^"+On+"]",Li="(?:\\ud83c[\\udde6-\\uddff]){2}",ki="[\\ud800-\\udbff][\\udc00-\\udfff]",Br="["+Qo+"]",ss="\\u200d",as="(?:"+ns+"|"+is+")",cu="(?:"+Br+"|"+is+")",ls="(?:"+Fi+"(?:d|ll|m|re|s|t|ve))?",us="(?:"+Fi+"(?:D|LL|M|RE|S|T|VE))?",fs=fu+"?",cs="["+Jo+"]?",hu="(?:"+ss+"(?:"+[os,Li,ki].join("|")+")"+cs+fs+")*",du="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hs=cs+fs+hu,gu="(?:"+[uu,Li,ki].join("|")+")"+hs,mu="(?:"+[os+Ln+"?",Ln,Li,ki,lu].join("|")+")",vu=RegExp(Fi,"g"),xu=RegExp(Ln,"g"),Ni=RegExp(Oi+"(?="+Oi+")|"+mu+hs,"g"),_u=RegExp([Br+"?"+ns+"+"+ls+"(?="+[es,Br,"$"].join("|")+")",cu+"+"+us+"(?="+[es,Br+as,"$"].join("|")+")",Br+"?"+as+"+"+ls,Br+"+"+us,pu,du,rs,gu].join("|"),"g"),yu=RegExp("["+ss+On+Ko+Jo+"]"),Tu=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Cu=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],wu=-1,$t={};$t[Ti]=$t[Ci]=$t[wi]=$t[bi]=$t[Si]=$t[Ai]=$t[Pi]=$t[Ii]=$t[Ei]=!0,$t[Ur]=$t[In]=$t[un]=$t[rn]=$t[Gr]=$t[nn]=$t[En]=$t[zn]=$t[Ze]=$t[on]=$t[sr]=$t[sn]=$t[je]=$t[an]=$t[ln]=!1;var Mt={};Mt[Ur]=Mt[In]=Mt[un]=Mt[Gr]=Mt[rn]=Mt[nn]=Mt[Ti]=Mt[Ci]=Mt[wi]=Mt[bi]=Mt[Si]=Mt[Ze]=Mt[on]=Mt[sr]=Mt[sn]=Mt[je]=Mt[an]=Mt[Rn]=Mt[Ai]=Mt[Pi]=Mt[Ii]=Mt[Ei]=!0,Mt[En]=Mt[zn]=Mt[ln]=!1;var bu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Su={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Au={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Pu={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Iu=parseFloat,Eu=parseInt,ds=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,zu=typeof self=="object"&&self&&self.Object===Object&&self,jt=ds||zu||Function("return this")(),Mi=U&&!U.nodeType&&U,Ir=Mi&&!0&&$&&!$.nodeType&&$,ps=Ir&&Ir.exports===Mi,$i=ps&&ds.process,Be=function(){try{var et=Ir&&Ir.require&&Ir.require("util").types;return et||$i&&$i.binding&&$i.binding("util")}catch{}}(),gs=Be&&Be.isArrayBuffer,ms=Be&&Be.isDate,vs=Be&&Be.isMap,xs=Be&&Be.isRegExp,_s=Be&&Be.isSet,ys=Be&&Be.isTypedArray;function Le(et,ot,nt){switch(nt.length){case 0:return et.call(ot);case 1:return et.call(ot,nt[0]);case 2:return et.call(ot,nt[0],nt[1]);case 3:return et.call(ot,nt[0],nt[1],nt[2])}return et.apply(ot,nt)}function Ru(et,ot,nt,dt){for(var _t=-1,Ft=et==null?0:et.length;++_t<Ft;){var qt=et[_t];ot(dt,qt,nt(qt),et)}return dt}function He(et,ot){for(var nt=-1,dt=et==null?0:et.length;++nt<dt&&ot(et[nt],nt,et)!==!1;);return et}function Fu(et,ot){for(var nt=et==null?0:et.length;nt--&&ot(et[nt],nt,et)!==!1;);return et}function Ts(et,ot){for(var nt=-1,dt=et==null?0:et.length;++nt<dt;)if(!ot(et[nt],nt,et))return!1;return!0}function xr(et,ot){for(var nt=-1,dt=et==null?0:et.length,_t=0,Ft=[];++nt<dt;){var qt=et[nt];ot(qt,nt,et)&&(Ft[_t++]=qt)}return Ft}function kn(et,ot){var nt=et==null?0:et.length;return!!nt&&Hr(et,ot,0)>-1}function Ui(et,ot,nt){for(var dt=-1,_t=et==null?0:et.length;++dt<_t;)if(nt(ot,et[dt]))return!0;return!1}function Ut(et,ot){for(var nt=-1,dt=et==null?0:et.length,_t=Array(dt);++nt<dt;)_t[nt]=ot(et[nt],nt,et);return _t}function _r(et,ot){for(var nt=-1,dt=ot.length,_t=et.length;++nt<dt;)et[_t+nt]=ot[nt];return et}function Gi(et,ot,nt,dt){var _t=-1,Ft=et==null?0:et.length;for(dt&&Ft&&(nt=et[++_t]);++_t<Ft;)nt=ot(nt,et[_t],_t,et);return nt}function Ou(et,ot,nt,dt){var _t=et==null?0:et.length;for(dt&&_t&&(nt=et[--_t]);_t--;)nt=ot(nt,et[_t],_t,et);return nt}function Bi(et,ot){for(var nt=-1,dt=et==null?0:et.length;++nt<dt;)if(ot(et[nt],nt,et))return!0;return!1}var Lu=Hi("length");function ku(et){return et.split("")}function Nu(et){return et.match(Dl)||[]}function Cs(et,ot,nt){var dt;return nt(et,function(_t,Ft,qt){if(ot(_t,Ft,qt))return dt=Ft,!1}),dt}function Nn(et,ot,nt,dt){for(var _t=et.length,Ft=nt+(dt?1:-1);dt?Ft--:++Ft<_t;)if(ot(et[Ft],Ft,et))return Ft;return-1}function Hr(et,ot,nt){return ot===ot?Yu(et,ot,nt):Nn(et,ws,nt)}function Mu(et,ot,nt,dt){for(var _t=nt-1,Ft=et.length;++_t<Ft;)if(dt(et[_t],ot))return _t;return-1}function ws(et){return et!==et}function bs(et,ot){var nt=et==null?0:et.length;return nt?Di(et,ot)/nt:Fe}function Hi(et){return function(ot){return ot==null?B:ot[et]}}function Wi(et){return function(ot){return et==null?B:et[ot]}}function Ss(et,ot,nt,dt,_t){return _t(et,function(Ft,qt,Nt){nt=dt?(dt=!1,Ft):ot(nt,Ft,qt,Nt)}),nt}function $u(et,ot){var nt=et.length;for(et.sort(ot);nt--;)et[nt]=et[nt].value;return et}function Di(et,ot){for(var nt,dt=-1,_t=et.length;++dt<_t;){var Ft=ot(et[dt]);Ft!==B&&(nt=nt===B?Ft:nt+Ft)}return nt}function Xi(et,ot){for(var nt=-1,dt=Array(et);++nt<et;)dt[nt]=ot(nt);return dt}function Uu(et,ot){return Ut(ot,function(nt){return[nt,et[nt]]})}function As(et){return et&&et.slice(0,zs(et)+1).replace(Ri,"")}function ke(et){return function(ot){return et(ot)}}function Vi(et,ot){return Ut(ot,function(nt){return et[nt]})}function fn(et,ot){return et.has(ot)}function Ps(et,ot){for(var nt=-1,dt=et.length;++nt<dt&&Hr(ot,et[nt],0)>-1;);return nt}function Is(et,ot){for(var nt=et.length;nt--&&Hr(ot,et[nt],0)>-1;);return nt}function Gu(et,ot){for(var nt=et.length,dt=0;nt--;)et[nt]===ot&&++dt;return dt}var Bu=Wi(bu),Hu=Wi(Su);function Wu(et){return"\\"+Pu[et]}function Du(et,ot){return et==null?B:et[ot]}function Wr(et){return yu.test(et)}function Xu(et){return Tu.test(et)}function Vu(et){for(var ot,nt=[];!(ot=et.next()).done;)nt.push(ot.value);return nt}function qi(et){var ot=-1,nt=Array(et.size);return et.forEach(function(dt,_t){nt[++ot]=[_t,dt]}),nt}function Es(et,ot){return function(nt){return et(ot(nt))}}function yr(et,ot){for(var nt=-1,dt=et.length,_t=0,Ft=[];++nt<dt;){var qt=et[nt];(qt===ot||qt===Tt)&&(et[nt]=Tt,Ft[_t++]=nt)}return Ft}function Mn(et){var ot=-1,nt=Array(et.size);return et.forEach(function(dt){nt[++ot]=dt}),nt}function qu(et){var ot=-1,nt=Array(et.size);return et.forEach(function(dt){nt[++ot]=[dt,dt]}),nt}function Yu(et,ot,nt){for(var dt=nt-1,_t=et.length;++dt<_t;)if(et[dt]===ot)return dt;return-1}function Ku(et,ot,nt){for(var dt=nt+1;dt--;)if(et[dt]===ot)return dt;return dt}function Dr(et){return Wr(et)?ju(et):Lu(et)}function Qe(et){return Wr(et)?Qu(et):ku(et)}function zs(et){for(var ot=et.length;ot--&&Gl.test(et.charAt(ot)););return ot}var Zu=Wi(Au);function ju(et){for(var ot=Ni.lastIndex=0;Ni.test(et);)++ot;return ot}function Qu(et){return et.match(Ni)||[]}function Ju(et){return et.match(_u)||[]}var tf=function et(ot){ot=ot==null?jt:Xr.defaults(jt.Object(),ot,Xr.pick(jt,Cu));var nt=ot.Array,dt=ot.Date,_t=ot.Error,Ft=ot.Function,qt=ot.Math,Nt=ot.Object,Yi=ot.RegExp,ef=ot.String,We=ot.TypeError,$n=nt.prototype,rf=Ft.prototype,Vr=Nt.prototype,Un=ot["__core-js_shared__"],Gn=rf.toString,kt=Vr.hasOwnProperty,nf=0,Rs=function(){var C=/[^.]+$/.exec(Un&&Un.keys&&Un.keys.IE_PROTO||"");return C?"Symbol(src)_1."+C:""}(),Bn=Vr.toString,of=Gn.call(Nt),sf=jt._,af=Yi("^"+Gn.call(kt).replace(zi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Hn=ps?ot.Buffer:B,Tr=ot.Symbol,Wn=ot.Uint8Array,Fs=Hn?Hn.allocUnsafe:B,Dn=Es(Nt.getPrototypeOf,Nt),Os=Nt.create,Ls=Vr.propertyIsEnumerable,Xn=$n.splice,ks=Tr?Tr.isConcatSpreadable:B,cn=Tr?Tr.iterator:B,Er=Tr?Tr.toStringTag:B,Vn=function(){try{var C=Lr(Nt,"defineProperty");return C({},"",{}),C}catch{}}(),lf=ot.clearTimeout!==jt.clearTimeout&&ot.clearTimeout,uf=dt&&dt.now!==jt.Date.now&&dt.now,ff=ot.setTimeout!==jt.setTimeout&&ot.setTimeout,qn=qt.ceil,Yn=qt.floor,Ki=Nt.getOwnPropertySymbols,cf=Hn?Hn.isBuffer:B,Ns=ot.isFinite,hf=$n.join,df=Es(Nt.keys,Nt),Yt=qt.max,Jt=qt.min,pf=dt.now,gf=ot.parseInt,Ms=qt.random,mf=$n.reverse,Zi=Lr(ot,"DataView"),hn=Lr(ot,"Map"),ji=Lr(ot,"Promise"),qr=Lr(ot,"Set"),dn=Lr(ot,"WeakMap"),pn=Lr(Nt,"create"),Kn=dn&&new dn,Yr={},vf=kr(Zi),xf=kr(hn),_f=kr(ji),yf=kr(qr),Tf=kr(dn),Zn=Tr?Tr.prototype:B,gn=Zn?Zn.valueOf:B,$s=Zn?Zn.toString:B;function q(C){if(Wt(C)&&!yt(C)&&!(C instanceof Pt)){if(C instanceof De)return C;if(kt.call(C,"__wrapped__"))return Ua(C)}return new De(C)}var Kr=function(){function C(){}return function(I){if(!Gt(I))return{};if(Os)return Os(I);C.prototype=I;var E=new C;return C.prototype=B,E}}();function jn(){}function De(C,I){this.__wrapped__=C,this.__actions__=[],this.__chain__=!!I,this.__index__=0,this.__values__=B}q.templateSettings={escape:Ll,evaluate:kl,interpolate:qo,variable:"",imports:{_:q}},q.prototype=jn.prototype,q.prototype.constructor=q,De.prototype=Kr(jn.prototype),De.prototype.constructor=De;function Pt(C){this.__wrapped__=C,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Oe,this.__views__=[]}function Cf(){var C=new Pt(this.__wrapped__);return C.__actions__=Ae(this.__actions__),C.__dir__=this.__dir__,C.__filtered__=this.__filtered__,C.__iteratees__=Ae(this.__iteratees__),C.__takeCount__=this.__takeCount__,C.__views__=Ae(this.__views__),C}function wf(){if(this.__filtered__){var C=new Pt(this);C.__dir__=-1,C.__filtered__=!0}else C=this.clone(),C.__dir__*=-1;return C}function bf(){var C=this.__wrapped__.value(),I=this.__dir__,E=yt(C),H=I<0,X=E?C.length:0,Y=Nc(0,X,this.__views__),j=Y.start,tt=Y.end,rt=tt-j,st=H?tt:j-1,at=this.__iteratees__,ut=at.length,ft=0,pt=Jt(rt,this.__takeCount__);if(!E||!H&&X==rt&&pt==rt)return la(C,this.__actions__);var vt=[];t:for(;rt--&&ft<pt;){st+=I;for(var wt=-1,xt=C[st];++wt<ut;){var At=at[wt],It=At.iteratee,$e=At.type,Se=It(xt);if($e==rr)xt=Se;else if(!Se){if($e==_e)continue t;break t}}vt[ft++]=xt}return vt}Pt.prototype=Kr(jn.prototype),Pt.prototype.constructor=Pt;function zr(C){var I=-1,E=C==null?0:C.length;for(this.clear();++I<E;){var H=C[I];this.set(H[0],H[1])}}function Sf(){this.__data__=pn?pn(null):{},this.size=0}function Af(C){var I=this.has(C)&&delete this.__data__[C];return this.size-=I?1:0,I}function Pf(C){var I=this.__data__;if(pn){var E=I[C];return E===lt?B:E}return kt.call(I,C)?I[C]:B}function If(C){var I=this.__data__;return pn?I[C]!==B:kt.call(I,C)}function Ef(C,I){var E=this.__data__;return this.size+=this.has(C)?0:1,E[C]=pn&&I===B?lt:I,this}zr.prototype.clear=Sf,zr.prototype.delete=Af,zr.prototype.get=Pf,zr.prototype.has=If,zr.prototype.set=Ef;function ar(C){var I=-1,E=C==null?0:C.length;for(this.clear();++I<E;){var H=C[I];this.set(H[0],H[1])}}function zf(){this.__data__=[],this.size=0}function Rf(C){var I=this.__data__,E=Qn(I,C);if(E<0)return!1;var H=I.length-1;return E==H?I.pop():Xn.call(I,E,1),--this.size,!0}function Ff(C){var I=this.__data__,E=Qn(I,C);return E<0?B:I[E][1]}function Of(C){return Qn(this.__data__,C)>-1}function Lf(C,I){var E=this.__data__,H=Qn(E,C);return H<0?(++this.size,E.push([C,I])):E[H][1]=I,this}ar.prototype.clear=zf,ar.prototype.delete=Rf,ar.prototype.get=Ff,ar.prototype.has=Of,ar.prototype.set=Lf;function lr(C){var I=-1,E=C==null?0:C.length;for(this.clear();++I<E;){var H=C[I];this.set(H[0],H[1])}}function kf(){this.size=0,this.__data__={hash:new zr,map:new(hn||ar),string:new zr}}function Nf(C){var I=fi(this,C).delete(C);return this.size-=I?1:0,I}function Mf(C){return fi(this,C).get(C)}function $f(C){return fi(this,C).has(C)}function Uf(C,I){var E=fi(this,C),H=E.size;return E.set(C,I),this.size+=E.size==H?0:1,this}lr.prototype.clear=kf,lr.prototype.delete=Nf,lr.prototype.get=Mf,lr.prototype.has=$f,lr.prototype.set=Uf;function Rr(C){var I=-1,E=C==null?0:C.length;for(this.__data__=new lr;++I<E;)this.add(C[I])}function Gf(C){return this.__data__.set(C,lt),this}function Bf(C){return this.__data__.has(C)}Rr.prototype.add=Rr.prototype.push=Gf,Rr.prototype.has=Bf;function Je(C){var I=this.__data__=new ar(C);this.size=I.size}function Hf(){this.__data__=new ar,this.size=0}function Wf(C){var I=this.__data__,E=I.delete(C);return this.size=I.size,E}function Df(C){return this.__data__.get(C)}function Xf(C){return this.__data__.has(C)}function Vf(C,I){var E=this.__data__;if(E instanceof ar){var H=E.__data__;if(!hn||H.length<K-1)return H.push([C,I]),this.size=++E.size,this;E=this.__data__=new lr(H)}return E.set(C,I),this.size=E.size,this}Je.prototype.clear=Hf,Je.prototype.delete=Wf,Je.prototype.get=Df,Je.prototype.has=Xf,Je.prototype.set=Vf;function Us(C,I){var E=yt(C),H=!E&&Nr(C),X=!E&&!H&&Ar(C),Y=!E&&!H&&!X&&Jr(C),j=E||H||X||Y,tt=j?Xi(C.length,ef):[],rt=tt.length;for(var st in C)(I||kt.call(C,st))&&!(j&&(st=="length"||X&&(st=="offset"||st=="parent")||Y&&(st=="buffer"||st=="byteLength"||st=="byteOffset")||hr(st,rt)))&&tt.push(st);return tt}function Gs(C){var I=C.length;return I?C[lo(0,I-1)]:B}function qf(C,I){return ci(Ae(C),Fr(I,0,C.length))}function Yf(C){return ci(Ae(C))}function Qi(C,I,E){(E!==B&&!tr(C[I],E)||E===B&&!(I in C))&&ur(C,I,E)}function mn(C,I,E){var H=C[I];(!(kt.call(C,I)&&tr(H,E))||E===B&&!(I in C))&&ur(C,I,E)}function Qn(C,I){for(var E=C.length;E--;)if(tr(C[E][0],I))return E;return-1}function Kf(C,I,E,H){return Cr(C,function(X,Y,j){I(H,X,E(X),j)}),H}function Bs(C,I){return C&&ir(I,Kt(I),C)}function Zf(C,I){return C&&ir(I,Ie(I),C)}function ur(C,I,E){I=="__proto__"&&Vn?Vn(C,I,{configurable:!0,enumerable:!0,value:E,writable:!0}):C[I]=E}function Ji(C,I){for(var E=-1,H=I.length,X=nt(H),Y=C==null;++E<H;)X[E]=Y?B:Lo(C,I[E]);return X}function Fr(C,I,E){return C===C&&(E!==B&&(C=C<=E?C:E),I!==B&&(C=C>=I?C:I)),C}function Xe(C,I,E,H,X,Y){var j,tt=I&zt,rt=I&Et,st=I&Ot;if(E&&(j=X?E(C,H,X,Y):E(C)),j!==B)return j;if(!Gt(C))return C;var at=yt(C);if(at){if(j=$c(C),!tt)return Ae(C,j)}else{var ut=xe(C),ft=ut==zn||ut==Wo;if(Ar(C))return ca(C,tt);if(ut==sr||ut==Ur||ft&&!X){if(j=rt||ft?{}:za(C),!tt)return rt?Pc(C,Zf(j,C)):Ac(C,Bs(j,C))}else{if(!Mt[ut])return X?C:{};j=Uc(C,ut,tt)}}Y||(Y=new Je);var pt=Y.get(C);if(pt)return pt;Y.set(C,j),ol(C)?C.forEach(function(xt){j.add(Xe(xt,I,E,xt,C,Y))}):nl(C)&&C.forEach(function(xt,At){j.set(At,Xe(xt,I,E,At,C,Y))});var vt=st?rt?yo:_o:rt?Ie:Kt,wt=at?B:vt(C);return He(wt||C,function(xt,At){wt&&(At=xt,xt=C[At]),mn(j,At,Xe(xt,I,E,At,C,Y))}),j}function jf(C){var I=Kt(C);return function(E){return Hs(E,C,I)}}function Hs(C,I,E){var H=E.length;if(C==null)return!H;for(C=Nt(C);H--;){var X=E[H],Y=I[X],j=C[X];if(j===B&&!(X in C)||!Y(j))return!1}return!0}function Ws(C,I,E){if(typeof C!="function")throw new We(J);return wn(function(){C.apply(B,E)},I)}function vn(C,I,E,H){var X=-1,Y=kn,j=!0,tt=C.length,rt=[],st=I.length;if(!tt)return rt;E&&(I=Ut(I,ke(E))),H?(Y=Ui,j=!1):I.length>=K&&(Y=fn,j=!1,I=new Rr(I));t:for(;++X<tt;){var at=C[X],ut=E==null?at:E(at);if(at=H||at!==0?at:0,j&&ut===ut){for(var ft=st;ft--;)if(I[ft]===ut)continue t;rt.push(at)}else Y(I,ut,H)||rt.push(at)}return rt}var Cr=ma(nr),Ds=ma(eo,!0);function Qf(C,I){var E=!0;return Cr(C,function(H,X,Y){return E=!!I(H,X,Y),E}),E}function Jn(C,I,E){for(var H=-1,X=C.length;++H<X;){var Y=C[H],j=I(Y);if(j!=null&&(tt===B?j===j&&!Me(j):E(j,tt)))var tt=j,rt=Y}return rt}function Jf(C,I,E,H){var X=C.length;for(E=Ct(E),E<0&&(E=-E>X?0:X+E),H=H===B||H>X?X:Ct(H),H<0&&(H+=X),H=E>H?0:al(H);E<H;)C[E++]=I;return C}function Xs(C,I){var E=[];return Cr(C,function(H,X,Y){I(H,X,Y)&&E.push(H)}),E}function Qt(C,I,E,H,X){var Y=-1,j=C.length;for(E||(E=Bc),X||(X=[]);++Y<j;){var tt=C[Y];I>0&&E(tt)?I>1?Qt(tt,I-1,E,H,X):_r(X,tt):H||(X[X.length]=tt)}return X}var to=va(),Vs=va(!0);function nr(C,I){return C&&to(C,I,Kt)}function eo(C,I){return C&&Vs(C,I,Kt)}function ti(C,I){return xr(I,function(E){return dr(C[E])})}function Or(C,I){I=br(I,C);for(var E=0,H=I.length;C!=null&&E<H;)C=C[or(I[E++])];return E&&E==H?C:B}function qs(C,I,E){var H=I(C);return yt(C)?H:_r(H,E(C))}function Te(C){return C==null?C===B?Pl:Sl:Er&&Er in Nt(C)?kc(C):Yc(C)}function ro(C,I){return C>I}function tc(C,I){return C!=null&&kt.call(C,I)}function ec(C,I){return C!=null&&I in Nt(C)}function rc(C,I,E){return C>=Jt(I,E)&&C<Yt(I,E)}function no(C,I,E){for(var H=E?Ui:kn,X=C[0].length,Y=C.length,j=Y,tt=nt(Y),rt=1/0,st=[];j--;){var at=C[j];j&&I&&(at=Ut(at,ke(I))),rt=Jt(at.length,rt),tt[j]=!E&&(I||X>=120&&at.length>=120)?new Rr(j&&at):B}at=C[0];var ut=-1,ft=tt[0];t:for(;++ut<X&&st.length<rt;){var pt=at[ut],vt=I?I(pt):pt;if(pt=E||pt!==0?pt:0,!(ft?fn(ft,vt):H(st,vt,E))){for(j=Y;--j;){var wt=tt[j];if(!(wt?fn(wt,vt):H(C[j],vt,E)))continue t}ft&&ft.push(vt),st.push(pt)}}return st}function nc(C,I,E,H){return nr(C,function(X,Y,j){I(H,E(X),Y,j)}),H}function xn(C,I,E){I=br(I,C),C=La(C,I);var H=C==null?C:C[or(qe(I))];return H==null?B:Le(H,C,E)}function Ys(C){return Wt(C)&&Te(C)==Ur}function ic(C){return Wt(C)&&Te(C)==un}function oc(C){return Wt(C)&&Te(C)==nn}function _n(C,I,E,H,X){return C===I?!0:C==null||I==null||!Wt(C)&&!Wt(I)?C!==C&&I!==I:sc(C,I,E,H,_n,X)}function sc(C,I,E,H,X,Y){var j=yt(C),tt=yt(I),rt=j?In:xe(C),st=tt?In:xe(I);rt=rt==Ur?sr:rt,st=st==Ur?sr:st;var at=rt==sr,ut=st==sr,ft=rt==st;if(ft&&Ar(C)){if(!Ar(I))return!1;j=!0,at=!1}if(ft&&!at)return Y||(Y=new Je),j||Jr(C)?Pa(C,I,E,H,X,Y):Oc(C,I,rt,E,H,X,Y);if(!(E&Vt)){var pt=at&&kt.call(C,"__wrapped__"),vt=ut&&kt.call(I,"__wrapped__");if(pt||vt){var wt=pt?C.value():C,xt=vt?I.value():I;return Y||(Y=new Je),X(wt,xt,E,H,Y)}}return ft?(Y||(Y=new Je),Lc(C,I,E,H,X,Y)):!1}function ac(C){return Wt(C)&&xe(C)==Ze}function io(C,I,E,H){var X=E.length,Y=X,j=!H;if(C==null)return!Y;for(C=Nt(C);X--;){var tt=E[X];if(j&&tt[2]?tt[1]!==C[tt[0]]:!(tt[0]in C))return!1}for(;++X<Y;){tt=E[X];var rt=tt[0],st=C[rt],at=tt[1];if(j&&tt[2]){if(st===B&&!(rt in C))return!1}else{var ut=new Je;if(H)var ft=H(st,at,rt,C,I,ut);if(!(ft===B?_n(at,st,Vt|Bt,H,ut):ft))return!1}}return!0}function Ks(C){if(!Gt(C)||Wc(C))return!1;var I=dr(C)?af:Zl;return I.test(kr(C))}function lc(C){return Wt(C)&&Te(C)==sn}function uc(C){return Wt(C)&&xe(C)==je}function fc(C){return Wt(C)&&vi(C.length)&&!!$t[Te(C)]}function Zs(C){return typeof C=="function"?C:C==null?Ee:typeof C=="object"?yt(C)?Js(C[0],C[1]):Qs(C):xl(C)}function oo(C){if(!Cn(C))return df(C);var I=[];for(var E in Nt(C))kt.call(C,E)&&E!="constructor"&&I.push(E);return I}function cc(C){if(!Gt(C))return qc(C);var I=Cn(C),E=[];for(var H in C)H=="constructor"&&(I||!kt.call(C,H))||E.push(H);return E}function so(C,I){return C<I}function js(C,I){var E=-1,H=Pe(C)?nt(C.length):[];return Cr(C,function(X,Y,j){H[++E]=I(X,Y,j)}),H}function Qs(C){var I=Co(C);return I.length==1&&I[0][2]?Fa(I[0][0],I[0][1]):function(E){return E===C||io(E,C,I)}}function Js(C,I){return bo(C)&&Ra(I)?Fa(or(C),I):function(E){var H=Lo(E,C);return H===B&&H===I?ko(E,C):_n(I,H,Vt|Bt)}}function ei(C,I,E,H,X){C!==I&&to(I,function(Y,j){if(X||(X=new Je),Gt(Y))hc(C,I,j,E,ei,H,X);else{var tt=H?H(Ao(C,j),Y,j+"",C,I,X):B;tt===B&&(tt=Y),Qi(C,j,tt)}},Ie)}function hc(C,I,E,H,X,Y,j){var tt=Ao(C,E),rt=Ao(I,E),st=j.get(rt);if(st){Qi(C,E,st);return}var at=Y?Y(tt,rt,E+"",C,I,j):B,ut=at===B;if(ut){var ft=yt(rt),pt=!ft&&Ar(rt),vt=!ft&&!pt&&Jr(rt);at=rt,ft||pt||vt?yt(tt)?at=tt:Dt(tt)?at=Ae(tt):pt?(ut=!1,at=ca(rt,!0)):vt?(ut=!1,at=ha(rt,!0)):at=[]:bn(rt)||Nr(rt)?(at=tt,Nr(tt)?at=ll(tt):(!Gt(tt)||dr(tt))&&(at=za(rt))):ut=!1}ut&&(j.set(rt,at),X(at,rt,H,Y,j),j.delete(rt)),Qi(C,E,at)}function ta(C,I){var E=C.length;if(E)return I+=I<0?E:0,hr(I,E)?C[I]:B}function ea(C,I,E){I.length?I=Ut(I,function(Y){return yt(Y)?function(j){return Or(j,Y.length===1?Y[0]:Y)}:Y}):I=[Ee];var H=-1;I=Ut(I,ke(mt()));var X=js(C,function(Y,j,tt){var rt=Ut(I,function(st){return st(Y)});return{criteria:rt,index:++H,value:Y}});return $u(X,function(Y,j){return Sc(Y,j,E)})}function dc(C,I){return ra(C,I,function(E,H){return ko(C,H)})}function ra(C,I,E){for(var H=-1,X=I.length,Y={};++H<X;){var j=I[H],tt=Or(C,j);E(tt,j)&&yn(Y,br(j,C),tt)}return Y}function pc(C){return function(I){return Or(I,C)}}function ao(C,I,E,H){var X=H?Mu:Hr,Y=-1,j=I.length,tt=C;for(C===I&&(I=Ae(I)),E&&(tt=Ut(C,ke(E)));++Y<j;)for(var rt=0,st=I[Y],at=E?E(st):st;(rt=X(tt,at,rt,H))>-1;)tt!==C&&Xn.call(tt,rt,1),Xn.call(C,rt,1);return C}function na(C,I){for(var E=C?I.length:0,H=E-1;E--;){var X=I[E];if(E==H||X!==Y){var Y=X;hr(X)?Xn.call(C,X,1):co(C,X)}}return C}function lo(C,I){return C+Yn(Ms()*(I-C+1))}function gc(C,I,E,H){for(var X=-1,Y=Yt(qn((I-C)/(E||1)),0),j=nt(Y);Y--;)j[H?Y:++X]=C,C+=E;return j}function uo(C,I){var E="";if(!C||I<1||I>St)return E;do I%2&&(E+=C),I=Yn(I/2),I&&(C+=C);while(I);return E}function bt(C,I){return Po(Oa(C,I,Ee),C+"")}function mc(C){return Gs(tn(C))}function vc(C,I){var E=tn(C);return ci(E,Fr(I,0,E.length))}function yn(C,I,E,H){if(!Gt(C))return C;I=br(I,C);for(var X=-1,Y=I.length,j=Y-1,tt=C;tt!=null&&++X<Y;){var rt=or(I[X]),st=E;if(rt==="__proto__"||rt==="constructor"||rt==="prototype")return C;if(X!=j){var at=tt[rt];st=H?H(at,rt,tt):B,st===B&&(st=Gt(at)?at:hr(I[X+1])?[]:{})}mn(tt,rt,st),tt=tt[rt]}return C}var ia=Kn?function(C,I){return Kn.set(C,I),C}:Ee,xc=Vn?function(C,I){return Vn(C,"toString",{configurable:!0,enumerable:!1,value:Mo(I),writable:!0})}:Ee;function _c(C){return ci(tn(C))}function Ve(C,I,E){var H=-1,X=C.length;I<0&&(I=-I>X?0:X+I),E=E>X?X:E,E<0&&(E+=X),X=I>E?0:E-I>>>0,I>>>=0;for(var Y=nt(X);++H<X;)Y[H]=C[H+I];return Y}function yc(C,I){var E;return Cr(C,function(H,X,Y){return E=I(H,X,Y),!E}),!!E}function ri(C,I,E){var H=0,X=C==null?H:C.length;if(typeof I=="number"&&I===I&&X<=Tl){for(;H<X;){var Y=H+X>>>1,j=C[Y];j!==null&&!Me(j)&&(E?j<=I:j<I)?H=Y+1:X=Y}return X}return fo(C,I,Ee,E)}function fo(C,I,E,H){var X=0,Y=C==null?0:C.length;if(Y===0)return 0;I=E(I);for(var j=I!==I,tt=I===null,rt=Me(I),st=I===B;X<Y;){var at=Yn((X+Y)/2),ut=E(C[at]),ft=ut!==B,pt=ut===null,vt=ut===ut,wt=Me(ut);if(j)var xt=H||vt;else st?xt=vt&&(H||ft):tt?xt=vt&&ft&&(H||!pt):rt?xt=vt&&ft&&!pt&&(H||!wt):pt||wt?xt=!1:xt=H?ut<=I:ut<I;xt?X=at+1:Y=at}return Jt(Y,yl)}function oa(C,I){for(var E=-1,H=C.length,X=0,Y=[];++E<H;){var j=C[E],tt=I?I(j):j;if(!E||!tr(tt,rt)){var rt=tt;Y[X++]=j===0?0:j}}return Y}function sa(C){return typeof C=="number"?C:Me(C)?Fe:+C}function Ne(C){if(typeof C=="string")return C;if(yt(C))return Ut(C,Ne)+"";if(Me(C))return $s?$s.call(C):"";var I=C+"";return I=="0"&&1/C==-gt?"-0":I}function wr(C,I,E){var H=-1,X=kn,Y=C.length,j=!0,tt=[],rt=tt;if(E)j=!1,X=Ui;else if(Y>=K){var st=I?null:Rc(C);if(st)return Mn(st);j=!1,X=fn,rt=new Rr}else rt=I?[]:tt;t:for(;++H<Y;){var at=C[H],ut=I?I(at):at;if(at=E||at!==0?at:0,j&&ut===ut){for(var ft=rt.length;ft--;)if(rt[ft]===ut)continue t;I&&rt.push(ut),tt.push(at)}else X(rt,ut,E)||(rt!==tt&&rt.push(ut),tt.push(at))}return tt}function co(C,I){return I=br(I,C),C=La(C,I),C==null||delete C[or(qe(I))]}function aa(C,I,E,H){return yn(C,I,E(Or(C,I)),H)}function ni(C,I,E,H){for(var X=C.length,Y=H?X:-1;(H?Y--:++Y<X)&&I(C[Y],Y,C););return E?Ve(C,H?0:Y,H?Y+1:X):Ve(C,H?Y+1:0,H?X:Y)}function la(C,I){var E=C;return E instanceof Pt&&(E=E.value()),Gi(I,function(H,X){return X.func.apply(X.thisArg,_r([H],X.args))},E)}function ho(C,I,E){var H=C.length;if(H<2)return H?wr(C[0]):[];for(var X=-1,Y=nt(H);++X<H;)for(var j=C[X],tt=-1;++tt<H;)tt!=X&&(Y[X]=vn(Y[X]||j,C[tt],I,E));return wr(Qt(Y,1),I,E)}function ua(C,I,E){for(var H=-1,X=C.length,Y=I.length,j={};++H<X;){var tt=H<Y?I[H]:B;E(j,C[H],tt)}return j}function po(C){return Dt(C)?C:[]}function go(C){return typeof C=="function"?C:Ee}function br(C,I){return yt(C)?C:bo(C,I)?[C]:$a(Lt(C))}var Tc=bt;function Sr(C,I,E){var H=C.length;return E=E===B?H:E,!I&&E>=H?C:Ve(C,I,E)}var fa=lf||function(C){return jt.clearTimeout(C)};function ca(C,I){if(I)return C.slice();var E=C.length,H=Fs?Fs(E):new C.constructor(E);return C.copy(H),H}function mo(C){var I=new C.constructor(C.byteLength);return new Wn(I).set(new Wn(C)),I}function Cc(C,I){var E=I?mo(C.buffer):C.buffer;return new C.constructor(E,C.byteOffset,C.byteLength)}function wc(C){var I=new C.constructor(C.source,Yo.exec(C));return I.lastIndex=C.lastIndex,I}function bc(C){return gn?Nt(gn.call(C)):{}}function ha(C,I){var E=I?mo(C.buffer):C.buffer;return new C.constructor(E,C.byteOffset,C.length)}function da(C,I){if(C!==I){var E=C!==B,H=C===null,X=C===C,Y=Me(C),j=I!==B,tt=I===null,rt=I===I,st=Me(I);if(!tt&&!st&&!Y&&C>I||Y&&j&&rt&&!tt&&!st||H&&j&&rt||!E&&rt||!X)return 1;if(!H&&!Y&&!st&&C<I||st&&E&&X&&!H&&!Y||tt&&E&&X||!j&&X||!rt)return-1}return 0}function Sc(C,I,E){for(var H=-1,X=C.criteria,Y=I.criteria,j=X.length,tt=E.length;++H<j;){var rt=da(X[H],Y[H]);if(rt){if(H>=tt)return rt;var st=E[H];return rt*(st=="desc"?-1:1)}}return C.index-I.index}function pa(C,I,E,H){for(var X=-1,Y=C.length,j=E.length,tt=-1,rt=I.length,st=Yt(Y-j,0),at=nt(rt+st),ut=!H;++tt<rt;)at[tt]=I[tt];for(;++X<j;)(ut||X<Y)&&(at[E[X]]=C[X]);for(;st--;)at[tt++]=C[X++];return at}function ga(C,I,E,H){for(var X=-1,Y=C.length,j=-1,tt=E.length,rt=-1,st=I.length,at=Yt(Y-tt,0),ut=nt(at+st),ft=!H;++X<at;)ut[X]=C[X];for(var pt=X;++rt<st;)ut[pt+rt]=I[rt];for(;++j<tt;)(ft||X<Y)&&(ut[pt+E[j]]=C[X++]);return ut}function Ae(C,I){var E=-1,H=C.length;for(I||(I=nt(H));++E<H;)I[E]=C[E];return I}function ir(C,I,E,H){var X=!E;E||(E={});for(var Y=-1,j=I.length;++Y<j;){var tt=I[Y],rt=H?H(E[tt],C[tt],tt,E,C):B;rt===B&&(rt=C[tt]),X?ur(E,tt,rt):mn(E,tt,rt)}return E}function Ac(C,I){return ir(C,wo(C),I)}function Pc(C,I){return ir(C,Ia(C),I)}function ii(C,I){return function(E,H){var X=yt(E)?Ru:Kf,Y=I?I():{};return X(E,C,mt(H,2),Y)}}function Zr(C){return bt(function(I,E){var H=-1,X=E.length,Y=X>1?E[X-1]:B,j=X>2?E[2]:B;for(Y=C.length>3&&typeof Y=="function"?(X--,Y):B,j&&we(E[0],E[1],j)&&(Y=X<3?B:Y,X=1),I=Nt(I);++H<X;){var tt=E[H];tt&&C(I,tt,H,Y)}return I})}function ma(C,I){return function(E,H){if(E==null)return E;if(!Pe(E))return C(E,H);for(var X=E.length,Y=I?X:-1,j=Nt(E);(I?Y--:++Y<X)&&H(j[Y],Y,j)!==!1;);return E}}function va(C){return function(I,E,H){for(var X=-1,Y=Nt(I),j=H(I),tt=j.length;tt--;){var rt=j[C?tt:++X];if(E(Y[rt],rt,Y)===!1)break}return I}}function Ic(C,I,E){var H=I&Rt,X=Tn(C);function Y(){var j=this&&this!==jt&&this instanceof Y?X:C;return j.apply(H?E:this,arguments)}return Y}function xa(C){return function(I){I=Lt(I);var E=Wr(I)?Qe(I):B,H=E?E[0]:I.charAt(0),X=E?Sr(E,1).join(""):I.slice(1);return H[C]()+X}}function jr(C){return function(I){return Gi(ml(gl(I).replace(vu,"")),C,"")}}function Tn(C){return function(){var I=arguments;switch(I.length){case 0:return new C;case 1:return new C(I[0]);case 2:return new C(I[0],I[1]);case 3:return new C(I[0],I[1],I[2]);case 4:return new C(I[0],I[1],I[2],I[3]);case 5:return new C(I[0],I[1],I[2],I[3],I[4]);case 6:return new C(I[0],I[1],I[2],I[3],I[4],I[5]);case 7:return new C(I[0],I[1],I[2],I[3],I[4],I[5],I[6])}var E=Kr(C.prototype),H=C.apply(E,I);return Gt(H)?H:E}}function Ec(C,I,E){var H=Tn(C);function X(){for(var Y=arguments.length,j=nt(Y),tt=Y,rt=Qr(X);tt--;)j[tt]=arguments[tt];var st=Y<3&&j[0]!==rt&&j[Y-1]!==rt?[]:yr(j,rt);if(Y-=st.length,Y<E)return wa(C,I,oi,X.placeholder,B,j,st,B,B,E-Y);var at=this&&this!==jt&&this instanceof X?H:C;return Le(at,this,j)}return X}function _a(C){return function(I,E,H){var X=Nt(I);if(!Pe(I)){var Y=mt(E,3);I=Kt(I),E=function(tt){return Y(X[tt],tt,X)}}var j=C(I,E,H);return j>-1?X[Y?I[j]:j]:B}}function ya(C){return cr(function(I){var E=I.length,H=E,X=De.prototype.thru;for(C&&I.reverse();H--;){var Y=I[H];if(typeof Y!="function")throw new We(J);if(X&&!j&&ui(Y)=="wrapper")var j=new De([],!0)}for(H=j?H:E;++H<E;){Y=I[H];var tt=ui(Y),rt=tt=="wrapper"?To(Y):B;rt&&So(rt[0])&&rt[1]==(Ke|Zt|Ge|Pr)&&!rt[4].length&&rt[9]==1?j=j[ui(rt[0])].apply(j,rt[3]):j=Y.length==1&&So(Y)?j[tt]():j.thru(Y)}return function(){var st=arguments,at=st[0];if(j&&st.length==1&&yt(at))return j.plant(at).value();for(var ut=0,ft=E?I[ut].apply(this,st):at;++ut<E;)ft=I[ut].call(this,ft);return ft}})}function oi(C,I,E,H,X,Y,j,tt,rt,st){var at=I&Ke,ut=I&Rt,ft=I&Re,pt=I&(Zt|mr),vt=I&en,wt=ft?B:Tn(C);function xt(){for(var At=arguments.length,It=nt(At),$e=At;$e--;)It[$e]=arguments[$e];if(pt)var Se=Qr(xt),Ue=Gu(It,Se);if(H&&(It=pa(It,H,X,pt)),Y&&(It=ga(It,Y,j,pt)),At-=Ue,pt&&At<st){var Xt=yr(It,Se);return wa(C,I,oi,xt.placeholder,E,It,Xt,tt,rt,st-At)}var er=ut?E:this,gr=ft?er[C]:C;return At=It.length,tt?It=Kc(It,tt):vt&&At>1&&It.reverse(),at&&rt<At&&(It.length=rt),this&&this!==jt&&this instanceof xt&&(gr=wt||Tn(gr)),gr.apply(er,It)}return xt}function Ta(C,I){return function(E,H){return nc(E,C,I(H),{})}}function si(C,I){return function(E,H){var X;if(E===B&&H===B)return I;if(E!==B&&(X=E),H!==B){if(X===B)return H;typeof E=="string"||typeof H=="string"?(E=Ne(E),H=Ne(H)):(E=sa(E),H=sa(H)),X=C(E,H)}return X}}function vo(C){return cr(function(I){return I=Ut(I,ke(mt())),bt(function(E){var H=this;return C(I,function(X){return Le(X,H,E)})})})}function ai(C,I){I=I===B?" ":Ne(I);var E=I.length;if(E<2)return E?uo(I,C):I;var H=uo(I,qn(C/Dr(I)));return Wr(I)?Sr(Qe(H),0,C).join(""):H.slice(0,C)}function zc(C,I,E,H){var X=I&Rt,Y=Tn(C);function j(){for(var tt=-1,rt=arguments.length,st=-1,at=H.length,ut=nt(at+rt),ft=this&&this!==jt&&this instanceof j?Y:C;++st<at;)ut[st]=H[st];for(;rt--;)ut[st++]=arguments[++tt];return Le(ft,X?E:this,ut)}return j}function Ca(C){return function(I,E,H){return H&&typeof H!="number"&&we(I,E,H)&&(E=H=B),I=pr(I),E===B?(E=I,I=0):E=pr(E),H=H===B?I<E?1:-1:pr(H),gc(I,E,H,C)}}function li(C){return function(I,E){return typeof I=="string"&&typeof E=="string"||(I=Ye(I),E=Ye(E)),C(I,E)}}function wa(C,I,E,H,X,Y,j,tt,rt,st){var at=I&Zt,ut=at?j:B,ft=at?B:j,pt=at?Y:B,vt=at?B:Y;I|=at?Ge:vr,I&=~(at?vr:Ge),I&Mr||(I&=~(Rt|Re));var wt=[C,I,X,pt,ut,vt,ft,tt,rt,st],xt=E.apply(B,wt);return So(C)&&ka(xt,wt),xt.placeholder=H,Na(xt,C,I)}function xo(C){var I=qt[C];return function(E,H){if(E=Ye(E),H=H==null?0:Jt(Ct(H),292),H&&Ns(E)){var X=(Lt(E)+"e").split("e"),Y=I(X[0]+"e"+(+X[1]+H));return X=(Lt(Y)+"e").split("e"),+(X[0]+"e"+(+X[1]-H))}return I(E)}}var Rc=qr&&1/Mn(new qr([,-0]))[1]==gt?function(C){return new qr(C)}:Go;function ba(C){return function(I){var E=xe(I);return E==Ze?qi(I):E==je?qu(I):Uu(I,C(I))}}function fr(C,I,E,H,X,Y,j,tt){var rt=I&Re;if(!rt&&typeof C!="function")throw new We(J);var st=H?H.length:0;if(st||(I&=~(Ge|vr),H=X=B),j=j===B?j:Yt(Ct(j),0),tt=tt===B?tt:Ct(tt),st-=X?X.length:0,I&vr){var at=H,ut=X;H=X=B}var ft=rt?B:To(C),pt=[C,I,E,H,X,at,ut,Y,j,tt];if(ft&&Vc(pt,ft),C=pt[0],I=pt[1],E=pt[2],H=pt[3],X=pt[4],tt=pt[9]=pt[9]===B?rt?0:C.length:Yt(pt[9]-st,0),!tt&&I&(Zt|mr)&&(I&=~(Zt|mr)),!I||I==Rt)var vt=Ic(C,I,E);else I==Zt||I==mr?vt=Ec(C,I,tt):(I==Ge||I==(Rt|Ge))&&!X.length?vt=zc(C,I,E,H):vt=oi.apply(B,pt);var wt=ft?ia:ka;return Na(wt(vt,pt),C,I)}function Sa(C,I,E,H){return C===B||tr(C,Vr[E])&&!kt.call(H,E)?I:C}function Aa(C,I,E,H,X,Y){return Gt(C)&&Gt(I)&&(Y.set(I,C),ei(C,I,B,Aa,Y),Y.delete(I)),C}function Fc(C){return bn(C)?B:C}function Pa(C,I,E,H,X,Y){var j=E&Vt,tt=C.length,rt=I.length;if(tt!=rt&&!(j&&rt>tt))return!1;var st=Y.get(C),at=Y.get(I);if(st&&at)return st==I&&at==C;var ut=-1,ft=!0,pt=E&Bt?new Rr:B;for(Y.set(C,I),Y.set(I,C);++ut<tt;){var vt=C[ut],wt=I[ut];if(H)var xt=j?H(wt,vt,ut,I,C,Y):H(vt,wt,ut,C,I,Y);if(xt!==B){if(xt)continue;ft=!1;break}if(pt){if(!Bi(I,function(At,It){if(!fn(pt,It)&&(vt===At||X(vt,At,E,H,Y)))return pt.push(It)})){ft=!1;break}}else if(!(vt===wt||X(vt,wt,E,H,Y))){ft=!1;break}}return Y.delete(C),Y.delete(I),ft}function Oc(C,I,E,H,X,Y,j){switch(E){case Gr:if(C.byteLength!=I.byteLength||C.byteOffset!=I.byteOffset)return!1;C=C.buffer,I=I.buffer;case un:return!(C.byteLength!=I.byteLength||!Y(new Wn(C),new Wn(I)));case rn:case nn:case on:return tr(+C,+I);case En:return C.name==I.name&&C.message==I.message;case sn:case an:return C==I+"";case Ze:var tt=qi;case je:var rt=H&Vt;if(tt||(tt=Mn),C.size!=I.size&&!rt)return!1;var st=j.get(C);if(st)return st==I;H|=Bt,j.set(C,I);var at=Pa(tt(C),tt(I),H,X,Y,j);return j.delete(C),at;case Rn:if(gn)return gn.call(C)==gn.call(I)}return!1}function Lc(C,I,E,H,X,Y){var j=E&Vt,tt=_o(C),rt=tt.length,st=_o(I),at=st.length;if(rt!=at&&!j)return!1;for(var ut=rt;ut--;){var ft=tt[ut];if(!(j?ft in I:kt.call(I,ft)))return!1}var pt=Y.get(C),vt=Y.get(I);if(pt&&vt)return pt==I&&vt==C;var wt=!0;Y.set(C,I),Y.set(I,C);for(var xt=j;++ut<rt;){ft=tt[ut];var At=C[ft],It=I[ft];if(H)var $e=j?H(It,At,ft,I,C,Y):H(At,It,ft,C,I,Y);if(!($e===B?At===It||X(At,It,E,H,Y):$e)){wt=!1;break}xt||(xt=ft=="constructor")}if(wt&&!xt){var Se=C.constructor,Ue=I.constructor;Se!=Ue&&"constructor"in C&&"constructor"in I&&!(typeof Se=="function"&&Se instanceof Se&&typeof Ue=="function"&&Ue instanceof Ue)&&(wt=!1)}return Y.delete(C),Y.delete(I),wt}function cr(C){return Po(Oa(C,B,Ha),C+"")}function _o(C){return qs(C,Kt,wo)}function yo(C){return qs(C,Ie,Ia)}var To=Kn?function(C){return Kn.get(C)}:Go;function ui(C){for(var I=C.name+"",E=Yr[I],H=kt.call(Yr,I)?E.length:0;H--;){var X=E[H],Y=X.func;if(Y==null||Y==C)return X.name}return I}function Qr(C){var I=kt.call(q,"placeholder")?q:C;return I.placeholder}function mt(){var C=q.iteratee||$o;return C=C===$o?Zs:C,arguments.length?C(arguments[0],arguments[1]):C}function fi(C,I){var E=C.__data__;return Hc(I)?E[typeof I=="string"?"string":"hash"]:E.map}function Co(C){for(var I=Kt(C),E=I.length;E--;){var H=I[E],X=C[H];I[E]=[H,X,Ra(X)]}return I}function Lr(C,I){var E=Du(C,I);return Ks(E)?E:B}function kc(C){var I=kt.call(C,Er),E=C[Er];try{C[Er]=B;var H=!0}catch{}var X=Bn.call(C);return H&&(I?C[Er]=E:delete C[Er]),X}var wo=Ki?function(C){return C==null?[]:(C=Nt(C),xr(Ki(C),function(I){return Ls.call(C,I)}))}:Bo,Ia=Ki?function(C){for(var I=[];C;)_r(I,wo(C)),C=Dn(C);return I}:Bo,xe=Te;(Zi&&xe(new Zi(new ArrayBuffer(1)))!=Gr||hn&&xe(new hn)!=Ze||ji&&xe(ji.resolve())!=Do||qr&&xe(new qr)!=je||dn&&xe(new dn)!=ln)&&(xe=function(C){var I=Te(C),E=I==sr?C.constructor:B,H=E?kr(E):"";if(H)switch(H){case vf:return Gr;case xf:return Ze;case _f:return Do;case yf:return je;case Tf:return ln}return I});function Nc(C,I,E){for(var H=-1,X=E.length;++H<X;){var Y=E[H],j=Y.size;switch(Y.type){case"drop":C+=j;break;case"dropRight":I-=j;break;case"take":I=Jt(I,C+j);break;case"takeRight":C=Yt(C,I-j);break}}return{start:C,end:I}}function Mc(C){var I=C.match(Hl);return I?I[1].split(Wl):[]}function Ea(C,I,E){I=br(I,C);for(var H=-1,X=I.length,Y=!1;++H<X;){var j=or(I[H]);if(!(Y=C!=null&&E(C,j)))break;C=C[j]}return Y||++H!=X?Y:(X=C==null?0:C.length,!!X&&vi(X)&&hr(j,X)&&(yt(C)||Nr(C)))}function $c(C){var I=C.length,E=new C.constructor(I);return I&&typeof C[0]=="string"&&kt.call(C,"index")&&(E.index=C.index,E.input=C.input),E}function za(C){return typeof C.constructor=="function"&&!Cn(C)?Kr(Dn(C)):{}}function Uc(C,I,E){var H=C.constructor;switch(I){case un:return mo(C);case rn:case nn:return new H(+C);case Gr:return Cc(C,E);case Ti:case Ci:case wi:case bi:case Si:case Ai:case Pi:case Ii:case Ei:return ha(C,E);case Ze:return new H;case on:case an:return new H(C);case sn:return wc(C);case je:return new H;case Rn:return bc(C)}}function Gc(C,I){var E=I.length;if(!E)return C;var H=E-1;return I[H]=(E>1?"& ":"")+I[H],I=I.join(E>2?", ":" "),C.replace(Bl,`{
/* [wrapped with `+I+`] */
`)}function Bc(C){return yt(C)||Nr(C)||!!(ks&&C&&C[ks])}function hr(C,I){var E=typeof C;return I=I??St,!!I&&(E=="number"||E!="symbol"&&Ql.test(C))&&C>-1&&C%1==0&&C<I}function we(C,I,E){if(!Gt(E))return!1;var H=typeof I;return(H=="number"?Pe(E)&&hr(I,E.length):H=="string"&&I in E)?tr(E[I],C):!1}function bo(C,I){if(yt(C))return!1;var E=typeof C;return E=="number"||E=="symbol"||E=="boolean"||C==null||Me(C)?!0:Ml.test(C)||!Nl.test(C)||I!=null&&C in Nt(I)}function Hc(C){var I=typeof C;return I=="string"||I=="number"||I=="symbol"||I=="boolean"?C!=="__proto__":C===null}function So(C){var I=ui(C),E=q[I];if(typeof E!="function"||!(I in Pt.prototype))return!1;if(C===E)return!0;var H=To(E);return!!H&&C===H[0]}function Wc(C){return!!Rs&&Rs in C}var Dc=Un?dr:Ho;function Cn(C){var I=C&&C.constructor,E=typeof I=="function"&&I.prototype||Vr;return C===E}function Ra(C){return C===C&&!Gt(C)}function Fa(C,I){return function(E){return E==null?!1:E[C]===I&&(I!==B||C in Nt(E))}}function Xc(C){var I=gi(C,function(H){return E.size===ht&&E.clear(),H}),E=I.cache;return I}function Vc(C,I){var E=C[1],H=I[1],X=E|H,Y=X<(Rt|Re|Ke),j=H==Ke&&E==Zt||H==Ke&&E==Pr&&C[7].length<=I[8]||H==(Ke|Pr)&&I[7].length<=I[8]&&E==Zt;if(!(Y||j))return C;H&Rt&&(C[2]=I[2],X|=E&Rt?0:Mr);var tt=I[3];if(tt){var rt=C[3];C[3]=rt?pa(rt,tt,I[4]):tt,C[4]=rt?yr(C[3],Tt):I[4]}return tt=I[5],tt&&(rt=C[5],C[5]=rt?ga(rt,tt,I[6]):tt,C[6]=rt?yr(C[5],Tt):I[6]),tt=I[7],tt&&(C[7]=tt),H&Ke&&(C[8]=C[8]==null?I[8]:Jt(C[8],I[8])),C[9]==null&&(C[9]=I[9]),C[0]=I[0],C[1]=X,C}function qc(C){var I=[];if(C!=null)for(var E in Nt(C))I.push(E);return I}function Yc(C){return Bn.call(C)}function Oa(C,I,E){return I=Yt(I===B?C.length-1:I,0),function(){for(var H=arguments,X=-1,Y=Yt(H.length-I,0),j=nt(Y);++X<Y;)j[X]=H[I+X];X=-1;for(var tt=nt(I+1);++X<I;)tt[X]=H[X];return tt[I]=E(j),Le(C,this,tt)}}function La(C,I){return I.length<2?C:Or(C,Ve(I,0,-1))}function Kc(C,I){for(var E=C.length,H=Jt(I.length,E),X=Ae(C);H--;){var Y=I[H];C[H]=hr(Y,E)?X[Y]:B}return C}function Ao(C,I){if(!(I==="constructor"&&typeof C[I]=="function")&&I!="__proto__")return C[I]}var ka=Ma(ia),wn=ff||function(C,I){return jt.setTimeout(C,I)},Po=Ma(xc);function Na(C,I,E){var H=I+"";return Po(C,Gc(H,Zc(Mc(H),E)))}function Ma(C){var I=0,E=0;return function(){var H=pf(),X=An-(H-E);if(E=H,X>0){if(++I>=yi)return arguments[0]}else I=0;return C.apply(B,arguments)}}function ci(C,I){var E=-1,H=C.length,X=H-1;for(I=I===B?H:I;++E<I;){var Y=lo(E,X),j=C[Y];C[Y]=C[E],C[E]=j}return C.length=I,C}var $a=Xc(function(C){var I=[];return C.charCodeAt(0)===46&&I.push(""),C.replace($l,function(E,H,X,Y){I.push(X?Y.replace(Vl,"$1"):H||E)}),I});function or(C){if(typeof C=="string"||Me(C))return C;var I=C+"";return I=="0"&&1/C==-gt?"-0":I}function kr(C){if(C!=null){try{return Gn.call(C)}catch{}try{return C+""}catch{}}return""}function Zc(C,I){return He(Cl,function(E){var H="_."+E[0];I&E[1]&&!kn(C,H)&&C.push(H)}),C.sort()}function Ua(C){if(C instanceof Pt)return C.clone();var I=new De(C.__wrapped__,C.__chain__);return I.__actions__=Ae(C.__actions__),I.__index__=C.__index__,I.__values__=C.__values__,I}function jc(C,I,E){(E?we(C,I,E):I===B)?I=1:I=Yt(Ct(I),0);var H=C==null?0:C.length;if(!H||I<1)return[];for(var X=0,Y=0,j=nt(qn(H/I));X<H;)j[Y++]=Ve(C,X,X+=I);return j}function Qc(C){for(var I=-1,E=C==null?0:C.length,H=0,X=[];++I<E;){var Y=C[I];Y&&(X[H++]=Y)}return X}function Jc(){var C=arguments.length;if(!C)return[];for(var I=nt(C-1),E=arguments[0],H=C;H--;)I[H-1]=arguments[H];return _r(yt(E)?Ae(E):[E],Qt(I,1))}var th=bt(function(C,I){return Dt(C)?vn(C,Qt(I,1,Dt,!0)):[]}),eh=bt(function(C,I){var E=qe(I);return Dt(E)&&(E=B),Dt(C)?vn(C,Qt(I,1,Dt,!0),mt(E,2)):[]}),rh=bt(function(C,I){var E=qe(I);return Dt(E)&&(E=B),Dt(C)?vn(C,Qt(I,1,Dt,!0),B,E):[]});function nh(C,I,E){var H=C==null?0:C.length;return H?(I=E||I===B?1:Ct(I),Ve(C,I<0?0:I,H)):[]}function ih(C,I,E){var H=C==null?0:C.length;return H?(I=E||I===B?1:Ct(I),I=H-I,Ve(C,0,I<0?0:I)):[]}function oh(C,I){return C&&C.length?ni(C,mt(I,3),!0,!0):[]}function sh(C,I){return C&&C.length?ni(C,mt(I,3),!0):[]}function ah(C,I,E,H){var X=C==null?0:C.length;return X?(E&&typeof E!="number"&&we(C,I,E)&&(E=0,H=X),Jf(C,I,E,H)):[]}function Ga(C,I,E){var H=C==null?0:C.length;if(!H)return-1;var X=E==null?0:Ct(E);return X<0&&(X=Yt(H+X,0)),Nn(C,mt(I,3),X)}function Ba(C,I,E){var H=C==null?0:C.length;if(!H)return-1;var X=H-1;return E!==B&&(X=Ct(E),X=E<0?Yt(H+X,0):Jt(X,H-1)),Nn(C,mt(I,3),X,!0)}function Ha(C){var I=C==null?0:C.length;return I?Qt(C,1):[]}function lh(C){var I=C==null?0:C.length;return I?Qt(C,gt):[]}function uh(C,I){var E=C==null?0:C.length;return E?(I=I===B?1:Ct(I),Qt(C,I)):[]}function fh(C){for(var I=-1,E=C==null?0:C.length,H={};++I<E;){var X=C[I];H[X[0]]=X[1]}return H}function Wa(C){return C&&C.length?C[0]:B}function ch(C,I,E){var H=C==null?0:C.length;if(!H)return-1;var X=E==null?0:Ct(E);return X<0&&(X=Yt(H+X,0)),Hr(C,I,X)}function hh(C){var I=C==null?0:C.length;return I?Ve(C,0,-1):[]}var dh=bt(function(C){var I=Ut(C,po);return I.length&&I[0]===C[0]?no(I):[]}),ph=bt(function(C){var I=qe(C),E=Ut(C,po);return I===qe(E)?I=B:E.pop(),E.length&&E[0]===C[0]?no(E,mt(I,2)):[]}),gh=bt(function(C){var I=qe(C),E=Ut(C,po);return I=typeof I=="function"?I:B,I&&E.pop(),E.length&&E[0]===C[0]?no(E,B,I):[]});function mh(C,I){return C==null?"":hf.call(C,I)}function qe(C){var I=C==null?0:C.length;return I?C[I-1]:B}function vh(C,I,E){var H=C==null?0:C.length;if(!H)return-1;var X=H;return E!==B&&(X=Ct(E),X=X<0?Yt(H+X,0):Jt(X,H-1)),I===I?Ku(C,I,X):Nn(C,ws,X,!0)}function xh(C,I){return C&&C.length?ta(C,Ct(I)):B}var _h=bt(Da);function Da(C,I){return C&&C.length&&I&&I.length?ao(C,I):C}function yh(C,I,E){return C&&C.length&&I&&I.length?ao(C,I,mt(E,2)):C}function Th(C,I,E){return C&&C.length&&I&&I.length?ao(C,I,B,E):C}var Ch=cr(function(C,I){var E=C==null?0:C.length,H=Ji(C,I);return na(C,Ut(I,function(X){return hr(X,E)?+X:X}).sort(da)),H});function wh(C,I){var E=[];if(!(C&&C.length))return E;var H=-1,X=[],Y=C.length;for(I=mt(I,3);++H<Y;){var j=C[H];I(j,H,C)&&(E.push(j),X.push(H))}return na(C,X),E}function Io(C){return C==null?C:mf.call(C)}function bh(C,I,E){var H=C==null?0:C.length;return H?(E&&typeof E!="number"&&we(C,I,E)?(I=0,E=H):(I=I==null?0:Ct(I),E=E===B?H:Ct(E)),Ve(C,I,E)):[]}function Sh(C,I){return ri(C,I)}function Ah(C,I,E){return fo(C,I,mt(E,2))}function Ph(C,I){var E=C==null?0:C.length;if(E){var H=ri(C,I);if(H<E&&tr(C[H],I))return H}return-1}function Ih(C,I){return ri(C,I,!0)}function Eh(C,I,E){return fo(C,I,mt(E,2),!0)}function zh(C,I){var E=C==null?0:C.length;if(E){var H=ri(C,I,!0)-1;if(tr(C[H],I))return H}return-1}function Rh(C){return C&&C.length?oa(C):[]}function Fh(C,I){return C&&C.length?oa(C,mt(I,2)):[]}function Oh(C){var I=C==null?0:C.length;return I?Ve(C,1,I):[]}function Lh(C,I,E){return C&&C.length?(I=E||I===B?1:Ct(I),Ve(C,0,I<0?0:I)):[]}function kh(C,I,E){var H=C==null?0:C.length;return H?(I=E||I===B?1:Ct(I),I=H-I,Ve(C,I<0?0:I,H)):[]}function Nh(C,I){return C&&C.length?ni(C,mt(I,3),!1,!0):[]}function Mh(C,I){return C&&C.length?ni(C,mt(I,3)):[]}var $h=bt(function(C){return wr(Qt(C,1,Dt,!0))}),Uh=bt(function(C){var I=qe(C);return Dt(I)&&(I=B),wr(Qt(C,1,Dt,!0),mt(I,2))}),Gh=bt(function(C){var I=qe(C);return I=typeof I=="function"?I:B,wr(Qt(C,1,Dt,!0),B,I)});function Bh(C){return C&&C.length?wr(C):[]}function Hh(C,I){return C&&C.length?wr(C,mt(I,2)):[]}function Wh(C,I){return I=typeof I=="function"?I:B,C&&C.length?wr(C,B,I):[]}function Eo(C){if(!(C&&C.length))return[];var I=0;return C=xr(C,function(E){if(Dt(E))return I=Yt(E.length,I),!0}),Xi(I,function(E){return Ut(C,Hi(E))})}function Xa(C,I){if(!(C&&C.length))return[];var E=Eo(C);return I==null?E:Ut(E,function(H){return Le(I,B,H)})}var Dh=bt(function(C,I){return Dt(C)?vn(C,I):[]}),Xh=bt(function(C){return ho(xr(C,Dt))}),Vh=bt(function(C){var I=qe(C);return Dt(I)&&(I=B),ho(xr(C,Dt),mt(I,2))}),qh=bt(function(C){var I=qe(C);return I=typeof I=="function"?I:B,ho(xr(C,Dt),B,I)}),Yh=bt(Eo);function Kh(C,I){return ua(C||[],I||[],mn)}function Zh(C,I){return ua(C||[],I||[],yn)}var jh=bt(function(C){var I=C.length,E=I>1?C[I-1]:B;return E=typeof E=="function"?(C.pop(),E):B,Xa(C,E)});function Va(C){var I=q(C);return I.__chain__=!0,I}function Qh(C,I){return I(C),C}function hi(C,I){return I(C)}var Jh=cr(function(C){var I=C.length,E=I?C[0]:0,H=this.__wrapped__,X=function(Y){return Ji(Y,C)};return I>1||this.__actions__.length||!(H instanceof Pt)||!hr(E)?this.thru(X):(H=H.slice(E,+E+(I?1:0)),H.__actions__.push({func:hi,args:[X],thisArg:B}),new De(H,this.__chain__).thru(function(Y){return I&&!Y.length&&Y.push(B),Y}))});function td(){return Va(this)}function ed(){return new De(this.value(),this.__chain__)}function rd(){this.__values__===B&&(this.__values__=sl(this.value()));var C=this.__index__>=this.__values__.length,I=C?B:this.__values__[this.__index__++];return{done:C,value:I}}function nd(){return this}function id(C){for(var I,E=this;E instanceof jn;){var H=Ua(E);H.__index__=0,H.__values__=B,I?X.__wrapped__=H:I=H;var X=H;E=E.__wrapped__}return X.__wrapped__=C,I}function od(){var C=this.__wrapped__;if(C instanceof Pt){var I=C;return this.__actions__.length&&(I=new Pt(this)),I=I.reverse(),I.__actions__.push({func:hi,args:[Io],thisArg:B}),new De(I,this.__chain__)}return this.thru(Io)}function sd(){return la(this.__wrapped__,this.__actions__)}var ad=ii(function(C,I,E){kt.call(C,E)?++C[E]:ur(C,E,1)});function ld(C,I,E){var H=yt(C)?Ts:Qf;return E&&we(C,I,E)&&(I=B),H(C,mt(I,3))}function ud(C,I){var E=yt(C)?xr:Xs;return E(C,mt(I,3))}var fd=_a(Ga),cd=_a(Ba);function hd(C,I){return Qt(di(C,I),1)}function dd(C,I){return Qt(di(C,I),gt)}function pd(C,I,E){return E=E===B?1:Ct(E),Qt(di(C,I),E)}function qa(C,I){var E=yt(C)?He:Cr;return E(C,mt(I,3))}function Ya(C,I){var E=yt(C)?Fu:Ds;return E(C,mt(I,3))}var gd=ii(function(C,I,E){kt.call(C,E)?C[E].push(I):ur(C,E,[I])});function md(C,I,E,H){C=Pe(C)?C:tn(C),E=E&&!H?Ct(E):0;var X=C.length;return E<0&&(E=Yt(X+E,0)),xi(C)?E<=X&&C.indexOf(I,E)>-1:!!X&&Hr(C,I,E)>-1}var vd=bt(function(C,I,E){var H=-1,X=typeof I=="function",Y=Pe(C)?nt(C.length):[];return Cr(C,function(j){Y[++H]=X?Le(I,j,E):xn(j,I,E)}),Y}),xd=ii(function(C,I,E){ur(C,E,I)});function di(C,I){var E=yt(C)?Ut:js;return E(C,mt(I,3))}function _d(C,I,E,H){return C==null?[]:(yt(I)||(I=I==null?[]:[I]),E=H?B:E,yt(E)||(E=E==null?[]:[E]),ea(C,I,E))}var yd=ii(function(C,I,E){C[E?0:1].push(I)},function(){return[[],[]]});function Td(C,I,E){var H=yt(C)?Gi:Ss,X=arguments.length<3;return H(C,mt(I,4),E,X,Cr)}function Cd(C,I,E){var H=yt(C)?Ou:Ss,X=arguments.length<3;return H(C,mt(I,4),E,X,Ds)}function wd(C,I){var E=yt(C)?xr:Xs;return E(C,mi(mt(I,3)))}function bd(C){var I=yt(C)?Gs:mc;return I(C)}function Sd(C,I,E){(E?we(C,I,E):I===B)?I=1:I=Ct(I);var H=yt(C)?qf:vc;return H(C,I)}function Ad(C){var I=yt(C)?Yf:_c;return I(C)}function Pd(C){if(C==null)return 0;if(Pe(C))return xi(C)?Dr(C):C.length;var I=xe(C);return I==Ze||I==je?C.size:oo(C).length}function Id(C,I,E){var H=yt(C)?Bi:yc;return E&&we(C,I,E)&&(I=B),H(C,mt(I,3))}var Ed=bt(function(C,I){if(C==null)return[];var E=I.length;return E>1&&we(C,I[0],I[1])?I=[]:E>2&&we(I[0],I[1],I[2])&&(I=[I[0]]),ea(C,Qt(I,1),[])}),pi=uf||function(){return jt.Date.now()};function zd(C,I){if(typeof I!="function")throw new We(J);return C=Ct(C),function(){if(--C<1)return I.apply(this,arguments)}}function Ka(C,I,E){return I=E?B:I,I=C&&I==null?C.length:I,fr(C,Ke,B,B,B,B,I)}function Za(C,I){var E;if(typeof I!="function")throw new We(J);return C=Ct(C),function(){return--C>0&&(E=I.apply(this,arguments)),C<=1&&(I=B),E}}var zo=bt(function(C,I,E){var H=Rt;if(E.length){var X=yr(E,Qr(zo));H|=Ge}return fr(C,H,I,E,X)}),ja=bt(function(C,I,E){var H=Rt|Re;if(E.length){var X=yr(E,Qr(ja));H|=Ge}return fr(I,H,C,E,X)});function Qa(C,I,E){I=E?B:I;var H=fr(C,Zt,B,B,B,B,B,I);return H.placeholder=Qa.placeholder,H}function Ja(C,I,E){I=E?B:I;var H=fr(C,mr,B,B,B,B,B,I);return H.placeholder=Ja.placeholder,H}function tl(C,I,E){var H,X,Y,j,tt,rt,st=0,at=!1,ut=!1,ft=!0;if(typeof C!="function")throw new We(J);I=Ye(I)||0,Gt(E)&&(at=!!E.leading,ut="maxWait"in E,Y=ut?Yt(Ye(E.maxWait)||0,I):Y,ft="trailing"in E?!!E.trailing:ft);function pt(Xt){var er=H,gr=X;return H=X=B,st=Xt,j=C.apply(gr,er),j}function vt(Xt){return st=Xt,tt=wn(At,I),at?pt(Xt):j}function wt(Xt){var er=Xt-rt,gr=Xt-st,_l=I-er;return ut?Jt(_l,Y-gr):_l}function xt(Xt){var er=Xt-rt,gr=Xt-st;return rt===B||er>=I||er<0||ut&&gr>=Y}function At(){var Xt=pi();if(xt(Xt))return It(Xt);tt=wn(At,wt(Xt))}function It(Xt){return tt=B,ft&&H?pt(Xt):(H=X=B,j)}function $e(){tt!==B&&fa(tt),st=0,H=rt=X=tt=B}function Se(){return tt===B?j:It(pi())}function Ue(){var Xt=pi(),er=xt(Xt);if(H=arguments,X=this,rt=Xt,er){if(tt===B)return vt(rt);if(ut)return fa(tt),tt=wn(At,I),pt(rt)}return tt===B&&(tt=wn(At,I)),j}return Ue.cancel=$e,Ue.flush=Se,Ue}var Rd=bt(function(C,I){return Ws(C,1,I)}),Fd=bt(function(C,I,E){return Ws(C,Ye(I)||0,E)});function Od(C){return fr(C,en)}function gi(C,I){if(typeof C!="function"||I!=null&&typeof I!="function")throw new We(J);var E=function(){var H=arguments,X=I?I.apply(this,H):H[0],Y=E.cache;if(Y.has(X))return Y.get(X);var j=C.apply(this,H);return E.cache=Y.set(X,j)||Y,j};return E.cache=new(gi.Cache||lr),E}gi.Cache=lr;function mi(C){if(typeof C!="function")throw new We(J);return function(){var I=arguments;switch(I.length){case 0:return!C.call(this);case 1:return!C.call(this,I[0]);case 2:return!C.call(this,I[0],I[1]);case 3:return!C.call(this,I[0],I[1],I[2])}return!C.apply(this,I)}}function Ld(C){return Za(2,C)}var kd=Tc(function(C,I){I=I.length==1&&yt(I[0])?Ut(I[0],ke(mt())):Ut(Qt(I,1),ke(mt()));var E=I.length;return bt(function(H){for(var X=-1,Y=Jt(H.length,E);++X<Y;)H[X]=I[X].call(this,H[X]);return Le(C,this,H)})}),Ro=bt(function(C,I){var E=yr(I,Qr(Ro));return fr(C,Ge,B,I,E)}),el=bt(function(C,I){var E=yr(I,Qr(el));return fr(C,vr,B,I,E)}),Nd=cr(function(C,I){return fr(C,Pr,B,B,B,I)});function Md(C,I){if(typeof C!="function")throw new We(J);return I=I===B?I:Ct(I),bt(C,I)}function $d(C,I){if(typeof C!="function")throw new We(J);return I=I==null?0:Yt(Ct(I),0),bt(function(E){var H=E[I],X=Sr(E,0,I);return H&&_r(X,H),Le(C,this,X)})}function Ud(C,I,E){var H=!0,X=!0;if(typeof C!="function")throw new We(J);return Gt(E)&&(H="leading"in E?!!E.leading:H,X="trailing"in E?!!E.trailing:X),tl(C,I,{leading:H,maxWait:I,trailing:X})}function Gd(C){return Ka(C,1)}function Bd(C,I){return Ro(go(I),C)}function Hd(){if(!arguments.length)return[];var C=arguments[0];return yt(C)?C:[C]}function Wd(C){return Xe(C,Ot)}function Dd(C,I){return I=typeof I=="function"?I:B,Xe(C,Ot,I)}function Xd(C){return Xe(C,zt|Ot)}function Vd(C,I){return I=typeof I=="function"?I:B,Xe(C,zt|Ot,I)}function qd(C,I){return I==null||Hs(C,I,Kt(I))}function tr(C,I){return C===I||C!==C&&I!==I}var Yd=li(ro),Kd=li(function(C,I){return C>=I}),Nr=Ys(function(){return arguments}())?Ys:function(C){return Wt(C)&&kt.call(C,"callee")&&!Ls.call(C,"callee")},yt=nt.isArray,Zd=gs?ke(gs):ic;function Pe(C){return C!=null&&vi(C.length)&&!dr(C)}function Dt(C){return Wt(C)&&Pe(C)}function jd(C){return C===!0||C===!1||Wt(C)&&Te(C)==rn}var Ar=cf||Ho,Qd=ms?ke(ms):oc;function Jd(C){return Wt(C)&&C.nodeType===1&&!bn(C)}function tp(C){if(C==null)return!0;if(Pe(C)&&(yt(C)||typeof C=="string"||typeof C.splice=="function"||Ar(C)||Jr(C)||Nr(C)))return!C.length;var I=xe(C);if(I==Ze||I==je)return!C.size;if(Cn(C))return!oo(C).length;for(var E in C)if(kt.call(C,E))return!1;return!0}function ep(C,I){return _n(C,I)}function rp(C,I,E){E=typeof E=="function"?E:B;var H=E?E(C,I):B;return H===B?_n(C,I,B,E):!!H}function Fo(C){if(!Wt(C))return!1;var I=Te(C);return I==En||I==bl||typeof C.message=="string"&&typeof C.name=="string"&&!bn(C)}function np(C){return typeof C=="number"&&Ns(C)}function dr(C){if(!Gt(C))return!1;var I=Te(C);return I==zn||I==Wo||I==wl||I==Al}function rl(C){return typeof C=="number"&&C==Ct(C)}function vi(C){return typeof C=="number"&&C>-1&&C%1==0&&C<=St}function Gt(C){var I=typeof C;return C!=null&&(I=="object"||I=="function")}function Wt(C){return C!=null&&typeof C=="object"}var nl=vs?ke(vs):ac;function ip(C,I){return C===I||io(C,I,Co(I))}function op(C,I,E){return E=typeof E=="function"?E:B,io(C,I,Co(I),E)}function sp(C){return il(C)&&C!=+C}function ap(C){if(Dc(C))throw new _t(Z);return Ks(C)}function lp(C){return C===null}function up(C){return C==null}function il(C){return typeof C=="number"||Wt(C)&&Te(C)==on}function bn(C){if(!Wt(C)||Te(C)!=sr)return!1;var I=Dn(C);if(I===null)return!0;var E=kt.call(I,"constructor")&&I.constructor;return typeof E=="function"&&E instanceof E&&Gn.call(E)==of}var Oo=xs?ke(xs):lc;function fp(C){return rl(C)&&C>=-St&&C<=St}var ol=_s?ke(_s):uc;function xi(C){return typeof C=="string"||!yt(C)&&Wt(C)&&Te(C)==an}function Me(C){return typeof C=="symbol"||Wt(C)&&Te(C)==Rn}var Jr=ys?ke(ys):fc;function cp(C){return C===B}function hp(C){return Wt(C)&&xe(C)==ln}function dp(C){return Wt(C)&&Te(C)==Il}var pp=li(so),gp=li(function(C,I){return C<=I});function sl(C){if(!C)return[];if(Pe(C))return xi(C)?Qe(C):Ae(C);if(cn&&C[cn])return Vu(C[cn]());var I=xe(C),E=I==Ze?qi:I==je?Mn:tn;return E(C)}function pr(C){if(!C)return C===0?C:0;if(C=Ye(C),C===gt||C===-gt){var I=C<0?-1:1;return I*Ht}return C===C?C:0}function Ct(C){var I=pr(C),E=I%1;return I===I?E?I-E:I:0}function al(C){return C?Fr(Ct(C),0,Oe):0}function Ye(C){if(typeof C=="number")return C;if(Me(C))return Fe;if(Gt(C)){var I=typeof C.valueOf=="function"?C.valueOf():C;C=Gt(I)?I+"":I}if(typeof C!="string")return C===0?C:+C;C=As(C);var E=Kl.test(C);return E||jl.test(C)?Eu(C.slice(2),E?2:8):Yl.test(C)?Fe:+C}function ll(C){return ir(C,Ie(C))}function mp(C){return C?Fr(Ct(C),-St,St):C===0?C:0}function Lt(C){return C==null?"":Ne(C)}var vp=Zr(function(C,I){if(Cn(I)||Pe(I)){ir(I,Kt(I),C);return}for(var E in I)kt.call(I,E)&&mn(C,E,I[E])}),ul=Zr(function(C,I){ir(I,Ie(I),C)}),_i=Zr(function(C,I,E,H){ir(I,Ie(I),C,H)}),xp=Zr(function(C,I,E,H){ir(I,Kt(I),C,H)}),_p=cr(Ji);function yp(C,I){var E=Kr(C);return I==null?E:Bs(E,I)}var Tp=bt(function(C,I){C=Nt(C);var E=-1,H=I.length,X=H>2?I[2]:B;for(X&&we(I[0],I[1],X)&&(H=1);++E<H;)for(var Y=I[E],j=Ie(Y),tt=-1,rt=j.length;++tt<rt;){var st=j[tt],at=C[st];(at===B||tr(at,Vr[st])&&!kt.call(C,st))&&(C[st]=Y[st])}return C}),Cp=bt(function(C){return C.push(B,Aa),Le(fl,B,C)});function wp(C,I){return Cs(C,mt(I,3),nr)}function bp(C,I){return Cs(C,mt(I,3),eo)}function Sp(C,I){return C==null?C:to(C,mt(I,3),Ie)}function Ap(C,I){return C==null?C:Vs(C,mt(I,3),Ie)}function Pp(C,I){return C&&nr(C,mt(I,3))}function Ip(C,I){return C&&eo(C,mt(I,3))}function Ep(C){return C==null?[]:ti(C,Kt(C))}function zp(C){return C==null?[]:ti(C,Ie(C))}function Lo(C,I,E){var H=C==null?B:Or(C,I);return H===B?E:H}function Rp(C,I){return C!=null&&Ea(C,I,tc)}function ko(C,I){return C!=null&&Ea(C,I,ec)}var Fp=Ta(function(C,I,E){I!=null&&typeof I.toString!="function"&&(I=Bn.call(I)),C[I]=E},Mo(Ee)),Op=Ta(function(C,I,E){I!=null&&typeof I.toString!="function"&&(I=Bn.call(I)),kt.call(C,I)?C[I].push(E):C[I]=[E]},mt),Lp=bt(xn);function Kt(C){return Pe(C)?Us(C):oo(C)}function Ie(C){return Pe(C)?Us(C,!0):cc(C)}function kp(C,I){var E={};return I=mt(I,3),nr(C,function(H,X,Y){ur(E,I(H,X,Y),H)}),E}function Np(C,I){var E={};return I=mt(I,3),nr(C,function(H,X,Y){ur(E,X,I(H,X,Y))}),E}var Mp=Zr(function(C,I,E){ei(C,I,E)}),fl=Zr(function(C,I,E,H){ei(C,I,E,H)}),$p=cr(function(C,I){var E={};if(C==null)return E;var H=!1;I=Ut(I,function(Y){return Y=br(Y,C),H||(H=Y.length>1),Y}),ir(C,yo(C),E),H&&(E=Xe(E,zt|Et|Ot,Fc));for(var X=I.length;X--;)co(E,I[X]);return E});function Up(C,I){return cl(C,mi(mt(I)))}var Gp=cr(function(C,I){return C==null?{}:dc(C,I)});function cl(C,I){if(C==null)return{};var E=Ut(yo(C),function(H){return[H]});return I=mt(I),ra(C,E,function(H,X){return I(H,X[0])})}function Bp(C,I,E){I=br(I,C);var H=-1,X=I.length;for(X||(X=1,C=B);++H<X;){var Y=C==null?B:C[or(I[H])];Y===B&&(H=X,Y=E),C=dr(Y)?Y.call(C):Y}return C}function Hp(C,I,E){return C==null?C:yn(C,I,E)}function Wp(C,I,E,H){return H=typeof H=="function"?H:B,C==null?C:yn(C,I,E,H)}var hl=ba(Kt),dl=ba(Ie);function Dp(C,I,E){var H=yt(C),X=H||Ar(C)||Jr(C);if(I=mt(I,4),E==null){var Y=C&&C.constructor;X?E=H?new Y:[]:Gt(C)?E=dr(Y)?Kr(Dn(C)):{}:E={}}return(X?He:nr)(C,function(j,tt,rt){return I(E,j,tt,rt)}),E}function Xp(C,I){return C==null?!0:co(C,I)}function Vp(C,I,E){return C==null?C:aa(C,I,go(E))}function qp(C,I,E,H){return H=typeof H=="function"?H:B,C==null?C:aa(C,I,go(E),H)}function tn(C){return C==null?[]:Vi(C,Kt(C))}function Yp(C){return C==null?[]:Vi(C,Ie(C))}function Kp(C,I,E){return E===B&&(E=I,I=B),E!==B&&(E=Ye(E),E=E===E?E:0),I!==B&&(I=Ye(I),I=I===I?I:0),Fr(Ye(C),I,E)}function Zp(C,I,E){return I=pr(I),E===B?(E=I,I=0):E=pr(E),C=Ye(C),rc(C,I,E)}function jp(C,I,E){if(E&&typeof E!="boolean"&&we(C,I,E)&&(I=E=B),E===B&&(typeof I=="boolean"?(E=I,I=B):typeof C=="boolean"&&(E=C,C=B)),C===B&&I===B?(C=0,I=1):(C=pr(C),I===B?(I=C,C=0):I=pr(I)),C>I){var H=C;C=I,I=H}if(E||C%1||I%1){var X=Ms();return Jt(C+X*(I-C+Iu("1e-"+((X+"").length-1))),I)}return lo(C,I)}var Qp=jr(function(C,I,E){return I=I.toLowerCase(),C+(E?pl(I):I)});function pl(C){return No(Lt(C).toLowerCase())}function gl(C){return C=Lt(C),C&&C.replace(Jl,Bu).replace(xu,"")}function Jp(C,I,E){C=Lt(C),I=Ne(I);var H=C.length;E=E===B?H:Fr(Ct(E),0,H);var X=E;return E-=I.length,E>=0&&C.slice(E,X)==I}function tg(C){return C=Lt(C),C&&Ol.test(C)?C.replace(Vo,Hu):C}function eg(C){return C=Lt(C),C&&Ul.test(C)?C.replace(zi,"\\$&"):C}var rg=jr(function(C,I,E){return C+(E?"-":"")+I.toLowerCase()}),ng=jr(function(C,I,E){return C+(E?" ":"")+I.toLowerCase()}),ig=xa("toLowerCase");function og(C,I,E){C=Lt(C),I=Ct(I);var H=I?Dr(C):0;if(!I||H>=I)return C;var X=(I-H)/2;return ai(Yn(X),E)+C+ai(qn(X),E)}function sg(C,I,E){C=Lt(C),I=Ct(I);var H=I?Dr(C):0;return I&&H<I?C+ai(I-H,E):C}function ag(C,I,E){C=Lt(C),I=Ct(I);var H=I?Dr(C):0;return I&&H<I?ai(I-H,E)+C:C}function lg(C,I,E){return E||I==null?I=0:I&&(I=+I),gf(Lt(C).replace(Ri,""),I||0)}function ug(C,I,E){return(E?we(C,I,E):I===B)?I=1:I=Ct(I),uo(Lt(C),I)}function fg(){var C=arguments,I=Lt(C[0]);return C.length<3?I:I.replace(C[1],C[2])}var cg=jr(function(C,I,E){return C+(E?"_":"")+I.toLowerCase()});function hg(C,I,E){return E&&typeof E!="number"&&we(C,I,E)&&(I=E=B),E=E===B?Oe:E>>>0,E?(C=Lt(C),C&&(typeof I=="string"||I!=null&&!Oo(I))&&(I=Ne(I),!I&&Wr(C))?Sr(Qe(C),0,E):C.split(I,E)):[]}var dg=jr(function(C,I,E){return C+(E?" ":"")+No(I)});function pg(C,I,E){return C=Lt(C),E=E==null?0:Fr(Ct(E),0,C.length),I=Ne(I),C.slice(E,E+I.length)==I}function gg(C,I,E){var H=q.templateSettings;E&&we(C,I,E)&&(I=B),C=Lt(C),I=_i({},I,H,Sa);var X=_i({},I.imports,H.imports,Sa),Y=Kt(X),j=Vi(X,Y),tt,rt,st=0,at=I.interpolate||Fn,ut="__p += '",ft=Yi((I.escape||Fn).source+"|"+at.source+"|"+(at===qo?ql:Fn).source+"|"+(I.evaluate||Fn).source+"|$","g"),pt="//# sourceURL="+(kt.call(I,"sourceURL")?(I.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++wu+"]")+`
`;C.replace(ft,function(xt,At,It,$e,Se,Ue){return It||(It=$e),ut+=C.slice(st,Ue).replace(tu,Wu),At&&(tt=!0,ut+=`' +
__e(`+At+`) +
'`),Se&&(rt=!0,ut+=`';
`+Se+`;
__p += '`),It&&(ut+=`' +
((__t = (`+It+`)) == null ? '' : __t) +
'`),st=Ue+xt.length,xt}),ut+=`';
`;var vt=kt.call(I,"variable")&&I.variable;if(!vt)ut=`with (obj) {
`+ut+`
}
`;else if(Xl.test(vt))throw new _t(it);ut=(rt?ut.replace(El,""):ut).replace(zl,"$1").replace(Rl,"$1;"),ut="function("+(vt||"obj")+`) {
`+(vt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(tt?", __e = _.escape":"")+(rt?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ut+`return __p
}`;var wt=vl(function(){return Ft(Y,pt+"return "+ut).apply(B,j)});if(wt.source=ut,Fo(wt))throw wt;return wt}function mg(C){return Lt(C).toLowerCase()}function vg(C){return Lt(C).toUpperCase()}function xg(C,I,E){if(C=Lt(C),C&&(E||I===B))return As(C);if(!C||!(I=Ne(I)))return C;var H=Qe(C),X=Qe(I),Y=Ps(H,X),j=Is(H,X)+1;return Sr(H,Y,j).join("")}function _g(C,I,E){if(C=Lt(C),C&&(E||I===B))return C.slice(0,zs(C)+1);if(!C||!(I=Ne(I)))return C;var H=Qe(C),X=Is(H,Qe(I))+1;return Sr(H,0,X).join("")}function yg(C,I,E){if(C=Lt(C),C&&(E||I===B))return C.replace(Ri,"");if(!C||!(I=Ne(I)))return C;var H=Qe(C),X=Ps(H,Qe(I));return Sr(H,X).join("")}function Tg(C,I){var E=Sn,H=$r;if(Gt(I)){var X="separator"in I?I.separator:X;E="length"in I?Ct(I.length):E,H="omission"in I?Ne(I.omission):H}C=Lt(C);var Y=C.length;if(Wr(C)){var j=Qe(C);Y=j.length}if(E>=Y)return C;var tt=E-Dr(H);if(tt<1)return H;var rt=j?Sr(j,0,tt).join(""):C.slice(0,tt);if(X===B)return rt+H;if(j&&(tt+=rt.length-tt),Oo(X)){if(C.slice(tt).search(X)){var st,at=rt;for(X.global||(X=Yi(X.source,Lt(Yo.exec(X))+"g")),X.lastIndex=0;st=X.exec(at);)var ut=st.index;rt=rt.slice(0,ut===B?tt:ut)}}else if(C.indexOf(Ne(X),tt)!=tt){var ft=rt.lastIndexOf(X);ft>-1&&(rt=rt.slice(0,ft))}return rt+H}function Cg(C){return C=Lt(C),C&&Fl.test(C)?C.replace(Xo,Zu):C}var wg=jr(function(C,I,E){return C+(E?" ":"")+I.toUpperCase()}),No=xa("toUpperCase");function ml(C,I,E){return C=Lt(C),I=E?B:I,I===B?Xu(C)?Ju(C):Nu(C):C.match(I)||[]}var vl=bt(function(C,I){try{return Le(C,B,I)}catch(E){return Fo(E)?E:new _t(E)}}),bg=cr(function(C,I){return He(I,function(E){E=or(E),ur(C,E,zo(C[E],C))}),C});function Sg(C){var I=C==null?0:C.length,E=mt();return C=I?Ut(C,function(H){if(typeof H[1]!="function")throw new We(J);return[E(H[0]),H[1]]}):[],bt(function(H){for(var X=-1;++X<I;){var Y=C[X];if(Le(Y[0],this,H))return Le(Y[1],this,H)}})}function Ag(C){return jf(Xe(C,zt))}function Mo(C){return function(){return C}}function Pg(C,I){return C==null||C!==C?I:C}var Ig=ya(),Eg=ya(!0);function Ee(C){return C}function $o(C){return Zs(typeof C=="function"?C:Xe(C,zt))}function zg(C){return Qs(Xe(C,zt))}function Rg(C,I){return Js(C,Xe(I,zt))}var Fg=bt(function(C,I){return function(E){return xn(E,C,I)}}),Og=bt(function(C,I){return function(E){return xn(C,E,I)}});function Uo(C,I,E){var H=Kt(I),X=ti(I,H);E==null&&!(Gt(I)&&(X.length||!H.length))&&(E=I,I=C,C=this,X=ti(I,Kt(I)));var Y=!(Gt(E)&&"chain"in E)||!!E.chain,j=dr(C);return He(X,function(tt){var rt=I[tt];C[tt]=rt,j&&(C.prototype[tt]=function(){var st=this.__chain__;if(Y||st){var at=C(this.__wrapped__),ut=at.__actions__=Ae(this.__actions__);return ut.push({func:rt,args:arguments,thisArg:C}),at.__chain__=st,at}return rt.apply(C,_r([this.value()],arguments))})}),C}function Lg(){return jt._===this&&(jt._=sf),this}function Go(){}function kg(C){return C=Ct(C),bt(function(I){return ta(I,C)})}var Ng=vo(Ut),Mg=vo(Ts),$g=vo(Bi);function xl(C){return bo(C)?Hi(or(C)):pc(C)}function Ug(C){return function(I){return C==null?B:Or(C,I)}}var Gg=Ca(),Bg=Ca(!0);function Bo(){return[]}function Ho(){return!1}function Hg(){return{}}function Wg(){return""}function Dg(){return!0}function Xg(C,I){if(C=Ct(C),C<1||C>St)return[];var E=Oe,H=Jt(C,Oe);I=mt(I),C-=Oe;for(var X=Xi(H,I);++E<C;)I(E);return X}function Vg(C){return yt(C)?Ut(C,or):Me(C)?[C]:Ae($a(Lt(C)))}function qg(C){var I=++nf;return Lt(C)+I}var Yg=si(function(C,I){return C+I},0),Kg=xo("ceil"),Zg=si(function(C,I){return C/I},1),jg=xo("floor");function Qg(C){return C&&C.length?Jn(C,Ee,ro):B}function Jg(C,I){return C&&C.length?Jn(C,mt(I,2),ro):B}function t0(C){return bs(C,Ee)}function e0(C,I){return bs(C,mt(I,2))}function r0(C){return C&&C.length?Jn(C,Ee,so):B}function n0(C,I){return C&&C.length?Jn(C,mt(I,2),so):B}var i0=si(function(C,I){return C*I},1),o0=xo("round"),s0=si(function(C,I){return C-I},0);function a0(C){return C&&C.length?Di(C,Ee):0}function l0(C,I){return C&&C.length?Di(C,mt(I,2)):0}return q.after=zd,q.ary=Ka,q.assign=vp,q.assignIn=ul,q.assignInWith=_i,q.assignWith=xp,q.at=_p,q.before=Za,q.bind=zo,q.bindAll=bg,q.bindKey=ja,q.castArray=Hd,q.chain=Va,q.chunk=jc,q.compact=Qc,q.concat=Jc,q.cond=Sg,q.conforms=Ag,q.constant=Mo,q.countBy=ad,q.create=yp,q.curry=Qa,q.curryRight=Ja,q.debounce=tl,q.defaults=Tp,q.defaultsDeep=Cp,q.defer=Rd,q.delay=Fd,q.difference=th,q.differenceBy=eh,q.differenceWith=rh,q.drop=nh,q.dropRight=ih,q.dropRightWhile=oh,q.dropWhile=sh,q.fill=ah,q.filter=ud,q.flatMap=hd,q.flatMapDeep=dd,q.flatMapDepth=pd,q.flatten=Ha,q.flattenDeep=lh,q.flattenDepth=uh,q.flip=Od,q.flow=Ig,q.flowRight=Eg,q.fromPairs=fh,q.functions=Ep,q.functionsIn=zp,q.groupBy=gd,q.initial=hh,q.intersection=dh,q.intersectionBy=ph,q.intersectionWith=gh,q.invert=Fp,q.invertBy=Op,q.invokeMap=vd,q.iteratee=$o,q.keyBy=xd,q.keys=Kt,q.keysIn=Ie,q.map=di,q.mapKeys=kp,q.mapValues=Np,q.matches=zg,q.matchesProperty=Rg,q.memoize=gi,q.merge=Mp,q.mergeWith=fl,q.method=Fg,q.methodOf=Og,q.mixin=Uo,q.negate=mi,q.nthArg=kg,q.omit=$p,q.omitBy=Up,q.once=Ld,q.orderBy=_d,q.over=Ng,q.overArgs=kd,q.overEvery=Mg,q.overSome=$g,q.partial=Ro,q.partialRight=el,q.partition=yd,q.pick=Gp,q.pickBy=cl,q.property=xl,q.propertyOf=Ug,q.pull=_h,q.pullAll=Da,q.pullAllBy=yh,q.pullAllWith=Th,q.pullAt=Ch,q.range=Gg,q.rangeRight=Bg,q.rearg=Nd,q.reject=wd,q.remove=wh,q.rest=Md,q.reverse=Io,q.sampleSize=Sd,q.set=Hp,q.setWith=Wp,q.shuffle=Ad,q.slice=bh,q.sortBy=Ed,q.sortedUniq=Rh,q.sortedUniqBy=Fh,q.split=hg,q.spread=$d,q.tail=Oh,q.take=Lh,q.takeRight=kh,q.takeRightWhile=Nh,q.takeWhile=Mh,q.tap=Qh,q.throttle=Ud,q.thru=hi,q.toArray=sl,q.toPairs=hl,q.toPairsIn=dl,q.toPath=Vg,q.toPlainObject=ll,q.transform=Dp,q.unary=Gd,q.union=$h,q.unionBy=Uh,q.unionWith=Gh,q.uniq=Bh,q.uniqBy=Hh,q.uniqWith=Wh,q.unset=Xp,q.unzip=Eo,q.unzipWith=Xa,q.update=Vp,q.updateWith=qp,q.values=tn,q.valuesIn=Yp,q.without=Dh,q.words=ml,q.wrap=Bd,q.xor=Xh,q.xorBy=Vh,q.xorWith=qh,q.zip=Yh,q.zipObject=Kh,q.zipObjectDeep=Zh,q.zipWith=jh,q.entries=hl,q.entriesIn=dl,q.extend=ul,q.extendWith=_i,Uo(q,q),q.add=Yg,q.attempt=vl,q.camelCase=Qp,q.capitalize=pl,q.ceil=Kg,q.clamp=Kp,q.clone=Wd,q.cloneDeep=Xd,q.cloneDeepWith=Vd,q.cloneWith=Dd,q.conformsTo=qd,q.deburr=gl,q.defaultTo=Pg,q.divide=Zg,q.endsWith=Jp,q.eq=tr,q.escape=tg,q.escapeRegExp=eg,q.every=ld,q.find=fd,q.findIndex=Ga,q.findKey=wp,q.findLast=cd,q.findLastIndex=Ba,q.findLastKey=bp,q.floor=jg,q.forEach=qa,q.forEachRight=Ya,q.forIn=Sp,q.forInRight=Ap,q.forOwn=Pp,q.forOwnRight=Ip,q.get=Lo,q.gt=Yd,q.gte=Kd,q.has=Rp,q.hasIn=ko,q.head=Wa,q.identity=Ee,q.includes=md,q.indexOf=ch,q.inRange=Zp,q.invoke=Lp,q.isArguments=Nr,q.isArray=yt,q.isArrayBuffer=Zd,q.isArrayLike=Pe,q.isArrayLikeObject=Dt,q.isBoolean=jd,q.isBuffer=Ar,q.isDate=Qd,q.isElement=Jd,q.isEmpty=tp,q.isEqual=ep,q.isEqualWith=rp,q.isError=Fo,q.isFinite=np,q.isFunction=dr,q.isInteger=rl,q.isLength=vi,q.isMap=nl,q.isMatch=ip,q.isMatchWith=op,q.isNaN=sp,q.isNative=ap,q.isNil=up,q.isNull=lp,q.isNumber=il,q.isObject=Gt,q.isObjectLike=Wt,q.isPlainObject=bn,q.isRegExp=Oo,q.isSafeInteger=fp,q.isSet=ol,q.isString=xi,q.isSymbol=Me,q.isTypedArray=Jr,q.isUndefined=cp,q.isWeakMap=hp,q.isWeakSet=dp,q.join=mh,q.kebabCase=rg,q.last=qe,q.lastIndexOf=vh,q.lowerCase=ng,q.lowerFirst=ig,q.lt=pp,q.lte=gp,q.max=Qg,q.maxBy=Jg,q.mean=t0,q.meanBy=e0,q.min=r0,q.minBy=n0,q.stubArray=Bo,q.stubFalse=Ho,q.stubObject=Hg,q.stubString=Wg,q.stubTrue=Dg,q.multiply=i0,q.nth=xh,q.noConflict=Lg,q.noop=Go,q.now=pi,q.pad=og,q.padEnd=sg,q.padStart=ag,q.parseInt=lg,q.random=jp,q.reduce=Td,q.reduceRight=Cd,q.repeat=ug,q.replace=fg,q.result=Bp,q.round=o0,q.runInContext=et,q.sample=bd,q.size=Pd,q.snakeCase=cg,q.some=Id,q.sortedIndex=Sh,q.sortedIndexBy=Ah,q.sortedIndexOf=Ph,q.sortedLastIndex=Ih,q.sortedLastIndexBy=Eh,q.sortedLastIndexOf=zh,q.startCase=dg,q.startsWith=pg,q.subtract=s0,q.sum=a0,q.sumBy=l0,q.template=gg,q.times=Xg,q.toFinite=pr,q.toInteger=Ct,q.toLength=al,q.toLower=mg,q.toNumber=Ye,q.toSafeInteger=mp,q.toString=Lt,q.toUpper=vg,q.trim=xg,q.trimEnd=_g,q.trimStart=yg,q.truncate=Tg,q.unescape=Cg,q.uniqueId=qg,q.upperCase=wg,q.upperFirst=No,q.each=qa,q.eachRight=Ya,q.first=Wa,Uo(q,function(){var C={};return nr(q,function(I,E){kt.call(q.prototype,E)||(C[E]=I)}),C}(),{chain:!1}),q.VERSION=V,He(["bind","bindKey","curry","curryRight","partial","partialRight"],function(C){q[C].placeholder=q}),He(["drop","take"],function(C,I){Pt.prototype[C]=function(E){E=E===B?1:Yt(Ct(E),0);var H=this.__filtered__&&!I?new Pt(this):this.clone();return H.__filtered__?H.__takeCount__=Jt(E,H.__takeCount__):H.__views__.push({size:Jt(E,Oe),type:C+(H.__dir__<0?"Right":"")}),H},Pt.prototype[C+"Right"]=function(E){return this.reverse()[C](E).reverse()}}),He(["filter","map","takeWhile"],function(C,I){var E=I+1,H=E==_e||E==Pn;Pt.prototype[C]=function(X){var Y=this.clone();return Y.__iteratees__.push({iteratee:mt(X,3),type:E}),Y.__filtered__=Y.__filtered__||H,Y}}),He(["head","last"],function(C,I){var E="take"+(I?"Right":"");Pt.prototype[C]=function(){return this[E](1).value()[0]}}),He(["initial","tail"],function(C,I){var E="drop"+(I?"":"Right");Pt.prototype[C]=function(){return this.__filtered__?new Pt(this):this[E](1)}}),Pt.prototype.compact=function(){return this.filter(Ee)},Pt.prototype.find=function(C){return this.filter(C).head()},Pt.prototype.findLast=function(C){return this.reverse().find(C)},Pt.prototype.invokeMap=bt(function(C,I){return typeof C=="function"?new Pt(this):this.map(function(E){return xn(E,C,I)})}),Pt.prototype.reject=function(C){return this.filter(mi(mt(C)))},Pt.prototype.slice=function(C,I){C=Ct(C);var E=this;return E.__filtered__&&(C>0||I<0)?new Pt(E):(C<0?E=E.takeRight(-C):C&&(E=E.drop(C)),I!==B&&(I=Ct(I),E=I<0?E.dropRight(-I):E.take(I-C)),E)},Pt.prototype.takeRightWhile=function(C){return this.reverse().takeWhile(C).reverse()},Pt.prototype.toArray=function(){return this.take(Oe)},nr(Pt.prototype,function(C,I){var E=/^(?:filter|find|map|reject)|While$/.test(I),H=/^(?:head|last)$/.test(I),X=q[H?"take"+(I=="last"?"Right":""):I],Y=H||/^find/.test(I);X&&(q.prototype[I]=function(){var j=this.__wrapped__,tt=H?[1]:arguments,rt=j instanceof Pt,st=tt[0],at=rt||yt(j),ut=function(At){var It=X.apply(q,_r([At],tt));return H&&ft?It[0]:It};at&&E&&typeof st=="function"&&st.length!=1&&(rt=at=!1);var ft=this.__chain__,pt=!!this.__actions__.length,vt=Y&&!ft,wt=rt&&!pt;if(!Y&&at){j=wt?j:new Pt(this);var xt=C.apply(j,tt);return xt.__actions__.push({func:hi,args:[ut],thisArg:B}),new De(xt,ft)}return vt&&wt?C.apply(this,tt):(xt=this.thru(ut),vt?H?xt.value()[0]:xt.value():xt)})}),He(["pop","push","shift","sort","splice","unshift"],function(C){var I=$n[C],E=/^(?:push|sort|unshift)$/.test(C)?"tap":"thru",H=/^(?:pop|shift)$/.test(C);q.prototype[C]=function(){var X=arguments;if(H&&!this.__chain__){var Y=this.value();return I.apply(yt(Y)?Y:[],X)}return this[E](function(j){return I.apply(yt(j)?j:[],X)})}}),nr(Pt.prototype,function(C,I){var E=q[I];if(E){var H=E.name+"";kt.call(Yr,H)||(Yr[H]=[]),Yr[H].push({name:I,func:E})}}),Yr[oi(B,Re).name]=[{name:"wrapper",func:B}],Pt.prototype.clone=Cf,Pt.prototype.reverse=wf,Pt.prototype.value=bf,q.prototype.at=Jh,q.prototype.chain=td,q.prototype.commit=ed,q.prototype.next=rd,q.prototype.plant=id,q.prototype.reverse=od,q.prototype.toJSON=q.prototype.valueOf=q.prototype.value=sd,q.prototype.first=q.prototype.head,cn&&(q.prototype[cn]=nd),q},Xr=tf();Ir?((Ir.exports=Xr)._=Xr,Mi._=Xr):jt._=Xr}).call(commonjsGlobal)}(lodash,lodash.exports);var lodashExports=lodash.exports;const skillDialogues=[{text:"雜魚！雜魚！",reuse:1,skillId:[1,3]},{text:"真是個雜魚大叔呢！",skillId:[1]},{text:"啊哈，沒用處的雜魚雞雞。",priority:5,skillId:[1],unitId:[2]},{text:"不會吧不會吧，都三十歲了大叔還是處男嗎？",priority:5,skillId:[1],unitId:[3],label:"test_label"},{text:"不會吧不會吧，大叔對小O生也能發情嗎？",skillId:[2]},{text:"這麼喜歡胸部，大叔是小寶寶嗎？",priority:5,skillId:[2],unitId:[3]},{text:"這樣就勃起了？好噁心。",priority:5,skillId:[2],unitId:[2]},{text:"跟大叔呼吸同一個空間的空氣真是噁心。",reuse:1,skillId:[3]},{text:"大叔知道拉開這個警報器會有什麼後果嗎？",skillId:[4],label:"test2"},{text:"在這種情況下還能勃起，大叔還是進監獄吧。",priority:5,skillId:[4],unitId:[2]},{text:"大叔，人生完蛋的感覺怎麼樣呢。",priority:5,skillId:[4],unitId:[3]},{text:`啊哈，只是說說事實就生氣了嗎？
草莓草莓玻璃心。`,priority:4,skillId:[1],enemyHp:25},{text:`咦？真的是處男？那個...怎麼說...
加油。`,priority:3,preTextLabel:["test_label"]}],enemySkillDialogues=[{text:"不、不要過來啊！",priority:5,totalHp:-1},{text:"欸？等等、等等啦！",priority:3,totalHp:0},{text:"就、就這麼喜歡胸部嗎？",upperHp:1},{text:"變、變態！",lowerHp:0},{text:"哈哈，急了急了！",totalHp:5}],Rita="\\N[1]",fontM=`\\fs[${CONFIG.common.fontSize.medium}]`,skills=[{id:1,displayName:"普通攻擊",texture:"image_07",shape:[[0,0,0],[0,1,0],[0,0,0]],weight:1,description:`普通攻擊。
`+fontM+"想不到詞的時候就用這招。"},{id:2,displayName:"調戲",texture:"image_03",shape:[[1,0,0],[1,1,0],[0,0,0]],weight:5,description:`防禦。
`+fontM+"很可惜，在大叔面前防禦是沒有用的。"},{id:3,displayName:"羞辱",texture:"image_02",shape:[[0,1,0],[0,1,0],[0,0,0]],weight:5,description:`破防。
`+fontM+"能讓大叔的防禦歸零喔。"},{id:4,displayName:"可憐",texture:"image_05",shape:[[0,1,0],[1,0,1],[0,1,0]],weight:2,description:`強攻。
`+fontM+"趁勝追擊吧！"}];function randomByWeight($,U){const B=$.reduce((J,it)=>{const lt=lodashExports.last(J)||0,ht=U(it);return J.push(lt+ht),J},[]),V=lodashExports.random(0,lodashExports.last(B)||0),K=lodashExports.findIndex(B,J=>J>=V);return $[K]}const getPuzzle=()=>{const $=Graphics.app.stage.children.find(U=>U instanceof Puzzle);if(!$)throw new Error("puzzle not founded");return $},toggleControllable=$=>{const U=getPuzzle();$?(U.menu.open(),U.battleCommandWin.reset()):(U.menu.close(),U.skills.forEach(B=>B.reset()),U.battleCommandWin.close())},getHeroineRm=()=>$gameActors.actor(1),getHeroineSkillIds=()=>{const $=[1,2].concat(getHeroineRm().skills().map(U=>U.id));return lodashExports.uniq($)},getTurnCount=()=>$gameTroop.turnCount(),getFirstEnemy=()=>$gameTroop.members().find($=>$.isAlive()),forcePartyAction=$=>{$gameMap._interpreter.command339([1,1,$,0])},clearEnemyActionQueue=()=>{$gameTroop.members().forEach($=>$.selectAllActions([]))},startProcessTurn=()=>{const $=getPuzzle();clearEnemyActionQueue(),$.battleCommandWin.close(),$.battleController.enemySkills.forEach(U=>U.beforeTurnStart()),BattleManager.startTurn()},playSe=($,U={})=>{AudioManager.playSe({name:$,volume:100,pitch:100,pan:0,...U})},killParty=()=>{const $=getPuzzle();$.heroine.upperHp=0,$.heroine.lowerHp=0,$.heroine.updateStatus(),$gameMap._interpreter.command313([0,0,0,1])},killEnemies=()=>{$gameMap._interpreter.command333([-1,0,1])},checkBattleEnd=()=>{const $=getPuzzle(),U=$gameParty.isEscaped()||$gameParty.isAllDead()||$gameTroop.isAllDead(),B=$.heroine.getTotalHp()<0||$.battleController.checkMapFill();return U||B},calculateEnemiesHpRate=()=>{const $=$gameTroop.members(),U=$.reduce((V,K)=>V+=K.hp,0),B=$.reduce((V,K)=>V+=K.mhp,0);return U/B*100},waitAction=($=0,U)=>{const B=BattleManager._spriteset;B.createAnimationSprite([],$dataAnimations[1],!1,$);const V=lodashExports.last(B._animationSprites);if(V){const K=V.destroy;V.destroy=function(Z){U&&U(),K.apply(V,Z)}}},waitMessage=$=>{if(!globalThis.customUpdater)throw new Error("customUpdater not found");const U=Graphics.app.stage._messageWindow;globalThis.customUpdater.waitFor(()=>U._waitCount>0,()=>U.startWait($))},getBattleLogWindow=()=>BattleManager._logWindow,battleLogWaitAndClear=$=>{$.push("wait"),$.push("wait"),$.push("clear")},shakeTarget=new Map,shakeScreen=($=5,U=5,B=10,V=!1,K)=>{var it;$gameMap._interpreter.command225([$,U,B,V]);const Z=K||Graphics.app.stage;shakeTarget.set(Z,!0);const J=()=>shakeTarget.delete(Z);(it=globalThis.customUpdater)==null||it.waitFor(lt=>lt<=1?!1:!$gameScreen.shake(),J,{maxFrame:999,onDestroy:J})},updateShake=($,U)=>{(shakeTarget.get($)||shakeTarget.get(Graphics.app.stage))&&($.x=U+$gameScreen.shake())},defaultValidator=$=>($==null?void 0:$.status)===UNIT_STATUS.empty,getShapeFirstRowAndCol=$=>{const U=$.findIndex(V=>V.some(K=>!!K));let B=-1;for(let V=0;V<$[0].length;V++)if($.some(K=>!!K[V])){B=V;break}if(U===-1||B===-1)throw new Error("invalid puzzle shape");return[U,B]},checkPuzzleValid=($,U,B,V)=>{const K=V||defaultValidator,[Z,J]=getShapeFirstRowAndCol(U),[it,lt]=B;return U.every((Tt,zt)=>Tt.every((Ot,Vt)=>{if(Ot===0)return!0;const Bt=it+zt-Z,Rt=lt+Vt-J,Re=$.shape,Mr=Re[0].length;if(Bt<0||Rt<0||Bt>Re.length-1||Rt>Mr-1)return!1;const Zt=$.getUnitByIndex(Bt,Rt);return K(Zt)}))},getAllValidIndex=($,U,B)=>{const V=[];return U.shape.forEach((K,Z)=>{K.forEach((J,it)=>{checkPuzzleValid(U,$,[Z,it],B)&&V.push([Z,it])})}),V},getFirstValidIndex=($,U,B)=>{for(let V=0;V<U.shape.length;V++){const K=U.shape[V];for(let Z=0;Z<K.length;Z++)if(checkPuzzleValid(U,$,[V,Z],B))return[V,Z]}return null},getShapeFirstUnitIndex=$=>{for(let U=0;U<$.length;U++){const B=$[U];for(let V=0;V<B.length;V++)if(B[V])return[V,U]}throw new Error("invalid puzzle shape")},drawPuzzle=($,U)=>{let B=0;return $.forEach((V,K)=>V.forEach((Z,J)=>{if(!Z)return;const it=[J*CONFIG.map.unitSize,K*CONFIG.map.unitSize,CONFIG.map.unitSize,CONFIG.map.unitSize];U.forEach(lt=>{lt.drawRect(...it)}),B+=1})),B},DRAG_EVENT={start:"dragstart",move:"dragmove",end:"dragend",reset:"dragreset"},STAGE_EVENT={battleStart:"battleStart",turnStart:"turnStart",turnEnd:"turnEnd",enemyTurn:"enemyTurn",enemyActionEnd:"enemyActionEnd",battleEnd:"battleEnd",troopEventStart:"troopEventStart",troopEventEnd:"troopEventEnd"},APP_EVENT={createBattleScene:"createBattleScene",battleSceneReady:"battleSceneReady"};function addStageEventListener($,U){return Graphics.app.stage.addListener($,U),()=>{Graphics.app.stage.removeListener($,U)}}function addStageEventListenerOnce($,U){const B=addStageEventListener($,()=>{U(),B()})}class CustomUpdater extends Sprite{constructor(){super(new Bitmap(0,0));ct(this,"funcsToLoop",[])}add(B,V={}){const{maxFrame:K,onDestroy:Z}=V,J=()=>this.remove(B);this.funcsToLoop.push({func:B,maxFrame:K,onDestroy:Z,count:0,remove:J})}remove(B){if(this._destroyed)return;const V=this.funcsToLoop.find(K=>K.func===B);lodashExports.pull(this.funcsToLoop,V),V!=null&&V.onDestroy&&V.onDestroy()}waitFor(B,V,K={}){this.add((Z,J)=>{B(Z)&&(V(Z,J),J())},K)}update(){super.update(),this.funcsToLoop[0]&&this.funcsToLoop.forEach(B=>{B.count+=1,B.func(B.count,B.remove),B.maxFrame&&B.count>B.maxFrame&&B.remove()})}destroy(B){globalThis.customUpdater=null,[...this.funcsToLoop].forEach(V=>V.remove()),this.funcsToLoop=[],super.destroy(B)}}const hasIntersection=($,U)=>!lodashExports.isEmpty(lodashExports.intersection($,U)),getTextWeighted=$=>{var K;let U=null;const B=(K=lodashExports.maxBy($,"priority"))==null?void 0:K.priority;return B?U=$.filter(Z=>Z.priority===B):U=$,randomByWeight(U,Z=>Z.weight||1)},handleCondition=(textConfig,state)=>{var $;const{reuse,enemyId,skillId,unitId,enemyHp,preTextLabel,script,upperHp,lowerHp,totalHp}=textConfig;let isUsed=!1,isPreTextExist=!1;return($=state.textLog)==null||$.forEach(U=>{U===textConfig&&(isUsed=!0),preTextLabel&&textConfig.label&&preTextLabel.includes(textConfig.label)&&(isPreTextExist=!0)}),isUsed&&!reuse||!lodashExports.isNil(enemyId)&&!enemyId.includes(state.enemyId)||!lodashExports.isNil(skillId)&&!skillId.includes(state.skillId||0)||!lodashExports.isNil(unitId)&&!hasIntersection(state.unitTypes,unitId)||!lodashExports.isNil(enemyHp)&&enemyHp<(state.enemyHpRate||100)||!lodashExports.isNil(upperHp)&&upperHp<state.upperHp||!lodashExports.isNil(lowerHp)&&lowerHp<state.lowerHp||!lodashExports.isNil(totalHp)&&totalHp<state.upperHp+state.lowerHp||!lodashExports.isNil(preTextLabel)&&!isPreTextExist?!1:script?eval(script):!0},getTextFromPool=($,U,B)=>{const V=$.filter(Z=>handleCondition(Z,U)),K=getTextWeighted(V);return!K&&B?$.find(Z=>{var J;return(J=Z.skillId)==null?void 0:J.includes(U.skillId||0)})||$[0]:K},getState=($,U={})=>{const B=calculateEnemiesHpRate(),V=$.battleController.battleLog.map(Z=>Z.text).filter(Boolean);return{enemyId:$.enemyConfig.id,textLog:V,enemyHpRate:B,puzzle:$,upperHp:$.heroine.upperHp,lowerHp:$.heroine.lowerHp,...U}};var c$6=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,v$3=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,y$1=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`;let _$1=class extends core.Filter{constructor(U=4,B=3,V=!1){super(c$6,V?y$1:v$3),this._kernels=[],this._blur=4,this._quality=3,this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new core.Point,this.pixelSize=1,this._clamp=V,Array.isArray(U)?this.kernels=U:(this._blur=U,this.quality=B)}apply(U,B,V,K){const Z=this._pixelSize.x/B._frame.width,J=this._pixelSize.y/B._frame.height;let it;if(this._quality===1||this._blur===0)it=this._kernels[0]+.5,this.uniforms.uOffset[0]=it*Z,this.uniforms.uOffset[1]=it*J,U.applyFilter(this,B,V,K);else{const lt=U.getFilterTexture();let ht=B,Tt=lt,zt;const Et=this._quality-1;for(let Ot=0;Ot<Et;Ot++)it=this._kernels[Ot]+.5,this.uniforms.uOffset[0]=it*Z,this.uniforms.uOffset[1]=it*J,U.applyFilter(this,ht,Tt,1),zt=ht,ht=Tt,Tt=zt;it=this._kernels[Et]+.5,this.uniforms.uOffset[0]=it*Z,this.uniforms.uOffset[1]=it*J,U.applyFilter(this,ht,V,K),U.returnFilterTexture(lt)}}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((U,B)=>U+B+.5,0))}_generateKernels(){const U=this._blur,B=this._quality,V=[U];if(U>0){let K=U;const Z=U/B;for(let J=1;J<B;J++)K-=Z,V.push(K)}this._kernels=V,this._updatePadding()}get kernels(){return this._kernels}set kernels(U){Array.isArray(U)&&U.length>0?(this._kernels=U,this._quality=U.length,this._blur=Math.max(...U)):(this._kernels=[0],this._quality=1)}get clamp(){return this._clamp}set pixelSize(U){typeof U=="number"?(this._pixelSize.x=U,this._pixelSize.y=U):Array.isArray(U)?(this._pixelSize.x=U[0],this._pixelSize.y=U[1]):U instanceof core.Point?(this._pixelSize.x=U.x,this._pixelSize.y=U.y):(this._pixelSize.x=1,this._pixelSize.y=1)}get pixelSize(){return this._pixelSize}get quality(){return this._quality}set quality(U){this._quality=Math.max(1,Math.round(U)),this._generateKernels()}get blur(){return this._blur}set blur(U){this._blur=U,this._generateKernels()}};var a$5=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,m$2=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`;let x$1=class extends core.Filter{constructor(U=.5){super(a$5,m$2),this.threshold=U}get threshold(){return this.uniforms.threshold}set threshold(U){this.uniforms.threshold=U}};var g$2=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;const c$5=class extends core.Filter{constructor(U){super(a$5,g$2),this.bloomScale=1,this.brightness=1,this._resolution=core.settings.FILTER_RESOLUTION,typeof U=="number"&&(U={threshold:U});const B=Object.assign(c$5.defaults,U);this.bloomScale=B.bloomScale,this.brightness=B.brightness;const{kernels:V,blur:K,quality:Z,pixelSize:J,resolution:it}=B;this._extractFilter=new x$1(B.threshold),this._extractFilter.resolution=it,this._blurFilter=V?new _$1(V):new _$1(K,Z),this.pixelSize=J,this.resolution=it}apply(U,B,V,K,Z){const J=U.getFilterTexture();this._extractFilter.apply(U,B,J,1,Z);const it=U.getFilterTexture();this._blurFilter.apply(U,J,it,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=it,U.applyFilter(this,B,V,K),U.returnFilterTexture(it),U.returnFilterTexture(J)}get resolution(){return this._resolution}set resolution(U){this._resolution=U,this._extractFilter&&(this._extractFilter.resolution=U),this._blurFilter&&(this._blurFilter.resolution=U)}get threshold(){return this._extractFilter.threshold}set threshold(U){this._extractFilter.threshold=U}get kernels(){return this._blurFilter.kernels}set kernels(U){this._blurFilter.kernels=U}get blur(){return this._blurFilter.blur}set blur(U){this._blurFilter.blur=U}get quality(){return this._blurFilter.quality}set quality(U){this._blurFilter.quality=U}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(U){this._blurFilter.pixelSize=U}};let b$1=c$5;b$1.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:core.settings.FILTER_RESOLUTION};/*!
 * @pixi/filter-alpha - v5.3.12
 * Compiled Wed, 23 Mar 2022 18:34:28 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */var extendStatics$1=function($,U){return extendStatics$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(B,V){B.__proto__=V}||function(B,V){for(var K in V)V.hasOwnProperty(K)&&(B[K]=V[K])},extendStatics$1($,U)};function __extends$1($,U){extendStatics$1($,U);function B(){this.constructor=$}$.prototype=U===null?Object.create(U):(B.prototype=U.prototype,new B)}var fragment=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;(function($){__extends$1(U,$);function U(B){B===void 0&&(B=1);var V=$.call(this,core.defaultVertex,fragment,{uAlpha:1})||this;return V.alpha=B,V}return Object.defineProperty(U.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(B){this.uniforms.uAlpha=B},enumerable:!1,configurable:!0}),U})(core.Filter);/*!
 * @pixi/filter-blur - v5.3.12
 * Compiled Wed, 23 Mar 2022 18:34:28 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */var extendStatics=function($,U){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(B,V){B.__proto__=V}||function(B,V){for(var K in V)V.hasOwnProperty(K)&&(B[K]=V[K])},extendStatics($,U)};function __extends($,U){extendStatics($,U);function B(){this.constructor=$}$.prototype=U===null?Object.create(U):(B.prototype=U.prototype,new B)}var vertTemplate=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function generateBlurVertSource($,U){var B=Math.ceil($/2),V=vertTemplate,K="",Z;U?Z="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":Z="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var J=0;J<$;J++){var it=Z.replace("%index%",J.toString());it=it.replace("%sampleIndex%",J-(B-1)+".0"),K+=it,K+=`
`}return V=V.replace("%blur%",K),V=V.replace("%size%",$.toString()),V}var GAUSSIAN_VALUES={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},fragTemplate=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function generateBlurFragSource($){for(var U=GAUSSIAN_VALUES[$],B=U.length,V=fragTemplate,K="",Z="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",J,it=0;it<$;it++){var lt=Z.replace("%index%",it.toString());J=it,it>=B&&(J=$-it-1),lt=lt.replace("%value%",U[J].toString()),K+=lt,K+=`
`}return V=V.replace("%blur%",K),V=V.replace("%size%",$.toString()),V}var ENV;(function($){$[$.WEBGL_LEGACY=0]="WEBGL_LEGACY",$[$.WEBGL=1]="WEBGL",$[$.WEBGL2=2]="WEBGL2"})(ENV||(ENV={}));var RENDERER_TYPE;(function($){$[$.UNKNOWN=0]="UNKNOWN",$[$.WEBGL=1]="WEBGL",$[$.CANVAS=2]="CANVAS"})(RENDERER_TYPE||(RENDERER_TYPE={}));var BUFFER_BITS;(function($){$[$.COLOR=16384]="COLOR",$[$.DEPTH=256]="DEPTH",$[$.STENCIL=1024]="STENCIL"})(BUFFER_BITS||(BUFFER_BITS={}));var BLEND_MODES;(function($){$[$.NORMAL=0]="NORMAL",$[$.ADD=1]="ADD",$[$.MULTIPLY=2]="MULTIPLY",$[$.SCREEN=3]="SCREEN",$[$.OVERLAY=4]="OVERLAY",$[$.DARKEN=5]="DARKEN",$[$.LIGHTEN=6]="LIGHTEN",$[$.COLOR_DODGE=7]="COLOR_DODGE",$[$.COLOR_BURN=8]="COLOR_BURN",$[$.HARD_LIGHT=9]="HARD_LIGHT",$[$.SOFT_LIGHT=10]="SOFT_LIGHT",$[$.DIFFERENCE=11]="DIFFERENCE",$[$.EXCLUSION=12]="EXCLUSION",$[$.HUE=13]="HUE",$[$.SATURATION=14]="SATURATION",$[$.COLOR=15]="COLOR",$[$.LUMINOSITY=16]="LUMINOSITY",$[$.NORMAL_NPM=17]="NORMAL_NPM",$[$.ADD_NPM=18]="ADD_NPM",$[$.SCREEN_NPM=19]="SCREEN_NPM",$[$.NONE=20]="NONE",$[$.SRC_OVER=0]="SRC_OVER",$[$.SRC_IN=21]="SRC_IN",$[$.SRC_OUT=22]="SRC_OUT",$[$.SRC_ATOP=23]="SRC_ATOP",$[$.DST_OVER=24]="DST_OVER",$[$.DST_IN=25]="DST_IN",$[$.DST_OUT=26]="DST_OUT",$[$.DST_ATOP=27]="DST_ATOP",$[$.ERASE=26]="ERASE",$[$.SUBTRACT=28]="SUBTRACT",$[$.XOR=29]="XOR"})(BLEND_MODES||(BLEND_MODES={}));var DRAW_MODES;(function($){$[$.POINTS=0]="POINTS",$[$.LINES=1]="LINES",$[$.LINE_LOOP=2]="LINE_LOOP",$[$.LINE_STRIP=3]="LINE_STRIP",$[$.TRIANGLES=4]="TRIANGLES",$[$.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",$[$.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(DRAW_MODES||(DRAW_MODES={}));var FORMATS;(function($){$[$.RGBA=6408]="RGBA",$[$.RGB=6407]="RGB",$[$.ALPHA=6406]="ALPHA",$[$.LUMINANCE=6409]="LUMINANCE",$[$.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",$[$.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",$[$.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(FORMATS||(FORMATS={}));var TARGETS;(function($){$[$.TEXTURE_2D=3553]="TEXTURE_2D",$[$.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",$[$.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",$[$.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",$[$.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",$[$.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",$[$.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",$[$.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",$[$.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(TARGETS||(TARGETS={}));var TYPES;(function($){$[$.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",$[$.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",$[$.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",$[$.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",$[$.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",$[$.FLOAT=5126]="FLOAT",$[$.HALF_FLOAT=36193]="HALF_FLOAT"})(TYPES||(TYPES={}));var SCALE_MODES;(function($){$[$.NEAREST=0]="NEAREST",$[$.LINEAR=1]="LINEAR"})(SCALE_MODES||(SCALE_MODES={}));var WRAP_MODES;(function($){$[$.CLAMP=33071]="CLAMP",$[$.REPEAT=10497]="REPEAT",$[$.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(WRAP_MODES||(WRAP_MODES={}));var MIPMAP_MODES;(function($){$[$.OFF=0]="OFF",$[$.POW2=1]="POW2",$[$.ON=2]="ON"})(MIPMAP_MODES||(MIPMAP_MODES={}));var ALPHA_MODES;(function($){$[$.NPM=0]="NPM",$[$.UNPACK=1]="UNPACK",$[$.PMA=2]="PMA",$[$.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",$[$.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",$[$.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(ALPHA_MODES||(ALPHA_MODES={}));var CLEAR_MODES;(function($){$[$.NO=0]="NO",$[$.YES=1]="YES",$[$.AUTO=2]="AUTO",$[$.BLEND=0]="BLEND",$[$.CLEAR=1]="CLEAR",$[$.BLIT=2]="BLIT"})(CLEAR_MODES||(CLEAR_MODES={}));var GC_MODES;(function($){$[$.AUTO=0]="AUTO",$[$.MANUAL=1]="MANUAL"})(GC_MODES||(GC_MODES={}));var PRECISION;(function($){$.LOW="lowp",$.MEDIUM="mediump",$.HIGH="highp"})(PRECISION||(PRECISION={}));var MASK_TYPES;(function($){$[$.NONE=0]="NONE",$[$.SCISSOR=1]="SCISSOR",$[$.STENCIL=2]="STENCIL",$[$.SPRITE=3]="SPRITE"})(MASK_TYPES||(MASK_TYPES={}));var MSAA_QUALITY;(function($){$[$.NONE=0]="NONE",$[$.LOW=2]="LOW",$[$.MEDIUM=4]="MEDIUM",$[$.HIGH=8]="HIGH"})(MSAA_QUALITY||(MSAA_QUALITY={}));var BlurFilterPass=function($){__extends(U,$);function U(B,V,K,Z,J){V===void 0&&(V=8),K===void 0&&(K=4),Z===void 0&&(Z=settings.settings.FILTER_RESOLUTION),J===void 0&&(J=5);var it=this,lt=generateBlurVertSource(J,B),ht=generateBlurFragSource(J);return it=$.call(this,lt,ht)||this,it.horizontal=B,it.resolution=Z,it._quality=0,it.quality=K,it.blur=V,it}return U.prototype.apply=function(B,V,K,Z){if(K?this.horizontal?this.uniforms.strength=1/K.width*(K.width/V.width):this.uniforms.strength=1/K.height*(K.height/V.height):this.horizontal?this.uniforms.strength=1/B.renderer.width*(B.renderer.width/V.width):this.uniforms.strength=1/B.renderer.height*(B.renderer.height/V.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)B.applyFilter(this,V,K,Z);else{var J=B.getFilterTexture(),it=B.renderer,lt=V,ht=J;this.state.blend=!1,B.applyFilter(this,lt,ht,CLEAR_MODES.CLEAR);for(var Tt=1;Tt<this.passes-1;Tt++){B.bindAndClear(lt,CLEAR_MODES.BLIT),this.uniforms.uSampler=ht;var zt=ht;ht=lt,lt=zt,it.shader.bind(this),it.geometry.draw(5)}this.state.blend=!0,B.applyFilter(this,ht,K,Z),B.returnFilterTexture(J)}},Object.defineProperty(U.prototype,"blur",{get:function(){return this.strength},set:function(B){this.padding=1+Math.abs(B)*2,this.strength=B},enumerable:!1,configurable:!0}),Object.defineProperty(U.prototype,"quality",{get:function(){return this._quality},set:function(B){this._quality=B,this.passes=B},enumerable:!1,configurable:!0}),U}(core.Filter);(function($){__extends(U,$);function U(B,V,K,Z){B===void 0&&(B=8),V===void 0&&(V=4),K===void 0&&(K=settings.settings.FILTER_RESOLUTION),Z===void 0&&(Z=5);var J=$.call(this)||this;return J.blurXFilter=new BlurFilterPass(!0,B,V,K,Z),J.blurYFilter=new BlurFilterPass(!1,B,V,K,Z),J.resolution=K,J.quality=V,J.blur=B,J.repeatEdgePixels=!1,J}return U.prototype.apply=function(B,V,K,Z){var J=Math.abs(this.blurXFilter.strength),it=Math.abs(this.blurYFilter.strength);if(J&&it){var lt=B.getFilterTexture();this.blurXFilter.apply(B,V,lt,CLEAR_MODES.CLEAR),this.blurYFilter.apply(B,lt,K,Z),B.returnFilterTexture(lt)}else it?this.blurYFilter.apply(B,V,K,Z):this.blurXFilter.apply(B,V,K,Z)},U.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(U.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(B){this.blurXFilter.blur=this.blurYFilter.blur=B,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(U.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(B){this.blurXFilter.quality=this.blurYFilter.quality=B},enumerable:!1,configurable:!0}),Object.defineProperty(U.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(B){this.blurXFilter.blur=B,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(U.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(B){this.blurYFilter.blur=B,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(U.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(B){this.blurYFilter.blendMode=B},enumerable:!1,configurable:!0}),Object.defineProperty(U.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(B){this._repeatEdgePixels=B,this.updatePadding()},enumerable:!1,configurable:!0}),U})(core.Filter);var d$3=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,u$3=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;const n$3=class extends core.Filter{constructor(U){super(d$3,u$3),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,n$3.defaults,U)}apply(U,B,V,K){const{width:Z,height:J}=B.filterFrame;this.uniforms.dimensions[0]=Z,this.uniforms.dimensions[1]=J,U.applyFilter(this,B,V,K)}get radius(){return this.uniforms.radius}set radius(U){this.uniforms.radius=U}get strength(){return this.uniforms.strength}set strength(U){this.uniforms.strength=U}get center(){return this.uniforms.center}set center(U){this.uniforms.center=U}};let t$2=n$3;t$2.defaults={center:[.5,.5],radius:100,strength:1};var Q=`const float PI = 3.1415926538;
const float PI_2 = PI*2.;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;
uniform sampler2D uSampler;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform int uNumStops;
uniform float uAlphas[3*MAX_STOPS];
uniform vec3 uColors[MAX_STOPS];
uniform float uOffsets[MAX_STOPS];
uniform int uType;
uniform float uAngle;
uniform float uAlpha;
uniform int uMaxColors;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(vFilterCoord, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    // current/original color
    vec4 currentColor = texture2D(uSampler, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        gl_FragColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, uType, radians(uAngle));

    // check gradient bounds
    float offsetMin = uOffsets[0];
    float offsetMax = 0.0;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == uNumStops-1){ // last index
            offsetMax = uOffsets[i];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        gl_FragColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0) {
        float stepSize = 1./float(uMaxColors);
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uOffsets[i]) {
            from = ColorStop(uOffsets[i], uColors[i], uAlphas[i]);
            to = ColorStop(uOffsets[i+1], uColors[i+1], uAlphas[i+1]);
        }

        if (i == uNumStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    // mix resulting color with current color
    gl_FragColor = gradientColor + currentColor*(1.-gradientColor.a);
}
`,W=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform vec4 inputSize;
uniform vec4 outputFrame;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
    vFilterCoord = vTextureCoord * inputSize.xy / outputFrame.zw;
}
`,v$2=v$2||{};v$2.stringify=function(){var $={"visit_linear-gradient":function(U){return $.visit_gradient(U)},"visit_repeating-linear-gradient":function(U){return $.visit_gradient(U)},"visit_radial-gradient":function(U){return $.visit_gradient(U)},"visit_repeating-radial-gradient":function(U){return $.visit_gradient(U)},visit_gradient:function(U){var B=$.visit(U.orientation);return B&&(B+=", "),U.type+"("+B+$.visit(U.colorStops)+")"},visit_shape:function(U){var B=U.value,V=$.visit(U.at),K=$.visit(U.style);return K&&(B+=" "+K),V&&(B+=" at "+V),B},"visit_default-radial":function(U){var B="",V=$.visit(U.at);return V&&(B+=V),B},"visit_extent-keyword":function(U){var B=U.value,V=$.visit(U.at);return V&&(B+=" at "+V),B},"visit_position-keyword":function(U){return U.value},visit_position:function(U){return $.visit(U.value.x)+" "+$.visit(U.value.y)},"visit_%":function(U){return U.value+"%"},visit_em:function(U){return U.value+"em"},visit_px:function(U){return U.value+"px"},visit_literal:function(U){return $.visit_color(U.value,U)},visit_hex:function(U){return $.visit_color("#"+U.value,U)},visit_rgb:function(U){return $.visit_color("rgb("+U.value.join(", ")+")",U)},visit_rgba:function(U){return $.visit_color("rgba("+U.value.join(", ")+")",U)},visit_color:function(U,B){var V=U,K=$.visit(B.length);return K&&(V+=" "+K),V},visit_angular:function(U){return U.value+"deg"},visit_directional:function(U){return"to "+U.value},visit_array:function(U){var B="",V=U.length;return U.forEach(function(K,Z){B+=$.visit(K),Z<V-1&&(B+=", ")}),B},visit:function(U){if(!U)return"";var B="";if(U instanceof Array)return $.visit_array(U,B);if(U.type){var V=$["visit_"+U.type];if(V)return V(U);throw Error("Missing visitor visit_"+U.type)}else throw Error("Invalid node.")}};return function(U){return $.visit(U)}}();var v$2=v$2||{};v$2.parse=function(){var $={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},U="";function B(gt){var St=new Error(U+": "+gt);throw St.source=U,St}function V(){var gt=K();return U.length>0&&B("Invalid input not EOF"),gt}function K(){return Zt(Z)}function Z(){return J("linear-gradient",$.linearGradient,lt)||J("repeating-linear-gradient",$.repeatingLinearGradient,lt)||J("radial-gradient",$.radialGradient,zt)||J("repeating-radial-gradient",$.repeatingRadialGradient,zt)}function J(gt,St,Ht){return it(St,function(Fe){var Oe=Ht();return Oe&&(rr($.comma)||B("Missing comma before color stops")),{type:gt,orientation:Oe,colorStops:Zt(mr)}})}function it(gt,St){var Ht=rr(gt);if(Ht){rr($.startCall)||B("Missing (");var Fe=St(Ht);return rr($.endCall)||B("Missing )"),Fe}}function lt(){return ht()||Tt()}function ht(){return _e("directional",$.sideOrCorner,1)}function Tt(){return _e("angular",$.angleValue,1)}function zt(){var gt,St=Et(),Ht;return St&&(gt=[],gt.push(St),Ht=U,rr($.comma)&&(St=Et(),St?gt.push(St):U=Ht)),gt}function Et(){var gt=Ot()||Vt();if(gt)gt.at=Rt();else{var St=Bt();if(St){gt=St;var Ht=Rt();Ht&&(gt.at=Ht)}else{var Fe=Re();Fe&&(gt={type:"default-radial",at:Fe})}}return gt}function Ot(){var gt=_e("shape",/^(circle)/i,0);return gt&&(gt.style=An()||Bt()),gt}function Vt(){var gt=_e("shape",/^(ellipse)/i,0);return gt&&(gt.style=$r()||Bt()),gt}function Bt(){return _e("extent-keyword",$.extentKeywords,1)}function Rt(){if(_e("position",/^at/,0)){var gt=Re();return gt||B("Missing positioning value"),gt}}function Re(){var gt=Mr();if(gt.x||gt.y)return{type:"position",value:gt}}function Mr(){return{x:$r(),y:$r()}}function Zt(gt){var St=gt(),Ht=[];if(St)for(Ht.push(St);rr($.comma);)St=gt(),St?Ht.push(St):B("One extra comma");return Ht}function mr(){var gt=Ge();return gt||B("Expected color definition"),gt.length=$r(),gt}function Ge(){return Ke()||en()||Pr()||vr()}function vr(){return _e("literal",$.literalColor,0)}function Ke(){return _e("hex",$.hexColor,1)}function Pr(){return it($.rgbColor,function(){return{type:"rgb",value:Zt(Sn)}})}function en(){return it($.rgbaColor,function(){return{type:"rgba",value:Zt(Sn)}})}function Sn(){return rr($.number)[1]}function $r(){return _e("%",$.percentageValue,1)||yi()||An()}function yi(){return _e("position-keyword",$.positionKeywords,1)}function An(){return _e("px",$.pixelValue,1)||_e("em",$.emValue,1)}function _e(gt,St,Ht){var Fe=rr(St);if(Fe)return{type:gt,value:Fe[Ht]}}function rr(gt){var St,Ht;return Ht=/^[\n\r\t\s]+/.exec(U),Ht&&Pn(Ht[0].length),St=gt.exec(U),St&&Pn(St[0].length),St}function Pn(gt){U=U.substr(gt)}return function(gt){return U=gt.toString(),V()}}();var ee=v$2.parse;v$2.stringify;var R={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function te($){var U,B=[],V=1,K;if(typeof $=="string")if(R[$])B=R[$].slice(),K="rgb";else if($==="transparent")V=0,K="rgb",B=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test($)){var Z=$.slice(1),J=Z.length,it=J<=4;V=1,it?(B=[parseInt(Z[0]+Z[0],16),parseInt(Z[1]+Z[1],16),parseInt(Z[2]+Z[2],16)],J===4&&(V=parseInt(Z[3]+Z[3],16)/255)):(B=[parseInt(Z[0]+Z[1],16),parseInt(Z[2]+Z[3],16),parseInt(Z[4]+Z[5],16)],J===8&&(V=parseInt(Z[6]+Z[7],16)/255)),B[0]||(B[0]=0),B[1]||(B[1]=0),B[2]||(B[2]=0),K="rgb"}else if(U=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec($)){var lt=U[1],ht=lt==="rgb",Z=lt.replace(/a$/,"");K=Z;var J=Z==="cmyk"?4:Z==="gray"?1:3;B=U[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(Et,Ot){if(/%$/.test(Et))return Ot===J?parseFloat(Et)/100:Z==="rgb"?parseFloat(Et)*255/100:parseFloat(Et);if(Z[Ot]==="h"){if(/deg$/.test(Et))return parseFloat(Et);if(G[Et]!==void 0)return G[Et]}return parseFloat(Et)}),lt===Z&&B.push(1),V=ht||B[J]===void 0?1:B[J],B=B.slice(0,J)}else $.length>10&&/[0-9](?:\s|\/)/.test($)&&(B=$.match(/([0-9]+)/g).map(function(Tt){return parseFloat(Tt)}),K=$.match(/([a-z])/ig).join("").toLowerCase());else isNaN($)?Array.isArray($)||$.length?(B=[$[0],$[1],$[2]],K="rgb",V=$.length===4?$[3]:1):$ instanceof Object&&($.r!=null||$.red!=null||$.R!=null?(K="rgb",B=[$.r||$.red||$.R||0,$.g||$.green||$.G||0,$.b||$.blue||$.B||0]):(K="hsl",B=[$.h||$.hue||$.H||0,$.s||$.saturation||$.S||0,$.l||$.lightness||$.L||$.b||$.brightness]),V=$.a||$.alpha||$.opacity||1,$.opacity!=null&&(V/=100)):(K="rgb",B=[$>>>16,($&65280)>>>8,$&255]);return{space:K,values:B,alpha:V}}var A={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},S={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function($){var U=$[0]/360,B=$[1]/100,V=$[2]/100,K,Z,J,it,lt;if(B===0)return lt=V*255,[lt,lt,lt];V<.5?Z=V*(1+B):Z=V+B-V*B,K=2*V-Z,it=[0,0,0];for(var ht=0;ht<3;ht++)J=U+1/3*-(ht-1),J<0?J++:J>1&&J--,6*J<1?lt=K+(Z-K)*6*J:2*J<1?lt=Z:3*J<2?lt=K+(Z-K)*(2/3-J)*6:lt=K,it[ht]=lt*255;return it}};A.hsl=function($){var U=$[0]/255,B=$[1]/255,V=$[2]/255,K=Math.min(U,B,V),Z=Math.max(U,B,V),J=Z-K,it,lt,ht;return Z===K?it=0:U===Z?it=(B-V)/J:B===Z?it=2+(V-U)/J:V===Z&&(it=4+(U-B)/J),it=Math.min(it*60,360),it<0&&(it+=360),ht=(K+Z)/2,Z===K?lt=0:ht<=.5?lt=J/(Z+K):lt=J/(2-Z-K),[it,lt*100,ht*100]};function re($){Array.isArray($)&&$.raw&&($=String.raw(...arguments));var U,B=te($);if(!B.space)return[];const V=B.space[0]==="h"?S.min:A.min,K=B.space[0]==="h"?S.max:A.max;return U=Array(3),U[0]=Math.min(Math.max(B.values[0],V[0]),K[0]),U[1]=Math.min(Math.max(B.values[1],V[1]),K[1]),U[2]=Math.min(Math.max(B.values[2],V[2]),K[2]),B.space[0]==="h"&&(U=S.rgb(U)),U.push(Math.min(Math.max(B.alpha,0),1)),U}function L($){switch(typeof $){case"string":return ne($);case"number":return core.utils.hex2rgb($);default:return $}}function ne($){const U=re($);if(!U)throw new Error(`Unable to parse color "${$}" as RGBA.`);return[U[0]/255,U[1]/255,U[2]/255,U[3]]}function ie($){const U=ee(ge($));if(U.length===0)throw new Error("Invalid CSS gradient.");if(U.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const B=U[0],V=oe(B.type),K=ae(B.colorStops),Z=ce(B.orientation);return{type:V,stops:K,angle:Z}}function oe($){const U={"linear-gradient":0,"radial-gradient":1};if(!($ in U))throw new Error(`Unsupported gradient type "${$}"`);return U[$]}function ae($){const U=ue($),B=[];for(let V=0;V<$.length;V++){const K=le($[V]);B.push({offset:U[V],color:K.slice(0,3),alpha:K[3]})}return B}function le($){return L(se($))}function se($){switch($.type){case"hex":return`#${$.value}`;case"literal":return $.value;default:return`${$.type}(${$.value.join(",")})`}}function ue($){const U=[];for(let K=0;K<$.length;K++){const Z=$[K];let J=-1;Z.type==="literal"&&Z.length&&"type"in Z.length&&Z.length.type==="%"&&"value"in Z.length&&(J=parseFloat(Z.length.value)/100),U.push(J)}const B=K=>{for(let Z=K;Z<U.length;Z++)if(U[Z]!==-1)return{indexDelta:Z-K,offset:U[Z]};return{indexDelta:U.length-1-K,offset:1}};let V=0;for(let K=0;K<U.length;K++){const Z=U[K];if(Z!==-1)V=Z;else if(K===0)U[K]=0;else if(K+1===U.length)U[K]=1;else{const J=B(K),it=(J.offset-V)/(1+J.indexDelta);for(let lt=0;lt<=J.indexDelta;lt++)U[K+lt]=V+(lt+1)*it;K+=J.indexDelta,V=U[K]}}return U.map(fe)}function fe($){return $.toString().length>6?parseFloat($.toString().substring(0,6)):$}function ce($){if(typeof $>"u")return 0;if("type"in $&&"value"in $)switch($.type){case"angular":return parseFloat($.value);case"directional":return pe($.value)}return 0}function pe($){const U={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!($ in U))throw new Error(`Unsupported directional value "${$}"`);return U[$]}function ge($){let U=$.replace(/\s{2,}/gu," ");return U=U.replace(/;/g,""),U=U.replace(/ ,/g,","),U=U.replace(/\( /g,"("),U=U.replace(/ \)/g,")"),U.trim()}var he=Object.defineProperty,me=Object.defineProperties,de=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,z$1=($,U,B)=>U in $?he($,U,{enumerable:!0,configurable:!0,writable:!0,value:B}):$[U]=B,k=($,U)=>{for(var B in U||(U={}))ve.call(U,B)&&z$1($,B,U[B]);if(N)for(var B of N(U))ye.call(U,B)&&z$1($,B,U[B]);return $},be=($,U)=>me($,de(U));const D=90;function Ce($){return[...$].sort((U,B)=>U.offset-B.offset)}const P$1=class extends core.Filter{constructor(U){U&&"css"in U&&(U=be(k({},ie(U.css||"")),{alpha:U.alpha,maxColors:U.maxColors}));const B=k(k({},P$1.defaults),U);if(!B.stops||B.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");super(W,Q),this._stops=[],this.autoFit=!1,Object.assign(this,B)}get stops(){return this._stops}set stops(U){const B=Ce(U),V=new Float32Array(B.length*3),K=0,Z=1,J=2;for(let it=0;it<B.length;it++){const lt=L(B[it].color),ht=it*3;V[ht+K]=lt[K],V[ht+Z]=lt[Z],V[ht+J]=lt[J]}this.uniforms.uColors=V,this.uniforms.uOffsets=B.map(it=>it.offset),this.uniforms.uAlphas=B.map(it=>it.alpha),this.uniforms.uNumStops=B.length,this._stops=B}set type(U){this.uniforms.uType=U}get type(){return this.uniforms.uType}set angle(U){this.uniforms.uAngle=U-D}get angle(){return this.uniforms.uAngle+D}set alpha(U){this.uniforms.uAlpha=U}get alpha(){return this.uniforms.uAlpha}set maxColors(U){this.uniforms.uMaxColors=U}get maxColors(){return this.uniforms.uMaxColors}};let y=P$1;y.LINEAR=0,y.RADIAL=1,y.CONIC=2,y.defaults={type:P$1.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0};var a$4=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,g$1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;const e$1=class extends core.Filter{constructor(U){super(a$4,g$1),this.time=0,this.seed=0,this.uniforms.dimensions=new Float32Array(2),Object.assign(this,e$1.defaults,U)}apply(U,B,V,K){const{width:Z,height:J}=B.filterFrame;this.uniforms.dimensions[0]=Z,this.uniforms.dimensions[1]=J,this.uniforms.seed=this.seed,this.uniforms.time=this.time,U.applyFilter(this,B,V,K)}set curvature(U){this.uniforms.curvature=U}get curvature(){return this.uniforms.curvature}set lineWidth(U){this.uniforms.lineWidth=U}get lineWidth(){return this.uniforms.lineWidth}set lineContrast(U){this.uniforms.lineContrast=U}get lineContrast(){return this.uniforms.lineContrast}set verticalLine(U){this.uniforms.verticalLine=U}get verticalLine(){return this.uniforms.verticalLine}set noise(U){this.uniforms.noise=U}get noise(){return this.uniforms.noise}set noiseSize(U){this.uniforms.noiseSize=U}get noiseSize(){return this.uniforms.noiseSize}set vignetting(U){this.uniforms.vignetting=U}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(U){this.uniforms.vignettingAlpha=U}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(U){this.uniforms.vignettingBlur=U}get vignettingBlur(){return this.uniforms.vignettingBlur}};let t$1=e$1;t$1.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0};var w=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,O=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`,P=Object.defineProperty,c$4=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,_=($,U,B)=>U in $?P($,U,{enumerable:!0,configurable:!0,writable:!0,value:B}):$[U]=B,b=($,U)=>{for(var B in U||(U={}))T.call(U,B)&&_($,B,U[B]);if(c$4)for(var B of c$4(U))z.call(U,B)&&_($,B,U[B]);return $};const o$3=class extends core.Filter{constructor(U){super(),this.angle=45,this._distance=5,this._resolution=core.settings.FILTER_RESOLUTION;const B=U?b(b({},o$3.defaults),U):o$3.defaults,{kernels:V,blur:K,quality:Z,pixelSize:J,resolution:it}=B;this._offset=new core.ObservablePoint(this._updatePadding,this),this._tintFilter=new core.Filter(w,O),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=this._offset,this._tintFilter.resolution=it,this._blurFilter=V?new _$1(V):new _$1(K,Z),this.pixelSize=J,this.resolution=it;const{shadowOnly:lt,rotation:ht,distance:Tt,offset:zt,alpha:Et,color:Ot}=B;this.shadowOnly=lt,ht!==void 0&&Tt!==void 0?(this.rotation=ht,this.distance=Tt):this.offset=zt,this.alpha=Et,this.color=Ot}apply(U,B,V,K){const Z=U.getFilterTexture();this._tintFilter.apply(U,B,Z,1),this._blurFilter.apply(U,Z,V,K),this.shadowOnly!==!0&&U.applyFilter(this,B,V,0),U.returnFilterTexture(Z)}_updatePadding(){const U=Math.max(Math.abs(this._offset.x),Math.abs(this._offset.y));this.padding=U+this.blur*2}_updateShift(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))}set offset(U){this._offset.copyFrom(U),this._updatePadding()}get offset(){return this._offset}get resolution(){return this._resolution}set resolution(U){this._resolution=U,this._tintFilter&&(this._tintFilter.resolution=U),this._blurFilter&&(this._blurFilter.resolution=U)}get distance(){return this._distance}set distance(U){core.utils.deprecation("5.3.0","DropShadowFilter distance is deprecated, use offset"),this._distance=U,this._updatePadding(),this._updateShift()}get rotation(){return this.angle/core.DEG_TO_RAD}set rotation(U){core.utils.deprecation("5.3.0","DropShadowFilter rotation is deprecated, use offset"),this.angle=U*core.DEG_TO_RAD,this._updateShift()}get alpha(){return this._tintFilter.uniforms.alpha}set alpha(U){this._tintFilter.uniforms.alpha=U}get color(){return core.utils.rgb2hex(this._tintFilter.uniforms.color)}set color(U){core.utils.hex2rgb(U,this._tintFilter.uniforms.color)}get kernels(){return this._blurFilter.kernels}set kernels(U){this._blurFilter.kernels=U}get blur(){return this._blurFilter.blur}set blur(U){this._blurFilter.blur=U,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(U){this._blurFilter.quality=U}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(U){this._blurFilter.pixelSize=U}};let F=o$3;F.defaults={offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:core.settings.FILTER_RESOLUTION};var p$1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,M=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;const c$3=class extends core.Filter{constructor(U){super(p$1,M),this.offset=100,this.fillMode=c$3.TRANSPARENT,this.average=!1,this.seed=0,this.minSize=8,this.sampleSize=512,this._slices=0,this._offsets=new Float32Array(1),this._sizes=new Float32Array(1),this._direction=-1,this.uniforms.dimensions=new Float32Array(2),this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=core.Texture.from(this._canvas,{scaleMode:core.SCALE_MODES.NEAREST}),Object.assign(this,c$3.defaults,U)}apply(U,B,V,K){const{width:Z,height:J}=B.filterFrame;this.uniforms.dimensions[0]=Z,this.uniforms.dimensions[1]=J,this.uniforms.aspect=J/Z,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,U.applyFilter(this,B,V,K)}_randomizeSizes(){const U=this._sizes,B=this._slices-1,V=this.sampleSize,K=Math.min(this.minSize/V,.9/this._slices);if(this.average){const Z=this._slices;let J=1;for(let it=0;it<B;it++){const lt=J/(Z-it),ht=Math.max(lt*(1-Math.random()*.6),K);U[it]=ht,J-=ht}U[B]=J}else{let Z=1;const J=Math.sqrt(1/this._slices);for(let it=0;it<B;it++){const lt=Math.max(J*Z*Math.random(),K);U[it]=lt,Z-=lt}U[B]=Z}this.shuffle()}shuffle(){const U=this._sizes,B=this._slices-1;for(let V=B;V>0;V--){const K=Math.random()*V>>0,Z=U[V];U[V]=U[K],U[K]=Z}}_randomizeOffsets(){for(let U=0;U<this._slices;U++)this._offsets[U]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const U=this.sampleSize,B=this.texture,V=this._canvas.getContext("2d");V.clearRect(0,0,8,U);let K,Z=0;for(let J=0;J<this._slices;J++){K=Math.floor(this._offsets[J]*256);const it=this._sizes[J]*U,lt=K>0?K:0,ht=K<0?-K:0;V.fillStyle=`rgba(${lt}, ${ht}, 0, 1)`,V.fillRect(0,Z>>0,U,it+1>>0),Z+=it}B.baseTexture.update(),this.uniforms.displacementMap=B}set sizes(U){const B=Math.min(this._slices,U.length);for(let V=0;V<B;V++)this._sizes[V]=U[V]}get sizes(){return this._sizes}set offsets(U){const B=Math.min(this._slices,U.length);for(let V=0;V<B;V++)this._offsets[V]=U[V]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(U){this._slices!==U&&(this._slices=U,this.uniforms.slices=U,this._sizes=this.uniforms.slicesWidth=new Float32Array(U),this._offsets=this.uniforms.slicesOffset=new Float32Array(U),this.refresh())}get direction(){return this._direction}set direction(U){if(this._direction===U)return;this._direction=U;const B=U*core.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(B),this.uniforms.cosDir=Math.cos(B)}get red(){return this.uniforms.red}set red(U){this.uniforms.red=U}get green(){return this.uniforms.green}set green(U){this.uniforms.green=U}get blue(){return this.uniforms.blue}set blue(U){this.uniforms.blue=U}destroy(){var U;(U=this.texture)==null||U.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};let l$4=c$3;l$4.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},l$4.TRANSPARENT=0,l$4.ORIGINAL=1,l$4.LOOP=2,l$4.CLAMP=3,l$4.MIRROR=4;var f$3=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,p=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;
uniform float alpha;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    if (knockout) {
      float resultAlpha = (outerGlowAlpha + innerGlowAlpha) * alpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      vec4 outerGlowColor = outerGlowStrength * glowColor.rgba * alpha;
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;const e=class extends core.Filter{constructor($){const U=Object.assign({},e.defaults,$),{outerStrength:B,innerStrength:V,color:K,knockout:Z,quality:J,alpha:it}=U,lt=Math.round(U.distance);super(f$3,p.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/J/lt).toFixed(7)}`).replace(/__DIST__/gi,`${lt.toFixed(0)}.0`)),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.uniforms.alpha=1,Object.assign(this,{color:K,outerStrength:B,innerStrength:V,padding:lt,knockout:Z,alpha:it})}get color(){return core.utils.rgb2hex(this.uniforms.glowColor)}set color($){core.utils.hex2rgb($,this.uniforms.glowColor)}get outerStrength(){return this.uniforms.outerStrength}set outerStrength($){this.uniforms.outerStrength=$}get innerStrength(){return this.uniforms.innerStrength}set innerStrength($){this.uniforms.innerStrength=$}get knockout(){return this.uniforms.knockout}set knockout($){this.uniforms.knockout=$}get alpha(){return this.uniforms.alpha}set alpha($){this.uniforms.alpha=$}};let l$3=e;l$3.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1,alpha:1};var v$1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,f$2=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,x=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    if (gl_FragColor.a < 0.1) {
        // 如果透明度太低，不应用效果，直接返回原色
        return;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;const a$3=class extends core.Filter{constructor(U){super(v$1,x.replace("${perlin}",f$2)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const B=Object.assign(a$3.defaults,U);this._angleLight=new core.Point,this.angle=B.angle,this.gain=B.gain,this.lacunarity=B.lacunarity,this.alpha=B.alpha,this.parallel=B.parallel,this.center=B.center,this.time=B.time}apply(U,B,V,K){const{width:Z,height:J}=B.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=Z,this.uniforms.dimensions[1]=J,this.uniforms.aspect=J/Z,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,U.applyFilter(this,B,V,K)}get angle(){return this._angle}set angle(U){this._angle=U;const B=U*core.DEG_TO_RAD;this._angleLight.x=Math.cos(B),this._angleLight.y=Math.sin(B)}get gain(){return this.uniforms.gain}set gain(U){this.uniforms.gain=U}get lacunarity(){return this.uniforms.lacunarity}set lacunarity(U){this.uniforms.lacunarity=U}get alpha(){return this.uniforms.alpha}set alpha(U){this.uniforms.alpha=U}};let r$4=a$3;r$4.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};var i$5=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,s$4=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float uHue;
uniform float uAlpha;
uniform bool uColorize;
uniform float uSaturation;
uniform float uLightness;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    vec4 result = color;

    // colorize
    if (uColorize) {
        result.rgb = vec3(getWeightedAverage(result.rgb), 0., 0.);
    }

    // hue
    result.rgb = hueShift(result.rgb, uHue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (result.r + result.g + result.b) / 3.0;

    if (uSaturation > 0.) {
        result.rgb += (average - result.rgb) * (1. - 1. / (1.001 - uSaturation));
    } else {
        result.rgb -= (average - result.rgb) * uSaturation;
    }

    // lightness
    result.rgb = mix(result.rgb, vec3(ceil(uLightness)) * color.a, abs(uLightness));

    // alpha
    gl_FragColor = mix(color, result, uAlpha);
}
`;const t=class extends core.Filter{constructor($){super(i$5,s$4),this._hue=0;const U=Object.assign({},t.defaults,$);Object.assign(this,U)}get hue(){return this._hue}set hue($){this._hue=$,this.uniforms.uHue=this._hue*(Math.PI/180)}get alpha(){return this.uniforms.uAlpha}set alpha($){this.uniforms.uAlpha=$}get colorize(){return this.uniforms.uColorize}set colorize($){this.uniforms.uColorize=$}get lightness(){return this.uniforms.uLightness}set lightness($){this.uniforms.uLightness=$}get saturation(){return this.uniforms.uSaturation}set saturation($){this.uniforms.uSaturation=$}};let n$2=t;n$2.defaults={hue:0,saturation:0,lightness:0,colorize:!1,alpha:1};var l$2=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,d$2=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;const s$3=class extends core.Filter{constructor(U,B=0){super(l$2,d$2),this.seed=0,this.uniforms.dimensions=new Float32Array(2),typeof U=="number"?(this.seed=U,U=void 0):this.seed=B,Object.assign(this,s$3.defaults,U)}apply(U,B,V,K){var Z,J;this.uniforms.dimensions[0]=(Z=B.filterFrame)==null?void 0:Z.width,this.uniforms.dimensions[1]=(J=B.filterFrame)==null?void 0:J.height,this.uniforms.seed=this.seed,U.applyFilter(this,B,V,K)}set sepia(U){this.uniforms.sepia=U}get sepia(){return this.uniforms.sepia}set noise(U){this.uniforms.noise=U}get noise(){return this.uniforms.noise}set noiseSize(U){this.uniforms.noiseSize=U}get noiseSize(){return this.uniforms.noiseSize}set scratch(U){this.uniforms.scratch=U}get scratch(){return this.uniforms.scratch}set scratchDensity(U){this.uniforms.scratchDensity=U}get scratchDensity(){return this.uniforms.scratchDensity}set scratchWidth(U){this.uniforms.scratchWidth=U}get scratchWidth(){return this.uniforms.scratchWidth}set vignetting(U){this.uniforms.vignetting=U}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(U){this.uniforms.vignettingAlpha=U}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(U){this.uniforms.vignettingBlur=U}get vignettingBlur(){return this.uniforms.vignettingBlur}};let r$3=s$3;r$3.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3};var u$2=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,c$2=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterClamp;

uniform float uAlpha;
uniform vec2 uThickness;
uniform vec4 uColor;
uniform bool uKnockout;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${angleStep};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture2D(uSampler, clamp(displacedPos, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture2D(uSampler, vTextureCoord);
    vec4 contentColor = sourceColor * float(!uKnockout);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    gl_FragColor = contentColor + outlineColor;
}
`;const r$2=class extends core.Filter{constructor(U=1,B=0,V=.1,K=1,Z=!1){super(u$2,c$2.replace(/\$\{angleStep\}/,r$2.getAngleStep(V))),this._thickness=1,this._alpha=1,this._knockout=!1,this.uniforms.uThickness=new Float32Array([0,0]),this.uniforms.uColor=new Float32Array([0,0,0,1]),this.uniforms.uAlpha=K,this.uniforms.uKnockout=Z,Object.assign(this,{thickness:U,color:B,quality:V,alpha:K,knockout:Z})}static getAngleStep(U){const B=Math.max(U*r$2.MAX_SAMPLES,r$2.MIN_SAMPLES);return(Math.PI*2/B).toFixed(7)}apply(U,B,V,K){this.uniforms.uThickness[0]=this._thickness/B._frame.width,this.uniforms.uThickness[1]=this._thickness/B._frame.height,this.uniforms.uAlpha=this._alpha,this.uniforms.uKnockout=this._knockout,U.applyFilter(this,B,V,K)}get alpha(){return this._alpha}set alpha(U){this._alpha=U}get color(){return core.utils.rgb2hex(this.uniforms.uColor)}set color(U){core.utils.hex2rgb(U,this.uniforms.uColor)}get knockout(){return this._knockout}set knockout(U){this._knockout=U}get thickness(){return this._thickness}set thickness(U){this._thickness=U,this.padding=U}};let i$4=r$2;i$4.MIN_SAMPLES=1,i$4.MAX_SAMPLES=100;var m$1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,s$2=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;const i$3=class extends core.Filter{constructor(U){super(m$1,s$2),this.time=0,this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,i$3.defaults,U)}apply(U,B,V,K){var Z,J;this.uniforms.dimensions[0]=(Z=B.filterFrame)==null?void 0:Z.width,this.uniforms.dimensions[1]=(J=B.filterFrame)==null?void 0:J.height,this.uniforms.time=this.time,U.applyFilter(this,B,V,K)}set mirror(U){this.uniforms.mirror=U}get mirror(){return this.uniforms.mirror}set boundary(U){this.uniforms.boundary=U}get boundary(){return this.uniforms.boundary}set amplitude(U){this.uniforms.amplitude[0]=U[0],this.uniforms.amplitude[1]=U[1]}get amplitude(){return this.uniforms.amplitude}set waveLength(U){this.uniforms.waveLength[0]=U[0],this.uniforms.waveLength[1]=U[1]}get waveLength(){return this.uniforms.waveLength}set alpha(U){this.uniforms.alpha[0]=U[0],this.uniforms.alpha[1]=U[1]}get alpha(){return this.uniforms.alpha}};let o$2=i$3;o$2.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0};var s$1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,f$1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;const n$1=class extends core.Filter{constructor(U=[0,0],B,V=0){super(s$1,f$1),this.center=U,Object.assign(this,n$1.defaults,B),this.time=V}apply(U,B,V,K){this.uniforms.time=this.time,U.applyFilter(this,B,V,K)}get center(){return this.uniforms.center}set center(U){this.uniforms.center=U}get amplitude(){return this.uniforms.amplitude}set amplitude(U){this.uniforms.amplitude=U}get wavelength(){return this.uniforms.wavelength}set wavelength(U){this.uniforms.wavelength=U}get brightness(){return this.uniforms.brightness}set brightness(U){this.uniforms.brightness=U}get speed(){return this.uniforms.speed}set speed(U){this.uniforms.speed=U}get radius(){return this.uniforms.radius}set radius(U){this.uniforms.radius=U}};let i$2=n$1;i$2.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1};var m=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,c$1=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;let l$1=class extends core.Filter{constructor(U){var B,V;super(m,c$1),this.uniforms.blur=U.blur,this.uniforms.gradientBlur=U.gradientBlur,this.uniforms.start=(B=U.start)!=null?B:new core.Point(0,window.innerHeight/2),this.uniforms.end=(V=U.end)!=null?V:new core.Point(600,window.innerHeight/2),this.uniforms.delta=new core.Point(30,30),this.uniforms.texSize=new core.Point(window.innerWidth,window.innerHeight),this.updateDelta()}updateDelta(){this.uniforms.delta.x=0,this.uniforms.delta.y=0}get blur(){return this.uniforms.blur}set blur(U){this.uniforms.blur=U}get gradientBlur(){return this.uniforms.gradientBlur}set gradientBlur(U){this.uniforms.gradientBlur=U}get start(){return this.uniforms.start}set start(U){this.uniforms.start=U,this.updateDelta()}get end(){return this.uniforms.end}set end(U){this.uniforms.end=U,this.updateDelta()}},a$2=class extends l$1{updateDelta(){const U=this.uniforms.end.x-this.uniforms.start.x,B=this.uniforms.end.y-this.uniforms.start.y,V=Math.sqrt(U*U+B*B);this.uniforms.delta.x=U/V,this.uniforms.delta.y=B/V}},u$1=class extends l$1{updateDelta(){const U=this.uniforms.end.x-this.uniforms.start.x,B=this.uniforms.end.y-this.uniforms.start.y,V=Math.sqrt(U*U+B*B);this.uniforms.delta.x=-B/V,this.uniforms.delta.y=U/V}};const d$1=class extends core.Filter{constructor(U,B,V,K){super(),typeof U=="number"&&(core.utils.deprecation("5.3.0","TiltShiftFilter constructor arguments is deprecated, use options."),U={blur:U,gradientBlur:B,start:V,end:K}),U=Object.assign({},d$1.defaults,U),this.tiltShiftXFilter=new a$2(U),this.tiltShiftYFilter=new u$1(U)}apply(U,B,V,K){const Z=U.getFilterTexture();this.tiltShiftXFilter.apply(U,B,Z,1),this.tiltShiftYFilter.apply(U,Z,V,K),U.returnFilterTexture(Z)}get blur(){return this.tiltShiftXFilter.blur}set blur(U){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=U}get gradientBlur(){return this.tiltShiftXFilter.gradientBlur}set gradientBlur(U){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=U}get start(){return this.tiltShiftXFilter.start}set start(U){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=U}get end(){return this.tiltShiftXFilter.end}set end(U){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=U}};let h=d$1;h.defaults={blur:100,gradientBlur:600,start:void 0,end:void 0};var i$1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,a$1=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;const n=class extends core.Filter{constructor($){super(i$1,a$1),Object.assign(this,n.defaults,$)}get offset(){return this.uniforms.offset}set offset($){this.uniforms.offset=$}get radius(){return this.uniforms.radius}set radius($){this.uniforms.radius=$}get angle(){return this.uniforms.angle}set angle($){this.uniforms.angle=$}};let r$1=n;r$1.defaults={radius:200,angle:4,padding:20,offset:new core.Point};var l=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,u=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,c=($,U)=>{var B={};for(var V in $)d.call($,V)&&U.indexOf(V)<0&&(B[V]=$[V]);if($!=null&&i)for(var V of i($))U.indexOf(V)<0&&f.call($,V)&&(B[V]=$[V]);return B};const a=class extends core.Filter{constructor($){const U=Object.assign(a.defaults,$),{maxKernelSize:B}=U,V=c(U,["maxKernelSize"]);super(l,u.replace("${maxKernelSize}",B.toFixed(1))),Object.assign(this,V)}get center(){return this.uniforms.uCenter}set center($){this.uniforms.uCenter=$}get strength(){return this.uniforms.uStrength}set strength($){this.uniforms.uStrength=$}get innerRadius(){return this.uniforms.uInnerRadius}set innerRadius($){this.uniforms.uInnerRadius=$}get radius(){return this.uniforms.uRadius}set radius($){($<0||$===1/0)&&($=-1),this.uniforms.uRadius=$}};let o$1=a;o$1.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32};const Touchable=($,U)=>class extends ${constructor(){super(...arguments);ct(this,"isHover",!1)}hoverIn(){}hoverOut(){}onPress(){}update(){var Z;if(super.update&&super.update(),!this.visible)return;const K=U(this);!this.isHover&&K&&(this.isHover=!0,(Z=globalThis.customUpdater)==null||Z.waitFor(()=>!0,()=>{this.isHover&&this.hoverIn()})),this.isHover&&!K&&(this.isHover=!1,this.hoverOut()),K&&TouchInput.isTriggered()&&this.onPress()}},spriteCheckTouched=$=>{const U=new Point(TouchInput.x,TouchInput.y);return $.containsPoint(U)},windowCheckTouched=$=>$.getBounds().contains(TouchInput.x,TouchInput.y),TouchableSprite=Touchable(Sprite,spriteCheckTouched),renderContainerTexture=$=>{const{x:U,y:B}=$,V=PIXI.RenderTexture.create({width:$.width,height:$.height,scaleMode:PIXI.SCALE_MODES.LINEAR,resolution:1});Graphics.app.renderer.render($,V,!0,new PIXI.Matrix().translate(-U,-B));const{destroy:K}=V;return V.destroy=function(Z){Z&&console.log("renderTexture destroy method had been overwrite"),K.apply(V,[!0])},V},tintTexture=($,U)=>{const B=PIXI.Sprite.from($),V=new PIXI.filters.ColorMatrixFilter;V.matrix=U,B.filters=[V];const K=renderContainerTexture(B);return B.destroy(),K};class FragParticle extends PIXI.Sprite{constructor(){super(...arguments);ct(this,"vx",0);ct(this,"vy",0);ct(this,"g",.8);ct(this,"isFinish",!1)}update(){this.isFinish||(this.alpha>.1&&(this.alpha-=.02),this.x+=this.vx,this.y+=this.vy,this.vy+=this.g,this.rotation+=this.vx/10*Math.PI,this.y>Graphics.app.renderer.height&&(this.isFinish=!0))}}const explodeRange=5,breakEffect=$=>{var lt;playSe("Break");const U=16,B=getPuzzle(),V=B.toLocal($.toGlobal($.position)),K=renderContainerTexture($),Z=K.baseTexture,J=new PIXI.ParticleContainer(500,{tint:!0}),it=[];for(let ht=0;ht<$.width/U+1;ht++)for(let Tt=0;Tt<$.height/U+1;Tt++){const zt=new PIXI.Rectangle(ht*U,Tt*U,Math.min(U,$.width-ht*U),Math.min(U,$.height-Tt*U)),Et=new PIXI.Texture(Z,zt),Ot=new FragParticle(Et),Vt=((ht+.5)*U/$.width-.5)*2,Bt=((Tt+.5)*U/$.height-.5)*2;Ot.vx=lodashExports.random(-1+Vt,1+Vt)*explodeRange,Ot.vy=lodashExports.random(-1+Bt,1+Bt)*explodeRange,Ot.x=V.x+ht*U,Ot.y=V.y+Tt*U,J.addChild(Ot),it.push(Ot)}return $.visible=!1,shakeScreen(void 0,void 0,void 0,void 0,B.map),B.addChild(J),(lt=globalThis.customUpdater)==null||lt.add((ht,Tt)=>{it.forEach(Et=>Et.update()),it.every(Et=>Et.isFinish)&&Tt()},{onDestroy:()=>{B.removeChild(J),J.destroy({children:!0,texture:!0}),K.destroy()}}),$},TouchableClass=Touchable(Sprite,$=>{const U=new Point(TouchInput.x,TouchInput.y);return $.graphics.containsPoint(U)});class EnemySkill extends TouchableClass{constructor(B,V){super(new Bitmap(0,0));ct(this,"puzzle");ct(this,"index",null);ct(this,"config");ct(this,"graphics",new PIXI.Graphics);ct(this,"countdown");ct(this,"active",!0);ct(this,"removeFromMap",()=>{if(this._destroyed||(this.puzzle.map.removeChild(this),!this.index))return;this.getUnits().forEach(V=>{lodashExports.pull(V.filledSprite,this),V.status=lodashExports.last(V.status.split("_"))}),this.destroy(),this.config.onRemoveFromMap&&this.config.onRemoveFromMap(this.puzzle)});this.puzzle=V,this.config=B,this.countdown=B.countdown,this.addChild(this.graphics),this.drawSkill()}drawSkill(){const B=getAssetTexture(getEnemySkillPath("enemy",this.countdown));this.graphics.clear(),this.graphics.beginTextureFill({texture:B}),drawPuzzle(this.config.shape,[this.graphics]),this.graphics.endFill()}setToMap(B){this.index=B;const{position:V}=this.puzzle.map.getUnitByIndex(...B);this.position=V,this.getUnits().forEach(Z=>Z.status=UNIT_STATUS.enemy_empty),this.puzzle.map.addChild(this),this.config.onSetToMap&&this.config.onSetToMap(this.puzzle)}getUnits(){if(!this.index)return[];const B=[],[V,K]=this.index;return this.config.shape.forEach((Z,J)=>{Z.forEach((it,lt)=>{if(!it)return;const ht=this.puzzle.map.getUnitByIndex(V+J,K+lt);B.push(ht)})}),B}checkAllFilled(){return this.getUnits().every(V=>V.status===UNIT_STATUS.enemy_block)}beforeTurnStart(){if(!(this.countdown<=0)){if(this.checkAllFilled()){breakEffect(this.graphics),this.removeFromMap();return}this.countdown-=1,this.countdown<=0&&this.config.beforeCastSkill&&this.config.beforeCastSkill(this.puzzle)}}processRound(){this.isDestroyed()||(this.config.onTurnProcess&&this.config.onTurnProcess(this.puzzle),this.drawSkill(),this.countdown<=0&&this.castSkill())}castSkill(){if(!this.active)return;const B=getFirstEnemy();B&&(this.config.onCastSkill&&this.config.onCastSkill(this.puzzle),waitAction(),addStageEventListenerOnce(STAGE_EVENT.enemyActionEnd,()=>{this.config.onCastSkillEnd&&this.config.onCastSkillEnd(this.puzzle),this.puzzle.heroine.updateStatus();const V=getEnemySkillDialogues(),K=getState(this.puzzle,{skillId:this.config.id}),Z=getTextFromPool(V,K);Z&&($gameMessage.add(Z.text),waitMessage(50),this.puzzle.battleController.battleLog.push({actor:B,skillId:this.config.id,text:Z})),this.removeFromMap()}))}hoverIn(){this.filters=[new l$3],this.puzzle.helpWindow.addText(this.config.description(this.puzzle))}hoverOut(){this.filters=null,this.puzzle.battleController.enemySkills.some(V=>V.isHover)||this.puzzle.helpWindow.drawHeroineStatusText()}}const setEnemyPuzzleToIndex=($,U)=>{const B=getPuzzle(),V=getEnemySkill($),{battleController:K,map:Z}=B;if(!checkPuzzleValid(Z,V.shape,U))return;const it=new EnemySkill(V,B);it.setToMap(U),K.enemySkills.push(it)},setEnemyPuzzleToRandomIndex=$=>{const U=getPuzzle(),B=getEnemySkill($),{battleController:V,map:K}=U,Z=getAllValidIndex(B.shape,K),J=lodashExports.sample(Z);if(!J)return;const it=new EnemySkill(B,U);return it.setToMap(J),V.enemySkills.push(it),it},enemiesConfig=[{id:1,shape:[[0,0,0,0,0,0,0,0,0],[0,0,1,1,0,1,1,0,0],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],background:"uncle1",otherAssets:["ticrf-icon"],name:"普通大叔",unitsTexture:{1:"red",0:"grey"},onSet:($,U)=>{U.background.position.set(50,40)},processTurn:()=>{const $=getTurnCount();$%3===0&&setEnemyPuzzleToRandomIndex(21),$%2===0&&setEnemyPuzzleToIndex(22,[0,3])}},{id:2,shape:[[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],background:"20230916",name:"怪盜亞爾斯羅",unitsTexture:{1:"red",0:"grey"},onSet:($,U)=>{U.background.texture.baseTexture.setResolution(1.5),U.background.position.set(0,-10)},onTurnStart:()=>{if(getTurnCount()===0){toggleControllable(!1);const U=setInterval(()=>{const B=setEnemyPuzzleToRandomIndex(23),V=setEnemyPuzzleToRandomIndex(23),K=setEnemyPuzzleToRandomIndex(23);(!B||!V||!K)&&(clearInterval(U),toggleControllable(!0))},50)}}}],enemiesSkillConfig=[{id:21,shape:[[1,1],[1,1]],countdown:3,description:()=>`破衣：大叔瞄準${Rita}的衣服。
`+fontM+"倒數結束隨機對衣服造成1點傷害。",beforeCastSkill:()=>toggleControllable(!1),onCastSkill:$=>{const{heroine:U,enemyConfig:B}=$,{name:V}=B,K=getBattleLogWindow();lodashExports.random(1,U.getTotalHp())<U.upperHp+1?(U.upperHp-=1,K.push("addText",`${V}對${Rita}的上身衣物進行攻擊。`),K.push("wait"),U.upperHp===2&&K.push("addText",`${Rita}的鈕扣脫落了。`),U.upperHp===1&&K.push("addText",`${Rita}的衣服破碎了。`),U.upperHp===0&&K.push("addText",`${Rita}的胸部露出來了！`)):(U.lowerHp-=1,K.push("addText",`${V}對${Rita}的下身衣物進行攻擊。`),K.push("wait"),U.lowerHp===2&&K.push("addText",`${V}拉下${Rita}的裙子。`),U.lowerHp===1&&K.push("addText",`${V}拿走了${Rita}的裙子。`),U.lowerHp===0&&K.push("addText",`${V}脫下了${Rita}的內褲！`)),U.getTotalHp()===0&&(K.push("addText",`${Rita}赤身裸體！`),K.push("wait")),U.getTotalHp()<0&&(K.push("addText",`${V}笑咪咪地朝${Rita}走近。`),K.push("wait")),shakeScreen(),waitAction(60)}},{id:22,shape:[[1,1,1],[0,1,0]],countdown:2,description:()=>`束縛：大叔伸出鹹豬手。
`+fontM+"倒數結束隨機封鎖一個技能。",onCastSkillEnd:$=>{const U=lodashExports.sample($.menu.puzzleButtons);U.puzzleSkill.isDragging&&TouchInput.clear(),U.interactive=!1;const B=U.children[0],V=getTurnCount(),{enemyConfig:K}=$,{name:Z}=K,J=getBattleLogWindow();J.push("addText",`${Z}架住了${Rita}。`),J.push("wait"),J.push("addText",`${Rita}的一個技能被封鎖了。`),battleLogWaitAndClear(J);const it=getAssetTexture(getOtherAsset("ticrf-icon")),lt=new PIXI.Sprite(it);lt.scale.set(.18),lt.position.set(U.width/2-lt.width/2,B.height/2-lt.height/2),lt.filters=[new l$3],U.addChild(lt),$.battleController.delayActions.push({condition:()=>getTurnCount()>=V+2,do:()=>{J.push("addText",`${Rita}掙脫了束縛。`),battleLogWaitAndClear(J),U.interactive=!0,U.isDestroyed()||U.removeChild(lt)}})}},{id:23,shape:[[1]],countdown:3,description:()=>`大報社：卑鄙無恥的技能。
`+fontM+`倒數結束後${Rita}敗北，沒有任何方法能避免。`,onTurnProcess:$=>{if($.battleController.delayActions.some(B=>(B==null?void 0:B.id)===99))return;const U={id:99,condition:()=>!0,do:()=>{const B=getBattleLogWindow();B.push("addText","怪盜正用精液裝填著水槍。"),battleLogWaitAndClear(B)}};$.battleController.delayActions.push(U)},onCastSkill:$=>{$.battleController.enemySkills.forEach(B=>{B.active=!1});const U=getBattleLogWindow();U.push("addText","大報社！"),U.push("wait"),U.push("addText",`${Rita}無從閃避！`),battleLogWaitAndClear(U),shakeScreen(),killParty()}}],getSkillConfig=$=>{const U=skills.find(B=>B.id===$);if(!U)throw new Error("skill config not found, id: "+$);return U},getSkillDialogues=()=>skillDialogues,getEnemySkillDialogues=()=>enemySkillDialogues,getEnemyConfig=$=>{const U=enemiesConfig.find(B=>B.id===$);if(!U)throw new Error("enemy config not found, id: "+$);return U},getEnemySkill=$=>{const U=enemiesSkillConfig.find(B=>B.id===$);if(!U)throw new Error("enemySkill config not found, id: "+$);return U},imageConfig={Rita:{figures:{1:"20230904-1",2:"20230904-2"},faces:{1:"20230904-2ICON",2:"20230904-3ICON",3:"20230904-4ICON"}}},getStatusText=$=>$>.9?"\\N[1]一臉不屑。":$>.7?Rita+"的表情稍微有些不安。":$>.4?Rita+"眼角有淚光。":$>0?Rita+"好像快哭出來了！":$===0?Rita+"驚慌失措。":Rita+"大失敗！",getClothesStatusText=$=>{let U=[];const{upperHp:B,lowerHp:V}=$;return B===$.maxUpperHp?U.push(Rita+"的上衣完好無缺。"):B>1?U.push(Rita+"的上衣稍有破損。"):B===1?U.push(Rita+"的上衣被撕裂了！"):U.push(Rita+"用手遮擋赤裸的胸部。"),V===$.maxLowerHp?U.push(Rita+"的裙子乾淨整齊。"):V>1?U.push(Rita+"的裙子有些凌亂。"):V===1?U.push(Rita+"的裙子快撐不住了！"):U.push(Rita+"摀著暴露的下體。"),!B&&!V&&(U=[`${Rita}赤身裸體。`,"已經沒有什麼可以從大叔的魔掌保護她了！"]),U},getFigurePath=($,U)=>`img/pictures/figures/${lodashExports.get(imageConfig[$].figures,U)}`,getSkillPath=$=>`img/pictures/skills/${getSkillConfig($).texture}`,getEnemyImagePath=()=>{const $=$gameTroop.troop().id;return`img/enemies/${getEnemyConfig($).background}`},getEnemyUnitPath=$=>{const U=$gameTroop.troop().id;return`img/pictures/units/${getEnemyConfig(U).unitsTexture[$]}`},getRtEnemyUnitPath=($,U)=>`enemyMapUnit/${$}/${U}`,getEnemySkillPath=($,U)=>`img/pictures/enemySkills/${$}_${U}`,getOtherAsset=$=>`img/pictures/others/${$}`,cache=new Map,getAssetTexture=$=>{const U=cache.get($);if(U)return U;const B=ImageManager.loadMsgkAssets($),V=new PIXI.Texture(B.baseTexture);return cache.set($,V),V},setAssetTexture=($,U)=>{cache.set($,U)},clearCache=()=>{getAssetTexture(getFigurePath("Rita",1)).baseTexture.setResolution(1),getAssetTexture(getFigurePath("Rita",2)).baseTexture.setResolution(1),cache.forEach($=>$.destroy()),cache.clear()};class PuzzleMapUnit extends PIXI.Sprite{constructor({id:B,size:V,index:K}){super();ct(this,"id");ct(this,"status");ct(this,"index");ct(this,"isHover",!1);ct(this,"filledSprite",[]);this.index=K,this.status=UNIT_STATUS.empty,this.id=B,this.width=V,this.height=V,this.texture=getAssetTexture(getRtEnemyUnitPath(B,"normal"))}onHover(B){this.isHover=!0,B?this.texture=getAssetTexture(getRtEnemyUnitPath(this.id,"positive")):this.texture=getAssetTexture(getRtEnemyUnitPath(this.id,"negative"))}onHoverOut(){this.isHover=!1,this.texture=getAssetTexture(getRtEnemyUnitPath(this.id,"normal"))}onFill(B){this.status=this.status.replace("empty","block"),this.interactive=!1,this.filledSprite.push(B)}getCenter(B){return B.toLocal(B.position,this).add(new Point(this.width/2,this.height/2))}}class PuzzleMap extends Touchable(Window_Base,windowCheckTouched){constructor(B,V){super(new Rectangle(0,0,0,0));ct(this,"puzzle");ct(this,"units");ct(this,"shape");ct(this,"background");ct(this,"getUnitByIndex",(B,V)=>this.units.children[B*this.shape[0].length+V]);this.position.set(CONFIG.map.offsetX,CONFIG.map.offsetY),this.puzzle=V;const{shape:K}=B;this.shape=K;const Z=getAssetTexture(getEnemyImagePath());this.background=new PIXI.Sprite(Z),this.addChild(this.background);const J=new PIXI.Container;this.units=J,J.alpha=.6,this.addChild(this.units),K.forEach((it,lt)=>it.forEach((ht,Tt)=>{const zt=new PuzzleMapUnit({id:ht,size:CONFIG.map.unitSize,index:[Tt,lt]});zt.x=Tt*CONFIG.map.unitSize,zt.y=lt*CONFIG.map.unitSize,this.units.addChild(zt)})),B.onSet&&B.onSet(V,this)}hoverIn(){this.units.alpha=.8}hoverOut(){this.units.alpha=.6}resetHover(){this.units.children.forEach(B=>B.onHoverOut())}update(){updateShake(this,CONFIG.map.offsetX),super.update()}}class DraggableContainer extends Sprite{constructor(){super(new Bitmap(0,0));ct(this,"isDragging",!1);ct(this,"pointerOffset",new Point(0,0));ct(this,"originalPos",new Point(0,0));this.interactive=!0,this.cursor="pointer"}onDragStart(){this.isDragging=!0;const B=this.getTouchPoint(),V=this.getGlobalPosition();this.pointerOffset=B.subtract(V),this.originalPos=new Point(this.x,this.y),this.emit(DRAG_EVENT.start,this)}onDragMove(){if(!this.isDragging)return;const V=this.parent.toLocal(this.getTouchPoint()).subtract(this.pointerOffset);this.position=V,this.emit(DRAG_EVENT.move,this)}onDragEnd(){this.isDragging&&(this.isDragging=!1,this.emit(DRAG_EVENT.end,this))}dragReset(){this.isDragging=!1,this.position.set(this.originalPos.x,this.originalPos.y),this.emit(DRAG_EVENT.reset,this)}getTouchPoint(){return new Point(TouchInput.x,TouchInput.y)}update(){super.update(),this.isDragging&&TouchInput.isPressed()?this.onDragMove():this.isDragging&&TouchInput.isReleased()?this.onDragEnd():TouchInput.isTriggered()&&this.getBounds().contains(TouchInput.x,TouchInput.y)&&this.interactive&&this.onDragStart()}}class PuzzleSkill extends DraggableContainer{constructor(B,V){super();ct(this,"id");ct(this,"canDrop",!1);ct(this,"puzzleUnitsCount",0);ct(this,"graphics");ct(this,"puzzle");ct(this,"snapshot");ct(this,"activeButton",null);ct(this,"config");this.id=B,this.puzzle=V;const K=getSkillConfig(B);this.config=K;const Z=getAssetTexture(getSkillPath(B)),J=new PIXI.Graphics;this.graphics=J,J.beginTextureFill({texture:Z});const it=drawPuzzle(K.shape,[J]);this.puzzleUnitsCount=it,J.endFill();const[lt,ht]=getShapeFirstRowAndCol(K.shape);J.position.set(-ht*CONFIG.map.unitSize,-lt*CONFIG.map.unitSize),this.addChild(J),this.bitmap=new Bitmap(J.width,J.height),this.snapshot=renderContainerTexture(this)}checkHover(B,V){var Z;const K=[];return B.units.children.forEach(J=>{const it=V.toLocal(V.position,this.graphics),lt=J.getCenter(V).subtract(it);this.graphics.geometry.containsPoint(lt)&&K.push(J)}),this.canDrop=BattleManager.isInputting()&&!!((Z=this.activeButton)!=null&&Z.interactive)&&K.length===this.puzzleUnitsCount&&K.every(J=>J.status===UNIT_STATUS.empty||J.status===UNIT_STATUS.enemy_empty),K}reset(){this.activeButton=null,this.dragReset()}destroy(B){this.snapshot.destroy(),super.destroy(B)}}class PuzzleButton extends TouchableSprite{constructor(B){super(new Bitmap(0,0));ct(this,"puzzle");ct(this,"puzzleSkill");ct(this,"vy",0);this.interactive=!0,this.interactiveChildren=!1,this.cursor="pointer",this.puzzleSkill=B,this.puzzle=B.puzzle;const V=B.snapshot,K=new PIXI.Sprite(V);this.addChild(K),K.scale.set(.6),K.anchor.set(.5);const Z=new PIXI.Text(B.config.displayName,new PIXI.TextStyle({fontSize:80,fontWeight:"bold",fill:16777215}));Z.scale.set(.2),Z.anchor.set(.5,0);const J=8;this.bitmap=new Bitmap(K.width+72,K.height+2*J+Z.height),this.pivot.set(this.width/2,this.height/2),K.position.set(this.width/2,(this.height-Z.height)/2),Z.position.set(this.width/2,this.height-Z.height),this.addChild(Z)}onPress(){this.interactive&&(this.scale.set(1),this.puzzleSkill.move(TouchInput.x-this.puzzleSkill.width/2/CONFIG.menu.btnHoverScale,TouchInput.y-this.puzzleSkill.height/2/CONFIG.menu.btnHoverScale),this.puzzleSkill.onDragStart(),this.puzzleSkill.activeButton=this)}hoverIn(){this.puzzle.helpWindow.addText(this.puzzleSkill.config.description),this.interactive&&this.scale.set(CONFIG.menu.btnHoverScale)}hoverOut(){this.puzzle.helpWindow.drawHeroineStatusText(),this.interactive&&this.scale.set(1)}destroy(){const B=this.removeChildAt(1),V=this.removeChildAt(0);B.destroy({children:!0,texture:!0,baseTexture:!0}),V.destroy({children:!0}),super.destroy()}}class PuzzleMenu extends Window_Base{constructor(B,V){const K=CONFIG.menu.width,Z=Graphics.boxHeight,J=Graphics.boxWidth-K+CONFIG.common.appPaddingY,it=CONFIG.common.appPaddingY;super(new Rectangle(J,it,K,Z));ct(this,"puzzle");ct(this,"puzzleSkills");ct(this,"puzzleButtons",[]);ct(this,"shouldRefreshBtnPos",!1);this.puzzle=V,this.puzzleSkills=B,this.removeInvalidSkills();for(let lt=0;lt<5;lt++){const ht=this.addRandomSkillBtn();ht&&(ht.y-=lt*100)}}addRandomSkillBtn(){if(lodashExports.isEmpty(this.puzzleSkills))return;const B=lodashExports.countBy(this.puzzleButtons,J=>J.puzzleSkill.id),K=!!B[1]?randomByWeight(this.puzzleSkills,J=>{const it=1-B[J.id]*.1||1;return J.config.weight*it}):this.puzzle.skills.find(J=>J.id===1),Z=new PuzzleButton(K);return Z.x=this.width/2,Z.y=-CONFIG.map.unitSize,this.puzzleButtons.unshift(Z),this.addChild(Z),this.shouldRefreshBtnPos=!0,Z}removeSkillBtn(B){lodashExports.pull(this.puzzleButtons,B),this.removeChild(B),B.destroy(),this.shouldRefreshBtnPos=!0}removeInvalidSkills(){const B=this.puzzleSkills.filter(V=>getFirstValidIndex(V.config.shape,this.puzzle.map,K=>(K==null?void 0:K.status)===UNIT_STATUS.empty||(K==null?void 0:K.status)===UNIT_STATUS.enemy_empty));this.puzzleSkills=B,this.puzzleButtons.filter(V=>!B.includes(V.puzzleSkill)).forEach(V=>{this.removeSkillBtn(V),this.addRandomSkillBtn()})}getButtonTargetPosY(B){const V=this.height-2*CONFIG.menu.paddingY;return B*(V/5)+CONFIG.menu.paddingY+CONFIG.map.unitSize}close(){super.close(),this.puzzleButtons.forEach(B=>B.hide())}open(){var B;super.open(),(B=globalThis.customUpdater)==null||B.waitFor(()=>this.isOpen(),()=>this.puzzleButtons.forEach(V=>V.show()))}get openness(){return this._openness}set openness(B){this._openness!==B&&(this._openness=lodashExports.clamp(B,0,255),this._container.scale.x=this._openness/255,this._container.x=this.width*(1-this._openness/255))}update(){if(super.update(),!this.shouldRefreshBtnPos)return;let B=0;this.puzzleButtons.forEach((V,K)=>{const Z=this.getButtonTargetPosY(K);if(Z-V.y>0){V.vy+=1,V.y+=Math.min(V.vy,25),B++;return}V.vy=0,V.y=Z}),this.shouldRefreshBtnPos=!!B}}class BattleController{constructor($){ct(this,"puzzle");ct(this,"enemySkills",[]);ct(this,"delayActions",[]);ct(this,"battleLog",[]);ct(this,"onAttackSuccess",$=>{if(!BattleManager.isInputting())return;const{skillId:U,unitTypes:B}=$,V=getSkillConfig(U);if(!V)return;B.some(it=>it>0)&&forcePartyAction(V.id);const Z=this.showText($),J=getHeroineRm();this.battleLog.push({actor:J,skillId:U,text:Z}),startProcessTurn()});ct(this,"processEnemyTurn",()=>{if(checkBattleEnd())return;this.enemySkills=this.enemySkills.filter(U=>!U.isDestroyed()),this.enemySkills.forEach(U=>U.processRound());const{processTurn:$}=this.puzzle.enemyConfig;$&&$(this.puzzle)});ct(this,"processDelayAction",()=>{this.delayActions.forEach(($,U)=>{!$||!$.condition(this.puzzle)||($.do(this.puzzle),this.delayActions[U]=null)}),this.delayActions=this.delayActions.filter(Boolean)});ct(this,"showText",attackParams=>{const{skillId,unitTypes}=attackParams,state=getState(this.puzzle,{skillId,unitTypes}),skillDialogues=getSkillDialogues(),textConfig=getTextFromPool(skillDialogues,state,!0);return textConfig.callback&&eval(textConfig.callback),$gameMessage.add(textConfig.text),textConfig});ct(this,"checkMapFill",()=>this.puzzle.map.units.children.every($=>$.id===0||$.status===UNIT_STATUS.block));this.puzzle=$,addStageEventListener(STAGE_EVENT.turnStart,()=>{toggleControllable(!0),this.processDelayAction();const{onTurnStart:U}=this.puzzle.enemyConfig;U&&U(this.puzzle)}),addStageEventListener(STAGE_EVENT.turnEnd,()=>{this.checkMapFill()&&killEnemies(),$.heroine.getTotalHp()<0&&killParty(),$.heroine.updateStatus()}),addStageEventListener(STAGE_EVENT.enemyTurn,()=>{this.processEnemyTurn()})}}class Heroine extends TouchableSprite{constructor(B){const{offsetX:V,offsetY:K,width:Z,height:J,half:it}=CONFIG.figure;super(new Bitmap(Z,J));ct(this,"puzzle");ct(this,"maxUpperHp",3);ct(this,"maxLowerHp",3);ct(this,"upperHp",3);ct(this,"lowerHp",3);ct(this,"getTotalHp",()=>this.upperHp+this.lowerHp);ct(this,"getMaxHp",()=>this.maxUpperHp+this.maxLowerHp);ct(this,"getHpRatio",()=>this.getTotalHp()/this.getMaxHp());ct(this,"updateStatus",()=>{const B=this.children[1],V=this.children[2];B&&(B.alpha=this.upperHp/this.maxUpperHp),V&&(V.alpha=this.lowerHp/this.maxLowerHp),this.puzzle.helpWindow.drawHeroineStatusText()});this.puzzle=B,this.x=V,this.y=K;const lt=75,ht=75,Tt=2.5,zt=getAssetTexture(getFigurePath("Rita",2));zt.baseTexture.mipmap=PIXI.MIPMAP_MODES.ON,zt.baseTexture.setResolution(Tt);const Et=getAssetTexture(getFigurePath("Rita",1));Et.baseTexture.mipmap=PIXI.MIPMAP_MODES.ON,Et.baseTexture.setResolution(Tt);const Ot=Et.clone(),Vt=new PIXI.Sprite(zt);Vt.texture.frame=new PIXI.Rectangle(lt,ht,Z,J),this.addChild(Vt);const Bt=new PIXI.Sprite(Et);Bt.texture.frame=new PIXI.Rectangle(lt,ht,Z,it),this.addChild(Bt);const Rt=new PIXI.Sprite(Ot);Rt.texture.frame=new PIXI.Rectangle(lt,it+ht,Z,J-it),Rt.y=it,this.addChild(Rt)}hoverIn(){const B=getClothesStatusText(this);this.puzzle.helpWindow.addText(B.join(`
`))}hoverOut(){this.puzzle.helpWindow.drawHeroineStatusText()}update(){updateShake(this,CONFIG.figure.offsetX),super.update()}}class HelpWindow extends Window_Scrollable{constructor(B){super(new PIXI.Rectangle(CONFIG.map.offsetX-CONFIG.helpWindow.exceedWidth,CONFIG.common.appPaddingY,B.map.units.width+CONFIG.helpWindow.exceedWidth*2,100));ct(this,"puzzle");this.puzzle=B,this.drawHeroineStatusText()}addText(B){this.clear(),this.drawTextEx(B,0,0,this.width)}drawHeroineStatusText(){const B=this.puzzle.heroine.getHpRatio(),V=getStatusText(B);this.addText(V)}clear(){this.clearScrollStatus(),this.contents.clear()}}const commandButtonConfig={skip:{name:"跳過",symbol:"skip",description:()=>`跳過：詞窮了！
`+fontM+"沉澱一回合重新生成技能。",callback:()=>{const $=getBattleLogWindow();$.push("addText",Rita+"跳過了這回合。"),battleLogWaitAndClear($)}},suicide:{name:"跌倒",symbol:"suicide",description:()=>`跌倒：這裡怎麼會有顆石頭！
`+fontM+"一個大意血量直接歸零。"}};class BattleCommandWin extends Touchable(Window_Command,windowCheckTouched){constructor(B){const V=SceneManager._scene.calcWindowHeight(2,!0);super(new PIXI.Rectangle(Graphics.boxWidth-CONFIG.menu.width-CONFIG.battleCommandWind.width-CONFIG.battleCommandWind.padding,Graphics.height-V-CONFIG.battleCommandWind.padding-CONFIG.common.appPaddingY,CONFIG.battleCommandWind.width,V));ct(this,"puzzle");this.puzzle=B,this.close(),this.setHandler(commandButtonConfig.skip.symbol,()=>{this.close();const{callback:K}=commandButtonConfig.skip;K&&K(B);const{menu:Z}=this.puzzle;[...Z.puzzleButtons].forEach(J=>{Z.removeSkillBtn(J),Z.addRandomSkillBtn()}),startProcessTurn()}),this.setHandler(commandButtonConfig.suicide.symbol,()=>{killParty(),startProcessTurn()})}makeCommandList(){this.addCommand(commandButtonConfig.skip.name,commandButtonConfig.skip.symbol),this.addCommand(commandButtonConfig.suicide.name,commandButtonConfig.suicide.symbol)}select(B){var K;super.select(B);const V=(K=this.currentData())==null?void 0:K.symbol;!V||!this.puzzle||this.puzzle.helpWindow.addText(commandButtonConfig[V].description(this.puzzle))}close(){super.close(),this.deselect()}reset(){this.open(),this.activate(),this.deselect(),this.puzzle.helpWindow.drawHeroineStatusText()}hoverOut(){this.isCursorMovable()&&this.deselect(),this.puzzle.helpWindow.drawHeroineStatusText()}}/*!
 * @pixi/filter-godray - v5.1.1
 * Compiled Wed, 11 Jan 2023 23:10:33 UTC
 *
 * @pixi/filter-godray is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */const s=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,g=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,v=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    if (texture2D(uSampler, vTextureCoord).a < 0.001) {
      // 如果透明度太低，不应用效果，直接返回原色
      return;
  }

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`,r=class extends PIXI.Filter{constructor($){super(s,v.replace("${perlin}",g)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const U=Object.assign(r.defaults,$);this._angleLight=new PIXI.Point,this.angle=U.angle,this.gain=U.gain,this.lacunarity=U.lacunarity,this.alpha=U.alpha,this.parallel=U.parallel,this.center=U.center,this.time=U.time}apply($,U,B,V){const{width:K,height:Z}=U.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=K,this.uniforms.dimensions[1]=Z,this.uniforms.aspect=Z/K,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,$.applyFilter(this,U,B,V)}get angle(){return this._angle}set angle($){this._angle=$;const U=$*PIXI.DEG_TO_RAD;this._angleLight.x=Math.cos(U),this._angleLight.y=Math.sin(U)}get gain(){return this.uniforms.gain}set gain($){this.uniforms.gain=$}get lacunarity(){return this.uniforms.lacunarity}set lacunarity($){this.uniforms.lacunarity=$}get alpha(){return this.uniforms.alpha}set alpha($){this.uniforms.alpha=$}},o=r;o.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};const addFilter=($,U)=>{$.filters?$.filters.push(U):$.filters=[U]},glowEffect=($,U=197379,B={})=>{var K;const V=new l$3(B);return addFilter($,V),(K=globalThis.customUpdater)==null||K.add((Z,J)=>{V.outerStrength+=.3,V.alpha-=.02,V.color-=U,V.alpha<0&&(lodashExports.pull($.filters,V),J())}),$},godRayEffect=$=>{var B;const U=new o({alpha:.4,lacunarity:1.5});return addFilter($,U),(B=globalThis.customUpdater)==null||B.add(()=>{U.time+=.05}),$};class Puzzle extends Scene_Message{constructor({enemyId:B,skillIds:V}){super();ct(this,"enemyConfig");ct(this,"map");ct(this,"skills");ct(this,"menu");ct(this,"battleController");ct(this,"heroine");ct(this,"helpWindow");ct(this,"battleCommandWin");ct(this,"onSkillPuzzleDragStart",B=>{this.addChild(B),B.alpha=.5});ct(this,"onSkillPuzzleMove",B=>{const V=B.checkHover(this.map,this);this.map.units.children.forEach(K=>{V.includes(K)?K.onHover(B.canDrop):K.onHoverOut()})});ct(this,"onSkillPuzzleReset",B=>{this.removeChild(B),B.alpha=1});ct(this,"onSkillPuzzleDrop",B=>{if(this.map.resetHover(),!B.canDrop){B.reset();return}const V=B.checkHover(this.map,this);if(lodashExports.isEmpty(V)){B.reset();return}this.onSkillPuzzleDropSuccess(B,V)});ct(this,"onSkillPuzzleDropSuccess",(B,V)=>{const K=B.snapshot,Z=PIXI.Sprite.from(K),J=V[0].position,it=B.config,[lt,ht]=getShapeFirstUnitIndex(it.shape),[Tt,zt]=getShapeFirstRowAndCol(it.shape),Et=lt-zt,Ot=ht-Tt;Z.position.set(J.x-Et*CONFIG.map.unitSize,J.y-Ot*CONFIG.map.unitSize);let Vt=197379;V.some(Rt=>Rt.status===UNIT_STATUS.enemy_empty)&&(Vt=771),V.some(Rt=>Rt.id>0)&&(Vt=5);const Bt=new PIXI.Container;Bt.addChild(Z),godRayEffect(Z),glowEffect(Bt,Vt),this.map.addChild(Bt),V.forEach(Rt=>Rt.onFill(B)),B.activeButton&&(this.menu.removeSkillBtn(B.activeButton),this.menu.addRandomSkillBtn()),this.menu.removeInvalidSkills(),B.reset(),this.battleController.onAttackSuccess({skillId:B.id,enemyId:this.enemyConfig.id,unitTypes:V.map(Rt=>Rt.id)})});this.battleController=new BattleController(this),this.enemyConfig=getEnemyConfig(B),this.map=new PuzzleMap(this.enemyConfig,this),this.addChild(this.map),this.skills=V.map(K=>new PuzzleSkill(K,this)),this.menu=new PuzzleMenu(this.skills,this),this.addChild(this.menu),this.heroine=new Heroine(this),this.addChild(this.heroine),this.battleCommandWin=new BattleCommandWin(this),this.addChild(this.battleCommandWin),this.skills.forEach(K=>{K.addListener(DRAG_EVENT.start,this.onSkillPuzzleDragStart),K.addListener(DRAG_EVENT.move,this.onSkillPuzzleMove),K.addListener(DRAG_EVENT.end,this.onSkillPuzzleDrop),K.addListener(DRAG_EVENT.reset,this.onSkillPuzzleReset)}),this.helpWindow=new HelpWindow(this),this.addChild(this.helpWindow)}destroy(){this.skills.forEach(B=>{B.isDestroyed()||B.destroy({children:!0,texture:!0,baseTexture:!0})}),super.destroy()}}const getAllAssetsPaths=()=>{var ht;const $=getHeroineSkillIds(),U=$gameTroop.troop().id,B=getEnemyConfig(U),V=[1,2].map(Tt=>getFigurePath("Rita",Tt)),K=$.map(getSkillPath),Z=getEnemyImagePath(),J=Object.keys(B.unitsTexture).map(getEnemyUnitPath),it=[0,1,2,3].map(Tt=>getEnemySkillPath("enemy",Tt)),lt=((ht=B.otherAssets)==null?void 0:ht.map(getOtherAsset))||[];return lodashExports.uniq(V.concat(K).concat([Z]).concat(it).concat(J).concat(lt))};globalThis.addEventListener(APP_EVENT.createBattleScene,()=>{getAllAssetsPaths().forEach(U=>{ImageManager.loadMsgkAssets(U)})});const loadCustomAssets=()=>{const{unitSize:$}=CONFIG.map;for(let B=0;B<=3;B++){const V=getEnemySkillPath("enemy",B),K=getAssetTexture(V),Z=new PIXI.Rectangle($,$,$,$),J=new PIXI.Texture(K.baseTexture,Z);K.destroy(),setAssetTexture(V,J)}const U=getEnemyConfig($gameTroop.troop().id);Object.keys(U.unitsTexture).forEach(B=>{const V=getAssetTexture(getEnemyUnitPath(B));setAssetTexture(getRtEnemyUnitPath(B,"normal"),V);const K=tintTexture(V,COLOR_MATRIX.positive);setAssetTexture(getRtEnemyUnitPath(B,"positive"),K);const Z=tintTexture(V,COLOR_MATRIX.negative);setAssetTexture(getRtEnemyUnitPath(B,"negative"),Z)})};globalThis.addEventListener(APP_EVENT.battleSceneReady,async()=>{loadCustomAssets();const $=new CustomUpdater;globalThis.customUpdater=$;const U=$gameTroop.troop().id,B=getHeroineSkillIds(),V=new Puzzle({enemyId:U,skillIds:B});Graphics.app.stage.addChildAt(V,1),Graphics.app.stage.addChild($),Graphics.app.stage.emit(STAGE_EVENT.battleStart),BattleManager._spriteset.battlerSprites().forEach(Z=>Z.hide());const K=[];K.push(addStageEventListener(STAGE_EVENT.troopEventStart,()=>{V.map.resetHover(),TouchInput.clear(),toggleControllable(!1)}),addStageEventListener(STAGE_EVENT.troopEventEnd,()=>{toggleControllable(!0)})),addStageEventListenerOnce(STAGE_EVENT.battleEnd,()=>{TouchInput.clear(),K.forEach(Z=>Z())})});const mixins={add($,U){return U||(U=new core.Point),U.x=this.x+$.x,U.y=this.y+$.y,U},subtract($,U){return U||(U=new core.Point),U.x=this.x-$.x,U.y=this.y-$.y,U},multiply($,U){return U||(U=new core.Point),U.x=this.x*$.x,U.y=this.y*$.y,U},multiplyScalar($,U){return U||(U=new core.Point),U.x=this.x*$,U.y=this.y*$,U},dot($){return this.x*$.x+this.y*$.y},cross($){return this.x*$.y-this.y*$.x},normalize($){$||($=new core.Point);const U=Math.sqrt(this.x*this.x+this.y*this.y);return $.x=this.x/U,$.y=this.y/U,$},magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y)},magnitudeSquared(){return this.x*this.x+this.y*this.y},project($,U){U||(U=new core.Point);const B=(this.x*$.x+this.y*$.y)/($.x*$.x+$.y*$.y);return U.x=$.x*B,U.y=$.y*B,U},reflect($,U){U||(U=new core.Point);const B=this.x*$.x+this.y*$.y;return U.x=this.x-2*B*$.x,U.y=this.y-2*B*$.y,U}};Object.assign(core.Point.prototype,mixins),Object.assign(core.ObservablePoint.prototype,mixins),core.Rectangle.prototype.containsRect=function($){return $.width<=0||$.height<=0?$.x>this.x&&$.y>this.y&&$.right<this.right&&$.bottom<this.bottom:$.x>=this.x&&$.y>=this.y&&$.right<=this.right&&$.bottom<=this.bottom},core.Rectangle.prototype.equals=function($){return $===this?!0:$&&this.x===$.x&&this.y===$.y&&this.width===$.width&&this.height===$.height},core.Rectangle.prototype.intersection=function($,U){U||(U=new core.Rectangle);const B=this.x<$.x?$.x:this.x,V=this.right>$.right?$.right:this.right;if(V<=B)return U.x=U.y=U.width=U.height=0,U;const K=this.y<$.y?$.y:this.y,Z=this.bottom>$.bottom?$.bottom:this.bottom;return Z<=K?(U.x=U.y=U.width=U.height=0,U):(U.x=B,U.y=K,U.width=V-B,U.height=Z-K,U)},core.Rectangle.prototype.union=function($,U){U||(U=new core.Rectangle);const B=Math.min(this.x,$.x),V=Math.max(this.x+this.width,$.x+$.width),K=Math.min(this.y,$.y),Z=Math.max(this.y+this.height,$.y+$.height);return U.x=B,U.y=K,U.width=V-B,U.height=Z-K,U},PIXI.settings.PREFER_ENV=PIXI.ENV.WEBGL2,Object.assign(PIXI.Sprite.prototype,{isDestroyed:function(){return this._destroyed}});const _SceneManager_onSceneStart=SceneManager.onSceneStart;SceneManager.onSceneStart=function(){if(_SceneManager_onSceneStart.apply(this),this._scene instanceof Scene_Battle){const $=new CustomEvent(APP_EVENT.battleSceneReady);globalThis.dispatchEvent($)}};const _BattleManager_updatePhase=BattleManager.updatePhase;BattleManager.updatePhase=function($){switch(this._phase){case"start":Graphics.app.stage.emit(STAGE_EVENT.turnStart,$);break;case"turn":break;case"action":break;case"turnEnd":Graphics.app.stage.emit(STAGE_EVENT.turnEnd,$);break;case"battleEnd":Graphics.app.stage.emit(STAGE_EVENT.battleEnd,$);break}_BattleManager_updatePhase.apply(this,[$])};const _BattleManager_getNextSubject=BattleManager.getNextSubject;BattleManager.getNextSubject=function(){const $=this._actionBattlers,U=$.find(Boolean);return U instanceof Game_Enemy&&(lodashExports.difference($gameTroop.members(),$).length||Graphics.app.stage.emit(STAGE_EVENT.enemyTurn,U)),_BattleManager_getNextSubject.apply(this)},ImageManager.loadMsgkAssets=function($){return this.loadBitmap.apply(this,["",$.replace(/\.png$/,"")])};const _Scene_Battle_create=Scene_Battle.prototype.create;Scene_Battle.prototype.create=function(){const $=new CustomEvent(APP_EVENT.createBattleScene);globalThis.dispatchEvent($),_Scene_Battle_create.apply(this)};const _Scene_Battle_startPartyCommandSelection=Scene_Battle.prototype.startPartyCommandSelection;Scene_Battle.prototype.startPartyCommandSelection=function(){_Scene_Battle_startPartyCommandSelection.apply(this),this._statusWindow.hide(),this._statusWindow.alpha=0,this._partyCommandWindow.hide(),this._actorCommandWindow.hide()};const _Scene_Battle_terminate=Scene_Battle.prototype.terminate;Scene_Battle.prototype.terminate=function(){clearCache(),_Scene_Battle_terminate.apply(this)};const _Window_BattleLog_wait=Window_BattleLog.prototype.wait;Window_BattleLog.prototype.wait=function($){if($){this._waitCount=$;return}_Window_BattleLog_wait.apply(this)};const _Game_Battler_onAllActionsEnd=Game_Battler.prototype.onAllActionsEnd;Game_Battler.prototype.onAllActionsEnd=function(){this===getFirstEnemy()&&Graphics.app.stage.emit(STAGE_EVENT.enemyActionEnd,this),_Game_Battler_onAllActionsEnd.apply(this)};let isTroopEventRunning=!1;const _Game_Troop_isEventRunning=Game_Troop.prototype.isEventRunning;Game_Troop.prototype.isEventRunning=function(){const $=_Game_Troop_isEventRunning.apply(this);return $!==isTroopEventRunning&&(isTroopEventRunning=$,$?Graphics.app.stage.emit(STAGE_EVENT.troopEventStart):Graphics.app.stage.emit(STAGE_EVENT.troopEventEnd)),$};const setupPlugin=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}))});
