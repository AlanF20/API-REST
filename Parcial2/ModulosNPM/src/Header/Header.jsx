import { Link } from 'react-router-dom'
export function Header() {
  return (
    <nav className='main__nav'>
      <ul>
        <Link to='/'>Generador de PDF</Link>
        <Link to='/Excel'>Generador de Excel</Link>
        <Link to='/Text'>Generador de Archivos de texto</Link>
      </ul>
    </nav>
  )
}