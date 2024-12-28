export default function AboutUs() {
    return (
      <>
        <section
          style={{
            padding: '40px',
            background: 'linear-gradient(135deg, #fce3f6 0%, #ffe5e7 100%)',
            color: '#5C0E62',
            textAlign: 'center',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            maxWidth: '900px',
            margin: '30px auto',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <h1
            style={{
              fontSize: '3rem',
              marginBottom: '20px',
              color: '#5C0E62',
            }}
          >
            About Us
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#333',
              marginBottom: '30px',
            }}
          >
            At <strong>Purrfect Adoption</strong>, we are passionate about connecting adorable cats
            with loving families. Our mission is to ensure every cat finds a safe, warm,
            and happy forever home. Join us in making a difference in the lives of our feline
            friends!
          </p>
        </section>
  
        <footer
          style={{
            marginTop: '30px',
            padding: '20px',
            background: 'linear-gradient(135deg, #FF6B6B, #FFB6B9)',
            color: 'white',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '900px',
            margin: '0 auto',
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
  