import DiscountStar from '@components/DiscountStar/DiscountStar';
import styles from './TarifCard.module.scss';
import { TTarif } from '@/types/tarif';
import classNames from 'classnames/bind';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectIsFinished } from '@store/slices/timerSlice';
import { tarifsDataMock } from '@/consts/mockData';

const cx = classNames.bind(styles);

interface TarifCardProps {
  tarif: TTarif;
  index: number;
  onSelect: (id: string) => void;
  className?: string;
  selected?: boolean;
}

const TarifCard = memo<TarifCardProps>(function TarifCard({
  tarif,
  index,
  onSelect,
  className = '',
  selected = false,
}: TarifCardProps) {
  const mockTarifData = tarifsDataMock[index];

  const isFinished = useSelector(selectIsFinished);
  const price = isFinished ? mockTarifData?.oldPrice : tarif.price;

  const clx = cx({
    card: true,
    selected: selected,
  });

  return (
    <label key={tarif.id} onClick={() => onSelect(tarif.id)} className={clx + ' ' + className}>
      <input
        type="radio"
        name="tariff"
        value={tarif.id}
        checked={selected}
        onChange={() => onSelect(tarif.id)}
        style={{ display: 'none' }}
      />
      {!isFinished && <DiscountStar discount={mockTarifData?.discount} />}
      <h3 className={styles.name}>{tarif.name}</h3>
      <div className={styles.prices}>
        <span className={styles.discountPrice}>{price}</span>
        {!isFinished && (
          <span className={styles.standartPrice}>{mockTarifData?.oldPrice || 0}</span>
        )}
      </div>
      <p className={styles.text}>{mockTarifData?.text || 'А я тариф. Просто тариф'}</p>
    </label>
  );
});

export default TarifCard;
