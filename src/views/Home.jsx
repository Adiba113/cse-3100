import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'linear-gradient(135deg, #FF6B6B, #FFB6B9)',
          color: 'white',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Welcome to Purrfect Adoption
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Connecting adorable cats with loving families. Join us in making a difference, one purr at a time.
        </p>
      </section>

      {/* Featured Cats Section */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#5C0E62' }}>Featured Cats</h2>
        <div className="row g-4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {cats.map((cat, i) => (
            <div
              key={i}
              className="cat-card"
              style={{
                width: '300px',
                border: '1px solid #ddd',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  padding: '15px',
                  background: 'linear-gradient(135deg, #ffe5e7, #fce3f6)',
                  color: '#5C0E62',
                }}
              >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{cat.name}</h3>
                <p style={{ margin: 0 }}>Age: {cat.age}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Copyright Section */}
      <footer
        style={{
          marginTop: '40px',
          padding: '20px',
          background: 'linear-gradient(135deg, #FF6B6B, #FFB6B9)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0, fontSize: '1rem' }}>
          &copy; {new Date().getFullYear()} <strong>Purrfect Adoption</strong>. All rights reserved.
        </p>
        <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
          Designed with ❤️ for cat lovers everywhere.
        </p>
      </footer>
    </>
  );
}
