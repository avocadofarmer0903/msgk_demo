(function(C,I){typeof exports=="object"&&typeof module<"u"?I(require("@pixi/core"),require("@pixi/settings")):typeof define=="function"&&define.amd?define(["@pixi/core","@pixi/settings"],I):(C=typeof globalThis<"u"?globalThis:C||self,I(C.PIXI,C.PIXI))})(this,function(core,settings){"use strict";var Xe=Object.defineProperty;var Ve=(C,I,$)=>I in C?Xe(C,I,{enumerable:!0,configurable:!0,writable:!0,value:$}):C[I]=$;var Y=(C,I,$)=>(Ve(C,typeof I!="symbol"?I+"":I,$),$);Promise.resolve().then(()=>setupPlugin).catch(console.error);const CONFIG={common:{appPaddingY:4,fontSize:{big:32,default:26,medium:20,small:16}},skill:{tint:{normal:11184895,magic:16777130,special:13426141}},map:{offsetX:450,offsetY:140,unitSize:48},menu:{width:192,btnHoverScale:1.2,paddingY:20},battleCommandWind:{padding:16,width:100},figure:{offsetX:100,offsetY:50,width:280,half:250,height:600},helpWindow:{exceedWidth:40}},TINT_COLOR={positive:11206570,negative:14505301,clear:16777215};var freeGlobal=typeof global=="object"&&global&&global.Object===Object&&global;const freeGlobal$1=freeGlobal;var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self,root=freeGlobal$1||freeSelf||Function("return this")();const root$1=root;var Symbol$1=root$1.Symbol;const Symbol$2=Symbol$1;var objectProto$d=Object.prototype,hasOwnProperty$a=objectProto$d.hasOwnProperty,nativeObjectToString$1=objectProto$d.toString,symToStringTag$1=Symbol$2?Symbol$2.toStringTag:void 0;function getRawTag(C){var I=hasOwnProperty$a.call(C,symToStringTag$1),$=C[symToStringTag$1];try{C[symToStringTag$1]=void 0;var E=!0}catch{}var B=nativeObjectToString$1.call(C);return E&&(I?C[symToStringTag$1]=$:delete C[symToStringTag$1]),B}var objectProto$c=Object.prototype,nativeObjectToString=objectProto$c.toString;function objectToString(C){return nativeObjectToString.call(C)}var nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol$2?Symbol$2.toStringTag:void 0;function baseGetTag(C){return C==null?C===void 0?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(C)?getRawTag(C):objectToString(C)}function isObjectLike(C){return C!=null&&typeof C=="object"}var symbolTag$1="[object Symbol]";function isSymbol(C){return typeof C=="symbol"||isObjectLike(C)&&baseGetTag(C)==symbolTag$1}function arrayMap(C,I){for(var $=-1,E=C==null?0:C.length,B=Array(E);++$<E;)B[$]=I(C[$],$,C);return B}var isArray=Array.isArray;const isArray$1=isArray;var INFINITY$3=1/0,symbolProto$1=Symbol$2?Symbol$2.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;function baseToString(C){if(typeof C=="string")return C;if(isArray$1(C))return arrayMap(C,baseToString)+"";if(isSymbol(C))return symbolToString?symbolToString.call(C):"";var I=C+"";return I=="0"&&1/C==-INFINITY$3?"-0":I}var reWhitespace=/\s/;function trimmedEndIndex(C){for(var I=C.length;I--&&reWhitespace.test(C.charAt(I)););return I}var reTrimStart=/^\s+/;function baseTrim(C){return C&&C.slice(0,trimmedEndIndex(C)+1).replace(reTrimStart,"")}function isObject(C){var I=typeof C;return C!=null&&(I=="object"||I=="function")}var NAN=0/0,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;function toNumber(C){if(typeof C=="number")return C;if(isSymbol(C))return NAN;if(isObject(C)){var I=typeof C.valueOf=="function"?C.valueOf():C;C=isObject(I)?I+"":I}if(typeof C!="string")return C===0?C:+C;C=baseTrim(C);var $=reIsBinary.test(C);return $||reIsOctal.test(C)?freeParseInt(C.slice(2),$?2:8):reIsBadHex.test(C)?NAN:+C}var INFINITY$2=1/0,MAX_INTEGER=17976931348623157e292;function toFinite(C){if(!C)return C===0?C:0;if(C=toNumber(C),C===INFINITY$2||C===-INFINITY$2){var I=C<0?-1:1;return I*MAX_INTEGER}return C===C?C:0}function toInteger(C){var I=toFinite(C),$=I%1;return I===I?$?I-$:I:0}function identity(C){return C}var asyncTag="[object AsyncFunction]",funcTag$1="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(C){if(!isObject(C))return!1;var I=baseGetTag(C);return I==funcTag$1||I==genTag||I==asyncTag||I==proxyTag}var coreJsData=root$1["__core-js_shared__"];const coreJsData$1=coreJsData;var maskSrcKey=function(){var C=/[^.]+$/.exec(coreJsData$1&&coreJsData$1.keys&&coreJsData$1.keys.IE_PROTO||"");return C?"Symbol(src)_1."+C:""}();function isMasked(C){return!!maskSrcKey&&maskSrcKey in C}var funcProto$1=Function.prototype,funcToString$1=funcProto$1.toString;function toSource(C){if(C!=null){try{return funcToString$1.call(C)}catch{}try{return C+""}catch{}}return""}var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto$b=Object.prototype,funcToString=funcProto.toString,hasOwnProperty$9=objectProto$b.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty$9).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(C){if(!isObject(C)||isMasked(C))return!1;var I=isFunction(C)?reIsNative:reIsHostCtor;return I.test(toSource(C))}function getValue(C,I){return C==null?void 0:C[I]}function getNative(C,I){var $=getValue(C,I);return baseIsNative($)?$:void 0}var WeakMap=getNative(root$1,"WeakMap");const WeakMap$1=WeakMap;function apply(C,I,$){switch($.length){case 0:return C.call(I);case 1:return C.call(I,$[0]);case 2:return C.call(I,$[0],$[1]);case 3:return C.call(I,$[0],$[1],$[2])}return C.apply(I,$)}function noop(){}function copyArray(C,I){var $=-1,E=C.length;for(I||(I=Array(E));++$<E;)I[$]=C[$];return I}var HOT_COUNT=800,HOT_SPAN=16,nativeNow=Date.now;function shortOut(C){var I=0,$=0;return function(){var E=nativeNow(),B=HOT_SPAN-(E-$);if($=E,B>0){if(++I>=HOT_COUNT)return arguments[0]}else I=0;return C.apply(void 0,arguments)}}function constant(C){return function(){return C}}var defineProperty=function(){try{var C=getNative(Object,"defineProperty");return C({},"",{}),C}catch{}}();const defineProperty$1=defineProperty;var baseSetToString=defineProperty$1?function(C,I){return defineProperty$1(C,"toString",{configurable:!0,enumerable:!1,value:constant(I),writable:!0})}:identity;const baseSetToString$1=baseSetToString;var setToString=shortOut(baseSetToString$1);const setToString$1=setToString;function baseFindIndex(C,I,$,E){for(var B=C.length,H=$+(E?1:-1);E?H--:++H<B;)if(I(C[H],H,C))return H;return-1}function baseIsNaN(C){return C!==C}function strictIndexOf(C,I,$){for(var E=$-1,B=C.length;++E<B;)if(C[E]===I)return E;return-1}function baseIndexOf(C,I,$){return I===I?strictIndexOf(C,I,$):baseFindIndex(C,baseIsNaN,$)}function arrayIncludes(C,I){var $=C==null?0:C.length;return!!$&&baseIndexOf(C,I,0)>-1}var MAX_SAFE_INTEGER$1=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex(C,I){var $=typeof C;return I=I??MAX_SAFE_INTEGER$1,!!I&&($=="number"||$!="symbol"&&reIsUint.test(C))&&C>-1&&C%1==0&&C<I}function baseAssignValue(C,I,$){I=="__proto__"&&defineProperty$1?defineProperty$1(C,I,{configurable:!0,enumerable:!0,value:$,writable:!0}):C[I]=$}function eq(C,I){return C===I||C!==C&&I!==I}var nativeMax$1=Math.max;function overRest(C,I,$){return I=nativeMax$1(I===void 0?C.length-1:I,0),function(){for(var E=arguments,B=-1,H=nativeMax$1(E.length-I,0),U=Array(H);++B<H;)U[B]=E[I+B];B=-1;for(var j=Array(I+1);++B<I;)j[B]=E[B];return j[I]=$(U),apply(C,this,j)}}function baseRest(C,I){return setToString$1(overRest(C,I,identity),C+"")}var MAX_SAFE_INTEGER=9007199254740991;function isLength(C){return typeof C=="number"&&C>-1&&C%1==0&&C<=MAX_SAFE_INTEGER}function isArrayLike(C){return C!=null&&isLength(C.length)&&!isFunction(C)}function isIterateeCall(C,I,$){if(!isObject($))return!1;var E=typeof I;return(E=="number"?isArrayLike($)&&isIndex(I,$.length):E=="string"&&I in $)?eq($[I],C):!1}var objectProto$a=Object.prototype;function isPrototype(C){var I=C&&C.constructor,$=typeof I=="function"&&I.prototype||objectProto$a;return C===$}function baseTimes(C,I){for(var $=-1,E=Array(C);++$<C;)E[$]=I($);return E}var argsTag$2="[object Arguments]";function baseIsArguments(C){return isObjectLike(C)&&baseGetTag(C)==argsTag$2}var objectProto$9=Object.prototype,hasOwnProperty$8=objectProto$9.hasOwnProperty,propertyIsEnumerable$1=objectProto$9.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(C){return isObjectLike(C)&&hasOwnProperty$8.call(C,"callee")&&!propertyIsEnumerable$1.call(C,"callee")};const isArguments$1=isArguments;function stubFalse(){return!1}var freeExports$1=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule$1=freeExports$1&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1,Buffer=moduleExports$1?root$1.Buffer:void 0,nativeIsBuffer=Buffer?Buffer.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse;const isBuffer$1=isBuffer;var argsTag$1="[object Arguments]",arrayTag$1="[object Array]",boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",funcTag="[object Function]",mapTag$3="[object Map]",numberTag$2="[object Number]",objectTag$2="[object Object]",regexpTag$1="[object RegExp]",setTag$3="[object Set]",stringTag$1="[object String]",weakMapTag$1="[object WeakMap]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$2="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag$1]=typedArrayTags[arrayTag$1]=typedArrayTags[arrayBufferTag$1]=typedArrayTags[boolTag$1]=typedArrayTags[dataViewTag$2]=typedArrayTags[dateTag$1]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag]=typedArrayTags[mapTag$3]=typedArrayTags[numberTag$2]=typedArrayTags[objectTag$2]=typedArrayTags[regexpTag$1]=typedArrayTags[setTag$3]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag$1]=!1;function baseIsTypedArray(C){return isObjectLike(C)&&isLength(C.length)&&!!typedArrayTags[baseGetTag(C)]}function baseUnary(C){return function(I){return C(I)}}var freeExports=typeof exports=="object"&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&typeof module=="object"&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal$1.process,nodeUtil=function(){try{var C=freeModule&&freeModule.require&&freeModule.require("util").types;return C||freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch{}}();const nodeUtil$1=nodeUtil;var nodeIsTypedArray=nodeUtil$1&&nodeUtil$1.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;const isTypedArray$1=isTypedArray;var objectProto$8=Object.prototype,hasOwnProperty$7=objectProto$8.hasOwnProperty;function arrayLikeKeys(C,I){var $=isArray$1(C),E=!$&&isArguments$1(C),B=!$&&!E&&isBuffer$1(C),H=!$&&!E&&!B&&isTypedArray$1(C),U=$||E||B||H,j=U?baseTimes(C.length,String):[],X=j.length;for(var V in C)(I||hasOwnProperty$7.call(C,V))&&!(U&&(V=="length"||B&&(V=="offset"||V=="parent")||H&&(V=="buffer"||V=="byteLength"||V=="byteOffset")||isIndex(V,X)))&&j.push(V);return j}function overArg(C,I){return function($){return C(I($))}}var nativeKeys=overArg(Object.keys,Object);const nativeKeys$1=nativeKeys;var objectProto$7=Object.prototype,hasOwnProperty$6=objectProto$7.hasOwnProperty;function baseKeys(C){if(!isPrototype(C))return nativeKeys$1(C);var I=[];for(var $ in Object(C))hasOwnProperty$6.call(C,$)&&$!="constructor"&&I.push($);return I}function keys(C){return isArrayLike(C)?arrayLikeKeys(C):baseKeys(C)}var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;function isKey(C,I){if(isArray$1(C))return!1;var $=typeof C;return $=="number"||$=="symbol"||$=="boolean"||C==null||isSymbol(C)?!0:reIsPlainProp.test(C)||!reIsDeepProp.test(C)||I!=null&&C in Object(I)}var nativeCreate=getNative(Object,"create");const nativeCreate$1=nativeCreate;function hashClear(){this.__data__=nativeCreate$1?nativeCreate$1(null):{},this.size=0}function hashDelete(C){var I=this.has(C)&&delete this.__data__[C];return this.size-=I?1:0,I}var HASH_UNDEFINED$2="__lodash_hash_undefined__",objectProto$6=Object.prototype,hasOwnProperty$5=objectProto$6.hasOwnProperty;function hashGet(C){var I=this.__data__;if(nativeCreate$1){var $=I[C];return $===HASH_UNDEFINED$2?void 0:$}return hasOwnProperty$5.call(I,C)?I[C]:void 0}var objectProto$5=Object.prototype,hasOwnProperty$4=objectProto$5.hasOwnProperty;function hashHas(C){var I=this.__data__;return nativeCreate$1?I[C]!==void 0:hasOwnProperty$4.call(I,C)}var HASH_UNDEFINED$1="__lodash_hash_undefined__";function hashSet(C,I){var $=this.__data__;return this.size+=this.has(C)?0:1,$[C]=nativeCreate$1&&I===void 0?HASH_UNDEFINED$1:I,this}function Hash(C){var I=-1,$=C==null?0:C.length;for(this.clear();++I<$;){var E=C[I];this.set(E[0],E[1])}}Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet;function listCacheClear(){this.__data__=[],this.size=0}function assocIndexOf(C,I){for(var $=C.length;$--;)if(eq(C[$][0],I))return $;return-1}var arrayProto$1=Array.prototype,splice$1=arrayProto$1.splice;function listCacheDelete(C){var I=this.__data__,$=assocIndexOf(I,C);if($<0)return!1;var E=I.length-1;return $==E?I.pop():splice$1.call(I,$,1),--this.size,!0}function listCacheGet(C){var I=this.__data__,$=assocIndexOf(I,C);return $<0?void 0:I[$][1]}function listCacheHas(C){return assocIndexOf(this.__data__,C)>-1}function listCacheSet(C,I){var $=this.__data__,E=assocIndexOf($,C);return E<0?(++this.size,$.push([C,I])):$[E][1]=I,this}function ListCache(C){var I=-1,$=C==null?0:C.length;for(this.clear();++I<$;){var E=C[I];this.set(E[0],E[1])}}ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet;var Map$1=getNative(root$1,"Map");const Map$2=Map$1;function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map$2||ListCache),string:new Hash}}function isKeyable(C){var I=typeof C;return I=="string"||I=="number"||I=="symbol"||I=="boolean"?C!=="__proto__":C===null}function getMapData(C,I){var $=C.__data__;return isKeyable(I)?$[typeof I=="string"?"string":"hash"]:$.map}function mapCacheDelete(C){var I=getMapData(this,C).delete(C);return this.size-=I?1:0,I}function mapCacheGet(C){return getMapData(this,C).get(C)}function mapCacheHas(C){return getMapData(this,C).has(C)}function mapCacheSet(C,I){var $=getMapData(this,C),E=$.size;return $.set(C,I),this.size+=$.size==E?0:1,this}function MapCache(C){var I=-1,$=C==null?0:C.length;for(this.clear();++I<$;){var E=C[I];this.set(E[0],E[1])}}MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet;var FUNC_ERROR_TEXT="Expected a function";function memoize(C,I){if(typeof C!="function"||I!=null&&typeof I!="function")throw new TypeError(FUNC_ERROR_TEXT);var $=function(){var E=arguments,B=I?I.apply(this,E):E[0],H=$.cache;if(H.has(B))return H.get(B);var U=C.apply(this,E);return $.cache=H.set(B,U)||H,U};return $.cache=new(memoize.Cache||MapCache),$}memoize.Cache=MapCache;var MAX_MEMOIZE_SIZE=500;function memoizeCapped(C){var I=memoize(C,function(E){return $.size===MAX_MEMOIZE_SIZE&&$.clear(),E}),$=I.cache;return I}var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=memoizeCapped(function(C){var I=[];return C.charCodeAt(0)===46&&I.push(""),C.replace(rePropName,function($,E,B,H){I.push(B?H.replace(reEscapeChar,"$1"):E||$)}),I});const stringToPath$1=stringToPath;function toString(C){return C==null?"":baseToString(C)}function castPath(C,I){return isArray$1(C)?C:isKey(C,I)?[C]:stringToPath$1(toString(C))}var INFINITY$1=1/0;function toKey(C){if(typeof C=="string"||isSymbol(C))return C;var I=C+"";return I=="0"&&1/C==-INFINITY$1?"-0":I}function baseGet(C,I){I=castPath(I,C);for(var $=0,E=I.length;C!=null&&$<E;)C=C[toKey(I[$++])];return $&&$==E?C:void 0}function get(C,I,$){var E=C==null?void 0:baseGet(C,I);return E===void 0?$:E}function arrayPush(C,I){for(var $=-1,E=I.length,B=C.length;++$<E;)C[B+$]=I[$];return C}var spreadableSymbol=Symbol$2?Symbol$2.isConcatSpreadable:void 0;function isFlattenable(C){return isArray$1(C)||isArguments$1(C)||!!(spreadableSymbol&&C&&C[spreadableSymbol])}function baseFlatten(C,I,$,E,B){var H=-1,U=C.length;for($||($=isFlattenable),B||(B=[]);++H<U;){var j=C[H];I>0&&$(j)?I>1?baseFlatten(j,I-1,$,E,B):arrayPush(B,j):E||(B[B.length]=j)}return B}function baseClamp(C,I,$){return C===C&&($!==void 0&&(C=C<=$?C:$),I!==void 0&&(C=C>=I?C:I)),C}function clamp(C,I,$){return $===void 0&&($=I,I=void 0),$!==void 0&&($=toNumber($),$=$===$?$:0),I!==void 0&&(I=toNumber(I),I=I===I?I:0),baseClamp(toNumber(C),I,$)}function stackClear(){this.__data__=new ListCache,this.size=0}function stackDelete(C){var I=this.__data__,$=I.delete(C);return this.size=I.size,$}function stackGet(C){return this.__data__.get(C)}function stackHas(C){return this.__data__.has(C)}var LARGE_ARRAY_SIZE$2=200;function stackSet(C,I){var $=this.__data__;if($ instanceof ListCache){var E=$.__data__;if(!Map$2||E.length<LARGE_ARRAY_SIZE$2-1)return E.push([C,I]),this.size=++$.size,this;$=this.__data__=new MapCache(E)}return $.set(C,I),this.size=$.size,this}function Stack(C){var I=this.__data__=new ListCache(C);this.size=I.size}Stack.prototype.clear=stackClear,Stack.prototype.delete=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet;function arrayFilter(C,I){for(var $=-1,E=C==null?0:C.length,B=0,H=[];++$<E;){var U=C[$];I(U,$,C)&&(H[B++]=U)}return H}function stubArray(){return[]}var objectProto$4=Object.prototype,propertyIsEnumerable=objectProto$4.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(C){return C==null?[]:(C=Object(C),arrayFilter(nativeGetSymbols(C),function(I){return propertyIsEnumerable.call(C,I)}))}:stubArray;const getSymbols$1=getSymbols;function baseGetAllKeys(C,I,$){var E=I(C);return isArray$1(C)?E:arrayPush(E,$(C))}function getAllKeys(C){return baseGetAllKeys(C,keys,getSymbols$1)}var DataView=getNative(root$1,"DataView");const DataView$1=DataView;var Promise$1=getNative(root$1,"Promise");const Promise$2=Promise$1;var Set=getNative(root$1,"Set");const Set$1=Set;var mapTag$2="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$2="[object Set]",weakMapTag="[object WeakMap]",dataViewTag$1="[object DataView]",dataViewCtorString=toSource(DataView$1),mapCtorString=toSource(Map$2),promiseCtorString=toSource(Promise$2),setCtorString=toSource(Set$1),weakMapCtorString=toSource(WeakMap$1),getTag=baseGetTag;(DataView$1&&getTag(new DataView$1(new ArrayBuffer(1)))!=dataViewTag$1||Map$2&&getTag(new Map$2)!=mapTag$2||Promise$2&&getTag(Promise$2.resolve())!=promiseTag||Set$1&&getTag(new Set$1)!=setTag$2||WeakMap$1&&getTag(new WeakMap$1)!=weakMapTag)&&(getTag=function(C){var I=baseGetTag(C),$=I==objectTag$1?C.constructor:void 0,E=$?toSource($):"";if(E)switch(E){case dataViewCtorString:return dataViewTag$1;case mapCtorString:return mapTag$2;case promiseCtorString:return promiseTag;case setCtorString:return setTag$2;case weakMapCtorString:return weakMapTag}return I});const getTag$1=getTag;var Uint8Array=root$1.Uint8Array;const Uint8Array$1=Uint8Array;var HASH_UNDEFINED="__lodash_hash_undefined__";function setCacheAdd(C){return this.__data__.set(C,HASH_UNDEFINED),this}function setCacheHas(C){return this.__data__.has(C)}function SetCache(C){var I=-1,$=C==null?0:C.length;for(this.__data__=new MapCache;++I<$;)this.add(C[I])}SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas;function arraySome(C,I){for(var $=-1,E=C==null?0:C.length;++$<E;)if(I(C[$],$,C))return!0;return!1}function cacheHas(C,I){return C.has(I)}var COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;function equalArrays(C,I,$,E,B,H){var U=$&COMPARE_PARTIAL_FLAG$5,j=C.length,X=I.length;if(j!=X&&!(U&&X>j))return!1;var V=H.get(C),q=H.get(I);if(V&&q)return V==I&&q==C;var Z=-1,K=!0,J=$&COMPARE_UNORDERED_FLAG$3?new SetCache:void 0;for(H.set(C,I),H.set(I,C);++Z<j;){var Te=C[Z],Se=I[Z];if(E)var _e=U?E(Se,Te,Z,I,C,H):E(Te,Se,Z,C,I,H);if(_e!==void 0){if(_e)continue;K=!1;break}if(J){if(!arraySome(I,function(Ie,we){if(!cacheHas(J,we)&&(Te===Ie||B(Te,Ie,$,E,H)))return J.push(we)})){K=!1;break}}else if(!(Te===Se||B(Te,Se,$,E,H))){K=!1;break}}return H.delete(C),H.delete(I),K}function mapToArray(C){var I=-1,$=Array(C.size);return C.forEach(function(E,B){$[++I]=[B,E]}),$}function setToArray(C){var I=-1,$=Array(C.size);return C.forEach(function(E){$[++I]=E}),$}var COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2,boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",mapTag$1="[object Map]",numberTag$1="[object Number]",regexpTag="[object RegExp]",setTag$1="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",symbolProto=Symbol$2?Symbol$2.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;function equalByTag(C,I,$,E,B,H,U){switch($){case dataViewTag:if(C.byteLength!=I.byteLength||C.byteOffset!=I.byteOffset)return!1;C=C.buffer,I=I.buffer;case arrayBufferTag:return!(C.byteLength!=I.byteLength||!H(new Uint8Array$1(C),new Uint8Array$1(I)));case boolTag:case dateTag:case numberTag$1:return eq(+C,+I);case errorTag:return C.name==I.name&&C.message==I.message;case regexpTag:case stringTag:return C==I+"";case mapTag$1:var j=mapToArray;case setTag$1:var X=E&COMPARE_PARTIAL_FLAG$4;if(j||(j=setToArray),C.size!=I.size&&!X)return!1;var V=U.get(C);if(V)return V==I;E|=COMPARE_UNORDERED_FLAG$2,U.set(C,I);var q=equalArrays(j(C),j(I),E,B,H,U);return U.delete(C),q;case symbolTag:if(symbolValueOf)return symbolValueOf.call(C)==symbolValueOf.call(I)}return!1}var COMPARE_PARTIAL_FLAG$3=1,objectProto$3=Object.prototype,hasOwnProperty$3=objectProto$3.hasOwnProperty;function equalObjects(C,I,$,E,B,H){var U=$&COMPARE_PARTIAL_FLAG$3,j=getAllKeys(C),X=j.length,V=getAllKeys(I),q=V.length;if(X!=q&&!U)return!1;for(var Z=X;Z--;){var K=j[Z];if(!(U?K in I:hasOwnProperty$3.call(I,K)))return!1}var J=H.get(C),Te=H.get(I);if(J&&Te)return J==I&&Te==C;var Se=!0;H.set(C,I),H.set(I,C);for(var _e=U;++Z<X;){K=j[Z];var Ie=C[K],we=I[K];if(E)var $e=U?E(we,Ie,K,I,C,H):E(Ie,we,K,C,I,H);if(!($e===void 0?Ie===we||B(Ie,we,$,E,H):$e)){Se=!1;break}_e||(_e=K=="constructor")}if(Se&&!_e){var Fe=C.constructor,ze=I.constructor;Fe!=ze&&"constructor"in C&&"constructor"in I&&!(typeof Fe=="function"&&Fe instanceof Fe&&typeof ze=="function"&&ze instanceof ze)&&(Se=!1)}return H.delete(C),H.delete(I),Se}var COMPARE_PARTIAL_FLAG$2=1,argsTag="[object Arguments]",arrayTag="[object Array]",objectTag="[object Object]",objectProto$2=Object.prototype,hasOwnProperty$2=objectProto$2.hasOwnProperty;function baseIsEqualDeep(C,I,$,E,B,H){var U=isArray$1(C),j=isArray$1(I),X=U?arrayTag:getTag$1(C),V=j?arrayTag:getTag$1(I);X=X==argsTag?objectTag:X,V=V==argsTag?objectTag:V;var q=X==objectTag,Z=V==objectTag,K=X==V;if(K&&isBuffer$1(C)){if(!isBuffer$1(I))return!1;U=!0,q=!1}if(K&&!q)return H||(H=new Stack),U||isTypedArray$1(C)?equalArrays(C,I,$,E,B,H):equalByTag(C,I,X,$,E,B,H);if(!($&COMPARE_PARTIAL_FLAG$2)){var J=q&&hasOwnProperty$2.call(C,"__wrapped__"),Te=Z&&hasOwnProperty$2.call(I,"__wrapped__");if(J||Te){var Se=J?C.value():C,_e=Te?I.value():I;return H||(H=new Stack),B(Se,_e,$,E,H)}}return K?(H||(H=new Stack),equalObjects(C,I,$,E,B,H)):!1}function baseIsEqual(C,I,$,E,B){return C===I?!0:C==null||I==null||!isObjectLike(C)&&!isObjectLike(I)?C!==C&&I!==I:baseIsEqualDeep(C,I,$,E,baseIsEqual,B)}var COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;function baseIsMatch(C,I,$,E){var B=$.length,H=B,U=!E;if(C==null)return!H;for(C=Object(C);B--;){var j=$[B];if(U&&j[2]?j[1]!==C[j[0]]:!(j[0]in C))return!1}for(;++B<H;){j=$[B];var X=j[0],V=C[X],q=j[1];if(U&&j[2]){if(V===void 0&&!(X in C))return!1}else{var Z=new Stack;if(E)var K=E(V,q,X,C,I,Z);if(!(K===void 0?baseIsEqual(q,V,COMPARE_PARTIAL_FLAG$1|COMPARE_UNORDERED_FLAG$1,E,Z):K))return!1}}return!0}function isStrictComparable(C){return C===C&&!isObject(C)}function getMatchData(C){for(var I=keys(C),$=I.length;$--;){var E=I[$],B=C[E];I[$]=[E,B,isStrictComparable(B)]}return I}function matchesStrictComparable(C,I){return function($){return $==null?!1:$[C]===I&&(I!==void 0||C in Object($))}}function baseMatches(C){var I=getMatchData(C);return I.length==1&&I[0][2]?matchesStrictComparable(I[0][0],I[0][1]):function($){return $===C||baseIsMatch($,C,I)}}function baseHasIn(C,I){return C!=null&&I in Object(C)}function hasPath(C,I,$){I=castPath(I,C);for(var E=-1,B=I.length,H=!1;++E<B;){var U=toKey(I[E]);if(!(H=C!=null&&$(C,U)))break;C=C[U]}return H||++E!=B?H:(B=C==null?0:C.length,!!B&&isLength(B)&&isIndex(U,B)&&(isArray$1(C)||isArguments$1(C)))}function hasIn(C,I){return C!=null&&hasPath(C,I,baseHasIn)}var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseMatchesProperty(C,I){return isKey(C)&&isStrictComparable(I)?matchesStrictComparable(toKey(C),I):function($){var E=get($,C);return E===void 0&&E===I?hasIn($,C):baseIsEqual(I,E,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}function baseProperty(C){return function(I){return I==null?void 0:I[C]}}function basePropertyDeep(C){return function(I){return baseGet(I,C)}}function property(C){return isKey(C)?baseProperty(toKey(C)):basePropertyDeep(C)}function baseIteratee(C){return typeof C=="function"?C:C==null?identity:typeof C=="object"?isArray$1(C)?baseMatchesProperty(C[0],C[1]):baseMatches(C):property(C)}function arrayAggregator(C,I,$,E){for(var B=-1,H=C==null?0:C.length;++B<H;){var U=C[B];I(E,U,$(U),C)}return E}function createBaseFor(C){return function(I,$,E){for(var B=-1,H=Object(I),U=E(I),j=U.length;j--;){var X=U[C?j:++B];if($(H[X],X,H)===!1)break}return I}}var baseFor=createBaseFor();const baseFor$1=baseFor;function baseForOwn(C,I){return C&&baseFor$1(C,I,keys)}function createBaseEach(C,I){return function($,E){if($==null)return $;if(!isArrayLike($))return C($,E);for(var B=$.length,H=I?B:-1,U=Object($);(I?H--:++H<B)&&E(U[H],H,U)!==!1;);return $}}var baseEach=createBaseEach(baseForOwn);const baseEach$1=baseEach;function baseAggregator(C,I,$,E){return baseEach$1(C,function(B,H,U){I(E,B,$(B),U)}),E}function createAggregator(C,I){return function($,E){var B=isArray$1($)?arrayAggregator:baseAggregator,H=I?I():{};return B($,C,baseIteratee(E),H)}}var objectProto$1=Object.prototype,hasOwnProperty$1=objectProto$1.hasOwnProperty,countBy=createAggregator(function(C,I,$){hasOwnProperty$1.call(C,$)?++C[$]:baseAssignValue(C,$,1)});const countBy$1=countBy;function isArrayLikeObject(C){return isObjectLike(C)&&isArrayLike(C)}function arrayIncludesWith(C,I,$){for(var E=-1,B=C==null?0:C.length;++E<B;)if($(I,C[E]))return!0;return!1}var LARGE_ARRAY_SIZE$1=200;function baseDifference(C,I,$,E){var B=-1,H=arrayIncludes,U=!0,j=C.length,X=[],V=I.length;if(!j)return X;$&&(I=arrayMap(I,baseUnary($))),E?(H=arrayIncludesWith,U=!1):I.length>=LARGE_ARRAY_SIZE$1&&(H=cacheHas,U=!1,I=new SetCache(I));e:for(;++B<j;){var q=C[B],Z=$==null?q:$(q);if(q=E||q!==0?q:0,U&&Z===Z){for(var K=V;K--;)if(I[K]===Z)continue e;X.push(q)}else H(I,Z,E)||X.push(q)}return X}var difference=baseRest(function(C,I){return isArrayLikeObject(C)?baseDifference(C,baseFlatten(I,1,isArrayLikeObject,!0)):[]});const difference$1=difference;function last(C){var I=C==null?0:C.length;return I?C[I-1]:void 0}var nativeMax=Math.max;function findIndex(C,I,$){var E=C==null?0:C.length;if(!E)return-1;var B=$==null?0:toInteger($);return B<0&&(B=nativeMax(E+B,0)),baseFindIndex(C,baseIteratee(I),B)}function baseGt(C,I){return C>I}function baseValues(C,I){return arrayMap(I,function($){return C[$]})}function values(C){return C==null?[]:baseValues(C,keys(C))}var nativeMin$1=Math.min;function baseIntersection(C,I,$){for(var E=$?arrayIncludesWith:arrayIncludes,B=C[0].length,H=C.length,U=H,j=Array(H),X=1/0,V=[];U--;){var q=C[U];U&&I&&(q=arrayMap(q,baseUnary(I))),X=nativeMin$1(q.length,X),j[U]=!$&&(I||B>=120&&q.length>=120)?new SetCache(U&&q):void 0}q=C[0];var Z=-1,K=j[0];e:for(;++Z<B&&V.length<X;){var J=q[Z],Te=I?I(J):J;if(J=$||J!==0?J:0,!(K?cacheHas(K,Te):E(V,Te,$))){for(U=H;--U;){var Se=j[U];if(!(Se?cacheHas(Se,Te):E(C[U],Te,$)))continue e}K&&K.push(Te),V.push(J)}}return V}function castArrayLikeObject(C){return isArrayLikeObject(C)?C:[]}var intersection=baseRest(function(C){var I=arrayMap(C,castArrayLikeObject);return I.length&&I[0]===C[0]?baseIntersection(I):[]});const intersection$1=intersection;var mapTag="[object Map]",setTag="[object Set]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;function isEmpty(C){if(C==null)return!0;if(isArrayLike(C)&&(isArray$1(C)||typeof C=="string"||typeof C.splice=="function"||isBuffer$1(C)||isTypedArray$1(C)||isArguments$1(C)))return!C.length;var I=getTag$1(C);if(I==mapTag||I==setTag)return!C.size;if(isPrototype(C))return!baseKeys(C).length;for(var $ in C)if(hasOwnProperty.call(C,$))return!1;return!0}var numberTag="[object Number]";function isNumber(C){return typeof C=="number"||isObjectLike(C)&&baseGetTag(C)==numberTag}function isNil(C){return C==null}function mapValues(C,I){var $={};return I=baseIteratee(I),baseForOwn(C,function(E,B,H){baseAssignValue($,B,I(E,B,H))}),$}function baseExtremum(C,I,$){for(var E=-1,B=C.length;++E<B;){var H=C[E],U=I(H);if(U!=null&&(j===void 0?U===U&&!isSymbol(U):$(U,j)))var j=U,X=H}return X}function maxBy(C,I){return C&&C.length?baseExtremum(C,baseIteratee(I),baseGt):void 0}function baseIndexOfWith(C,I,$,E){for(var B=$-1,H=C.length;++B<H;)if(E(C[B],I))return B;return-1}var arrayProto=Array.prototype,splice=arrayProto.splice;function basePullAll(C,I,$,E){var B=E?baseIndexOfWith:baseIndexOf,H=-1,U=I.length,j=C;for(C===I&&(I=copyArray(I)),$&&(j=arrayMap(C,baseUnary($)));++H<U;)for(var X=0,V=I[H],q=$?$(V):V;(X=B(j,q,X,E))>-1;)j!==C&&splice.call(j,X,1),splice.call(C,X,1);return C}function pullAll(C,I){return C&&C.length&&I&&I.length?basePullAll(C,I):C}var pull=baseRest(pullAll);const pull$1=pull;var nativeFloor=Math.floor,nativeRandom$1=Math.random;function baseRandom(C,I){return C+nativeFloor(nativeRandom$1()*(I-C+1))}var freeParseFloat=parseFloat,nativeMin=Math.min,nativeRandom=Math.random;function random(C,I,$){if($&&typeof $!="boolean"&&isIterateeCall(C,I,$)&&(I=$=void 0),$===void 0&&(typeof I=="boolean"?($=I,I=void 0):typeof C=="boolean"&&($=C,C=void 0)),C===void 0&&I===void 0?(C=0,I=1):(C=toFinite(C),I===void 0?(I=C,C=0):I=toFinite(I)),C>I){var E=C;C=I,I=E}if($||C%1||I%1){var B=nativeRandom();return nativeMin(C+B*(I-C+freeParseFloat("1e-"+((B+"").length-1))),I)}return baseRandom(C,I)}function arraySample(C){var I=C.length;return I?C[baseRandom(0,I-1)]:void 0}function baseSample(C){return arraySample(values(C))}function sample(C){var I=isArray$1(C)?arraySample:baseSample;return I(C)}var INFINITY=1/0,createSet=Set$1&&1/setToArray(new Set$1([,-0]))[1]==INFINITY?function(C){return new Set$1(C)}:noop;const createSet$1=createSet;var LARGE_ARRAY_SIZE=200;function baseUniq(C,I,$){var E=-1,B=arrayIncludes,H=C.length,U=!0,j=[],X=j;if($)U=!1,B=arrayIncludesWith;else if(H>=LARGE_ARRAY_SIZE){var V=I?null:createSet$1(C);if(V)return setToArray(V);U=!1,B=cacheHas,X=new SetCache}else X=I?[]:j;e:for(;++E<H;){var q=C[E],Z=I?I(q):q;if(q=$||q!==0?q:0,U&&Z===Z){for(var K=X.length;K--;)if(X[K]===Z)continue e;I&&X.push(Z),j.push(q)}else B(X,Z,$)||(X!==j&&X.push(Z),j.push(q))}return j}function uniq(C){return C&&C.length?baseUniq(C):[]}const skillDialogues=[{text:"雜魚！雜魚！",reuse:1,skillId:[1,3]},{text:"真是個雜魚大叔呢！",skillId:[1]},{text:"啊哈，沒用處的雜魚雞雞。",priority:5,skillId:[1],unitId:[2]},{text:"不會吧不會吧，都三十歲了大叔還是處男嗎？",priority:5,skillId:[1],unitId:[3],label:"test_label"},{text:"不會吧不會吧，大叔對小O生也能發情嗎？",skillId:[2]},{text:"這麼喜歡胸部，大叔是小寶寶嗎？",priority:5,skillId:[2],unitId:[3]},{text:"這樣就勃起了？好噁心。",priority:5,skillId:[2],unitId:[2]},{text:"跟大叔呼吸同一個空間的空氣真是噁心。",reuse:1,skillId:[3]},{text:"大叔知道拉開這個警報器會有什麼後果嗎？",skillId:[4],label:"test2"},{text:"在這種情況下還能勃起，大叔還是進監獄吧。",priority:5,skillId:[4],unitId:[2]},{text:"大叔，人生完蛋的感覺怎麼樣呢。",priority:5,skillId:[4],unitId:[3]},{text:`啊哈，只是說說事實就生氣了嗎？
草莓草莓玻璃心。`,priority:4,skillId:[1],enemyHp:25},{text:`咦？真的是處男？那個...怎麼說...
加油。`,priority:3,preTextLabel:["test_label"]}],enemySkillDialogues=[{text:"不、不要過來啊！",priority:5,totalHp:-1},{text:"欸？等等、等等啦！",priority:3,totalHp:0},{text:"就、就這麼喜歡胸部嗎？",upperHp:1},{text:"變、變態！",lowerHp:0},{text:"哈哈，急了急了！",totalHp:5}],Rita="\\N[1]",fontM=`\\fs[${CONFIG.common.fontSize.medium}]`,enemy="\\CT[1]",btnTexts={skip:{name:"跳過",description:`跳過：詞窮了！
"${fontM}沉澱一回合重新生成技能。`,act:`${Rita}跳過了這回合。`},surrender:{name:"跌倒",description:`跌倒：這裡怎麼會有顆石頭！
${fontM}一個大意血量直接歸零。`}},enemiesTexts={normalUncle:{name:"普通大叔"},phantomThief:{name:"怪盜亞爾斯羅"}},enemySkillsTexts={normalAttack:{description:`破衣：大叔瞄準${Rita}的衣服。
${fontM}倒數結束隨機對衣服造成1點傷害。`,act:{u:`${enemy}對${Rita}的上身衣物進行攻擊。`,l:`${enemy}對${Rita}的下身衣物進行攻擊。`},result:{u2:`${Rita}的鈕扣脫落了。`,u1:`${Rita}的衣服破碎了。`,u0:`${Rita}的胸部露出來了！`,l2:`${enemy}拉下${Rita}的裙子。`,l1:`${enemy}拿走了${Rita}的裙子。`,l0:`${enemy}脫下了${Rita}的內褲！`,a0:`${Rita}赤身裸體！`,d:`${enemy}笑咪咪地朝${Rita}走近。`}},execute:{description:`大報社：卑鄙無恥的技能。
${fontM}倒數結束後${Rita}敗北，沒有任何方法能避免。`,loading:"怪盜正用精液裝填著水槍。",act:["大報社！",`${Rita}無從閃避！`]},bondage:{description:`束縛：大叔伸出鹹豬手。
${fontM}倒數結束隨機封鎖一個技能。`,act:[`${enemy}架住了${Rita}。`,`${Rita}的一個技能被封鎖了。`],react:`${Rita}掙脫了束縛。`}},heroineTexts={status:{gt9:`${Rita}一臉不屑。`,gt7:`${Rita}的表情稍微有些不安。`,gt4:`${Rita}眼角有淚光。`,gt0:`${Rita}好像快哭出來了！`,eq0:`${Rita}驚慌失措。`,lt0:`${Rita}大失敗。`},clothes:{uM:`${Rita}的上衣完好無缺。`,uGt1:`${Rita}的上衣稍有破損。`,uEq1:`${Rita}的上衣被撕裂了！`,uLt1:`${Rita}用手遮擋赤裸的胸部。`,lM:`${Rita}的裙子乾淨整齊。`,lGt1:`${Rita}的裙子有些凌亂。`,lEq1:`${Rita}的裙子快撐不住了！`,lLt1:`${Rita}摀著暴露的下體。`,a0:[`${Rita}赤身裸體。`,"已經沒有什麼可以從大叔的魔掌保護她了！"]}},skillsTexts={1:{description:`普通攻擊。
${fontM}想不到詞的時候就用這招。`},2:{description:`防禦。
${fontM}很可惜，在大叔面前防禦是沒有用的。`},3:{description:`破防。
${fontM}能讓大叔的防禦歸零喔。`},4:{description:`強攻。
${fontM}趁勝追擊吧！`},41:{description:`魔法方塊。
${fontM}放置一個無攻擊的魔法方塊`}},skills=[{id:1,texture:"image_07",shape:[[0,0,0],[0,1,0],[0,0,0]],weight:1,description:skillsTexts[1].description},{id:2,texture:"image_03",shape:[[1,0,0],[1,1,0],[0,0,0]],weight:5,description:skillsTexts[2].description},{id:3,texture:"image_02",shape:[[0,1,0],[0,1,0],[0,0,0]],weight:5,description:skillsTexts[3].description},{id:4,texture:"image_05",shape:[[0,1,0],[1,0,1],[0,1,0]],weight:2,description:skillsTexts[4].description},{id:41,texture:"image_07",shape:[[0,0,0],[0,1,0],[0,0,0]],weight:1,description:skillsTexts[41].description},{id:42,texture:"image_07",shape:[[0,0,0],[0,1,0],[0,0,0]],weight:1,description:""}];function randomByWeight(C,I){const $=C.reduce((U,j)=>{const X=last(U)||0,V=I(j);return U.push(X+V),U},[]),E=random(0,last($)||0),B=findIndex($,U=>U>=E);return C[B]}const getPuzzle=()=>{if(!globalThis.puzzle)throw new Error("puzzle not founded");return globalThis.puzzle},toggleControllable=C=>{const I=getPuzzle();C?(I.menu.open(),I.battleCommandWin.reset(),I.spSkillsMenu.open()):(I.menu.close(),I.skills.forEach($=>$.reset()),I.battleCommandWin.close(),I.spSkillsMenu.close())},sleep=C=>new Promise(I=>setTimeout(I,C)),getHeroineRm=()=>$gameActors.actor(1),getHeroineSkillIds=(C=0)=>{const I=(C===0?[1,2]:[]).concat(getHeroineRm().skills().filter($=>$.stypeId===C).map($=>$.id));return uniq(I)},getTurnCount=()=>$gameTroop.turnCount(),getFirstEnemy=()=>$gameTroop.members().find(C=>C.isAlive()),forcePartyAction=C=>{$gameMap._interpreter.command339([1,1,C,0])},clearEnemyActionQueue=()=>{$gameTroop.members().forEach(C=>C.selectAllActions([]))},startProcessTurn=()=>{const C=getPuzzle();clearEnemyActionQueue(),C.battleCommandWin.close(),C.battleController.enemySkills.forEach(I=>I.beforeTurnStart()),BattleManager.startTurn()},playSe=(C,I={})=>{AudioManager.playSe({name:C,volume:100,pitch:100,pan:0,...I})},killParty=()=>{const C=getPuzzle();C.heroine.upperHp=0,C.heroine.lowerHp=0,C.heroine.updateStatus(),$gameMap._interpreter.command313([0,0,0,1])},killEnemies=()=>{$gameMap._interpreter.command333([-1,0,1])},checkBattleEnd=()=>{const C=getPuzzle(),I=$gameParty.isEscaped()||$gameParty.isAllDead()||$gameTroop.isAllDead(),$=C.heroine.getTotalHp()<0||C.battleController.checkMapFill();return I||$},calculateEnemiesHpRate=()=>{const C=$gameTroop.members(),I=C.reduce((E,B)=>E+=B.hp,0),$=C.reduce((E,B)=>E+=B.mhp,0);return I/$*100},waitAction=(C=0,I)=>{const $=BattleManager._spriteset;$.createAnimationSprite([],$dataAnimations[1],!1,C);const E=last($._animationSprites);if(E){const B=E.destroy;E.destroy=function(H){I&&I(),B.apply(E,H)}}},waitMessage=C=>{if(!globalThis.customUpdater)throw new Error("customUpdater not found");const I=Graphics.app.stage._messageWindow;globalThis.customUpdater.waitFor(()=>I._waitCount>0,()=>I.startWait(C))},getBattleLogWindow=()=>BattleManager._logWindow,mockUpdate=C=>{C.update=()=>{C.children.forEach(I=>{I.update&&I.update()})}},addUpdate=(C,I)=>{const $=C.update;C.update=(...E)=>{$&&$.apply(C,E),I.apply(C,E)}},shakeTarget=new Map,shakeScreen=(C=5,I=5,$=10,E=!1,B)=>{var j;$gameMap._interpreter.command225([C,I,$,E]);const H=B||Graphics.app.stage;shakeTarget.set(H,!0);const U=()=>shakeTarget.delete(H);(j=globalThis.customUpdater)==null||j.waitFor(({count:X})=>X<=1?!1:!$gameScreen.shake(),U,{maxFrame:999,onDestroy:U})},updateShake=(C,I)=>{(shakeTarget.get(C)||shakeTarget.get(Graphics.app.stage))&&(C.x=I+$gameScreen.shake())},shouldSyncShakeScreen=C=>{const I=C.x;if(C instanceof Sprite){const $=C.update;C.update=()=>{updateShake(C,I),$()};return}C.update=()=>{updateShake(C,I),C.children.forEach($=>{$.update&&$.update()})}},defaultValidator=C=>!!C&&C.status.couldFill,getShapeFirstRowAndCol=C=>{const I=C.findIndex(E=>E.some(B=>!!B));let $=-1;for(let E=0;E<C[0].length;E++)if(C.some(B=>!!B[E])){$=E;break}if(I===-1||$===-1)throw new Error("invalid puzzle shape");return[I,$]},checkPuzzleValid=(C,I,$,E)=>{const B=E||defaultValidator,[H,U]=getShapeFirstRowAndCol(I),[j,X]=$;return I.every((q,Z)=>q.every((J,Te)=>{if(J===0)return!0;const Se=j+Z-H,_e=X+Te-U,Ie=C.shape,we=Ie[0].length;if(Se<0||_e<0||Se>Ie.length-1||_e>we-1)return!1;const $e=C.getUnitByIndex(Se,_e);return B($e)}))},getAllValidIndex=(C,I,$)=>{const E=[];return I.shape.forEach((B,H)=>{B.forEach((U,j)=>{checkPuzzleValid(I,C,[H,j],$)&&E.push([H,j])})}),E},getFirstValidIndex=(C,I,$)=>{for(let E=0;E<I.shape.length;E++){const B=I.shape[E];for(let H=0;H<B.length;H++)if(checkPuzzleValid(I,C,[E,H],$))return[E,H]}return null},getShapeFirstUnitIndex=C=>{for(let I=0;I<C.length;I++){const $=C[I];for(let E=0;E<$.length;E++)if($[E])return[E,I]}throw new Error("invalid puzzle shape")},drawPuzzle=(C,I)=>{let $=0;return C.forEach((E,B)=>E.forEach((H,U)=>{if(!H)return;const j=[U*CONFIG.map.unitSize,B*CONFIG.map.unitSize,CONFIG.map.unitSize,CONFIG.map.unitSize];I.forEach(X=>{X.drawRect(...j)}),$+=1})),$},pointToUnit=(C,I)=>{const{map:$}=getPuzzle(),{unitSize:E}=CONFIG.map,B=C-$.x,H=I-$.y;if(B<0||H<0)return null;const U=Math.floor(H/E),j=Math.floor(B/E);return U>$.shape.length-1||j>$.shape[0].length-1?null:[U,j]},getLine=([C,I],[$,E])=>{const B=[[C,I]],H=Math.abs($-C),U=Math.abs(E-I),j=C<$?1:-1,X=I<E?1:-1;let V=H-U;for(;C!==$||I!==E;){const q=2*V;q>-U&&(V-=U,C+=j),q<H&&(V+=H,I+=X),B.push([C,I])}return B},calculateAngle=([C,I],[$,E])=>{const B=$-C,H=E-I;let j=Math.atan2(H,B)*(180/Math.PI);return j<0&&(j+=360),j},calculateDistance=([C,I],[$,E])=>{const B=E-I,H=$-C;return Math.sqrt(B*B+H*H)},STAGE_EVENT={battleStart:"battleStart",turnStart:"turnStart",turnEnd:"turnEnd",enemyTurn:"enemyTurn",enemyActionEnd:"enemyActionEnd",battleEnd:"battleEnd",troopEventStart:"troopEventStart",troopEventEnd:"troopEventEnd"},APP_EVENT={createBattleScene:"createBattleScene",battleSceneReady:"battleSceneReady"};function addStageEventListener(C,I){return Graphics.app.stage.addListener(C,I),()=>{Graphics.app.stage.removeListener(C,I)}}function addStageEventListenerOnce(C,I){const $=addStageEventListener(C,()=>{I(),$()})}class CustomUpdater extends Sprite{constructor(){super(new Bitmap(0,0));Y(this,"lastUpdatedTime",new Date().getTime());Y(this,"funcsToLoop",[])}add($,E={}){const{maxFrame:B,onDestroy:H}=E,U=()=>this.remove($);return this.funcsToLoop.push({func:$,maxFrame:B,onDestroy:H,count:0,remove:U,totalTime:0}),U}remove($){if(this._destroyed)return;const E=this.funcsToLoop.find(B=>B.func===$);pull$1(this.funcsToLoop,E),E!=null&&E.onDestroy&&E.onDestroy()}waitFor($,E,B={}){this.add(H=>{$(H)&&(E(H),H.remove())},B)}update(){super.update();const $=new Date().getTime(),E=($-this.lastUpdatedTime)/1e3;this.lastUpdatedTime=$,this.funcsToLoop[0]&&this.funcsToLoop.forEach(B=>{B.totalTime+=E,B.count+=1;try{B.func({count:B.count,remove:B.remove,delta:E,totalTime:B.totalTime})}catch(H){console.error(H)}B.maxFrame&&B.count>B.maxFrame&&B.remove()})}destroy($){globalThis.customUpdater=null,[...this.funcsToLoop].forEach(E=>E.remove()),this.funcsToLoop=[],super.destroy($)}}const waitForAsync=(C,I)=>new Promise($=>{var E;(E=globalThis.customUpdater)==null||E.waitFor(C,$,I)}),processFrameAsync=(C,I)=>new Promise($=>{var B;const E=H=>C({...H,resolve:j=>{$(j),H.remove()}});(B=globalThis.customUpdater)==null||B.add(E,I)}),hasIntersection=(C,I)=>!isEmpty(intersection$1(C,I)),getTextWeighted=C=>{var B;let I=null;const $=(B=maxBy(C,"priority"))==null?void 0:B.priority;return $?I=C.filter(H=>H.priority===$):I=C,randomByWeight(I,H=>H.weight||1)},handleCondition=(textConfig,state)=>{var C;const{reuse,enemyId,skillId,unitId,enemyHp,preTextLabel,script,upperHp,lowerHp,totalHp}=textConfig;let isUsed=!1,isPreTextExist=!1;return(C=state.textLog)==null||C.forEach(I=>{I===textConfig&&(isUsed=!0),preTextLabel&&textConfig.label&&preTextLabel.includes(textConfig.label)&&(isPreTextExist=!0)}),isUsed&&!reuse||!isNil(enemyId)&&!enemyId.includes(state.enemyId)||!isNil(skillId)&&!skillId.includes(state.skillId||0)||!isNil(unitId)&&!hasIntersection(state.unitTypes,unitId)||!isNil(enemyHp)&&enemyHp<(state.enemyHpRate||100)||!isNil(upperHp)&&upperHp<state.upperHp||!isNil(lowerHp)&&lowerHp<state.lowerHp||!isNil(totalHp)&&totalHp<state.upperHp+state.lowerHp||!isNil(preTextLabel)&&!isPreTextExist?!1:script?eval(script):!0},getTextFromPool=(C,I,$)=>{const E=C.filter(H=>handleCondition(H,I)),B=getTextWeighted(E);return!B&&$?C.find(H=>{var U;return(U=H.skillId)==null?void 0:U.includes(I.skillId||0)})||C[0]:B},getState=(C,I={})=>{const $=calculateEnemiesHpRate(),E=C.battleController.battleLog.map(H=>H.text).filter(Boolean);return{enemyId:C.enemyConfig.id,textLog:E,enemyHpRate:$,puzzle:C,upperHp:C.heroine.upperHp,lowerHp:C.heroine.lowerHp,...I}};var c$6=`attribute vec2 aVertexPosition;
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
`;let _$1=class extends core.Filter{constructor(I=4,$=3,E=!1){super(c$6,E?y$1:v$3),this._kernels=[],this._blur=4,this._quality=3,this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new core.Point,this.pixelSize=1,this._clamp=E,Array.isArray(I)?this.kernels=I:(this._blur=I,this.quality=$)}apply(I,$,E,B){const H=this._pixelSize.x/$._frame.width,U=this._pixelSize.y/$._frame.height;let j;if(this._quality===1||this._blur===0)j=this._kernels[0]+.5,this.uniforms.uOffset[0]=j*H,this.uniforms.uOffset[1]=j*U,I.applyFilter(this,$,E,B);else{const X=I.getFilterTexture();let V=$,q=X,Z;const K=this._quality-1;for(let J=0;J<K;J++)j=this._kernels[J]+.5,this.uniforms.uOffset[0]=j*H,this.uniforms.uOffset[1]=j*U,I.applyFilter(this,V,q,1),Z=V,V=q,q=Z;j=this._kernels[K]+.5,this.uniforms.uOffset[0]=j*H,this.uniforms.uOffset[1]=j*U,I.applyFilter(this,V,E,B),I.returnFilterTexture(X)}}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((I,$)=>I+$+.5,0))}_generateKernels(){const I=this._blur,$=this._quality,E=[I];if(I>0){let B=I;const H=I/$;for(let U=1;U<$;U++)B-=H,E.push(B)}this._kernels=E,this._updatePadding()}get kernels(){return this._kernels}set kernels(I){Array.isArray(I)&&I.length>0?(this._kernels=I,this._quality=I.length,this._blur=Math.max(...I)):(this._kernels=[0],this._quality=1)}get clamp(){return this._clamp}set pixelSize(I){typeof I=="number"?(this._pixelSize.x=I,this._pixelSize.y=I):Array.isArray(I)?(this._pixelSize.x=I[0],this._pixelSize.y=I[1]):I instanceof core.Point?(this._pixelSize.x=I.x,this._pixelSize.y=I.y):(this._pixelSize.x=1,this._pixelSize.y=1)}get pixelSize(){return this._pixelSize}get quality(){return this._quality}set quality(I){this._quality=Math.max(1,Math.round(I)),this._generateKernels()}get blur(){return this._blur}set blur(I){this._blur=I,this._generateKernels()}};var a$5=`attribute vec2 aVertexPosition;
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
`;let x$1=class extends core.Filter{constructor(I=.5){super(a$5,m$2),this.threshold=I}get threshold(){return this.uniforms.threshold}set threshold(I){this.uniforms.threshold=I}};var g$2=`uniform sampler2D uSampler;
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
`;const c$5=class extends core.Filter{constructor(I){super(a$5,g$2),this.bloomScale=1,this.brightness=1,this._resolution=core.settings.FILTER_RESOLUTION,typeof I=="number"&&(I={threshold:I});const $=Object.assign(c$5.defaults,I);this.bloomScale=$.bloomScale,this.brightness=$.brightness;const{kernels:E,blur:B,quality:H,pixelSize:U,resolution:j}=$;this._extractFilter=new x$1($.threshold),this._extractFilter.resolution=j,this._blurFilter=E?new _$1(E):new _$1(B,H),this.pixelSize=U,this.resolution=j}apply(I,$,E,B,H){const U=I.getFilterTexture();this._extractFilter.apply(I,$,U,1,H);const j=I.getFilterTexture();this._blurFilter.apply(I,U,j,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=j,I.applyFilter(this,$,E,B),I.returnFilterTexture(j),I.returnFilterTexture(U)}get resolution(){return this._resolution}set resolution(I){this._resolution=I,this._extractFilter&&(this._extractFilter.resolution=I),this._blurFilter&&(this._blurFilter.resolution=I)}get threshold(){return this._extractFilter.threshold}set threshold(I){this._extractFilter.threshold=I}get kernels(){return this._blurFilter.kernels}set kernels(I){this._blurFilter.kernels=I}get blur(){return this._blurFilter.blur}set blur(I){this._blurFilter.blur=I}get quality(){return this._blurFilter.quality}set quality(I){this._blurFilter.quality=I}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(I){this._blurFilter.pixelSize=I}};let b$1=c$5;b$1.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:core.settings.FILTER_RESOLUTION};/*!
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
  ***************************************************************************** */var extendStatics$1=function(C,I){return extendStatics$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function($,E){$.__proto__=E}||function($,E){for(var B in E)E.hasOwnProperty(B)&&($[B]=E[B])},extendStatics$1(C,I)};function __extends$1(C,I){extendStatics$1(C,I);function $(){this.constructor=C}C.prototype=I===null?Object.create(I):($.prototype=I.prototype,new $)}var fragment=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;(function(C){__extends$1(I,C);function I($){$===void 0&&($=1);var E=C.call(this,core.defaultVertex,fragment,{uAlpha:1})||this;return E.alpha=$,E}return Object.defineProperty(I.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function($){this.uniforms.uAlpha=$},enumerable:!1,configurable:!0}),I})(core.Filter);/*!
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
  ***************************************************************************** */var extendStatics=function(C,I){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function($,E){$.__proto__=E}||function($,E){for(var B in E)E.hasOwnProperty(B)&&($[B]=E[B])},extendStatics(C,I)};function __extends(C,I){extendStatics(C,I);function $(){this.constructor=C}C.prototype=I===null?Object.create(I):($.prototype=I.prototype,new $)}var vertTemplate=`
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
    }`;function generateBlurVertSource(C,I){var $=Math.ceil(C/2),E=vertTemplate,B="",H;I?H="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":H="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var U=0;U<C;U++){var j=H.replace("%index%",U.toString());j=j.replace("%sampleIndex%",U-($-1)+".0"),B+=j,B+=`
`}return E=E.replace("%blur%",B),E=E.replace("%size%",C.toString()),E}var GAUSSIAN_VALUES={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},fragTemplate=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function generateBlurFragSource(C){for(var I=GAUSSIAN_VALUES[C],$=I.length,E=fragTemplate,B="",H="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",U,j=0;j<C;j++){var X=H.replace("%index%",j.toString());U=j,j>=$&&(U=C-j-1),X=X.replace("%value%",I[U].toString()),B+=X,B+=`
`}return E=E.replace("%blur%",B),E=E.replace("%size%",C.toString()),E}var ENV;(function(C){C[C.WEBGL_LEGACY=0]="WEBGL_LEGACY",C[C.WEBGL=1]="WEBGL",C[C.WEBGL2=2]="WEBGL2"})(ENV||(ENV={}));var RENDERER_TYPE;(function(C){C[C.UNKNOWN=0]="UNKNOWN",C[C.WEBGL=1]="WEBGL",C[C.CANVAS=2]="CANVAS"})(RENDERER_TYPE||(RENDERER_TYPE={}));var BUFFER_BITS;(function(C){C[C.COLOR=16384]="COLOR",C[C.DEPTH=256]="DEPTH",C[C.STENCIL=1024]="STENCIL"})(BUFFER_BITS||(BUFFER_BITS={}));var BLEND_MODES;(function(C){C[C.NORMAL=0]="NORMAL",C[C.ADD=1]="ADD",C[C.MULTIPLY=2]="MULTIPLY",C[C.SCREEN=3]="SCREEN",C[C.OVERLAY=4]="OVERLAY",C[C.DARKEN=5]="DARKEN",C[C.LIGHTEN=6]="LIGHTEN",C[C.COLOR_DODGE=7]="COLOR_DODGE",C[C.COLOR_BURN=8]="COLOR_BURN",C[C.HARD_LIGHT=9]="HARD_LIGHT",C[C.SOFT_LIGHT=10]="SOFT_LIGHT",C[C.DIFFERENCE=11]="DIFFERENCE",C[C.EXCLUSION=12]="EXCLUSION",C[C.HUE=13]="HUE",C[C.SATURATION=14]="SATURATION",C[C.COLOR=15]="COLOR",C[C.LUMINOSITY=16]="LUMINOSITY",C[C.NORMAL_NPM=17]="NORMAL_NPM",C[C.ADD_NPM=18]="ADD_NPM",C[C.SCREEN_NPM=19]="SCREEN_NPM",C[C.NONE=20]="NONE",C[C.SRC_OVER=0]="SRC_OVER",C[C.SRC_IN=21]="SRC_IN",C[C.SRC_OUT=22]="SRC_OUT",C[C.SRC_ATOP=23]="SRC_ATOP",C[C.DST_OVER=24]="DST_OVER",C[C.DST_IN=25]="DST_IN",C[C.DST_OUT=26]="DST_OUT",C[C.DST_ATOP=27]="DST_ATOP",C[C.ERASE=26]="ERASE",C[C.SUBTRACT=28]="SUBTRACT",C[C.XOR=29]="XOR"})(BLEND_MODES||(BLEND_MODES={}));var DRAW_MODES;(function(C){C[C.POINTS=0]="POINTS",C[C.LINES=1]="LINES",C[C.LINE_LOOP=2]="LINE_LOOP",C[C.LINE_STRIP=3]="LINE_STRIP",C[C.TRIANGLES=4]="TRIANGLES",C[C.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",C[C.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(DRAW_MODES||(DRAW_MODES={}));var FORMATS;(function(C){C[C.RGBA=6408]="RGBA",C[C.RGB=6407]="RGB",C[C.ALPHA=6406]="ALPHA",C[C.LUMINANCE=6409]="LUMINANCE",C[C.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",C[C.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",C[C.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(FORMATS||(FORMATS={}));var TARGETS;(function(C){C[C.TEXTURE_2D=3553]="TEXTURE_2D",C[C.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",C[C.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",C[C.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",C[C.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",C[C.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",C[C.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",C[C.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",C[C.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(TARGETS||(TARGETS={}));var TYPES;(function(C){C[C.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",C[C.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",C[C.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",C[C.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",C[C.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",C[C.FLOAT=5126]="FLOAT",C[C.HALF_FLOAT=36193]="HALF_FLOAT"})(TYPES||(TYPES={}));var SCALE_MODES;(function(C){C[C.NEAREST=0]="NEAREST",C[C.LINEAR=1]="LINEAR"})(SCALE_MODES||(SCALE_MODES={}));var WRAP_MODES;(function(C){C[C.CLAMP=33071]="CLAMP",C[C.REPEAT=10497]="REPEAT",C[C.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(WRAP_MODES||(WRAP_MODES={}));var MIPMAP_MODES;(function(C){C[C.OFF=0]="OFF",C[C.POW2=1]="POW2",C[C.ON=2]="ON"})(MIPMAP_MODES||(MIPMAP_MODES={}));var ALPHA_MODES;(function(C){C[C.NPM=0]="NPM",C[C.UNPACK=1]="UNPACK",C[C.PMA=2]="PMA",C[C.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",C[C.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",C[C.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(ALPHA_MODES||(ALPHA_MODES={}));var CLEAR_MODES;(function(C){C[C.NO=0]="NO",C[C.YES=1]="YES",C[C.AUTO=2]="AUTO",C[C.BLEND=0]="BLEND",C[C.CLEAR=1]="CLEAR",C[C.BLIT=2]="BLIT"})(CLEAR_MODES||(CLEAR_MODES={}));var GC_MODES;(function(C){C[C.AUTO=0]="AUTO",C[C.MANUAL=1]="MANUAL"})(GC_MODES||(GC_MODES={}));var PRECISION;(function(C){C.LOW="lowp",C.MEDIUM="mediump",C.HIGH="highp"})(PRECISION||(PRECISION={}));var MASK_TYPES;(function(C){C[C.NONE=0]="NONE",C[C.SCISSOR=1]="SCISSOR",C[C.STENCIL=2]="STENCIL",C[C.SPRITE=3]="SPRITE"})(MASK_TYPES||(MASK_TYPES={}));var MSAA_QUALITY;(function(C){C[C.NONE=0]="NONE",C[C.LOW=2]="LOW",C[C.MEDIUM=4]="MEDIUM",C[C.HIGH=8]="HIGH"})(MSAA_QUALITY||(MSAA_QUALITY={}));var BlurFilterPass=function(C){__extends(I,C);function I($,E,B,H,U){E===void 0&&(E=8),B===void 0&&(B=4),H===void 0&&(H=settings.settings.FILTER_RESOLUTION),U===void 0&&(U=5);var j=this,X=generateBlurVertSource(U,$),V=generateBlurFragSource(U);return j=C.call(this,X,V)||this,j.horizontal=$,j.resolution=H,j._quality=0,j.quality=B,j.blur=E,j}return I.prototype.apply=function($,E,B,H){if(B?this.horizontal?this.uniforms.strength=1/B.width*(B.width/E.width):this.uniforms.strength=1/B.height*(B.height/E.height):this.horizontal?this.uniforms.strength=1/$.renderer.width*($.renderer.width/E.width):this.uniforms.strength=1/$.renderer.height*($.renderer.height/E.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)$.applyFilter(this,E,B,H);else{var U=$.getFilterTexture(),j=$.renderer,X=E,V=U;this.state.blend=!1,$.applyFilter(this,X,V,CLEAR_MODES.CLEAR);for(var q=1;q<this.passes-1;q++){$.bindAndClear(X,CLEAR_MODES.BLIT),this.uniforms.uSampler=V;var Z=V;V=X,X=Z,j.shader.bind(this),j.geometry.draw(5)}this.state.blend=!0,$.applyFilter(this,V,B,H),$.returnFilterTexture(U)}},Object.defineProperty(I.prototype,"blur",{get:function(){return this.strength},set:function($){this.padding=1+Math.abs($)*2,this.strength=$},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"quality",{get:function(){return this._quality},set:function($){this._quality=$,this.passes=$},enumerable:!1,configurable:!0}),I}(core.Filter);(function(C){__extends(I,C);function I($,E,B,H){$===void 0&&($=8),E===void 0&&(E=4),B===void 0&&(B=settings.settings.FILTER_RESOLUTION),H===void 0&&(H=5);var U=C.call(this)||this;return U.blurXFilter=new BlurFilterPass(!0,$,E,B,H),U.blurYFilter=new BlurFilterPass(!1,$,E,B,H),U.resolution=B,U.quality=E,U.blur=$,U.repeatEdgePixels=!1,U}return I.prototype.apply=function($,E,B,H){var U=Math.abs(this.blurXFilter.strength),j=Math.abs(this.blurYFilter.strength);if(U&&j){var X=$.getFilterTexture();this.blurXFilter.apply($,E,X,CLEAR_MODES.CLEAR),this.blurYFilter.apply($,X,B,H),$.returnFilterTexture(X)}else j?this.blurYFilter.apply($,E,B,H):this.blurXFilter.apply($,E,B,H)},I.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(I.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function($){this.blurXFilter.blur=this.blurYFilter.blur=$,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function($){this.blurXFilter.quality=this.blurYFilter.quality=$},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function($){this.blurXFilter.blur=$,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function($){this.blurYFilter.blur=$,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function($){this.blurYFilter.blendMode=$},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function($){this._repeatEdgePixels=$,this.updatePadding()},enumerable:!1,configurable:!0}),I})(core.Filter);var d$3=`attribute vec2 aVertexPosition;
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
`;const n$3=class extends core.Filter{constructor(I){super(d$3,u$3),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,n$3.defaults,I)}apply(I,$,E,B){const{width:H,height:U}=$.filterFrame;this.uniforms.dimensions[0]=H,this.uniforms.dimensions[1]=U,I.applyFilter(this,$,E,B)}get radius(){return this.uniforms.radius}set radius(I){this.uniforms.radius=I}get strength(){return this.uniforms.strength}set strength(I){this.uniforms.strength=I}get center(){return this.uniforms.center}set center(I){this.uniforms.center=I}};let t$5=n$3;t$5.defaults={center:[.5,.5],radius:100,strength:1};var Q=`const float PI = 3.1415926538;
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
`,v$2=v$2||{};v$2.stringify=function(){var C={"visit_linear-gradient":function(I){return C.visit_gradient(I)},"visit_repeating-linear-gradient":function(I){return C.visit_gradient(I)},"visit_radial-gradient":function(I){return C.visit_gradient(I)},"visit_repeating-radial-gradient":function(I){return C.visit_gradient(I)},visit_gradient:function(I){var $=C.visit(I.orientation);return $&&($+=", "),I.type+"("+$+C.visit(I.colorStops)+")"},visit_shape:function(I){var $=I.value,E=C.visit(I.at),B=C.visit(I.style);return B&&($+=" "+B),E&&($+=" at "+E),$},"visit_default-radial":function(I){var $="",E=C.visit(I.at);return E&&($+=E),$},"visit_extent-keyword":function(I){var $=I.value,E=C.visit(I.at);return E&&($+=" at "+E),$},"visit_position-keyword":function(I){return I.value},visit_position:function(I){return C.visit(I.value.x)+" "+C.visit(I.value.y)},"visit_%":function(I){return I.value+"%"},visit_em:function(I){return I.value+"em"},visit_px:function(I){return I.value+"px"},visit_literal:function(I){return C.visit_color(I.value,I)},visit_hex:function(I){return C.visit_color("#"+I.value,I)},visit_rgb:function(I){return C.visit_color("rgb("+I.value.join(", ")+")",I)},visit_rgba:function(I){return C.visit_color("rgba("+I.value.join(", ")+")",I)},visit_color:function(I,$){var E=I,B=C.visit($.length);return B&&(E+=" "+B),E},visit_angular:function(I){return I.value+"deg"},visit_directional:function(I){return"to "+I.value},visit_array:function(I){var $="",E=I.length;return I.forEach(function(B,H){$+=C.visit(B),H<E-1&&($+=", ")}),$},visit:function(I){if(!I)return"";var $="";if(I instanceof Array)return C.visit_array(I,$);if(I.type){var E=C["visit_"+I.type];if(E)return E(I);throw Error("Missing visitor visit_"+I.type)}else throw Error("Invalid node.")}};return function(I){return C.visit(I)}}();var v$2=v$2||{};v$2.parse=function(){var C={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},I="";function $(xe){var Pe=new Error(I+": "+xe);throw Pe.source=I,Pe}function E(){var xe=B();return I.length>0&&$("Invalid input not EOF"),xe}function B(){return $e(H)}function H(){return U("linear-gradient",C.linearGradient,X)||U("repeating-linear-gradient",C.repeatingLinearGradient,X)||U("radial-gradient",C.radialGradient,Z)||U("repeating-radial-gradient",C.repeatingRadialGradient,Z)}function U(xe,Pe,Ae){return j(Pe,function(Me){var je=Ae();return je&&(Re(C.comma)||$("Missing comma before color stops")),{type:xe,orientation:je,colorStops:$e(Fe)}})}function j(xe,Pe){var Ae=Re(xe);if(Ae){Re(C.startCall)||$("Missing (");var Me=Pe(Ae);return Re(C.endCall)||$("Missing )"),Me}}function X(){return V()||q()}function V(){return Ee("directional",C.sideOrCorner,1)}function q(){return Ee("angular",C.angleValue,1)}function Z(){var xe,Pe=K(),Ae;return Pe&&(xe=[],xe.push(Pe),Ae=I,Re(C.comma)&&(Pe=K(),Pe?xe.push(Pe):I=Ae)),xe}function K(){var xe=J()||Te();if(xe)xe.at=_e();else{var Pe=Se();if(Pe){xe=Pe;var Ae=_e();Ae&&(xe.at=Ae)}else{var Me=Ie();Me&&(xe={type:"default-radial",at:Me})}}return xe}function J(){var xe=Ee("shape",/^(circle)/i,0);return xe&&(xe.style=He()||Se()),xe}function Te(){var xe=Ee("shape",/^(ellipse)/i,0);return xe&&(xe.style=Ne()||Se()),xe}function Se(){return Ee("extent-keyword",C.extentKeywords,1)}function _e(){if(Ee("position",/^at/,0)){var xe=Ie();return xe||$("Missing positioning value"),xe}}function Ie(){var xe=we();if(xe.x||xe.y)return{type:"position",value:xe}}function we(){return{x:Ne(),y:Ne()}}function $e(xe){var Pe=xe(),Ae=[];if(Pe)for(Ae.push(Pe);Re(C.comma);)Pe=xe(),Pe?Ae.push(Pe):$("One extra comma");return Ae}function Fe(){var xe=ze();return xe||$("Expected color definition"),xe.length=Ne(),xe}function ze(){return ke()||Le()||Oe()||Ge()}function Ge(){return Ee("literal",C.literalColor,0)}function ke(){return Ee("hex",C.hexColor,1)}function Oe(){return j(C.rgbColor,function(){return{type:"rgb",value:$e(Be)}})}function Le(){return j(C.rgbaColor,function(){return{type:"rgba",value:$e(Be)}})}function Be(){return Re(C.number)[1]}function Ne(){return Ee("%",C.percentageValue,1)||De()||He()}function De(){return Ee("position-keyword",C.positionKeywords,1)}function He(){return Ee("px",C.pixelValue,1)||Ee("em",C.emValue,1)}function Ee(xe,Pe,Ae){var Me=Re(Pe);if(Me)return{type:xe,value:Me[Ae]}}function Re(xe){var Pe,Ae;return Ae=/^[\n\r\t\s]+/.exec(I),Ae&&Ue(Ae[0].length),Pe=xe.exec(I),Pe&&Ue(Pe[0].length),Pe}function Ue(xe){I=I.substr(xe)}return function(xe){return I=xe.toString(),E()}}();var ee=v$2.parse;v$2.stringify;var R={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function te(C){var I,$=[],E=1,B;if(typeof C=="string")if(R[C])$=R[C].slice(),B="rgb";else if(C==="transparent")E=0,B="rgb",$=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(C)){var H=C.slice(1),U=H.length,j=U<=4;E=1,j?($=[parseInt(H[0]+H[0],16),parseInt(H[1]+H[1],16),parseInt(H[2]+H[2],16)],U===4&&(E=parseInt(H[3]+H[3],16)/255)):($=[parseInt(H[0]+H[1],16),parseInt(H[2]+H[3],16),parseInt(H[4]+H[5],16)],U===8&&(E=parseInt(H[6]+H[7],16)/255)),$[0]||($[0]=0),$[1]||($[1]=0),$[2]||($[2]=0),B="rgb"}else if(I=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(C)){var X=I[1],V=X==="rgb",H=X.replace(/a$/,"");B=H;var U=H==="cmyk"?4:H==="gray"?1:3;$=I[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(K,J){if(/%$/.test(K))return J===U?parseFloat(K)/100:H==="rgb"?parseFloat(K)*255/100:parseFloat(K);if(H[J]==="h"){if(/deg$/.test(K))return parseFloat(K);if(G[K]!==void 0)return G[K]}return parseFloat(K)}),X===H&&$.push(1),E=V||$[U]===void 0?1:$[U],$=$.slice(0,U)}else C.length>10&&/[0-9](?:\s|\/)/.test(C)&&($=C.match(/([0-9]+)/g).map(function(q){return parseFloat(q)}),B=C.match(/([a-z])/ig).join("").toLowerCase());else isNaN(C)?Array.isArray(C)||C.length?($=[C[0],C[1],C[2]],B="rgb",E=C.length===4?C[3]:1):C instanceof Object&&(C.r!=null||C.red!=null||C.R!=null?(B="rgb",$=[C.r||C.red||C.R||0,C.g||C.green||C.G||0,C.b||C.blue||C.B||0]):(B="hsl",$=[C.h||C.hue||C.H||0,C.s||C.saturation||C.S||0,C.l||C.lightness||C.L||C.b||C.brightness]),E=C.a||C.alpha||C.opacity||1,C.opacity!=null&&(E/=100)):(B="rgb",$=[C>>>16,(C&65280)>>>8,C&255]);return{space:B,values:$,alpha:E}}var A={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},S={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(C){var I=C[0]/360,$=C[1]/100,E=C[2]/100,B,H,U,j,X;if($===0)return X=E*255,[X,X,X];E<.5?H=E*(1+$):H=E+$-E*$,B=2*E-H,j=[0,0,0];for(var V=0;V<3;V++)U=I+1/3*-(V-1),U<0?U++:U>1&&U--,6*U<1?X=B+(H-B)*6*U:2*U<1?X=H:3*U<2?X=B+(H-B)*(2/3-U)*6:X=B,j[V]=X*255;return j}};A.hsl=function(C){var I=C[0]/255,$=C[1]/255,E=C[2]/255,B=Math.min(I,$,E),H=Math.max(I,$,E),U=H-B,j,X,V;return H===B?j=0:I===H?j=($-E)/U:$===H?j=2+(E-I)/U:E===H&&(j=4+(I-$)/U),j=Math.min(j*60,360),j<0&&(j+=360),V=(B+H)/2,H===B?X=0:V<=.5?X=U/(H+B):X=U/(2-H-B),[j,X*100,V*100]};function re(C){Array.isArray(C)&&C.raw&&(C=String.raw(...arguments));var I,$=te(C);if(!$.space)return[];const E=$.space[0]==="h"?S.min:A.min,B=$.space[0]==="h"?S.max:A.max;return I=Array(3),I[0]=Math.min(Math.max($.values[0],E[0]),B[0]),I[1]=Math.min(Math.max($.values[1],E[1]),B[1]),I[2]=Math.min(Math.max($.values[2],E[2]),B[2]),$.space[0]==="h"&&(I=S.rgb(I)),I.push(Math.min(Math.max($.alpha,0),1)),I}function L(C){switch(typeof C){case"string":return ne(C);case"number":return core.utils.hex2rgb(C);default:return C}}function ne(C){const I=re(C);if(!I)throw new Error(`Unable to parse color "${C}" as RGBA.`);return[I[0]/255,I[1]/255,I[2]/255,I[3]]}function ie(C){const I=ee(ge(C));if(I.length===0)throw new Error("Invalid CSS gradient.");if(I.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const $=I[0],E=oe($.type),B=ae($.colorStops),H=ce($.orientation);return{type:E,stops:B,angle:H}}function oe(C){const I={"linear-gradient":0,"radial-gradient":1};if(!(C in I))throw new Error(`Unsupported gradient type "${C}"`);return I[C]}function ae(C){const I=ue(C),$=[];for(let E=0;E<C.length;E++){const B=le(C[E]);$.push({offset:I[E],color:B.slice(0,3),alpha:B[3]})}return $}function le(C){return L(se(C))}function se(C){switch(C.type){case"hex":return`#${C.value}`;case"literal":return C.value;default:return`${C.type}(${C.value.join(",")})`}}function ue(C){const I=[];for(let B=0;B<C.length;B++){const H=C[B];let U=-1;H.type==="literal"&&H.length&&"type"in H.length&&H.length.type==="%"&&"value"in H.length&&(U=parseFloat(H.length.value)/100),I.push(U)}const $=B=>{for(let H=B;H<I.length;H++)if(I[H]!==-1)return{indexDelta:H-B,offset:I[H]};return{indexDelta:I.length-1-B,offset:1}};let E=0;for(let B=0;B<I.length;B++){const H=I[B];if(H!==-1)E=H;else if(B===0)I[B]=0;else if(B+1===I.length)I[B]=1;else{const U=$(B),j=(U.offset-E)/(1+U.indexDelta);for(let X=0;X<=U.indexDelta;X++)I[B+X]=E+(X+1)*j;B+=U.indexDelta,E=I[B]}}return I.map(fe)}function fe(C){return C.toString().length>6?parseFloat(C.toString().substring(0,6)):C}function ce(C){if(typeof C>"u")return 0;if("type"in C&&"value"in C)switch(C.type){case"angular":return parseFloat(C.value);case"directional":return pe(C.value)}return 0}function pe(C){const I={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(C in I))throw new Error(`Unsupported directional value "${C}"`);return I[C]}function ge(C){let I=C.replace(/\s{2,}/gu," ");return I=I.replace(/;/g,""),I=I.replace(/ ,/g,","),I=I.replace(/\( /g,"("),I=I.replace(/ \)/g,")"),I.trim()}var he=Object.defineProperty,me=Object.defineProperties,de=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,z$1=(C,I,$)=>I in C?he(C,I,{enumerable:!0,configurable:!0,writable:!0,value:$}):C[I]=$,k=(C,I)=>{for(var $ in I||(I={}))ve.call(I,$)&&z$1(C,$,I[$]);if(N)for(var $ of N(I))ye.call(I,$)&&z$1(C,$,I[$]);return C},be=(C,I)=>me(C,de(I));const D=90;function Ce(C){return[...C].sort((I,$)=>I.offset-$.offset)}const P$1=class extends core.Filter{constructor(I){I&&"css"in I&&(I=be(k({},ie(I.css||"")),{alpha:I.alpha,maxColors:I.maxColors}));const $=k(k({},P$1.defaults),I);if(!$.stops||$.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");super(W,Q),this._stops=[],this.autoFit=!1,Object.assign(this,$)}get stops(){return this._stops}set stops(I){const $=Ce(I),E=new Float32Array($.length*3),B=0,H=1,U=2;for(let j=0;j<$.length;j++){const X=L($[j].color),V=j*3;E[V+B]=X[B],E[V+H]=X[H],E[V+U]=X[U]}this.uniforms.uColors=E,this.uniforms.uOffsets=$.map(j=>j.offset),this.uniforms.uAlphas=$.map(j=>j.alpha),this.uniforms.uNumStops=$.length,this._stops=$}set type(I){this.uniforms.uType=I}get type(){return this.uniforms.uType}set angle(I){this.uniforms.uAngle=I-D}get angle(){return this.uniforms.uAngle+D}set alpha(I){this.uniforms.uAlpha=I}get alpha(){return this.uniforms.uAlpha}set maxColors(I){this.uniforms.uMaxColors=I}get maxColors(){return this.uniforms.uMaxColors}};let y=P$1;y.LINEAR=0,y.RADIAL=1,y.CONIC=2,y.defaults={type:P$1.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0};var a$4=`attribute vec2 aVertexPosition;
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
`;const e$1=class extends core.Filter{constructor(I){super(a$4,g$1),this.time=0,this.seed=0,this.uniforms.dimensions=new Float32Array(2),Object.assign(this,e$1.defaults,I)}apply(I,$,E,B){const{width:H,height:U}=$.filterFrame;this.uniforms.dimensions[0]=H,this.uniforms.dimensions[1]=U,this.uniforms.seed=this.seed,this.uniforms.time=this.time,I.applyFilter(this,$,E,B)}set curvature(I){this.uniforms.curvature=I}get curvature(){return this.uniforms.curvature}set lineWidth(I){this.uniforms.lineWidth=I}get lineWidth(){return this.uniforms.lineWidth}set lineContrast(I){this.uniforms.lineContrast=I}get lineContrast(){return this.uniforms.lineContrast}set verticalLine(I){this.uniforms.verticalLine=I}get verticalLine(){return this.uniforms.verticalLine}set noise(I){this.uniforms.noise=I}get noise(){return this.uniforms.noise}set noiseSize(I){this.uniforms.noiseSize=I}get noiseSize(){return this.uniforms.noiseSize}set vignetting(I){this.uniforms.vignetting=I}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(I){this.uniforms.vignettingAlpha=I}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(I){this.uniforms.vignettingBlur=I}get vignettingBlur(){return this.uniforms.vignettingBlur}};let t$4=e$1;t$4.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0};var w=`attribute vec2 aVertexPosition;
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
}`,P=Object.defineProperty,c$4=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,_=(C,I,$)=>I in C?P(C,I,{enumerable:!0,configurable:!0,writable:!0,value:$}):C[I]=$,b=(C,I)=>{for(var $ in I||(I={}))T.call(I,$)&&_(C,$,I[$]);if(c$4)for(var $ of c$4(I))z.call(I,$)&&_(C,$,I[$]);return C};const o$3=class extends core.Filter{constructor(I){super(),this.angle=45,this._distance=5,this._resolution=core.settings.FILTER_RESOLUTION;const $=I?b(b({},o$3.defaults),I):o$3.defaults,{kernels:E,blur:B,quality:H,pixelSize:U,resolution:j}=$;this._offset=new core.ObservablePoint(this._updatePadding,this),this._tintFilter=new core.Filter(w,O),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=this._offset,this._tintFilter.resolution=j,this._blurFilter=E?new _$1(E):new _$1(B,H),this.pixelSize=U,this.resolution=j;const{shadowOnly:X,rotation:V,distance:q,offset:Z,alpha:K,color:J}=$;this.shadowOnly=X,V!==void 0&&q!==void 0?(this.rotation=V,this.distance=q):this.offset=Z,this.alpha=K,this.color=J}apply(I,$,E,B){const H=I.getFilterTexture();this._tintFilter.apply(I,$,H,1),this._blurFilter.apply(I,H,E,B),this.shadowOnly!==!0&&I.applyFilter(this,$,E,0),I.returnFilterTexture(H)}_updatePadding(){const I=Math.max(Math.abs(this._offset.x),Math.abs(this._offset.y));this.padding=I+this.blur*2}_updateShift(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))}set offset(I){this._offset.copyFrom(I),this._updatePadding()}get offset(){return this._offset}get resolution(){return this._resolution}set resolution(I){this._resolution=I,this._tintFilter&&(this._tintFilter.resolution=I),this._blurFilter&&(this._blurFilter.resolution=I)}get distance(){return this._distance}set distance(I){core.utils.deprecation("5.3.0","DropShadowFilter distance is deprecated, use offset"),this._distance=I,this._updatePadding(),this._updateShift()}get rotation(){return this.angle/core.DEG_TO_RAD}set rotation(I){core.utils.deprecation("5.3.0","DropShadowFilter rotation is deprecated, use offset"),this.angle=I*core.DEG_TO_RAD,this._updateShift()}get alpha(){return this._tintFilter.uniforms.alpha}set alpha(I){this._tintFilter.uniforms.alpha=I}get color(){return core.utils.rgb2hex(this._tintFilter.uniforms.color)}set color(I){core.utils.hex2rgb(I,this._tintFilter.uniforms.color)}get kernels(){return this._blurFilter.kernels}set kernels(I){this._blurFilter.kernels=I}get blur(){return this._blurFilter.blur}set blur(I){this._blurFilter.blur=I,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(I){this._blurFilter.quality=I}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(I){this._blurFilter.pixelSize=I}};let F=o$3;F.defaults={offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:core.settings.FILTER_RESOLUTION};var p$1=`attribute vec2 aVertexPosition;
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
`;const c$3=class extends core.Filter{constructor(I){super(p$1,M),this.offset=100,this.fillMode=c$3.TRANSPARENT,this.average=!1,this.seed=0,this.minSize=8,this.sampleSize=512,this._slices=0,this._offsets=new Float32Array(1),this._sizes=new Float32Array(1),this._direction=-1,this.uniforms.dimensions=new Float32Array(2),this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=core.Texture.from(this._canvas,{scaleMode:core.SCALE_MODES.NEAREST}),Object.assign(this,c$3.defaults,I)}apply(I,$,E,B){const{width:H,height:U}=$.filterFrame;this.uniforms.dimensions[0]=H,this.uniforms.dimensions[1]=U,this.uniforms.aspect=U/H,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,I.applyFilter(this,$,E,B)}_randomizeSizes(){const I=this._sizes,$=this._slices-1,E=this.sampleSize,B=Math.min(this.minSize/E,.9/this._slices);if(this.average){const H=this._slices;let U=1;for(let j=0;j<$;j++){const X=U/(H-j),V=Math.max(X*(1-Math.random()*.6),B);I[j]=V,U-=V}I[$]=U}else{let H=1;const U=Math.sqrt(1/this._slices);for(let j=0;j<$;j++){const X=Math.max(U*H*Math.random(),B);I[j]=X,H-=X}I[$]=H}this.shuffle()}shuffle(){const I=this._sizes,$=this._slices-1;for(let E=$;E>0;E--){const B=Math.random()*E>>0,H=I[E];I[E]=I[B],I[B]=H}}_randomizeOffsets(){for(let I=0;I<this._slices;I++)this._offsets[I]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const I=this.sampleSize,$=this.texture,E=this._canvas.getContext("2d");E.clearRect(0,0,8,I);let B,H=0;for(let U=0;U<this._slices;U++){B=Math.floor(this._offsets[U]*256);const j=this._sizes[U]*I,X=B>0?B:0,V=B<0?-B:0;E.fillStyle=`rgba(${X}, ${V}, 0, 1)`,E.fillRect(0,H>>0,I,j+1>>0),H+=j}$.baseTexture.update(),this.uniforms.displacementMap=$}set sizes(I){const $=Math.min(this._slices,I.length);for(let E=0;E<$;E++)this._sizes[E]=I[E]}get sizes(){return this._sizes}set offsets(I){const $=Math.min(this._slices,I.length);for(let E=0;E<$;E++)this._offsets[E]=I[E]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(I){this._slices!==I&&(this._slices=I,this.uniforms.slices=I,this._sizes=this.uniforms.slicesWidth=new Float32Array(I),this._offsets=this.uniforms.slicesOffset=new Float32Array(I),this.refresh())}get direction(){return this._direction}set direction(I){if(this._direction===I)return;this._direction=I;const $=I*core.DEG_TO_RAD;this.uniforms.sinDir=Math.sin($),this.uniforms.cosDir=Math.cos($)}get red(){return this.uniforms.red}set red(I){this.uniforms.red=I}get green(){return this.uniforms.green}set green(I){this.uniforms.green=I}get blue(){return this.uniforms.blue}set blue(I){this.uniforms.blue=I}destroy(){var I;(I=this.texture)==null||I.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};let l$4=c$3;l$4.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},l$4.TRANSPARENT=0,l$4.ORIGINAL=1,l$4.LOOP=2,l$4.CLAMP=3,l$4.MIRROR=4;var f$3=`attribute vec2 aVertexPosition;
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
`;const e=class extends core.Filter{constructor(C){const I=Object.assign({},e.defaults,C),{outerStrength:$,innerStrength:E,color:B,knockout:H,quality:U,alpha:j}=I,X=Math.round(I.distance);super(f$3,p.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/U/X).toFixed(7)}`).replace(/__DIST__/gi,`${X.toFixed(0)}.0`)),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.uniforms.alpha=1,Object.assign(this,{color:B,outerStrength:$,innerStrength:E,padding:X,knockout:H,alpha:j})}get color(){return core.utils.rgb2hex(this.uniforms.glowColor)}set color(C){core.utils.hex2rgb(C,this.uniforms.glowColor)}get outerStrength(){return this.uniforms.outerStrength}set outerStrength(C){this.uniforms.outerStrength=C}get innerStrength(){return this.uniforms.innerStrength}set innerStrength(C){this.uniforms.innerStrength=C}get knockout(){return this.uniforms.knockout}set knockout(C){this.uniforms.knockout=C}get alpha(){return this.uniforms.alpha}set alpha(C){this.uniforms.alpha=C}};let l$3=e;l$3.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1,alpha:1};var v$1=`attribute vec2 aVertexPosition;
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
`;const a$3=class extends core.Filter{constructor(I){super(v$1,x.replace("${perlin}",f$2)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const $=Object.assign(a$3.defaults,I);this._angleLight=new core.Point,this.angle=$.angle,this.gain=$.gain,this.lacunarity=$.lacunarity,this.alpha=$.alpha,this.parallel=$.parallel,this.center=$.center,this.time=$.time}apply(I,$,E,B){const{width:H,height:U}=$.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=H,this.uniforms.dimensions[1]=U,this.uniforms.aspect=U/H,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,I.applyFilter(this,$,E,B)}get angle(){return this._angle}set angle(I){this._angle=I;const $=I*core.DEG_TO_RAD;this._angleLight.x=Math.cos($),this._angleLight.y=Math.sin($)}get gain(){return this.uniforms.gain}set gain(I){this.uniforms.gain=I}get lacunarity(){return this.uniforms.lacunarity}set lacunarity(I){this.uniforms.lacunarity=I}get alpha(){return this.uniforms.alpha}set alpha(I){this.uniforms.alpha=I}};let r$4=a$3;r$4.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};var i$5=`attribute vec2 aVertexPosition;
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
`;const t$3=class extends core.Filter{constructor(I){super(i$5,s$4),this._hue=0;const $=Object.assign({},t$3.defaults,I);Object.assign(this,$)}get hue(){return this._hue}set hue(I){this._hue=I,this.uniforms.uHue=this._hue*(Math.PI/180)}get alpha(){return this.uniforms.uAlpha}set alpha(I){this.uniforms.uAlpha=I}get colorize(){return this.uniforms.uColorize}set colorize(I){this.uniforms.uColorize=I}get lightness(){return this.uniforms.uLightness}set lightness(I){this.uniforms.uLightness=I}get saturation(){return this.uniforms.uSaturation}set saturation(I){this.uniforms.uSaturation=I}};let n$2=t$3;n$2.defaults={hue:0,saturation:0,lightness:0,colorize:!1,alpha:1};var l$2=`attribute vec2 aVertexPosition;
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
`;const s$3=class extends core.Filter{constructor(I,$=0){super(l$2,d$2),this.seed=0,this.uniforms.dimensions=new Float32Array(2),typeof I=="number"?(this.seed=I,I=void 0):this.seed=$,Object.assign(this,s$3.defaults,I)}apply(I,$,E,B){var H,U;this.uniforms.dimensions[0]=(H=$.filterFrame)==null?void 0:H.width,this.uniforms.dimensions[1]=(U=$.filterFrame)==null?void 0:U.height,this.uniforms.seed=this.seed,I.applyFilter(this,$,E,B)}set sepia(I){this.uniforms.sepia=I}get sepia(){return this.uniforms.sepia}set noise(I){this.uniforms.noise=I}get noise(){return this.uniforms.noise}set noiseSize(I){this.uniforms.noiseSize=I}get noiseSize(){return this.uniforms.noiseSize}set scratch(I){this.uniforms.scratch=I}get scratch(){return this.uniforms.scratch}set scratchDensity(I){this.uniforms.scratchDensity=I}get scratchDensity(){return this.uniforms.scratchDensity}set scratchWidth(I){this.uniforms.scratchWidth=I}get scratchWidth(){return this.uniforms.scratchWidth}set vignetting(I){this.uniforms.vignetting=I}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(I){this.uniforms.vignettingAlpha=I}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(I){this.uniforms.vignettingBlur=I}get vignettingBlur(){return this.uniforms.vignettingBlur}};let r$3=s$3;r$3.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3};var u$2=`attribute vec2 aVertexPosition;
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
`;const r$2=class extends core.Filter{constructor(I=1,$=0,E=.1,B=1,H=!1){super(u$2,c$2.replace(/\$\{angleStep\}/,r$2.getAngleStep(E))),this._thickness=1,this._alpha=1,this._knockout=!1,this.uniforms.uThickness=new Float32Array([0,0]),this.uniforms.uColor=new Float32Array([0,0,0,1]),this.uniforms.uAlpha=B,this.uniforms.uKnockout=H,Object.assign(this,{thickness:I,color:$,quality:E,alpha:B,knockout:H})}static getAngleStep(I){const $=Math.max(I*r$2.MAX_SAMPLES,r$2.MIN_SAMPLES);return(Math.PI*2/$).toFixed(7)}apply(I,$,E,B){this.uniforms.uThickness[0]=this._thickness/$._frame.width,this.uniforms.uThickness[1]=this._thickness/$._frame.height,this.uniforms.uAlpha=this._alpha,this.uniforms.uKnockout=this._knockout,I.applyFilter(this,$,E,B)}get alpha(){return this._alpha}set alpha(I){this._alpha=I}get color(){return core.utils.rgb2hex(this.uniforms.uColor)}set color(I){core.utils.hex2rgb(I,this.uniforms.uColor)}get knockout(){return this._knockout}set knockout(I){this._knockout=I}get thickness(){return this._thickness}set thickness(I){this._thickness=I,this.padding=I}};let i$4=r$2;i$4.MIN_SAMPLES=1,i$4.MAX_SAMPLES=100;var m$1=`attribute vec2 aVertexPosition;
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
`;const i$3=class extends core.Filter{constructor(I){super(m$1,s$2),this.time=0,this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,i$3.defaults,I)}apply(I,$,E,B){var H,U;this.uniforms.dimensions[0]=(H=$.filterFrame)==null?void 0:H.width,this.uniforms.dimensions[1]=(U=$.filterFrame)==null?void 0:U.height,this.uniforms.time=this.time,I.applyFilter(this,$,E,B)}set mirror(I){this.uniforms.mirror=I}get mirror(){return this.uniforms.mirror}set boundary(I){this.uniforms.boundary=I}get boundary(){return this.uniforms.boundary}set amplitude(I){this.uniforms.amplitude[0]=I[0],this.uniforms.amplitude[1]=I[1]}get amplitude(){return this.uniforms.amplitude}set waveLength(I){this.uniforms.waveLength[0]=I[0],this.uniforms.waveLength[1]=I[1]}get waveLength(){return this.uniforms.waveLength}set alpha(I){this.uniforms.alpha[0]=I[0],this.uniforms.alpha[1]=I[1]}get alpha(){return this.uniforms.alpha}};let o$2=i$3;o$2.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0};var s$1=`attribute vec2 aVertexPosition;
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
`;const n$1=class extends core.Filter{constructor(I=[0,0],$,E=0){super(s$1,f$1),this.center=I,Object.assign(this,n$1.defaults,$),this.time=E}apply(I,$,E,B){this.uniforms.time=this.time,I.applyFilter(this,$,E,B)}get center(){return this.uniforms.center}set center(I){this.uniforms.center=I}get amplitude(){return this.uniforms.amplitude}set amplitude(I){this.uniforms.amplitude=I}get wavelength(){return this.uniforms.wavelength}set wavelength(I){this.uniforms.wavelength=I}get brightness(){return this.uniforms.brightness}set brightness(I){this.uniforms.brightness=I}get speed(){return this.uniforms.speed}set speed(I){this.uniforms.speed=I}get radius(){return this.uniforms.radius}set radius(I){this.uniforms.radius=I}};let i$2=n$1;i$2.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1};var m=`attribute vec2 aVertexPosition;
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
`;let l$1=class extends core.Filter{constructor(I){var $,E;super(m,c$1),this.uniforms.blur=I.blur,this.uniforms.gradientBlur=I.gradientBlur,this.uniforms.start=($=I.start)!=null?$:new core.Point(0,window.innerHeight/2),this.uniforms.end=(E=I.end)!=null?E:new core.Point(600,window.innerHeight/2),this.uniforms.delta=new core.Point(30,30),this.uniforms.texSize=new core.Point(window.innerWidth,window.innerHeight),this.updateDelta()}updateDelta(){this.uniforms.delta.x=0,this.uniforms.delta.y=0}get blur(){return this.uniforms.blur}set blur(I){this.uniforms.blur=I}get gradientBlur(){return this.uniforms.gradientBlur}set gradientBlur(I){this.uniforms.gradientBlur=I}get start(){return this.uniforms.start}set start(I){this.uniforms.start=I,this.updateDelta()}get end(){return this.uniforms.end}set end(I){this.uniforms.end=I,this.updateDelta()}},a$2=class extends l$1{updateDelta(){const I=this.uniforms.end.x-this.uniforms.start.x,$=this.uniforms.end.y-this.uniforms.start.y,E=Math.sqrt(I*I+$*$);this.uniforms.delta.x=I/E,this.uniforms.delta.y=$/E}},u$1=class extends l$1{updateDelta(){const I=this.uniforms.end.x-this.uniforms.start.x,$=this.uniforms.end.y-this.uniforms.start.y,E=Math.sqrt(I*I+$*$);this.uniforms.delta.x=-$/E,this.uniforms.delta.y=I/E}};const d$1=class extends core.Filter{constructor(I,$,E,B){super(),typeof I=="number"&&(core.utils.deprecation("5.3.0","TiltShiftFilter constructor arguments is deprecated, use options."),I={blur:I,gradientBlur:$,start:E,end:B}),I=Object.assign({},d$1.defaults,I),this.tiltShiftXFilter=new a$2(I),this.tiltShiftYFilter=new u$1(I)}apply(I,$,E,B){const H=I.getFilterTexture();this.tiltShiftXFilter.apply(I,$,H,1),this.tiltShiftYFilter.apply(I,H,E,B),I.returnFilterTexture(H)}get blur(){return this.tiltShiftXFilter.blur}set blur(I){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=I}get gradientBlur(){return this.tiltShiftXFilter.gradientBlur}set gradientBlur(I){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=I}get start(){return this.tiltShiftXFilter.start}set start(I){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=I}get end(){return this.tiltShiftXFilter.end}set end(I){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=I}};let h=d$1;h.defaults={blur:100,gradientBlur:600,start:void 0,end:void 0};var i$1=`attribute vec2 aVertexPosition;
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
`;const n=class extends core.Filter{constructor(C){super(i$1,a$1),Object.assign(this,n.defaults,C)}get offset(){return this.uniforms.offset}set offset(C){this.uniforms.offset=C}get radius(){return this.uniforms.radius}set radius(C){this.uniforms.radius=C}get angle(){return this.uniforms.angle}set angle(C){this.uniforms.angle=C}};let r$1=n;r$1.defaults={radius:200,angle:4,padding:20,offset:new core.Point};var l=`attribute vec2 aVertexPosition;
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
`,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,c=(C,I)=>{var $={};for(var E in C)d.call(C,E)&&I.indexOf(E)<0&&($[E]=C[E]);if(C!=null&&i)for(var E of i(C))I.indexOf(E)<0&&f.call(C,E)&&($[E]=C[E]);return $};const a=class extends core.Filter{constructor(C){const I=Object.assign(a.defaults,C),{maxKernelSize:$}=I,E=c(I,["maxKernelSize"]);super(l,u.replace("${maxKernelSize}",$.toFixed(1))),Object.assign(this,E)}get center(){return this.uniforms.uCenter}set center(C){this.uniforms.uCenter=C}get strength(){return this.uniforms.uStrength}set strength(C){this.uniforms.uStrength=C}get innerRadius(){return this.uniforms.uInnerRadius}set innerRadius(C){this.uniforms.uInnerRadius=C}get radius(){return this.uniforms.uRadius}set radius(C){(C<0||C===1/0)&&(C=-1),this.uniforms.uRadius=C}};let o$1=a;o$1.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32};const Touchable=(C,I)=>class extends C{constructor(){super(...arguments);Y(this,"isHover",!1)}hoverIn(){}hoverOut(){}onPress(){}update(){var H;if(super.update&&super.update(),!this.visible)return;let B=!1;try{B=I(this)}catch(U){console.error(U)}!this.isHover&&B&&(this.isHover=!0,(H=globalThis.customUpdater)==null||H.waitFor(()=>!0,()=>{this.isHover&&this.hoverIn()})),this.isHover&&!B&&(this.isHover=!1,this.hoverOut()),B&&TouchInput.isTriggered()&&this.onPress()}},spriteCheckTouched=C=>{const I=new Point(TouchInput.x,TouchInput.y);return C==null?void 0:C.containsPoint(I)},containerCheckTouched=C=>C.getBounds().contains(TouchInput.x,TouchInput.y),TouchableSprite=Touchable(Sprite,spriteCheckTouched),renderContainerTexture=C=>{const{x:I,y:$}=C,{width:E,height:B}=C.getLocalBounds(),H=PIXI.RenderTexture.create({width:E,height:B,scaleMode:PIXI.SCALE_MODES.LINEAR,resolution:1});C.position.set(0),Graphics.app.renderer.render(C,H),C.position.set(I,$);const{destroy:U}=H;return H.destroy=function(j){j&&console.log("renderTexture destroy method had been overwrite"),U.apply(H,[!0])},H},randomColorBetween=(C,I)=>{const $=PIXI.utils.hex2rgb(C),E=PIXI.utils.hex2rgb(I),B=Math.random()*(E[0]-$[0])+$[0],H=Math.random()*(E[1]-$[1])+$[1],U=Math.random()*(E[2]-$[2])+$[2];return PIXI.utils.rgb2hex([B,H,U])},createEmptyBackground=(C,I)=>new PIXI.Graphics().beginFill(0,0).drawRect(0,0,C,I).endFill(),hitTestArea=(C,I)=>{const $=C.x+C.width,E=C.y+C.height,B=I.x+I.width,H=I.y+I.height;return C.x<B&&$>I.x&&C.y<H&&E>I.y},copyCommonProperty=(C,I)=>{I.x=C.x,I.y=C.y,I.scale.set(C.scale.x,C.scale.y),I.rotation=C.rotation,I.pivot.set(C.pivot.x,C.pivot.y),I.alpha=C.alpha},cloneSprite=C=>{const I=new PIXI.Sprite(C.texture);return copyCommonProperty(C,I),I.anchor.set(C.anchor.x,C.anchor.y),I},cloneText=C=>{const I=new PIXI.Text(C.text,C.style);return copyCommonProperty(C,I),I},cloneGraphics=C=>C.clone(),shallowCloneContainer=C=>{const I=new PIXI.Container;return C.children.forEach($=>{let E;$ instanceof PIXI.Sprite?E=cloneSprite($):$ instanceof PIXI.Graphics?E=cloneGraphics($):$ instanceof PIXI.Text?E=cloneText($):$ instanceof PIXI.Container?E=new PIXI.Container:E=null,E&&I.addChild(E)}),I};class FragParticle extends PIXI.Sprite{constructor(){super(...arguments);Y(this,"vx",0);Y(this,"vy",0);Y(this,"g",.8);Y(this,"isFinish",!1)}update(){this.isFinish||(this.alpha>.1&&(this.alpha-=.02),this.x+=this.vx,this.y+=this.vy,this.vy+=this.g,this.rotation+=this.vx/10*Math.PI,this.y>Graphics.app.renderer.height&&(this.isFinish=!0))}}const explodeRange=5,breakEffect=C=>{var Z;playSe("Break");const I=16,$=getPuzzle(),{x:E,y:B,width:H,height:U}=C.getBounds(),j=renderContainerTexture(C),X=j.baseTexture,V=new PIXI.ParticleContainer(500,{tint:!0});V.position.set(E,B);const q=[];for(let K=0;K<H/I+1;K++)for(let J=0;J<U/I+1;J++){const Te=new PIXI.Rectangle(K*I,J*I,Math.min(I,H-K*I),Math.min(I,U-J*I)),Se=new PIXI.Texture(X,Te),_e=new FragParticle(Se),Ie=((K+.5)*I/H-.5)*2,we=((J+.5)*I/U-.5)*2;_e.vx=random(-1+Ie,1+Ie)*explodeRange,_e.vy=random(-1+we,1+we)*explodeRange,_e.x=K*I,_e.y=J*I,V.addChild(_e),q.push(_e)}return C.visible=!1,shakeScreen(void 0,void 0,void 0,void 0,$.map),$.effectContainer.addChild(V),(Z=globalThis.customUpdater)==null||Z.add(({remove:K})=>{q.forEach(Te=>Te.update()),q.every(Te=>Te.isFinish)&&K()},{onDestroy:()=>{$.effectContainer.removeChild(V),V.destroy({children:!0,texture:!0}),j.destroy()}}),C},addFilter=(C,I)=>{C.filters?C.filters.push(I):C.filters=[I]},removeFilter=(C,I)=>{var $;I===null&&(C.filters=null),C.filters=(($=C.filters)==null?void 0:$.filter(E=>E!==I))||null};class SkillCopyPiece extends PIXI.Sprite{constructor($,{container:E,config:B,type:H}){super($);Y(this,"container");Y(this,"config");Y(this,"type");this.container=E,this.config=B,this.type=H}}const copySkillForMap=(C,I,$)=>{const E=CONFIG.map.unitSize,B=new PIXI.Sprite,{shape:H}=I,[U,j]=getShapeFirstRowAndCol(H),X=[];for(let V=0;V<H.length;V++)for(let q=0;q<H[0].length;q++){if(!H[V][q])continue;const Z=(q-j)*E,K=(V-U)*E,J=new PIXI.Rectangle(Z,K,E,E),Te=new PIXI.Texture(C.baseTexture,J),Se=new SkillCopyPiece(Te,{container:B,config:I,type:$});Se.position.set(Z,K),X.push(Se)}return B.addChild(...X),B},calculatePos=(C,I)=>{const[$,E]=getShapeFirstUnitIndex(C),[B,H]=getShapeFirstRowAndCol(C),U=I.position,j=$-H,X=E-B;return{x:U.x-j*CONFIG.map.unitSize,y:U.y-X*CONFIG.map.unitSize}},onMapEffectColor=C=>C.some(I=>I.status.damageable)?5:C.some(I=>I.topSpriteType()==="enemy")?771:197379,TouchableClass=Touchable(PIXI.Container,C=>{var $;const I=new Point(TouchInput.x,TouchInput.y);return($=C.content)==null?void 0:$.children.some(E=>E==null?void 0:E.containsPoint(I))});class EnemySkill extends TouchableClass{constructor($,E){super();Y(this,"puzzle");Y(this,"index",null);Y(this,"config");Y(this,"graphics");Y(this,"countdown");Y(this,"active",!0);Y(this,"content",null);Y(this,"rtexture",null);Y(this,"removeFromMap",()=>{if(this._destroyed||(this.puzzle.map.removeChild(this),!this.index))return;this.getUnits().forEach(E=>{var B;(B=this.content)==null||B.children.forEach(H=>E.removeSprite(H))}),this.destroy(),this.config.onRemoveFromMap&&this.config.onRemoveFromMap(this.puzzle)});this.puzzle=E,this.config=$,this.countdown=$.countdown,this.graphics=new PIXI.Graphics,this.drawSkill()}drawSkill(){const $=getAssetTexture(getEnemySkillPath("enemy",this.countdown));this.graphics.clear(),this.graphics.beginTextureFill({texture:$}),drawPuzzle(this.config.shape,[this.graphics]),this.graphics.endFill(),this.rtexture?globalThis.Graphics.app.renderer.render(this.graphics,this.rtexture):this.rtexture=renderContainerTexture(this.graphics)}setToMap($){this.puzzle.map.spriteset.addChild(this),this.index=$;const{position:E}=this.puzzle.map.getUnitByIndex(...$);this.position.set(E.x,E.y);const B=this.getUnits(),H=copySkillForMap(this.rtexture,this.config,"enemy");this.content=H,B.forEach((U,j)=>{U.filledSprite.push(H.children[j])}),this.addChild(this.content),this.config.onSetToMap&&this.config.onSetToMap(this.puzzle)}getUnits(){if(!this.index)return[];const $=[],[E,B]=this.index;return this.config.shape.forEach((H,U)=>{H.forEach((j,X)=>{if(!j)return;const V=this.puzzle.map.getUnitByIndex(E+U,B+X);$.push(V)})}),$}checkAllFilled(){return this.getUnits().every(E=>{var B;return!((B=this.content)!=null&&B.children.includes(E.getLast()))})}checkStillExist(){var $;return!isEmpty(($=this.content)==null?void 0:$.children)}beforeTurnStart(){if(this.countdown<=0)return;const $=this.checkStillExist();if(this.checkAllFilled()||!$){$&&breakEffect(this),this.removeFromMap();return}this.countdown-=1,this.countdown<=0&&this.config.beforeCastSkill&&$&&this.config.beforeCastSkill(this.puzzle)}processRound(){this.isDestroyed()||(this.config.onTurnProcess&&this.config.onTurnProcess(this.puzzle),this.drawSkill(),this.countdown<=0&&this.castSkill())}castSkill(){if(!this.active||!this.checkStillExist())return;const $=getFirstEnemy();$&&(this.config.onCastSkill&&this.config.onCastSkill(this.puzzle),waitAction(),addStageEventListenerOnce(STAGE_EVENT.enemyActionEnd,()=>{this.config.onCastSkillEnd&&this.config.onCastSkillEnd(this.puzzle),this.puzzle.heroine.updateStatus();const E=getEnemySkillDialogues(),B=getState(this.puzzle,{skillId:this.config.id}),H=getTextFromPool(E,B);H&&($gameMessage.add(H.text),waitMessage(50),this.puzzle.battleController.battleLog.push({actor:$,skillId:this.config.id,text:H})),this.removeFromMap()}))}hoverIn(){this.filters=[new l$3],this.puzzle.helpWindow.setText(this.config.description(this.puzzle))}hoverOut(){removeFilter(this,null),this.puzzle.battleController.enemySkills.some(E=>E.isHover)||this.puzzle.helpWindow.drawHeroineStatusText()}destroy($){var E,B;super.destroy($),(E=this.rtexture)==null||E.destroy(!0),(B=this.graphics)==null||B.destroy({children:!0,texture:!0,baseTexture:!0})}}const mapValueWithId=C=>mapValues(C,(I,$)=>({...I,id:$})),setEnemyPuzzleToIndex=(C,I)=>{const $=getPuzzle(),E=getEnemySkill(C),{battleController:B,map:H}=$;if(!checkPuzzleValid(H,E.shape,I,X=>!!X&&X.status.couldFill&&X.topSpriteType()!=="enemy"))return;const j=new EnemySkill(E,$);j.setToMap(I),B.enemySkills.push(j)},setEnemyPuzzleToRandomIndex=C=>{const I=getPuzzle(),$=getEnemySkill(C),{battleController:E,map:B}=I,H=getAllValidIndex($.shape,B,X=>!!X&&X.status.couldFill&&X.topSpriteType()!=="enemy"),U=sample(H);if(!U)return;const j=new EnemySkill($,I);return j.setToMap(U),E.enemySkills.push(j),j},showBattleLogSeq=(C,I=!0)=>{const $=typeof C=="string"?[C]:C,E=getBattleLogWindow();$.forEach(B=>{if(B==="wait")return E.push("wait");E.push("addText",B),E.push("wait")}),I&&(E.push("wait"),E.push("clear"))},normalUncle={shape:[[0,0,0,0,0,0,0,0,0],[0,0,1,1,0,1,1,0,0],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],background:"uncle1",otherAssets:["ticrf-icon"],name:enemiesTexts.normalUncle.name,unitsTexture:{1:"red",0:"grey"},onSet:(C,I)=>{I.background.position.set(50,40)},processTurn:()=>{const C=getTurnCount();C%3===0&&setEnemyPuzzleToRandomIndex(21),C%2===0&&setEnemyPuzzleToIndex(22,[0,3])}},phantomThief={shape:[[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],background:"20230916",name:enemiesTexts.phantomThief.name,unitsTexture:{1:"red",0:"grey"},onSet:(C,I)=>{I.background.scale.set(.6),I.background.position.set(0,-10)},onTurnStart:()=>{if(getTurnCount()===0){toggleControllable(!1);const I=setInterval(()=>{const $=setEnemyPuzzleToRandomIndex(23),E=setEnemyPuzzleToRandomIndex(23),B=setEnemyPuzzleToRandomIndex(23);(!$||!E||!B)&&(clearInterval(I),toggleControllable(!0))},50)}}},enemiesConfig=mapValueWithId({1:normalUncle,2:phantomThief}),t$2=enemySkillsTexts.bondage,bondage={shape:[[1,1,1],[0,1,0]],countdown:2,description:()=>t$2.description,onCastSkillEnd:C=>{const I=sample(C.menu.puzzleButtons);C.menu.activeButton===I&&TouchInput.clear(),I.interactive=!1;const $=I.children[0],E=getTurnCount();showBattleLogSeq(t$2.act);const B=getAssetTexture(getOtherAsset("ticrf-icon")),H=new PIXI.Sprite(B);H.scale.set(.18),H.position.set(I.width/2-H.width/2,$.height/2-H.height/2),H.filters=[new l$3],I.addChild(H),C.battleController.delayActions.push({condition:()=>getTurnCount()>=E+2,do:()=>{showBattleLogSeq(t$2.react),I.interactive=!0,I.isDestroyed()||I.removeChild(H)}})}},t$1=enemySkillsTexts.execute,execute={shape:[[1]],countdown:3,description:()=>t$1.description,onTurnProcess:C=>{if(C.battleController.delayActions.some($=>($==null?void 0:$.id)===99))return;const I={id:99,condition:()=>!0,do:()=>showBattleLogSeq(t$1.loading)};C.battleController.delayActions.push(I)},onCastSkill:C=>{C.battleController.enemySkills.forEach(I=>{I.active=!1}),showBattleLogSeq(t$1.act),shakeScreen(),killParty()}},t=enemySkillsTexts.normalAttack,normalAttack={shape:[[1,1],[1,1]],countdown:3,description:()=>t.description,beforeCastSkill:()=>toggleControllable(!1),onCastSkill:C=>{const{heroine:I}=C,$=[];random(1,I.getTotalHp())<I.upperHp+1?(I.upperHp-=1,$.push(t.act.u),I.upperHp===2&&$.push(t.result.u2),I.upperHp===1&&$.push(t.result.u1),I.upperHp===0&&$.push(t.result.u0)):(I.lowerHp-=1,$.push(t.act.l),I.lowerHp===2&&$.push(t.result.l2),I.lowerHp===1&&$.push(t.result.l1),I.lowerHp===0&&$.push(t.result.l0)),I.getTotalHp()===0&&$.push(t.result.a0),I.getTotalHp()<0&&$.push(t.result.d),showBattleLogSeq($),shakeScreen(),waitAction()}},enemiesSkillConfig=mapValueWithId({21:normalAttack,22:bondage,23:execute}),DRAG_EVENT={start:"dragstart",move:"dragmove",end:"dragend",reset:"dragreset"};class DraggableContainer extends Sprite{constructor(){super(new Bitmap(0,0));Y(this,"isDragging",!1);Y(this,"pointerOffset",new Point(0,0));Y(this,"originalPos",new Point(0,0));this.interactive=!0,this.cursor="pointer"}onDragStart(){this.isDragging=!0;const $=this.getTouchPoint(),E=this.getGlobalPosition();this.pointerOffset=$.subtract(E),this.originalPos=new Point(this.x,this.y),this.emit(DRAG_EVENT.start,this)}onDragMove(){if(!this.isDragging)return;const E=this.parent.toLocal(this.getTouchPoint()).subtract(this.pointerOffset);this.position=E,this.emit(DRAG_EVENT.move,this)}onDragEnd(){this.isDragging&&(this.isDragging=!1,this.emit(DRAG_EVENT.end,this))}dragReset(){this.isDragging=!1,this.position.set(this.originalPos.x,this.originalPos.y),this.emit(DRAG_EVENT.reset,this)}getTouchPoint(){return new Point(TouchInput.x,TouchInput.y)}update(){super.update(),this.isDragging&&TouchInput.isPressed()?this.onDragMove():this.isDragging&&TouchInput.isReleased()?this.onDragEnd():TouchInput.isTriggered()&&this.getBounds().contains(TouchInput.x,TouchInput.y)&&this.interactive&&this.onDragStart()}}class PuzzleSkill extends DraggableContainer{constructor($,E){super();Y(this,"id");Y(this,"canDrop",!1);Y(this,"puzzleUnitsCount",0);Y(this,"graphics");Y(this,"puzzle");Y(this,"snapshot");Y(this,"config");Y(this,"rmSkill");Y(this,"checkCanDrop",$=>{const E=this.puzzle.menu.activeButton;return BattleManager.isInputting()&&(!E||!!E.interactive)&&$.length===this.puzzleUnitsCount&&$.every(H=>H.status.couldFill)});this.id=$,this.puzzle=E;const B=getSkillConfig($);this.config=B;const H=getAssetTexture(getSkillPath($));this.rmSkill=$dataSkills[$];const U=new PIXI.Graphics;this.graphics=U,U.beginTextureFill({texture:H});const j=drawPuzzle(B.shape,[U]);this.puzzleUnitsCount=j,U.endFill();const[X,V]=getShapeFirstRowAndCol(B.shape);U.position.set(-V*CONFIG.map.unitSize,-X*CONFIG.map.unitSize),this.addChild(U),this.bitmap=new Bitmap(U.width,U.height),this.snapshot=renderContainerTexture(this)}checkHover($,E){const B=[];return $.units.children.forEach(H=>{var V;const U=E.toLocal(E.position,this.graphics),j=H.getCenter(E).subtract(U);((V=this.graphics.geometry)==null?void 0:V.containsPoint(j))&&B.push(H)}),this.canDrop=this.checkCanDrop(B),B}reset(){this.dragReset()}destroy($){this.snapshot.destroy(),super.destroy($)}}/*!
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
`,r=class extends PIXI.Filter{constructor(C){super(s,v.replace("${perlin}",g)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const I=Object.assign(r.defaults,C);this._angleLight=new PIXI.Point,this.angle=I.angle,this.gain=I.gain,this.lacunarity=I.lacunarity,this.alpha=I.alpha,this.parallel=I.parallel,this.center=I.center,this.time=I.time}apply(C,I,$,E){const{width:B,height:H}=I.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=B,this.uniforms.dimensions[1]=H,this.uniforms.aspect=H/B,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,C.applyFilter(this,I,$,E)}get angle(){return this._angle}set angle(C){this._angle=C;const I=C*PIXI.DEG_TO_RAD;this._angleLight.x=Math.cos(I),this._angleLight.y=Math.sin(I)}get gain(){return this.uniforms.gain}set gain(C){this.uniforms.gain=C}get lacunarity(){return this.uniforms.lacunarity}set lacunarity(C){this.uniforms.lacunarity=C}get alpha(){return this.uniforms.alpha}set alpha(C){this.uniforms.alpha=C}},o=r;o.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};const glowEffect=(C,I=197379,$={})=>{var B;const E=new l$3($);return addFilter(C,E),(B=globalThis.customUpdater)==null||B.add(({remove:H})=>{E.outerStrength+=.3,E.alpha-=.02,E.color-=I,E.alpha<0&&(pull$1(C.filters,E),H())}),C},godRayEffect=C=>{var $;const I=new o({alpha:.4,lacunarity:1.5});return addFilter(C,I),($=globalThis.customUpdater)==null||$.add(()=>{I.time+=.05}),C},rmEffect=(C,I)=>{const $=I||getPuzzle().effectContainer;$.update||mockUpdate($);const E=new Sprite_Animation,B=new Sprite(new Bitmap(0,0));E.setup([B],$dataAnimations[C],!1,0,null),$.addChild(B),$.addChild(E);const H=waitForAsync(()=>!E.isPlaying()).then(()=>{$.removeChild(B),$.removeChild(E)});return{anime:E,promise:H,virtualTarget:B}},loopAnimation=(C,I,$)=>{const E=C;let B=!0;const H=(U=!1)=>{U&&E.destroy(),B=!1};return addUpdate(C,()=>{const U=$&&E._frameIndex>$;(!E.isPlaying()||U)&&B&&(E._playing=!0,E._started=!1,E._frameIndex=0,I&&I(C._targets[0],C))}),H},maskEffect=(C,I,$={})=>{const{isLoop:E,onLoopEnd:B,cut:H}=$,U=getPuzzle(),j=new Sprite(new Bitmap(0,0)),{anime:X,promise:V,virtualTarget:q}=rmEffect(C,j);let Z;E&&(Z=loopAnimation(X,B,H));const K=new PIXI.Graphics,J=I.getBounds();K.beginFill(16777215),K.drawRect(0,0,J.width,J.height),K.endFill(),j.mask=K,j.addChild(K);const Te=()=>{const Se=I.getBounds();j.x=Se.x,j.y=Se.y};return $.isStatic?Te():addUpdate(j,()=>{Te()}),U.effectContainer.addChild(j),V.then(()=>{U.effectContainer.removeChild(j)}),{effect:j,anime:X,virtualTarget:q,promise:V,cancelLoop:Z}},glowPurple=197888,tintPurple=15615214,getThickLineOffset=([C,I],[$,E])=>{const B=E-I,H=$-C;return Math.abs(B)>Math.abs(H)?B>0?[0,-1]:[0,1]:H>0?[1,0]:[-1,0]},processSelectUnit=(C,I)=>{const[$,E]=pointToUnit(TouchInput.x,TouchInput.y)||[],B=getPuzzle().map.getUnitByIndex($,E),H=B&&I(B);return TouchInput.isCancelled()||TouchInput.isPressed()&&!H?(C.forEach(U=>U.tintColor("clear")),!1):(TouchInput.isClicked()&&H&&(C.includes(B)?(B.tintColor("clear"),pull$1(C,B)):(B.tintColor(tintPurple),C.push(B))),!0)},addStageFiltersOnSelect=()=>{const C=[new t$4({lineWidth:0}),new PIXI.filters.ColorMatrixFilter];return C[1].kodachrome(!0),C.forEach($=>addFilter(Graphics.app.stage,$)),()=>{C.forEach($=>removeFilter(Graphics.app.stage,$))}},checkCouldSelect=C=>{const I=C==null?void 0:C.getLast();return I instanceof SkillCopyPiece&&I.config.id===41},mahoushoujoSkills=[{id:41,cd:3,action:async C=>{const I=getPuzzle(),$=new PuzzleSkill(41,I);I.spriteset.addChild($);const E=new ColorFilter;addFilter($,E);const B=new Date().getTime(),H=()=>{const V=new Date().getTime()-B,q=Math.sin(V/1e4)*60+15;E.setHue(q)},U=(V,q)=>maskEffect(2,V,{isLoop:!0,onLoopEnd:Z=>{Z.x=random(-24,24),Z.y=random(-36,-12)},...q}),{effect:j}=U($),X=()=>{j.destroy(),$.filters=[],I.spriteset.removeChild($),I.map.resetHover()};await processFrameAsync(({remove:V,resolve:q})=>{if(H(),$.move(TouchInput.x-$.width/2,TouchInput.y-$.height/2),I.onSkillPuzzleMove($,new PIXI.InteractionEvent),TouchInput.isCancelled()){X(),q(!1);return}if(TouchInput.isPressed()){X(),V();const Z=$.checkHover(I.map,I);if($.checkCanDrop(Z)){const K=copySkillForMap($.snapshot,$.config,"user"),J=calculatePos($.config.shape,Z[0]);K.position.set(J.x,J.y),godRayEffect(K),glowEffect(K,glowPurple),addFilter(K,E),addUpdate(K,H),I.map.spriteset.addChild(K);const Te=K.getChildAt(0);Z[0].onFill(Te);const{anime:Se,cancelLoop:_e}=U(K,{isStatic:!0});addUpdate(Se,()=>{Se.visible=I.map.visible,Z[0].getLast()!==Te&&_e&&_e(!0)}),C.cdReset(),q(!0)}else q(!1)}})}},{id:42,cd:5,action:()=>{}},{id:43,cd:5,action:async C=>{const I=getPuzzle(),$=[],E=addStageFiltersOnSelect();await processFrameAsync(async({remove:B,resolve:H})=>{const U=!processSelectUnit($,checkCouldSelect),j=$.length>=1;if(U){E(),H(!1);return}if(j){E(),C.cdReset(),B();const X=$[0],V=[],[q,Z]=X.index;for(let we=0;we<9;we++){const $e=Math.floor(we/3)-1,Fe=we%3-1,ze=I.map.getUnitByIndex(q+$e,Z+Fe);(ze==null?void 0:ze.topSpriteType())==="user"&&V.push(ze)}V.forEach(we=>we.tintColor(15658530)),toggleControllable(!1);const{x:K,y:J,width:Te,height:Se}=X.getBounds(),{promise:_e,virtualTarget:Ie}=rmEffect(4);Ie.position.set(K+Te/2,J+Se/2),await sleep(500),shakeScreen(),V.forEach(we=>we.clear()),await _e,toggleControllable(!0),H(!0)}})}},{id:44,cd:5,action:async C=>{const I=getPuzzle(),$=[],E=(H,U)=>{const{shape:j}=I.map;if(H<0||U<0||H>=j.length||U>=j[0].length)return;const X=I.map.getUnitByIndex(H,U);if(!X)return;const V=new PuzzleSkill(42,I),q=copySkillForMap(V.snapshot,V.config,"user"),Z=calculatePos(V.config.shape,X);q.position.set(Z.x,Z.y),godRayEffect(q),glowEffect(q,glowPurple),I.map.spriteset.addChild(q),X.onFill(q.getChildAt(0))},B=addStageFiltersOnSelect();await processFrameAsync(async({remove:H,resolve:U})=>{const j=!processSelectUnit($,checkCouldSelect),X=$.length>=2;if(j){B(),U();return}if(X){B(),H(),C.cdReset();const V=$[0].index,q=$[1].index,Z=getLine(V,q);Z.forEach(([ke,Oe])=>{const Le=I.map.getUnitByIndex(ke,Oe);if(!Le)return null;Le.tintColor(tintPurple)}),toggleControllable(!1);const[K,J]=getThickLineOffset(V,q),{anime:Te,promise:Se,virtualTarget:_e}=rmEffect(3),{x:Ie,y:we,width:$e,height:Fe}=$[0].getBounds();_e.position.set(Ie+$e/2+K*24,we+Fe/2+J*24),Te._animation.rotation.z=calculateAngle(V,q)-180;const ze=calculateDistance(V,q),Ge=Math.SQRT1_2*I.map.shape.length;Te._animation.scale=50+50*ze/Ge,await sleep(1e3),Z.forEach(([ke,Oe])=>{const Le=I.map.getUnitByIndex(ke,Oe);if(!Le)return null;Le.tintColor("clear")}),shakeScreen();for(const[ke,Oe]of Z)await sleep(50),E(ke,Oe),E(ke+J,Oe+K);await Se,toggleControllable(!0),U(!0)}})}}],spSkills=[...mahoushoujoSkills],getSkillConfig=C=>{const I=skills.find($=>$.id===C);if(!I)throw new Error("skill config not found, id: "+C);return I},getSpSkillConfig=C=>{const I=spSkills.find($=>$.id===C);if(!I)throw new Error("spSkill config not found, id: "+C);return I},getSkillDialogues=()=>skillDialogues,getEnemySkillDialogues=()=>enemySkillDialogues,getEnemyConfig=C=>{const I=enemiesConfig[C];if(!I)throw new Error("enemy config not found, id: "+C);return I},getEnemySkill=C=>{const I=enemiesSkillConfig[C];if(!I)throw new Error("enemySkill config not found, id: "+C);return I},imageConfig={Rita:{figures:{1:"20230904-1",2:"20230904-2"},faces:{1:"20230904-2ICON",2:"20230904-3ICON",3:"20230904-4ICON"}}},getStatusText=C=>C>.9?heroineTexts.status.gt9:C>.7?heroineTexts.status.gt7:C>.4?heroineTexts.status.gt4:C>0?heroineTexts.status.gt0:C===0?heroineTexts.status.eq0:heroineTexts.status.lt0,getClothesStatusText=C=>{let I=[];const{upperHp:$,lowerHp:E}=C;return $===C.maxUpperHp?I.push(heroineTexts.clothes.uM):$>1?I.push(heroineTexts.clothes.uGt1):$===1?I.push(heroineTexts.clothes.uEq1):I.push(heroineTexts.clothes.uLt1),E===C.maxLowerHp?I.push(heroineTexts.clothes.lM):E>1?I.push(heroineTexts.clothes.lGt1):E===1?I.push(heroineTexts.clothes.lEq1):I.push(heroineTexts.clothes.lLt1),!$&&!E&&(I=heroineTexts.clothes.a0),I},getFigurePath=(C,I)=>`img/pictures/figures/${get(imageConfig[C].figures,I)}`,getSkillPath=C=>`img/pictures/skills/${getSkillConfig(C).texture}`,getEnemyImagePath=()=>{const C=$gameTroop.troop().id;return`img/enemies/${getEnemyConfig(C).background}`},getEnemyUnitPath=C=>{const I=$gameTroop.troop().id;return`img/pictures/units/${getEnemyConfig(I).unitsTexture[C]}`},getEnemySkillPath=(C,I)=>`img/pictures/enemySkills/${C}_${I}`,getOtherAsset=C=>`img/pictures/others/${C}`,cache=new Map,getAssetTexture=C=>{const I=cache.get(C);if(I&&I.baseTexture)return I;const $=ImageManager.loadMsgkAssets(C),E=new PIXI.Texture($.baseTexture);return cache.set(C,E),E},setAssetTexture=(C,I)=>{cache.set(C,I)},clearCache=()=>{cache.forEach(C=>C.destroy()),cache.clear()};class PuzzleMapUnit extends PIXI.Sprite{constructor({id:$,size:E,index:B}){super();Y(this,"id");Y(this,"status");Y(this,"index");Y(this,"isHover",!1);Y(this,"filledSprite",[]);Y(this,"colorSprite");this.index=B,this.status={damageable:!1,couldFill:!0},this.id=$,this.width=E,this.height=E,this.texture=getAssetTexture(getEnemyUnitPath($)),this.filledSprite.push(this);const H=new PIXI.Sprite(PIXI.Texture.WHITE);H.visible=!1,H.width=E,H.height=E,H.alpha=.5,H.blendMode=PIXI.BLEND_MODES.HARD_LIGHT,this.colorSprite=H}setColorSprite($){this.colorSprite.position.set(this.x,this.y),$.effectSet.addChild(this.colorSprite)}topSpriteType(){const $=this.getLast();return $ instanceof PuzzleMapUnit?"empty":$.type}getLast(){return last(this.filledSprite)}removeSprite($){return pull$1(this.filledSprite,$)}tintColor($){const E=isNumber($)?$:TINT_COLOR[$];this.colorSprite.tint=E,this.colorSprite.visible=$!=="clear"}onHover($){this.isHover=!0,$?this.tintColor("positive"):this.tintColor("negative")}onHoverOut(){this.isHover&&(this.isHover=!1,this.tintColor("clear"))}onFill($){this.status.couldFill=!1,this.filledSprite.push($)}clear(){this.filledSprite.forEach($=>{$!==this&&$.destroy()}),this.filledSprite=[this],this.tintColor("clear"),this.status.couldFill=!0}getCenter($){return $.toLocal($.position,this).add(new Point(this.width/2,this.height/2))}destroy($){var E;(E=this.colorSprite)==null||E.destroy($),this.filledSprite.forEach(B=>{B!==this&&(B==null||B.destroy($))}),super.destroy($)}}class PuzzleMap extends Touchable(Window_Base,containerCheckTouched){constructor($,E){super(new Rectangle(0,0,0,0));Y(this,"puzzle");Y(this,"units");Y(this,"shape");Y(this,"background");Y(this,"spriteset");Y(this,"effectSet");Y(this,"getUnitByIndex",($,E)=>this.units.children[$*this.shape[0].length+E]);this.position.set(CONFIG.map.offsetX,CONFIG.map.offsetY),this.puzzle=E;const{shape:B}=$;this.shape=B;const H=getAssetTexture(getEnemyImagePath());this.background=new PIXI.Sprite(H),this.addChild(this.background);const U=new PIXI.Container;this.units=U,U.alpha=.6,this.addChild(this.units),this.spriteset=new Sprite(new Bitmap(0,0)),this.addChild(this.spriteset),this.effectSet=new Sprite(new Bitmap(0,0)),this.addChild(this.effectSet),B.forEach((j,X)=>j.forEach((V,q)=>{const Z=new PuzzleMapUnit({id:V,size:CONFIG.map.unitSize,index:[X,q]});V>0&&(Z.status.damageable=!0),Z.x=q*CONFIG.map.unitSize,Z.y=X*CONFIG.map.unitSize,this.units.addChild(Z),Z.setColorSprite(this)})),$.onSet&&$.onSet(E,this)}hoverIn(){this.units.alpha=.8}hoverOut(){this.units.alpha=.6}resetHover(){this.units.children.forEach($=>$.onHoverOut())}update(){updateShake(this,CONFIG.map.offsetX),super.update()}}class PuzzleButton extends TouchableSprite{constructor($){var j;super(new Bitmap(0,0));Y(this,"puzzle");Y(this,"puzzleSkill");Y(this,"vy",0);this.interactive=!0,this.interactiveChildren=!1,this.cursor="pointer",this.puzzleSkill=$,this.puzzle=$.puzzle;const E=$.snapshot,B=new PIXI.Sprite(E);this.addChild(B),B.scale.set(.6),B.anchor.set(.5);const H=new PIXI.Text(((j=$.rmSkill)==null?void 0:j.name)||"",new PIXI.TextStyle({fontSize:80,fontWeight:"bold",fill:16777215}));H.scale.set(.2),H.anchor.set(.5,0);const U=8;this.bitmap=new Bitmap(B.width+72,B.height+2*U+H.height),this.pivot.set(this.width/2,this.height/2),B.position.set(this.width/2,(this.height-H.height)/2),H.position.set(this.width/2,this.height-H.height),this.addChild(H)}onPress(){this.interactive&&(this.scale.set(1),this.puzzleSkill.move(TouchInput.x-this.puzzleSkill.width/2/CONFIG.menu.btnHoverScale,TouchInput.y-this.puzzleSkill.height/2/CONFIG.menu.btnHoverScale),this.puzzle.menu.activeButton=this,this.puzzleSkill.onDragStart())}hoverIn(){this.puzzle.helpWindow.setText(this.puzzleSkill.config.description),this.interactive&&this.scale.set(CONFIG.menu.btnHoverScale)}hoverOut(){this.puzzle.helpWindow.drawHeroineStatusText(),this.interactive&&this.scale.set(1)}destroy(){const $=this.removeChildAt(1),E=this.removeChildAt(0);$.destroy({children:!0,texture:!0,baseTexture:!0}),E.destroy({children:!0}),super.destroy()}}class PuzzleMenu extends Window_Base{constructor($,E){const B=CONFIG.menu.width,H=Graphics.boxHeight,U=Graphics.boxWidth-B+CONFIG.common.appPaddingY,j=CONFIG.common.appPaddingY;super(new Rectangle(U,j,B,H));Y(this,"puzzle");Y(this,"puzzleSkills");Y(this,"puzzleButtons",[]);Y(this,"activeButton",null);Y(this,"shouldRefreshBtnPos",!1);this.puzzle=E,this.puzzleSkills=$,this.removeInvalidSkills();for(let X=0;X<5;X++){const V=this.addRandomSkillBtn();V&&(V.y-=X*100)}}addRandomSkillBtn(){if(isEmpty(this.puzzleSkills))return;const $=countBy$1(this.puzzleButtons,U=>U.puzzleSkill.id),B=!!$[1]?randomByWeight(this.puzzleSkills,U=>{const j=1-$[U.id]*.1||1;return U.config.weight*j}):this.puzzle.skills.find(U=>U.id===1),H=new PuzzleButton(B);return H.x=this.width/2,H.y=-CONFIG.map.unitSize,this.puzzleButtons.unshift(H),this.addChild(H),this.shouldRefreshBtnPos=!0,H}removeSkillBtn($){pull$1(this.puzzleButtons,$),this.removeChild($),$.destroy(),this.shouldRefreshBtnPos=!0}removeInvalidSkills(){const $=this.puzzleSkills.filter(E=>getFirstValidIndex(E.config.shape,this.puzzle.map));this.puzzleSkills=$,this.puzzleButtons.filter(E=>!$.includes(E.puzzleSkill)).forEach(E=>{this.removeSkillBtn(E),this.addRandomSkillBtn()})}getButtonTargetPosY($){const E=this.height-2*CONFIG.menu.paddingY;return $*(E/5)+CONFIG.menu.paddingY+CONFIG.map.unitSize}close(){super.close(),this.puzzleButtons.forEach($=>$.hide())}open(){var $;super.open(),($=globalThis.customUpdater)==null||$.waitFor(()=>this.isOpen(),()=>this.puzzleButtons.forEach(E=>E.show()))}get openness(){return this._openness}set openness($){this._openness!==$&&(this._openness=clamp($,0,255),this._container.scale.x=this._openness/255,this._container.x=this.width*(1-this._openness/255))}update(){if(super.update(),!this.shouldRefreshBtnPos)return;let $=0;this.puzzleButtons.forEach((E,B)=>{const H=this.getButtonTargetPosY(B);if(H-E.y>0){E.vy+=1,E.y+=Math.min(E.vy,25),$++;return}E.vy=0,E.y=H}),this.shouldRefreshBtnPos=!!$}}let lastSide=-1;const randomStartPoint=(C,I)=>{const $=sample([0,1,2,3].filter(E=>E!==lastSide));return lastSide=$,$===0?new PIXI.Point(random(0,I.width),-C.height):$===1?new PIXI.Point(I.width,random(0,I.height)):$===2?new PIXI.Point(random(0,I.width),I.height):new PIXI.Point(-C.width,random(0,I.height))},addRecallText=(C,I)=>{var Z;const $=I.children[0],E=I.children[1],B=(Graphics.boxWidth-E.width-50)/2,H=new PIXI.TextStyle({fontSize:random(36,72),fontWeight:"bold",fill:randomColorBetween(3355443,13421772),stroke:1118481,strokeThickness:4,align:"center"}),U=new PIXI.Text(C,H);U.width>B&&U.scale.set(B/U.width);const j=randomStartPoint(U,$);U.position=j,I.addChild(U);const V=new PIXI.Point($.width/2,$.height/2).subtract(U.position.add(new PIXI.Point(U.width/2,U.height/2))).normalize();let q=0;return(Z=globalThis.customUpdater)==null||Z.add(({remove:K,delta:J})=>{q>1.1?(shakeScreen(5,5,1),U.destroy(),K()):q>1?(q+=J,U.alpha-=.1,U.position=U.position.add(V.multiplyScalar(15))):hitTestArea(U,E)?(q+=J,U.position=U.position.add(V.multiplyScalar(1))):U.position=U.position.add(V.multiplyScalar(20))}),U},cutinEffect=async C=>{const I=getPuzzle();I.heroine.hide(),I.helpWindow.hide();const $=new PIXI.Container;mockUpdate($),I.effectContainer.addChild($);const E=shallowCloneContainer(I.heroine);E.scale.set(1.25),addFilter(E,new i$4(15,12298922));const B=new PIXI.Container,H=PIXI.Sprite.from(PIXI.Texture.WHITE);addFilter(H,new i$4(15,3346705)),H.tint=14492194,H.width=350,H.height=1200,B.addChild(H),B.addChild(E),B.x=Graphics.boxWidth/2-B.width/2,$.addChild(B),await waitForAsync(({totalTime:K})=>K>1.2),$.removeChild(B),I.map.visible=!1;const U=getAssetTexture(getEnemyImagePath()),j=PIXI.Sprite.from(U.clone());j.scale.set(1.5),j.x=Graphics.boxWidth/2-j.width/2,addFilter(j,new i$4(20,1118481)),shouldSyncShakeScreen(j),$.addChild(j);const X=new PIXI.Container,V=createEmptyBackground(Graphics.boxWidth,Graphics.boxHeight),q=createEmptyBackground(300,300);q.position.set((V.width-q.width)/2,(V.height-q.height)/2),X.addChild(V),X.addChild(q),$.addChild(X);for(let K=0;K<C.length;K++)await waitForAsync(({totalTime:J})=>J>.3),addRecallText(C[K],X);const Z=()=>{I.heroine.show(),I.helpWindow.show(),I.map.visible=!0,$.destroy({children:!0,texture:!0})};await waitForAsync(()=>X.children.length===2),Z()};class BattleController{constructor(C){Y(this,"puzzle");Y(this,"enemySkills",[]);Y(this,"delayActions",[]);Y(this,"battleLog",[]);Y(this,"onAttackSuccess",C=>{if(!BattleManager.isInputting())return;const{skillId:I,units:$}=C,E=getSkillConfig(I);if(!E)return;const B=$.some(j=>j.status.damageable);B&&forcePartyAction(E.id);const H=this.showText(C),U=getHeroineRm();this.battleLog.push({actor:U,skillId:I,text:H,hasDamage:B}),startProcessTurn()});Y(this,"processEnemyTurn",()=>{if(checkBattleEnd())return;this.enemySkills=this.enemySkills.filter(I=>!I.isDestroyed()),this.enemySkills.forEach(I=>I.processRound());const{processTurn:C}=this.puzzle.enemyConfig;C&&C(this.puzzle)});Y(this,"processDelayAction",()=>{this.delayActions.forEach((C,I)=>{!C||!C.condition(this.puzzle)||(C.do(this.puzzle),this.delayActions[I]=null)}),this.delayActions=this.delayActions.filter(Boolean)});Y(this,"showText",attackParams=>{const{skillId,units}=attackParams,unitTypes=units.map(C=>C.id),state=getState(this.puzzle,{skillId,unitTypes}),skillDialogues=getSkillDialogues(),textConfig=getTextFromPool(skillDialogues,state,!0);return textConfig.callback&&eval(textConfig.callback),$gameMessage.add(textConfig.text),textConfig});Y(this,"checkMapFill",()=>this.puzzle.map.units.children.every(C=>!C.status.damageable||C.topSpriteType()==="user"));this.puzzle=C,addStageEventListener(STAGE_EVENT.turnStart,()=>{toggleControllable(!0),this.processDelayAction();const{onTurnStart:I}=this.puzzle.enemyConfig;I&&I(this.puzzle)}),addStageEventListener(STAGE_EVENT.turnEnd,async()=>{if(this.checkMapFill()){BattleManager.pauseBattle(),toggleControllable(!1);const I=this.battleLog.filter($=>$.hasDamage).map($=>{var E;return((E=$.text)==null?void 0:E.text)||""}).filter(Boolean);await cutinEffect(I),toggleControllable(!1),BattleManager.resumeBattle(),killEnemies()}C.heroine.getTotalHp()<0&&killParty(),C.heroine.updateStatus()}),addStageEventListener(STAGE_EVENT.enemyTurn,()=>{this.processEnemyTurn()})}}class Heroine extends TouchableSprite{constructor($){const{offsetX:E,offsetY:B,width:H,height:U,half:j}=CONFIG.figure;super(new Bitmap(H,U));Y(this,"puzzle");Y(this,"maxUpperHp",3);Y(this,"maxLowerHp",3);Y(this,"upperHp",3);Y(this,"lowerHp",3);Y(this,"getTotalHp",()=>this.upperHp+this.lowerHp);Y(this,"getMaxHp",()=>this.maxUpperHp+this.maxLowerHp);Y(this,"getHpRatio",()=>this.getTotalHp()/this.getMaxHp());Y(this,"updateStatus",()=>{const $=this.children[1],E=this.children[2];$&&($.alpha=this.upperHp/this.maxUpperHp),E&&(E.alpha=this.lowerHp/this.maxLowerHp),this.puzzle.helpWindow.drawHeroineStatusText()});this.puzzle=$,this.x=E,this.y=B;const X=260,V=280,q=.45,Z=getAssetTexture(getFigurePath("Rita",2)),K=getAssetTexture(getFigurePath("Rita",1)),J=new PIXI.Sprite(Z.clone());J.scale.set(q),J.texture.frame=new PIXI.Rectangle(X,V,H/q,U/q),this.addChild(J);const Te=new PIXI.Sprite(K.clone());Te.scale.set(q),Te.texture.frame=new PIXI.Rectangle(X,V,H/q,j/q),this.addChild(Te);const Se=new PIXI.Sprite(K.clone());Se.scale.set(q),Se.texture.frame=new PIXI.Rectangle(X,V+j/q,H/q,(U-j)/q),Se.y=j,this.addChild(Se)}hoverIn(){const $=getClothesStatusText(this);this.puzzle.helpWindow.setText($.join(`
`))}hoverOut(){this.puzzle.helpWindow.drawHeroineStatusText()}update(){updateShake(this,CONFIG.figure.offsetX),super.update()}}class HelpWindow extends Window_Help{constructor($){super(new PIXI.Rectangle(CONFIG.map.offsetX-CONFIG.helpWindow.exceedWidth,CONFIG.common.appPaddingY,$.map.units.width+CONFIG.helpWindow.exceedWidth*2,100));Y(this,"puzzle");this.puzzle=$,this.drawHeroineStatusText()}drawHeroineStatusText(){const $=this.puzzle.heroine.getHpRatio(),E=getStatusText($);this.setText(E)}}const commandButtonConfig={skip:{name:btnTexts.skip.name,symbol:"skip",description:()=>btnTexts.skip.description,callback:()=>showBattleLogSeq(btnTexts.skip.act)},suicide:{name:btnTexts.surrender.name,symbol:"suicide",description:()=>btnTexts.surrender.description}};class BattleCommandWin extends Touchable(Window_Command,containerCheckTouched){constructor($){const E=SceneManager._scene.calcWindowHeight(2,!0);super(new PIXI.Rectangle(Graphics.boxWidth-CONFIG.menu.width-CONFIG.battleCommandWind.width-CONFIG.battleCommandWind.padding,Graphics.height-E-CONFIG.battleCommandWind.padding-CONFIG.common.appPaddingY,CONFIG.battleCommandWind.width,E));Y(this,"puzzle");this.puzzle=$,this.close(),this.setHandler(commandButtonConfig.skip.symbol,()=>{this.close();const{callback:B}=commandButtonConfig.skip;B&&B($);const{menu:H}=this.puzzle;[...H.puzzleButtons].forEach(U=>{H.removeSkillBtn(U),H.addRandomSkillBtn()}),startProcessTurn()}),this.setHandler(commandButtonConfig.suicide.symbol,()=>{killParty(),startProcessTurn()})}makeCommandList(){this.addCommand(commandButtonConfig.skip.name,commandButtonConfig.skip.symbol),this.addCommand(commandButtonConfig.suicide.name,commandButtonConfig.suicide.symbol)}select($){var B;super.select($);const E=(B=this.currentData())==null?void 0:B.symbol;!E||!this.puzzle||this.puzzle.helpWindow.setText(commandButtonConfig[E].description(this.puzzle))}close(){super.close(),this.deselect()}reset(){this.open(),this.activate(),this.deselect(),this.puzzle.helpWindow.drawHeroineStatusText()}hoverOut(){this.isCursorMovable()&&this.deselect(),this.puzzle.helpWindow.drawHeroineStatusText()}}class SpSkillItem{constructor(I){Y(this,"isActive");Y(this,"cdTime");Y(this,"config");this.config=getSpSkillConfig(I),this.cdTime=0,this.isActive=!1}async onAction(){const I=getPuzzle();this.isActive=!0,I.spSkillsMenu.close(),await this.config.action(this),this.isActive=!1,I.spSkillsMenu.open()}processTurn(){this.cdTime>0&&(this.cdTime-=1)}cdReset(){}}class SpSkillsMenu extends Window_Selectable{constructor($){const E=$.map.getBounds(),B=getHeroineSkillIds(2),H=(ImageManager.iconWidth+24)*B.length;super(new PIXI.Rectangle(E.x+(E.width-H)/2,E.y+E.height+24,H,ImageManager.iconHeight+28));Y(this,"puzzle");Y(this,"skills");this.puzzle=$,this.skills=B.map(U=>new SpSkillItem(U)),this.close(),this.refresh(),this.activate(),this.setHandler("ok",this.processOk),addStageEventListener(STAGE_EVENT.turnStart,()=>{this.skills.forEach(U=>U.processTurn.apply(U)),this.refresh()})}maxItems(){var $;return(($=this.skills)==null?void 0:$.length)||1}itemWidth(){return Math.floor(this.innerWidth/this.maxItems())}itemHeight(){return this.lineHeight()}maxRows(){return 1}maxCols(){return this.maxItems()}drawItem($){const E=this.skills[$],{iconIndex:B}=$dataSkills[E.config.id]||{},H=this.itemRect($),U=H.x+(H.width-ImageManager.iconWidth)/2,j=H.y+(H.height-ImageManager.iconHeight)/2;this.changePaintOpacity(this.isCommandEnabled($)),this.drawIcon(B,U,j),this.changePaintOpacity(!0)}processOk(){if(this.isCurrentItemEnabled()){const $=this.index(),E=this.skills[$];E&&E.onAction(),this.playOkSound()}else this.playBuzzerSound()}isCurrentItemEnabled(){const $=this.index();return this.isCommandEnabled($)}isCommandEnabled($){const E=this.skills[$];return E?E.cdTime<=0:!1}}class Puzzle extends Scene_Message{constructor({enemyId:$,skillIds:E}){super();Y(this,"enemyConfig");Y(this,"map");Y(this,"skills");Y(this,"menu");Y(this,"battleController");Y(this,"heroine");Y(this,"helpWindow");Y(this,"battleCommandWin");Y(this,"spSkillsMenu");Y(this,"spriteset");Y(this,"effectContainer");Y(this,"onSkillPuzzleDragStart",$=>{this.spriteset.addChild($),$.alpha=.5});Y(this,"onSkillPuzzleMove",$=>{const E=$.checkHover(this.map,this);this.map.units.children.forEach(B=>{E.includes(B)?B.onHover($.canDrop):B.onHoverOut()})});Y(this,"onSkillPuzzleReset",$=>{this.menu.activeButton=null,this.spriteset.removeChild($),$.alpha=1});Y(this,"onSkillPuzzleDrop",$=>{if(this.map.resetHover(),!$.canDrop){$.reset();return}const E=$.checkHover(this.map,this);if(isEmpty(E)){$.reset();return}this.onSkillPuzzleDropSuccess($,E)});Y(this,"onSkillPuzzleDropSuccess",($,E)=>{const{snapshot:B,config:H}=$,U=copySkillForMap(B,H,"user"),j=calculatePos(H.shape,E[0]);U.position.set(j.x,j.y),godRayEffect(U);const X=onMapEffectColor(E);glowEffect(U,X),this.map.spriteset.addChild(U),E.forEach((V,q)=>V.onFill(U.children[q])),this.menu.activeButton&&(this.menu.removeSkillBtn(this.menu.activeButton),this.menu.addRandomSkillBtn()),this.menu.removeInvalidSkills(),$.reset(),this.battleController.onAttackSuccess({skillId:$.id,enemyId:this.enemyConfig.id,units:E})});this.battleController=new BattleController(this),this.enemyConfig=getEnemyConfig($),this.map=new PuzzleMap(this.enemyConfig,this),this.addChild(this.map),this.skills=E.map(B=>new PuzzleSkill(B,this)),this.menu=new PuzzleMenu(this.skills,this),this.addChild(this.menu),this.spSkillsMenu=new SpSkillsMenu(this),this.addChild(this.spSkillsMenu),this.heroine=new Heroine(this),this.addChild(this.heroine),this.battleCommandWin=new BattleCommandWin(this),this.addChild(this.battleCommandWin),this.skills.forEach(B=>{B.addListener(DRAG_EVENT.start,this.onSkillPuzzleDragStart),B.addListener(DRAG_EVENT.move,this.onSkillPuzzleMove),B.addListener(DRAG_EVENT.end,this.onSkillPuzzleDrop),B.addListener(DRAG_EVENT.reset,this.onSkillPuzzleReset)}),this.helpWindow=new HelpWindow(this),this.addChild(this.helpWindow),this.spriteset=new Sprite(new Bitmap(0,0)),this.addChild(this.spriteset),this.effectContainer=new Sprite(new Bitmap(0,0)),Graphics.app.stage.addChild(this.effectContainer),globalThis.puzzle=this}destroy(){var $;this.skills.forEach(E=>{E.isDestroyed()||E.destroy({children:!0,texture:!0,baseTexture:!0})}),($=Graphics.app.stage)==null||$.removeChild(this.effectContainer),globalThis.puzzle=null,super.destroy()}}const getAllAssetsPaths=()=>{var V;const C=getHeroineSkillIds(),I=$gameTroop.troop().id,$=getEnemyConfig(I),E=[1,2].map(q=>getFigurePath("Rita",q)),B=C.map(getSkillPath),H=getEnemyImagePath(),U=Object.keys($.unitsTexture).map(getEnemyUnitPath),j=[0,1,2,3].map(q=>getEnemySkillPath("enemy",q)),X=((V=$.otherAssets)==null?void 0:V.map(getOtherAsset))||[];return uniq(E.concat(B).concat([H]).concat(j).concat(U).concat(X))};globalThis.addEventListener(APP_EVENT.createBattleScene,()=>{getAllAssetsPaths().forEach(I=>{ImageManager.loadMsgkAssets(I)})});const loadCustomAssets=()=>{const{unitSize:C}=CONFIG.map;for(let $=0;$<=3;$++){const E=getEnemySkillPath("enemy",$),B=getAssetTexture(E),H=new PIXI.Rectangle(C,C,C,C),U=new PIXI.Texture(B.baseTexture,H);B.destroy(),setAssetTexture(E,U)}const I=getEnemyConfig($gameTroop.troop().id);Object.keys(I.unitsTexture).forEach($=>{const E=getEnemyUnitPath($),B=getAssetTexture(E);setAssetTexture(E,B)})};globalThis.addEventListener(APP_EVENT.battleSceneReady,async()=>{loadCustomAssets();const C=new CustomUpdater;globalThis.customUpdater=C;const I=$gameTroop.troop().id,$=getHeroineSkillIds(),E=new Puzzle({enemyId:I,skillIds:$});Graphics.app.stage.addChildAt(E,1),Graphics.app.stage.addChild(C),Graphics.app.stage.emit(STAGE_EVENT.battleStart),BattleManager._spriteset.battlerSprites().forEach(H=>H.hide());const B=[];B.push(addStageEventListener(STAGE_EVENT.troopEventStart,()=>{E.map.resetHover(),TouchInput.clear(),toggleControllable(!1)}),addStageEventListener(STAGE_EVENT.troopEventEnd,()=>{toggleControllable(!0)})),addStageEventListenerOnce(STAGE_EVENT.battleEnd,()=>{TouchInput.clear(),B.forEach(H=>H())})});const mixins={add(C,I){return I||(I=new core.Point),I.x=this.x+C.x,I.y=this.y+C.y,I},subtract(C,I){return I||(I=new core.Point),I.x=this.x-C.x,I.y=this.y-C.y,I},multiply(C,I){return I||(I=new core.Point),I.x=this.x*C.x,I.y=this.y*C.y,I},multiplyScalar(C,I){return I||(I=new core.Point),I.x=this.x*C,I.y=this.y*C,I},dot(C){return this.x*C.x+this.y*C.y},cross(C){return this.x*C.y-this.y*C.x},normalize(C){C||(C=new core.Point);const I=Math.sqrt(this.x*this.x+this.y*this.y);return C.x=this.x/I,C.y=this.y/I,C},magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y)},magnitudeSquared(){return this.x*this.x+this.y*this.y},project(C,I){I||(I=new core.Point);const $=(this.x*C.x+this.y*C.y)/(C.x*C.x+C.y*C.y);return I.x=C.x*$,I.y=C.y*$,I},reflect(C,I){I||(I=new core.Point);const $=this.x*C.x+this.y*C.y;return I.x=this.x-2*$*C.x,I.y=this.y-2*$*C.y,I}};Object.assign(core.Point.prototype,mixins),Object.assign(core.ObservablePoint.prototype,mixins),core.Rectangle.prototype.containsRect=function(C){return C.width<=0||C.height<=0?C.x>this.x&&C.y>this.y&&C.right<this.right&&C.bottom<this.bottom:C.x>=this.x&&C.y>=this.y&&C.right<=this.right&&C.bottom<=this.bottom},core.Rectangle.prototype.equals=function(C){return C===this?!0:C&&this.x===C.x&&this.y===C.y&&this.width===C.width&&this.height===C.height},core.Rectangle.prototype.intersection=function(C,I){I||(I=new core.Rectangle);const $=this.x<C.x?C.x:this.x,E=this.right>C.right?C.right:this.right;if(E<=$)return I.x=I.y=I.width=I.height=0,I;const B=this.y<C.y?C.y:this.y,H=this.bottom>C.bottom?C.bottom:this.bottom;return H<=B?(I.x=I.y=I.width=I.height=0,I):(I.x=$,I.y=B,I.width=E-$,I.height=H-B,I)},core.Rectangle.prototype.union=function(C,I){I||(I=new core.Rectangle);const $=Math.min(this.x,C.x),E=Math.max(this.x+this.width,C.x+C.width),B=Math.min(this.y,C.y),H=Math.max(this.y+this.height,C.y+C.height);return I.x=$,I.y=B,I.width=E-$,I.height=H-B,I},PIXI.settings.PREFER_ENV=PIXI.ENV.WEBGL2,Object.assign(PIXI.Sprite.prototype,{isDestroyed:function(){return this._destroyed}}),Object.assign(PIXI.Container.prototype,{isDestroyed:function(){return this._destroyed}});const _SceneManager_onSceneStart=SceneManager.onSceneStart;SceneManager.onSceneStart=function(){if(_SceneManager_onSceneStart.apply(this),this._scene instanceof Scene_Battle){const C=new CustomEvent(APP_EVENT.battleSceneReady);globalThis.dispatchEvent(C)}},function(){const C=BattleManager.update;BattleManager.isPaused=!1,BattleManager.update=function(...I){BattleManager.isPaused||C.apply(this,I)},BattleManager.pauseBattle=function(){BattleManager.isPaused=!0},BattleManager.resumeBattle=function(){BattleManager.isPaused=!1}}();const _BattleManager_updatePhase=BattleManager.updatePhase;BattleManager.updatePhase=function(C){switch(this._phase){case"start":Graphics.app.stage.emit(STAGE_EVENT.turnStart,C);break;case"turn":break;case"action":break;case"turnEnd":Graphics.app.stage.emit(STAGE_EVENT.turnEnd,C);break;case"battleEnd":Graphics.app.stage.emit(STAGE_EVENT.battleEnd,C);break}_BattleManager_updatePhase.apply(this,[C])};const _BattleManager_getNextSubject=BattleManager.getNextSubject;BattleManager.getNextSubject=function(){const C=this._actionBattlers,I=C.find(Boolean);return I instanceof Game_Enemy&&(difference$1($gameTroop.members(),C).length||Graphics.app.stage.emit(STAGE_EVENT.enemyTurn,I)),_BattleManager_getNextSubject.apply(this)},ImageManager.loadMsgkAssets=function(C){return this.loadBitmap.apply(this,["",C.replace(/\.png$/,"")])};const _Scene_Battle_create=Scene_Battle.prototype.create;Scene_Battle.prototype.create=function(){const C=new CustomEvent(APP_EVENT.createBattleScene);globalThis.dispatchEvent(C),_Scene_Battle_create.apply(this)};const _Scene_Battle_startPartyCommandSelection=Scene_Battle.prototype.startPartyCommandSelection;Scene_Battle.prototype.startPartyCommandSelection=function(){_Scene_Battle_startPartyCommandSelection.apply(this),this._statusWindow.hide(),this._statusWindow.alpha=0,this._partyCommandWindow.hide(),this._actorCommandWindow.hide()};const _Scene_Battle_terminate=Scene_Battle.prototype.terminate;Scene_Battle.prototype.terminate=function(){clearCache(),_Scene_Battle_terminate.apply(this)};const _Window_BattleLog_wait=Window_BattleLog.prototype.wait;Window_BattleLog.prototype.wait=function(C){if(C){this._waitCount=C;return}_Window_BattleLog_wait.apply(this)};const _Window_Base_convertEscapeCharacters=Window_Base.prototype.convertEscapeCharacters;Window_Base.prototype.convertEscapeCharacters=function(C){return _Window_Base_convertEscapeCharacters.apply(this,[C]).replace(/\x1bCT\[(\d+)\]/gi,(E,B)=>{var U;const H=parseInt(B);return H===0?(U=$gameTroop.troop())==null?void 0:U.name:$gameTroop.enemyNames()[H-1]})};const _Game_Battler_onAllActionsEnd=Game_Battler.prototype.onAllActionsEnd;Game_Battler.prototype.onAllActionsEnd=function(){this instanceof Game_Enemy&&this===getFirstEnemy()&&Graphics.app.stage.emit(STAGE_EVENT.enemyActionEnd,this),_Game_Battler_onAllActionsEnd.apply(this)};let isTroopEventRunning=!1;const _Game_Troop_isEventRunning=Game_Troop.prototype.isEventRunning;Game_Troop.prototype.isEventRunning=function(){const C=_Game_Troop_isEventRunning.apply(this);return C!==isTroopEventRunning&&(isTroopEventRunning=C,C?Graphics.app.stage.emit(STAGE_EVENT.troopEventStart):Graphics.app.stage.emit(STAGE_EVENT.troopEventEnd)),C};const setupPlugin=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}))});
