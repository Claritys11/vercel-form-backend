const { sql } = require('@vercel/postgres');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { name, age, email, purpose } = req.body || {};
  if (!name || !email || !purpose || typeof age !== 'number') {
    return res.status(400).json({ error: 'Field tidak lengkap' });
  }
  try {
    // Create table if not exists
    await sql`CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      age INT,
      email TEXT NOT NULL,
      purpose TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`;

    await sql`INSERT INTO submissions (name, age, email, purpose) VALUES (${name}, ${age}, ${email}, ${purpose})`;

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};
