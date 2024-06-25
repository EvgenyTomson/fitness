import styles from './Button.module.scss';

import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { selectIsFinished, selectShowWarning } from '@store/slices/timerSlice';

const cx = classNames.bind(styles);

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, type = 'submit', disabled = false, className = '' }: Props) => {
  const isFinished = useSelector(selectIsFinished);
  const showWarning = useSelector(selectShowWarning);

  const cln = cx({
    button: true,
    blink: showWarning && !isFinished,
  });

  return (
    <button className={`${cln} ${className}`} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
