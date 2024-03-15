import s from './keytwo2.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import f1 from '../../../img/key/keythree/f1.jpg'
import f2 from '../../../img/key/keythree/f2.jpg'
import f3 from '../../../img/key/keythree/f3.jpg'
import f4 from '../../../img/key/keythree/f4.jpg'
import f5 from '../../../img/key/keythree/f5.jpg'
import f6 from '../../../img/key/keythree/f6.jpg'
import f7 from '../../../img/key/keythree/f7.jpg'
import f8 from '../../../img/key/keythree/f8.jpg'


const KeyTwo = () => {
  return (
    <div className={s.container}>
      <Carousel swipeable={false} showStatus={false} showThumbs={false} className={s.carusel}>
          <div className={s.block}>
            <div className={s.fir}>
              <p className={s.title}>До работы</p>
              <img src={f1} alt='from' className={s.immg}/>
            </div>
            <div className={s.fir}>
              <p className={s.title}>После проделанной работы</p>
              <img src={f2} alt='from' className={s.immg}/>
            </div>
            <p>Сделали полный дизайн, полное наполнение, привлекли 18000+ целевых подписчиков</p>
          </div>
          <div className={s.block}>
            <p className={s.title}>До работы</p>
            <img src={f3} alt='from' className={s.immg}/>
            <p className={s.title}>После проделанной работы</p>
            <img src={f4} alt='from' className={s.immg}/>
            <p>Сделали полный дизайн, полное наполнение, привлекли 6500+ целевых подписчиков</p>
          </div>
          <div className={s.block}>
            <p className={s.title}>До работы</p>
            <img src={f5} alt='from' className={s.immg}/>
            <p className={s.title}>После проделанной работы</p>
            <img src={f6} alt='from' className={s.immg}/>
            <p>Сделали полный дизайн, полное наполнение, привлекли 13500+ целевых подписчиков</p>
          </div>
          <div className={s.block}>
            <p className={s.title}>До работы</p>
            <img src={f7} alt='from' className={s.immg}/>
            <p className={s.title}>После проделанной работы</p>
            <img src={f8} alt='from' className={s.immg}/>
            <p>Сделали полный дизайн, полное наполнение, привлекли 30000+ целевых подписчиков</p>
          </div>
      </Carousel>
    </div>
  );
}

export default KeyTwo;