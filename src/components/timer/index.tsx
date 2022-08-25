import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import Helpers from '../../helpers';
import { TIME } from '../../constants';

const Timer = ({ data, endTimer }: TimerProps) => {
  let interval: NodeJS.Timer;
  const [timer, setTimer] = useState<string | null>(null);
  const duration = data?.count_down_duration?.split(':');

  const startTimer = (e: string) => {
    let { total, hours, minutes, seconds } =
      Helpers.Time.Timer.getTimeRemaining(e);
    if (total >= 1000) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      );
    } else {
      clearInterval(interval);
      setTimer(TIME.TIME_VALUES.INITIAL_TIME);
      endTimer();
    }
  };

  const clearTimer = (newTime: Date) => {
    if (!interval)
      interval = setInterval(() => {
        startTimer(newTime.toISOString());
      }, 1000);
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
    <div data-testid='timer-element'>
      <h1 data-testid='screen-timer' className='timerStyle'>
        {timer}
      </h1>
      <div style={{ marginLeft: '45px' }}>
        <span>Hours</span>
        <span>Minutes</span>
        <span>Seconds</span>
      </div>
    </div>
  ) : (
    <h1 data-testid='timer-element' className='timerStyle'>
      Loading...
    </h1>
  );
};

export default Timer;
