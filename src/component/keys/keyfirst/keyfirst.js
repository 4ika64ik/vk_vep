import s from './keytwo.module.scss';
import key11 from '../../../img/key/keyfirst/key11.jpg';
import key12 from '../../../img/key/keyfirst/key12.jpg';
import key13 from '../../../img/key/keyfirst/key13.jpg';
import key21 from '../../../img/key/keytwo/key21.jpg';
import key22 from '../../../img/key/keytwo/key22.jpg';
import key23 from '../../../img/key/keytwo/key23.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const KeyFirst = () => {
  return (
    <Carousel swipeable={false} showStatus={false} showThumbs={false} className={s.carusel}>
      <div className={s.container}>
        <p className={s.name}>Одна из работ по Яндекс рекламе. ( Был небольшой бюджет)</p>
        <div className={s.block}>
          <img src={key11} className={s.keyPho} alt='design'/>
          <img src={key12} className={s.keyPho} alt='design'/>
          <img src={key13} className={s.keyPho} alt='design'/>
        </div>
        <p className={s.item}>1. Как выглядела реклама в Яндексе ( С рекламного кабинета)</p>
        <p className={s.item}>2. Готовый дизайн группы от нашего дизайнера</p>
        <p className={s.item}>3. Привлекли около 250+- новых целевых подписчиков</p>
        <p className={s.item}>4. Скрин с рекламного кабинета ( Для Вашего доверия)</p>
      </div>
      <div className={s.container}>
        <p className={s.name}>Одна из работ по Яндекс рекламе.</p>
        <div className={s.block}>
          <img src={key21} className={s.keyPho} alt='design'/>
          <img src={key22} className={s.keyPho} alt='design'/>
          <img src={key23} className={s.keyPho} alt='design'/>
        </div>
        <p className={s.item}>1. Как выглядела реклама в Яндексе ( С рекламного кабинета)</p>
        <p className={s.item}>2. Готовый дизайн группы от нашего дизайнера</p>
        <p className={s.item}>3. Привлекли 500+ новых целевых подписчиков</p>
        <p className={s.item}>4. Скрин с рекламного кабинета ( Для Вашего доверия)</p>
      </div>
      </Carousel>
  );
}

export default KeyFirst;