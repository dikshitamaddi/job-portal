document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  });
  const result = await response.json();
  alert(result.message);
});
