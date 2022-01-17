!(function () {
  'use strict';
  (window.Each = (e, t) => {
    const n = document.getElementById(e),
      r = n.innerHTML,
      o = n.getAttribute('c:return-v'),
      c = n.getAttribute('c:return-i');
    let s = '';
    (n.innerHTML = ''),
      t.forEach((e, t) => {
        const n = r.replace(new RegExp(`{{${o}}}`, 'g'), e);
        t = n.replace(new RegExp(`{{${c}}}`, 'g'), t);
        s += t;
      }),
      (n.outerHTML = s);
  }),
    (window.WhenLoad = (e) => {
      'loading' === document.readyState ? document.addEventListener('DOMContentLoaded', e) : e();
    }),
    (window.Insert = (e, t) => {
      const n = document.getElementById(e);
      let r = n.innerHTML;
      Object.keys(t).forEach((e) => {
        r = r.replace(new RegExp(`{{${e}}}`, 'g'), t[e]);
      }),
        (n.innerHTML = r);
    }),
    (window.ComponentFetch = (e, t) => {
      const n = document.getElementById(e);
      e = n.getAttribute('src');
      e
        ? fetch(e)
            .then((e) => {
              t(n, e);
            })
            .catch((e) => console.error(e))
        : console.error('Fetch: No src attribute found');
    }),
    (window.ComponentBase = class {
      constructor(e, t, n) {
        customElements.define(
          e,
          class extends HTMLElement {
            constructor() {
              super(), n ? (this.innerHTML = t) : (this.outerHTML = t);
            }
          }
        );
      }
    }),
    (window.ComponentEach = class {
      constructor(e) {
        this.element = document.getElementById(e);
      }
      each(e) {
        const t = this['element'],
          r = t.innerHTML,
          o = t.getAttribute('c:return-v'),
          c = t.getAttribute('c:return-i');
        let s = '';
        (t.innerHTML = ''),
          e.forEach((e, t) => {
            const n = r.replace(new RegExp(`{{${o}}}`, 'g'), e);
            t = n.replace(new RegExp(`{{${c}}}`, 'g'), t);
            s += t;
          }),
          (t.outerHTML = s);
      }
    });
})();
//# sourceMappingURL=component-init.js.map
