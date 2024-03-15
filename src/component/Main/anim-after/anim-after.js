import { useEffect } from 'react';
import './anim-after.css'

const AnimAfter = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`animated-element${props.ider}`);
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop < window.innerHeight) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div id={`animated-element${props.ider}`} className='afterOne'></div>
  );
}

export default AnimAfter;