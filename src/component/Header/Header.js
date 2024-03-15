import s from './Header.module.scss'
import menu from '../../img/icons/menu.png'
import { useState } from 'react';
import Nav from '../Nav/Nav';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [useMenu, isUseMenu] = useState(false);
  const widthPhone = useMediaQuery({ query: '(max-width: 767px)' })
  const widthTablet = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <header className={s.header}>
      <NavLink to="/main" className={s.logo}>ADV MEDIA</NavLink>


      {widthTablet && <Nav />}
      {widthPhone && <img src={menu} alt='menu' onClick={() => isUseMenu(!useMenu)} className={s.menu}/>}
      {widthPhone && useMenu && <div className={s.nav}><Nav /></div>}
    </header>
  );
}

export default Header;