// Add shadow on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const navCollapse = document.getElementById('navMenu');
    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});

// Hero form submit
document.getElementById('heroForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! We will contact you shortly.');
  this.reset();
});
