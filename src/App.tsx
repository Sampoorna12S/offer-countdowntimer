import { useEffect, useState } from 'react';
import Api from './api';
import './App.css';
import Helpers from './helpers';
import OfferPage from './Pages/OfferPage';
import background from './assests/background_scale_2x.jpeg';

function App() {
  const [offerData, setOfferData] = useState<OfferData>(null);

  const setData = async () => {
    let localOfferData = Helpers.LocalStorage.OfferData.get();
    if (localOfferData) {
      setOfferData(localOfferData);
    } else {
      let response = await Api.OfferData.get();
      if (response) response.start_time = new Date().toISOString();
      Helpers.LocalStorage.OfferData.set(response);
      setOfferData(response);
    }
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <div className='App'>
      <OfferPage offerData={offerData} />
    </div>
  );
}

export default App;
