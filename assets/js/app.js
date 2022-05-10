function init() {
  let menuLinks = [...document.querySelectorAll('nav a')];
  let sections = [...document.querySelectorAll('section')];
  let margin = `-${Math.round(window.innerHeight / 3)}px`;
  console.log(margin);
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.setAttribute('active', '');
      let sId = entries[0].target.getAttribute('id');
      menuLinks.forEach((el) => {
        let aId = el.getAttribute('href').replace('#', '');
        if (sId === aId) {
          el.setAttribute('active', '');
        } else {
          el.removeAttribute('active');
        }
      });
    }
  }, {
    root: null,
    rootMargin: margin,
  });
  sections.forEach((section) => {
    observer.observe(section);
  });
}
window.onload = () => {
  init();
};

