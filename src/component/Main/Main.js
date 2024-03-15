import s from './Main.module.scss';
import './Main.css';
import Abaut from './abaut-us/abaut-us';
import Have from './have/have';
import AnimAfter from './anim-after/anim-after';
import Who from './who/Who';

const Main = () => {



  return (
    <main className={s.main}>
      <div className={s.cont}>
        <h1 className={s.title}>ADVMedia</h1>
      </div>
      <Abaut />
      <AnimAfter ider='1'/>
      <Have />
      <AnimAfter ider='2'/>
      <Who />
    </main>
  );
};

export default Main;