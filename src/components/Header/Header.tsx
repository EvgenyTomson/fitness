import DiscountTimer from '@components/DiscountTimer/DiscountTimer';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.title}>Скидка действует:</p>
      <DiscountTimer />
    </header>
  );
};

export default Header;
