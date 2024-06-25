import { IntlProvider } from 'react-intl';
import { messages } from './mesages';

const locale = 'ru';

export const IProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]} defaultLocale="ru">
      {children}
    </IntlProvider>
  );
};
