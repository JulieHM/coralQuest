export const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const delay = (ms: number | undefined) =>
  new Promise((res) => setTimeout(res, ms));
