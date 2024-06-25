import { useState } from 'react';
import styles from './LastChanceModal.module.scss';
import Modal from '@components/Modal/Modal';
import Xbutton from '@components/Xbutton/Xbutton';
import DiscountTarifSelectionForm from '@components/DiscountTarifSelectionForm/DiscountTarifSelectionForm';

const LastChanceModal = () => {
  const [isModal, setIsModal] = useState(true);

  const handleModalClose = () => {
    setIsModal(false);
  };

  if (!isModal) {
    return null;
  }

  return (
    <Modal onClose={handleModalClose}>
      <div className={styles.modal}>
        <span className={styles.hot}>горящее предложение</span>
        <h2 className={styles.title}>
          Не&nbsp;упусти&nbsp;свой <span className={styles.titleGreen}>последний&nbsp;шанс</span>
        </h2>
        <div className={styles.discount}>
          <p className={styles.text}>
            Мы знаем, как трудно начать.. <span className={styles.textDark}>Поэтому!</span>
          </p>
          <span className={styles.textСircled}>
            Дарим скидку для <span className={styles.textGreen}>лёгкого старта&nbsp;🏃‍♂️</span>
          </span>
        </div>
        <p className={styles.prepare}>Посмотри, что мы для тебя приготовили&nbsp;🔥</p>
        <DiscountTarifSelectionForm />
        <Xbutton onClick={handleModalClose} />
      </div>
    </Modal>
  );
};

export default LastChanceModal;
