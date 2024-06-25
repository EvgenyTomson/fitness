import { useRef } from 'react';
import styles from './Modal.module.scss';
import { useModalClose } from '@hooks/useModalClose';
import Portal from '@components/Portal/Portal';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useModalClose(onClose, rootRef);

  return (
    <Portal>
      <div className={styles.wrapper} ref={rootRef}>
        {children}
      </div>
    </Portal>
  );
};

export default Modal;
