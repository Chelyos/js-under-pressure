import React, { FunctionComponent, MouseEventHandler } from 'react';
import { Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

type Props = {
  onClick: MouseEventHandler<HTMLElement>;
  text: string;
};

export const CustomButton: FunctionComponent<Props> = ({ onClick, text }) => {
  const styles = useStyles();
  return (
    <Button className={styles.button} onClick={onClick}>
      {text}
    </Button>
  );
};

const useStyles = createUseStyles({
  button: {
    width: '140px',
    height: '50px',
    borderRadius: '20px',
  },
});
