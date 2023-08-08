var dt=Object.defineProperty;var c=(e,t)=>dt(e,"name",{value:t,configurable:!0});import{H as _t,I as Et,J as pt,K as St,L as gt,M as yt,N as Rt,w as m,j as it,c as ht}from"./iframe.b086399d.js";import"./es.map.constructor.0d9ae320.js";var S;(function(e){e.CHANNEL_CREATED="channelCreated",e.CONFIG_ERROR="configError",e.STORY_INDEX_INVALIDATED="storyIndexInvalidated",e.STORY_SPECIFIED="storySpecified",e.SET_STORIES="setStories",e.SET_CURRENT_STORY="setCurrentStory",e.CURRENT_STORY_WAS_SET="currentStoryWasSet",e.FORCE_RE_RENDER="forceReRender",e.FORCE_REMOUNT="forceRemount",e.PRELOAD_STORIES="preloadStories",e.STORY_PREPARED="storyPrepared",e.STORY_CHANGED="storyChanged",e.STORY_UNCHANGED="storyUnchanged",e.STORY_RENDERED="storyRendered",e.STORY_MISSING="storyMissing",e.STORY_ERRORED="storyErrored",e.STORY_THREW_EXCEPTION="storyThrewException",e.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",e.UPDATE_STORY_ARGS="updateStoryArgs",e.STORY_ARGS_UPDATED="storyArgsUpdated",e.RESET_STORY_ARGS="resetStoryArgs",e.SET_GLOBALS="setGlobals",e.UPDATE_GLOBALS="updateGlobals",e.GLOBALS_UPDATED="globalsUpdated",e.REGISTER_SUBSCRIPTION="registerSubscription",e.PREVIEW_KEYDOWN="previewKeydown",e.SELECT_STORY="selectStory",e.STORIES_COLLAPSE_ALL="storiesCollapseAll",e.STORIES_EXPAND_ALL="storiesExpandAll",e.DOCS_RENDERED="docsRendered",e.SHARED_STATE_CHANGED="sharedStateChanged",e.SHARED_STATE_SET="sharedStateSet",e.NAVIGATE_URL="navigateUrl",e.UPDATE_QUERY_PARAMS="updateQueryParams"})(S||(S={}));S.CHANNEL_CREATED;S.CONFIG_ERROR;S.STORY_INDEX_INVALIDATED;S.STORY_SPECIFIED;S.SET_STORIES;S.SET_CURRENT_STORY;S.CURRENT_STORY_WAS_SET;S.FORCE_RE_RENDER;var Ot=S.FORCE_REMOUNT;S.STORY_PREPARED;S.STORY_CHANGED;S.STORY_UNCHANGED;S.PRELOAD_STORIES;S.STORY_RENDERED;S.STORY_MISSING;S.STORY_ERRORED;S.STORY_THREW_EXCEPTION;var mt=S.STORY_RENDER_PHASE_CHANGED;S.UPDATE_STORY_ARGS;S.STORY_ARGS_UPDATED;S.RESET_STORY_ARGS;S.SET_GLOBALS;S.UPDATE_GLOBALS;S.GLOBALS_UPDATED;S.REGISTER_SUBSCRIPTION;S.PREVIEW_KEYDOWN;S.SELECT_STORY;S.STORIES_COLLAPSE_ALL;S.STORIES_EXPAND_ALL;S.DOCS_RENDERED;S.SHARED_STATE_CHANGED;S.SHARED_STATE_SET;S.NAVIGATE_URL;S.UPDATE_QUERY_PARAMS;var Tt=_t,vt=Et;Tt("toPrimitive");vt();var It=pt,At=St,bt=TypeError,Ct=c(function(e){if(It(this),e==="string"||e==="default")e="string";else if(e!=="number")throw bt("Incorrect hint");return At(this,e)},"dateToPrimitive$1"),Dt=gt,wt=yt,Pt=Ct,Nt=Rt,K=Nt("toPrimitive"),X=Date.prototype;Dt(X,K)||wt(X,K,Pt);var kt=m.LOGLEVEL,b=m.console,w={trace:1,debug:2,info:3,warn:4,error:5,silent:10},Mt=kt,N=w[Mt]||w.info,Q={trace:c(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return N<=w.trace&&b.trace.apply(b,[t].concat(n))},"trace"),debug:c(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return N<=w.debug&&b.debug.apply(b,[t].concat(n))},"debug"),info:c(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return N<=w.info&&b.info.apply(b,[t].concat(n))},"info"),warn:c(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return N<=w.warn&&b.warn.apply(b,[t].concat(n))},"warn"),error:c(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return N<=w.error&&b.error.apply(b,[t].concat(n))},"error"),log:c(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return N<w.silent&&b.log.apply(b,[t].concat(n))},"log")},F=new Set,v=c(function(t){return function(r){if(!F.has(r)){F.add(r);for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return Q[t].apply(Q,[r].concat(i))}}},"once");v.clear=function(){return F.clear()};v.trace=v("trace");v.debug=v("debug");v.info=v("info");v.warn=v("warn");v.error=v("error");v.log=v("log");var g;(function(e){e.CHANNEL_CREATED="channelCreated",e.CONFIG_ERROR="configError",e.STORY_INDEX_INVALIDATED="storyIndexInvalidated",e.STORY_SPECIFIED="storySpecified",e.SET_STORIES="setStories",e.SET_CURRENT_STORY="setCurrentStory",e.CURRENT_STORY_WAS_SET="currentStoryWasSet",e.FORCE_RE_RENDER="forceReRender",e.FORCE_REMOUNT="forceRemount",e.PRELOAD_STORIES="preloadStories",e.STORY_PREPARED="storyPrepared",e.STORY_CHANGED="storyChanged",e.STORY_UNCHANGED="storyUnchanged",e.STORY_RENDERED="storyRendered",e.STORY_MISSING="storyMissing",e.STORY_ERRORED="storyErrored",e.STORY_THREW_EXCEPTION="storyThrewException",e.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",e.UPDATE_STORY_ARGS="updateStoryArgs",e.STORY_ARGS_UPDATED="storyArgsUpdated",e.RESET_STORY_ARGS="resetStoryArgs",e.SET_GLOBALS="setGlobals",e.UPDATE_GLOBALS="updateGlobals",e.GLOBALS_UPDATED="globalsUpdated",e.REGISTER_SUBSCRIPTION="registerSubscription",e.PREVIEW_KEYDOWN="previewKeydown",e.SELECT_STORY="selectStory",e.STORIES_COLLAPSE_ALL="storiesCollapseAll",e.STORIES_EXPAND_ALL="storiesExpandAll",e.DOCS_RENDERED="docsRendered",e.SHARED_STATE_CHANGED="sharedStateChanged",e.SHARED_STATE_SET="sharedStateSet",e.NAVIGATE_URL="navigateUrl",e.UPDATE_QUERY_PARAMS="updateQueryParams"})(g||(g={}));g.CHANNEL_CREATED;g.CONFIG_ERROR;g.STORY_INDEX_INVALIDATED;g.STORY_SPECIFIED;g.SET_STORIES;var Lt=g.SET_CURRENT_STORY;g.CURRENT_STORY_WAS_SET;g.FORCE_RE_RENDER;var z=g.FORCE_REMOUNT;g.STORY_PREPARED;g.STORY_CHANGED;g.STORY_UNCHANGED;g.PRELOAD_STORIES;g.STORY_RENDERED;g.STORY_MISSING;g.STORY_ERRORED;g.STORY_THREW_EXCEPTION;var Ut=g.STORY_RENDER_PHASE_CHANGED;g.UPDATE_STORY_ARGS;g.STORY_ARGS_UPDATED;g.RESET_STORY_ARGS;g.SET_GLOBALS;g.UPDATE_GLOBALS;g.GLOBALS_UPDATED;g.REGISTER_SUBSCRIPTION;g.PREVIEW_KEYDOWN;g.SELECT_STORY;g.STORIES_COLLAPSE_ALL;g.STORIES_EXPAND_ALL;g.DOCS_RENDERED;g.SHARED_STATE_CHANGED;g.SHARED_STATE_SET;g.NAVIGATE_URL;g.UPDATE_QUERY_PARAMS;var Yt=new Error("ignoredException"),I;(function(e){e.DONE="done",e.ERROR="error",e.ACTIVE="active",e.WAITING="waiting"})(I||(I={}));var Y;function k(e){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(e)}c(k,"_typeof");function Gt(e,t){if(e==null)return{};var r=xt(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}c(Gt,"_objectWithoutProperties");function xt(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}c(xt,"_objectWithoutPropertiesLoose");function jt(e){var t=Ft(e,"string");return k(t)==="symbol"?t:String(t)}c(jt,"_toPropertyKey");function Ft(e,t){if(k(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(k(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}c(Ft,"_toPrimitive");function U(e){return Wt(e)||Bt(e)||at(e)||Ht()}c(U,"_toConsumableArray");function Ht(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}c(Ht,"_nonIterableSpread");function Bt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}c(Bt,"_iterableToArray");function Wt(e){if(Array.isArray(e))return H(e)}c(Wt,"_arrayWithoutHoles");function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}c(G,"_defineProperty$1");function Vt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}c(Vt,"_classCallCheck");function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}c(J,"_defineProperties");function $t(e,t,r){return t&&J(e.prototype,t),r&&J(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}c($t,"_createClass");function ot(e,t){return Qt(e)||Xt(e,t)||at(e,t)||Kt()}c(ot,"_slicedToArray$1");function Kt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}c(Kt,"_nonIterableRest$1");function at(e,t){if(!!e){if(typeof e=="string")return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}}c(at,"_unsupportedIterableToArray$1");function H(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}c(H,"_arrayLikeToArray$1");function Xt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,a=!1,u,o;try{for(r=r.call(e);!(i=(u=r.next()).done)&&(n.push(u.value),!(t&&n.length===t));i=!0);}catch(s){a=!0,o=s}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw o}}return n}}c(Xt,"_iterableToArrayLimit$1");function Qt(e){if(Array.isArray(e))return e}c(Qt,"_arrayWithHoles$1");var C={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},st=((Y=m.FEATURES)===null||Y===void 0?void 0:Y.interactionsDebugger)!==!0,q={debugger:!st,start:!1,back:!1,goto:!1,next:!1,end:!1},Z=new Error("This function ran after the play function completed. Did you forget to `await` it?"),tt=c(function(t){return Object.prototype.toString.call(t)==="[object Object]"},"isObject"),zt=c(function(t){return Object.prototype.toString.call(t)==="[object Module]"},"isModule"),Jt=c(function(t){if(!tt(t)&&!zt(t))return!1;if(t.constructor===void 0)return!0;var r=t.constructor.prototype;return!(!tt(r)||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)},"isInstrumentable"),qt=c(function(t){try{return new t.constructor}catch{return{}}},"construct"),x=c(function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},"getInitialState"),et=c(function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(r?t.shadowCalls:t.calls).filter(function(a){return a.retain});if(!!n.length){var i=new Map(Array.from(t.callRefsByResult.entries()).filter(function(a){var u=ot(a,2),o=u[1];return o.retain}));return{cursor:n.length,calls:n,callRefsByResult:i}}},"getRetainedState"),Zt=function(){function e(){var t=this;Vt(this,e),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=it.getChannel(),this.state=m.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var r=c(function(f){var l=f.storyId,_=f.isPlaying,y=_===void 0?!0:_,p=f.isDebugging,d=p===void 0?!1:p,E=t.getState(l);t.setState(l,Object.assign({},x(),et(E,d),{shadowCalls:d?E.shadowCalls:[],chainedCallIds:d?E.chainedCallIds:new Set,playUntil:d?E.playUntil:void 0,isPlaying:y,isDebugging:d})),d||t.sync(l)},"resetState");this.channel.on(z,r),this.channel.on(Ut,function(s){var f=s.storyId,l=s.newPhase,_=t.getState(f),y=_.isDebugging,p=_.forwardedException;if(t.setState(f,{renderPhase:l}),l==="playing"&&r({storyId:f,isDebugging:y}),l==="played"&&(t.setState(f,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),p))throw p}),this.channel.on(Lt,function(){t.initialized?t.cleanup():t.initialized=!0});var n=c(function(f){var l=f.storyId,_=f.playUntil;t.getState(l).isDebugging||t.setState(l,function(p){var d=p.calls;return{calls:[],shadowCalls:d.map(function(E){return Object.assign({},E,{status:I.WAITING})}),isDebugging:!0}});var y=t.getLog(l);t.setState(l,function(p){var d,E=p.shadowCalls,h=E.findIndex(function(R){return R.id===y[0].callId});return{playUntil:_||((d=E.slice(0,h).filter(function(R){return R.interceptable}).slice(-1)[0])===null||d===void 0?void 0:d.id)}}),t.channel.emit(z,{storyId:l,isDebugging:!0})},"start"),i=c(function(f){var l,_=f.storyId,y=t.getState(_),p=y.isDebugging,d=t.getLog(_),E=p?d.findIndex(function(h){var R=h.status;return R===I.WAITING}):d.length;n({storyId:_,playUntil:(l=d[E-2])===null||l===void 0?void 0:l.callId})},"back"),a=c(function(f){var l=f.storyId,_=f.callId,y=t.getState(l),p=y.calls,d=y.shadowCalls,E=y.resolvers,h=p.find(function(T){var P=T.id;return P===_}),R=d.find(function(T){var P=T.id;return P===_});if(!h&&R&&Object.values(E).length>0){var O,A=(O=t.getLog(l).find(function(T){return T.status===I.WAITING}))===null||O===void 0?void 0:O.callId;R.id!==A&&t.setState(l,{playUntil:R.id}),Object.values(E).forEach(function(T){return T()})}else n({storyId:l,playUntil:_})},"goto"),u=c(function(f){var l=f.storyId,_=t.getState(l),y=_.resolvers;if(Object.values(y).length>0)Object.values(y).forEach(function(E){return E()});else{var p,d=(p=t.getLog(l).find(function(E){return E.status===I.WAITING}))===null||p===void 0?void 0:p.callId;d?n({storyId:l,playUntil:d}):o({storyId:l})}},"next"),o=c(function(f){var l=f.storyId;t.setState(l,{playUntil:void 0,isDebugging:!1}),Object.values(t.getState(l).resolvers).forEach(function(_){return _()})},"end");this.channel.on(C.START,n),this.channel.on(C.BACK,i),this.channel.on(C.GOTO,a),this.channel.on(C.NEXT,u),this.channel.on(C.END,o)}return c(e,"Instrumenter"),$t(e,[{key:"getState",value:c(function(r){return this.state[r]||x()},"getState")},{key:"setState",value:c(function(r,n){var i=this.getState(r),a=typeof n=="function"?n(i):n;this.state=Object.assign({},this.state,G({},r,Object.assign({},i,a))),m.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"setState")},{key:"cleanup",value:c(function(){this.state=Object.entries(this.state).reduce(function(r,n){var i=ot(n,2),a=i[0],u=i[1],o=et(u);return o&&(r[a]=Object.assign(x(),o)),r},{}),this.channel.emit(C.SYNC,{controlStates:q,logItems:[]}),m.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"cleanup")},{key:"getLog",value:c(function(r){var n=this.getState(r),i=n.calls,a=n.shadowCalls,u=U(a);i.forEach(function(s,f){u[f]=s});var o=new Set;return u.reduceRight(function(s,f){return f.args.forEach(function(l){l!=null&&l.__callId__&&o.add(l.__callId__)}),f.path.forEach(function(l){l.__callId__&&o.add(l.__callId__)}),f.interceptable&&!o.has(f.id)&&(s.unshift({callId:f.id,status:f.status}),o.add(f.id)),s},[])},"getLog")},{key:"instrument",value:c(function(r,n){var i=this;if(!Jt(r))return r;var a=n.mutate,u=a===void 0?!1:a,o=n.path,s=o===void 0?[]:o;return Object.keys(r).reduce(function(f,l){var _=r[l];return typeof _!="function"?(f[l]=i.instrument(_,Object.assign({},n,{path:s.concat(l)})),f):typeof _.__originalFn__=="function"?(f[l]=_,f):(f[l]=function(){for(var y=arguments.length,p=new Array(y),d=0;d<y;d++)p[d]=arguments[d];return i.track(l,_,p,n)},f[l].__originalFn__=_,Object.defineProperty(f[l],"name",{value:l,writable:!1}),Object.keys(_).length>0&&Object.assign(f[l],i.instrument(Object.assign({},_),Object.assign({},n,{path:s.concat(l)}))),f)},u?r:qt(r))},"instrument")},{key:"track",value:c(function(r,n,i,a){var u,o,s,f,l=(i==null||(u=i[0])===null||u===void 0?void 0:u.__storyId__)||((o=m.window.__STORYBOOK_PREVIEW__)===null||o===void 0||(s=o.urlStore)===null||s===void 0||(f=s.selection)===null||f===void 0?void 0:f.storyId),_=this.getState(l),y=_.cursor,p=_.parentId;this.setState(l,{cursor:y+1});var d="".concat(p||l," [").concat(y,"] ").concat(r),E=a.path,h=E===void 0?[]:E,R=a.intercept,O=R===void 0?!1:R,A=a.retain,T=A===void 0?!1:A,P=typeof O=="function"?O(r,h):O,$={id:d,parentId:p,storyId:l,cursor:y,path:h,method:r,args:i,interceptable:P,retain:T},ft=(P?this.intercept:this.invoke).call(this,n,$,a);return this.instrument(ft,Object.assign({},a,{mutate:!0,path:[{__callId__:$.id}]}))},"track")},{key:"intercept",value:c(function(r,n,i){var a=this,u=this.getState(n.storyId),o=u.chainedCallIds,s=u.isDebugging,f=u.playUntil,l=o.has(n.id);return!s||l||f?(f===n.id&&this.setState(n.storyId,{playUntil:void 0}),this.invoke(r,n,i)):new Promise(function(_){a.setState(n.storyId,function(y){var p=y.resolvers;return{isLocked:!1,resolvers:Object.assign({},p,G({},n.id,_))}})}).then(function(){return a.setState(n.storyId,function(_){var y=_.resolvers,p=n.id;y[p];var d=Gt(y,[p].map(jt));return{isLocked:!0,resolvers:d}}),a.invoke(r,n,i)})},"intercept")},{key:"invoke",value:c(function(r,n,i){var a=this,u=this.getState(n.storyId),o=u.callRefsByResult,s=u.forwardedException,f=u.renderPhase,l=Object.assign({},n,{args:n.args.map(function(d){if(o.has(d))return o.get(d);if(d instanceof m.window.HTMLElement){var E=d.prefix,h=d.localName,R=d.id,O=d.classList,A=d.innerText,T=Array.from(O);return{__element__:{prefix:E,localName:h,id:R,classNames:T,innerText:A}}}return d})});n.path.forEach(function(d){d!=null&&d.__callId__&&a.setState(n.storyId,function(E){var h=E.chainedCallIds;return{chainedCallIds:new Set(Array.from(h).concat(d.__callId__))}})});var _=c(function(E){if(E instanceof Error){var h=E.name,R=E.message,O=E.stack,A={name:h,message:R,stack:O};if(a.update(Object.assign({},l,{status:I.ERROR,exception:A})),a.setState(n.storyId,function(T){return{callRefsByResult:new Map([].concat(U(Array.from(T.callRefsByResult.entries())),[[E,{__callId__:n.id,retain:n.retain}]]))}}),n.interceptable&&E!==Z)throw Yt;return a.setState(n.storyId,{forwardedException:E}),E}throw E},"handleException");try{if(s)throw this.setState(n.storyId,{forwardedException:void 0}),s;if(f==="played"&&!n.retain)throw Z;var y=i.getArgs?i.getArgs(n,this.getState(n.storyId)):n.args,p=r.apply(void 0,U(y.map(function(d){return typeof d!="function"||Object.keys(d).length?d:function(){var E=a.getState(n.storyId),h=E.cursor,R=E.parentId;a.setState(n.storyId,{cursor:0,parentId:n.id});var O=c(function(){return a.setState(n.storyId,{cursor:h,parentId:R})},"restore"),A=d.apply(void 0,arguments);return A instanceof Promise?A.then(O,O):O(),A}})));return p&&["object","function","symbol"].includes(k(p))&&this.setState(n.storyId,function(d){return{callRefsByResult:new Map([].concat(U(Array.from(d.callRefsByResult.entries())),[[p,{__callId__:n.id,retain:n.retain}]]))}}),this.update(Object.assign({},l,{status:p instanceof Promise?I.ACTIVE:I.DONE})),p instanceof Promise?p.then(function(d){return a.update(Object.assign({},l,{status:I.DONE})),d},_):p}catch(d){return _(d)}},"invoke")},{key:"update",value:c(function(r){var n=this;clearTimeout(this.getState(r.storyId).syncTimeout),this.channel.emit(C.CALL,r),this.setState(r.storyId,function(i){var a=i.calls,u=a.concat(r).reduce(function(o,s){return Object.assign(o,G({},s.id,s))},{});return{calls:Object.values(u).sort(function(o,s){return o.id.localeCompare(s.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return n.sync(r.storyId)},0)}})},"update")},{key:"sync",value:c(function(r){var n=this.getState(r),i=n.isLocked,a=n.isPlaying,u=this.getLog(r),o=u.some(function(l){return l.status===I.ACTIVE});if(st||i||o||u.length===0){this.channel.emit(C.SYNC,{controlStates:q,logItems:u});return}var s=u.some(function(l){return[I.DONE,I.ERROR].includes(l.status)}),f={debugger:!0,start:s,back:s,goto:!0,next:a,end:a};this.channel.emit(C.SYNC,{controlStates:f,logItems:u})},"sync")}]),e}();function te(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var r,n,i,a,u=!1,o=!1;if(((r=m.window.location)===null||r===void 0||(n=r.search)===null||n===void 0?void 0:n.indexOf("instrument=true"))!==-1?u=!0:((i=m.window.location)===null||i===void 0||(a=i.search)===null||a===void 0?void 0:a.indexOf("instrument=false"))!==-1&&(o=!0),m.window.parent===m.window&&!u||o)return e;m.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(m.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new Zt);var s=m.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return s.instrument(e,t)}catch(f){return v.warn(f),e}}c(te,"instrument");var D={};Object.defineProperty(D,"__esModule",{value:!0});D.spyOn=D.mocked=D.fn=lt=D.ModuleMocker=void 0;function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}c(L,"_defineProperty");const j="mockConstructor",ut=/[\s!-\/:-@\[-`{-~]/,ee=new RegExp(ut.source,"g"),re=new Set(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]);function ne(e,t){let r;switch(t){case 1:r=c(function(n){return e.apply(this,arguments)},"mockConstructor");break;case 2:r=c(function(n,i){return e.apply(this,arguments)},"mockConstructor");break;case 3:r=c(function(n,i,a){return e.apply(this,arguments)},"mockConstructor");break;case 4:r=c(function(n,i,a,u){return e.apply(this,arguments)},"mockConstructor");break;case 5:r=c(function(n,i,a,u,o){return e.apply(this,arguments)},"mockConstructor");break;case 6:r=c(function(n,i,a,u,o,s){return e.apply(this,arguments)},"mockConstructor");break;case 7:r=c(function(n,i,a,u,o,s,f){return e.apply(this,arguments)},"mockConstructor");break;case 8:r=c(function(n,i,a,u,o,s,f,l){return e.apply(this,arguments)},"mockConstructor");break;case 9:r=c(function(n,i,a,u,o,s,f,l,_){return e.apply(this,arguments)},"mockConstructor");break;default:r=c(function(){return e.apply(this,arguments)},"mockConstructor");break}return r}c(ne,"matchArity");function B(e){return Object.prototype.toString.apply(e).slice(8,-1)}c(B,"getObjectType");function ie(e){const t=B(e);return t==="Function"||t==="AsyncFunction"||t==="GeneratorFunction"?"function":Array.isArray(e)?"array":t==="Object"?"object":t==="Number"||t==="String"||t==="Boolean"||t==="Symbol"?"constant":t==="Map"||t==="WeakMap"||t==="Set"?"collection":t==="RegExp"?"regexp":e===void 0?"undefined":e===null?"null":null}c(ie,"getType");function oe(e,t){if(t==="arguments"||t==="caller"||t==="callee"||t==="name"||t==="length"){const r=B(e);return r==="Function"||r==="AsyncFunction"||r==="GeneratorFunction"}return t==="source"||t==="global"||t==="ignoreCase"||t==="multiline"?B(e)==="RegExp":!1}c(oe,"isReadonlyProp");class W{constructor(t){L(this,"_environmentGlobal",void 0),L(this,"_mockState",void 0),L(this,"_mockConfigRegistry",void 0),L(this,"_spyState",void 0),L(this,"_invocationCallCounter",void 0),this._environmentGlobal=t,this._mockState=new WeakMap,this._mockConfigRegistry=new WeakMap,this._spyState=new Set,this._invocationCallCounter=1}_getSlots(t){if(!t)return[];const r=new Set,n=this._environmentGlobal.Object.prototype,i=this._environmentGlobal.Function.prototype,a=this._environmentGlobal.RegExp.prototype,u=Object.prototype,o=Function.prototype,s=RegExp.prototype;for(;t!=null&&t!==n&&t!==i&&t!==a&&t!==u&&t!==o&&t!==s;){const f=Object.getOwnPropertyNames(t);for(let l=0;l<f.length;l++){const _=f[l];if(!oe(t,_)){const y=Object.getOwnPropertyDescriptor(t,_);(y!==void 0&&!y.get||t.__esModule)&&r.add(_)}}t=Object.getPrototypeOf(t)}return Array.from(r)}_ensureMockConfig(t){let r=this._mockConfigRegistry.get(t);return r||(r=this._defaultMockConfig(),this._mockConfigRegistry.set(t,r)),r}_ensureMockState(t){let r=this._mockState.get(t);return r||(r=this._defaultMockState(),this._mockState.set(t,r)),r.calls.length>0&&(r.lastCall=r.calls[r.calls.length-1]),r}_defaultMockConfig(){return{mockImpl:void 0,mockName:"jest.fn()",specificMockImpls:[],specificReturnValues:[]}}_defaultMockState(){return{calls:[],instances:[],invocationCallOrder:[],results:[]}}_makeComponent(t,r){if(t.type==="object")return new this._environmentGlobal.Object;if(t.type==="array")return new this._environmentGlobal.Array;if(t.type==="regexp")return new this._environmentGlobal.RegExp("");if(t.type==="constant"||t.type==="collection"||t.type==="null"||t.type==="undefined")return t.value;if(t.type==="function"){const n=t.members&&t.members.prototype&&t.members.prototype.members||{},i=this._getSlots(n),a=this,u=ne(function(...s){const f=a._ensureMockState(o),l=a._ensureMockConfig(o);f.instances.push(this),f.calls.push(s);const _={type:"incomplete",value:void 0};f.results.push(_),f.invocationCallOrder.push(a._invocationCallCounter++);let y,p,d=!1;try{y=(()=>{if(this instanceof o){i.forEach(R=>{if(n[R].type==="function"){const O=this[R];this[R]=a.generateFromMetadata(n[R]),this[R]._protoImpl=O}});const h=l.specificMockImpls.length?l.specificMockImpls.shift():l.mockImpl;return h&&h.apply(this,arguments)}let E=l.specificMockImpls.shift();if(E===void 0&&(E=l.mockImpl),E)return E.apply(this,arguments);if(o._protoImpl)return o._protoImpl.apply(this,arguments)})()}catch(E){throw p=E,d=!0,E}finally{_.type=d?"throw":"return",_.value=d?p:y}return y},t.length||0),o=this._createMockFunction(t,u);return o._isMockFunction=!0,o.getMockImplementation=()=>this._ensureMockConfig(o).mockImpl,typeof r=="function"&&this._spyState.add(r),this._mockState.set(o,this._defaultMockState()),this._mockConfigRegistry.set(o,this._defaultMockConfig()),Object.defineProperty(o,"mock",{configurable:!1,enumerable:!0,get:()=>this._ensureMockState(o),set:s=>this._mockState.set(o,s)}),o.mockClear=()=>(this._mockState.delete(o),o),o.mockReset=()=>(o.mockClear(),this._mockConfigRegistry.delete(o),o),o.mockRestore=()=>(o.mockReset(),r?r():void 0),o.mockReturnValueOnce=s=>o.mockImplementationOnce(()=>s),o.mockResolvedValueOnce=s=>o.mockImplementationOnce(()=>Promise.resolve(s)),o.mockRejectedValueOnce=s=>o.mockImplementationOnce(()=>Promise.reject(s)),o.mockReturnValue=s=>o.mockImplementation(()=>s),o.mockResolvedValue=s=>o.mockImplementation(()=>Promise.resolve(s)),o.mockRejectedValue=s=>o.mockImplementation(()=>Promise.reject(s)),o.mockImplementationOnce=s=>(this._ensureMockConfig(o).specificMockImpls.push(s),o),o.mockImplementation=s=>{const f=this._ensureMockConfig(o);return f.mockImpl=s,o},o.mockReturnThis=()=>o.mockImplementation(function(){return this}),o.mockName=s=>{if(s){const f=this._ensureMockConfig(o);f.mockName=s}return o},o.getMockName=()=>this._ensureMockConfig(o).mockName||"jest.fn()",t.mockImpl&&o.mockImplementation(t.mockImpl),o}else{const n=t.type||"undefined type";throw new Error("Unrecognized type "+n)}}_createMockFunction(t,r){let n=t.name;if(!n)return r;const i="bound ";let a="";if(n&&n.startsWith(i))do n=n.substring(i.length),a=".bind(null)";while(n&&n.startsWith(i));if(n===j)return r;(re.has(n)||/^\d/.test(n))&&(n="$"+n),ut.test(n)&&(n=n.replace(ee,"$"));const u="return function "+n+"() {return "+j+".apply(this,arguments);}"+a;return new this._environmentGlobal.Function(j,u)(r)}_generateMock(t,r,n){const i=this._makeComponent(t);return t.refID!=null&&(n[t.refID]=i),this._getSlots(t.members).forEach(a=>{const u=t.members&&t.members[a]||{};u.ref!=null?r.push(function(o){return()=>i[a]=n[o]}(u.ref)):i[a]=this._generateMock(u,r,n)}),t.type!=="undefined"&&t.type!=="null"&&i.prototype&&typeof i.prototype=="object"&&(i.prototype.constructor=i),i}generateFromMetadata(t){const r=[],n={},i=this._generateMock(t,r,n);return r.forEach(a=>a()),i}getMetadata(t,r){const n=r||new Map,i=n.get(t);if(i!=null)return{ref:i};const a=ie(t);if(!a)return null;const u={type:a};if(a==="constant"||a==="collection"||a==="undefined"||a==="null")return u.value=t,u;a==="function"&&(u.name=t.name,t._isMockFunction===!0&&(u.mockImpl=t.getMockImplementation())),u.refID=n.size,n.set(t,u.refID);let o=null;return a!=="array"&&this._getSlots(t).forEach(s=>{if(a==="function"&&t._isMockFunction===!0&&s.match(/^mock/))return;const f=this.getMetadata(t[s],n);f&&(o||(o={}),o[s]=f)}),o&&(u.members=o),u}isMockFunction(t){return!!t&&t._isMockFunction===!0}fn(t){const r=t?t.length:0,n=this._makeComponent({length:r,type:"function"});return t&&n.mockImplementation(t),n}spyOn(t,r,n){if(n)return this._spyOnProperty(t,r,n);if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");const i=t[r];if(!this.isMockFunction(i)){if(typeof i!="function")throw new Error("Cannot spy the "+r+" property because it is not a function; "+this._typeOf(i)+" given instead");const a=Object.prototype.hasOwnProperty.call(t,r);let u=Object.getOwnPropertyDescriptor(t,r),o=Object.getPrototypeOf(t);for(;!u&&o!==null;)u=Object.getOwnPropertyDescriptor(o,r),o=Object.getPrototypeOf(o);let s;if(u&&u.get){const f=u.get;s=this._makeComponent({type:"function"},()=>{u.get=f,Object.defineProperty(t,r,u)}),u.get=()=>s,Object.defineProperty(t,r,u)}else s=this._makeComponent({type:"function"},()=>{a?t[r]=i:delete t[r]}),t[r]=s;s.mockImplementation(function(){return i.apply(this,arguments)})}return t[r]}_spyOnProperty(t,r,n="get"){if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");if(!t)throw new Error("spyOn could not find an object to spy upon for "+r);if(!r)throw new Error("No property name supplied");let i=Object.getOwnPropertyDescriptor(t,r),a=Object.getPrototypeOf(t);for(;!i&&a!==null;)i=Object.getOwnPropertyDescriptor(a,r),a=Object.getPrototypeOf(a);if(!i)throw new Error(r+" property does not exist");if(!i.configurable)throw new Error(r+" is not declared configurable");if(!i[n])throw new Error("Property "+r+" does not have access type "+n);const u=i[n];if(!this.isMockFunction(u)){if(typeof u!="function")throw new Error("Cannot spy the "+r+" property because it is not a function; "+this._typeOf(u)+" given instead");i[n]=this._makeComponent({type:"function"},()=>{i[n]=u,Object.defineProperty(t,r,i)}),i[n].mockImplementation(function(){return u.apply(this,arguments)})}return Object.defineProperty(t,r,i),i[n]}clearAllMocks(){this._mockState=new WeakMap}resetAllMocks(){this._mockConfigRegistry=new WeakMap,this._mockState=new WeakMap}restoreAllMocks(){this._spyState.forEach(t=>t()),this._spyState=new Set}_typeOf(t){return t==null?""+t:typeof t}mocked(t,r=!1){return t}}c(W,"ModuleMocker");var lt=D.ModuleMocker=W;const M=new W(ht),ae=M.fn.bind(M);D.fn=ae;const se=M.spyOn.bind(M);D.spyOn=se;const ue=M.mocked.bind(M);D.mocked=ue;function le(e,t){return _e(e)||de(e,t)||fe(e,t)||ce()}c(le,"_slicedToArray");function ce(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}c(ce,"_nonIterableRest");function fe(e,t){if(!!e){if(typeof e=="string")return rt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return rt(e,t)}}c(fe,"_unsupportedIterableToArray");function rt(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}c(rt,"_arrayLikeToArray");function de(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,a=!1,u,o;try{for(r=r.call(e);!(i=(u=r.next()).done)&&(n.push(u.value),!(t&&n.length===t));i=!0);}catch(s){a=!0,o=s}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw o}}return n}}c(de,"_iterableToArrayLimit");function _e(e){if(Array.isArray(e))return e}c(_e,"_arrayWithHoles");var nt=new lt(global),Ee=nt.fn.bind(nt),pe=te({action:Ee},{retain:!0}),Se=pe.action,ct=it.getChannel(),V=[];ct.on(Ot,function(){return V.forEach(function(e){var t;return e==null||(t=e.mockClear)===null||t===void 0?void 0:t.call(e)})});ct.on(mt,function(e){var t=e.newPhase;t==="loading"&&V.forEach(function(r){var n;return r==null||(n=r.mockClear)===null||n===void 0?void 0:n.call(r)})});var ge=c(function(t){var r=t.id,n=t.initialArgs;return Object.entries(n).reduce(function(i,a){var u=le(a,2),o=u[0],s=u[1];return typeof s=="function"&&s.name==="actionHandler"?(Object.defineProperty(s,"name",{value:o,writable:!1}),Object.defineProperty(s,"__storyId__",{value:r,writable:!1}),i[o]=Se(s),V.push(i[o]),i):(i[o]=s,i)},{})},"addActionsFromArgTypes"),Oe=[ge];export{Oe as argsEnhancers};
//# sourceMappingURL=preview.0306fc0f.js.map
