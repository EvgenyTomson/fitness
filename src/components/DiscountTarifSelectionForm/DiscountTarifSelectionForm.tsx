import { useRef, useState } from 'react';
import styles from './DiscountTarifSelectionForm.module.scss';
import { useSelector } from 'react-redux';
import {
  selectDiscountTarifs,
  selectTarifError,
  selectTarifStatus,
} from '@store/slices/tarifSlice';
import Button from '@components/Button/Button';
import DiscountTarifCard from '@components/DiscountTarfCard/DiscountTarfCard';

const DiscountTarifSelectionForm = () => {
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);

  const status = useSelector(selectTarifStatus);
  const error = useSelector(selectTarifError);
  const discountTarifs = useSelector(selectDiscountTarifs);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedTariff) {
      // Имитируем отправку данных на сервер
      console.log('Selected tariff ID:', selectedTariff);
    }
  };

  if (status === 'pending') {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span style={{ color: 'red' }}>{error}</span>;
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.tarifs}>
        {discountTarifs.map((tarif, i) => (
          <DiscountTarifCard
            key={tarif.id}
            tarif={tarif}
            onSelect={setSelectedTariff}
            index={i}
            selected={selectedTariff === tarif.id}
          />
        ))}
      </div>

      <Button
        disabled={!selectedTariff && !formRef.current?.checkValidity()}
        className={`${styles.modalButton} ${styles.extra}`}
      >
        Начать&nbsp;тренироваться
      </Button>
    </form>
  );
};
export default DiscountTarifSelectionForm;
