import s from './abaut-us.module.scss'
import pho from '../../../img/Main/num1.jpg'

const Abaut = () => {
  return (
    <div className={s.block}>
        <div className={s.container}>
          <h2 className={s.abaut}>О нас</h2>
          <p className={s.info}>Наша компания берёт своё начало ещё с 2015 года. За это время мы научились находить подход к любой тематике и успешно продвигаем группы в ВК!</p>
          <img src={pho} alt='abaut-us' className={s.pho}/>
          <p className={s.info}>Наша команда найдёт подход к любой задачи которая будет стоять перед нами.</p>
          <p className={s.info}>Мы создаём к каждому клиенту индивидуальный подход и решение его задач</p>
        </div>
        <img src={pho} alt='abaut-us' className={s.pho2}/>
      </div>
  );
}

export default Abaut;