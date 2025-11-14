// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// basic contact form handler (demo only — replace with real backend or email service)
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks! Your message was received (demo). Replace this with real submission logic.');
  this.reset();
});
