import DiscountStar from '@components/DiscountStar/DiscountStar';
import styles from './DiscountTarfCard.module.scss';
import { TTarif } from '@/types/tarif';
import classNames from 'classnames/bind';
import { memo } from 'react';
import { discountTarifsDataMock } from '@/consts/mockData';
import redCross from '../../assets/images/redCross.png';

const cx = classNames.bind(styles);

interface DiscountTarifCardProps {
  tarif: TTarif;
  index: number;
  onSelect: (id: string) => void;
  className?: string;
  selected?: boolean;
}

const DiscountTarifCard = memo<DiscountTarifCardProps>(function DiscountTarifCard({
  tarif,
  index,
  onSelect,
  className = '',
  selected = false,
}: DiscountTarifCardProps) {
  const mockTarifData = discountTarifsDataMock[index];

  const clx = cx({
    card: true,
    selected: selected,
  });

  return (
    <label key={tarif.id} onClick={() => onSelect(tarif.id)} className={clx + ' ' + className}>
      <div className={styles.upperBlock}>
        <div>
          <h3 className={styles.name}>{tarif.name}</h3>
          <span className={styles.standartPrice}>
            {mockTarifData?.oldPrice || 0}
            <img src={redCross} className={styles.cross} />
          </span>
        </div>
        <input
          type="radio"
          name="tariff"
          value={tarif.id}
          checked={selected}
          onChange={() => onSelect(tarif.id)}
          style={{ display: 'none' }}
        />

        <div className={styles.round}></div>
      </div>

      <span className={styles.discountPrice}>
        {tarif.price}
        <DiscountStar discount={mockTarifData?.discount || 0} className={styles.modalStar} />
      </span>
    </label>
  );
});

export default DiscountTarifCard;
