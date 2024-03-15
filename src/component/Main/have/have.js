import s from './have.module.scss';
import timer from '../../../img/Have/timer.png'
import cell from '../../../img/Have/cell.png'
import help24 from '../../../img/Have/help24.png'
import kach from '../../../img/Have/kach.png'

const Have = () => {
  return (
    <div className={s.have}>
      <h2 className={s.title}>Что Вы получите работая с нами?</h2>
      <p className={s.fromMe}>Для нас важно, чтобы клиент достигал своих целей в работе и мы сделаем все возможное для этого.</p>
      <div className={s.container}>
        <div className={s.haveItem}>
          <img className={s.ico} src={timer} alt='ico'/>
          <p className={s.info}>Выполнение работы в условленные сроки</p>
        </div>
        <div className={s.haveItem}>
          <img className={s.ico} src={kach} alt='ico'/>
          <p className={s.info}>Качественная работа</p>
        </div>
        <div className={s.haveItem}>
          <img className={s.ico} src={help24} alt='ico'/>
          <p className={s.info}>Поддержка 24/7 с нашими специалистами</p>
        </div>
        <div className={s.haveItem}>
          <img className={s.ico} src={cell} alt='ico'/>
          <p className={s.info}>Мы работаем над Вашими целями!</p>
        </div>
      </div>
    </div>
  );
}

export default Have;