import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  let active = useLocation();
  // let tarrifs = active.pathname === '/tariffs' ? s.isactive : '1';
  let examples = active.pathname === '/examples' ? s.isactive : '1';
  let reviews = active.pathname === '/reviews' ? s.isactive : '1';

  return (
    <nav className={s.nav}>
        <ul className={s.nav__list}>
          {/* <li className={s.nav__item}><NavLink to="/tariffs" className={s.logo + ' ' + tarrifs}>Тарифы</NavLink></li> */}
          <li className={s.nav__item}><NavLink to="/examples" className={s.logo + ' ' + examples}>Примеры работ</NavLink></li>
          <li className={s.nav__item}><NavLink to="/reviews" className={s.logo + ' ' + reviews}>Отзывы</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav;