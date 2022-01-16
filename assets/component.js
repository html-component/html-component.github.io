!(function () {
  'use strict';
  class t extends HTMLElement {
    constructor() {
      super();
      const t = { name: this.getprop('c:name'), props: this.getprop('c:props').split(' ') || [], html: this.innerHTML };
      try {
        customElements.define(
          t.name,
          class extends HTMLElement {
            constructor() {
              super();
              let e = t['html'];
              t.props.forEach((t) => {
                e = e.replace(new RegExp(`{{${t}}}`, 'g'), this.getAttribute('props:' + t));
              }),
                (this.outerHTML = e);
            }
          }
        );
      } catch (t) {
        console.error(t);
      }
      this.outerHTML = '';
    }
    getprop(t) {
      return this.getAttribute(t);
    }
  }
  new (class {
    constructor(t, e, s) {
      customElements.define(
        t,
        class extends HTMLElement {
          constructor() {
            super(), s ? (this.innerHTML = e) : (this.outerHTML = e);
          }
        }
      );
    }
  })('c-each', '', !0),
    customElements.define('c-template', t);
})();
//# sourceMappingURL=component.js.map
