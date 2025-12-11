// scripts.js (small behaviors)
document.getElementById('currentYear')?.appendChild(document.createTextNode(new Date().getFullYear()));

// Smooth scroll for internal anchors (optional)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // collapse mobile nav if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if(navbarCollapse && navbarCollapse.classList.contains('show')){
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    }
  });
});
