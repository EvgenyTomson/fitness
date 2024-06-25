import styles from './DiscountTimer.module.scss';
import { fixedLengthTimeString } from '@utils/fixedLengthTimeString';
import classNames from 'classnames/bind';
import LastChanceModal from '@components/LastChanceModal/LastChanceModal';
import { selectTimer } from '@store/slices/timerSlice';
import { useSelector } from 'react-redux';
import { useCountdown } from '@hooks/useCountdown';
import { getSeparateTime } from '@utils/index';
import { useIntl } from 'react-intl';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const DiscountTimer = () => {
  useCountdown();

  const { formatMessage } = useIntl();
  const { countDown, isFinished, showWarning } = useSelector(selectTimer);
  const { minutes, seconds } = getSeparateTime(countDown);

  // Добавляет задержку перед открытием модалки
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (isFinished) {
      setTimeout(() => setShowModal(true), 1200);
    }
  }, [isFinished]);

  const className = cx({
    time: true,
    warning: showWarning,
    blink: showWarning && !isFinished,
  });

  return (
    <div className={styles.timer}>
      <div className={styles.timeWrapper}>
        <span className={className}>{fixedLengthTimeString(minutes)}</span>
        <span className={styles.discription}>
          {formatMessage({ id: 'minutes' }, { count: minutes })}
        </span>
      </div>

      <span className={className}>:</span>

      <div className={styles.timeWrapper}>
        <span className={className}>{fixedLengthTimeString(seconds)}</span>
        <span className={styles.discription}>
          {formatMessage({ id: 'seconds' }, { count: seconds })}
        </span>
      </div>

      {showModal && <LastChanceModal />}
    </div>
  );
};

export default DiscountTimer;
