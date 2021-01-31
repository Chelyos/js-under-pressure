import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

type Props = {
  icon: ReactNode;
  variant: string;
  onClick: MouseEventHandler<HTMLElement>;
};

export const RoundedButton: FunctionComponent<Props> = ({
  onClick,
  icon,
  variant,
}) => {
  const styles = useStyles();
  return (
    <Button className={styles.button} variant={variant} onClick={onClick}>
      {icon}
    </Button>
  );
};

const useStyles = createUseStyles({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '100%',
  },
});
