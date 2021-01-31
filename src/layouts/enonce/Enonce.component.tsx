import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerFactory } from '../../components/container-factory';
import { Timer } from '../../components/timer';
import { enonceSlice } from '../../store/enonce';
import { RootState } from '../../store/reducer';

export const Enonce = () => {
  const enonce = useSelector((state: RootState) => state.enonce);
  const { message, isActive, timer } = enonce;
  const dispatch = useDispatch();

  React.useEffect(() => {}, [timer]);

  const setTimer = (time: number) => {
    dispatch(enonceSlice.actions.enonceTimer(time));
  };
  return (
    <ContainerFactory
      readonlyText={message}
      childComp={<Timer isActive={isActive} time={timer} setTime={setTimer} />}
    />
  );
};
