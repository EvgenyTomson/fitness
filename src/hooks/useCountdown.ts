import { selectTarifStatus } from '@store/slices/tarifSlice';
import { reset, selectCountDown, tick } from '@store/slices/timerSlice';
import { AppDispatch } from '@store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useCountdown = (duration: number = 120, limit: number = 30) => {
  const dispatch = useDispatch<AppDispatch>();

  const countDown = useSelector(selectCountDown);

  const tarifsFetchStatus = useSelector(selectTarifStatus);

  useEffect(() => {
    if (duration <= 0 || tarifsFetchStatus !== 'fulfilled') {
      return;
    }

    dispatch(reset({ duration, limit }));
  }, [duration, limit, tarifsFetchStatus]);

  useEffect(() => {
    if (countDown <= 0 || tarifsFetchStatus !== 'fulfilled') {
      return;
    }

    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, countDown, tarifsFetchStatus]);
};
