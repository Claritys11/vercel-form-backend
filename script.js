document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    age: parseInt(form.age.value, 10),
    email: form.email.value.trim(),
    purpose: form.purpose.value.trim()
  };

  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      alert('Gagal kirim: ' + (body.error || res.statusText));
      return;
    }
    window.location.href = '/thanks.html';
  } catch (err) {
    alert('Terjadi kesalahan jaringan.');
  }
});
