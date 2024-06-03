import Link from 'next/link'
import { useState } from 'react'
import style from '../NavBar/NavBar.module.css'

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(() => !menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(() => false)
  }

  return (
    <div>
      <div className={style.menu} onClick={toggleMenu}>
        {menuOpen ?
          <svg className={style.svgMenuClose} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C10.3432 2 9 3.34315 9 5V13C9 14.6569 10.3432 16 12 16H20C21.6569 16 23 14.6569 23 13V5C23 3.34315 21.6569 2 20 2H12Z" fill="#FFFEED" />
            <path d="M3 22C1.34315 22 0 23.3431 0 25V33C0 34.6569 1.34315 36 3 36H11C12.6569 36 14 34.6569 14 33V25C14 23.3431 12.6569 22 11 22H3Z" fill="#FFFEED" />
            <path fillRule="evenodd" clipRule="evenodd" d="M29 2C27.3431 2 26 3.34315 26 5V13C26 14.6569 27.3431 16 29 16H37C38.6569 16 40 14.6569 40 13V5C40 3.34315 38.6569 2 37 2H29Z" fill="#FFFEED" />
            <path d="M21 22C19.3431 22 18 23.3431 18 25V33C18 34.6569 19.3431 36 21 36H29C30.6569 36 32 34.6569 32 33V25C32 23.3431 30.6569 22 29 22H21Z" fill="#FFFEED" />
          </svg>
          :
          <svg className={style.svgMenuClose} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 5C9 3.34315 10.3432 2 12 2H20C21.6569 2 23 3.34315 23 5V13C23 14.6569 21.6569 16 20 16H12C10.3432 16 9 14.6569 9 13V5ZM12 4C11.4477 4 11 4.44772 11 5V13C11 13.5523 11.4477 14 12 14H20C20.5523 14 21 13.5523 21 13V5C21 4.44772 20.5523 4 20 4H12Z" fill="#FFFEED" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 25C0 23.3431 1.34315 22 3 22H11C12.6569 22 14 23.3431 14 25V33C14 34.6569 12.6569 36 11 36H3C1.34315 36 0 34.6569 0 33V25ZM3 24C2.44772 24 2 24.4477 2 25V33C2 33.5523 2.44771 34 3 34H11C11.5523 34 12 33.5523 12 33V25C12 24.4477 11.5523 24 11 24H3Z" fill="#FFFEED" />
            <path fillRule="evenodd" clipRule="evenodd" d="M29 2C27.3431 2 26 3.34315 26 5V13C26 14.6569 27.3431 16 29 16H37C38.6569 16 40 14.6569 40 13V5C40 3.34315 38.6569 2 37 2H29ZM28 5C28 4.44772 28.4477 4 29 4H37C37.5523 4 38 4.44772 38 5V13C38 13.5523 37.5523 14 37 14H29C28.4477 14 28 13.5523 28 13V5Z" fill="#FFFEED" />
            <path fillRule="evenodd" clipRule="evenodd" d="M18 25C18 23.3431 19.3431 22 21 22H29C30.6569 22 32 23.3431 32 25V33C32 34.6569 30.6569 36 29 36H21C19.3431 36 18 34.6569 18 33V25ZM21 24C20.4477 24 20 24.4477 20 25V33C20 33.5523 20.4477 34 21 34H29C29.5523 34 30 33.5523 30 33V25C30 24.4477 29.5523 24 29 24H21Z" fill="#FFFEED" />
          </svg>
        }

      </div>


      {menuOpen &&
        <div className={style.nav__container}>
          <ul className={style.nav__list}>
            <li className={style.nav__list_item}>Menú</li>
            <li className={style.menuSeparator}></li>
            <li className={style.nav__list_item}>
              <Link href="/">
                <a onClick={() => closeMenu()} className={style.menu_item} >Home</a>
              </Link>
            </li>
            <li className={style.nav__list_item}>
              <Link href="/projects">
                <a onClick={() => closeMenu()} id="contact" className={style.menu_item} >Proyectos</a>
              </Link>
            </li>
            {/* <li className={style.nav__list_item}>
              <Link href="/academia">
                <a onClick={() => closeMenu()} id="contact" className={style.menu_item} >Academia</a>
              </Link>
            </li> */}
            <li className={style.nav__list_item}>
              <Link href="/news">
                <a onClick={() => closeMenu()} id="contact" className={style.menu_item} >Prensa</a>
              </Link>
            </li>
            <li className={style.nav__list_item}>
              <Link href="#contacto">
                <a onClick={() => closeMenu()} id="contact" className={style.menu_item} >Contacto</a>

              </Link>
            </li>
          </ul>
        </div>}
    </div>

  )
}

export default NavBar