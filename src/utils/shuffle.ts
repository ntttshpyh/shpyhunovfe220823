const shuffleArray = (arr: Array<any>) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

export default shuffleArray;
