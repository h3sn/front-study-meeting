console.log('modulesD');
const modulesD = () => {
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
};
console.log(modulesD());
