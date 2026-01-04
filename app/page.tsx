export default function HomePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#4f46e5', fontSize: '2rem', marginBottom: '1rem' }}>
        Spinor Innovations - New Website!
      </h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        This is the new modern React-based website. If you can see this, the Next.js app is working!
      </p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
        <h2 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Features:</h2>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
          <li>Modern React components</li>
          <li>TypeScript support</li>
          <li>Tailwind CSS styling</li>
          <li>Component-based architecture</li>
        </ul>
      </div>
    </div>
  );
}
