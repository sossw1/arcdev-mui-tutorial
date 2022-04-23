import Lottie from 'react-lottie';

import animationData from '../animations/landinganimation/data';

export default function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
  )
};
