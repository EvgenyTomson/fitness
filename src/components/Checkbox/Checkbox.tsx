import { useState } from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = () => {
  const [isChecked, setChecked] = useState(false);

  const handleChande = () => {
    setChecked((prev) => !prev);
  };

  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={isChecked} onChange={handleChande} required />
      <div className={styles.checkbox__checkmark}></div>
    </label>
  );
};

export default Checkbox;
