const OptInButton = ({ data, displayElement }: DataAndDisplayProps) => {
  const onClickButton = () => {
    window.open(data?.opt_in_url, '_blank');
  };

  return (
    <div
      style={{
        paddingTop: '5%',
      }}
      data-testid='optin-element'
      className={displayElement ? '' : 'hideElement'}
    >
      <button
        data-testid='opt-in-button'
        className='optBtn'
        onClick={onClickButton}
      >
        Opt in
      </button>
    </div>
  );
};

export default OptInButton;
