import styles from './Main.module.scss';
import man from '../../assets/images/man.png';
import TariffSelectionForm from '@components/TarifSelectionForm/TarifSelectionForm';

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Выберите подходящий тарифный&nbsp;план</h1>

      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={man} alt="Фотография споривного мужчины" />
        </div>

        <TariffSelectionForm />
      </div>
    </main>
  );
};

export default Main;
