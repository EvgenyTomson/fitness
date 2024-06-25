export const getSeparateTime = (time: number): { minutes: number; seconds: number } => {
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor((time - seconds) / 60);

  return { minutes, seconds };
};
