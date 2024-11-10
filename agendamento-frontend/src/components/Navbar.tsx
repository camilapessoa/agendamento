// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '10px', background: '#0088b5;', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Reservas</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link href="/" passHref>
          <button style={{ padding: '8px 12px', background: 'white', color: '#0070f3', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Agendar reservas
          </button>
        </Link>
        <Link href="/appointments" passHref>
          <button style={{ padding: '8px 12px', background: 'white', color: '#0070f3', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Listar Reservas
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
