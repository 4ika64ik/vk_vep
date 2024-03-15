import s from './Who.module.scss';

const Who = () => {
  return (
    <div className={s.who}>
      <h2 className={s.title}>Как мы работаем?</h2>
        <div className={s.content}>
          <p className={s.item}>Мы используем только официальные сервисы для продвижения!</p>
          <p className={s.item}>Подбираем площадки для рекламы Вашей группы в соответствии с тематикой</p>
          <p className={s.item}>Аудиторию для показа рекламы собираем с таких платформ как: Яндекс дзен, ТикТок, Телеграмм, Ютуб и другие</p>
          <p className={s.item}>Вам не нужно ждать неделями на первый результат, так как он не заставит себя долго ждать.</p>
          <p className={s.item}>Клиенты и подписчики у Вас будут уже с первых дней работы рекламы!</p>
        </div>
    </div>
  );
}

export default Who;