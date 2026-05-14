import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎯 Scrum Center</h1>
      <p>Bem-vindo ao sistema de gerenciamento de projetos Scrum</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/login" style={{
          padding: '0.75rem 1.5rem',
          background: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          Fazer Login
        </Link>
      </div>
    </div>
  )
}
