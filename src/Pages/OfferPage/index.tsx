import { useState } from 'react';
import './style.css';
import Timer from '../../components/timer';
import Helpers from '../../helpers';
import OptInButton from '../../components/optInButton';
import TopLayer from '../../components/topLayer';

function OfferPage({ offerData }: OfferPageProps) {
  const [displayElement, setDisplay] = useState(true);

  const endTimer = () => {
    setDisplay(false);
    Helpers.LocalStorage.OfferData.remove();
  };

  return (
    <div className='container'>
      <TopLayer data={offerData} displayElement={displayElement} />
      <Timer data={offerData} endTimer={endTimer} />
      <OptInButton data={offerData} displayElement={displayElement} />
    </div>
  );
}

export default OfferPage;
