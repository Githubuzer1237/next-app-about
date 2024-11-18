
import Link from 'next/link'
import s from './Header.module.css'
const Header = () => {
  return (
  <>
         <header>
         <div className={s.container}>
         <nav className={s.nav}>
             <Link href='about'>About</Link>
             <Link href='about'>contact</Link>
             <Link href='about'>more</Link>

         </nav>
         </div>
</header>
  </>
  )
}

export default Header
