const addTime = (
  startTime = '',
  hours = '0',
  minutes = '0',
  seconds = '0'
) => {
  if (startTime) {
    let finalTime = new Date(startTime);
    finalTime.setHours(finalTime.getHours() + Math.floor(+hours));
    finalTime.setMinutes(finalTime.getMinutes() + Math.floor(+minutes));
    finalTime.setSeconds(finalTime.getSeconds() + Math.floor(+seconds));
    return finalTime;
  }
  return new Date();
};

const getTimeRemaining = (e:string) => {
  const total = Date.parse(e) - Date.parse(new Date().toISOString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  return {
    total,
    hours,
    minutes,
    seconds,
  };
};

export default { addTime, getTimeRemaining };
