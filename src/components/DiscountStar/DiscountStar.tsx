import styles from './DiscountStar.module.scss';

interface DiscountStarProps {
  discount?: number;
  className?: string;
}

const DiscountStar = ({ discount = 50, className = '' }: DiscountStarProps) => {
  return (
    <div className={`${styles.star} ${className}`}>
      <span className={styles.discount}>{`-${discount}%`}</span>
    </div>
  );
};

export default DiscountStar;
