var u0=Object.defineProperty;var c0=(ze,$,B)=>$ in ze?u0(ze,$,{enumerable:!0,configurable:!0,writable:!0,value:B}):ze[$]=B;var ft=(ze,$,B)=>(c0(ze,typeof $!="symbol"?$+"":$,B),B);(function(ze,$){typeof exports=="object"&&typeof module<"u"?$(require("@pixi/core"),require("@pixi/settings")):typeof define=="function"&&define.amd?define(["@pixi/core","@pixi/settings"],$):(ze=typeof globalThis<"u"?globalThis:ze||self,$(ze.PIXI,ze.PIXI))})(this,function(core,settings){var ze;"use strict";const style="",loadPlugin=async()=>{await Promise.resolve().then(()=>setupPlugin)};if((ze=globalThis.Graphics)!=null&&ze.app)loadPlugin().catch(console.error);else{const $=setInterval(()=>{var B;(B=globalThis.Graphics)!=null&&B.app&&(clearInterval($),loadPlugin().catch(console.error))},200)}const UNIT_STATUS={empty:"empty",block:"block",enemy_empty:"enemy_empty",enemy_block:"enemy_block"},CONFIG={common:{appPaddingY:4,fontSize:{big:32,default:26,medium:20,small:16}},skill:{tint:{normal:11184895,magic:16777130,special:13426141}},map:{offsetX:450,offsetY:140,unitSize:48},menu:{width:192,btnHoverScale:1.2,paddingY:20},battleCommandWind:{padding:16,width:100},figure:{offsetX:100,offsetY:50,width:280,half:250,height:600},helpWindow:{exceedWidth:40}},COLOR_MATRIX={positive:[.8,0,0,0,0,1.5,0,0,0,0,.8,0,0,0,0,1],negative:[1.5,0,0,0,0,.8,0,0,0,0,.8,0,0,0,0,1]};var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lodash={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */lodash.exports,function($,B){(function(){var U,X="4.17.21",Y=200,Z="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",J="Expected a function",nt="Invalid `variable` option passed into `_.template`",lt="__lodash_hash_undefined__",ct=500,mt="__lodash_placeholder__",yt=1,Rt=2,bt=4,Wt=1,Ut=2,kt=1,Re=2,Mr=4,Zt=8,mr=16,Ue=32,vr=64,Ke=128,Ar=256,en=512,Sn=30,$r="...",yi=800,In=16,_e=1,rr=2,An=3,gt=1/0,At=9007199254740991,Ht=17976931348623157e292,Fe=0/0,Oe=4294967295,yl=Oe-1,Tl=Oe>>>1,Cl=[["ary",Ke],["bind",kt],["bindKey",Re],["curry",Zt],["curryRight",mr],["flip",en],["partial",Ue],["partialRight",vr],["rearg",Ar]],Br="[object Arguments]",Pn="[object Array]",wl="[object AsyncFunction]",rn="[object Boolean]",nn="[object Date]",bl="[object DOMException]",En="[object Error]",zn="[object Function]",Ho="[object GeneratorFunction]",Ze="[object Map]",on="[object Number]",Sl="[object Null]",sr="[object Object]",Do="[object Promise]",Il="[object Proxy]",sn="[object RegExp]",je="[object Set]",an="[object String]",Rn="[object Symbol]",Al="[object Undefined]",ln="[object WeakMap]",Pl="[object WeakSet]",un="[object ArrayBuffer]",Ur="[object DataView]",Ti="[object Float32Array]",Ci="[object Float64Array]",wi="[object Int8Array]",bi="[object Int16Array]",Si="[object Int32Array]",Ii="[object Uint8Array]",Ai="[object Uint8ClampedArray]",Pi="[object Uint16Array]",Ei="[object Uint32Array]",El=/\b__p \+= '';/g,zl=/\b(__p \+=) '' \+/g,Rl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xo=/&(?:amp|lt|gt|quot|#39);/g,Vo=/[&<>"']/g,Fl=RegExp(Xo.source),Ol=RegExp(Vo.source),Ll=/<%-([\s\S]+?)%>/g,kl=/<%([\s\S]+?)%>/g,qo=/<%=([\s\S]+?)%>/g,Nl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ml=/^\w*$/,$l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zi=/[\\^$.*+?()[\]{}|]/g,Bl=RegExp(zi.source),Ri=/^\s+/,Ul=/\s/,Gl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Wl=/\{\n\/\* \[wrapped with (.+)\] \*/,Hl=/,? & /,Dl=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Xl=/[()=,{}\[\]\/\s]/,Vl=/\\(\\)?/g,ql=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Yo=/\w*$/,Yl=/^[-+]0x[0-9a-f]+$/i,Kl=/^0b[01]+$/i,Zl=/^\[object .+?Constructor\]$/,jl=/^0o[0-7]+$/i,Ql=/^(?:0|[1-9]\d*)$/,Jl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fn=/($^)/,tu=/['\n\r\u2028\u2029\\]/g,On="\\ud800-\\udfff",eu="\\u0300-\\u036f",ru="\\ufe20-\\ufe2f",nu="\\u20d0-\\u20ff",Ko=eu+ru+nu,Zo="\\u2700-\\u27bf",jo="a-z\\xdf-\\xf6\\xf8-\\xff",iu="\\xac\\xb1\\xd7\\xf7",ou="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",su="\\u2000-\\u206f",au=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Qo="A-Z\\xc0-\\xd6\\xd8-\\xde",Jo="\\ufe0e\\ufe0f",ts=iu+ou+su+au,Fi="['’]",lu="["+On+"]",es="["+ts+"]",Ln="["+Ko+"]",rs="\\d+",uu="["+Zo+"]",ns="["+jo+"]",is="[^"+On+ts+rs+Zo+jo+Qo+"]",Oi="\\ud83c[\\udffb-\\udfff]",cu="(?:"+Ln+"|"+Oi+")",os="[^"+On+"]",Li="(?:\\ud83c[\\udde6-\\uddff]){2}",ki="[\\ud800-\\udbff][\\udc00-\\udfff]",Gr="["+Qo+"]",ss="\\u200d",as="(?:"+ns+"|"+is+")",fu="(?:"+Gr+"|"+is+")",ls="(?:"+Fi+"(?:d|ll|m|re|s|t|ve))?",us="(?:"+Fi+"(?:D|LL|M|RE|S|T|VE))?",cs=cu+"?",fs="["+Jo+"]?",hu="(?:"+ss+"(?:"+[os,Li,ki].join("|")+")"+fs+cs+")*",du="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hs=fs+cs+hu,gu="(?:"+[uu,Li,ki].join("|")+")"+hs,mu="(?:"+[os+Ln+"?",Ln,Li,ki,lu].join("|")+")",vu=RegExp(Fi,"g"),xu=RegExp(Ln,"g"),Ni=RegExp(Oi+"(?="+Oi+")|"+mu+hs,"g"),_u=RegExp([Gr+"?"+ns+"+"+ls+"(?="+[es,Gr,"$"].join("|")+")",fu+"+"+us+"(?="+[es,Gr+as,"$"].join("|")+")",Gr+"?"+as+"+"+ls,Gr+"+"+us,pu,du,rs,gu].join("|"),"g"),yu=RegExp("["+ss+On+Ko+Jo+"]"),Tu=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Cu=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],wu=-1,$t={};$t[Ti]=$t[Ci]=$t[wi]=$t[bi]=$t[Si]=$t[Ii]=$t[Ai]=$t[Pi]=$t[Ei]=!0,$t[Br]=$t[Pn]=$t[un]=$t[rn]=$t[Ur]=$t[nn]=$t[En]=$t[zn]=$t[Ze]=$t[on]=$t[sr]=$t[sn]=$t[je]=$t[an]=$t[ln]=!1;var Mt={};Mt[Br]=Mt[Pn]=Mt[un]=Mt[Ur]=Mt[rn]=Mt[nn]=Mt[Ti]=Mt[Ci]=Mt[wi]=Mt[bi]=Mt[Si]=Mt[Ze]=Mt[on]=Mt[sr]=Mt[sn]=Mt[je]=Mt[an]=Mt[Rn]=Mt[Ii]=Mt[Ai]=Mt[Pi]=Mt[Ei]=!0,Mt[En]=Mt[zn]=Mt[ln]=!1;var bu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Su={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Iu={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Au={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Pu=parseFloat,Eu=parseInt,ds=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,zu=typeof self=="object"&&self&&self.Object===Object&&self,jt=ds||zu||Function("return this")(),Mi=B&&!B.nodeType&&B,Pr=Mi&&!0&&$&&!$.nodeType&&$,ps=Pr&&Pr.exports===Mi,$i=ps&&ds.process,Ge=function(){try{var et=Pr&&Pr.require&&Pr.require("util").types;return et||$i&&$i.binding&&$i.binding("util")}catch{}}(),gs=Ge&&Ge.isArrayBuffer,ms=Ge&&Ge.isDate,vs=Ge&&Ge.isMap,xs=Ge&&Ge.isRegExp,_s=Ge&&Ge.isSet,ys=Ge&&Ge.isTypedArray;function Le(et,ot,it){switch(it.length){case 0:return et.call(ot);case 1:return et.call(ot,it[0]);case 2:return et.call(ot,it[0],it[1]);case 3:return et.call(ot,it[0],it[1],it[2])}return et.apply(ot,it)}function Ru(et,ot,it,dt){for(var Tt=-1,Ft=et==null?0:et.length;++Tt<Ft;){var qt=et[Tt];ot(dt,qt,it(qt),et)}return dt}function We(et,ot){for(var it=-1,dt=et==null?0:et.length;++it<dt&&ot(et[it],it,et)!==!1;);return et}function Fu(et,ot){for(var it=et==null?0:et.length;it--&&ot(et[it],it,et)!==!1;);return et}function Ts(et,ot){for(var it=-1,dt=et==null?0:et.length;++it<dt;)if(!ot(et[it],it,et))return!1;return!0}function xr(et,ot){for(var it=-1,dt=et==null?0:et.length,Tt=0,Ft=[];++it<dt;){var qt=et[it];ot(qt,it,et)&&(Ft[Tt++]=qt)}return Ft}function kn(et,ot){var it=et==null?0:et.length;return!!it&&Wr(et,ot,0)>-1}function Bi(et,ot,it){for(var dt=-1,Tt=et==null?0:et.length;++dt<Tt;)if(it(ot,et[dt]))return!0;return!1}function Bt(et,ot){for(var it=-1,dt=et==null?0:et.length,Tt=Array(dt);++it<dt;)Tt[it]=ot(et[it],it,et);return Tt}function _r(et,ot){for(var it=-1,dt=ot.length,Tt=et.length;++it<dt;)et[Tt+it]=ot[it];return et}function Ui(et,ot,it,dt){var Tt=-1,Ft=et==null?0:et.length;for(dt&&Ft&&(it=et[++Tt]);++Tt<Ft;)it=ot(it,et[Tt],Tt,et);return it}function Ou(et,ot,it,dt){var Tt=et==null?0:et.length;for(dt&&Tt&&(it=et[--Tt]);Tt--;)it=ot(it,et[Tt],Tt,et);return it}function Gi(et,ot){for(var it=-1,dt=et==null?0:et.length;++it<dt;)if(ot(et[it],it,et))return!0;return!1}var Lu=Wi("length");function ku(et){return et.split("")}function Nu(et){return et.match(Dl)||[]}function Cs(et,ot,it){var dt;return it(et,function(Tt,Ft,qt){if(ot(Tt,Ft,qt))return dt=Ft,!1}),dt}function Nn(et,ot,it,dt){for(var Tt=et.length,Ft=it+(dt?1:-1);dt?Ft--:++Ft<Tt;)if(ot(et[Ft],Ft,et))return Ft;return-1}function Wr(et,ot,it){return ot===ot?Yu(et,ot,it):Nn(et,ws,it)}function Mu(et,ot,it,dt){for(var Tt=it-1,Ft=et.length;++Tt<Ft;)if(dt(et[Tt],ot))return Tt;return-1}function ws(et){return et!==et}function bs(et,ot){var it=et==null?0:et.length;return it?Di(et,ot)/it:Fe}function Wi(et){return function(ot){return ot==null?U:ot[et]}}function Hi(et){return function(ot){return et==null?U:et[ot]}}function Ss(et,ot,it,dt,Tt){return Tt(et,function(Ft,qt,Nt){it=dt?(dt=!1,Ft):ot(it,Ft,qt,Nt)}),it}function $u(et,ot){var it=et.length;for(et.sort(ot);it--;)et[it]=et[it].value;return et}function Di(et,ot){for(var it,dt=-1,Tt=et.length;++dt<Tt;){var Ft=ot(et[dt]);Ft!==U&&(it=it===U?Ft:it+Ft)}return it}function Xi(et,ot){for(var it=-1,dt=Array(et);++it<et;)dt[it]=ot(it);return dt}function Bu(et,ot){return Bt(ot,function(it){return[it,et[it]]})}function Is(et){return et&&et.slice(0,zs(et)+1).replace(Ri,"")}function ke(et){return function(ot){return et(ot)}}function Vi(et,ot){return Bt(ot,function(it){return et[it]})}function cn(et,ot){return et.has(ot)}function As(et,ot){for(var it=-1,dt=et.length;++it<dt&&Wr(ot,et[it],0)>-1;);return it}function Ps(et,ot){for(var it=et.length;it--&&Wr(ot,et[it],0)>-1;);return it}function Uu(et,ot){for(var it=et.length,dt=0;it--;)et[it]===ot&&++dt;return dt}var Gu=Hi(bu),Wu=Hi(Su);function Hu(et){return"\\"+Au[et]}function Du(et,ot){return et==null?U:et[ot]}function Hr(et){return yu.test(et)}function Xu(et){return Tu.test(et)}function Vu(et){for(var ot,it=[];!(ot=et.next()).done;)it.push(ot.value);return it}function qi(et){var ot=-1,it=Array(et.size);return et.forEach(function(dt,Tt){it[++ot]=[Tt,dt]}),it}function Es(et,ot){return function(it){return et(ot(it))}}function yr(et,ot){for(var it=-1,dt=et.length,Tt=0,Ft=[];++it<dt;){var qt=et[it];(qt===ot||qt===mt)&&(et[it]=mt,Ft[Tt++]=it)}return Ft}function Mn(et){var ot=-1,it=Array(et.size);return et.forEach(function(dt){it[++ot]=dt}),it}function qu(et){var ot=-1,it=Array(et.size);return et.forEach(function(dt){it[++ot]=[dt,dt]}),it}function Yu(et,ot,it){for(var dt=it-1,Tt=et.length;++dt<Tt;)if(et[dt]===ot)return dt;return-1}function Ku(et,ot,it){for(var dt=it+1;dt--;)if(et[dt]===ot)return dt;return dt}function Dr(et){return Hr(et)?ju(et):Lu(et)}function Qe(et){return Hr(et)?Qu(et):ku(et)}function zs(et){for(var ot=et.length;ot--&&Ul.test(et.charAt(ot)););return ot}var Zu=Hi(Iu);function ju(et){for(var ot=Ni.lastIndex=0;Ni.test(et);)++ot;return ot}function Qu(et){return et.match(Ni)||[]}function Ju(et){return et.match(_u)||[]}var tc=function et(ot){ot=ot==null?jt:Xr.defaults(jt.Object(),ot,Xr.pick(jt,Cu));var it=ot.Array,dt=ot.Date,Tt=ot.Error,Ft=ot.Function,qt=ot.Math,Nt=ot.Object,Yi=ot.RegExp,ec=ot.String,He=ot.TypeError,$n=it.prototype,rc=Ft.prototype,Vr=Nt.prototype,Bn=ot["__core-js_shared__"],Un=rc.toString,Lt=Vr.hasOwnProperty,nc=0,Rs=function(){var C=/[^.]+$/.exec(Bn&&Bn.keys&&Bn.keys.IE_PROTO||"");return C?"Symbol(src)_1."+C:""}(),Gn=Vr.toString,ic=Un.call(Nt),oc=jt._,sc=Yi("^"+Un.call(Lt).replace(zi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wn=ps?ot.Buffer:U,Tr=ot.Symbol,Hn=ot.Uint8Array,Fs=Wn?Wn.allocUnsafe:U,Dn=Es(Nt.getPrototypeOf,Nt),Os=Nt.create,Ls=Vr.propertyIsEnumerable,Xn=$n.splice,ks=Tr?Tr.isConcatSpreadable:U,fn=Tr?Tr.iterator:U,Er=Tr?Tr.toStringTag:U,Vn=function(){try{var C=Lr(Nt,"defineProperty");return C({},"",{}),C}catch{}}(),ac=ot.clearTimeout!==jt.clearTimeout&&ot.clearTimeout,lc=dt&&dt.now!==jt.Date.now&&dt.now,uc=ot.setTimeout!==jt.setTimeout&&ot.setTimeout,qn=qt.ceil,Yn=qt.floor,Ki=Nt.getOwnPropertySymbols,cc=Wn?Wn.isBuffer:U,Ns=ot.isFinite,fc=$n.join,hc=Es(Nt.keys,Nt),Yt=qt.max,Jt=qt.min,dc=dt.now,pc=ot.parseInt,Ms=qt.random,gc=$n.reverse,Zi=Lr(ot,"DataView"),hn=Lr(ot,"Map"),ji=Lr(ot,"Promise"),qr=Lr(ot,"Set"),dn=Lr(ot,"WeakMap"),pn=Lr(Nt,"create"),Kn=dn&&new dn,Yr={},mc=kr(Zi),vc=kr(hn),xc=kr(ji),_c=kr(qr),yc=kr(dn),Zn=Tr?Tr.prototype:U,gn=Zn?Zn.valueOf:U,$s=Zn?Zn.toString:U;function q(C){if(Dt(C)&&!Ct(C)&&!(C instanceof Et)){if(C instanceof De)return C;if(Lt.call(C,"__wrapped__"))return Ba(C)}return new De(C)}var Kr=function(){function C(){}return function(I){if(!Gt(I))return{};if(Os)return Os(I);C.prototype=I;var E=new C;return C.prototype=U,E}}();function jn(){}function De(C,I){this.__wrapped__=C,this.__actions__=[],this.__chain__=!!I,this.__index__=0,this.__values__=U}q.templateSettings={escape:Ll,evaluate:kl,interpolate:qo,variable:"",imports:{_:q}},q.prototype=jn.prototype,q.prototype.constructor=q,De.prototype=Kr(jn.prototype),De.prototype.constructor=De;function Et(C){this.__wrapped__=C,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Oe,this.__views__=[]}function Tc(){var C=new Et(this.__wrapped__);return C.__actions__=Ie(this.__actions__),C.__dir__=this.__dir__,C.__filtered__=this.__filtered__,C.__iteratees__=Ie(this.__iteratees__),C.__takeCount__=this.__takeCount__,C.__views__=Ie(this.__views__),C}function Cc(){if(this.__filtered__){var C=new Et(this);C.__dir__=-1,C.__filtered__=!0}else C=this.clone(),C.__dir__*=-1;return C}function wc(){var C=this.__wrapped__.value(),I=this.__dir__,E=Ct(C),H=I<0,V=E?C.length:0,K=Nf(0,V,this.__views__),j=K.start,tt=K.end,rt=tt-j,st=H?tt:j-1,at=this.__iteratees__,ut=at.length,ht=0,pt=Jt(rt,this.__takeCount__);if(!E||!H&&V==rt&&pt==rt)return la(C,this.__actions__);var xt=[];t:for(;rt--&&ht<pt;){st+=I;for(var St=-1,_t=C[st];++St<ut;){var Pt=at[St],zt=Pt.iteratee,$e=Pt.type,Se=zt(_t);if($e==rr)_t=Se;else if(!Se){if($e==_e)continue t;break t}}xt[ht++]=_t}return xt}Et.prototype=Kr(jn.prototype),Et.prototype.constructor=Et;function zr(C){var I=-1,E=C==null?0:C.length;for(this.clear();++I<E;){var H=C[I];this.set(H[0],H[1])}}function bc(){this.__data__=pn?pn(null):{},this.size=0}function Sc(C){var I=this.has(C)&&delete this.__data__[C];return this.size-=I?1:0,I}function Ic(C){var I=this.__data__;if(pn){var E=I[C];return E===lt?U:E}return Lt.call(I,C)?I[C]:U}function Ac(C){var I=this.__data__;return pn?I[C]!==U:Lt.call(I,C)}function Pc(C,I){var E=this.__data__;return this.size+=this.has(C)?0:1,E[C]=pn&&I===U?lt:I,this}zr.prototype.clear=bc,zr.prototype.delete=Sc,zr.prototype.get=Ic,zr.prototype.has=Ac,zr.prototype.set=Pc;function ar(C){var I=-1,E=C==null?0:C.length;for(this.clear();++I<E;){var H=C[I];this.set(H[0],H[1])}}function Ec(){this.__data__=[],this.size=0}function zc(C){var I=this.__data__,E=Qn(I,C);if(E<0)return!1;var H=I.length-1;return E==H?I.pop():Xn.call(I,E,1),--this.size,!0}function Rc(C){var I=this.__data__,E=Qn(I,C);return E<0?U:I[E][1]}function Fc(C){return Qn(this.__data__,C)>-1}function Oc(C,I){var E=this.__data__,H=Qn(E,C);return H<0?(++this.size,E.push([C,I])):E[H][1]=I,this}ar.prototype.clear=Ec,ar.prototype.delete=zc,ar.prototype.get=Rc,ar.prototype.has=Fc,ar.prototype.set=Oc;function lr(C){var I=-1,E=C==null?0:C.length;for(this.clear();++I<E;){var H=C[I];this.set(H[0],H[1])}}function Lc(){this.size=0,this.__data__={hash:new zr,map:new(hn||ar),string:new zr}}function kc(C){var I=ci(this,C).delete(C);return this.size-=I?1:0,I}function Nc(C){return ci(this,C).get(C)}function Mc(C){return ci(this,C).has(C)}function $c(C,I){var E=ci(this,C),H=E.size;return E.set(C,I),this.size+=E.size==H?0:1,this}lr.prototype.clear=Lc,lr.prototype.delete=kc,lr.prototype.get=Nc,lr.prototype.has=Mc,lr.prototype.set=$c;function Rr(C){var I=-1,E=C==null?0:C.length;for(this.__data__=new lr;++I<E;)this.add(C[I])}function Bc(C){return this.__data__.set(C,lt),this}function Uc(C){return this.__data__.has(C)}Rr.prototype.add=Rr.prototype.push=Bc,Rr.prototype.has=Uc;function Je(C){var I=this.__data__=new ar(C);this.size=I.size}function Gc(){this.__data__=new ar,this.size=0}function Wc(C){var I=this.__data__,E=I.delete(C);return this.size=I.size,E}function Hc(C){return this.__data__.get(C)}function Dc(C){return this.__data__.has(C)}function Xc(C,I){var E=this.__data__;if(E instanceof ar){var H=E.__data__;if(!hn||H.length<Y-1)return H.push([C,I]),this.size=++E.size,this;E=this.__data__=new lr(H)}return E.set(C,I),this.size=E.size,this}Je.prototype.clear=Gc,Je.prototype.delete=Wc,Je.prototype.get=Hc,Je.prototype.has=Dc,Je.prototype.set=Xc;function Bs(C,I){var E=Ct(C),H=!E&&Nr(C),V=!E&&!H&&Ir(C),K=!E&&!H&&!V&&Jr(C),j=E||H||V||K,tt=j?Xi(C.length,ec):[],rt=tt.length;for(var st in C)(I||Lt.call(C,st))&&!(j&&(st=="length"||V&&(st=="offset"||st=="parent")||K&&(st=="buffer"||st=="byteLength"||st=="byteOffset")||hr(st,rt)))&&tt.push(st);return tt}function Us(C){var I=C.length;return I?C[lo(0,I-1)]:U}function Vc(C,I){return fi(Ie(C),Fr(I,0,C.length))}function qc(C){return fi(Ie(C))}function Qi(C,I,E){(E!==U&&!tr(C[I],E)||E===U&&!(I in C))&&ur(C,I,E)}function mn(C,I,E){var H=C[I];(!(Lt.call(C,I)&&tr(H,E))||E===U&&!(I in C))&&ur(C,I,E)}function Qn(C,I){for(var E=C.length;E--;)if(tr(C[E][0],I))return E;return-1}function Yc(C,I,E,H){return Cr(C,function(V,K,j){I(H,V,E(V),j)}),H}function Gs(C,I){return C&&ir(I,Kt(I),C)}function Kc(C,I){return C&&ir(I,Pe(I),C)}function ur(C,I,E){I=="__proto__"&&Vn?Vn(C,I,{configurable:!0,enumerable:!0,value:E,writable:!0}):C[I]=E}function Ji(C,I){for(var E=-1,H=I.length,V=it(H),K=C==null;++E<H;)V[E]=K?U:Lo(C,I[E]);return V}function Fr(C,I,E){return C===C&&(E!==U&&(C=C<=E?C:E),I!==U&&(C=C>=I?C:I)),C}function Xe(C,I,E,H,V,K){var j,tt=I&yt,rt=I&Rt,st=I&bt;if(E&&(j=V?E(C,H,V,K):E(C)),j!==U)return j;if(!Gt(C))return C;var at=Ct(C);if(at){if(j=$f(C),!tt)return Ie(C,j)}else{var ut=xe(C),ht=ut==zn||ut==Ho;if(Ir(C))return fa(C,tt);if(ut==sr||ut==Br||ht&&!V){if(j=rt||ht?{}:za(C),!tt)return rt?Af(C,Kc(j,C)):If(C,Gs(j,C))}else{if(!Mt[ut])return V?C:{};j=Bf(C,ut,tt)}}K||(K=new Je);var pt=K.get(C);if(pt)return pt;K.set(C,j),ol(C)?C.forEach(function(_t){j.add(Xe(_t,I,E,_t,C,K))}):nl(C)&&C.forEach(function(_t,Pt){j.set(Pt,Xe(_t,I,E,Pt,C,K))});var xt=st?rt?yo:_o:rt?Pe:Kt,St=at?U:xt(C);return We(St||C,function(_t,Pt){St&&(Pt=_t,_t=C[Pt]),mn(j,Pt,Xe(_t,I,E,Pt,C,K))}),j}function Zc(C){var I=Kt(C);return function(E){return Ws(E,C,I)}}function Ws(C,I,E){var H=E.length;if(C==null)return!H;for(C=Nt(C);H--;){var V=E[H],K=I[V],j=C[V];if(j===U&&!(V in C)||!K(j))return!1}return!0}function Hs(C,I,E){if(typeof C!="function")throw new He(J);return wn(function(){C.apply(U,E)},I)}function vn(C,I,E,H){var V=-1,K=kn,j=!0,tt=C.length,rt=[],st=I.length;if(!tt)return rt;E&&(I=Bt(I,ke(E))),H?(K=Bi,j=!1):I.length>=Y&&(K=cn,j=!1,I=new Rr(I));t:for(;++V<tt;){var at=C[V],ut=E==null?at:E(at);if(at=H||at!==0?at:0,j&&ut===ut){for(var ht=st;ht--;)if(I[ht]===ut)continue t;rt.push(at)}else K(I,ut,H)||rt.push(at)}return rt}var Cr=ma(nr),Ds=ma(eo,!0);function jc(C,I){var E=!0;return Cr(C,function(H,V,K){return E=!!I(H,V,K),E}),E}function Jn(C,I,E){for(var H=-1,V=C.length;++H<V;){var K=C[H],j=I(K);if(j!=null&&(tt===U?j===j&&!Me(j):E(j,tt)))var tt=j,rt=K}return rt}function Qc(C,I,E,H){var V=C.length;for(E=wt(E),E<0&&(E=-E>V?0:V+E),H=H===U||H>V?V:wt(H),H<0&&(H+=V),H=E>H?0:al(H);E<H;)C[E++]=I;return C}function Xs(C,I){var E=[];return Cr(C,function(H,V,K){I(H,V,K)&&E.push(H)}),E}function Qt(C,I,E,H,V){var K=-1,j=C.length;for(E||(E=Gf),V||(V=[]);++K<j;){var tt=C[K];I>0&&E(tt)?I>1?Qt(tt,I-1,E,H,V):_r(V,tt):H||(V[V.length]=tt)}return V}var to=va(),Vs=va(!0);function nr(C,I){return C&&to(C,I,Kt)}function eo(C,I){return C&&Vs(C,I,Kt)}function ti(C,I){return xr(I,function(E){return dr(C[E])})}function Or(C,I){I=br(I,C);for(var E=0,H=I.length;C!=null&&E<H;)C=C[or(I[E++])];return E&&E==H?C:U}function qs(C,I,E){var H=I(C);return Ct(C)?H:_r(H,E(C))}function Te(C){return C==null?C===U?Al:Sl:Er&&Er in Nt(C)?kf(C):Yf(C)}function ro(C,I){return C>I}function Jc(C,I){return C!=null&&Lt.call(C,I)}function tf(C,I){return C!=null&&I in Nt(C)}function ef(C,I,E){return C>=Jt(I,E)&&C<Yt(I,E)}function no(C,I,E){for(var H=E?Bi:kn,V=C[0].length,K=C.length,j=K,tt=it(K),rt=1/0,st=[];j--;){var at=C[j];j&&I&&(at=Bt(at,ke(I))),rt=Jt(at.length,rt),tt[j]=!E&&(I||V>=120&&at.length>=120)?new Rr(j&&at):U}at=C[0];var ut=-1,ht=tt[0];t:for(;++ut<V&&st.length<rt;){var pt=at[ut],xt=I?I(pt):pt;if(pt=E||pt!==0?pt:0,!(ht?cn(ht,xt):H(st,xt,E))){for(j=K;--j;){var St=tt[j];if(!(St?cn(St,xt):H(C[j],xt,E)))continue t}ht&&ht.push(xt),st.push(pt)}}return st}function rf(C,I,E,H){return nr(C,function(V,K,j){I(H,E(V),K,j)}),H}function xn(C,I,E){I=br(I,C),C=La(C,I);var H=C==null?C:C[or(qe(I))];return H==null?U:Le(H,C,E)}function Ys(C){return Dt(C)&&Te(C)==Br}function nf(C){return Dt(C)&&Te(C)==un}function of(C){return Dt(C)&&Te(C)==nn}function _n(C,I,E,H,V){return C===I?!0:C==null||I==null||!Dt(C)&&!Dt(I)?C!==C&&I!==I:sf(C,I,E,H,_n,V)}function sf(C,I,E,H,V,K){var j=Ct(C),tt=Ct(I),rt=j?Pn:xe(C),st=tt?Pn:xe(I);rt=rt==Br?sr:rt,st=st==Br?sr:st;var at=rt==sr,ut=st==sr,ht=rt==st;if(ht&&Ir(C)){if(!Ir(I))return!1;j=!0,at=!1}if(ht&&!at)return K||(K=new Je),j||Jr(C)?Aa(C,I,E,H,V,K):Of(C,I,rt,E,H,V,K);if(!(E&Wt)){var pt=at&&Lt.call(C,"__wrapped__"),xt=ut&&Lt.call(I,"__wrapped__");if(pt||xt){var St=pt?C.value():C,_t=xt?I.value():I;return K||(K=new Je),V(St,_t,E,H,K)}}return ht?(K||(K=new Je),Lf(C,I,E,H,V,K)):!1}function af(C){return Dt(C)&&xe(C)==Ze}function io(C,I,E,H){var V=E.length,K=V,j=!H;if(C==null)return!K;for(C=Nt(C);V--;){var tt=E[V];if(j&&tt[2]?tt[1]!==C[tt[0]]:!(tt[0]in C))return!1}for(;++V<K;){tt=E[V];var rt=tt[0],st=C[rt],at=tt[1];if(j&&tt[2]){if(st===U&&!(rt in C))return!1}else{var ut=new Je;if(H)var ht=H(st,at,rt,C,I,ut);if(!(ht===U?_n(at,st,Wt|Ut,H,ut):ht))return!1}}return!0}function Ks(C){if(!Gt(C)||Hf(C))return!1;var I=dr(C)?sc:Zl;return I.test(kr(C))}function lf(C){return Dt(C)&&Te(C)==sn}function uf(C){return Dt(C)&&xe(C)==je}function cf(C){return Dt(C)&&vi(C.length)&&!!$t[Te(C)]}function Zs(C){return typeof C=="function"?C:C==null?Ee:typeof C=="object"?Ct(C)?Js(C[0],C[1]):Qs(C):xl(C)}function oo(C){if(!Cn(C))return hc(C);var I=[];for(var E in Nt(C))Lt.call(C,E)&&E!="constructor"&&I.push(E);return I}function ff(C){if(!Gt(C))return qf(C);var I=Cn(C),E=[];for(var H in C)H=="constructor"&&(I||!Lt.call(C,H))||E.push(H);return E}function so(C,I){return C<I}function js(C,I){var E=-1,H=Ae(C)?it(C.length):[];return Cr(C,function(V,K,j){H[++E]=I(V,K,j)}),H}function Qs(C){var I=Co(C);return I.length==1&&I[0][2]?Fa(I[0][0],I[0][1]):function(E){return E===C||io(E,C,I)}}function Js(C,I){return bo(C)&&Ra(I)?Fa(or(C),I):function(E){var H=Lo(E,C);return H===U&&H===I?ko(E,C):_n(I,H,Wt|Ut)}}function ei(C,I,E,H,V){C!==I&&to(I,function(K,j){if(V||(V=new Je),Gt(K))hf(C,I,j,E,ei,H,V);else{var tt=H?H(Io(C,j),K,j+"",C,I,V):U;tt===U&&(tt=K),Qi(C,j,tt)}},Pe)}function hf(C,I,E,H,V,K,j){var tt=Io(C,E),rt=Io(I,E),st=j.get(rt);if(st){Qi(C,E,st);return}var at=K?K(tt,rt,E+"",C,I,j):U,ut=at===U;if(ut){var ht=Ct(rt),pt=!ht&&Ir(rt),xt=!ht&&!pt&&Jr(rt);at=rt,ht||pt||xt?Ct(tt)?at=tt:Xt(tt)?at=Ie(tt):pt?(ut=!1,at=fa(rt,!0)):xt?(ut=!1,at=ha(rt,!0)):at=[]:bn(rt)||Nr(rt)?(at=tt,Nr(tt)?at=ll(tt):(!Gt(tt)||dr(tt))&&(at=za(rt))):ut=!1}ut&&(j.set(rt,at),V(at,rt,H,K,j),j.delete(rt)),Qi(C,E,at)}function ta(C,I){var E=C.length;if(E)return I+=I<0?E:0,hr(I,E)?C[I]:U}function ea(C,I,E){I.length?I=Bt(I,function(K){return Ct(K)?function(j){return Or(j,K.length===1?K[0]:K)}:K}):I=[Ee];var H=-1;I=Bt(I,ke(vt()));var V=js(C,function(K,j,tt){var rt=Bt(I,function(st){return st(K)});return{criteria:rt,index:++H,value:K}});return $u(V,function(K,j){return Sf(K,j,E)})}function df(C,I){return ra(C,I,function(E,H){return ko(C,H)})}function ra(C,I,E){for(var H=-1,V=I.length,K={};++H<V;){var j=I[H],tt=Or(C,j);E(tt,j)&&yn(K,br(j,C),tt)}return K}function pf(C){return function(I){return Or(I,C)}}function ao(C,I,E,H){var V=H?Mu:Wr,K=-1,j=I.length,tt=C;for(C===I&&(I=Ie(I)),E&&(tt=Bt(C,ke(E)));++K<j;)for(var rt=0,st=I[K],at=E?E(st):st;(rt=V(tt,at,rt,H))>-1;)tt!==C&&Xn.call(tt,rt,1),Xn.call(C,rt,1);return C}function na(C,I){for(var E=C?I.length:0,H=E-1;E--;){var V=I[E];if(E==H||V!==K){var K=V;hr(V)?Xn.call(C,V,1):fo(C,V)}}return C}function lo(C,I){return C+Yn(Ms()*(I-C+1))}function gf(C,I,E,H){for(var V=-1,K=Yt(qn((I-C)/(E||1)),0),j=it(K);K--;)j[H?K:++V]=C,C+=E;return j}function uo(C,I){var E="";if(!C||I<1||I>At)return E;do I%2&&(E+=C),I=Yn(I/2),I&&(C+=C);while(I);return E}function It(C,I){return Ao(Oa(C,I,Ee),C+"")}function mf(C){return Us(tn(C))}function vf(C,I){var E=tn(C);return fi(E,Fr(I,0,E.length))}function yn(C,I,E,H){if(!Gt(C))return C;I=br(I,C);for(var V=-1,K=I.length,j=K-1,tt=C;tt!=null&&++V<K;){var rt=or(I[V]),st=E;if(rt==="__proto__"||rt==="constructor"||rt==="prototype")return C;if(V!=j){var at=tt[rt];st=H?H(at,rt,tt):U,st===U&&(st=Gt(at)?at:hr(I[V+1])?[]:{})}mn(tt,rt,st),tt=tt[rt]}return C}var ia=Kn?function(C,I){return Kn.set(C,I),C}:Ee,xf=Vn?function(C,I){return Vn(C,"toString",{configurable:!0,enumerable:!1,value:Mo(I),writable:!0})}:Ee;function _f(C){return fi(tn(C))}function Ve(C,I,E){var H=-1,V=C.length;I<0&&(I=-I>V?0:V+I),E=E>V?V:E,E<0&&(E+=V),V=I>E?0:E-I>>>0,I>>>=0;for(var K=it(V);++H<V;)K[H]=C[H+I];return K}function yf(C,I){var E;return Cr(C,function(H,V,K){return E=I(H,V,K),!E}),!!E}function ri(C,I,E){var H=0,V=C==null?H:C.length;if(typeof I=="number"&&I===I&&V<=Tl){for(;H<V;){var K=H+V>>>1,j=C[K];j!==null&&!Me(j)&&(E?j<=I:j<I)?H=K+1:V=K}return V}return co(C,I,Ee,E)}function co(C,I,E,H){var V=0,K=C==null?0:C.length;if(K===0)return 0;I=E(I);for(var j=I!==I,tt=I===null,rt=Me(I),st=I===U;V<K;){var at=Yn((V+K)/2),ut=E(C[at]),ht=ut!==U,pt=ut===null,xt=ut===ut,St=Me(ut);if(j)var _t=H||xt;else st?_t=xt&&(H||ht):tt?_t=xt&&ht&&(H||!pt):rt?_t=xt&&ht&&!pt&&(H||!St):pt||St?_t=!1:_t=H?ut<=I:ut<I;_t?V=at+1:K=at}return Jt(K,yl)}function oa(C,I){for(var E=-1,H=C.length,V=0,K=[];++E<H;){var j=C[E],tt=I?I(j):j;if(!E||!tr(tt,rt)){var rt=tt;K[V++]=j===0?0:j}}return K}function sa(C){return typeof C=="number"?C:Me(C)?Fe:+C}function Ne(C){if(typeof C=="string")return C;if(Ct(C))return Bt(C,Ne)+"";if(Me(C))return $s?$s.call(C):"";var I=C+"";return I=="0"&&1/C==-gt?"-0":I}function wr(C,I,E){var H=-1,V=kn,K=C.length,j=!0,tt=[],rt=tt;if(E)j=!1,V=Bi;else if(K>=Y){var st=I?null:Rf(C);if(st)return Mn(st);j=!1,V=cn,rt=new Rr}else rt=I?[]:tt;t:for(;++H<K;){var at=C[H],ut=I?I(at):at;if(at=E||at!==0?at:0,j&&ut===ut){for(var ht=rt.length;ht--;)if(rt[ht]===ut)continue t;I&&rt.push(ut),tt.push(at)}else V(rt,ut,E)||(rt!==tt&&rt.push(ut),tt.push(at))}return tt}function fo(C,I){return I=br(I,C),C=La(C,I),C==null||delete C[or(qe(I))]}function aa(C,I,E,H){return yn(C,I,E(Or(C,I)),H)}function ni(C,I,E,H){for(var V=C.length,K=H?V:-1;(H?K--:++K<V)&&I(C[K],K,C););return E?Ve(C,H?0:K,H?K+1:V):Ve(C,H?K+1:0,H?V:K)}function la(C,I){var E=C;return E instanceof Et&&(E=E.value()),Ui(I,function(H,V){return V.func.apply(V.thisArg,_r([H],V.args))},E)}function ho(C,I,E){var H=C.length;if(H<2)return H?wr(C[0]):[];for(var V=-1,K=it(H);++V<H;)for(var j=C[V],tt=-1;++tt<H;)tt!=V&&(K[V]=vn(K[V]||j,C[tt],I,E));return wr(Qt(K,1),I,E)}function ua(C,I,E){for(var H=-1,V=C.length,K=I.length,j={};++H<V;){var tt=H<K?I[H]:U;E(j,C[H],tt)}return j}function po(C){return Xt(C)?C:[]}function go(C){return typeof C=="function"?C:Ee}function br(C,I){return Ct(C)?C:bo(C,I)?[C]:$a(Ot(C))}var Tf=It;function Sr(C,I,E){var H=C.length;return E=E===U?H:E,!I&&E>=H?C:Ve(C,I,E)}var ca=ac||function(C){return jt.clearTimeout(C)};function fa(C,I){if(I)return C.slice();var E=C.length,H=Fs?Fs(E):new C.constructor(E);return C.copy(H),H}function mo(C){var I=new C.constructor(C.byteLength);return new Hn(I).set(new Hn(C)),I}function Cf(C,I){var E=I?mo(C.buffer):C.buffer;return new C.constructor(E,C.byteOffset,C.byteLength)}function wf(C){var I=new C.constructor(C.source,Yo.exec(C));return I.lastIndex=C.lastIndex,I}function bf(C){return gn?Nt(gn.call(C)):{}}function ha(C,I){var E=I?mo(C.buffer):C.buffer;return new C.constructor(E,C.byteOffset,C.length)}function da(C,I){if(C!==I){var E=C!==U,H=C===null,V=C===C,K=Me(C),j=I!==U,tt=I===null,rt=I===I,st=Me(I);if(!tt&&!st&&!K&&C>I||K&&j&&rt&&!tt&&!st||H&&j&&rt||!E&&rt||!V)return 1;if(!H&&!K&&!st&&C<I||st&&E&&V&&!H&&!K||tt&&E&&V||!j&&V||!rt)return-1}return 0}function Sf(C,I,E){for(var H=-1,V=C.criteria,K=I.criteria,j=V.length,tt=E.length;++H<j;){var rt=da(V[H],K[H]);if(rt){if(H>=tt)return rt;var st=E[H];return rt*(st=="desc"?-1:1)}}return C.index-I.index}function pa(C,I,E,H){for(var V=-1,K=C.length,j=E.length,tt=-1,rt=I.length,st=Yt(K-j,0),at=it(rt+st),ut=!H;++tt<rt;)at[tt]=I[tt];for(;++V<j;)(ut||V<K)&&(at[E[V]]=C[V]);for(;st--;)at[tt++]=C[V++];return at}function ga(C,I,E,H){for(var V=-1,K=C.length,j=-1,tt=E.length,rt=-1,st=I.length,at=Yt(K-tt,0),ut=it(at+st),ht=!H;++V<at;)ut[V]=C[V];for(var pt=V;++rt<st;)ut[pt+rt]=I[rt];for(;++j<tt;)(ht||V<K)&&(ut[pt+E[j]]=C[V++]);return ut}function Ie(C,I){var E=-1,H=C.length;for(I||(I=it(H));++E<H;)I[E]=C[E];return I}function ir(C,I,E,H){var V=!E;E||(E={});for(var K=-1,j=I.length;++K<j;){var tt=I[K],rt=H?H(E[tt],C[tt],tt,E,C):U;rt===U&&(rt=C[tt]),V?ur(E,tt,rt):mn(E,tt,rt)}return E}function If(C,I){return ir(C,wo(C),I)}function Af(C,I){return ir(C,Pa(C),I)}function ii(C,I){return function(E,H){var V=Ct(E)?Ru:Yc,K=I?I():{};return V(E,C,vt(H,2),K)}}function Zr(C){return It(function(I,E){var H=-1,V=E.length,K=V>1?E[V-1]:U,j=V>2?E[2]:U;for(K=C.length>3&&typeof K=="function"?(V--,K):U,j&&we(E[0],E[1],j)&&(K=V<3?U:K,V=1),I=Nt(I);++H<V;){var tt=E[H];tt&&C(I,tt,H,K)}return I})}function ma(C,I){return function(E,H){if(E==null)return E;if(!Ae(E))return C(E,H);for(var V=E.length,K=I?V:-1,j=Nt(E);(I?K--:++K<V)&&H(j[K],K,j)!==!1;);return E}}function va(C){return function(I,E,H){for(var V=-1,K=Nt(I),j=H(I),tt=j.length;tt--;){var rt=j[C?tt:++V];if(E(K[rt],rt,K)===!1)break}return I}}function Pf(C,I,E){var H=I&kt,V=Tn(C);function K(){var j=this&&this!==jt&&this instanceof K?V:C;return j.apply(H?E:this,arguments)}return K}function xa(C){return function(I){I=Ot(I);var E=Hr(I)?Qe(I):U,H=E?E[0]:I.charAt(0),V=E?Sr(E,1).join(""):I.slice(1);return H[C]()+V}}function jr(C){return function(I){return Ui(ml(gl(I).replace(vu,"")),C,"")}}function Tn(C){return function(){var I=arguments;switch(I.length){case 0:return new C;case 1:return new C(I[0]);case 2:return new C(I[0],I[1]);case 3:return new C(I[0],I[1],I[2]);case 4:return new C(I[0],I[1],I[2],I[3]);case 5:return new C(I[0],I[1],I[2],I[3],I[4]);case 6:return new C(I[0],I[1],I[2],I[3],I[4],I[5]);case 7:return new C(I[0],I[1],I[2],I[3],I[4],I[5],I[6])}var E=Kr(C.prototype),H=C.apply(E,I);return Gt(H)?H:E}}function Ef(C,I,E){var H=Tn(C);function V(){for(var K=arguments.length,j=it(K),tt=K,rt=Qr(V);tt--;)j[tt]=arguments[tt];var st=K<3&&j[0]!==rt&&j[K-1]!==rt?[]:yr(j,rt);if(K-=st.length,K<E)return wa(C,I,oi,V.placeholder,U,j,st,U,U,E-K);var at=this&&this!==jt&&this instanceof V?H:C;return Le(at,this,j)}return V}function _a(C){return function(I,E,H){var V=Nt(I);if(!Ae(I)){var K=vt(E,3);I=Kt(I),E=function(tt){return K(V[tt],tt,V)}}var j=C(I,E,H);return j>-1?V[K?I[j]:j]:U}}function ya(C){return fr(function(I){var E=I.length,H=E,V=De.prototype.thru;for(C&&I.reverse();H--;){var K=I[H];if(typeof K!="function")throw new He(J);if(V&&!j&&ui(K)=="wrapper")var j=new De([],!0)}for(H=j?H:E;++H<E;){K=I[H];var tt=ui(K),rt=tt=="wrapper"?To(K):U;rt&&So(rt[0])&&rt[1]==(Ke|Zt|Ue|Ar)&&!rt[4].length&&rt[9]==1?j=j[ui(rt[0])].apply(j,rt[3]):j=K.length==1&&So(K)?j[tt]():j.thru(K)}return function(){var st=arguments,at=st[0];if(j&&st.length==1&&Ct(at))return j.plant(at).value();for(var ut=0,ht=E?I[ut].apply(this,st):at;++ut<E;)ht=I[ut].call(this,ht);return ht}})}function oi(C,I,E,H,V,K,j,tt,rt,st){var at=I&Ke,ut=I&kt,ht=I&Re,pt=I&(Zt|mr),xt=I&en,St=ht?U:Tn(C);function _t(){for(var Pt=arguments.length,zt=it(Pt),$e=Pt;$e--;)zt[$e]=arguments[$e];if(pt)var Se=Qr(_t),Be=Uu(zt,Se);if(H&&(zt=pa(zt,H,V,pt)),K&&(zt=ga(zt,K,j,pt)),Pt-=Be,pt&&Pt<st){var Vt=yr(zt,Se);return wa(C,I,oi,_t.placeholder,E,zt,Vt,tt,rt,st-Pt)}var er=ut?E:this,gr=ht?er[C]:C;return Pt=zt.length,tt?zt=Kf(zt,tt):xt&&Pt>1&&zt.reverse(),at&&rt<Pt&&(zt.length=rt),this&&this!==jt&&this instanceof _t&&(gr=St||Tn(gr)),gr.apply(er,zt)}return _t}function Ta(C,I){return function(E,H){return rf(E,C,I(H),{})}}function si(C,I){return function(E,H){var V;if(E===U&&H===U)return I;if(E!==U&&(V=E),H!==U){if(V===U)return H;typeof E=="string"||typeof H=="string"?(E=Ne(E),H=Ne(H)):(E=sa(E),H=sa(H)),V=C(E,H)}return V}}function vo(C){return fr(function(I){return I=Bt(I,ke(vt())),It(function(E){var H=this;return C(I,function(V){return Le(V,H,E)})})})}function ai(C,I){I=I===U?" ":Ne(I);var E=I.length;if(E<2)return E?uo(I,C):I;var H=uo(I,qn(C/Dr(I)));return Hr(I)?Sr(Qe(H),0,C).join(""):H.slice(0,C)}function zf(C,I,E,H){var V=I&kt,K=Tn(C);function j(){for(var tt=-1,rt=arguments.length,st=-1,at=H.length,ut=it(at+rt),ht=this&&this!==jt&&this instanceof j?K:C;++st<at;)ut[st]=H[st];for(;rt--;)ut[st++]=arguments[++tt];return Le(ht,V?E:this,ut)}return j}function Ca(C){return function(I,E,H){return H&&typeof H!="number"&&we(I,E,H)&&(E=H=U),I=pr(I),E===U?(E=I,I=0):E=pr(E),H=H===U?I<E?1:-1:pr(H),gf(I,E,H,C)}}function li(C){return function(I,E){return typeof I=="string"&&typeof E=="string"||(I=Ye(I),E=Ye(E)),C(I,E)}}function wa(C,I,E,H,V,K,j,tt,rt,st){var at=I&Zt,ut=at?j:U,ht=at?U:j,pt=at?K:U,xt=at?U:K;I|=at?Ue:vr,I&=~(at?vr:Ue),I&Mr||(I&=~(kt|Re));var St=[C,I,V,pt,ut,xt,ht,tt,rt,st],_t=E.apply(U,St);return So(C)&&ka(_t,St),_t.placeholder=H,Na(_t,C,I)}function xo(C){var I=qt[C];return function(E,H){if(E=Ye(E),H=H==null?0:Jt(wt(H),292),H&&Ns(E)){var V=(Ot(E)+"e").split("e"),K=I(V[0]+"e"+(+V[1]+H));return V=(Ot(K)+"e").split("e"),+(V[0]+"e"+(+V[1]-H))}return I(E)}}var Rf=qr&&1/Mn(new qr([,-0]))[1]==gt?function(C){return new qr(C)}:Uo;function ba(C){return function(I){var E=xe(I);return E==Ze?qi(I):E==je?qu(I):Bu(I,C(I))}}function cr(C,I,E,H,V,K,j,tt){var rt=I&Re;if(!rt&&typeof C!="function")throw new He(J);var st=H?H.length:0;if(st||(I&=~(Ue|vr),H=V=U),j=j===U?j:Yt(wt(j),0),tt=tt===U?tt:wt(tt),st-=V?V.length:0,I&vr){var at=H,ut=V;H=V=U}var ht=rt?U:To(C),pt=[C,I,E,H,V,at,ut,K,j,tt];if(ht&&Vf(pt,ht),C=pt[0],I=pt[1],E=pt[2],H=pt[3],V=pt[4],tt=pt[9]=pt[9]===U?rt?0:C.length:Yt(pt[9]-st,0),!tt&&I&(Zt|mr)&&(I&=~(Zt|mr)),!I||I==kt)var xt=Pf(C,I,E);else I==Zt||I==mr?xt=Ef(C,I,tt):(I==Ue||I==(kt|Ue))&&!V.length?xt=zf(C,I,E,H):xt=oi.apply(U,pt);var St=ht?ia:ka;return Na(St(xt,pt),C,I)}function Sa(C,I,E,H){return C===U||tr(C,Vr[E])&&!Lt.call(H,E)?I:C}function Ia(C,I,E,H,V,K){return Gt(C)&&Gt(I)&&(K.set(I,C),ei(C,I,U,Ia,K),K.delete(I)),C}function Ff(C){return bn(C)?U:C}function Aa(C,I,E,H,V,K){var j=E&Wt,tt=C.length,rt=I.length;if(tt!=rt&&!(j&&rt>tt))return!1;var st=K.get(C),at=K.get(I);if(st&&at)return st==I&&at==C;var ut=-1,ht=!0,pt=E&Ut?new Rr:U;for(K.set(C,I),K.set(I,C);++ut<tt;){var xt=C[ut],St=I[ut];if(H)var _t=j?H(St,xt,ut,I,C,K):H(xt,St,ut,C,I,K);if(_t!==U){if(_t)continue;ht=!1;break}if(pt){if(!Gi(I,function(Pt,zt){if(!cn(pt,zt)&&(xt===Pt||V(xt,Pt,E,H,K)))return pt.push(zt)})){ht=!1;break}}else if(!(xt===St||V(xt,St,E,H,K))){ht=!1;break}}return K.delete(C),K.delete(I),ht}function Of(C,I,E,H,V,K,j){switch(E){case Ur:if(C.byteLength!=I.byteLength||C.byteOffset!=I.byteOffset)return!1;C=C.buffer,I=I.buffer;case un:return!(C.byteLength!=I.byteLength||!K(new Hn(C),new Hn(I)));case rn:case nn:case on:return tr(+C,+I);case En:return C.name==I.name&&C.message==I.message;case sn:case an:return C==I+"";case Ze:var tt=qi;case je:var rt=H&Wt;if(tt||(tt=Mn),C.size!=I.size&&!rt)return!1;var st=j.get(C);if(st)return st==I;H|=Ut,j.set(C,I);var at=Aa(tt(C),tt(I),H,V,K,j);return j.delete(C),at;case Rn:if(gn)return gn.call(C)==gn.call(I)}return!1}function Lf(C,I,E,H,V,K){var j=E&Wt,tt=_o(C),rt=tt.length,st=_o(I),at=st.length;if(rt!=at&&!j)return!1;for(var ut=rt;ut--;){var ht=tt[ut];if(!(j?ht in I:Lt.call(I,ht)))return!1}var pt=K.get(C),xt=K.get(I);if(pt&&xt)return pt==I&&xt==C;var St=!0;K.set(C,I),K.set(I,C);for(var _t=j;++ut<rt;){ht=tt[ut];var Pt=C[ht],zt=I[ht];if(H)var $e=j?H(zt,Pt,ht,I,C,K):H(Pt,zt,ht,C,I,K);if(!($e===U?Pt===zt||V(Pt,zt,E,H,K):$e)){St=!1;break}_t||(_t=ht=="constructor")}if(St&&!_t){var Se=C.constructor,Be=I.constructor;Se!=Be&&"constructor"in C&&"constructor"in I&&!(typeof Se=="function"&&Se instanceof Se&&typeof Be=="function"&&Be instanceof Be)&&(St=!1)}return K.delete(C),K.delete(I),St}function fr(C){return Ao(Oa(C,U,Wa),C+"")}function _o(C){return qs(C,Kt,wo)}function yo(C){return qs(C,Pe,Pa)}var To=Kn?function(C){return Kn.get(C)}:Uo;function ui(C){for(var I=C.name+"",E=Yr[I],H=Lt.call(Yr,I)?E.length:0;H--;){var V=E[H],K=V.func;if(K==null||K==C)return V.name}return I}function Qr(C){var I=Lt.call(q,"placeholder")?q:C;return I.placeholder}function vt(){var C=q.iteratee||$o;return C=C===$o?Zs:C,arguments.length?C(arguments[0],arguments[1]):C}function ci(C,I){var E=C.__data__;return Wf(I)?E[typeof I=="string"?"string":"hash"]:E.map}function Co(C){for(var I=Kt(C),E=I.length;E--;){var H=I[E],V=C[H];I[E]=[H,V,Ra(V)]}return I}function Lr(C,I){var E=Du(C,I);return Ks(E)?E:U}function kf(C){var I=Lt.call(C,Er),E=C[Er];try{C[Er]=U;var H=!0}catch{}var V=Gn.call(C);return H&&(I?C[Er]=E:delete C[Er]),V}var wo=Ki?function(C){return C==null?[]:(C=Nt(C),xr(Ki(C),function(I){return Ls.call(C,I)}))}:Go,Pa=Ki?function(C){for(var I=[];C;)_r(I,wo(C)),C=Dn(C);return I}:Go,xe=Te;(Zi&&xe(new Zi(new ArrayBuffer(1)))!=Ur||hn&&xe(new hn)!=Ze||ji&&xe(ji.resolve())!=Do||qr&&xe(new qr)!=je||dn&&xe(new dn)!=ln)&&(xe=function(C){var I=Te(C),E=I==sr?C.constructor:U,H=E?kr(E):"";if(H)switch(H){case mc:return Ur;case vc:return Ze;case xc:return Do;case _c:return je;case yc:return ln}return I});function Nf(C,I,E){for(var H=-1,V=E.length;++H<V;){var K=E[H],j=K.size;switch(K.type){case"drop":C+=j;break;case"dropRight":I-=j;break;case"take":I=Jt(I,C+j);break;case"takeRight":C=Yt(C,I-j);break}}return{start:C,end:I}}function Mf(C){var I=C.match(Wl);return I?I[1].split(Hl):[]}function Ea(C,I,E){I=br(I,C);for(var H=-1,V=I.length,K=!1;++H<V;){var j=or(I[H]);if(!(K=C!=null&&E(C,j)))break;C=C[j]}return K||++H!=V?K:(V=C==null?0:C.length,!!V&&vi(V)&&hr(j,V)&&(Ct(C)||Nr(C)))}function $f(C){var I=C.length,E=new C.constructor(I);return I&&typeof C[0]=="string"&&Lt.call(C,"index")&&(E.index=C.index,E.input=C.input),E}function za(C){return typeof C.constructor=="function"&&!Cn(C)?Kr(Dn(C)):{}}function Bf(C,I,E){var H=C.constructor;switch(I){case un:return mo(C);case rn:case nn:return new H(+C);case Ur:return Cf(C,E);case Ti:case Ci:case wi:case bi:case Si:case Ii:case Ai:case Pi:case Ei:return ha(C,E);case Ze:return new H;case on:case an:return new H(C);case sn:return wf(C);case je:return new H;case Rn:return bf(C)}}function Uf(C,I){var E=I.length;if(!E)return C;var H=E-1;return I[H]=(E>1?"& ":"")+I[H],I=I.join(E>2?", ":" "),C.replace(Gl,`{
/* [wrapped with `+I+`] */
`)}function Gf(C){return Ct(C)||Nr(C)||!!(ks&&C&&C[ks])}function hr(C,I){var E=typeof C;return I=I??At,!!I&&(E=="number"||E!="symbol"&&Ql.test(C))&&C>-1&&C%1==0&&C<I}function we(C,I,E){if(!Gt(E))return!1;var H=typeof I;return(H=="number"?Ae(E)&&hr(I,E.length):H=="string"&&I in E)?tr(E[I],C):!1}function bo(C,I){if(Ct(C))return!1;var E=typeof C;return E=="number"||E=="symbol"||E=="boolean"||C==null||Me(C)?!0:Ml.test(C)||!Nl.test(C)||I!=null&&C in Nt(I)}function Wf(C){var I=typeof C;return I=="string"||I=="number"||I=="symbol"||I=="boolean"?C!=="__proto__":C===null}function So(C){var I=ui(C),E=q[I];if(typeof E!="function"||!(I in Et.prototype))return!1;if(C===E)return!0;var H=To(E);return!!H&&C===H[0]}function Hf(C){return!!Rs&&Rs in C}var Df=Bn?dr:Wo;function Cn(C){var I=C&&C.constructor,E=typeof I=="function"&&I.prototype||Vr;return C===E}function Ra(C){return C===C&&!Gt(C)}function Fa(C,I){return function(E){return E==null?!1:E[C]===I&&(I!==U||C in Nt(E))}}function Xf(C){var I=gi(C,function(H){return E.size===ct&&E.clear(),H}),E=I.cache;return I}function Vf(C,I){var E=C[1],H=I[1],V=E|H,K=V<(kt|Re|Ke),j=H==Ke&&E==Zt||H==Ke&&E==Ar&&C[7].length<=I[8]||H==(Ke|Ar)&&I[7].length<=I[8]&&E==Zt;if(!(K||j))return C;H&kt&&(C[2]=I[2],V|=E&kt?0:Mr);var tt=I[3];if(tt){var rt=C[3];C[3]=rt?pa(rt,tt,I[4]):tt,C[4]=rt?yr(C[3],mt):I[4]}return tt=I[5],tt&&(rt=C[5],C[5]=rt?ga(rt,tt,I[6]):tt,C[6]=rt?yr(C[5],mt):I[6]),tt=I[7],tt&&(C[7]=tt),H&Ke&&(C[8]=C[8]==null?I[8]:Jt(C[8],I[8])),C[9]==null&&(C[9]=I[9]),C[0]=I[0],C[1]=V,C}function qf(C){var I=[];if(C!=null)for(var E in Nt(C))I.push(E);return I}function Yf(C){return Gn.call(C)}function Oa(C,I,E){return I=Yt(I===U?C.length-1:I,0),function(){for(var H=arguments,V=-1,K=Yt(H.length-I,0),j=it(K);++V<K;)j[V]=H[I+V];V=-1;for(var tt=it(I+1);++V<I;)tt[V]=H[V];return tt[I]=E(j),Le(C,this,tt)}}function La(C,I){return I.length<2?C:Or(C,Ve(I,0,-1))}function Kf(C,I){for(var E=C.length,H=Jt(I.length,E),V=Ie(C);H--;){var K=I[H];C[H]=hr(K,E)?V[K]:U}return C}function Io(C,I){if(!(I==="constructor"&&typeof C[I]=="function")&&I!="__proto__")return C[I]}var ka=Ma(ia),wn=uc||function(C,I){return jt.setTimeout(C,I)},Ao=Ma(xf);function Na(C,I,E){var H=I+"";return Ao(C,Uf(H,Zf(Mf(H),E)))}function Ma(C){var I=0,E=0;return function(){var H=dc(),V=In-(H-E);if(E=H,V>0){if(++I>=yi)return arguments[0]}else I=0;return C.apply(U,arguments)}}function fi(C,I){var E=-1,H=C.length,V=H-1;for(I=I===U?H:I;++E<I;){var K=lo(E,V),j=C[K];C[K]=C[E],C[E]=j}return C.length=I,C}var $a=Xf(function(C){var I=[];return C.charCodeAt(0)===46&&I.push(""),C.replace($l,function(E,H,V,K){I.push(V?K.replace(Vl,"$1"):H||E)}),I});function or(C){if(typeof C=="string"||Me(C))return C;var I=C+"";return I=="0"&&1/C==-gt?"-0":I}function kr(C){if(C!=null){try{return Un.call(C)}catch{}try{return C+""}catch{}}return""}function Zf(C,I){return We(Cl,function(E){var H="_."+E[0];I&E[1]&&!kn(C,H)&&C.push(H)}),C.sort()}function Ba(C){if(C instanceof Et)return C.clone();var I=new De(C.__wrapped__,C.__chain__);return I.__actions__=Ie(C.__actions__),I.__index__=C.__index__,I.__values__=C.__values__,I}function jf(C,I,E){(E?we(C,I,E):I===U)?I=1:I=Yt(wt(I),0);var H=C==null?0:C.length;if(!H||I<1)return[];for(var V=0,K=0,j=it(qn(H/I));V<H;)j[K++]=Ve(C,V,V+=I);return j}function Qf(C){for(var I=-1,E=C==null?0:C.length,H=0,V=[];++I<E;){var K=C[I];K&&(V[H++]=K)}return V}function Jf(){var C=arguments.length;if(!C)return[];for(var I=it(C-1),E=arguments[0],H=C;H--;)I[H-1]=arguments[H];return _r(Ct(E)?Ie(E):[E],Qt(I,1))}var th=It(function(C,I){return Xt(C)?vn(C,Qt(I,1,Xt,!0)):[]}),eh=It(function(C,I){var E=qe(I);return Xt(E)&&(E=U),Xt(C)?vn(C,Qt(I,1,Xt,!0),vt(E,2)):[]}),rh=It(function(C,I){var E=qe(I);return Xt(E)&&(E=U),Xt(C)?vn(C,Qt(I,1,Xt,!0),U,E):[]});function nh(C,I,E){var H=C==null?0:C.length;return H?(I=E||I===U?1:wt(I),Ve(C,I<0?0:I,H)):[]}function ih(C,I,E){var H=C==null?0:C.length;return H?(I=E||I===U?1:wt(I),I=H-I,Ve(C,0,I<0?0:I)):[]}function oh(C,I){return C&&C.length?ni(C,vt(I,3),!0,!0):[]}function sh(C,I){return C&&C.length?ni(C,vt(I,3),!0):[]}function ah(C,I,E,H){var V=C==null?0:C.length;return V?(E&&typeof E!="number"&&we(C,I,E)&&(E=0,H=V),Qc(C,I,E,H)):[]}function Ua(C,I,E){var H=C==null?0:C.length;if(!H)return-1;var V=E==null?0:wt(E);return V<0&&(V=Yt(H+V,0)),Nn(C,vt(I,3),V)}function Ga(C,I,E){var H=C==null?0:C.length;if(!H)return-1;var V=H-1;return E!==U&&(V=wt(E),V=E<0?Yt(H+V,0):Jt(V,H-1)),Nn(C,vt(I,3),V,!0)}function Wa(C){var I=C==null?0:C.length;return I?Qt(C,1):[]}function lh(C){var I=C==null?0:C.length;return I?Qt(C,gt):[]}function uh(C,I){var E=C==null?0:C.length;return E?(I=I===U?1:wt(I),Qt(C,I)):[]}function ch(C){for(var I=-1,E=C==null?0:C.length,H={};++I<E;){var V=C[I];H[V[0]]=V[1]}return H}function Ha(C){return C&&C.length?C[0]:U}function fh(C,I,E){var H=C==null?0:C.length;if(!H)return-1;var V=E==null?0:wt(E);return V<0&&(V=Yt(H+V,0)),Wr(C,I,V)}function hh(C){var I=C==null?0:C.length;return I?Ve(C,0,-1):[]}var dh=It(function(C){var I=Bt(C,po);return I.length&&I[0]===C[0]?no(I):[]}),ph=It(function(C){var I=qe(C),E=Bt(C,po);return I===qe(E)?I=U:E.pop(),E.length&&E[0]===C[0]?no(E,vt(I,2)):[]}),gh=It(function(C){var I=qe(C),E=Bt(C,po);return I=typeof I=="function"?I:U,I&&E.pop(),E.length&&E[0]===C[0]?no(E,U,I):[]});function mh(C,I){return C==null?"":fc.call(C,I)}function qe(C){var I=C==null?0:C.length;return I?C[I-1]:U}function vh(C,I,E){var H=C==null?0:C.length;if(!H)return-1;var V=H;return E!==U&&(V=wt(E),V=V<0?Yt(H+V,0):Jt(V,H-1)),I===I?Ku(C,I,V):Nn(C,ws,V,!0)}function xh(C,I){return C&&C.length?ta(C,wt(I)):U}var _h=It(Da);function Da(C,I){return C&&C.length&&I&&I.length?ao(C,I):C}function yh(C,I,E){return C&&C.length&&I&&I.length?ao(C,I,vt(E,2)):C}function Th(C,I,E){return C&&C.length&&I&&I.length?ao(C,I,U,E):C}var Ch=fr(function(C,I){var E=C==null?0:C.length,H=Ji(C,I);return na(C,Bt(I,function(V){return hr(V,E)?+V:V}).sort(da)),H});function wh(C,I){var E=[];if(!(C&&C.length))return E;var H=-1,V=[],K=C.length;for(I=vt(I,3);++H<K;){var j=C[H];I(j,H,C)&&(E.push(j),V.push(H))}return na(C,V),E}function Po(C){return C==null?C:gc.call(C)}function bh(C,I,E){var H=C==null?0:C.length;return H?(E&&typeof E!="number"&&we(C,I,E)?(I=0,E=H):(I=I==null?0:wt(I),E=E===U?H:wt(E)),Ve(C,I,E)):[]}function Sh(C,I){return ri(C,I)}function Ih(C,I,E){return co(C,I,vt(E,2))}function Ah(C,I){var E=C==null?0:C.length;if(E){var H=ri(C,I);if(H<E&&tr(C[H],I))return H}return-1}function Ph(C,I){return ri(C,I,!0)}function Eh(C,I,E){return co(C,I,vt(E,2),!0)}function zh(C,I){var E=C==null?0:C.length;if(E){var H=ri(C,I,!0)-1;if(tr(C[H],I))return H}return-1}function Rh(C){return C&&C.length?oa(C):[]}function Fh(C,I){return C&&C.length?oa(C,vt(I,2)):[]}function Oh(C){var I=C==null?0:C.length;return I?Ve(C,1,I):[]}function Lh(C,I,E){return C&&C.length?(I=E||I===U?1:wt(I),Ve(C,0,I<0?0:I)):[]}function kh(C,I,E){var H=C==null?0:C.length;return H?(I=E||I===U?1:wt(I),I=H-I,Ve(C,I<0?0:I,H)):[]}function Nh(C,I){return C&&C.length?ni(C,vt(I,3),!1,!0):[]}function Mh(C,I){return C&&C.length?ni(C,vt(I,3)):[]}var $h=It(function(C){return wr(Qt(C,1,Xt,!0))}),Bh=It(function(C){var I=qe(C);return Xt(I)&&(I=U),wr(Qt(C,1,Xt,!0),vt(I,2))}),Uh=It(function(C){var I=qe(C);return I=typeof I=="function"?I:U,wr(Qt(C,1,Xt,!0),U,I)});function Gh(C){return C&&C.length?wr(C):[]}function Wh(C,I){return C&&C.length?wr(C,vt(I,2)):[]}function Hh(C,I){return I=typeof I=="function"?I:U,C&&C.length?wr(C,U,I):[]}function Eo(C){if(!(C&&C.length))return[];var I=0;return C=xr(C,function(E){if(Xt(E))return I=Yt(E.length,I),!0}),Xi(I,function(E){return Bt(C,Wi(E))})}function Xa(C,I){if(!(C&&C.length))return[];var E=Eo(C);return I==null?E:Bt(E,function(H){return Le(I,U,H)})}var Dh=It(function(C,I){return Xt(C)?vn(C,I):[]}),Xh=It(function(C){return ho(xr(C,Xt))}),Vh=It(function(C){var I=qe(C);return Xt(I)&&(I=U),ho(xr(C,Xt),vt(I,2))}),qh=It(function(C){var I=qe(C);return I=typeof I=="function"?I:U,ho(xr(C,Xt),U,I)}),Yh=It(Eo);function Kh(C,I){return ua(C||[],I||[],mn)}function Zh(C,I){return ua(C||[],I||[],yn)}var jh=It(function(C){var I=C.length,E=I>1?C[I-1]:U;return E=typeof E=="function"?(C.pop(),E):U,Xa(C,E)});function Va(C){var I=q(C);return I.__chain__=!0,I}function Qh(C,I){return I(C),C}function hi(C,I){return I(C)}var Jh=fr(function(C){var I=C.length,E=I?C[0]:0,H=this.__wrapped__,V=function(K){return Ji(K,C)};return I>1||this.__actions__.length||!(H instanceof Et)||!hr(E)?this.thru(V):(H=H.slice(E,+E+(I?1:0)),H.__actions__.push({func:hi,args:[V],thisArg:U}),new De(H,this.__chain__).thru(function(K){return I&&!K.length&&K.push(U),K}))});function td(){return Va(this)}function ed(){return new De(this.value(),this.__chain__)}function rd(){this.__values__===U&&(this.__values__=sl(this.value()));var C=this.__index__>=this.__values__.length,I=C?U:this.__values__[this.__index__++];return{done:C,value:I}}function nd(){return this}function id(C){for(var I,E=this;E instanceof jn;){var H=Ba(E);H.__index__=0,H.__values__=U,I?V.__wrapped__=H:I=H;var V=H;E=E.__wrapped__}return V.__wrapped__=C,I}function od(){var C=this.__wrapped__;if(C instanceof Et){var I=C;return this.__actions__.length&&(I=new Et(this)),I=I.reverse(),I.__actions__.push({func:hi,args:[Po],thisArg:U}),new De(I,this.__chain__)}return this.thru(Po)}function sd(){return la(this.__wrapped__,this.__actions__)}var ad=ii(function(C,I,E){Lt.call(C,E)?++C[E]:ur(C,E,1)});function ld(C,I,E){var H=Ct(C)?Ts:jc;return E&&we(C,I,E)&&(I=U),H(C,vt(I,3))}function ud(C,I){var E=Ct(C)?xr:Xs;return E(C,vt(I,3))}var cd=_a(Ua),fd=_a(Ga);function hd(C,I){return Qt(di(C,I),1)}function dd(C,I){return Qt(di(C,I),gt)}function pd(C,I,E){return E=E===U?1:wt(E),Qt(di(C,I),E)}function qa(C,I){var E=Ct(C)?We:Cr;return E(C,vt(I,3))}function Ya(C,I){var E=Ct(C)?Fu:Ds;return E(C,vt(I,3))}var gd=ii(function(C,I,E){Lt.call(C,E)?C[E].push(I):ur(C,E,[I])});function md(C,I,E,H){C=Ae(C)?C:tn(C),E=E&&!H?wt(E):0;var V=C.length;return E<0&&(E=Yt(V+E,0)),xi(C)?E<=V&&C.indexOf(I,E)>-1:!!V&&Wr(C,I,E)>-1}var vd=It(function(C,I,E){var H=-1,V=typeof I=="function",K=Ae(C)?it(C.length):[];return Cr(C,function(j){K[++H]=V?Le(I,j,E):xn(j,I,E)}),K}),xd=ii(function(C,I,E){ur(C,E,I)});function di(C,I){var E=Ct(C)?Bt:js;return E(C,vt(I,3))}function _d(C,I,E,H){return C==null?[]:(Ct(I)||(I=I==null?[]:[I]),E=H?U:E,Ct(E)||(E=E==null?[]:[E]),ea(C,I,E))}var yd=ii(function(C,I,E){C[E?0:1].push(I)},function(){return[[],[]]});function Td(C,I,E){var H=Ct(C)?Ui:Ss,V=arguments.length<3;return H(C,vt(I,4),E,V,Cr)}function Cd(C,I,E){var H=Ct(C)?Ou:Ss,V=arguments.length<3;return H(C,vt(I,4),E,V,Ds)}function wd(C,I){var E=Ct(C)?xr:Xs;return E(C,mi(vt(I,3)))}function bd(C){var I=Ct(C)?Us:mf;return I(C)}function Sd(C,I,E){(E?we(C,I,E):I===U)?I=1:I=wt(I);var H=Ct(C)?Vc:vf;return H(C,I)}function Id(C){var I=Ct(C)?qc:_f;return I(C)}function Ad(C){if(C==null)return 0;if(Ae(C))return xi(C)?Dr(C):C.length;var I=xe(C);return I==Ze||I==je?C.size:oo(C).length}function Pd(C,I,E){var H=Ct(C)?Gi:yf;return E&&we(C,I,E)&&(I=U),H(C,vt(I,3))}var Ed=It(function(C,I){if(C==null)return[];var E=I.length;return E>1&&we(C,I[0],I[1])?I=[]:E>2&&we(I[0],I[1],I[2])&&(I=[I[0]]),ea(C,Qt(I,1),[])}),pi=lc||function(){return jt.Date.now()};function zd(C,I){if(typeof I!="function")throw new He(J);return C=wt(C),function(){if(--C<1)return I.apply(this,arguments)}}function Ka(C,I,E){return I=E?U:I,I=C&&I==null?C.length:I,cr(C,Ke,U,U,U,U,I)}function Za(C,I){var E;if(typeof I!="function")throw new He(J);return C=wt(C),function(){return--C>0&&(E=I.apply(this,arguments)),C<=1&&(I=U),E}}var zo=It(function(C,I,E){var H=kt;if(E.length){var V=yr(E,Qr(zo));H|=Ue}return cr(C,H,I,E,V)}),ja=It(function(C,I,E){var H=kt|Re;if(E.length){var V=yr(E,Qr(ja));H|=Ue}return cr(I,H,C,E,V)});function Qa(C,I,E){I=E?U:I;var H=cr(C,Zt,U,U,U,U,U,I);return H.placeholder=Qa.placeholder,H}function Ja(C,I,E){I=E?U:I;var H=cr(C,mr,U,U,U,U,U,I);return H.placeholder=Ja.placeholder,H}function tl(C,I,E){var H,V,K,j,tt,rt,st=0,at=!1,ut=!1,ht=!0;if(typeof C!="function")throw new He(J);I=Ye(I)||0,Gt(E)&&(at=!!E.leading,ut="maxWait"in E,K=ut?Yt(Ye(E.maxWait)||0,I):K,ht="trailing"in E?!!E.trailing:ht);function pt(Vt){var er=H,gr=V;return H=V=U,st=Vt,j=C.apply(gr,er),j}function xt(Vt){return st=Vt,tt=wn(Pt,I),at?pt(Vt):j}function St(Vt){var er=Vt-rt,gr=Vt-st,_l=I-er;return ut?Jt(_l,K-gr):_l}function _t(Vt){var er=Vt-rt,gr=Vt-st;return rt===U||er>=I||er<0||ut&&gr>=K}function Pt(){var Vt=pi();if(_t(Vt))return zt(Vt);tt=wn(Pt,St(Vt))}function zt(Vt){return tt=U,ht&&H?pt(Vt):(H=V=U,j)}function $e(){tt!==U&&ca(tt),st=0,H=rt=V=tt=U}function Se(){return tt===U?j:zt(pi())}function Be(){var Vt=pi(),er=_t(Vt);if(H=arguments,V=this,rt=Vt,er){if(tt===U)return xt(rt);if(ut)return ca(tt),tt=wn(Pt,I),pt(rt)}return tt===U&&(tt=wn(Pt,I)),j}return Be.cancel=$e,Be.flush=Se,Be}var Rd=It(function(C,I){return Hs(C,1,I)}),Fd=It(function(C,I,E){return Hs(C,Ye(I)||0,E)});function Od(C){return cr(C,en)}function gi(C,I){if(typeof C!="function"||I!=null&&typeof I!="function")throw new He(J);var E=function(){var H=arguments,V=I?I.apply(this,H):H[0],K=E.cache;if(K.has(V))return K.get(V);var j=C.apply(this,H);return E.cache=K.set(V,j)||K,j};return E.cache=new(gi.Cache||lr),E}gi.Cache=lr;function mi(C){if(typeof C!="function")throw new He(J);return function(){var I=arguments;switch(I.length){case 0:return!C.call(this);case 1:return!C.call(this,I[0]);case 2:return!C.call(this,I[0],I[1]);case 3:return!C.call(this,I[0],I[1],I[2])}return!C.apply(this,I)}}function Ld(C){return Za(2,C)}var kd=Tf(function(C,I){I=I.length==1&&Ct(I[0])?Bt(I[0],ke(vt())):Bt(Qt(I,1),ke(vt()));var E=I.length;return It(function(H){for(var V=-1,K=Jt(H.length,E);++V<K;)H[V]=I[V].call(this,H[V]);return Le(C,this,H)})}),Ro=It(function(C,I){var E=yr(I,Qr(Ro));return cr(C,Ue,U,I,E)}),el=It(function(C,I){var E=yr(I,Qr(el));return cr(C,vr,U,I,E)}),Nd=fr(function(C,I){return cr(C,Ar,U,U,U,I)});function Md(C,I){if(typeof C!="function")throw new He(J);return I=I===U?I:wt(I),It(C,I)}function $d(C,I){if(typeof C!="function")throw new He(J);return I=I==null?0:Yt(wt(I),0),It(function(E){var H=E[I],V=Sr(E,0,I);return H&&_r(V,H),Le(C,this,V)})}function Bd(C,I,E){var H=!0,V=!0;if(typeof C!="function")throw new He(J);return Gt(E)&&(H="leading"in E?!!E.leading:H,V="trailing"in E?!!E.trailing:V),tl(C,I,{leading:H,maxWait:I,trailing:V})}function Ud(C){return Ka(C,1)}function Gd(C,I){return Ro(go(I),C)}function Wd(){if(!arguments.length)return[];var C=arguments[0];return Ct(C)?C:[C]}function Hd(C){return Xe(C,bt)}function Dd(C,I){return I=typeof I=="function"?I:U,Xe(C,bt,I)}function Xd(C){return Xe(C,yt|bt)}function Vd(C,I){return I=typeof I=="function"?I:U,Xe(C,yt|bt,I)}function qd(C,I){return I==null||Ws(C,I,Kt(I))}function tr(C,I){return C===I||C!==C&&I!==I}var Yd=li(ro),Kd=li(function(C,I){return C>=I}),Nr=Ys(function(){return arguments}())?Ys:function(C){return Dt(C)&&Lt.call(C,"callee")&&!Ls.call(C,"callee")},Ct=it.isArray,Zd=gs?ke(gs):nf;function Ae(C){return C!=null&&vi(C.length)&&!dr(C)}function Xt(C){return Dt(C)&&Ae(C)}function jd(C){return C===!0||C===!1||Dt(C)&&Te(C)==rn}var Ir=cc||Wo,Qd=ms?ke(ms):of;function Jd(C){return Dt(C)&&C.nodeType===1&&!bn(C)}function tp(C){if(C==null)return!0;if(Ae(C)&&(Ct(C)||typeof C=="string"||typeof C.splice=="function"||Ir(C)||Jr(C)||Nr(C)))return!C.length;var I=xe(C);if(I==Ze||I==je)return!C.size;if(Cn(C))return!oo(C).length;for(var E in C)if(Lt.call(C,E))return!1;return!0}function ep(C,I){return _n(C,I)}function rp(C,I,E){E=typeof E=="function"?E:U;var H=E?E(C,I):U;return H===U?_n(C,I,U,E):!!H}function Fo(C){if(!Dt(C))return!1;var I=Te(C);return I==En||I==bl||typeof C.message=="string"&&typeof C.name=="string"&&!bn(C)}function np(C){return typeof C=="number"&&Ns(C)}function dr(C){if(!Gt(C))return!1;var I=Te(C);return I==zn||I==Ho||I==wl||I==Il}function rl(C){return typeof C=="number"&&C==wt(C)}function vi(C){return typeof C=="number"&&C>-1&&C%1==0&&C<=At}function Gt(C){var I=typeof C;return C!=null&&(I=="object"||I=="function")}function Dt(C){return C!=null&&typeof C=="object"}var nl=vs?ke(vs):af;function ip(C,I){return C===I||io(C,I,Co(I))}function op(C,I,E){return E=typeof E=="function"?E:U,io(C,I,Co(I),E)}function sp(C){return il(C)&&C!=+C}function ap(C){if(Df(C))throw new Tt(Z);return Ks(C)}function lp(C){return C===null}function up(C){return C==null}function il(C){return typeof C=="number"||Dt(C)&&Te(C)==on}function bn(C){if(!Dt(C)||Te(C)!=sr)return!1;var I=Dn(C);if(I===null)return!0;var E=Lt.call(I,"constructor")&&I.constructor;return typeof E=="function"&&E instanceof E&&Un.call(E)==ic}var Oo=xs?ke(xs):lf;function cp(C){return rl(C)&&C>=-At&&C<=At}var ol=_s?ke(_s):uf;function xi(C){return typeof C=="string"||!Ct(C)&&Dt(C)&&Te(C)==an}function Me(C){return typeof C=="symbol"||Dt(C)&&Te(C)==Rn}var Jr=ys?ke(ys):cf;function fp(C){return C===U}function hp(C){return Dt(C)&&xe(C)==ln}function dp(C){return Dt(C)&&Te(C)==Pl}var pp=li(so),gp=li(function(C,I){return C<=I});function sl(C){if(!C)return[];if(Ae(C))return xi(C)?Qe(C):Ie(C);if(fn&&C[fn])return Vu(C[fn]());var I=xe(C),E=I==Ze?qi:I==je?Mn:tn;return E(C)}function pr(C){if(!C)return C===0?C:0;if(C=Ye(C),C===gt||C===-gt){var I=C<0?-1:1;return I*Ht}return C===C?C:0}function wt(C){var I=pr(C),E=I%1;return I===I?E?I-E:I:0}function al(C){return C?Fr(wt(C),0,Oe):0}function Ye(C){if(typeof C=="number")return C;if(Me(C))return Fe;if(Gt(C)){var I=typeof C.valueOf=="function"?C.valueOf():C;C=Gt(I)?I+"":I}if(typeof C!="string")return C===0?C:+C;C=Is(C);var E=Kl.test(C);return E||jl.test(C)?Eu(C.slice(2),E?2:8):Yl.test(C)?Fe:+C}function ll(C){return ir(C,Pe(C))}function mp(C){return C?Fr(wt(C),-At,At):C===0?C:0}function Ot(C){return C==null?"":Ne(C)}var vp=Zr(function(C,I){if(Cn(I)||Ae(I)){ir(I,Kt(I),C);return}for(var E in I)Lt.call(I,E)&&mn(C,E,I[E])}),ul=Zr(function(C,I){ir(I,Pe(I),C)}),_i=Zr(function(C,I,E,H){ir(I,Pe(I),C,H)}),xp=Zr(function(C,I,E,H){ir(I,Kt(I),C,H)}),_p=fr(Ji);function yp(C,I){var E=Kr(C);return I==null?E:Gs(E,I)}var Tp=It(function(C,I){C=Nt(C);var E=-1,H=I.length,V=H>2?I[2]:U;for(V&&we(I[0],I[1],V)&&(H=1);++E<H;)for(var K=I[E],j=Pe(K),tt=-1,rt=j.length;++tt<rt;){var st=j[tt],at=C[st];(at===U||tr(at,Vr[st])&&!Lt.call(C,st))&&(C[st]=K[st])}return C}),Cp=It(function(C){return C.push(U,Ia),Le(cl,U,C)});function wp(C,I){return Cs(C,vt(I,3),nr)}function bp(C,I){return Cs(C,vt(I,3),eo)}function Sp(C,I){return C==null?C:to(C,vt(I,3),Pe)}function Ip(C,I){return C==null?C:Vs(C,vt(I,3),Pe)}function Ap(C,I){return C&&nr(C,vt(I,3))}function Pp(C,I){return C&&eo(C,vt(I,3))}function Ep(C){return C==null?[]:ti(C,Kt(C))}function zp(C){return C==null?[]:ti(C,Pe(C))}function Lo(C,I,E){var H=C==null?U:Or(C,I);return H===U?E:H}function Rp(C,I){return C!=null&&Ea(C,I,Jc)}function ko(C,I){return C!=null&&Ea(C,I,tf)}var Fp=Ta(function(C,I,E){I!=null&&typeof I.toString!="function"&&(I=Gn.call(I)),C[I]=E},Mo(Ee)),Op=Ta(function(C,I,E){I!=null&&typeof I.toString!="function"&&(I=Gn.call(I)),Lt.call(C,I)?C[I].push(E):C[I]=[E]},vt),Lp=It(xn);function Kt(C){return Ae(C)?Bs(C):oo(C)}function Pe(C){return Ae(C)?Bs(C,!0):ff(C)}function kp(C,I){var E={};return I=vt(I,3),nr(C,function(H,V,K){ur(E,I(H,V,K),H)}),E}function Np(C,I){var E={};return I=vt(I,3),nr(C,function(H,V,K){ur(E,V,I(H,V,K))}),E}var Mp=Zr(function(C,I,E){ei(C,I,E)}),cl=Zr(function(C,I,E,H){ei(C,I,E,H)}),$p=fr(function(C,I){var E={};if(C==null)return E;var H=!1;I=Bt(I,function(K){return K=br(K,C),H||(H=K.length>1),K}),ir(C,yo(C),E),H&&(E=Xe(E,yt|Rt|bt,Ff));for(var V=I.length;V--;)fo(E,I[V]);return E});function Bp(C,I){return fl(C,mi(vt(I)))}var Up=fr(function(C,I){return C==null?{}:df(C,I)});function fl(C,I){if(C==null)return{};var E=Bt(yo(C),function(H){return[H]});return I=vt(I),ra(C,E,function(H,V){return I(H,V[0])})}function Gp(C,I,E){I=br(I,C);var H=-1,V=I.length;for(V||(V=1,C=U);++H<V;){var K=C==null?U:C[or(I[H])];K===U&&(H=V,K=E),C=dr(K)?K.call(C):K}return C}function Wp(C,I,E){return C==null?C:yn(C,I,E)}function Hp(C,I,E,H){return H=typeof H=="function"?H:U,C==null?C:yn(C,I,E,H)}var hl=ba(Kt),dl=ba(Pe);function Dp(C,I,E){var H=Ct(C),V=H||Ir(C)||Jr(C);if(I=vt(I,4),E==null){var K=C&&C.constructor;V?E=H?new K:[]:Gt(C)?E=dr(K)?Kr(Dn(C)):{}:E={}}return(V?We:nr)(C,function(j,tt,rt){return I(E,j,tt,rt)}),E}function Xp(C,I){return C==null?!0:fo(C,I)}function Vp(C,I,E){return C==null?C:aa(C,I,go(E))}function qp(C,I,E,H){return H=typeof H=="function"?H:U,C==null?C:aa(C,I,go(E),H)}function tn(C){return C==null?[]:Vi(C,Kt(C))}function Yp(C){return C==null?[]:Vi(C,Pe(C))}function Kp(C,I,E){return E===U&&(E=I,I=U),E!==U&&(E=Ye(E),E=E===E?E:0),I!==U&&(I=Ye(I),I=I===I?I:0),Fr(Ye(C),I,E)}function Zp(C,I,E){return I=pr(I),E===U?(E=I,I=0):E=pr(E),C=Ye(C),ef(C,I,E)}function jp(C,I,E){if(E&&typeof E!="boolean"&&we(C,I,E)&&(I=E=U),E===U&&(typeof I=="boolean"?(E=I,I=U):typeof C=="boolean"&&(E=C,C=U)),C===U&&I===U?(C=0,I=1):(C=pr(C),I===U?(I=C,C=0):I=pr(I)),C>I){var H=C;C=I,I=H}if(E||C%1||I%1){var V=Ms();return Jt(C+V*(I-C+Pu("1e-"+((V+"").length-1))),I)}return lo(C,I)}var Qp=jr(function(C,I,E){return I=I.toLowerCase(),C+(E?pl(I):I)});function pl(C){return No(Ot(C).toLowerCase())}function gl(C){return C=Ot(C),C&&C.replace(Jl,Gu).replace(xu,"")}function Jp(C,I,E){C=Ot(C),I=Ne(I);var H=C.length;E=E===U?H:Fr(wt(E),0,H);var V=E;return E-=I.length,E>=0&&C.slice(E,V)==I}function tg(C){return C=Ot(C),C&&Ol.test(C)?C.replace(Vo,Wu):C}function eg(C){return C=Ot(C),C&&Bl.test(C)?C.replace(zi,"\\$&"):C}var rg=jr(function(C,I,E){return C+(E?"-":"")+I.toLowerCase()}),ng=jr(function(C,I,E){return C+(E?" ":"")+I.toLowerCase()}),ig=xa("toLowerCase");function og(C,I,E){C=Ot(C),I=wt(I);var H=I?Dr(C):0;if(!I||H>=I)return C;var V=(I-H)/2;return ai(Yn(V),E)+C+ai(qn(V),E)}function sg(C,I,E){C=Ot(C),I=wt(I);var H=I?Dr(C):0;return I&&H<I?C+ai(I-H,E):C}function ag(C,I,E){C=Ot(C),I=wt(I);var H=I?Dr(C):0;return I&&H<I?ai(I-H,E)+C:C}function lg(C,I,E){return E||I==null?I=0:I&&(I=+I),pc(Ot(C).replace(Ri,""),I||0)}function ug(C,I,E){return(E?we(C,I,E):I===U)?I=1:I=wt(I),uo(Ot(C),I)}function cg(){var C=arguments,I=Ot(C[0]);return C.length<3?I:I.replace(C[1],C[2])}var fg=jr(function(C,I,E){return C+(E?"_":"")+I.toLowerCase()});function hg(C,I,E){return E&&typeof E!="number"&&we(C,I,E)&&(I=E=U),E=E===U?Oe:E>>>0,E?(C=Ot(C),C&&(typeof I=="string"||I!=null&&!Oo(I))&&(I=Ne(I),!I&&Hr(C))?Sr(Qe(C),0,E):C.split(I,E)):[]}var dg=jr(function(C,I,E){return C+(E?" ":"")+No(I)});function pg(C,I,E){return C=Ot(C),E=E==null?0:Fr(wt(E),0,C.length),I=Ne(I),C.slice(E,E+I.length)==I}function gg(C,I,E){var H=q.templateSettings;E&&we(C,I,E)&&(I=U),C=Ot(C),I=_i({},I,H,Sa);var V=_i({},I.imports,H.imports,Sa),K=Kt(V),j=Vi(V,K),tt,rt,st=0,at=I.interpolate||Fn,ut="__p += '",ht=Yi((I.escape||Fn).source+"|"+at.source+"|"+(at===qo?ql:Fn).source+"|"+(I.evaluate||Fn).source+"|$","g"),pt="//# sourceURL="+(Lt.call(I,"sourceURL")?(I.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++wu+"]")+`
`;C.replace(ht,function(_t,Pt,zt,$e,Se,Be){return zt||(zt=$e),ut+=C.slice(st,Be).replace(tu,Hu),Pt&&(tt=!0,ut+=`' +
__e(`+Pt+`) +
'`),Se&&(rt=!0,ut+=`';
`+Se+`;
__p += '`),zt&&(ut+=`' +
((__t = (`+zt+`)) == null ? '' : __t) +
'`),st=Be+_t.length,_t}),ut+=`';
`;var xt=Lt.call(I,"variable")&&I.variable;if(!xt)ut=`with (obj) {
`+ut+`
}
`;else if(Xl.test(xt))throw new Tt(nt);ut=(rt?ut.replace(El,""):ut).replace(zl,"$1").replace(Rl,"$1;"),ut="function("+(xt||"obj")+`) {
`+(xt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(tt?", __e = _.escape":"")+(rt?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ut+`return __p
}`;var St=vl(function(){return Ft(K,pt+"return "+ut).apply(U,j)});if(St.source=ut,Fo(St))throw St;return St}function mg(C){return Ot(C).toLowerCase()}function vg(C){return Ot(C).toUpperCase()}function xg(C,I,E){if(C=Ot(C),C&&(E||I===U))return Is(C);if(!C||!(I=Ne(I)))return C;var H=Qe(C),V=Qe(I),K=As(H,V),j=Ps(H,V)+1;return Sr(H,K,j).join("")}function _g(C,I,E){if(C=Ot(C),C&&(E||I===U))return C.slice(0,zs(C)+1);if(!C||!(I=Ne(I)))return C;var H=Qe(C),V=Ps(H,Qe(I))+1;return Sr(H,0,V).join("")}function yg(C,I,E){if(C=Ot(C),C&&(E||I===U))return C.replace(Ri,"");if(!C||!(I=Ne(I)))return C;var H=Qe(C),V=As(H,Qe(I));return Sr(H,V).join("")}function Tg(C,I){var E=Sn,H=$r;if(Gt(I)){var V="separator"in I?I.separator:V;E="length"in I?wt(I.length):E,H="omission"in I?Ne(I.omission):H}C=Ot(C);var K=C.length;if(Hr(C)){var j=Qe(C);K=j.length}if(E>=K)return C;var tt=E-Dr(H);if(tt<1)return H;var rt=j?Sr(j,0,tt).join(""):C.slice(0,tt);if(V===U)return rt+H;if(j&&(tt+=rt.length-tt),Oo(V)){if(C.slice(tt).search(V)){var st,at=rt;for(V.global||(V=Yi(V.source,Ot(Yo.exec(V))+"g")),V.lastIndex=0;st=V.exec(at);)var ut=st.index;rt=rt.slice(0,ut===U?tt:ut)}}else if(C.indexOf(Ne(V),tt)!=tt){var ht=rt.lastIndexOf(V);ht>-1&&(rt=rt.slice(0,ht))}return rt+H}function Cg(C){return C=Ot(C),C&&Fl.test(C)?C.replace(Xo,Zu):C}var wg=jr(function(C,I,E){return C+(E?" ":"")+I.toUpperCase()}),No=xa("toUpperCase");function ml(C,I,E){return C=Ot(C),I=E?U:I,I===U?Xu(C)?Ju(C):Nu(C):C.match(I)||[]}var vl=It(function(C,I){try{return Le(C,U,I)}catch(E){return Fo(E)?E:new Tt(E)}}),bg=fr(function(C,I){return We(I,function(E){E=or(E),ur(C,E,zo(C[E],C))}),C});function Sg(C){var I=C==null?0:C.length,E=vt();return C=I?Bt(C,function(H){if(typeof H[1]!="function")throw new He(J);return[E(H[0]),H[1]]}):[],It(function(H){for(var V=-1;++V<I;){var K=C[V];if(Le(K[0],this,H))return Le(K[1],this,H)}})}function Ig(C){return Zc(Xe(C,yt))}function Mo(C){return function(){return C}}function Ag(C,I){return C==null||C!==C?I:C}var Pg=ya(),Eg=ya(!0);function Ee(C){return C}function $o(C){return Zs(typeof C=="function"?C:Xe(C,yt))}function zg(C){return Qs(Xe(C,yt))}function Rg(C,I){return Js(C,Xe(I,yt))}var Fg=It(function(C,I){return function(E){return xn(E,C,I)}}),Og=It(function(C,I){return function(E){return xn(C,E,I)}});function Bo(C,I,E){var H=Kt(I),V=ti(I,H);E==null&&!(Gt(I)&&(V.length||!H.length))&&(E=I,I=C,C=this,V=ti(I,Kt(I)));var K=!(Gt(E)&&"chain"in E)||!!E.chain,j=dr(C);return We(V,function(tt){var rt=I[tt];C[tt]=rt,j&&(C.prototype[tt]=function(){var st=this.__chain__;if(K||st){var at=C(this.__wrapped__),ut=at.__actions__=Ie(this.__actions__);return ut.push({func:rt,args:arguments,thisArg:C}),at.__chain__=st,at}return rt.apply(C,_r([this.value()],arguments))})}),C}function Lg(){return jt._===this&&(jt._=oc),this}function Uo(){}function kg(C){return C=wt(C),It(function(I){return ta(I,C)})}var Ng=vo(Bt),Mg=vo(Ts),$g=vo(Gi);function xl(C){return bo(C)?Wi(or(C)):pf(C)}function Bg(C){return function(I){return C==null?U:Or(C,I)}}var Ug=Ca(),Gg=Ca(!0);function Go(){return[]}function Wo(){return!1}function Wg(){return{}}function Hg(){return""}function Dg(){return!0}function Xg(C,I){if(C=wt(C),C<1||C>At)return[];var E=Oe,H=Jt(C,Oe);I=vt(I),C-=Oe;for(var V=Xi(H,I);++E<C;)I(E);return V}function Vg(C){return Ct(C)?Bt(C,or):Me(C)?[C]:Ie($a(Ot(C)))}function qg(C){var I=++nc;return Ot(C)+I}var Yg=si(function(C,I){return C+I},0),Kg=xo("ceil"),Zg=si(function(C,I){return C/I},1),jg=xo("floor");function Qg(C){return C&&C.length?Jn(C,Ee,ro):U}function Jg(C,I){return C&&C.length?Jn(C,vt(I,2),ro):U}function t0(C){return bs(C,Ee)}function e0(C,I){return bs(C,vt(I,2))}function r0(C){return C&&C.length?Jn(C,Ee,so):U}function n0(C,I){return C&&C.length?Jn(C,vt(I,2),so):U}var i0=si(function(C,I){return C*I},1),o0=xo("round"),s0=si(function(C,I){return C-I},0);function a0(C){return C&&C.length?Di(C,Ee):0}function l0(C,I){return C&&C.length?Di(C,vt(I,2)):0}return q.after=zd,q.ary=Ka,q.assign=vp,q.assignIn=ul,q.assignInWith=_i,q.assignWith=xp,q.at=_p,q.before=Za,q.bind=zo,q.bindAll=bg,q.bindKey=ja,q.castArray=Wd,q.chain=Va,q.chunk=jf,q.compact=Qf,q.concat=Jf,q.cond=Sg,q.conforms=Ig,q.constant=Mo,q.countBy=ad,q.create=yp,q.curry=Qa,q.curryRight=Ja,q.debounce=tl,q.defaults=Tp,q.defaultsDeep=Cp,q.defer=Rd,q.delay=Fd,q.difference=th,q.differenceBy=eh,q.differenceWith=rh,q.drop=nh,q.dropRight=ih,q.dropRightWhile=oh,q.dropWhile=sh,q.fill=ah,q.filter=ud,q.flatMap=hd,q.flatMapDeep=dd,q.flatMapDepth=pd,q.flatten=Wa,q.flattenDeep=lh,q.flattenDepth=uh,q.flip=Od,q.flow=Pg,q.flowRight=Eg,q.fromPairs=ch,q.functions=Ep,q.functionsIn=zp,q.groupBy=gd,q.initial=hh,q.intersection=dh,q.intersectionBy=ph,q.intersectionWith=gh,q.invert=Fp,q.invertBy=Op,q.invokeMap=vd,q.iteratee=$o,q.keyBy=xd,q.keys=Kt,q.keysIn=Pe,q.map=di,q.mapKeys=kp,q.mapValues=Np,q.matches=zg,q.matchesProperty=Rg,q.memoize=gi,q.merge=Mp,q.mergeWith=cl,q.method=Fg,q.methodOf=Og,q.mixin=Bo,q.negate=mi,q.nthArg=kg,q.omit=$p,q.omitBy=Bp,q.once=Ld,q.orderBy=_d,q.over=Ng,q.overArgs=kd,q.overEvery=Mg,q.overSome=$g,q.partial=Ro,q.partialRight=el,q.partition=yd,q.pick=Up,q.pickBy=fl,q.property=xl,q.propertyOf=Bg,q.pull=_h,q.pullAll=Da,q.pullAllBy=yh,q.pullAllWith=Th,q.pullAt=Ch,q.range=Ug,q.rangeRight=Gg,q.rearg=Nd,q.reject=wd,q.remove=wh,q.rest=Md,q.reverse=Po,q.sampleSize=Sd,q.set=Wp,q.setWith=Hp,q.shuffle=Id,q.slice=bh,q.sortBy=Ed,q.sortedUniq=Rh,q.sortedUniqBy=Fh,q.split=hg,q.spread=$d,q.tail=Oh,q.take=Lh,q.takeRight=kh,q.takeRightWhile=Nh,q.takeWhile=Mh,q.tap=Qh,q.throttle=Bd,q.thru=hi,q.toArray=sl,q.toPairs=hl,q.toPairsIn=dl,q.toPath=Vg,q.toPlainObject=ll,q.transform=Dp,q.unary=Ud,q.union=$h,q.unionBy=Bh,q.unionWith=Uh,q.uniq=Gh,q.uniqBy=Wh,q.uniqWith=Hh,q.unset=Xp,q.unzip=Eo,q.unzipWith=Xa,q.update=Vp,q.updateWith=qp,q.values=tn,q.valuesIn=Yp,q.without=Dh,q.words=ml,q.wrap=Gd,q.xor=Xh,q.xorBy=Vh,q.xorWith=qh,q.zip=Yh,q.zipObject=Kh,q.zipObjectDeep=Zh,q.zipWith=jh,q.entries=hl,q.entriesIn=dl,q.extend=ul,q.extendWith=_i,Bo(q,q),q.add=Yg,q.attempt=vl,q.camelCase=Qp,q.capitalize=pl,q.ceil=Kg,q.clamp=Kp,q.clone=Hd,q.cloneDeep=Xd,q.cloneDeepWith=Vd,q.cloneWith=Dd,q.conformsTo=qd,q.deburr=gl,q.defaultTo=Ag,q.divide=Zg,q.endsWith=Jp,q.eq=tr,q.escape=tg,q.escapeRegExp=eg,q.every=ld,q.find=cd,q.findIndex=Ua,q.findKey=wp,q.findLast=fd,q.findLastIndex=Ga,q.findLastKey=bp,q.floor=jg,q.forEach=qa,q.forEachRight=Ya,q.forIn=Sp,q.forInRight=Ip,q.forOwn=Ap,q.forOwnRight=Pp,q.get=Lo,q.gt=Yd,q.gte=Kd,q.has=Rp,q.hasIn=ko,q.head=Ha,q.identity=Ee,q.includes=md,q.indexOf=fh,q.inRange=Zp,q.invoke=Lp,q.isArguments=Nr,q.isArray=Ct,q.isArrayBuffer=Zd,q.isArrayLike=Ae,q.isArrayLikeObject=Xt,q.isBoolean=jd,q.isBuffer=Ir,q.isDate=Qd,q.isElement=Jd,q.isEmpty=tp,q.isEqual=ep,q.isEqualWith=rp,q.isError=Fo,q.isFinite=np,q.isFunction=dr,q.isInteger=rl,q.isLength=vi,q.isMap=nl,q.isMatch=ip,q.isMatchWith=op,q.isNaN=sp,q.isNative=ap,q.isNil=up,q.isNull=lp,q.isNumber=il,q.isObject=Gt,q.isObjectLike=Dt,q.isPlainObject=bn,q.isRegExp=Oo,q.isSafeInteger=cp,q.isSet=ol,q.isString=xi,q.isSymbol=Me,q.isTypedArray=Jr,q.isUndefined=fp,q.isWeakMap=hp,q.isWeakSet=dp,q.join=mh,q.kebabCase=rg,q.last=qe,q.lastIndexOf=vh,q.lowerCase=ng,q.lowerFirst=ig,q.lt=pp,q.lte=gp,q.max=Qg,q.maxBy=Jg,q.mean=t0,q.meanBy=e0,q.min=r0,q.minBy=n0,q.stubArray=Go,q.stubFalse=Wo,q.stubObject=Wg,q.stubString=Hg,q.stubTrue=Dg,q.multiply=i0,q.nth=xh,q.noConflict=Lg,q.noop=Uo,q.now=pi,q.pad=og,q.padEnd=sg,q.padStart=ag,q.parseInt=lg,q.random=jp,q.reduce=Td,q.reduceRight=Cd,q.repeat=ug,q.replace=cg,q.result=Gp,q.round=o0,q.runInContext=et,q.sample=bd,q.size=Ad,q.snakeCase=fg,q.some=Pd,q.sortedIndex=Sh,q.sortedIndexBy=Ih,q.sortedIndexOf=Ah,q.sortedLastIndex=Ph,q.sortedLastIndexBy=Eh,q.sortedLastIndexOf=zh,q.startCase=dg,q.startsWith=pg,q.subtract=s0,q.sum=a0,q.sumBy=l0,q.template=gg,q.times=Xg,q.toFinite=pr,q.toInteger=wt,q.toLength=al,q.toLower=mg,q.toNumber=Ye,q.toSafeInteger=mp,q.toString=Ot,q.toUpper=vg,q.trim=xg,q.trimEnd=_g,q.trimStart=yg,q.truncate=Tg,q.unescape=Cg,q.uniqueId=qg,q.upperCase=wg,q.upperFirst=No,q.each=qa,q.eachRight=Ya,q.first=Ha,Bo(q,function(){var C={};return nr(q,function(I,E){Lt.call(q.prototype,E)||(C[E]=I)}),C}(),{chain:!1}),q.VERSION=X,We(["bind","bindKey","curry","curryRight","partial","partialRight"],function(C){q[C].placeholder=q}),We(["drop","take"],function(C,I){Et.prototype[C]=function(E){E=E===U?1:Yt(wt(E),0);var H=this.__filtered__&&!I?new Et(this):this.clone();return H.__filtered__?H.__takeCount__=Jt(E,H.__takeCount__):H.__views__.push({size:Jt(E,Oe),type:C+(H.__dir__<0?"Right":"")}),H},Et.prototype[C+"Right"]=function(E){return this.reverse()[C](E).reverse()}}),We(["filter","map","takeWhile"],function(C,I){var E=I+1,H=E==_e||E==An;Et.prototype[C]=function(V){var K=this.clone();return K.__iteratees__.push({iteratee:vt(V,3),type:E}),K.__filtered__=K.__filtered__||H,K}}),We(["head","last"],function(C,I){var E="take"+(I?"Right":"");Et.prototype[C]=function(){return this[E](1).value()[0]}}),We(["initial","tail"],function(C,I){var E="drop"+(I?"":"Right");Et.prototype[C]=function(){return this.__filtered__?new Et(this):this[E](1)}}),Et.prototype.compact=function(){return this.filter(Ee)},Et.prototype.find=function(C){return this.filter(C).head()},Et.prototype.findLast=function(C){return this.reverse().find(C)},Et.prototype.invokeMap=It(function(C,I){return typeof C=="function"?new Et(this):this.map(function(E){return xn(E,C,I)})}),Et.prototype.reject=function(C){return this.filter(mi(vt(C)))},Et.prototype.slice=function(C,I){C=wt(C);var E=this;return E.__filtered__&&(C>0||I<0)?new Et(E):(C<0?E=E.takeRight(-C):C&&(E=E.drop(C)),I!==U&&(I=wt(I),E=I<0?E.dropRight(-I):E.take(I-C)),E)},Et.prototype.takeRightWhile=function(C){return this.reverse().takeWhile(C).reverse()},Et.prototype.toArray=function(){return this.take(Oe)},nr(Et.prototype,function(C,I){var E=/^(?:filter|find|map|reject)|While$/.test(I),H=/^(?:head|last)$/.test(I),V=q[H?"take"+(I=="last"?"Right":""):I],K=H||/^find/.test(I);V&&(q.prototype[I]=function(){var j=this.__wrapped__,tt=H?[1]:arguments,rt=j instanceof Et,st=tt[0],at=rt||Ct(j),ut=function(Pt){var zt=V.apply(q,_r([Pt],tt));return H&&ht?zt[0]:zt};at&&E&&typeof st=="function"&&st.length!=1&&(rt=at=!1);var ht=this.__chain__,pt=!!this.__actions__.length,xt=K&&!ht,St=rt&&!pt;if(!K&&at){j=St?j:new Et(this);var _t=C.apply(j,tt);return _t.__actions__.push({func:hi,args:[ut],thisArg:U}),new De(_t,ht)}return xt&&St?C.apply(this,tt):(_t=this.thru(ut),xt?H?_t.value()[0]:_t.value():_t)})}),We(["pop","push","shift","sort","splice","unshift"],function(C){var I=$n[C],E=/^(?:push|sort|unshift)$/.test(C)?"tap":"thru",H=/^(?:pop|shift)$/.test(C);q.prototype[C]=function(){var V=arguments;if(H&&!this.__chain__){var K=this.value();return I.apply(Ct(K)?K:[],V)}return this[E](function(j){return I.apply(Ct(j)?j:[],V)})}}),nr(Et.prototype,function(C,I){var E=q[I];if(E){var H=E.name+"";Lt.call(Yr,H)||(Yr[H]=[]),Yr[H].push({name:I,func:E})}}),Yr[oi(U,Re).name]=[{name:"wrapper",func:U}],Et.prototype.clone=Tc,Et.prototype.reverse=Cc,Et.prototype.value=wc,q.prototype.at=Jh,q.prototype.chain=td,q.prototype.commit=ed,q.prototype.next=rd,q.prototype.plant=id,q.prototype.reverse=od,q.prototype.toJSON=q.prototype.valueOf=q.prototype.value=sd,q.prototype.first=q.prototype.head,fn&&(q.prototype[fn]=nd),q},Xr=tc();Pr?((Pr.exports=Xr)._=Xr,Mi._=Xr):jt._=Xr}).call(commonjsGlobal)}(lodash,lodash.exports);var lodashExports=lodash.exports;const skillDialogues=[{text:"雜魚！雜魚！",reuse:1,skillId:[1,3]},{text:"真是個雜魚大叔呢！",skillId:[1]},{text:"啊哈，沒用處的雜魚雞雞。",priority:5,skillId:[1],unitId:[2]},{text:"不會吧不會吧，都三十歲了大叔還是處男嗎？",priority:5,skillId:[1],unitId:[3],label:"test_label"},{text:"不會吧不會吧，大叔對小O生也能發情嗎？",skillId:[2]},{text:"這麼喜歡胸部，大叔是小寶寶嗎？",priority:5,skillId:[2],unitId:[3]},{text:"這樣就勃起了？好噁心。",priority:5,skillId:[2],unitId:[2]},{text:"跟大叔呼吸同一個空間的空氣真是噁心。",reuse:1,skillId:[3]},{text:"大叔知道拉開這個警報器會有什麼後果嗎？",skillId:[4],label:"test2"},{text:"在這種情況下還能勃起，大叔還是進監獄吧。",priority:5,skillId:[4],unitId:[2]},{text:"大叔，人生完蛋的感覺怎麼樣呢。",priority:5,skillId:[4],unitId:[3]},{text:`啊哈，只是說說事實就生氣了嗎？
草莓草莓玻璃心。`,priority:4,skillId:[1],enemyHp:25},{text:`咦？真的是處男？那個...怎麼說...
加油。`,priority:3,preTextLabel:["test_label"]}],enemySkillDialogues=[{text:"不、不要過來啊！",priority:5,totalHp:-1},{text:"欸？等等、等等啦！",priority:3,totalHp:0},{text:"就、就這麼喜歡胸部嗎？",upperHp:1},{text:"變、變態！",lowerHp:0},{text:"哈哈，急了急了！",totalHp:5}],Rita="\\N[1]",fontM=`\\fs[${CONFIG.common.fontSize.medium}]`,skills=[{id:1,displayName:"普通攻擊",texture:"image_07",shape:[[0,0,0],[0,1,0],[0,0,0]],weight:1,description:`普通攻擊。
`+fontM+"想不到詞的時候就用這招。"},{id:2,displayName:"調戲",texture:"image_03",shape:[[1,0,0],[1,1,0],[0,0,0]],weight:5,description:`防禦。
`+fontM+"很可惜，在大叔面前防禦是沒有用的。"},{id:3,displayName:"羞辱",texture:"image_02",shape:[[0,1,0],[0,1,0],[0,0,0]],weight:5,description:`破防。
`+fontM+"能讓大叔的防禦歸零喔。"},{id:4,displayName:"可憐",texture:"image_05",shape:[[0,1,0],[1,0,1],[0,1,0]],weight:2,description:`強攻。
`+fontM+"趁勝追擊吧！"}];function randomByWeight($,B){const U=$.reduce((J,nt)=>{const lt=lodashExports.last(J)||0,ct=B(nt);return J.push(lt+ct),J},[]),X=lodashExports.random(0,lodashExports.last(U)||0),Y=lodashExports.findIndex(U,J=>J>=X);return $[Y]}const getPuzzle=()=>{const $=Graphics.app.stage.children.find(B=>B instanceof Puzzle);if(!$)throw new Error("puzzle not founded");return $},toggleControllable=$=>{const B=getPuzzle();$?(B.menu.open(),B.battleCommandWin.reset()):(B.menu.close(),B.skills.forEach(U=>U.reset()),B.battleCommandWin.close())},getHeroineRm=()=>$gameActors.actor(1),getHeroineSkillIds=()=>{const $=[1,2].concat(getHeroineRm().skills().map(B=>B.id));return lodashExports.uniq($)},getTurnCount=()=>$gameTroop.turnCount(),getFirstEnemy=()=>$gameTroop.members().find($=>$.isAlive()),forcePartyAction=$=>{$gameMap._interpreter.command339([1,1,$,0])},clearEnemyActionQueue=()=>{$gameTroop.members().forEach($=>$.selectAllActions([]))},startProcessTurn=()=>{const $=getPuzzle();clearEnemyActionQueue(),$.battleCommandWin.close(),$.battleController.enemySkills.forEach(B=>B.beforeTurnStart()),BattleManager.startTurn()},playSe=($,B={})=>{AudioManager.playSe({name:$,volume:100,pitch:100,pan:0,...B})},killParty=()=>{const $=getPuzzle();$.heroine.upperHp=0,$.heroine.lowerHp=0,$.heroine.updateStatus(),$gameMap._interpreter.command313([0,0,0,1])},killEnemies=()=>{$gameMap._interpreter.command333([-1,0,1])},checkBattleEnd=()=>{const $=getPuzzle(),B=$gameParty.isEscaped()||$gameParty.isAllDead()||$gameTroop.isAllDead(),U=$.heroine.getTotalHp()<0||$.battleController.checkMapFill();return B||U},calculateEnemiesHpRate=()=>{const $=$gameTroop.members(),B=$.reduce((X,Y)=>X+=Y.hp,0),U=$.reduce((X,Y)=>X+=Y.mhp,0);return B/U*100},waitAction=($=0,B)=>{const U=BattleManager._spriteset;U.createAnimationSprite([],$dataAnimations[1],!1,$);const X=lodashExports.last(U._animationSprites);if(X){const Y=X.destroy;X.destroy=function(Z){B&&B(),Y.apply(X,Z)}}},waitMessage=$=>{if(!globalThis.customUpdater)throw new Error("customUpdater not found");const B=Graphics.app.stage._messageWindow;globalThis.customUpdater.waitFor(()=>B._waitCount>0,()=>B.startWait($))},getBattleLogWindow=()=>BattleManager._logWindow,battleLogWaitAndClear=$=>{$.push("wait"),$.push("wait"),$.push("clear")},mockUpdate=$=>{$.update=()=>{$.children.forEach(B=>{B.update&&B.update()})}},shakeTarget=new Map,shakeScreen=($=5,B=5,U=10,X=!1,Y)=>{var nt;$gameMap._interpreter.command225([$,B,U,X]);const Z=Y||Graphics.app.stage;shakeTarget.set(Z,!0);const J=()=>shakeTarget.delete(Z);(nt=globalThis.customUpdater)==null||nt.waitFor(({count:lt})=>lt<=1?!1:!$gameScreen.shake(),J,{maxFrame:999,onDestroy:J})},updateShake=($,B)=>{(shakeTarget.get($)||shakeTarget.get(Graphics.app.stage))&&($.x=B+$gameScreen.shake())},shouldSyncShakeScreen=$=>{const B=$.x;if($ instanceof Sprite){const U=$.update;$.update=()=>{updateShake($,B),U()};return}$.update=()=>{updateShake($,B),$.children.forEach(U=>{U.update&&U.update()})}},defaultValidator=$=>($==null?void 0:$.status)===UNIT_STATUS.empty,getShapeFirstRowAndCol=$=>{const B=$.findIndex(X=>X.some(Y=>!!Y));let U=-1;for(let X=0;X<$[0].length;X++)if($.some(Y=>!!Y[X])){U=X;break}if(B===-1||U===-1)throw new Error("invalid puzzle shape");return[B,U]},checkPuzzleValid=($,B,U,X)=>{const Y=X||defaultValidator,[Z,J]=getShapeFirstRowAndCol(B),[nt,lt]=U;return B.every((mt,yt)=>mt.every((bt,Wt)=>{if(bt===0)return!0;const Ut=nt+yt-Z,kt=lt+Wt-J,Re=$.shape,Mr=Re[0].length;if(Ut<0||kt<0||Ut>Re.length-1||kt>Mr-1)return!1;const Zt=$.getUnitByIndex(Ut,kt);return Y(Zt)}))},getAllValidIndex=($,B,U)=>{const X=[];return B.shape.forEach((Y,Z)=>{Y.forEach((J,nt)=>{checkPuzzleValid(B,$,[Z,nt],U)&&X.push([Z,nt])})}),X},getFirstValidIndex=($,B,U)=>{for(let X=0;X<B.shape.length;X++){const Y=B.shape[X];for(let Z=0;Z<Y.length;Z++)if(checkPuzzleValid(B,$,[X,Z],U))return[X,Z]}return null},getShapeFirstUnitIndex=$=>{for(let B=0;B<$.length;B++){const U=$[B];for(let X=0;X<U.length;X++)if(U[X])return[X,B]}throw new Error("invalid puzzle shape")},drawPuzzle=($,B)=>{let U=0;return $.forEach((X,Y)=>X.forEach((Z,J)=>{if(!Z)return;const nt=[J*CONFIG.map.unitSize,Y*CONFIG.map.unitSize,CONFIG.map.unitSize,CONFIG.map.unitSize];B.forEach(lt=>{lt.drawRect(...nt)}),U+=1})),U},STAGE_EVENT={battleStart:"battleStart",turnStart:"turnStart",turnEnd:"turnEnd",enemyTurn:"enemyTurn",enemyActionEnd:"enemyActionEnd",battleEnd:"battleEnd",troopEventStart:"troopEventStart",troopEventEnd:"troopEventEnd"},APP_EVENT={createBattleScene:"createBattleScene",battleSceneReady:"battleSceneReady"};function addStageEventListener($,B){return Graphics.app.stage.addListener($,B),()=>{Graphics.app.stage.removeListener($,B)}}function addStageEventListenerOnce($,B){const U=addStageEventListener($,()=>{B(),U()})}class CustomUpdater extends Sprite{constructor(){super(new Bitmap(0,0));ft(this,"lastUpdatedTime",new Date().getTime());ft(this,"funcsToLoop",[])}add(U,X={}){const{maxFrame:Y,onDestroy:Z}=X,J=()=>this.remove(U);this.funcsToLoop.push({func:U,maxFrame:Y,onDestroy:Z,count:0,remove:J,totalTime:0})}remove(U){if(this._destroyed)return;const X=this.funcsToLoop.find(Y=>Y.func===U);lodashExports.pull(this.funcsToLoop,X),X!=null&&X.onDestroy&&X.onDestroy()}waitFor(U,X,Y={}){this.add(Z=>{U(Z)&&(X(Z),Z.remove())},Y)}update(){super.update();const U=new Date().getTime(),X=(U-this.lastUpdatedTime)/1e3;this.lastUpdatedTime=U,this.funcsToLoop[0]&&this.funcsToLoop.forEach(Y=>{Y.totalTime+=X,Y.count+=1,Y.func({count:Y.count,remove:Y.remove,delta:X,totalTime:Y.totalTime}),Y.maxFrame&&Y.count>Y.maxFrame&&Y.remove()})}destroy(U){globalThis.customUpdater=null,[...this.funcsToLoop].forEach(X=>X.remove()),this.funcsToLoop=[],super.destroy(U)}}const waitForAsync=($,B)=>new Promise(U=>{var X;(X=globalThis.customUpdater)==null||X.waitFor($,U,B)}),hasIntersection=($,B)=>!lodashExports.isEmpty(lodashExports.intersection($,B)),getTextWeighted=$=>{var Y;let B=null;const U=(Y=lodashExports.maxBy($,"priority"))==null?void 0:Y.priority;return U?B=$.filter(Z=>Z.priority===U):B=$,randomByWeight(B,Z=>Z.weight||1)},handleCondition=(textConfig,state)=>{var $;const{reuse,enemyId,skillId,unitId,enemyHp,preTextLabel,script,upperHp,lowerHp,totalHp}=textConfig;let isUsed=!1,isPreTextExist=!1;return($=state.textLog)==null||$.forEach(B=>{B===textConfig&&(isUsed=!0),preTextLabel&&textConfig.label&&preTextLabel.includes(textConfig.label)&&(isPreTextExist=!0)}),isUsed&&!reuse||!lodashExports.isNil(enemyId)&&!enemyId.includes(state.enemyId)||!lodashExports.isNil(skillId)&&!skillId.includes(state.skillId||0)||!lodashExports.isNil(unitId)&&!hasIntersection(state.unitTypes,unitId)||!lodashExports.isNil(enemyHp)&&enemyHp<(state.enemyHpRate||100)||!lodashExports.isNil(upperHp)&&upperHp<state.upperHp||!lodashExports.isNil(lowerHp)&&lowerHp<state.lowerHp||!lodashExports.isNil(totalHp)&&totalHp<state.upperHp+state.lowerHp||!lodashExports.isNil(preTextLabel)&&!isPreTextExist?!1:script?eval(script):!0},getTextFromPool=($,B,U)=>{const X=$.filter(Z=>handleCondition(Z,B)),Y=getTextWeighted(X);return!Y&&U?$.find(Z=>{var J;return(J=Z.skillId)==null?void 0:J.includes(B.skillId||0)})||$[0]:Y},getState=($,B={})=>{const U=calculateEnemiesHpRate(),X=$.battleController.battleLog.map(Z=>Z.text).filter(Boolean);return{enemyId:$.enemyConfig.id,textLog:X,enemyHpRate:U,puzzle:$,upperHp:$.heroine.upperHp,lowerHp:$.heroine.lowerHp,...B}};var c$6=`attribute vec2 aVertexPosition;
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
`;let _$1=class extends core.Filter{constructor(B=4,U=3,X=!1){super(c$6,X?y$1:v$3),this._kernels=[],this._blur=4,this._quality=3,this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new core.Point,this.pixelSize=1,this._clamp=X,Array.isArray(B)?this.kernels=B:(this._blur=B,this.quality=U)}apply(B,U,X,Y){const Z=this._pixelSize.x/U._frame.width,J=this._pixelSize.y/U._frame.height;let nt;if(this._quality===1||this._blur===0)nt=this._kernels[0]+.5,this.uniforms.uOffset[0]=nt*Z,this.uniforms.uOffset[1]=nt*J,B.applyFilter(this,U,X,Y);else{const lt=B.getFilterTexture();let ct=U,mt=lt,yt;const Rt=this._quality-1;for(let bt=0;bt<Rt;bt++)nt=this._kernels[bt]+.5,this.uniforms.uOffset[0]=nt*Z,this.uniforms.uOffset[1]=nt*J,B.applyFilter(this,ct,mt,1),yt=ct,ct=mt,mt=yt;nt=this._kernels[Rt]+.5,this.uniforms.uOffset[0]=nt*Z,this.uniforms.uOffset[1]=nt*J,B.applyFilter(this,ct,X,Y),B.returnFilterTexture(lt)}}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((B,U)=>B+U+.5,0))}_generateKernels(){const B=this._blur,U=this._quality,X=[B];if(B>0){let Y=B;const Z=B/U;for(let J=1;J<U;J++)Y-=Z,X.push(Y)}this._kernels=X,this._updatePadding()}get kernels(){return this._kernels}set kernels(B){Array.isArray(B)&&B.length>0?(this._kernels=B,this._quality=B.length,this._blur=Math.max(...B)):(this._kernels=[0],this._quality=1)}get clamp(){return this._clamp}set pixelSize(B){typeof B=="number"?(this._pixelSize.x=B,this._pixelSize.y=B):Array.isArray(B)?(this._pixelSize.x=B[0],this._pixelSize.y=B[1]):B instanceof core.Point?(this._pixelSize.x=B.x,this._pixelSize.y=B.y):(this._pixelSize.x=1,this._pixelSize.y=1)}get pixelSize(){return this._pixelSize}get quality(){return this._quality}set quality(B){this._quality=Math.max(1,Math.round(B)),this._generateKernels()}get blur(){return this._blur}set blur(B){this._blur=B,this._generateKernels()}};var a$5=`attribute vec2 aVertexPosition;
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
`;let x$1=class extends core.Filter{constructor(B=.5){super(a$5,m$2),this.threshold=B}get threshold(){return this.uniforms.threshold}set threshold(B){this.uniforms.threshold=B}};var g$2=`uniform sampler2D uSampler;
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
`;const c$5=class extends core.Filter{constructor(B){super(a$5,g$2),this.bloomScale=1,this.brightness=1,this._resolution=core.settings.FILTER_RESOLUTION,typeof B=="number"&&(B={threshold:B});const U=Object.assign(c$5.defaults,B);this.bloomScale=U.bloomScale,this.brightness=U.brightness;const{kernels:X,blur:Y,quality:Z,pixelSize:J,resolution:nt}=U;this._extractFilter=new x$1(U.threshold),this._extractFilter.resolution=nt,this._blurFilter=X?new _$1(X):new _$1(Y,Z),this.pixelSize=J,this.resolution=nt}apply(B,U,X,Y,Z){const J=B.getFilterTexture();this._extractFilter.apply(B,U,J,1,Z);const nt=B.getFilterTexture();this._blurFilter.apply(B,J,nt,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=nt,B.applyFilter(this,U,X,Y),B.returnFilterTexture(nt),B.returnFilterTexture(J)}get resolution(){return this._resolution}set resolution(B){this._resolution=B,this._extractFilter&&(this._extractFilter.resolution=B),this._blurFilter&&(this._blurFilter.resolution=B)}get threshold(){return this._extractFilter.threshold}set threshold(B){this._extractFilter.threshold=B}get kernels(){return this._blurFilter.kernels}set kernels(B){this._blurFilter.kernels=B}get blur(){return this._blurFilter.blur}set blur(B){this._blurFilter.blur=B}get quality(){return this._blurFilter.quality}set quality(B){this._blurFilter.quality=B}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(B){this._blurFilter.pixelSize=B}};let b$1=c$5;b$1.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:core.settings.FILTER_RESOLUTION};/*!
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
  ***************************************************************************** */var extendStatics$1=function($,B){return extendStatics$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(U,X){U.__proto__=X}||function(U,X){for(var Y in X)X.hasOwnProperty(Y)&&(U[Y]=X[Y])},extendStatics$1($,B)};function __extends$1($,B){extendStatics$1($,B);function U(){this.constructor=$}$.prototype=B===null?Object.create(B):(U.prototype=B.prototype,new U)}var fragment=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;(function($){__extends$1(B,$);function B(U){U===void 0&&(U=1);var X=$.call(this,core.defaultVertex,fragment,{uAlpha:1})||this;return X.alpha=U,X}return Object.defineProperty(B.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(U){this.uniforms.uAlpha=U},enumerable:!1,configurable:!0}),B})(core.Filter);/*!
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
  ***************************************************************************** */var extendStatics=function($,B){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(U,X){U.__proto__=X}||function(U,X){for(var Y in X)X.hasOwnProperty(Y)&&(U[Y]=X[Y])},extendStatics($,B)};function __extends($,B){extendStatics($,B);function U(){this.constructor=$}$.prototype=B===null?Object.create(B):(U.prototype=B.prototype,new U)}var vertTemplate=`
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
    }`;function generateBlurVertSource($,B){var U=Math.ceil($/2),X=vertTemplate,Y="",Z;B?Z="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":Z="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var J=0;J<$;J++){var nt=Z.replace("%index%",J.toString());nt=nt.replace("%sampleIndex%",J-(U-1)+".0"),Y+=nt,Y+=`
`}return X=X.replace("%blur%",Y),X=X.replace("%size%",$.toString()),X}var GAUSSIAN_VALUES={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},fragTemplate=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function generateBlurFragSource($){for(var B=GAUSSIAN_VALUES[$],U=B.length,X=fragTemplate,Y="",Z="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",J,nt=0;nt<$;nt++){var lt=Z.replace("%index%",nt.toString());J=nt,nt>=U&&(J=$-nt-1),lt=lt.replace("%value%",B[J].toString()),Y+=lt,Y+=`
`}return X=X.replace("%blur%",Y),X=X.replace("%size%",$.toString()),X}var ENV;(function($){$[$.WEBGL_LEGACY=0]="WEBGL_LEGACY",$[$.WEBGL=1]="WEBGL",$[$.WEBGL2=2]="WEBGL2"})(ENV||(ENV={}));var RENDERER_TYPE;(function($){$[$.UNKNOWN=0]="UNKNOWN",$[$.WEBGL=1]="WEBGL",$[$.CANVAS=2]="CANVAS"})(RENDERER_TYPE||(RENDERER_TYPE={}));var BUFFER_BITS;(function($){$[$.COLOR=16384]="COLOR",$[$.DEPTH=256]="DEPTH",$[$.STENCIL=1024]="STENCIL"})(BUFFER_BITS||(BUFFER_BITS={}));var BLEND_MODES;(function($){$[$.NORMAL=0]="NORMAL",$[$.ADD=1]="ADD",$[$.MULTIPLY=2]="MULTIPLY",$[$.SCREEN=3]="SCREEN",$[$.OVERLAY=4]="OVERLAY",$[$.DARKEN=5]="DARKEN",$[$.LIGHTEN=6]="LIGHTEN",$[$.COLOR_DODGE=7]="COLOR_DODGE",$[$.COLOR_BURN=8]="COLOR_BURN",$[$.HARD_LIGHT=9]="HARD_LIGHT",$[$.SOFT_LIGHT=10]="SOFT_LIGHT",$[$.DIFFERENCE=11]="DIFFERENCE",$[$.EXCLUSION=12]="EXCLUSION",$[$.HUE=13]="HUE",$[$.SATURATION=14]="SATURATION",$[$.COLOR=15]="COLOR",$[$.LUMINOSITY=16]="LUMINOSITY",$[$.NORMAL_NPM=17]="NORMAL_NPM",$[$.ADD_NPM=18]="ADD_NPM",$[$.SCREEN_NPM=19]="SCREEN_NPM",$[$.NONE=20]="NONE",$[$.SRC_OVER=0]="SRC_OVER",$[$.SRC_IN=21]="SRC_IN",$[$.SRC_OUT=22]="SRC_OUT",$[$.SRC_ATOP=23]="SRC_ATOP",$[$.DST_OVER=24]="DST_OVER",$[$.DST_IN=25]="DST_IN",$[$.DST_OUT=26]="DST_OUT",$[$.DST_ATOP=27]="DST_ATOP",$[$.ERASE=26]="ERASE",$[$.SUBTRACT=28]="SUBTRACT",$[$.XOR=29]="XOR"})(BLEND_MODES||(BLEND_MODES={}));var DRAW_MODES;(function($){$[$.POINTS=0]="POINTS",$[$.LINES=1]="LINES",$[$.LINE_LOOP=2]="LINE_LOOP",$[$.LINE_STRIP=3]="LINE_STRIP",$[$.TRIANGLES=4]="TRIANGLES",$[$.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",$[$.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(DRAW_MODES||(DRAW_MODES={}));var FORMATS;(function($){$[$.RGBA=6408]="RGBA",$[$.RGB=6407]="RGB",$[$.ALPHA=6406]="ALPHA",$[$.LUMINANCE=6409]="LUMINANCE",$[$.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",$[$.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",$[$.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(FORMATS||(FORMATS={}));var TARGETS;(function($){$[$.TEXTURE_2D=3553]="TEXTURE_2D",$[$.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",$[$.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",$[$.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",$[$.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",$[$.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",$[$.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",$[$.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",$[$.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(TARGETS||(TARGETS={}));var TYPES;(function($){$[$.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",$[$.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",$[$.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",$[$.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",$[$.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",$[$.FLOAT=5126]="FLOAT",$[$.HALF_FLOAT=36193]="HALF_FLOAT"})(TYPES||(TYPES={}));var SCALE_MODES;(function($){$[$.NEAREST=0]="NEAREST",$[$.LINEAR=1]="LINEAR"})(SCALE_MODES||(SCALE_MODES={}));var WRAP_MODES;(function($){$[$.CLAMP=33071]="CLAMP",$[$.REPEAT=10497]="REPEAT",$[$.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(WRAP_MODES||(WRAP_MODES={}));var MIPMAP_MODES;(function($){$[$.OFF=0]="OFF",$[$.POW2=1]="POW2",$[$.ON=2]="ON"})(MIPMAP_MODES||(MIPMAP_MODES={}));var ALPHA_MODES;(function($){$[$.NPM=0]="NPM",$[$.UNPACK=1]="UNPACK",$[$.PMA=2]="PMA",$[$.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",$[$.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",$[$.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(ALPHA_MODES||(ALPHA_MODES={}));var CLEAR_MODES;(function($){$[$.NO=0]="NO",$[$.YES=1]="YES",$[$.AUTO=2]="AUTO",$[$.BLEND=0]="BLEND",$[$.CLEAR=1]="CLEAR",$[$.BLIT=2]="BLIT"})(CLEAR_MODES||(CLEAR_MODES={}));var GC_MODES;(function($){$[$.AUTO=0]="AUTO",$[$.MANUAL=1]="MANUAL"})(GC_MODES||(GC_MODES={}));var PRECISION;(function($){$.LOW="lowp",$.MEDIUM="mediump",$.HIGH="highp"})(PRECISION||(PRECISION={}));var MASK_TYPES;(function($){$[$.NONE=0]="NONE",$[$.SCISSOR=1]="SCISSOR",$[$.STENCIL=2]="STENCIL",$[$.SPRITE=3]="SPRITE"})(MASK_TYPES||(MASK_TYPES={}));var MSAA_QUALITY;(function($){$[$.NONE=0]="NONE",$[$.LOW=2]="LOW",$[$.MEDIUM=4]="MEDIUM",$[$.HIGH=8]="HIGH"})(MSAA_QUALITY||(MSAA_QUALITY={}));var BlurFilterPass=function($){__extends(B,$);function B(U,X,Y,Z,J){X===void 0&&(X=8),Y===void 0&&(Y=4),Z===void 0&&(Z=settings.settings.FILTER_RESOLUTION),J===void 0&&(J=5);var nt=this,lt=generateBlurVertSource(J,U),ct=generateBlurFragSource(J);return nt=$.call(this,lt,ct)||this,nt.horizontal=U,nt.resolution=Z,nt._quality=0,nt.quality=Y,nt.blur=X,nt}return B.prototype.apply=function(U,X,Y,Z){if(Y?this.horizontal?this.uniforms.strength=1/Y.width*(Y.width/X.width):this.uniforms.strength=1/Y.height*(Y.height/X.height):this.horizontal?this.uniforms.strength=1/U.renderer.width*(U.renderer.width/X.width):this.uniforms.strength=1/U.renderer.height*(U.renderer.height/X.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)U.applyFilter(this,X,Y,Z);else{var J=U.getFilterTexture(),nt=U.renderer,lt=X,ct=J;this.state.blend=!1,U.applyFilter(this,lt,ct,CLEAR_MODES.CLEAR);for(var mt=1;mt<this.passes-1;mt++){U.bindAndClear(lt,CLEAR_MODES.BLIT),this.uniforms.uSampler=ct;var yt=ct;ct=lt,lt=yt,nt.shader.bind(this),nt.geometry.draw(5)}this.state.blend=!0,U.applyFilter(this,ct,Y,Z),U.returnFilterTexture(J)}},Object.defineProperty(B.prototype,"blur",{get:function(){return this.strength},set:function(U){this.padding=1+Math.abs(U)*2,this.strength=U},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"quality",{get:function(){return this._quality},set:function(U){this._quality=U,this.passes=U},enumerable:!1,configurable:!0}),B}(core.Filter);(function($){__extends(B,$);function B(U,X,Y,Z){U===void 0&&(U=8),X===void 0&&(X=4),Y===void 0&&(Y=settings.settings.FILTER_RESOLUTION),Z===void 0&&(Z=5);var J=$.call(this)||this;return J.blurXFilter=new BlurFilterPass(!0,U,X,Y,Z),J.blurYFilter=new BlurFilterPass(!1,U,X,Y,Z),J.resolution=Y,J.quality=X,J.blur=U,J.repeatEdgePixels=!1,J}return B.prototype.apply=function(U,X,Y,Z){var J=Math.abs(this.blurXFilter.strength),nt=Math.abs(this.blurYFilter.strength);if(J&&nt){var lt=U.getFilterTexture();this.blurXFilter.apply(U,X,lt,CLEAR_MODES.CLEAR),this.blurYFilter.apply(U,lt,Y,Z),U.returnFilterTexture(lt)}else nt?this.blurYFilter.apply(U,X,Y,Z):this.blurXFilter.apply(U,X,Y,Z)},B.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(B.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(U){this.blurXFilter.blur=this.blurYFilter.blur=U,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(U){this.blurXFilter.quality=this.blurYFilter.quality=U},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(U){this.blurXFilter.blur=U,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(U){this.blurYFilter.blur=U,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(U){this.blurYFilter.blendMode=U},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(U){this._repeatEdgePixels=U,this.updatePadding()},enumerable:!1,configurable:!0}),B})(core.Filter);var d$3=`attribute vec2 aVertexPosition;
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
`;const n$3=class extends core.Filter{constructor(B){super(d$3,u$3),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,n$3.defaults,B)}apply(B,U,X,Y){const{width:Z,height:J}=U.filterFrame;this.uniforms.dimensions[0]=Z,this.uniforms.dimensions[1]=J,B.applyFilter(this,U,X,Y)}get radius(){return this.uniforms.radius}set radius(B){this.uniforms.radius=B}get strength(){return this.uniforms.strength}set strength(B){this.uniforms.strength=B}get center(){return this.uniforms.center}set center(B){this.uniforms.center=B}};let t$2=n$3;t$2.defaults={center:[.5,.5],radius:100,strength:1};var Q=`const float PI = 3.1415926538;
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
`,v$2=v$2||{};v$2.stringify=function(){var $={"visit_linear-gradient":function(B){return $.visit_gradient(B)},"visit_repeating-linear-gradient":function(B){return $.visit_gradient(B)},"visit_radial-gradient":function(B){return $.visit_gradient(B)},"visit_repeating-radial-gradient":function(B){return $.visit_gradient(B)},visit_gradient:function(B){var U=$.visit(B.orientation);return U&&(U+=", "),B.type+"("+U+$.visit(B.colorStops)+")"},visit_shape:function(B){var U=B.value,X=$.visit(B.at),Y=$.visit(B.style);return Y&&(U+=" "+Y),X&&(U+=" at "+X),U},"visit_default-radial":function(B){var U="",X=$.visit(B.at);return X&&(U+=X),U},"visit_extent-keyword":function(B){var U=B.value,X=$.visit(B.at);return X&&(U+=" at "+X),U},"visit_position-keyword":function(B){return B.value},visit_position:function(B){return $.visit(B.value.x)+" "+$.visit(B.value.y)},"visit_%":function(B){return B.value+"%"},visit_em:function(B){return B.value+"em"},visit_px:function(B){return B.value+"px"},visit_literal:function(B){return $.visit_color(B.value,B)},visit_hex:function(B){return $.visit_color("#"+B.value,B)},visit_rgb:function(B){return $.visit_color("rgb("+B.value.join(", ")+")",B)},visit_rgba:function(B){return $.visit_color("rgba("+B.value.join(", ")+")",B)},visit_color:function(B,U){var X=B,Y=$.visit(U.length);return Y&&(X+=" "+Y),X},visit_angular:function(B){return B.value+"deg"},visit_directional:function(B){return"to "+B.value},visit_array:function(B){var U="",X=B.length;return B.forEach(function(Y,Z){U+=$.visit(Y),Z<X-1&&(U+=", ")}),U},visit:function(B){if(!B)return"";var U="";if(B instanceof Array)return $.visit_array(B,U);if(B.type){var X=$["visit_"+B.type];if(X)return X(B);throw Error("Missing visitor visit_"+B.type)}else throw Error("Invalid node.")}};return function(B){return $.visit(B)}}();var v$2=v$2||{};v$2.parse=function(){var $={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},B="";function U(gt){var At=new Error(B+": "+gt);throw At.source=B,At}function X(){var gt=Y();return B.length>0&&U("Invalid input not EOF"),gt}function Y(){return Zt(Z)}function Z(){return J("linear-gradient",$.linearGradient,lt)||J("repeating-linear-gradient",$.repeatingLinearGradient,lt)||J("radial-gradient",$.radialGradient,yt)||J("repeating-radial-gradient",$.repeatingRadialGradient,yt)}function J(gt,At,Ht){return nt(At,function(Fe){var Oe=Ht();return Oe&&(rr($.comma)||U("Missing comma before color stops")),{type:gt,orientation:Oe,colorStops:Zt(mr)}})}function nt(gt,At){var Ht=rr(gt);if(Ht){rr($.startCall)||U("Missing (");var Fe=At(Ht);return rr($.endCall)||U("Missing )"),Fe}}function lt(){return ct()||mt()}function ct(){return _e("directional",$.sideOrCorner,1)}function mt(){return _e("angular",$.angleValue,1)}function yt(){var gt,At=Rt(),Ht;return At&&(gt=[],gt.push(At),Ht=B,rr($.comma)&&(At=Rt(),At?gt.push(At):B=Ht)),gt}function Rt(){var gt=bt()||Wt();if(gt)gt.at=kt();else{var At=Ut();if(At){gt=At;var Ht=kt();Ht&&(gt.at=Ht)}else{var Fe=Re();Fe&&(gt={type:"default-radial",at:Fe})}}return gt}function bt(){var gt=_e("shape",/^(circle)/i,0);return gt&&(gt.style=In()||Ut()),gt}function Wt(){var gt=_e("shape",/^(ellipse)/i,0);return gt&&(gt.style=$r()||Ut()),gt}function Ut(){return _e("extent-keyword",$.extentKeywords,1)}function kt(){if(_e("position",/^at/,0)){var gt=Re();return gt||U("Missing positioning value"),gt}}function Re(){var gt=Mr();if(gt.x||gt.y)return{type:"position",value:gt}}function Mr(){return{x:$r(),y:$r()}}function Zt(gt){var At=gt(),Ht=[];if(At)for(Ht.push(At);rr($.comma);)At=gt(),At?Ht.push(At):U("One extra comma");return Ht}function mr(){var gt=Ue();return gt||U("Expected color definition"),gt.length=$r(),gt}function Ue(){return Ke()||en()||Ar()||vr()}function vr(){return _e("literal",$.literalColor,0)}function Ke(){return _e("hex",$.hexColor,1)}function Ar(){return nt($.rgbColor,function(){return{type:"rgb",value:Zt(Sn)}})}function en(){return nt($.rgbaColor,function(){return{type:"rgba",value:Zt(Sn)}})}function Sn(){return rr($.number)[1]}function $r(){return _e("%",$.percentageValue,1)||yi()||In()}function yi(){return _e("position-keyword",$.positionKeywords,1)}function In(){return _e("px",$.pixelValue,1)||_e("em",$.emValue,1)}function _e(gt,At,Ht){var Fe=rr(At);if(Fe)return{type:gt,value:Fe[Ht]}}function rr(gt){var At,Ht;return Ht=/^[\n\r\t\s]+/.exec(B),Ht&&An(Ht[0].length),At=gt.exec(B),At&&An(At[0].length),At}function An(gt){B=B.substr(gt)}return function(gt){return B=gt.toString(),X()}}();var ee=v$2.parse;v$2.stringify;var R={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function te($){var B,U=[],X=1,Y;if(typeof $=="string")if(R[$])U=R[$].slice(),Y="rgb";else if($==="transparent")X=0,Y="rgb",U=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test($)){var Z=$.slice(1),J=Z.length,nt=J<=4;X=1,nt?(U=[parseInt(Z[0]+Z[0],16),parseInt(Z[1]+Z[1],16),parseInt(Z[2]+Z[2],16)],J===4&&(X=parseInt(Z[3]+Z[3],16)/255)):(U=[parseInt(Z[0]+Z[1],16),parseInt(Z[2]+Z[3],16),parseInt(Z[4]+Z[5],16)],J===8&&(X=parseInt(Z[6]+Z[7],16)/255)),U[0]||(U[0]=0),U[1]||(U[1]=0),U[2]||(U[2]=0),Y="rgb"}else if(B=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec($)){var lt=B[1],ct=lt==="rgb",Z=lt.replace(/a$/,"");Y=Z;var J=Z==="cmyk"?4:Z==="gray"?1:3;U=B[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(Rt,bt){if(/%$/.test(Rt))return bt===J?parseFloat(Rt)/100:Z==="rgb"?parseFloat(Rt)*255/100:parseFloat(Rt);if(Z[bt]==="h"){if(/deg$/.test(Rt))return parseFloat(Rt);if(G[Rt]!==void 0)return G[Rt]}return parseFloat(Rt)}),lt===Z&&U.push(1),X=ct||U[J]===void 0?1:U[J],U=U.slice(0,J)}else $.length>10&&/[0-9](?:\s|\/)/.test($)&&(U=$.match(/([0-9]+)/g).map(function(mt){return parseFloat(mt)}),Y=$.match(/([a-z])/ig).join("").toLowerCase());else isNaN($)?Array.isArray($)||$.length?(U=[$[0],$[1],$[2]],Y="rgb",X=$.length===4?$[3]:1):$ instanceof Object&&($.r!=null||$.red!=null||$.R!=null?(Y="rgb",U=[$.r||$.red||$.R||0,$.g||$.green||$.G||0,$.b||$.blue||$.B||0]):(Y="hsl",U=[$.h||$.hue||$.H||0,$.s||$.saturation||$.S||0,$.l||$.lightness||$.L||$.b||$.brightness]),X=$.a||$.alpha||$.opacity||1,$.opacity!=null&&(X/=100)):(Y="rgb",U=[$>>>16,($&65280)>>>8,$&255]);return{space:Y,values:U,alpha:X}}var A={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},S={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function($){var B=$[0]/360,U=$[1]/100,X=$[2]/100,Y,Z,J,nt,lt;if(U===0)return lt=X*255,[lt,lt,lt];X<.5?Z=X*(1+U):Z=X+U-X*U,Y=2*X-Z,nt=[0,0,0];for(var ct=0;ct<3;ct++)J=B+1/3*-(ct-1),J<0?J++:J>1&&J--,6*J<1?lt=Y+(Z-Y)*6*J:2*J<1?lt=Z:3*J<2?lt=Y+(Z-Y)*(2/3-J)*6:lt=Y,nt[ct]=lt*255;return nt}};A.hsl=function($){var B=$[0]/255,U=$[1]/255,X=$[2]/255,Y=Math.min(B,U,X),Z=Math.max(B,U,X),J=Z-Y,nt,lt,ct;return Z===Y?nt=0:B===Z?nt=(U-X)/J:U===Z?nt=2+(X-B)/J:X===Z&&(nt=4+(B-U)/J),nt=Math.min(nt*60,360),nt<0&&(nt+=360),ct=(Y+Z)/2,Z===Y?lt=0:ct<=.5?lt=J/(Z+Y):lt=J/(2-Z-Y),[nt,lt*100,ct*100]};function re($){Array.isArray($)&&$.raw&&($=String.raw(...arguments));var B,U=te($);if(!U.space)return[];const X=U.space[0]==="h"?S.min:A.min,Y=U.space[0]==="h"?S.max:A.max;return B=Array(3),B[0]=Math.min(Math.max(U.values[0],X[0]),Y[0]),B[1]=Math.min(Math.max(U.values[1],X[1]),Y[1]),B[2]=Math.min(Math.max(U.values[2],X[2]),Y[2]),U.space[0]==="h"&&(B=S.rgb(B)),B.push(Math.min(Math.max(U.alpha,0),1)),B}function L($){switch(typeof $){case"string":return ne($);case"number":return core.utils.hex2rgb($);default:return $}}function ne($){const B=re($);if(!B)throw new Error(`Unable to parse color "${$}" as RGBA.`);return[B[0]/255,B[1]/255,B[2]/255,B[3]]}function ie($){const B=ee(ge($));if(B.length===0)throw new Error("Invalid CSS gradient.");if(B.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const U=B[0],X=oe(U.type),Y=ae(U.colorStops),Z=ce(U.orientation);return{type:X,stops:Y,angle:Z}}function oe($){const B={"linear-gradient":0,"radial-gradient":1};if(!($ in B))throw new Error(`Unsupported gradient type "${$}"`);return B[$]}function ae($){const B=ue($),U=[];for(let X=0;X<$.length;X++){const Y=le($[X]);U.push({offset:B[X],color:Y.slice(0,3),alpha:Y[3]})}return U}function le($){return L(se($))}function se($){switch($.type){case"hex":return`#${$.value}`;case"literal":return $.value;default:return`${$.type}(${$.value.join(",")})`}}function ue($){const B=[];for(let Y=0;Y<$.length;Y++){const Z=$[Y];let J=-1;Z.type==="literal"&&Z.length&&"type"in Z.length&&Z.length.type==="%"&&"value"in Z.length&&(J=parseFloat(Z.length.value)/100),B.push(J)}const U=Y=>{for(let Z=Y;Z<B.length;Z++)if(B[Z]!==-1)return{indexDelta:Z-Y,offset:B[Z]};return{indexDelta:B.length-1-Y,offset:1}};let X=0;for(let Y=0;Y<B.length;Y++){const Z=B[Y];if(Z!==-1)X=Z;else if(Y===0)B[Y]=0;else if(Y+1===B.length)B[Y]=1;else{const J=U(Y),nt=(J.offset-X)/(1+J.indexDelta);for(let lt=0;lt<=J.indexDelta;lt++)B[Y+lt]=X+(lt+1)*nt;Y+=J.indexDelta,X=B[Y]}}return B.map(fe)}function fe($){return $.toString().length>6?parseFloat($.toString().substring(0,6)):$}function ce($){if(typeof $>"u")return 0;if("type"in $&&"value"in $)switch($.type){case"angular":return parseFloat($.value);case"directional":return pe($.value)}return 0}function pe($){const B={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!($ in B))throw new Error(`Unsupported directional value "${$}"`);return B[$]}function ge($){let B=$.replace(/\s{2,}/gu," ");return B=B.replace(/;/g,""),B=B.replace(/ ,/g,","),B=B.replace(/\( /g,"("),B=B.replace(/ \)/g,")"),B.trim()}var he=Object.defineProperty,me=Object.defineProperties,de=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,z$1=($,B,U)=>B in $?he($,B,{enumerable:!0,configurable:!0,writable:!0,value:U}):$[B]=U,k=($,B)=>{for(var U in B||(B={}))ve.call(B,U)&&z$1($,U,B[U]);if(N)for(var U of N(B))ye.call(B,U)&&z$1($,U,B[U]);return $},be=($,B)=>me($,de(B));const D=90;function Ce($){return[...$].sort((B,U)=>B.offset-U.offset)}const P$1=class extends core.Filter{constructor(B){B&&"css"in B&&(B=be(k({},ie(B.css||"")),{alpha:B.alpha,maxColors:B.maxColors}));const U=k(k({},P$1.defaults),B);if(!U.stops||U.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");super(W,Q),this._stops=[],this.autoFit=!1,Object.assign(this,U)}get stops(){return this._stops}set stops(B){const U=Ce(B),X=new Float32Array(U.length*3),Y=0,Z=1,J=2;for(let nt=0;nt<U.length;nt++){const lt=L(U[nt].color),ct=nt*3;X[ct+Y]=lt[Y],X[ct+Z]=lt[Z],X[ct+J]=lt[J]}this.uniforms.uColors=X,this.uniforms.uOffsets=U.map(nt=>nt.offset),this.uniforms.uAlphas=U.map(nt=>nt.alpha),this.uniforms.uNumStops=U.length,this._stops=U}set type(B){this.uniforms.uType=B}get type(){return this.uniforms.uType}set angle(B){this.uniforms.uAngle=B-D}get angle(){return this.uniforms.uAngle+D}set alpha(B){this.uniforms.uAlpha=B}get alpha(){return this.uniforms.uAlpha}set maxColors(B){this.uniforms.uMaxColors=B}get maxColors(){return this.uniforms.uMaxColors}};let y=P$1;y.LINEAR=0,y.RADIAL=1,y.CONIC=2,y.defaults={type:P$1.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0};var a$4=`attribute vec2 aVertexPosition;
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
`;const e$1=class extends core.Filter{constructor(B){super(a$4,g$1),this.time=0,this.seed=0,this.uniforms.dimensions=new Float32Array(2),Object.assign(this,e$1.defaults,B)}apply(B,U,X,Y){const{width:Z,height:J}=U.filterFrame;this.uniforms.dimensions[0]=Z,this.uniforms.dimensions[1]=J,this.uniforms.seed=this.seed,this.uniforms.time=this.time,B.applyFilter(this,U,X,Y)}set curvature(B){this.uniforms.curvature=B}get curvature(){return this.uniforms.curvature}set lineWidth(B){this.uniforms.lineWidth=B}get lineWidth(){return this.uniforms.lineWidth}set lineContrast(B){this.uniforms.lineContrast=B}get lineContrast(){return this.uniforms.lineContrast}set verticalLine(B){this.uniforms.verticalLine=B}get verticalLine(){return this.uniforms.verticalLine}set noise(B){this.uniforms.noise=B}get noise(){return this.uniforms.noise}set noiseSize(B){this.uniforms.noiseSize=B}get noiseSize(){return this.uniforms.noiseSize}set vignetting(B){this.uniforms.vignetting=B}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(B){this.uniforms.vignettingAlpha=B}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(B){this.uniforms.vignettingBlur=B}get vignettingBlur(){return this.uniforms.vignettingBlur}};let t$1=e$1;t$1.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0};var w=`attribute vec2 aVertexPosition;
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
}`,P=Object.defineProperty,c$4=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,_=($,B,U)=>B in $?P($,B,{enumerable:!0,configurable:!0,writable:!0,value:U}):$[B]=U,b=($,B)=>{for(var U in B||(B={}))T.call(B,U)&&_($,U,B[U]);if(c$4)for(var U of c$4(B))z.call(B,U)&&_($,U,B[U]);return $};const o$3=class extends core.Filter{constructor(B){super(),this.angle=45,this._distance=5,this._resolution=core.settings.FILTER_RESOLUTION;const U=B?b(b({},o$3.defaults),B):o$3.defaults,{kernels:X,blur:Y,quality:Z,pixelSize:J,resolution:nt}=U;this._offset=new core.ObservablePoint(this._updatePadding,this),this._tintFilter=new core.Filter(w,O),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=this._offset,this._tintFilter.resolution=nt,this._blurFilter=X?new _$1(X):new _$1(Y,Z),this.pixelSize=J,this.resolution=nt;const{shadowOnly:lt,rotation:ct,distance:mt,offset:yt,alpha:Rt,color:bt}=U;this.shadowOnly=lt,ct!==void 0&&mt!==void 0?(this.rotation=ct,this.distance=mt):this.offset=yt,this.alpha=Rt,this.color=bt}apply(B,U,X,Y){const Z=B.getFilterTexture();this._tintFilter.apply(B,U,Z,1),this._blurFilter.apply(B,Z,X,Y),this.shadowOnly!==!0&&B.applyFilter(this,U,X,0),B.returnFilterTexture(Z)}_updatePadding(){const B=Math.max(Math.abs(this._offset.x),Math.abs(this._offset.y));this.padding=B+this.blur*2}_updateShift(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))}set offset(B){this._offset.copyFrom(B),this._updatePadding()}get offset(){return this._offset}get resolution(){return this._resolution}set resolution(B){this._resolution=B,this._tintFilter&&(this._tintFilter.resolution=B),this._blurFilter&&(this._blurFilter.resolution=B)}get distance(){return this._distance}set distance(B){core.utils.deprecation("5.3.0","DropShadowFilter distance is deprecated, use offset"),this._distance=B,this._updatePadding(),this._updateShift()}get rotation(){return this.angle/core.DEG_TO_RAD}set rotation(B){core.utils.deprecation("5.3.0","DropShadowFilter rotation is deprecated, use offset"),this.angle=B*core.DEG_TO_RAD,this._updateShift()}get alpha(){return this._tintFilter.uniforms.alpha}set alpha(B){this._tintFilter.uniforms.alpha=B}get color(){return core.utils.rgb2hex(this._tintFilter.uniforms.color)}set color(B){core.utils.hex2rgb(B,this._tintFilter.uniforms.color)}get kernels(){return this._blurFilter.kernels}set kernels(B){this._blurFilter.kernels=B}get blur(){return this._blurFilter.blur}set blur(B){this._blurFilter.blur=B,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(B){this._blurFilter.quality=B}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(B){this._blurFilter.pixelSize=B}};let F=o$3;F.defaults={offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:core.settings.FILTER_RESOLUTION};var p$1=`attribute vec2 aVertexPosition;
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
`;const c$3=class extends core.Filter{constructor(B){super(p$1,M),this.offset=100,this.fillMode=c$3.TRANSPARENT,this.average=!1,this.seed=0,this.minSize=8,this.sampleSize=512,this._slices=0,this._offsets=new Float32Array(1),this._sizes=new Float32Array(1),this._direction=-1,this.uniforms.dimensions=new Float32Array(2),this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=core.Texture.from(this._canvas,{scaleMode:core.SCALE_MODES.NEAREST}),Object.assign(this,c$3.defaults,B)}apply(B,U,X,Y){const{width:Z,height:J}=U.filterFrame;this.uniforms.dimensions[0]=Z,this.uniforms.dimensions[1]=J,this.uniforms.aspect=J/Z,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,B.applyFilter(this,U,X,Y)}_randomizeSizes(){const B=this._sizes,U=this._slices-1,X=this.sampleSize,Y=Math.min(this.minSize/X,.9/this._slices);if(this.average){const Z=this._slices;let J=1;for(let nt=0;nt<U;nt++){const lt=J/(Z-nt),ct=Math.max(lt*(1-Math.random()*.6),Y);B[nt]=ct,J-=ct}B[U]=J}else{let Z=1;const J=Math.sqrt(1/this._slices);for(let nt=0;nt<U;nt++){const lt=Math.max(J*Z*Math.random(),Y);B[nt]=lt,Z-=lt}B[U]=Z}this.shuffle()}shuffle(){const B=this._sizes,U=this._slices-1;for(let X=U;X>0;X--){const Y=Math.random()*X>>0,Z=B[X];B[X]=B[Y],B[Y]=Z}}_randomizeOffsets(){for(let B=0;B<this._slices;B++)this._offsets[B]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const B=this.sampleSize,U=this.texture,X=this._canvas.getContext("2d");X.clearRect(0,0,8,B);let Y,Z=0;for(let J=0;J<this._slices;J++){Y=Math.floor(this._offsets[J]*256);const nt=this._sizes[J]*B,lt=Y>0?Y:0,ct=Y<0?-Y:0;X.fillStyle=`rgba(${lt}, ${ct}, 0, 1)`,X.fillRect(0,Z>>0,B,nt+1>>0),Z+=nt}U.baseTexture.update(),this.uniforms.displacementMap=U}set sizes(B){const U=Math.min(this._slices,B.length);for(let X=0;X<U;X++)this._sizes[X]=B[X]}get sizes(){return this._sizes}set offsets(B){const U=Math.min(this._slices,B.length);for(let X=0;X<U;X++)this._offsets[X]=B[X]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(B){this._slices!==B&&(this._slices=B,this.uniforms.slices=B,this._sizes=this.uniforms.slicesWidth=new Float32Array(B),this._offsets=this.uniforms.slicesOffset=new Float32Array(B),this.refresh())}get direction(){return this._direction}set direction(B){if(this._direction===B)return;this._direction=B;const U=B*core.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(U),this.uniforms.cosDir=Math.cos(U)}get red(){return this.uniforms.red}set red(B){this.uniforms.red=B}get green(){return this.uniforms.green}set green(B){this.uniforms.green=B}get blue(){return this.uniforms.blue}set blue(B){this.uniforms.blue=B}destroy(){var B;(B=this.texture)==null||B.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};let l$4=c$3;l$4.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},l$4.TRANSPARENT=0,l$4.ORIGINAL=1,l$4.LOOP=2,l$4.CLAMP=3,l$4.MIRROR=4;var f$3=`attribute vec2 aVertexPosition;
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
`;const e=class extends core.Filter{constructor($){const B=Object.assign({},e.defaults,$),{outerStrength:U,innerStrength:X,color:Y,knockout:Z,quality:J,alpha:nt}=B,lt=Math.round(B.distance);super(f$3,p.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/J/lt).toFixed(7)}`).replace(/__DIST__/gi,`${lt.toFixed(0)}.0`)),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.uniforms.alpha=1,Object.assign(this,{color:Y,outerStrength:U,innerStrength:X,padding:lt,knockout:Z,alpha:nt})}get color(){return core.utils.rgb2hex(this.uniforms.glowColor)}set color($){core.utils.hex2rgb($,this.uniforms.glowColor)}get outerStrength(){return this.uniforms.outerStrength}set outerStrength($){this.uniforms.outerStrength=$}get innerStrength(){return this.uniforms.innerStrength}set innerStrength($){this.uniforms.innerStrength=$}get knockout(){return this.uniforms.knockout}set knockout($){this.uniforms.knockout=$}get alpha(){return this.uniforms.alpha}set alpha($){this.uniforms.alpha=$}};let l$3=e;l$3.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1,alpha:1};var v$1=`attribute vec2 aVertexPosition;
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

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;const a$3=class extends core.Filter{constructor(B){super(v$1,x.replace("${perlin}",f$2)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const U=Object.assign(a$3.defaults,B);this._angleLight=new core.Point,this.angle=U.angle,this.gain=U.gain,this.lacunarity=U.lacunarity,this.alpha=U.alpha,this.parallel=U.parallel,this.center=U.center,this.time=U.time}apply(B,U,X,Y){const{width:Z,height:J}=U.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=Z,this.uniforms.dimensions[1]=J,this.uniforms.aspect=J/Z,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,B.applyFilter(this,U,X,Y)}get angle(){return this._angle}set angle(B){this._angle=B;const U=B*core.DEG_TO_RAD;this._angleLight.x=Math.cos(U),this._angleLight.y=Math.sin(U)}get gain(){return this.uniforms.gain}set gain(B){this.uniforms.gain=B}get lacunarity(){return this.uniforms.lacunarity}set lacunarity(B){this.uniforms.lacunarity=B}get alpha(){return this.uniforms.alpha}set alpha(B){this.uniforms.alpha=B}};let r$4=a$3;r$4.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};var i$5=`attribute vec2 aVertexPosition;
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
`;const t=class extends core.Filter{constructor($){super(i$5,s$4),this._hue=0;const B=Object.assign({},t.defaults,$);Object.assign(this,B)}get hue(){return this._hue}set hue($){this._hue=$,this.uniforms.uHue=this._hue*(Math.PI/180)}get alpha(){return this.uniforms.uAlpha}set alpha($){this.uniforms.uAlpha=$}get colorize(){return this.uniforms.uColorize}set colorize($){this.uniforms.uColorize=$}get lightness(){return this.uniforms.uLightness}set lightness($){this.uniforms.uLightness=$}get saturation(){return this.uniforms.uSaturation}set saturation($){this.uniforms.uSaturation=$}};let n$2=t;n$2.defaults={hue:0,saturation:0,lightness:0,colorize:!1,alpha:1};var l$2=`attribute vec2 aVertexPosition;
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
`;const s$3=class extends core.Filter{constructor(B,U=0){super(l$2,d$2),this.seed=0,this.uniforms.dimensions=new Float32Array(2),typeof B=="number"?(this.seed=B,B=void 0):this.seed=U,Object.assign(this,s$3.defaults,B)}apply(B,U,X,Y){var Z,J;this.uniforms.dimensions[0]=(Z=U.filterFrame)==null?void 0:Z.width,this.uniforms.dimensions[1]=(J=U.filterFrame)==null?void 0:J.height,this.uniforms.seed=this.seed,B.applyFilter(this,U,X,Y)}set sepia(B){this.uniforms.sepia=B}get sepia(){return this.uniforms.sepia}set noise(B){this.uniforms.noise=B}get noise(){return this.uniforms.noise}set noiseSize(B){this.uniforms.noiseSize=B}get noiseSize(){return this.uniforms.noiseSize}set scratch(B){this.uniforms.scratch=B}get scratch(){return this.uniforms.scratch}set scratchDensity(B){this.uniforms.scratchDensity=B}get scratchDensity(){return this.uniforms.scratchDensity}set scratchWidth(B){this.uniforms.scratchWidth=B}get scratchWidth(){return this.uniforms.scratchWidth}set vignetting(B){this.uniforms.vignetting=B}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(B){this.uniforms.vignettingAlpha=B}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(B){this.uniforms.vignettingBlur=B}get vignettingBlur(){return this.uniforms.vignettingBlur}};let r$3=s$3;r$3.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3};var u$2=`attribute vec2 aVertexPosition;
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
`;const r$2=class extends core.Filter{constructor(B=1,U=0,X=.1,Y=1,Z=!1){super(u$2,c$2.replace(/\$\{angleStep\}/,r$2.getAngleStep(X))),this._thickness=1,this._alpha=1,this._knockout=!1,this.uniforms.uThickness=new Float32Array([0,0]),this.uniforms.uColor=new Float32Array([0,0,0,1]),this.uniforms.uAlpha=Y,this.uniforms.uKnockout=Z,Object.assign(this,{thickness:B,color:U,quality:X,alpha:Y,knockout:Z})}static getAngleStep(B){const U=Math.max(B*r$2.MAX_SAMPLES,r$2.MIN_SAMPLES);return(Math.PI*2/U).toFixed(7)}apply(B,U,X,Y){this.uniforms.uThickness[0]=this._thickness/U._frame.width,this.uniforms.uThickness[1]=this._thickness/U._frame.height,this.uniforms.uAlpha=this._alpha,this.uniforms.uKnockout=this._knockout,B.applyFilter(this,U,X,Y)}get alpha(){return this._alpha}set alpha(B){this._alpha=B}get color(){return core.utils.rgb2hex(this.uniforms.uColor)}set color(B){core.utils.hex2rgb(B,this.uniforms.uColor)}get knockout(){return this._knockout}set knockout(B){this._knockout=B}get thickness(){return this._thickness}set thickness(B){this._thickness=B,this.padding=B}};let i$4=r$2;i$4.MIN_SAMPLES=1,i$4.MAX_SAMPLES=100;var m$1=`attribute vec2 aVertexPosition;
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
`;const i$3=class extends core.Filter{constructor(B){super(m$1,s$2),this.time=0,this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,i$3.defaults,B)}apply(B,U,X,Y){var Z,J;this.uniforms.dimensions[0]=(Z=U.filterFrame)==null?void 0:Z.width,this.uniforms.dimensions[1]=(J=U.filterFrame)==null?void 0:J.height,this.uniforms.time=this.time,B.applyFilter(this,U,X,Y)}set mirror(B){this.uniforms.mirror=B}get mirror(){return this.uniforms.mirror}set boundary(B){this.uniforms.boundary=B}get boundary(){return this.uniforms.boundary}set amplitude(B){this.uniforms.amplitude[0]=B[0],this.uniforms.amplitude[1]=B[1]}get amplitude(){return this.uniforms.amplitude}set waveLength(B){this.uniforms.waveLength[0]=B[0],this.uniforms.waveLength[1]=B[1]}get waveLength(){return this.uniforms.waveLength}set alpha(B){this.uniforms.alpha[0]=B[0],this.uniforms.alpha[1]=B[1]}get alpha(){return this.uniforms.alpha}};let o$2=i$3;o$2.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0};var s$1=`attribute vec2 aVertexPosition;
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
`;const n$1=class extends core.Filter{constructor(B=[0,0],U,X=0){super(s$1,f$1),this.center=B,Object.assign(this,n$1.defaults,U),this.time=X}apply(B,U,X,Y){this.uniforms.time=this.time,B.applyFilter(this,U,X,Y)}get center(){return this.uniforms.center}set center(B){this.uniforms.center=B}get amplitude(){return this.uniforms.amplitude}set amplitude(B){this.uniforms.amplitude=B}get wavelength(){return this.uniforms.wavelength}set wavelength(B){this.uniforms.wavelength=B}get brightness(){return this.uniforms.brightness}set brightness(B){this.uniforms.brightness=B}get speed(){return this.uniforms.speed}set speed(B){this.uniforms.speed=B}get radius(){return this.uniforms.radius}set radius(B){this.uniforms.radius=B}};let i$2=n$1;i$2.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1};var m=`attribute vec2 aVertexPosition;
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
`;let l$1=class extends core.Filter{constructor(B){var U,X;super(m,c$1),this.uniforms.blur=B.blur,this.uniforms.gradientBlur=B.gradientBlur,this.uniforms.start=(U=B.start)!=null?U:new core.Point(0,window.innerHeight/2),this.uniforms.end=(X=B.end)!=null?X:new core.Point(600,window.innerHeight/2),this.uniforms.delta=new core.Point(30,30),this.uniforms.texSize=new core.Point(window.innerWidth,window.innerHeight),this.updateDelta()}updateDelta(){this.uniforms.delta.x=0,this.uniforms.delta.y=0}get blur(){return this.uniforms.blur}set blur(B){this.uniforms.blur=B}get gradientBlur(){return this.uniforms.gradientBlur}set gradientBlur(B){this.uniforms.gradientBlur=B}get start(){return this.uniforms.start}set start(B){this.uniforms.start=B,this.updateDelta()}get end(){return this.uniforms.end}set end(B){this.uniforms.end=B,this.updateDelta()}},a$2=class extends l$1{updateDelta(){const B=this.uniforms.end.x-this.uniforms.start.x,U=this.uniforms.end.y-this.uniforms.start.y,X=Math.sqrt(B*B+U*U);this.uniforms.delta.x=B/X,this.uniforms.delta.y=U/X}},u$1=class extends l$1{updateDelta(){const B=this.uniforms.end.x-this.uniforms.start.x,U=this.uniforms.end.y-this.uniforms.start.y,X=Math.sqrt(B*B+U*U);this.uniforms.delta.x=-U/X,this.uniforms.delta.y=B/X}};const d$1=class extends core.Filter{constructor(B,U,X,Y){super(),typeof B=="number"&&(core.utils.deprecation("5.3.0","TiltShiftFilter constructor arguments is deprecated, use options."),B={blur:B,gradientBlur:U,start:X,end:Y}),B=Object.assign({},d$1.defaults,B),this.tiltShiftXFilter=new a$2(B),this.tiltShiftYFilter=new u$1(B)}apply(B,U,X,Y){const Z=B.getFilterTexture();this.tiltShiftXFilter.apply(B,U,Z,1),this.tiltShiftYFilter.apply(B,Z,X,Y),B.returnFilterTexture(Z)}get blur(){return this.tiltShiftXFilter.blur}set blur(B){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=B}get gradientBlur(){return this.tiltShiftXFilter.gradientBlur}set gradientBlur(B){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=B}get start(){return this.tiltShiftXFilter.start}set start(B){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=B}get end(){return this.tiltShiftXFilter.end}set end(B){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=B}};let h=d$1;h.defaults={blur:100,gradientBlur:600,start:void 0,end:void 0};var i$1=`attribute vec2 aVertexPosition;
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
`,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,c=($,B)=>{var U={};for(var X in $)d.call($,X)&&B.indexOf(X)<0&&(U[X]=$[X]);if($!=null&&i)for(var X of i($))B.indexOf(X)<0&&f.call($,X)&&(U[X]=$[X]);return U};const a=class extends core.Filter{constructor($){const B=Object.assign(a.defaults,$),{maxKernelSize:U}=B,X=c(B,["maxKernelSize"]);super(l,u.replace("${maxKernelSize}",U.toFixed(1))),Object.assign(this,X)}get center(){return this.uniforms.uCenter}set center($){this.uniforms.uCenter=$}get strength(){return this.uniforms.uStrength}set strength($){this.uniforms.uStrength=$}get innerRadius(){return this.uniforms.uInnerRadius}set innerRadius($){this.uniforms.uInnerRadius=$}get radius(){return this.uniforms.uRadius}set radius($){($<0||$===1/0)&&($=-1),this.uniforms.uRadius=$}};let o$1=a;o$1.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32};const Touchable=($,B)=>class extends ${constructor(){super(...arguments);ft(this,"isHover",!1)}hoverIn(){}hoverOut(){}onPress(){}update(){var Z;if(super.update&&super.update(),!this.visible)return;const Y=B(this);!this.isHover&&Y&&(this.isHover=!0,(Z=globalThis.customUpdater)==null||Z.waitFor(()=>!0,()=>{this.isHover&&this.hoverIn()})),this.isHover&&!Y&&(this.isHover=!1,this.hoverOut()),Y&&TouchInput.isTriggered()&&this.onPress()}},spriteCheckTouched=$=>{const B=new Point(TouchInput.x,TouchInput.y);return $.containsPoint(B)},windowCheckTouched=$=>$.getBounds().contains(TouchInput.x,TouchInput.y),TouchableSprite=Touchable(Sprite,spriteCheckTouched),renderContainerTexture=$=>{const{x:B,y:U}=$,X=PIXI.RenderTexture.create({width:$.width,height:$.height,scaleMode:PIXI.SCALE_MODES.LINEAR,resolution:1});Graphics.app.renderer.render($,X,!0,new PIXI.Matrix().translate(-B,-U));const{destroy:Y}=X;return X.destroy=function(Z){Z&&console.log("renderTexture destroy method had been overwrite"),Y.apply(X,[!0])},X},tintTexture=($,B)=>{const U=PIXI.Sprite.from($),X=new PIXI.filters.ColorMatrixFilter;X.matrix=B,U.filters=[X];const Y=renderContainerTexture(U);return U.destroy(),Y},randomColorBetween=($,B)=>{const U=PIXI.utils.hex2rgb($),X=PIXI.utils.hex2rgb(B),Y=Math.random()*(X[0]-U[0])+U[0],Z=Math.random()*(X[1]-U[1])+U[1],J=Math.random()*(X[2]-U[2])+U[2];return PIXI.utils.rgb2hex([Y,Z,J])},createEmptyBackground=($,B)=>new PIXI.Graphics().beginFill(0,0).drawRect(0,0,$,B).endFill(),hitTestArea=($,B)=>{const U=$.x+$.width,X=$.y+$.height,Y=B.x+B.width,Z=B.y+B.height;return $.x<Y&&U>B.x&&$.y<Z&&X>B.y};class FragParticle extends PIXI.Sprite{constructor(){super(...arguments);ft(this,"vx",0);ft(this,"vy",0);ft(this,"g",.8);ft(this,"isFinish",!1)}update(){this.isFinish||(this.alpha>.1&&(this.alpha-=.02),this.x+=this.vx,this.y+=this.vy,this.vy+=this.g,this.rotation+=this.vx/10*Math.PI,this.y>Graphics.app.renderer.height&&(this.isFinish=!0))}}const explodeRange=5,breakEffect=$=>{var lt;playSe("Break");const B=16,U=getPuzzle(),X=U.toLocal($.toGlobal($.position)),Y=renderContainerTexture($),Z=Y.baseTexture,J=new PIXI.ParticleContainer(500,{tint:!0}),nt=[];for(let ct=0;ct<$.width/B+1;ct++)for(let mt=0;mt<$.height/B+1;mt++){const yt=new PIXI.Rectangle(ct*B,mt*B,Math.min(B,$.width-ct*B),Math.min(B,$.height-mt*B)),Rt=new PIXI.Texture(Z,yt),bt=new FragParticle(Rt),Wt=((ct+.5)*B/$.width-.5)*2,Ut=((mt+.5)*B/$.height-.5)*2;bt.vx=lodashExports.random(-1+Wt,1+Wt)*explodeRange,bt.vy=lodashExports.random(-1+Ut,1+Ut)*explodeRange,bt.x=X.x+ct*B,bt.y=X.y+mt*B,J.addChild(bt),nt.push(bt)}return $.visible=!1,shakeScreen(void 0,void 0,void 0,void 0,U.map),U.addChild(J),(lt=globalThis.customUpdater)==null||lt.add(({remove:ct})=>{nt.forEach(yt=>yt.update()),nt.every(yt=>yt.isFinish)&&ct()},{onDestroy:()=>{U.removeChild(J),J.destroy({children:!0,texture:!0}),Y.destroy()}}),$},TouchableClass=Touchable(Sprite,$=>{const B=new Point(TouchInput.x,TouchInput.y);return $.graphics.containsPoint(B)});class EnemySkill extends TouchableClass{constructor(U,X){super(new Bitmap(0,0));ft(this,"puzzle");ft(this,"index",null);ft(this,"config");ft(this,"graphics",new PIXI.Graphics);ft(this,"countdown");ft(this,"active",!0);ft(this,"removeFromMap",()=>{if(this._destroyed||(this.puzzle.map.removeChild(this),!this.index))return;this.getUnits().forEach(X=>{lodashExports.pull(X.filledSprite,this),X.status=lodashExports.last(X.status.split("_"))}),this.destroy(),this.config.onRemoveFromMap&&this.config.onRemoveFromMap(this.puzzle)});this.puzzle=X,this.config=U,this.countdown=U.countdown,this.addChild(this.graphics),this.drawSkill()}drawSkill(){const U=getAssetTexture(getEnemySkillPath("enemy",this.countdown));this.graphics.clear(),this.graphics.beginTextureFill({texture:U}),drawPuzzle(this.config.shape,[this.graphics]),this.graphics.endFill()}setToMap(U){this.index=U;const{position:X}=this.puzzle.map.getUnitByIndex(...U);this.position=X,this.getUnits().forEach(Z=>Z.status=UNIT_STATUS.enemy_empty),this.puzzle.map.addChild(this),this.config.onSetToMap&&this.config.onSetToMap(this.puzzle)}getUnits(){if(!this.index)return[];const U=[],[X,Y]=this.index;return this.config.shape.forEach((Z,J)=>{Z.forEach((nt,lt)=>{if(!nt)return;const ct=this.puzzle.map.getUnitByIndex(X+J,Y+lt);U.push(ct)})}),U}checkAllFilled(){return this.getUnits().every(X=>X.status===UNIT_STATUS.enemy_block)}beforeTurnStart(){if(!(this.countdown<=0)){if(this.checkAllFilled()){breakEffect(this.graphics),this.removeFromMap();return}this.countdown-=1,this.countdown<=0&&this.config.beforeCastSkill&&this.config.beforeCastSkill(this.puzzle)}}processRound(){this.isDestroyed()||(this.config.onTurnProcess&&this.config.onTurnProcess(this.puzzle),this.drawSkill(),this.countdown<=0&&this.castSkill())}castSkill(){if(!this.active)return;const U=getFirstEnemy();U&&(this.config.onCastSkill&&this.config.onCastSkill(this.puzzle),waitAction(),addStageEventListenerOnce(STAGE_EVENT.enemyActionEnd,()=>{this.config.onCastSkillEnd&&this.config.onCastSkillEnd(this.puzzle),this.puzzle.heroine.updateStatus();const X=getEnemySkillDialogues(),Y=getState(this.puzzle,{skillId:this.config.id}),Z=getTextFromPool(X,Y);Z&&($gameMessage.add(Z.text),waitMessage(50),this.puzzle.battleController.battleLog.push({actor:U,skillId:this.config.id,text:Z})),this.removeFromMap()}))}hoverIn(){this.filters=[new l$3],this.puzzle.helpWindow.addText(this.config.description(this.puzzle))}hoverOut(){this.filters=null,this.puzzle.battleController.enemySkills.some(X=>X.isHover)||this.puzzle.helpWindow.drawHeroineStatusText()}}const mapValueWithId=$=>lodashExports.mapValues($,(B,U)=>({...B,id:U})),setEnemyPuzzleToIndex=($,B)=>{const U=getPuzzle(),X=getEnemySkill($),{battleController:Y,map:Z}=U;if(!checkPuzzleValid(Z,X.shape,B))return;const nt=new EnemySkill(X,U);nt.setToMap(B),Y.enemySkills.push(nt)},setEnemyPuzzleToRandomIndex=$=>{const B=getPuzzle(),U=getEnemySkill($),{battleController:X,map:Y}=B,Z=getAllValidIndex(U.shape,Y),J=lodashExports.sample(Z);if(!J)return;const nt=new EnemySkill(U,B);return nt.setToMap(J),X.enemySkills.push(nt),nt},normalUncle={shape:[[0,0,0,0,0,0,0,0,0],[0,0,1,1,0,1,1,0,0],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],background:"uncle1",otherAssets:["ticrf-icon"],name:"普通大叔",unitsTexture:{1:"red",0:"grey"},onSet:($,B)=>{B.background.position.set(50,40)},processTurn:()=>{const $=getTurnCount();$%3===0&&setEnemyPuzzleToRandomIndex(21),$%2===0&&setEnemyPuzzleToIndex(22,[0,3])}},phantomThief={shape:[[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],background:"20230916",name:"怪盜亞爾斯羅",unitsTexture:{1:"red",0:"grey"},onSet:($,B)=>{B.background.texture.baseTexture.setResolution(1.5),B.background.position.set(0,-10)},onTurnStart:()=>{if(getTurnCount()===0){toggleControllable(!1);const B=setInterval(()=>{const U=setEnemyPuzzleToRandomIndex(23),X=setEnemyPuzzleToRandomIndex(23),Y=setEnemyPuzzleToRandomIndex(23);(!U||!X||!Y)&&(clearInterval(B),toggleControllable(!0))},50)}}},enemiesConfig=mapValueWithId({1:normalUncle,2:phantomThief}),bondage={shape:[[1,1,1],[0,1,0]],countdown:2,description:()=>`束縛：大叔伸出鹹豬手。
`+fontM+"倒數結束隨機封鎖一個技能。",onCastSkillEnd:$=>{const B=lodashExports.sample($.menu.puzzleButtons),U=$.skills.find(mt=>mt.isDragging);U&&U.activeButton===B&&TouchInput.clear(),B.interactive=!1;const X=B.children[0],Y=getTurnCount(),{enemyConfig:Z}=$,{name:J}=Z,nt=getBattleLogWindow();nt.push("addText",`${J}架住了${Rita}。`),nt.push("wait"),nt.push("addText",`${Rita}的一個技能被封鎖了。`),battleLogWaitAndClear(nt);const lt=getAssetTexture(getOtherAsset("ticrf-icon")),ct=new PIXI.Sprite(lt);ct.scale.set(.18),ct.position.set(B.width/2-ct.width/2,X.height/2-ct.height/2),ct.filters=[new l$3],B.addChild(ct),$.battleController.delayActions.push({condition:()=>getTurnCount()>=Y+2,do:()=>{nt.push("addText",`${Rita}掙脫了束縛。`),battleLogWaitAndClear(nt),B.interactive=!0,B.isDestroyed()||B.removeChild(ct)}})}},execute={shape:[[1]],countdown:3,description:()=>`大報社：卑鄙無恥的技能。
`+fontM+`倒數結束後${Rita}敗北，沒有任何方法能避免。`,onTurnProcess:$=>{if($.battleController.delayActions.some(U=>(U==null?void 0:U.id)===99))return;const B={id:99,condition:()=>!0,do:()=>{const U=getBattleLogWindow();U.push("addText","怪盜正用精液裝填著水槍。"),battleLogWaitAndClear(U)}};$.battleController.delayActions.push(B)},onCastSkill:$=>{$.battleController.enemySkills.forEach(U=>{U.active=!1});const B=getBattleLogWindow();B.push("addText","大報社！"),B.push("wait"),B.push("addText",`${Rita}無從閃避！`),battleLogWaitAndClear(B),shakeScreen(),killParty()}},normalAttack={shape:[[1,1],[1,1]],countdown:3,description:()=>`破衣：大叔瞄準${Rita}的衣服。
`+fontM+"倒數結束隨機對衣服造成1點傷害。",beforeCastSkill:()=>toggleControllable(!1),onCastSkill:$=>{const{heroine:B,enemyConfig:U}=$,{name:X}=U,Y=getBattleLogWindow();lodashExports.random(1,B.getTotalHp())<B.upperHp+1?(B.upperHp-=1,Y.push("addText",`${X}對${Rita}的上身衣物進行攻擊。`),Y.push("wait"),B.upperHp===2&&Y.push("addText",`${Rita}的鈕扣脫落了。`),B.upperHp===1&&Y.push("addText",`${Rita}的衣服破碎了。`),B.upperHp===0&&Y.push("addText",`${Rita}的胸部露出來了！`)):(B.lowerHp-=1,Y.push("addText",`${X}對${Rita}的下身衣物進行攻擊。`),Y.push("wait"),B.lowerHp===2&&Y.push("addText",`${X}拉下${Rita}的裙子。`),B.lowerHp===1&&Y.push("addText",`${X}拿走了${Rita}的裙子。`),B.lowerHp===0&&Y.push("addText",`${X}脫下了${Rita}的內褲！`)),B.getTotalHp()===0&&(Y.push("addText",`${Rita}赤身裸體！`),Y.push("wait")),B.getTotalHp()<0&&(Y.push("addText",`${X}笑咪咪地朝${Rita}走近。`),Y.push("wait")),shakeScreen(),waitAction(60)}},enemiesSkillConfig=mapValueWithId({21:normalAttack,22:bondage,23:execute}),getSkillConfig=$=>{const B=skills.find(U=>U.id===$);if(!B)throw new Error("skill config not found, id: "+$);return B},getSkillDialogues=()=>skillDialogues,getEnemySkillDialogues=()=>enemySkillDialogues,getEnemyConfig=$=>{const B=enemiesConfig[$];if(!B)throw new Error("enemy config not found, id: "+$);return B},getEnemySkill=$=>{const B=enemiesSkillConfig[$];if(!B)throw new Error("enemySkill config not found, id: "+$);return B},imageConfig={Rita:{figures:{1:"20230904-1",2:"20230904-2"},faces:{1:"20230904-2ICON",2:"20230904-3ICON",3:"20230904-4ICON"}}},getStatusText=$=>$>.9?"\\N[1]一臉不屑。":$>.7?Rita+"的表情稍微有些不安。":$>.4?Rita+"眼角有淚光。":$>0?Rita+"好像快哭出來了！":$===0?Rita+"驚慌失措。":Rita+"大失敗！",getClothesStatusText=$=>{let B=[];const{upperHp:U,lowerHp:X}=$;return U===$.maxUpperHp?B.push(Rita+"的上衣完好無缺。"):U>1?B.push(Rita+"的上衣稍有破損。"):U===1?B.push(Rita+"的上衣被撕裂了！"):B.push(Rita+"用手遮擋赤裸的胸部。"),X===$.maxLowerHp?B.push(Rita+"的裙子乾淨整齊。"):X>1?B.push(Rita+"的裙子有些凌亂。"):X===1?B.push(Rita+"的裙子快撐不住了！"):B.push(Rita+"摀著暴露的下體。"),!U&&!X&&(B=[`${Rita}赤身裸體。`,"已經沒有什麼可以從大叔的魔掌保護她了！"]),B},getFigurePath=($,B)=>`img/pictures/figures/${lodashExports.get(imageConfig[$].figures,B)}`,getSkillPath=$=>`img/pictures/skills/${getSkillConfig($).texture}`,getEnemyImagePath=()=>{const $=$gameTroop.troop().id;return`img/enemies/${getEnemyConfig($).background}`},getEnemyUnitPath=$=>{const B=$gameTroop.troop().id;return`img/pictures/units/${getEnemyConfig(B).unitsTexture[$]}`},getRtEnemyUnitPath=($,B)=>`enemyMapUnit/${$}/${B}`,getEnemySkillPath=($,B)=>`img/pictures/enemySkills/${$}_${B}`,getOtherAsset=$=>`img/pictures/others/${$}`,cache=new Map,getAssetTexture=$=>{const B=cache.get($);if(B)return B;const U=ImageManager.loadMsgkAssets($),X=new PIXI.Texture(U.baseTexture);return cache.set($,X),X},setAssetTexture=($,B)=>{cache.set($,B)},clearCache=()=>{getAssetTexture(getFigurePath("Rita",1)).baseTexture.setResolution(1),getAssetTexture(getFigurePath("Rita",2)).baseTexture.setResolution(1),cache.forEach($=>$.destroy()),cache.clear()};class PuzzleMapUnit extends PIXI.Sprite{constructor({id:U,size:X,index:Y}){super();ft(this,"id");ft(this,"status");ft(this,"index");ft(this,"isHover",!1);ft(this,"filledSprite",[]);this.index=Y,this.status=UNIT_STATUS.empty,this.id=U,this.width=X,this.height=X,this.texture=getAssetTexture(getRtEnemyUnitPath(U,"normal"))}onHover(U){this.isHover=!0,U?this.texture=getAssetTexture(getRtEnemyUnitPath(this.id,"positive")):this.texture=getAssetTexture(getRtEnemyUnitPath(this.id,"negative"))}onHoverOut(){this.isHover=!1,this.texture=getAssetTexture(getRtEnemyUnitPath(this.id,"normal"))}onFill(U){this.status=this.status.replace("empty","block"),this.interactive=!1,this.filledSprite.push(U)}getCenter(U){return U.toLocal(U.position,this).add(new Point(this.width/2,this.height/2))}}class PuzzleMap extends Touchable(Window_Base,windowCheckTouched){constructor(U,X){super(new Rectangle(0,0,0,0));ft(this,"puzzle");ft(this,"units");ft(this,"shape");ft(this,"background");ft(this,"getUnitByIndex",(U,X)=>this.units.children[U*this.shape[0].length+X]);this.position.set(CONFIG.map.offsetX,CONFIG.map.offsetY),this.puzzle=X;const{shape:Y}=U;this.shape=Y;const Z=getAssetTexture(getEnemyImagePath());this.background=new PIXI.Sprite(Z),this.addChild(this.background);const J=new PIXI.Container;this.units=J,J.alpha=.6,this.addChild(this.units),Y.forEach((nt,lt)=>nt.forEach((ct,mt)=>{const yt=new PuzzleMapUnit({id:ct,size:CONFIG.map.unitSize,index:[mt,lt]});yt.x=mt*CONFIG.map.unitSize,yt.y=lt*CONFIG.map.unitSize,this.units.addChild(yt)})),U.onSet&&U.onSet(X,this)}hoverIn(){this.units.alpha=.8}hoverOut(){this.units.alpha=.6}resetHover(){this.units.children.forEach(U=>U.onHoverOut())}update(){updateShake(this,CONFIG.map.offsetX),super.update()}}const DRAG_EVENT={start:"dragstart",move:"dragmove",end:"dragend",reset:"dragreset"};class DraggableContainer extends Sprite{constructor(){super(new Bitmap(0,0));ft(this,"isDragging",!1);ft(this,"pointerOffset",new Point(0,0));ft(this,"originalPos",new Point(0,0));this.interactive=!0,this.cursor="pointer"}onDragStart(){this.isDragging=!0;const U=this.getTouchPoint(),X=this.getGlobalPosition();this.pointerOffset=U.subtract(X),this.originalPos=new Point(this.x,this.y),this.emit(DRAG_EVENT.start,this)}onDragMove(){if(!this.isDragging)return;const X=this.parent.toLocal(this.getTouchPoint()).subtract(this.pointerOffset);this.position=X,this.emit(DRAG_EVENT.move,this)}onDragEnd(){this.isDragging&&(this.isDragging=!1,this.emit(DRAG_EVENT.end,this))}dragReset(){this.isDragging=!1,this.position.set(this.originalPos.x,this.originalPos.y),this.emit(DRAG_EVENT.reset,this)}getTouchPoint(){return new Point(TouchInput.x,TouchInput.y)}update(){super.update(),this.isDragging&&TouchInput.isPressed()?this.onDragMove():this.isDragging&&TouchInput.isReleased()?this.onDragEnd():TouchInput.isTriggered()&&this.getBounds().contains(TouchInput.x,TouchInput.y)&&this.interactive&&this.onDragStart()}}class PuzzleSkill extends DraggableContainer{constructor(U,X){super();ft(this,"id");ft(this,"canDrop",!1);ft(this,"puzzleUnitsCount",0);ft(this,"graphics");ft(this,"puzzle");ft(this,"snapshot");ft(this,"activeButton",null);ft(this,"config");this.id=U,this.puzzle=X;const Y=getSkillConfig(U);this.config=Y;const Z=getAssetTexture(getSkillPath(U)),J=new PIXI.Graphics;this.graphics=J,J.beginTextureFill({texture:Z});const nt=drawPuzzle(Y.shape,[J]);this.puzzleUnitsCount=nt,J.endFill();const[lt,ct]=getShapeFirstRowAndCol(Y.shape);J.position.set(-ct*CONFIG.map.unitSize,-lt*CONFIG.map.unitSize),this.addChild(J),this.bitmap=new Bitmap(J.width,J.height),this.snapshot=renderContainerTexture(this)}checkHover(U,X){var Z;const Y=[];return U.units.children.forEach(J=>{const nt=X.toLocal(X.position,this.graphics),lt=J.getCenter(X).subtract(nt);this.graphics.geometry.containsPoint(lt)&&Y.push(J)}),this.canDrop=BattleManager.isInputting()&&!!((Z=this.activeButton)!=null&&Z.interactive)&&Y.length===this.puzzleUnitsCount&&Y.every(J=>J.status===UNIT_STATUS.empty||J.status===UNIT_STATUS.enemy_empty),Y}reset(){this.activeButton=null,this.dragReset()}destroy(U){this.snapshot.destroy(),super.destroy(U)}}class PuzzleButton extends TouchableSprite{constructor(U){super(new Bitmap(0,0));ft(this,"puzzle");ft(this,"puzzleSkill");ft(this,"vy",0);this.interactive=!0,this.interactiveChildren=!1,this.cursor="pointer",this.puzzleSkill=U,this.puzzle=U.puzzle;const X=U.snapshot,Y=new PIXI.Sprite(X);this.addChild(Y),Y.scale.set(.6),Y.anchor.set(.5);const Z=new PIXI.Text(U.config.displayName,new PIXI.TextStyle({fontSize:80,fontWeight:"bold",fill:16777215}));Z.scale.set(.2),Z.anchor.set(.5,0);const J=8;this.bitmap=new Bitmap(Y.width+72,Y.height+2*J+Z.height),this.pivot.set(this.width/2,this.height/2),Y.position.set(this.width/2,(this.height-Z.height)/2),Z.position.set(this.width/2,this.height-Z.height),this.addChild(Z)}onPress(){this.interactive&&(this.scale.set(1),this.puzzleSkill.move(TouchInput.x-this.puzzleSkill.width/2/CONFIG.menu.btnHoverScale,TouchInput.y-this.puzzleSkill.height/2/CONFIG.menu.btnHoverScale),this.puzzleSkill.onDragStart(),this.puzzleSkill.activeButton=this)}hoverIn(){this.puzzle.helpWindow.addText(this.puzzleSkill.config.description),this.interactive&&this.scale.set(CONFIG.menu.btnHoverScale)}hoverOut(){this.puzzle.helpWindow.drawHeroineStatusText(),this.interactive&&this.scale.set(1)}destroy(){const U=this.removeChildAt(1),X=this.removeChildAt(0);U.destroy({children:!0,texture:!0,baseTexture:!0}),X.destroy({children:!0}),super.destroy()}}class PuzzleMenu extends Window_Base{constructor(U,X){const Y=CONFIG.menu.width,Z=Graphics.boxHeight,J=Graphics.boxWidth-Y+CONFIG.common.appPaddingY,nt=CONFIG.common.appPaddingY;super(new Rectangle(J,nt,Y,Z));ft(this,"puzzle");ft(this,"puzzleSkills");ft(this,"puzzleButtons",[]);ft(this,"shouldRefreshBtnPos",!1);this.puzzle=X,this.puzzleSkills=U,this.removeInvalidSkills();for(let lt=0;lt<5;lt++){const ct=this.addRandomSkillBtn();ct&&(ct.y-=lt*100)}}addRandomSkillBtn(){if(lodashExports.isEmpty(this.puzzleSkills))return;const U=lodashExports.countBy(this.puzzleButtons,J=>J.puzzleSkill.id),Y=!!U[1]?randomByWeight(this.puzzleSkills,J=>{const nt=1-U[J.id]*.1||1;return J.config.weight*nt}):this.puzzle.skills.find(J=>J.id===1),Z=new PuzzleButton(Y);return Z.x=this.width/2,Z.y=-CONFIG.map.unitSize,this.puzzleButtons.unshift(Z),this.addChild(Z),this.shouldRefreshBtnPos=!0,Z}removeSkillBtn(U){lodashExports.pull(this.puzzleButtons,U),this.removeChild(U),U.destroy(),this.shouldRefreshBtnPos=!0}removeInvalidSkills(){const U=this.puzzleSkills.filter(X=>getFirstValidIndex(X.config.shape,this.puzzle.map,Y=>(Y==null?void 0:Y.status)===UNIT_STATUS.empty||(Y==null?void 0:Y.status)===UNIT_STATUS.enemy_empty));this.puzzleSkills=U,this.puzzleButtons.filter(X=>!U.includes(X.puzzleSkill)).forEach(X=>{this.removeSkillBtn(X),this.addRandomSkillBtn()})}getButtonTargetPosY(U){const X=this.height-2*CONFIG.menu.paddingY;return U*(X/5)+CONFIG.menu.paddingY+CONFIG.map.unitSize}close(){super.close(),this.puzzleButtons.forEach(U=>U.hide())}open(){var U;super.open(),(U=globalThis.customUpdater)==null||U.waitFor(()=>this.isOpen(),()=>this.puzzleButtons.forEach(X=>X.show()))}get openness(){return this._openness}set openness(U){this._openness!==U&&(this._openness=lodashExports.clamp(U,0,255),this._container.scale.x=this._openness/255,this._container.x=this.width*(1-this._openness/255))}update(){if(super.update(),!this.shouldRefreshBtnPos)return;let U=0;this.puzzleButtons.forEach((X,Y)=>{const Z=this.getButtonTargetPosY(Y);if(Z-X.y>0){X.vy+=1,X.y+=Math.min(X.vy,25),U++;return}X.vy=0,X.y=Z}),this.shouldRefreshBtnPos=!!U}}let lastSide=-1;const randomStartPoint=($,B)=>{const U=lodashExports.sample([0,1,2,3].filter(X=>X!==lastSide));return lastSide=U,U===0?new PIXI.Point(lodashExports.random(0,B.width),-$.height):U===1?new PIXI.Point(B.width,lodashExports.random(0,B.height)):U===2?new PIXI.Point(lodashExports.random(0,B.width),B.height):new PIXI.Point(-$.width,lodashExports.random(0,B.height))},addRecallText=($,B)=>{var yt;const U=B.children[0],X=B.children[1],Y=(Graphics.boxWidth-X.width-50)/2,Z=new PIXI.TextStyle({fontSize:lodashExports.random(36,72),fontWeight:"bold",fill:randomColorBetween(3355443,13421772),stroke:1118481,strokeThickness:4,align:"center"}),J=new PIXI.Text($,Z);J.width>Y&&J.scale.set(Y/J.width);const nt=randomStartPoint(J,U);J.position=nt,B.addChild(J);const ct=new PIXI.Point(U.width/2,U.height/2).subtract(J.position.add(new PIXI.Point(J.width/2,J.height/2))).normalize();let mt=0;return(yt=globalThis.customUpdater)==null||yt.add(({remove:Rt,delta:bt})=>{mt>1.1?(shakeScreen(5,5,1),J.destroy(),Rt()):mt>1?(mt+=bt,J.alpha-=.1,J.position=J.position.add(ct.multiplyScalar(15))):hitTestArea(J,X)?(mt+=bt,J.position=J.position.add(ct.multiplyScalar(1))):J.position=J.position.add(ct.multiplyScalar(20))}),J},cutinEffect=async $=>{const B=getPuzzle();B.heroine.hide(),B.helpWindow.close(),toggleControllable(!1);const U=new PIXI.Container;mockUpdate(U),B.addChild(U);const X=getAssetTexture(getFigurePath("Rita",1)),Y=PIXI.Sprite.from(X);Y.scale.set(1.25),Y.x=-100,Y.y=-50,Y.filters=[new i$4(15,12298922)];const Z=new PIXI.Container,J=PIXI.Sprite.from(PIXI.Texture.WHITE);J.filters=[new i$4(15,3346705)],J.tint=14492194,J.width=350,J.height=1200,Z.addChild(J),Z.addChild(Y),Z.x=Graphics.boxWidth/2-Z.width/2,U.addChild(Z),await waitForAsync(({totalTime:bt})=>bt>1.2),U.removeChild(Z),B.map.visible=!1;const nt=getAssetTexture(getEnemyImagePath()),lt=PIXI.Sprite.from(nt.clone());lt.scale.set(1.5),lt.x=Graphics.boxWidth/2-lt.width/2,lt.filters=[new i$4(20,1118481)],shouldSyncShakeScreen(lt),U.addChild(lt);const ct=new PIXI.Container,mt=createEmptyBackground(Graphics.boxWidth,Graphics.boxHeight),yt=createEmptyBackground(300,300);yt.position.set((mt.width-yt.width)/2,(mt.height-yt.height)/2),ct.addChild(mt),ct.addChild(yt),U.addChild(ct);for(let bt=0;bt<$.length;bt++)await waitForAsync(({totalTime:Wt})=>Wt>.3),addRecallText($[bt],ct);const Rt=()=>{B.heroine.show(),B.helpWindow.open(),B.map.visible=!0,toggleControllable(!0),U.destroy({children:!0,texture:!0})};await waitForAsync(()=>ct.children.length===2),Rt()};class BattleController{constructor($){ft(this,"puzzle");ft(this,"enemySkills",[]);ft(this,"delayActions",[]);ft(this,"battleLog",[]);ft(this,"onAttackSuccess",$=>{if(!BattleManager.isInputting())return;const{skillId:B,unitTypes:U}=$,X=getSkillConfig(B);if(!X)return;const Y=U.some(nt=>nt>0);Y&&forcePartyAction(X.id);const Z=this.showText($),J=getHeroineRm();this.battleLog.push({actor:J,skillId:B,text:Z,hasDamage:Y}),startProcessTurn()});ft(this,"processEnemyTurn",()=>{if(checkBattleEnd())return;this.enemySkills=this.enemySkills.filter(B=>!B.isDestroyed()),this.enemySkills.forEach(B=>B.processRound());const{processTurn:$}=this.puzzle.enemyConfig;$&&$(this.puzzle)});ft(this,"processDelayAction",()=>{this.delayActions.forEach(($,B)=>{!$||!$.condition(this.puzzle)||($.do(this.puzzle),this.delayActions[B]=null)}),this.delayActions=this.delayActions.filter(Boolean)});ft(this,"showText",attackParams=>{const{skillId,unitTypes}=attackParams,state=getState(this.puzzle,{skillId,unitTypes}),skillDialogues=getSkillDialogues(),textConfig=getTextFromPool(skillDialogues,state,!0);return textConfig.callback&&eval(textConfig.callback),$gameMessage.add(textConfig.text),textConfig});ft(this,"checkMapFill",()=>this.puzzle.map.units.children.every($=>$.id===0||$.status===UNIT_STATUS.block));this.puzzle=$,addStageEventListener(STAGE_EVENT.turnStart,()=>{toggleControllable(!0),this.processDelayAction();const{onTurnStart:B}=this.puzzle.enemyConfig;B&&B(this.puzzle)}),addStageEventListener(STAGE_EVENT.turnEnd,async()=>{if(this.checkMapFill()){BattleManager.pauseBattle(),toggleControllable(!1);const B=this.battleLog.filter(U=>U.hasDamage).map(U=>{var X;return((X=U.text)==null?void 0:X.text)||""}).filter(Boolean);await cutinEffect(B),BattleManager.resumeBattle(),killEnemies()}$.heroine.getTotalHp()<0&&killParty(),$.heroine.updateStatus()}),addStageEventListener(STAGE_EVENT.enemyTurn,()=>{this.processEnemyTurn()})}}class Heroine extends TouchableSprite{constructor(U){const{offsetX:X,offsetY:Y,width:Z,height:J,half:nt}=CONFIG.figure;super(new Bitmap(Z,J));ft(this,"puzzle");ft(this,"maxUpperHp",3);ft(this,"maxLowerHp",3);ft(this,"upperHp",3);ft(this,"lowerHp",3);ft(this,"getTotalHp",()=>this.upperHp+this.lowerHp);ft(this,"getMaxHp",()=>this.maxUpperHp+this.maxLowerHp);ft(this,"getHpRatio",()=>this.getTotalHp()/this.getMaxHp());ft(this,"updateStatus",()=>{const U=this.children[1],X=this.children[2];U&&(U.alpha=this.upperHp/this.maxUpperHp),X&&(X.alpha=this.lowerHp/this.maxLowerHp),this.puzzle.helpWindow.drawHeroineStatusText()});this.puzzle=U,this.x=X,this.y=Y;const lt=75,ct=75,mt=2.5,yt=getAssetTexture(getFigurePath("Rita",2));yt.baseTexture.mipmap=PIXI.MIPMAP_MODES.ON,yt.baseTexture.setResolution(mt);const Rt=getAssetTexture(getFigurePath("Rita",1));Rt.baseTexture.mipmap=PIXI.MIPMAP_MODES.ON,Rt.baseTexture.setResolution(mt);const bt=new PIXI.Sprite(yt.clone());bt.texture.frame=new PIXI.Rectangle(lt,ct,Z,J),this.addChild(bt);const Wt=new PIXI.Sprite(Rt.clone());Wt.texture.frame=new PIXI.Rectangle(lt,ct,Z,nt),this.addChild(Wt);const Ut=new PIXI.Sprite(Rt.clone());Ut.texture.frame=new PIXI.Rectangle(lt,nt+ct,Z,J-nt),Ut.y=nt,this.addChild(Ut)}hoverIn(){const U=getClothesStatusText(this);this.puzzle.helpWindow.addText(U.join(`
`))}hoverOut(){this.puzzle.helpWindow.drawHeroineStatusText()}update(){updateShake(this,CONFIG.figure.offsetX),super.update()}}class HelpWindow extends Window_Scrollable{constructor(U){super(new PIXI.Rectangle(CONFIG.map.offsetX-CONFIG.helpWindow.exceedWidth,CONFIG.common.appPaddingY,U.map.units.width+CONFIG.helpWindow.exceedWidth*2,100));ft(this,"puzzle");this.puzzle=U,this.drawHeroineStatusText()}addText(U){this.clear(),this.drawTextEx(U,0,0,this.width)}drawHeroineStatusText(){const U=this.puzzle.heroine.getHpRatio(),X=getStatusText(U);this.addText(X)}clear(){this.clearScrollStatus(),this.contents.clear()}}const commandButtonConfig={skip:{name:"跳過",symbol:"skip",description:()=>`跳過：詞窮了！
`+fontM+"沉澱一回合重新生成技能。",callback:()=>{const $=getBattleLogWindow();$.push("addText",Rita+"跳過了這回合。"),battleLogWaitAndClear($)}},suicide:{name:"跌倒",symbol:"suicide",description:()=>`跌倒：這裡怎麼會有顆石頭！
`+fontM+"一個大意血量直接歸零。"}};class BattleCommandWin extends Touchable(Window_Command,windowCheckTouched){constructor(U){const X=SceneManager._scene.calcWindowHeight(2,!0);super(new PIXI.Rectangle(Graphics.boxWidth-CONFIG.menu.width-CONFIG.battleCommandWind.width-CONFIG.battleCommandWind.padding,Graphics.height-X-CONFIG.battleCommandWind.padding-CONFIG.common.appPaddingY,CONFIG.battleCommandWind.width,X));ft(this,"puzzle");this.puzzle=U,this.close(),this.setHandler(commandButtonConfig.skip.symbol,()=>{this.close();const{callback:Y}=commandButtonConfig.skip;Y&&Y(U);const{menu:Z}=this.puzzle;[...Z.puzzleButtons].forEach(J=>{Z.removeSkillBtn(J),Z.addRandomSkillBtn()}),startProcessTurn()}),this.setHandler(commandButtonConfig.suicide.symbol,()=>{killParty(),startProcessTurn()})}makeCommandList(){this.addCommand(commandButtonConfig.skip.name,commandButtonConfig.skip.symbol),this.addCommand(commandButtonConfig.suicide.name,commandButtonConfig.suicide.symbol)}select(U){var Y;super.select(U);const X=(Y=this.currentData())==null?void 0:Y.symbol;!X||!this.puzzle||this.puzzle.helpWindow.addText(commandButtonConfig[X].description(this.puzzle))}close(){super.close(),this.deselect()}reset(){this.open(),this.activate(),this.deselect(),this.puzzle.helpWindow.drawHeroineStatusText()}hoverOut(){this.isCursorMovable()&&this.deselect(),this.puzzle.helpWindow.drawHeroineStatusText()}}/*!
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
`,r=class extends PIXI.Filter{constructor($){super(s,v.replace("${perlin}",g)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const B=Object.assign(r.defaults,$);this._angleLight=new PIXI.Point,this.angle=B.angle,this.gain=B.gain,this.lacunarity=B.lacunarity,this.alpha=B.alpha,this.parallel=B.parallel,this.center=B.center,this.time=B.time}apply($,B,U,X){const{width:Y,height:Z}=B.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=Y,this.uniforms.dimensions[1]=Z,this.uniforms.aspect=Z/Y,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,$.applyFilter(this,B,U,X)}get angle(){return this._angle}set angle($){this._angle=$;const B=$*PIXI.DEG_TO_RAD;this._angleLight.x=Math.cos(B),this._angleLight.y=Math.sin(B)}get gain(){return this.uniforms.gain}set gain($){this.uniforms.gain=$}get lacunarity(){return this.uniforms.lacunarity}set lacunarity($){this.uniforms.lacunarity=$}get alpha(){return this.uniforms.alpha}set alpha($){this.uniforms.alpha=$}},o=r;o.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};const addFilter=($,B)=>{$.filters?$.filters.push(B):$.filters=[B]},glowEffect=($,B=197379,U={})=>{var Y;const X=new l$3(U);return addFilter($,X),(Y=globalThis.customUpdater)==null||Y.add(({remove:Z})=>{X.outerStrength+=.3,X.alpha-=.02,X.color-=B,X.alpha<0&&(lodashExports.pull($.filters,X),Z())}),$},godRayEffect=$=>{var U;const B=new o({alpha:.4,lacunarity:1.5});return addFilter($,B),(U=globalThis.customUpdater)==null||U.add(()=>{B.time+=.05}),$};class Puzzle extends Scene_Message{constructor({enemyId:U,skillIds:X}){super();ft(this,"enemyConfig");ft(this,"map");ft(this,"skills");ft(this,"menu");ft(this,"battleController");ft(this,"heroine");ft(this,"helpWindow");ft(this,"battleCommandWin");ft(this,"onSkillPuzzleDragStart",U=>{this.addChild(U),U.alpha=.5});ft(this,"onSkillPuzzleMove",U=>{const X=U.checkHover(this.map,this);this.map.units.children.forEach(Y=>{X.includes(Y)?Y.onHover(U.canDrop):Y.onHoverOut()})});ft(this,"onSkillPuzzleReset",U=>{this.removeChild(U),U.alpha=1});ft(this,"onSkillPuzzleDrop",U=>{if(this.map.resetHover(),!U.canDrop){U.reset();return}const X=U.checkHover(this.map,this);if(lodashExports.isEmpty(X)){U.reset();return}this.onSkillPuzzleDropSuccess(U,X)});ft(this,"onSkillPuzzleDropSuccess",(U,X)=>{const Y=U.snapshot,Z=PIXI.Sprite.from(Y),J=X[0].position,nt=U.config,[lt,ct]=getShapeFirstUnitIndex(nt.shape),[mt,yt]=getShapeFirstRowAndCol(nt.shape),Rt=lt-yt,bt=ct-mt;Z.position.set(J.x-Rt*CONFIG.map.unitSize,J.y-bt*CONFIG.map.unitSize);let Wt=197379;X.some(kt=>kt.status===UNIT_STATUS.enemy_empty)&&(Wt=771),X.some(kt=>kt.id>0)&&(Wt=5);const Ut=new PIXI.Container;Ut.addChild(Z),godRayEffect(Z),glowEffect(Ut,Wt),this.map.addChild(Ut),X.forEach(kt=>kt.onFill(U)),U.activeButton&&(this.menu.removeSkillBtn(U.activeButton),this.menu.addRandomSkillBtn()),this.menu.removeInvalidSkills(),U.reset(),this.battleController.onAttackSuccess({skillId:U.id,enemyId:this.enemyConfig.id,unitTypes:X.map(kt=>kt.id)})});this.battleController=new BattleController(this),this.enemyConfig=getEnemyConfig(U),this.map=new PuzzleMap(this.enemyConfig,this),this.addChild(this.map),this.skills=X.map(Y=>new PuzzleSkill(Y,this)),this.menu=new PuzzleMenu(this.skills,this),this.addChild(this.menu),this.heroine=new Heroine(this),this.addChild(this.heroine),this.battleCommandWin=new BattleCommandWin(this),this.addChild(this.battleCommandWin),this.skills.forEach(Y=>{Y.addListener(DRAG_EVENT.start,this.onSkillPuzzleDragStart),Y.addListener(DRAG_EVENT.move,this.onSkillPuzzleMove),Y.addListener(DRAG_EVENT.end,this.onSkillPuzzleDrop),Y.addListener(DRAG_EVENT.reset,this.onSkillPuzzleReset)}),this.helpWindow=new HelpWindow(this),this.addChild(this.helpWindow)}destroy(){this.skills.forEach(U=>{U.isDestroyed()||U.destroy({children:!0,texture:!0,baseTexture:!0})}),super.destroy()}}const getAllAssetsPaths=()=>{var ct;const $=getHeroineSkillIds(),B=$gameTroop.troop().id,U=getEnemyConfig(B),X=[1,2].map(mt=>getFigurePath("Rita",mt)),Y=$.map(getSkillPath),Z=getEnemyImagePath(),J=Object.keys(U.unitsTexture).map(getEnemyUnitPath),nt=[0,1,2,3].map(mt=>getEnemySkillPath("enemy",mt)),lt=((ct=U.otherAssets)==null?void 0:ct.map(getOtherAsset))||[];return lodashExports.uniq(X.concat(Y).concat([Z]).concat(nt).concat(J).concat(lt))};globalThis.addEventListener(APP_EVENT.createBattleScene,()=>{getAllAssetsPaths().forEach(B=>{ImageManager.loadMsgkAssets(B)})});const loadCustomAssets=()=>{const{unitSize:$}=CONFIG.map;for(let U=0;U<=3;U++){const X=getEnemySkillPath("enemy",U),Y=getAssetTexture(X),Z=new PIXI.Rectangle($,$,$,$),J=new PIXI.Texture(Y.baseTexture,Z);Y.destroy(),setAssetTexture(X,J)}const B=getEnemyConfig($gameTroop.troop().id);Object.keys(B.unitsTexture).forEach(U=>{const X=getAssetTexture(getEnemyUnitPath(U));setAssetTexture(getRtEnemyUnitPath(U,"normal"),X);const Y=tintTexture(X,COLOR_MATRIX.positive);setAssetTexture(getRtEnemyUnitPath(U,"positive"),Y);const Z=tintTexture(X,COLOR_MATRIX.negative);setAssetTexture(getRtEnemyUnitPath(U,"negative"),Z)})};globalThis.addEventListener(APP_EVENT.battleSceneReady,async()=>{loadCustomAssets();const $=new CustomUpdater;globalThis.customUpdater=$;const B=$gameTroop.troop().id,U=getHeroineSkillIds(),X=new Puzzle({enemyId:B,skillIds:U});Graphics.app.stage.addChildAt(X,1),Graphics.app.stage.addChild($),Graphics.app.stage.emit(STAGE_EVENT.battleStart),BattleManager._spriteset.battlerSprites().forEach(Z=>Z.hide());const Y=[];Y.push(addStageEventListener(STAGE_EVENT.troopEventStart,()=>{X.map.resetHover(),TouchInput.clear(),toggleControllable(!1)}),addStageEventListener(STAGE_EVENT.troopEventEnd,()=>{toggleControllable(!0)})),addStageEventListenerOnce(STAGE_EVENT.battleEnd,()=>{TouchInput.clear(),Y.forEach(Z=>Z())})});const mixins={add($,B){return B||(B=new core.Point),B.x=this.x+$.x,B.y=this.y+$.y,B},subtract($,B){return B||(B=new core.Point),B.x=this.x-$.x,B.y=this.y-$.y,B},multiply($,B){return B||(B=new core.Point),B.x=this.x*$.x,B.y=this.y*$.y,B},multiplyScalar($,B){return B||(B=new core.Point),B.x=this.x*$,B.y=this.y*$,B},dot($){return this.x*$.x+this.y*$.y},cross($){return this.x*$.y-this.y*$.x},normalize($){$||($=new core.Point);const B=Math.sqrt(this.x*this.x+this.y*this.y);return $.x=this.x/B,$.y=this.y/B,$},magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y)},magnitudeSquared(){return this.x*this.x+this.y*this.y},project($,B){B||(B=new core.Point);const U=(this.x*$.x+this.y*$.y)/($.x*$.x+$.y*$.y);return B.x=$.x*U,B.y=$.y*U,B},reflect($,B){B||(B=new core.Point);const U=this.x*$.x+this.y*$.y;return B.x=this.x-2*U*$.x,B.y=this.y-2*U*$.y,B}};Object.assign(core.Point.prototype,mixins),Object.assign(core.ObservablePoint.prototype,mixins),core.Rectangle.prototype.containsRect=function($){return $.width<=0||$.height<=0?$.x>this.x&&$.y>this.y&&$.right<this.right&&$.bottom<this.bottom:$.x>=this.x&&$.y>=this.y&&$.right<=this.right&&$.bottom<=this.bottom},core.Rectangle.prototype.equals=function($){return $===this?!0:$&&this.x===$.x&&this.y===$.y&&this.width===$.width&&this.height===$.height},core.Rectangle.prototype.intersection=function($,B){B||(B=new core.Rectangle);const U=this.x<$.x?$.x:this.x,X=this.right>$.right?$.right:this.right;if(X<=U)return B.x=B.y=B.width=B.height=0,B;const Y=this.y<$.y?$.y:this.y,Z=this.bottom>$.bottom?$.bottom:this.bottom;return Z<=Y?(B.x=B.y=B.width=B.height=0,B):(B.x=U,B.y=Y,B.width=X-U,B.height=Z-Y,B)},core.Rectangle.prototype.union=function($,B){B||(B=new core.Rectangle);const U=Math.min(this.x,$.x),X=Math.max(this.x+this.width,$.x+$.width),Y=Math.min(this.y,$.y),Z=Math.max(this.y+this.height,$.y+$.height);return B.x=U,B.y=Y,B.width=X-U,B.height=Z-Y,B},PIXI.settings.PREFER_ENV=PIXI.ENV.WEBGL2,Object.assign(PIXI.Sprite.prototype,{isDestroyed:function(){return this._destroyed}});const _SceneManager_onSceneStart=SceneManager.onSceneStart;SceneManager.onSceneStart=function(){if(_SceneManager_onSceneStart.apply(this),this._scene instanceof Scene_Battle){const $=new CustomEvent(APP_EVENT.battleSceneReady);globalThis.dispatchEvent($)}},function(){const $=BattleManager.update;BattleManager.isPaused=!1,BattleManager.update=function(...B){BattleManager.isPaused||$.apply(this,B)},BattleManager.pauseBattle=function(){BattleManager.isPaused=!0},BattleManager.resumeBattle=function(){BattleManager.isPaused=!1}}();const _BattleManager_updatePhase=BattleManager.updatePhase;BattleManager.updatePhase=function($){switch(this._phase){case"start":Graphics.app.stage.emit(STAGE_EVENT.turnStart,$);break;case"turn":break;case"action":break;case"turnEnd":Graphics.app.stage.emit(STAGE_EVENT.turnEnd,$);break;case"battleEnd":Graphics.app.stage.emit(STAGE_EVENT.battleEnd,$);break}_BattleManager_updatePhase.apply(this,[$])};const _BattleManager_getNextSubject=BattleManager.getNextSubject;BattleManager.getNextSubject=function(){const $=this._actionBattlers,B=$.find(Boolean);return B instanceof Game_Enemy&&(lodashExports.difference($gameTroop.members(),$).length||Graphics.app.stage.emit(STAGE_EVENT.enemyTurn,B)),_BattleManager_getNextSubject.apply(this)},ImageManager.loadMsgkAssets=function($){return this.loadBitmap.apply(this,["",$.replace(/\.png$/,"")])};const _Scene_Battle_create=Scene_Battle.prototype.create;Scene_Battle.prototype.create=function(){const $=new CustomEvent(APP_EVENT.createBattleScene);globalThis.dispatchEvent($),_Scene_Battle_create.apply(this)};const _Scene_Battle_startPartyCommandSelection=Scene_Battle.prototype.startPartyCommandSelection;Scene_Battle.prototype.startPartyCommandSelection=function(){_Scene_Battle_startPartyCommandSelection.apply(this),this._statusWindow.hide(),this._statusWindow.alpha=0,this._partyCommandWindow.hide(),this._actorCommandWindow.hide()};const _Scene_Battle_terminate=Scene_Battle.prototype.terminate;Scene_Battle.prototype.terminate=function(){clearCache(),_Scene_Battle_terminate.apply(this)};const _Window_BattleLog_wait=Window_BattleLog.prototype.wait;Window_BattleLog.prototype.wait=function($){if($){this._waitCount=$;return}_Window_BattleLog_wait.apply(this)};const _Game_Battler_onAllActionsEnd=Game_Battler.prototype.onAllActionsEnd;Game_Battler.prototype.onAllActionsEnd=function(){this===getFirstEnemy()&&Graphics.app.stage.emit(STAGE_EVENT.enemyActionEnd,this),_Game_Battler_onAllActionsEnd.apply(this)};let isTroopEventRunning=!1;const _Game_Troop_isEventRunning=Game_Troop.prototype.isEventRunning;Game_Troop.prototype.isEventRunning=function(){const $=_Game_Troop_isEventRunning.apply(this);return $!==isTroopEventRunning&&(isTroopEventRunning=$,$?Graphics.app.stage.emit(STAGE_EVENT.troopEventStart):Graphics.app.stage.emit(STAGE_EVENT.troopEventEnd)),$};const setupPlugin=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}))});
