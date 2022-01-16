!(function (e) {
  'use strict';
  function t() {
    return '';
  }
  class s extends HTMLElement {
    constructor() {
      super();
      const e = { name: this.getprop('c:name'), props: this.getprop('c:props').split(' ') || [], html: this.innerHTML };
      try {
        customElements.define(
          e.name,
          class extends HTMLElement {
            constructor() {
              super();
              let t = e['html'];
              e.props.forEach((e) => {
                t = t.replace(new RegExp(`{{${e}}}`, 'g'), this.getAttribute('props:' + e));
              }),
                (this.outerHTML = t);
            }
          }
        );
      } catch (e) {
        console.error(e);
      }
      this.outerHTML = '';
    }
    getprop(e) {
      return this.getAttribute(e);
    }
  }
  new (class {
    constructor(e, t, s) {
      customElements.define(
        e,
        class extends HTMLElement {
          constructor() {
            super(), s ? (this.innerHTML = t) : (this.outerHTML = t);
          }
        }
      );
    }
  })('c-each', '', !0),
    customElements.define('c-template', s),
    (e.default = { HTMLTemplate: s, HTMLMap: t }),
    Object.defineProperty(e, '__esModule', { value: !0 });
})((this['html-component'] = this['html-component'] || {}));
//# sourceMappingURL=component.js.map
