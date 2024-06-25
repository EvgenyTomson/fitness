import { LegalPageLazy } from '@/pages/LegalPage';
import MainPage from '@/pages/MainPage/MainPage';
import { RulesPageLazy } from '@/pages/RulesPage';
import { StoreProvider } from '@store/StoreProvider';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <StoreProvider>
        <Routes>
          <Route
            path="/legal"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LegalPageLazy />
              </Suspense>
            }
          />
          <Route
            path="/rules"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RulesPageLazy />
              </Suspense>
            }
          />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </StoreProvider>
    </>
  );
}

export default App;
