"use client"
import Link from 'next/link'
import HeaderStyle from './Header.module.css'

const Header = () => {
  return (
    <>
      <nav className='bg-blue-600 h-16 py-2 px-3 flex items-center justify-between'>
        <div className=''>
          <Link href="/"><h1 className={HeaderStyle.brandName}>Task Manager</h1></Link>
        </div>
        <div>
          <ul className='flex items-center justify-center'>
            <li className={HeaderStyle.navli}><Link href="/">Home</Link></li>
            <li className={HeaderStyle.navli}><Link href="/about">About</Link></li>
            <li className={HeaderStyle.navli}><Link href="/addtask">Add Task</Link></li>
            <li className={HeaderStyle.navli}><Link href="/showtask">Show Task</Link></li>
          </ul>
        </div>
        <div>
          <ul className='flex items-center justify-center'>
            <li className={HeaderStyle.navli}><Link href="/login">Login</Link></li>
            <li className={HeaderStyle.navli}><Link href="/signup">signup</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;