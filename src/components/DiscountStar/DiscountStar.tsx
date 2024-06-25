import styles from './DiscountStar.module.scss';
import star from '../../assets/images/star.svg';

interface DiscountStarProps {
  discount?: number;
  className?: string;
}

const DiscountStar = ({ discount = 50, className = '' }: DiscountStarProps) => {
  return (
    <div
      className={`${styles.star} ${className}`}
      style={{
        backgroundImage: `url(${star})`,
      }}
    >
      <span className={styles.discount}>{`-${discount}%`}</span>
    </div>
  );
};

export default DiscountStar;
