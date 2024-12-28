import { Link } from 'react-router-dom';

export default function BaseLayout({ children }) {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 30px',
          background: 'linear-gradient(90deg, #6A0572, #FF6B6B)',
          color: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold' }}>🐾 Purrfect Adoption</h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/available-cats">
            <button
              style={{
                padding: '12px 25px',
                background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
              }}
            >
              Available Cats
            </button>
          </Link>
          <Link to="/donate">
            <button
              style={{
                padding: '12px 25px',
                background: 'linear-gradient(45deg, #6B8E23, #8FCB44)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
              }}
            >
              Donate
            </button>
          </Link>
          <Link to="/about">
            <button
              style={{
                padding: '12px 25px',
                background: 'linear-gradient(45deg, #3498DB, #6CCFF6)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
              }}
            >
              About Us
            </button>
          </Link>
          <Link to="/contact">
            <button
              style={{
                padding: '12px 25px',
                background: 'linear-gradient(45deg, #E67E22, #F39C12)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
              }}
            >
              Contact
            </button>
          </Link>
        </div>
      </header>
      <main
        style={{
          padding: '20px',
          background: '#F7F7F7',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginTop: '20px',
        }}
      >
        {children}
      </main>
    </div>
  );
}
