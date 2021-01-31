import React, { FunctionComponent, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

type Props = {
  isActive: boolean;
  time: number;
  setTime: (seconds: number) => void;
};

export const Timer: FunctionComponent<Props> = ({
  isActive,
  time,
  setTime,
}) => {
  const styles = useStyles();
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, time, setTime]);

  return <div className={styles.timer}>{time}s</div>;
};

const useStyles = createUseStyles({
  timer: {
    color: 'white',
    fontSize: '3rem',
    padding: '2rem',
  },
  '@media screen and (max-width: 1000px)': {
    timer: {
      color: 'white',
      fontSize: 'unset',
      padding: '1em',
    },
  },
});
