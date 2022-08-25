import './style.css';
const TopLayer = ({ data, displayElement }: DataAndDisplayProps) => {
  return (
    <>
      <img
        data-testid='top-img'
        className={`topImg ${displayElement ? '' : 'hideElement'}`}
      />
      <p
        data-testid='free-cash-element'
        className={displayElement ? '' : 'hideElement'}
      >
        Get your free £{data?.cash_value} now
      </p>
    </>
  );
};

export default TopLayer;
