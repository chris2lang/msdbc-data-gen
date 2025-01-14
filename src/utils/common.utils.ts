export const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const padNumber = (num: number, size: number): string => {
  return num.toString().padStart(size, "0");
};

export const generateRandomPrice = (min: number, max: number): number => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

export const generateRandomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
