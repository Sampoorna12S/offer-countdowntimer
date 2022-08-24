import { useEffect, useState } from 'react';
import './style.css';
import Timer from './timer';
import Helpers from '../../helpers';
import { TIME } from '../../constants';

function OfferPage({ offerData }: OfferPageProps) {
  const data = offerData;
  const [displayElement, setDisplay] = useState(true);
  const onClickButton = () => {
    window.open(data?.opt_in_url, '_blank');
  };

  const endTimer = () => {
    setDisplay(false);
    Helpers.LocalStorage.OfferData.remove();
  };

  return (
    <div className='container'>
      <img
        src='/images/top_image_scale_1x.png'
        style={{ visibility: displayElement ? 'unset' : 'hidden' }}
      />
      <p style={{ visibility: displayElement ? 'unset' : 'hidden' }}>
        Get your free £{data?.cash_value} now
      </p>
      <Timer data={offerData} endTimer={endTimer} />
      <div
        style={{
          visibility: displayElement ? 'unset' : 'hidden',
          paddingTop: '5%',
          display: 'inline-grid',
        }}
      >
        <button className='optBtn' onClick={onClickButton}>
          Opt - in
        </button>
      </div>
    </div>
  );
}

export default OfferPage;
