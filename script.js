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

// Gallery Section
document.querySelectorAll('.gallery-filter').forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Update active button
    document.querySelectorAll('.gallery-filter').forEach(function (b) {
      b.classList.remove('active');
    });
    this.classList.add('active');
 
    var filter = this.getAttribute('data-filter');
 
    document.querySelectorAll('.gallery-item').forEach(function (item) {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});


// Contact Us

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
 
  var form = this;
  var successMsg = document.getElementById('cfSuccess');
  var submitBtn = form.querySelector('.cf-submit-btn');
 
  // Collect form data
  var formData = {
    name:    document.getElementById('cf-name').value,
    phone:   document.getElementById('cf-phone').value,
    email:   document.getElementById('cf-email').value,
    event:   document.getElementById('cf-event').value,
    date:    document.getElementById('cf-date').value,
    message: document.getElementById('cf-message').value
  };
 
  // ---- OPTION 1: Formspree ----
  // Uncomment the block below and replace YOUR_FORMSPREE_ENDPOINT
 
  /*
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
 
  fetch('YOUR_FORMSPREE_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(function (res) {
    if (res.ok) {
      successMsg.style.display = 'block';
      form.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(function () {
    alert('Unable to send. Please try again.');
  })
  .finally(function () {
    submitBtn.textContent = 'Send My Enquiry';
    submitBtn.disabled = false;
  });
  */
 
  // ---- Default (until email is connected): show success message ----
  successMsg.style.display = 'block';
  form.reset();
  setTimeout(function () {
    successMsg.style.display = 'none';
  }, 5000);
});

// Footer Section JS
document.getElementById('footerYear').textContent = new Date().getFullYear();

// FAQ Section JS

 
document.querySelectorAll('.faq-question').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = this.closest('.faq-item');
    var isOpen = item.classList.contains('open');
 
    // Close all open items
    document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
 
    // If it was closed, open it
    if (!isOpen) {
      item.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});