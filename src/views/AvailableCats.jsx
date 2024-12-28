import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
  { name: 'Cleo', age: '3', breed: 'Peterbald' },
  { name: 'Bella', age: '1', breed: 'Persian' },
  { name: 'Oliver', age: '4', breed: 'Siamese' },
  { name: 'Daisy', age: '2', breed: 'Bengal' },
  { name: 'Charlie', age: '3', breed: 'Abyssinian' },
  { name: 'Lucy', age: '1', breed: 'Birman' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [breedFilter, setBreedFilter] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index]?.[0]?.url || '/images/placeholder.jpg',
        }));

        setCats(catsWithImages);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(
    (cat) =>
      (breedFilter === '' || cat.breed === breedFilter) &&
      (search === '' || cat.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section style={{ fontFamily: "'Poppins', sans-serif", padding: '30px' }}>
      <h2
        style={{
          color: '#FF6B6B',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
          marginBottom: '20px',
        }}
      >
        Available Cats
      </h2>
      <p style={{ color: '#444', fontSize: '1.2rem', marginBottom: '30px' }}>
        Meet our adorable cats looking for their forever home!
      </p>

      {/* Filters */}
      <div
        style={{
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '12px',
            width: '300px',
            borderRadius: '8px',
            border: '2px solid #FF6B6B',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            outline: 'none',
          }}
        />
        <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '2px solid #FF6B6B',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            outline: 'none',
          }}
        >
          <option value="">Select Breed</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>
      </div>

 
      {loading ? (
        <div style={{ textAlign: 'center', color: '#FF6B6B', fontSize: '1.5rem' }}>
          Loading cats...
        </div>
      ) : (
        <div
          className="mt-2 row g-4 cats-container"
          id="cats-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {filteredCats.map((cat, i) => (
            <div
              key={i}
              className="cat-card"
              style={{
                background: 'linear-gradient(135deg, #FF6B6B, #FFB6B9)',
                borderRadius: '15px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                overflow: 'hidden',
                maxWidth: '280px',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                color: 'white',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ fontSize: '1.5rem', margin: '0 0 10px' }}>{cat.name}</h3>
                <p style={{ margin: '5px 0' }}>Age: {cat.age}</p>
                <p style={{ margin: '5px 0' }}>Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      )}

  
      <footer
        style={{
          marginTop: '30px',
          padding: '20px',
          background: 'linear-gradient(135deg, #FF6B6B, #FFB6B9)',
          color: 'white',
          textAlign: 'center',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <p style={{ margin: 0, fontSize: '1rem' }}>
          &copy; {new Date().getFullYear()} <strong>Purrfect Adoption</strong>. All rights reserved.
        </p>
        <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
          Designed with ❤️ for cat lovers everywhere.
        </p>
      </footer>
    </section>
  );
}
