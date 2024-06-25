type MessageKey = 'minutes' | 'seconds';

interface Messages {
  [key: string]: {
    [key in MessageKey]: string;
  };
}

export const messages: Messages = {
  ru: {
    minutes: '{count, plural, one {минута} few {минуты} many {минут} other {минуты}}',
    seconds: '{count, plural, one {секунда} few {секунды} many {секунд} other {секунды}}',
  },
};
