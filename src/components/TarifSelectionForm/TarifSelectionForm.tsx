import TarifCard from '@components/TarifCard/TarifCard';
import { useEffect, useRef, useState } from 'react';
import styles from './TariffSelectionForm.module.scss';
import Checkbox from '@components/Checkbox/Checkbox';
import Button from '@components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTarifs,
  selectPopularTarifs,
  selectTarifError,
  selectTarifStatus,
} from '@store/slices/tarifSlice';
import { AppDispatch } from '@store/store';
import { Link } from 'react-router-dom';

const TariffSelectionForm = () => {
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector(selectTarifStatus);
  const error = useSelector(selectTarifError);
  const popularTarifs = useSelector(selectPopularTarifs);

  // Для задания размера лоадера, во избежание  сильных скачков после завершения загрузки
  const [width] = useState(window.innerWidth > 1200 ? 1200 : window.innerWidth);

  useEffect(() => {
    dispatch(fetchTarifs());
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedTariff) {
      // Имитируем отправку данных на сервер
      console.log('Selected tariff ID:', selectedTariff);
    }
  };

  if (status === 'pending') {
    return <div style={{ width: `${width / 1.66}px` }}>Loading...</div>;
  }

  if (error) {
    return <span style={{ color: 'red', width: `${width / 1.66}px` }}>{error}</span>;
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.tarifs}>
        {popularTarifs.map((tarif, i) => (
          <TarifCard
            key={tarif.id}
            tarif={tarif}
            onSelect={setSelectedTariff}
            index={i}
            selected={selectedTariff === tarif.id}
          />
        ))}
      </div>
      <p className={styles.text}>
        Следуя плану на&nbsp;3&nbsp;месяца, люди получают в&nbsp;2&nbsp;раза лучший результат, чем
        за&nbsp;1&nbsp;месяц
      </p>

      <div className={styles.accept}>
        <Checkbox />
        <p className={styles.agreement}>
          Я&nbsp;соглашаюсь с&nbsp;
          <Link to={'/rules'} className={styles.link} target="_blank">
            Правилами&nbsp;сервиса
          </Link>{' '}
          и&nbsp;условиями{' '}
          <Link to={'/legal'} className={styles.link} target="_blank">
            Публичной&nbsp;оферты
          </Link>
          .
        </p>
      </div>

      <Button disabled={!selectedTariff && !formRef.current?.checkValidity()}>Купить</Button>

      <p className={styles.textLow}>
        Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств
        по&nbsp;истечению купленного периода. Дальнейшие списания по&nbsp;тарифам участвующим
        в&nbsp;акции осуществляются по&nbsp;полной стоимости согласно оферте.
      </p>
    </form>
  );
};

export default TariffSelectionForm;
