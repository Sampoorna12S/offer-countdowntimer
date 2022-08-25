import { render } from '@testing-library/react';
import OptInButton from './';
import { MOCKDATA } from '../../constants';

describe('Opt In Button Functionality', () => {
  let optInBtn = render(
    <OptInButton data={MOCKDATA.MOCKDATA_VALUES} displayElement={false} />
  );
  it('Opt In button', () => {
    expect(optInBtn.queryByTestId('optin-element')).toHaveClass('hideElement');
  });
});
