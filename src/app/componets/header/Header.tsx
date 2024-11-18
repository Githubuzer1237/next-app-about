
import Link from 'next/link'
import s from './Header.module.css'
const Header = () => {
  return (
  <>
         <header>
         <div className={s.container}>
         <nav className={s.nav}>
             <Link className={s.silka} href='/about'>About</Link>
             <Link className={s.silka} href='/about'>contact</Link>
             <Link className={s.silka} href='/about'>more</Link>

         </nav>
         </div>
</header>
  </>
  )
}

export default Header
