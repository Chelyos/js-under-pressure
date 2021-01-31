import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { ContainerFactory } from '../../components/container-factory';
import { CustomButton } from '../../components/custom-button';
import { initializationStart } from '../../store/initialization/action';
import { validationStart } from '../../store/validation/action';
import { createUseStyles } from 'react-jss';
import { consoleSlice } from '../../store/console';

export const Console = () => {
  const isActive = useSelector((state: RootState) => state.enonce.isActive);
  const code = useSelector((state: RootState) => state.editor.code);
  const indice = useSelector((state: RootState) => state.validation.indice);
  const { message, error } = useSelector((state: RootState) => state.console);
  const styles = useStyles();
  const dispatch = useDispatch();

  const onClick = async () => {
    dispatch(validationStart({ code, indice }));
  };

  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(consoleSlice.actions.clearConsole()),
      7000
    );
    return () => clearTimeout(timer);
  });

  const msg = message ? message.join() : null;
  const err = error ? error.join() : null;

  const onStart = () => {
    dispatch(initializationStart());
  };
  return (
    <ContainerFactory
      readonlyText={msg ? msg : err}
      color={message ? styles.message : styles.error}
      childComp={
        isActive ? (
          <CustomButton text={'Check'} onClick={onClick} />
        ) : (
          <CustomButton text={'Start'} onClick={onStart} />
        )
      }
    />
  );
};

const useStyles = createUseStyles({
  message: {
    color: 'green',
  },
  error: {
    color: 'red',
  },
});
