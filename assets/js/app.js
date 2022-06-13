const FORM_HANDLER_URL = 'https://script.google.com/macros/s/AKfycbycXMpObbm9sOn-kO21x6cqFtjEO1-kR0yndp9bgOWE356FIDndhFeinCxBcJvjQz0Ulg/exec';

function init() {
  let menuLinks = [...document.querySelectorAll('nav a')];
  let sections = [...document.querySelectorAll('section')];
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.setAttribute('active', '');
      let sId = entries[0].target.getAttribute('id');
      menuLinks.forEach((el) => {
        let hash = el.getAttribute('href');
        let aId = hash.replace('#', '');
        if (sId === aId) {
          el.setAttribute('active', '');
          window.history.pushState(null, '', hash);
        } else {
          el.removeAttribute('active');
        }
      });
    }
  }, {
    threshold: 0.4,
  });
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.hash = '#closed';
    let data = new FormData(form);
    window.fetch(form.action, {
      method: 'POST',
      body: data,
    }).then(async (resp) => {
      let answer = await resp.json();
      if (answer?.result === 'success') {
        window.location.hash = '#invited';
      }
    }).catch((err) => {
      window.location.hash = '#error';
      console.log(err);
    });
  });
};

window.onload = () => {
  init();
};

