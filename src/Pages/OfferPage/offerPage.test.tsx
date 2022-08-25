import { render } from '@testing-library/react';
import OfferPage from './';
import { MOCKDATA } from '../../constants';

describe('Offer Page', () => {
  let mockData = MOCKDATA.MOCKDATA_VALUES;

  let offerPage: any;
  beforeEach(() => {
    offerPage = render(<OfferPage offerData={mockData} />);
  });
  it('Top Image renders', () => {
    expect(offerPage.queryByTestId('top-img')).toBeInTheDocument();
  });

  it('Time Element renders', () => {
    expect(offerPage.queryByTestId('timer-element')).toBeInTheDocument();
  });

  it('Opt in Button renders', () => {
    expect(offerPage.queryByTestId('opt-in-button')).toBeInTheDocument();
  });

  it('Free Cash Element renders', () => {
    expect(offerPage.queryByTestId('free-cash-element')).toBeInTheDocument();
  });
});
