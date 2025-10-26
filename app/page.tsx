export default function Home() {
  return (
    <main style={{
      background: '#181818',
      color: '#fff',
      fontFamily: '"Segoe UI", Arial, sans-serif',
      minHeight: '100vh',
      padding: 0,
      margin: 0
    }}>
      {/* Header */}
      <header style={{
        width: '100%',
        padding: '2rem 0 1rem 0',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontWeight: 800,
          fontSize: '2.8rem',
          margin: 0,
          letterSpacing: '0.04em',
          color: '#00ffd3'
        }}>
          AxleX
        </h1>
        <h2 style={{
          fontWeight: 400,
          fontSize: '1.2rem',
          color: '#bbb',
          marginTop: '.2rem'
        }}>
          3D Printing | Mech Design | Cars
        </h2>
      </header>

      {/* Hero */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '34vh',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>
          Made in Sri Lanka,
        </h3>
        <p style={{
          maxWidth: 390,
          color: '#bff',
          lineHeight: 1.35,
          fontSize: '1.13rem'
        }}>
          Precision 3D printed automotive parts, vehicle restoration, mechanical design, and engineering collaboration for enthusiasts & professionals.
        </p>
        <a 
          href="mailto:axlex@yourdomain.com"
          style={{
            display: 'inline-block',
            marginTop: '2.3rem',
            padding: '0.75rem 2.4rem',
            borderRadius: '2em',
            background: '#00ffd3',
            color: '#1b1b1b',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 16px #00ffd355'
          }}
        >
          Contact / Collaborate
        </a>
      </section>

      {/* About / Mission */}
      <section style={{
        margin: '3.5rem 0',
        textAlign: 'center'
      }}>
        <div style={{fontSize: '1.13rem', color: '#aaa', margin: '0 auto', maxWidth: 560, lineHeight: 1.7}}>
          AxleX is dedicated to modernizing vehicle restoration and automotive part fabrication in Sri Lanka.
          From advanced CAD modeling to precise 3D printed mechanical solutions, we help vintage car lovers and custom car builders bring ideas to life—whether it’s a one-off 3D printed bracket or a complete body kit.
        </div>
      </section>

      {/* Capabilities / Highlights */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.3rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <FeatureCard label="3D Printing" details="PLA, ABS, ASA, PETG | BambuLab A1 Mini | Up to 256x256x256mm" />
          <FeatureCard label="Vehicle Restoration" details="4x4 sheet-metal, tube parts, vintage & custom kits" />
          <FeatureCard label="Mechanical Design" details="CAD modeling, reverse engineering, prototyping" />
        </div>
      </section>

      {/* Social / Links */}
      <footer style={{
        textAlign: 'center',
        color: '#44ffcc',
        padding: '2rem 0',
        fontSize: '1.2rem',
        background: 'rgba(0,20,20,0.13)',
        borderTop: '1px solid #222'
      }}>
        <div style={{
          marginBottom: '0.9rem'
        }}>
          Connect:
          <a href="https://www.instagram.com/axlex.tech" style={{color:'#00ffd3', marginLeft:12, textDecoration:'none'}}>Instagram</a>
          <span style={{margin:'0 6px'}}>|</span>
          <a href="https://github.com/yourgithubusername" style={{color:'#00ffd3', textDecoration:'none'}}>GitHub</a>
        </div>
        <div style={{fontSize:'0.95rem', color:'#46faa4b0'}}>
          &copy; {new Date().getFullYear()} AxleX - All rights reserved.
        </div>
      </footer>
    </main>
  )
}

// Reusable simple card
type FeatureCardProps = { label: string; details: string };
function FeatureCard({label, details}: FeatureCardProps) {
  return (
    <div style={{
      background: '#232323',
      borderRadius: '1.3em',
      boxShadow: '0 1px 14px #00ffd322',
      padding: '1.5rem 2rem',
      minWidth: 210,
      maxWidth: 270,
      color: '#fff',
      textAlign: 'center'
    }}>
      <div style={{
        fontWeight: 700,
        fontSize: '1.1rem',
        marginBottom: '.6rem',
        letterSpacing: '.01em',
        color: '#00ffd3'
      }}>
        {label}
      </div>
      <div style={{fontWeight:400, color: '#b3f8e0', fontSize:'.98rem'}}>
        {details}
      </div>
    </div>
  )
}
