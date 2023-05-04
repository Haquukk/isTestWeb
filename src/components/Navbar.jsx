import react, { useState } from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'
import { HiBars2 } from 'react-icons/hi2'
import { IoCloseOutline } from 'react-icons/io5'


const Navbar = () => {
  const [active, setActive] = useState()

  const [nav, setNav] = useState(false)


  const handleNav = () => {
    setNav(!nav)
  }

  const [sticky, setSticky] = useState(false)
  const scrollSticky = () => {
    if (window, scrollY > 20) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  window.addEventListener('scroll', scrollSticky)

  return (
    <nav className={
      sticky
        ? 'w-full flex items-center h-12 px-7 mx-auto fixed z-20 bg-gradient-to-r from-[#01729E] '
        : 'w-full flex items-center h-10 px-7 mx-auto fixed z-20 bg-gradient-to-r from-transparent from-30% via-[#01729E] to-transparent to-70% '}>
      <div className='max-w-[1284px] w-full flex items-center justify-between mx-auto'>
        <div className='animate-ping font-bold'>
          <Link
            to='/'
            onClick={() => {
              setActive("")
              window.scrollTo(0, 0)
            }}
          >
            <p>DAMNFOLIO.</p>
          </Link>
        </div>
        <ul className='hidden sm:flex gap-10 text-sm'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active === Link.title
                ? "text-primary"
                : "text-white"
                } hover:text-secondary text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title} </a>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='z-20'>
          {!nav ? <HiBars2 size={30} /> : <IoCloseOutline size={30} />}
        </div>
        <div className={`${!nav ? 'hidden' : 'flex'} absolute right-5 top-12 sm:w-[20%] w-[40%] bg-gradient-to-b from-[#01729E] p-10 h-screen  `}>
          <ul className='text-sm flex flex-col gap-10 mx-auto '>
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${active === Link.title
                  ? "text-primary"
                  : "text-white"
                  } hover:text-secondary text-[16px] font-medium cursor-pointer`}
                onClick={() => setActive(Link.title)}
              >
                <a href={`#${Link.id}`}>{Link.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
