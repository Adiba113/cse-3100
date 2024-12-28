export default function ContactUs() {
    return (
      <>
        <section
          style={{
            fontFamily: "'Poppins', sans-serif",
            padding: '30px',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              color: '#FF6B6B',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              marginBottom: '30px',
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              color: '#444',
              fontSize: '1.2rem',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            We'd love to hear from you! Please fill out the form below, and we will
            get back to you shortly.
          </p>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              background: 'linear-gradient(135deg, #FF6B6B, #FFB6B9)',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              color: 'white',
            }}
          >
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.1rem',
                marginBottom: '10px',
              }}
            >
              Name:
              <input
                type="text"
                name="name"
                required
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  marginTop: '5px',
                  outline: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </label>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.1rem',
                marginBottom: '10px',
              }}
            >
              Email:
              <input
                type="email"
                name="email"
                required
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  marginTop: '5px',
                  outline: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </label>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.1rem',
                marginBottom: '10px',
              }}
            >
              Message:
              <textarea
                name="message"
                required
                rows="4"
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  marginTop: '5px',
                  outline: 'none',
                  resize: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              ></textarea>
            </label>
            <button
              type="submit"
              style={{
                padding: '12px 20px',
                backgroundColor: '#FF6B6B',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                textShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#FFB6B9';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#FF6B6B';
              }}
            >
              Submit
            </button>
          </form>
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
            maxWidth: '600px',
            margin: '30px auto', 
          }}
        >
          <p style={{ margin: 0, fontSize: '1rem' }}>
            &copy; {new Date().getFullYear()} <strong>Purrfect Adoption</strong>. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
            Designed with ❤️ for animal lovers everywhere.
          </p>
        </footer>
      </>
    );
  }
  