import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import Helpers from '../../helpers';
import { TIME } from '../../constants';

const Timer = ({ data, endTimer }: TimerProps) => {
  const Ref = useRef<NodeJS.Timer | null>(null);
  const [timer, setTimer] = useState<string | null>(null);
  const duration = data?.count_down_duration?.split(':');

  const startTimer = (e: string) => {
    let { total, hours, minutes, seconds } =
      Helpers.Time.Timer.getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      );
    } else {
      setTimer(TIME.TIME_VALUES.INITIAL_TIME);
      endTimer();
    }
  };

  const clearTimer = (newTime: Date) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(newTime.toISOString());
    }, 1000);
    Ref.current = id;
  };

  useEffect(() => {
    if (duration)
      clearTimer(
        Helpers.Time.Timer.addTime(
          data?.start_time,
          duration[0],
          duration[1],
          duration[2]
        )
      );
  }, [data?.count_down_duration]);

  return timer ? (
    <div>
      <h1 className='timerStyle'>{timer}</h1>
      <div style={{ marginLeft: '45px' }}>
        <span className='paddingRight'>Hours</span>
        <span className='paddingRight'>Minutes</span>
        <span className='paddingRight'>Seconds</span>
      </div>
    </div>
  ) : (
    <h1 className='timerStyle'>Loading...</h1>
  );
};

export default Timer;
