import { section } from './com/section.js';
import { NAV } from './com/nav.js';

export const HTML = /*html*/ `
${section({
  id: 'Jam-Do',
  content: /*html*/ `<div class="txt-block">
    <div>We are the group of experienced web-developers obsessed of idea to change modern development landscape.</div>
    <div>We believe, that simple things should stay simple so we decided to fight for it.</div>
    <div>Our goal is to create the new creative aproaches acessible for the wide range of people, not for the professional developers only.</div>
    <div>We believe that web-project creation could be simple as playing with a toy blocks.</div>
  </div>`,
})}
${section({
  id: 'Technologies',
  content: /*html*/ `<div class="txt-block">
  <div>JAM: JavaScript + APIs + Markup</div>
  <div>Symbiote.js: build your interactive components</div>
  <div>Re4ma: extend your HTML</div>
  <div>HALC: HTML as Low-Code</div>
</div>`,
})}
${section({
  id: 'Articles',
  content: /*html*/ ``,
})}
${section({
  id: 'Partners',
  content: /*html*/ ``,
})}
${section({
  id: 'Registry',
  content: /*html*/ ``,
})}
${section({
  id: 'Community',
  content: /*html*/ ``,
})}
${NAV}
`;
