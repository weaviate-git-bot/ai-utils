(()=>{"use strict";var e={341:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))},r=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=e[n]&&function(t){return new Promise((function(o,r){!function(e,t,n,o){Promise.resolve(o).then((function(t){e({value:t,done:n})}),t)}(o,r,(t=e[n](t)).done,t.value)}))}}};Object.defineProperty(t,"__esModule",{value:!0}),t.textToAItext=void 0;const i=n(532);t.textToAItext=function({apiUrl:e="https://api.openai.com/v1/completions",apiKey:t,user:n,model:c=(e.includes("chat")?"gpt-3.5-turbo":"text-davinci-003"),prompt:s,maxTokens:a=128,stream:l=!1}){return o(this,void 0,void 0,(function*(){if(e.includes("api.openai.com")){const u={"Content-Type":"application/json",Authorization:`Bearer ${null!=t?t:""}`};let d;if(d=e.includes("chat")?yield fetch(e,{headers:u,method:"POST",body:JSON.stringify({user:n,model:c,messages:s,max_tokens:a,stream:l})}):yield fetch(e,{headers:u,method:"POST",body:JSON.stringify({user:n,model:c,prompt:s,max_tokens:a,stream:l})}),l){let t=0;const n=new TextEncoder,c=new TextDecoder;return new ReadableStream({start(s){var a,l;return o(this,void 0,void 0,(function*(){const o=(0,i.createParser)((function(o){var r;if("event"===o.type){const i=o.data;if("[DONE]"===i)return void s.close();try{const o=JSON.parse(i);let c="";if(c=e.includes("chat")?(null===(r=o.choices[0].delta)||void 0===r?void 0:r.content)||"":o.choices[0].text||"",t<2&&(c.match(/\n/)||[]).length)return;const a=n.encode(c);s.enqueue(a),t++}catch(e){s.error(e)}}}));try{for(var u,f=r(d.body);!(u=yield f.next()).done;){const e=u.value;o.feed(c.decode(e))}}catch(e){a={error:e}}finally{try{u&&!u.done&&(l=f.return)&&(yield l.call(f))}finally{if(a)throw a.error}}}))}})}{const e=yield d.json();if(!e.choices||0===e.choices.length)return;return e.choices[0].text}}}))}},532:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=[239,187,191];t.createParser=function(e){let t,o,r,i,c,s,a;return l(),{feed:function(e){o=o?o+e:e,t&&function(e){return n.every(((t,n)=>e.charCodeAt(n)===t))}(o)&&(o=o.slice(n.length)),t=!1;const c=o.length;let s=0,a=!1;for(;s<c;){a&&("\n"===o[s]&&++s,a=!1);let e,t=-1,n=i;for(let i=r;t<0&&i<c;++i)e=o[i],":"===e&&n<0?n=i-s:"\r"===e?(a=!0,t=i-s):"\n"===e&&(t=i-s);if(t<0){r=c-s,i=n;break}r=0,i=-1,u(o,s,n,t),s+=t+1}s===c?o="":s>0&&(o=o.slice(s))},reset:l};function l(){t=!0,o="",r=0,i=-1,c=void 0,s=void 0,a=""}function u(t,n,o,r){if(0===r)return a.length>0&&(e({type:"event",id:c,event:s||void 0,data:a.slice(0,-1)}),a="",c=void 0),void(s=void 0);const i=o<0,l=t.slice(n,n+(i?r:o));let u=0;u=i?r:" "===t[n+o+1]?o+2:o+1;const d=n+u,f=r-u,v=t.slice(d,d+f).toString();if("data"===l)a+=v?"".concat(v,"\n"):"\n";else if("event"===l)s=v;else if("id"!==l||v.includes("\0")){if("retry"===l){const t=parseInt(v,10);Number.isNaN(t)||e({type:"reconnect-interval",value:t})}}else c=v}}}},t={},n=function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(341);module.exports=n})();