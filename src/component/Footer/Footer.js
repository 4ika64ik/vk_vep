import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <a href='https://vk.com/mediaadv' className={s.item}>Наша группа ВК</a>
      <a href='https://vk.com/im?sel=-224225125' className={s.item}>Написать нам</a>
    </footer>
  );
}

export default Footer