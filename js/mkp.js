import {NAV} from './com/nav.js';

let html = /*html*/ `
<section id="Jam-Do">
  <div class="txt-block">
    <div>We are the group of experienced web-developers obsessed of idea to change modern development landscape</div>
    <div>We believe that simple things should stay simple so we decided to fight for it</div>
    <div>Our goal is to create the new creative aproaches acessible for the wide range of people, not for the professional front or back end developers only</div>
    <div>We believe that web-project creation could be simple as playing with a toy blocks</div>
  </div>
</section>

<section id="Technologies">

</section>

<section id="Partners">

</section>

<section id="Registry">

</section>

<section id="Community">

</section>

${NAV}
`;
document.body.innerHTML = html;
window.requestAnimationFrame(() => {
  window.location.hash = window.location.hash;
});
export {}