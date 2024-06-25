import { IProvider } from '@/intl/Provider';
import Header from '@components/Header/Header';
import Main from '@components/Main/Main';

const MainPage = () => {
  return (
    <>
      <IProvider>
        <Header />
      </IProvider>
      <Main />
    </>
  );
};

export default MainPage;
