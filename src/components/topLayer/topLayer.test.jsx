import { render } from '@testing-library/react';
import TopLayer from './';
import { MOCKDATA } from '../../constants';

describe('Opt In Button Functionality', () => {
  let optInBtn = render(
    <TopLayer data={MOCKDATA.MOCKDATA_VALUES} displayElement={false} />
  );
  it('opt In button', () => {
    expect(optInBtn.queryByTestId('top-img')).toHaveClass('hideElement');
    expect(optInBtn.queryByTestId('free-cash-element')).toHaveClass('hideElement');
  });
});
