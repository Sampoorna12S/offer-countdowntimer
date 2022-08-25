import { render, screen } from '@testing-library/react';
import OfferPage from './';

describe('Offer Page', () => {
  let mockData = {
    cash_value: 10,
    opt_in_url: 'https://www.jackpotjoy.com',
    count_down_duration: '01:00:10',
    start_time: new Date().toISOString(),
  };

  let offerPage: any;
  beforeEach(() => {
    offerPage = render(<OfferPage offerData={mockData} />);
  });
  // console.log('offff', offerPage);
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
