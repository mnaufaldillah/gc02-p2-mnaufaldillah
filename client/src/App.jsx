import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import LoginAdmin from './pages/admin/LoginAdmin'
import HomeAdmin from './pages/admin/HomeAdmin';

function App() {
  // const [count, setCount] = useState(0)
  const [page, setPage] = useState('login');

  return (
    <div className='bg-body-secondary' style={{ height: '100vh' }}>
        { page === 'home' && <HomeAdmin /> }
        { page === 'login' && <LoginAdmin setPage={setPage} /> }
    </div>
  )
}

export default App
