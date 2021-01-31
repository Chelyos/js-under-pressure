import React, { Fragment, FunctionComponent, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { ReadonlyText } from '../readonly-text';

type Props = {
  childComp: ReactNode;
  readonlyText: string | null;
  color?: string;
};

export const ContainerFactory: FunctionComponent<Props> = ({
  childComp,
  readonlyText,
  color,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Fragment>{childComp}</Fragment>
      {color ? (
        <ReadonlyText
          text={readonlyText}
          styles={`${styles.readonly} ${color}`}
        />
      ) : (
        <ReadonlyText text={readonlyText} styles={styles.readonly} />
      )}
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '15vh',
    backgroundColor: '#3B464F',
    borderRadius: '20px',
    padding: '10px',
  },
  readonly: {
    height: '15vh',
    minWidth: '80%',
    margin: '15px',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '20px',
    overflowY: 'scroll',
  },
  '@media screen and (max-width: 1000px)': {
    readonly: {
      minWidth: '50%',
    },
  },
});
