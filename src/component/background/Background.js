import './Bacground.scss'
import vid from '../../img/fon.mp4';
import foing from '../../img/foimg.jpg'

const Bacground = () => {
  return (
    <div>
      <img src={foing} alt='bacground' className='backgrounderImg' />
      <video autoPlay loop muted>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Bacground;