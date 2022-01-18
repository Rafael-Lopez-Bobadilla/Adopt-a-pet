import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import PersonIcon from '@mui/icons-material/Person'
import './Navbar.css'
const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false)
  const [user, setUser] = useState(null)
  const iconSize = { fontSize: '33px' }

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const res = await fetch('http://localhost:5000/api/v1/users/authenticate')
    const data = await res.json()
    if (data.user) {
      setUser(data.user)
    }
  }
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>Adopt a Pet</div>
        <div className={`navbar-items ${showOptions && 'navbar-visible'}`}>
          {user ? <>
            <div className='navbar-userName navbar-item'>
              <div className='icon'><PersonIcon style={{ fontSize: '20px' }} /></div>
              {user.name}
            </div>
            <div className='navbar-item pointer'>Home</div>
            <div className='navbar-item pointer'>Favorites</div>
            <div className='navbar-item pointer'>Sign out</div>
          </> : <>
            <div className='navbar-item pointer'>Home</div>
            <div className='navbar-item pointer'>Favorites</div>
            <div className='navbar-item pointer'>Sign Up</div>
            <div className='navbar-item pointer'>Log In</div>
          </>}
        </div>
        <div className='navbar-toggle' onClick={() => setShowOptions(() => !showOptions)}>
          {!showOptions ? <MenuIcon style={iconSize} /> : <CloseIcon style={iconSize} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar