!function(){"use strict";window.Each=(e,t)=>{const n=document.getElementById(e),o=n.innerHTML,r=n.getAttribute("c:return-v"),c=n.getAttribute("c:return-i");let s="";n.innerHTML="",t.forEach((e,t)=>{const n=o.replace(new RegExp(`{{${r}}}`,"g"),e);t=n.replace(new RegExp(`{{${c}}}`,"g"),t);s+=t}),n.outerHTML=s},window.WhenLoad=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()},window.Insert=(e,t)=>{const n=document.getElementById(e);let o=n.innerHTML;Object.keys(t).forEach(e=>{o=o.replace(new RegExp(`{{${e}}}`,"g"),t[e])}),n.innerHTML=o},window.ComponentBase=class{constructor(e,t,n){customElements.define(e,class extends HTMLElement{constructor(){super(),n?this.innerHTML=t:this.outerHTML=t}})}}}();
//# sourceMappingURL=component-init.js.map
