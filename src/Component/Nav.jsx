
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  const [login,setlogin]=useState(false)
  const handlelogin=()=>{
    setlogin(false)
    navigate('/')
  }
  const handlelogout=()=>{
    setlogin(true)
    navigate('')
  }
  const navigate=useNavigate()
  return (
    <>
    <div className="navbar  bg-slate-300   ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className='text-2xl'><Link to={'/'}>Home</Link></li>
        <li><Link to={'/meal'}>Meal</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/meal'}>Meal</Link></li>
    </ul>
  </div>
  
  <div  className="navbar-end">
   {login?  <a className="btn" onClick={handlelogin}>Login</a>:
   <a className="btn" onClick={handlelogout}>Logout</a>
   }
  </div>
</div>
    </>
  )
}

export default Nav