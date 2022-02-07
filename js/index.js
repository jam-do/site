import {} from './favicon.js';
import { CSS } from './css.js';
import { HTML } from './html.js';

let blob = new Blob([CSS], {
  type: 'text/css',
});
let url = URL.createObjectURL(blob);
let link = document.createElement('link');
link.href = url;
link.rel = 'stylesheet';
link.onload = () => {
  window.requestAnimationFrame(() => {
    document.body.removeAttribute('hidden');
  });
};
document.head.appendChild(link);

document.body.innerHTML = HTML;
window.requestAnimationFrame(() => {
  window.location.hash = window.location.hash;
});
